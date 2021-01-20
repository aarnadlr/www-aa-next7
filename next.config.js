const withWorkbox = require("next-with-workbox");

module.exports = withWorkbox({
    workbox: {
     // ... any workbox-webpack-plugin.GenerateSW option
    },
    // ... other Next.js config values
  });