module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  globals: {
    "@vue/vue3-jest": {
      "@vue/vue3-jest": {
        babelConfig: true,
      },
    },
  },
  roots: ["<rootDir>/tests/client"],
  testMatch: ["**/tests/client/unit/**/*.[jt]s?(x)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
};
