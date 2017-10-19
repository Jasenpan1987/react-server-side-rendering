const path = require("path");

// Server Side Webpack
module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react", "stage-0",
            // run all the transplie rules for the enviornment of 
            // last 2 versions of the modern browsers
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
}