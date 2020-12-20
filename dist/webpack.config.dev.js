"use strict";

var path = require('path');

var HTML = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000
  },
  plugins: [new HTML({
    filename: 'index.html',
    template: './src/index.html'
  }), new MiniCssExtractPlugin({
    filename: 'app.css'
  })],
  module: {
    rules: [{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    }, {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  optimization: {
    // minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  }
};