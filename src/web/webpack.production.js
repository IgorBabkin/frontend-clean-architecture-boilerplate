/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressPlugin = require('webpack').ProgressPlugin;
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  ...common,
  ...{
    mode: 'production',

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './web/index.html.ejs',
        filename: '../index.html.ejs',
        inject: 'body',
      }),
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      }),
      new ProgressPlugin(),
    ],
  },
};
