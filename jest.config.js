module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  globals: {
    "vue-jest": {
      "vue-jest": {
        babelConfig: true,
      },
    },
  },
  roots: ["<rootDir>/tests/client"],
  testMatch: ["**/tests/client/unit/**/*.[jt]s?(x)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
};
