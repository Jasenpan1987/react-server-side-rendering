const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const path = require("path");

// Client Side Webpack
const config = {
  entry: "./src/client/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
}

module.exports = merge(config, baseConfig);