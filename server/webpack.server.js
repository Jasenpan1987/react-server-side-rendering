const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const path = require("path");

// Server Side Webpack
const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [ // this will tell the webpack do not bundle any modules from node_module directory
    webpackNodeExternals()
  ]
}

module.exports = merge(config, baseConfig);
