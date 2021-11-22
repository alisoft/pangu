const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const path = require("path");
const fs = require("fs");
const { renderToString } = require("vue/server-renderer");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const passport = require("passport");
const httpStatus = require("http-status");
const config = require("./config/config");
const morgan = require("./config/morgan");
const { jwtStrategy } = require("./config/passport");
const { authLimiter } = require("./middlewares/rateLimiter");
const routes = require("./routes/v1");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const schema = require("./schema");
const manifest = require("../../dist/node/ssr-manifest.json");
const homePath = path.join(
  __dirname,
  "../../dist",
  "node",
  manifest["home.js"]
);
const createHomeApp = require(homePath).default;

const appPath = path.join(
  __dirname,
  "../../dist",
  "node",
  manifest["admin.js"]
);
const createApp = require(appPath).default;

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
app.options("*", cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
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
  app.use("/v1/auth", authLimiter);
}

// v1 api routes
app.use("/v1", routes);

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
  const { app, router } = createApp();

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

module.exports = app;
