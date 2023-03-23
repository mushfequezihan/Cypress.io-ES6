const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // base url assgined here globally
    baseUrl: "http://localhost:3000",

    //env variable in config file
    env:{
      "MY_ENV_VAR": "HI" 
    }
  },
});

