const path = require("path");
const baseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");

const config = {
  // Tell webpack the root file of our
  // server application
  entry: "./src/client/client.js",

  // Tell webpack where to put the output file
  // that is generated
  // dirname is the current directory
  // public folder will be automatically created
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
