const path = require("path");
const HWP = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const port = process.env.PORT || 7000;

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist"),
  },
  devServer: {
    port: port,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HWP({ template: path.join(__dirname, "/public/index.html") }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
