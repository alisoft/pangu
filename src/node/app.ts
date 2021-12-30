import express from "express";
import { graphqlHTTP } from "express-graphql";
import path from "path";
import fs from "fs";
import redis from "redis";
import connectRedis from "connect-redis";
import session from "express-session";
import { renderToString } from "vue/server-renderer";
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
const manifest = require("../../dist/node/ssr-manifest.json");
const homePath = path.join(
  __dirname,
  "../../dist",
  "node",
  manifest["home.js"]
);
const createHomeApp = require(homePath).default;

const adminPath = path.join(
  __dirname,
  "../../dist",
  "node",
  manifest["admin.js"]
);
const createAdminApp = require(adminPath).default;

const mobilePath = path.join(
  __dirname,
  "../../dist",
  "node",
  manifest["mobile.js"]
);
const createMobileApp = require(mobilePath).default;

const app = express();

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
const redisClient = redis.createClient(config.redis.port, config.redis.url, {
  password: config.redis.password,
  db: config.redis.database,
  connect_timeout: 3600,
});

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: config.session.secret,
    resave: false,
  })
);

app.use(
  "/img",
  express.static(path.join(__dirname, "../../dist/client", "img"))
);
app.use("/js", express.static(path.join(__dirname, "../../dist/client", "js")));
app.use(
  "/video",
  express.static(path.join(__dirname, "../../dist/client", "video"))
);
app.use(
  "/css",
  express.static(path.join(__dirname, "../../dist/client", "css"))
);
app.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "../../dist/client", "favicon.ico"))
);
app.use(
  "/manifest.json",
  express.static(path.join(__dirname, "../../dist/client", "manifest.json"))
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

const homeTemplate = fs.readFileSync(
  path.join(__dirname, "../../dist/client/home.html"),
  "utf-8"
);

const appTemplate = fs.readFileSync(
  path.join(__dirname, "../../dist/client/admin.html"),
  "utf-8"
);

const mobileTemplate = fs.readFileSync(
  path.join(__dirname, "../../dist/client/mobile.html"),
  "utf-8"
);

app.get("/", async (req, res) => {
  const { app } = createHomeApp();

  const appContent = await renderToString(app);

  const html = homeTemplate
    .toString()
    .replace('<div id="app">', `<div id="app">${appContent}`);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});
app.get("/admin/*", async (req, res) => {
  const { app, router } = createAdminApp();

  await router.push(req.url);
  await router.isReady();

  const appContent = await renderToString(app);

  const html = appTemplate
    .toString()
    .replace('<div id="app">', `<div id="app">${appContent}`);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});
app.get("/mobile/*", async (req, res) => {
  const { app, router } = createMobileApp();

  await router.push(req.url);
  await router.isReady();

  const appContent = await renderToString(app);

  const html = mobileTemplate
    .toString()
    .replace('<div id="app">', `<div id="app">${appContent}`);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

app.get("/admin", async (req, res, next) => {
  res.status(301).redirect("/admin/");
  next();
});
app.get("/mobile", async (req, res, next) => {
  res.status(301).redirect("/mobile/");
  next();
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
