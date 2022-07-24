import express from "express";
const path = require("path");
const fs = require("fs");
const homeManifest = require("../dist/home/client/ssr-manifest.json");
const adminManifest = require("../dist/admin/node/ssr-manifest.json");
const mobileManifest = require("../dist/mobile/client/ssr-manifest.json");
const { renderToString } = require("vue/server-renderer");
const { render } = require("../dist/home/node/index.server.js");
const { render: renderMobile } = require("../dist/mobile/node/entry-server.js");

const adminPath = path.join(
  __dirname,
  "../dist/admin",
  "node",
  adminManifest["index.js"]
);
const createAdminApp = require(adminPath).default;

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
}

const homeTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/home/client/index.html"),
  "utf-8"
);

const adminTemplate = fs.readFileSync(
  path.join(__dirname, "../dist/admin/client/index.html"),
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
    const appHtml = await render(req.url, homeManifest);

    const html = homeTemplate.replace(`<!--ssr-outlet-->`, appHtml);

    res.setHeader("Content-Type", "text/html");
    res.send(html);
  });

  app.get("/blog-rtl/*", async (req, res) => {
    const appHtml = await render(req.url, homeManifest);

    const html = homeTemplate.replace(`<!--ssr-outlet-->`, appHtml);

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

  app.get("/mobile/*", async (req, res) => {
    const [appHtml, preloadLinks] = await renderMobile(
      req.originalUrl,
      mobileManifest
    );

    const html = mobileTemplate
      .replace(`<!--preload-links-->`, preloadLinks)
      .replace(`<!--ssr-outlet-->`, appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });

  app.get("/blog", async (req, res, next) => {
    res.status(301).redirect("/blog/");
    next();
  });
  app.get("/blog-rtl", async (req, res, next) => {
    res.status(301).redirect("/blog-rtl/");
    next();
  });
  app.get("/admin", async (req, res, next) => {
    res.status(301).redirect("/admin/");
    next();
  });
  app.get("/mobile", async (req, res, next) => {
    res.status(301).redirect("/mobile/");
    next();
  });
}
