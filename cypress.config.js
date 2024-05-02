const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:10000,
  pageLoadTimeout: 10000,
  viewportHeight:600,
  viewportWidth: 1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
