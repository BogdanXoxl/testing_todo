const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // "^@/app/(.*)$": "<rootDir>/components/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/app"],
};

module.exports = createJestConfig(customJestConfig);
