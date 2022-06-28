module.exports = {
  testEnvironment: "node",
  testEnvironmentOptions: {
    NODE_ENV: "test",
  },
  restoreMocks: true,
  roots: ["<rootDir>/tests/node"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "tests",
  ],
  coverageReporters: ["text", "lcov", "clover", "html"],
};
