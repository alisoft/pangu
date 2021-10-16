// vue.config.js
const path = require("path");
const WebpackBar = require("webpackbar");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const port = 3000; // dev port
const name = "Gitter"; // page title

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "",
  pages: {
    index: "./src/client/main.js",
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:${port}`,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: () => {
    const config = {
      name,
      resolve: {
        alias: {
          "@": resolve("src/client"),
        },
      },
    };
    if (process.env.NODE_ENV === "production") {
      config.plugins = [
        new WebpackBar({
          name,
        }),
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        }),
      ];
    }
    return config;
  },
};
