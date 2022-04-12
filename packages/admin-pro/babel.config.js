module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    '@babel/plugin-transform-spread',
    ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        // style: true, // `style: true` 会加载 less 文件
      },
    ],
  ],
};
