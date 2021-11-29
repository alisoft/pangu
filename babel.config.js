module.exports = {
  presets: [
    // [
    //   "@babel/preset-env",
    //   {
    //     targets: {
    //       node: "current",
    //     },
    //   },
    // ],
    "@vue/cli-plugin-babel/preset",
  ],
  plugins: [
    // "@vue/babel-plugin-jsx",
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true, // `style: true` 会加载 less 文件
      },
    ],
  ],
};
