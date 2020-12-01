const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      statsOptions: null,
      logLevel: 'info',
      generateStatsFile: true,
    }),
  ],
  entry: {
    index: './packages/a/src/index.js',
    another: './packages/b/src/another.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
