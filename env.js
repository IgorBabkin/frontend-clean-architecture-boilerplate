/* eslint-disable */
const path = require('path');

module.exports = {
  BASE_PATH: path.resolve(__dirname, './src'),
  BUILD_PATH: path.resolve(__dirname, './build'),
  MODULE_PATH: [path.resolve(__dirname, './src'), 'node_modules'],
};
