const path = require('path')
const HTML = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
      },

    plugins: [
        new HTML({
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader,"css-loader"],
          },

          {
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader,"css-loader","less-loader"],
          },
          
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
          },

          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ],
    },

    optimization: {
        // minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ],
     },



}