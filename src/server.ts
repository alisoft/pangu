import express from "express";
const path = require("path");
const fs = require("fs");
const homeManifest = require("../dist/home/node/ssr-manifest.json");
const adminManifest = require("../dist/admin/node/ssr-manifest.json");
const homeReactManifest = require("../dist/admin-react/node/asset-manifest.json");
const mobileManifest = require("../dist/mobile/node/ssr-manifest.json");
const { createElement } = require("react");
const { renderToString: renderReactToString } = require("react-dom/server");
const { renderToString } = require("vue/server-renderer");
const homePath = path.join(
  __dirname,
  "../dist/home",
  "node",
  homeManifest["index.js"]
);
const createHomeApp = require(homePath).default;

const adminPath = path.join(
  __dirname,
  "../dist/admin",
  "node",
  adminManifest["index.js"]
);
const createAdminApp = require(adminPath).default;

const adminReactPath = path.join(
  __dirname,
  "../dist/admin-react",
  "node",
  homeReactManifest["files"]["main.js"]
);
const createAdminReactApp = require(adminReactPath).default;

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
    "/admin-react-assets",
    express.static(
      path.join(__dirname, "../dist/admin-react/client", "admin-react-assets")
    )
  );
}

const homeTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/home/client/index.html"),
  "utf-8"
);

const appTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/admin/client/index.html"),
  "utf-8"
);

const adminReactTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/admin-react/client/index.html"),
  "utf-8"
);

const mobileTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/mobile/client/index.html"),
  "utf-8"
);

export function useRouter(app: express.Application) {
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

  app.get("/admin-react/*", async (req, res) => {
    const app = createElement(createAdminReactApp(req.url));
    const appContent = renderReactToString(app);
    const html = adminReactTemplate
      .toString()
      .replace('<div id="root">', `<div id="root">${appContent}`);

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
  app.get("/admin-react", async (req, res, next) => {
    res.status(301).redirect("/admin-react/");
    next();
  });
  app.get("/mobile", async (req, res, next) => {
    res.status(301).redirect("/mobile/");
    next();
  });
}
