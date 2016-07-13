var webpack = require('webpack');
var path = require("path");
var PROD = process.env.NODE_ENV === 'production'
var TEST = process.env.NODE_ENV === 'test'

var entry = {
  "./dist/jquery.multilingual": "./src/jquery.multilingual.js",
};
var plugins = [];
var filename;

if (TEST) {
  entry["./test/js/test"] = ["./test/test.js"]
}

if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    mangle: false,
    compress: {
      warnings: false
    }
  }))
}

var config  = {
  entry: entry,
  output: {
    path: "./",
    filename: PROD ? "[name].min.js" : "[name].js"
  },
  plugins: plugins
}

module.exports = config;
