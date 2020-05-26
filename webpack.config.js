const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const commonConfig = {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
      },
    }),
    // Define the filename pattern for CSS.
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader", // post process the compiled CSS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["stage-2", "react"],
        },
      },
    ],
  },
};

const serverConfig = {
  ...commonConfig,
  entry: "./src/server/app.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    publicPath: "/",
  },
  externals: nodeExternals(),
};

const cssConfig = {
  ...commonConfig,
  entry: "./src/client/sass/main.scss",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};

const clientConfig = {
  ...commonConfig,
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js",
    publicPath: "/",
  },
};

module.exports = [cssConfig, clientConfig, serverConfig];
