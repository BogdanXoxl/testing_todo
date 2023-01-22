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
  collectCoverageFrom: [
    "<rootDir>/app/components/**/*.{ts,tsx}",
    "<rootDir>/app/ui/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/*/index.{ts,tsx}",
    "!**/*.stories.{ts,tsx}",
  ],
};

module.exports = createJestConfig(customJestConfig);
