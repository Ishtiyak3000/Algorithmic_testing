/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
// @ts-nocheck

module.exports = {
  mutate: ["algorithms/**/*.js"], // Files to mutate
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["clear-text", "html","dashboard","progressive"], 
  testRunner: "jest",
  jest: {
    projectType: "custom",
    config: require("./jest.config.js"),
  },
  coverageAnalysis: "off",
};
