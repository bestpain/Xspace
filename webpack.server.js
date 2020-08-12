const path = require("path");
const baseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
