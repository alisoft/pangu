import express from "express";
const path = require("path");
const fs = require("fs");
const homeManifest = require("../dist/home/node/asset-manifest.json");
const adminManifest = require("../dist/admin/node/ssr-manifest.json");
const adminProManifest = require("../dist/admin-pro/node/ssr-manifest.json");
const mobileManifest = require("../dist/mobile/node/ssr-manifest.json");
const { createElement } = require("react");
const { renderToString: renderReactToString } = require("react-dom/server");
const { renderToString } = require("vue/server-renderer");
const homePath = path.join(
  __dirname,
  "../dist/home",
  "node",
  homeManifest["files"]["main.js"]
);
const createHomeApp = require(homePath).default;

const adminPath = path.join(
  __dirname,
  "../dist/admin",
  "node",
  adminManifest["index.js"]
);
const createAdminApp = require(adminPath).default;

const adminProPath = path.join(
  __dirname,
  "../dist/admin-pro",
  "node",
  adminProManifest["index.js"]
);
const createAdminProApp = require(adminProPath).default;

const mobilePath = path.join(
  __dirname,
  "../dist/mobile",
  "node",
  mobileManifest["index.js"]
);
const createMobileApp = require(mobilePath).default;

export function useStatic(app: express.Application) {
  app.use(
    "/home-assets",
    express.static(path.join(__dirname, "../dist/home/client", "home-assets"))
  );
  app.use(
    "/mobile-assets",
    express.static(
      path.join(__dirname, "../dist/mobile/client", "mobile-assets")
    )
  );
  app.use(
    "/admin-assets",
    express.static(path.join(__dirname, "../dist/admin/client", "admin-assets"))
  );
  app.use(
    "/admin-pro-assets",
    express.static(
      path.join(__dirname, "../dist/admin-pro/client", "admin-pro-assets")
    )
  );
}

const homeTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/home/client/index.html"),
  "utf-8"
);

const adminTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/admin/client/index.html"),
  "utf-8"
);

const adminProTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/admin-pro/client/index.html"),
  "utf-8"
);

const mobileTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/mobile/client/index.html"),
  "utf-8"
);

export function useRouter(app: express.Application) {
  app.get("/", async (req, res, next) => {
    res.status(301).redirect("/blog");
    next();
  });

  app.get("/blog/*", async (req, res) => {
    const app = createElement(createHomeApp(req.url));
    const appContent = renderReactToString(app);
    const html = homeTemplate
      .toString()
      .replace('<div id="root">', `<div id="root">${appContent}`);

    res.setHeader("Content-Type", "text/html");
    res.send(html);
  });

  app.get("/admin/*", async (req, res) => {
    const { app, router } = createAdminApp();

    await router.push(req.url);
    await router.isReady();

    const appContent = await renderToString(app);
    const html = adminTemplate
      .toString()
      .replace('<div id="app">', `<div id="app">${appContent}`);

    res.setHeader("Content-Type", "text/html");
    res.send(html);
  });

  app.get("/admin-pro/*", async (req, res) => {
    const { app, router } = createAdminProApp();

    await router.push(req.url);
    await router.isReady();

    const appContent = await renderToString(app);
    const html = adminProTemplate
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

  app.get("/blog", async (req, res, next) => {
    res.status(301).redirect("/blog/");
    next();
  });
  app.get("/admin", async (req, res, next) => {
    res.status(301).redirect("/admin/");
    next();
  });
  app.get("/admin-pro", async (req, res, next) => {
    res.status(301).redirect("/admin-pro/");
    next();
  });
  app.get("/mobile", async (req, res, next) => {
    res.status(301).redirect("/mobile/");
    next();
  });
}
