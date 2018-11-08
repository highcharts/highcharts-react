const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'highcharts-react': './src/HighchartsReact.js',
    'highcharts-react.min': './src/HighchartsReact.js'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: "[name].js.map",
    library: 'HighchartsReact',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist')
  },
  externals: {
    react: 'react'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      sourceMap: true,
      debug: true
    })
  ]
}
