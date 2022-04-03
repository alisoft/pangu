const path = require("path");
const fs = require("fs");
const express = require("express");
const homeManifest = require("./dist/mobile/node/ssr-manifest.json");
const { renderToString } = require("vue/server-renderer");
const homePath = path.join(
  __dirname,
  "./dist/mobile",
  "node",
  homeManifest["index.js"]
);
const createHomeApp = require(homePath).default;

const app = express();

app.use(
  "/mobile-assets",
  express.static(path.join(__dirname, "./dist/mobile/client", "mobile-assets"))
);

const homeTemplate = fs.readFileSync(
  path.join(__dirname, "./dist/mobile/client/index.html"),
  "utf-8"
);

app.get("/", async (req, res) => {
  const { app, router } = createHomeApp();

  await router.push(req.url);
  await router.isReady();

  const appContent = await renderToString(app);

  const html = homeTemplate
    .toString()
    .replace('<div id="app">', `<div id="app">${appContent}`);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

app.listen(3000);
