/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const ProgressPlugin = require('webpack').ProgressPlugin;
const WebpackNotifierPlugin = require('webpack-notifier');
const common = require('./webpack.common');

const mode = 'development';
module.exports = {
  ...common(mode),
  ...{
    devServer: {
      hot: true,
      port: 3330,
      host: 'localhost',
      historyApiFallback: false,
    },

    devtool: 'inline-source-map',

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html.ejs',
        inject: 'body',
        environment: mode,
      }),
      new HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin(),
      new ProgressPlugin(),
    ],
  },
};
