const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

(function () {
  const file = fs.readFileSync('src/HighchartsReact.d.ts');

  fs.writeFileSync('dist/highcharts-react.d.ts', file);
  fs.writeFileSync('dist/highcharts-react.min.d.ts', file);
}());

module.exports = {
  entry: {
    'highcharts-react': './src/HighchartsReact.js',
    'highcharts-react.min': './src/HighchartsReact.js'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    library: 'HighchartsReact',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist')
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    highcharts: {
      root: 'Highcharts',
      commonjs: 'highcharts',
      commonjs2: 'highcharts',
      amd: 'highcharts'
    }
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
};
