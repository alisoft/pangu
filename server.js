const path = require("path");
const fs = require("fs");
const express = require("express");
const homeManifest = require("./dist/home/node/ssr-manifest.json");
const adminManifest = require("./dist/admin/node/ssr-manifest.json");
const mobileManifest = require("./dist/mobile/node/ssr-manifest.json");
const { renderToString } = require("vue/server-renderer");
const homePath = path.join(
  __dirname,
  "./dist/home",
  "node",
  homeManifest["index.js"]
);
const createHomeApp = require(homePath).default;

const adminPath = path.join(
  __dirname,
  "./dist/admin",
  "node",
  adminManifest["index.js"]
);
const createAdminApp = require(adminPath).default;

const mobilePath = path.join(
  __dirname,
  "./dist/mobile",
  "node",
  mobileManifest["index.js"]
);
const createMobileApp = require(mobilePath).default;

const app = express();

app.use(
  "/home-assets",
  express.static(path.join(__dirname, "./dist/home/client", "home-assets"))
);
app.use(
  "/mobile-assets",
  express.static(path.join(__dirname, "./dist/mobile/client", "mobile-assets"))
);
app.use(
  "/admin-assets",
  express.static(path.join(__dirname, "./dist/admin/client", "admin-assets"))
);

const homeTemplate = fs.readFileSync(
  path.join(__dirname, "./dist/home/client/index.html"),
  "utf-8"
);

const appTemplate = fs.readFileSync(
  path.join(__dirname, "./dist/admin/client/index.html"),
  "utf-8"
);

const mobileTemplate = fs.readFileSync(
  path.join(__dirname, "./dist/mobile/client/index.html"),
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

app.listen(3000, "0.0.0.0", () => {
  console.log("ready");
});
