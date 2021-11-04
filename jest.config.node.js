module.exports = {
  testEnvironment: "node",
  testEnvironmentOptions: {
    NODE_ENV: "test",
  },
  restoreMocks: true,
  roots: ["<rootDir>/tests/node"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "src/node/config",
    "src/node/app.js",
    "tests/node",
  ],
  coverageReporters: ["text", "lcov", "clover", "html"],
};
