// vue.config.js
const path = require("path");
const WebpackBar = require("webpackbar");
const WebpackAliyunOss = require("webpack-aliyun-oss");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const name = "Home"; // page title

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    index: process.env.SSR ? "./src/main.server.ts" : "./src/main.ts",
  },
  publicPath:
    process.env.NODE_ENV === "production" && !process.env.SSR
      ? process.env.PUBLIC_URL
      : "/",
  assetsDir: "home-assets",
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  transpileDependencies: [/node_modules\/\\@babel\/runtime/],
  devServer: {
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (process.env.MOCK !== "none" && process.env.HTTP_MOCK !== "none") {
        // devServer.app.use(createMockMiddleware());
      }
      return middlewares;
    },
  },
  configureWebpack: () => {
    const config = {
      name,
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
      module: {
        rules: [
          {
            test: /\.(c|m)js$/,
            include: /node_modules/,
            type: "javascript/auto",
          },
        ],
      },
      plugins: [
        new webpack.IgnorePlugin({
          resourceRegExp: /(\/es\/locale)|(\.md$)/,
        }),
        new CopyPlugin({
          patterns: [
            { from: "public/img", to: "home-assets/img" },
            { from: "public/video", to: "home-assets/video" },
          ],
        }),
      ],
    };
    if (process.env.NODE_ENV === "production" && !process.env.SSR) {
      config.plugins = [
        ...config.plugins,
        new WebpackAliyunOss({
          from: ["../../dist/home/client/home-assets"], // build目录下除html之外的所有文件
          dist: "/", // oss上传目录
          overwrite: true,
          timeout: 60000,
          region: process.env.ALIYUN_OSS_REGION,
          accessKeyId: process.env.ACCESS_KEY_ID,
          accessKeySecret: process.env.ACCESS_KEY_SECRET,
          bucket: process.env.ALIYUN_OSS_BUCKET,

          // // 如果希望自定义上传路径，就传这个函数
          // // 否则按 output.path (webpack.config.js) 目录下的文件路径上传
          // setOssPath(filePath) {
          //   // filePath为当前文件路径。函数应该返回路径+文件名。
          //   // 如果返回/new/path/to/file.js，则最终上传路径为 /path/in/alioss/new/path/to/file.js
          //   return '/new/path/to/file.js';
          // },

          // 如果想定义header就传
          setHeaders(filePath) {
            // 定义当前文件header，可选
            return {
              "Cache-Control": "max-age=31536000",
            };
          },
        }),
      ];
    }
    if (process.env.NODE_ENV === "production") {
      config.plugins = [
        ...config.plugins,
        new WebpackBar({
          name: `${name} ${process.env.SSR ? "SSR" : ""}`,
        }),
        new CompressionWebpackPlugin({
          filename: "[path][base].gz[query]",
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
  chainWebpack: (webpackConfig) => {
    // 我们需要禁用 cache loader，否则客户端构建版本会从服务端构建版本使用缓存过的组件
    webpackConfig.module.rule("vue").uses.delete("cache-loader");
    webpackConfig.module.rule("js").uses.delete("cache-loader");
    webpackConfig.module.rule("ts").uses.delete("cache-loader");
    webpackConfig.module.rule("tsx").uses.delete("cache-loader");

    if (!process.env.SSR) {
      // 将入口指向应用的客户端入口文件
      // webpackConfig.entry("app").clear().add("./src/admin/main.js");
      // webpackConfig.entry("mobile").clear().add("./src/mobile/main.js");
      return;
    }

    // 将入口指向应用的服务端入口文件
    // webpackConfig.entry("app").clear().add("./src/admin/main.server.js");
    // webpackConfig.entry("mobile").clear().add("./src/mobile/main.server.js");

    // 这允许 webpack 以适合于 Node 的方式处理动态导入，
    // 同时也告诉 `vue-loader` 在编译 Vue 组件的时候抛出面向服务端的代码。
    webpackConfig.target("node");
    // 这会告诉服务端的包使用 Node 风格的导出
    webpackConfig.output.libraryTarget("commonjs2");

    webpackConfig
      .plugin("manifest")
      .use(new WebpackManifestPlugin({ fileName: "ssr-manifest.json" }));

    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // 将应用依赖变为外部扩展。
    // 这使得服务端构建更加快速并生成更小的包文件。

    // 不要将需要被 webpack 处理的依赖变为外部扩展
    // 也应该把修改 `global` 的依赖 (例如各种 polyfill) 整理成一个白名单
    webpackConfig.externals([
      nodeExternals({ allowlist: [/\.(css|vue)$/, /ant-design-vue/] }),
      nodeExternals({
        modulesDir: path.resolve(__dirname, "../../node_modules"),
      }),
    ]);

    webpackConfig.optimization.splitChunks(false).minimize(false);

    webpackConfig.plugins.delete("preload");
    webpackConfig.plugins.delete("prefetch");
    webpackConfig.plugins.delete("progress");
    webpackConfig.plugins.delete("friendly-errors");

    webpackConfig.plugin("limit").use(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );
  },
};