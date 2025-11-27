const path = require('path')
const webpack = require('webpack')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'mavlet',
    libraryTarget: 'umd'
  },
  resolve: {
    fallback: {
      crypto: false,
      fs: false,
      stream: require.resolve('stream-browserify')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ]
}
