/* eslint-disable */
const { BASE_PATH, BUILD_PATH, MODULE_PATH } = require('../../env');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => ({
  mode,
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
        use: [mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
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
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
