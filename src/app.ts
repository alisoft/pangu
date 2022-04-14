import express from "express";
import { graphqlHTTP } from "express-graphql";
import { createClient } from "redis";
import connectRedis from "connect-redis";
import session from "express-session";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import cors from "cors";
import passport from "passport";
import httpStatus from "http-status";
import { auth as grqphQlAuth } from "./middlewares/graphql-auth";
import config from "./config/config";
import morgan from "./config/morgan";
import { jwtStrategy } from "./config/passport";
import authLimiter from "./middlewares/rateLimiter";
import { errorConverter, errorHandler } from "./middlewares/error";
import ApiError from "./utils/ApiError";
import schema from "./schema";
import routes from "./routes/v1";
const xss = require("xss-clean");
import { useStatic, useRouter } from "./server";

const app = express();

useStatic(app);

useRouter(app);

if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors<any>());

const RedisStore = connectRedis(session);
const redisClient = createClient({
  url: `redis://${config.redis.url}:${config.redis.port}`,
  password: config.redis.password,
  database: config.redis.database,
});
redisClient.connect().catch(console.error);

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: config.session.secret,
    resave: false,
  })
);

// jwt authentication
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === "production") {
  app.use("/api/auth", authLimiter);
}

// v1 api routes
app.use("/api", routes);

app.post(
  "/graphql",
  grqphQlAuth(),
  graphqlHTTP((request) => ({
    schema,
    context: ((req) => ({
      // @ts-ignore
      user: req.user,
    }))(request),
    graphiql: true,
  }))
);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
