const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/register");

const config = {
  mode: "development",
  entry: ["./app/main.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      hash: true
    })
  ],
  watch: true,
  devtool: "inline-source-map"
};

module.exports = config;
