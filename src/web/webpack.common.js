/* eslint-disable */
const { BASE_PATH, BUILD_PATH, MODULE_PATH } = require('../../env');
const path = require('path');

module.exports = {
  context: BASE_PATH,
  entry: {
    app: './web/entry.tsx',
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(BUILD_PATH, './web/assets'),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.json', '.js'],
    modules: MODULE_PATH,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
    ],
  },
};
