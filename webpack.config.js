const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(__dirname);
module.exports = {
  mode: "development",
  devtool: "sourcemap",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "public/game.html",
      filename: "game.html",
    }),
  ],
  entry: {
    game: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.wav$/, loader: "file-loader" },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".png", ".wav"],
    alias: { "@/assets": path.resolve(__dirname + "/public/assets/") },
  },
};
