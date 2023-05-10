const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 900,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    }
  },
});
