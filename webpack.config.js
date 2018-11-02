const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './src') + '/index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'highcharts-react-official.js',
    library: 'highcharts-react-official',
    libraryTarget:'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ]
}
