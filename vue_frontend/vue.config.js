const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    https: true,
    host: 'localhost', // or your local IP address
    port: 8080,
    // You can also set the following options if needed
    // disableHostCheck: true,
    // public: 'https://localhost:8080',
  },
};
