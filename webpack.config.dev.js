/**
 * webpack-merge dependecy allows us
 * to create different configurations for webpack
 * dev/prod
 */
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  // devServer is one of the keys merge accepts to allow us to override other default options
  devServer: {
    port: 9000
  }
});
