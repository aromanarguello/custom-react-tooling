/**
 * webpack-merge dependecy allows us
 * to create different configurations for webpack
 * dev/prod
 */
const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

// add bundle analyzer here because
// webpack will optimize the build differently
// in dev and in prod
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html'
    })
  ],
  // externalizes dependencies and imports them as CDNs
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
})
