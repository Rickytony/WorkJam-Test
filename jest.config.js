module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["app/**/*.{js,jsx,mjs}"],
  coverageReporters: ["text"],
  moduleFileExtensions: ["js", "json", "jsx"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false
};
