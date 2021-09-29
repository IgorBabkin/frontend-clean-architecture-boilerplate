/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressPlugin = require('webpack').ProgressPlugin;
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = 'production';
module.exports = {
  ...common(mode),
  ...{
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html.ejs',
        filename: '../index.html',
        inject: 'body',
        environment: mode,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      }),
      new ProgressPlugin(),
    ],
  },
};
