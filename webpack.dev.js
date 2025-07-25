const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    static: {
      directory: "./public",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [require.resolve("react-refresh/babel")],
          },
        },
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
