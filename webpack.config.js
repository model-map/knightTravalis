const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Knight Travails",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //   {
      //     test: /\.(?:js|mjs|cjs)$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         presets: [["@babel/preset-env", { targets: "defaults" }]],
      //         plugins: ["@babel/plugin-proposal-class-properties"],
      //       },
      //     },
      //   },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
