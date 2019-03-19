const webpack = require('webpack')
const path = require('path')

const DtsBundlePlugin = function () {};
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function(){
        var dts = require('dts-bundle');
        var dtsOptions = {
            name: 'HighchartsReact',
            main: 'src/HighchartsReact.d.ts',
            out: path.resolve(__dirname, './dist/highcharts-react.d.ts'),
            removeSource: false,
            outputAsModuleFolder: true, // to use npm in-package typings,
            indent: '  '
        };
        dts.bundle(dtsOptions);
        dtsOptions.out = path.resolve(
            __dirname, './dist/highcharts-react.min.d.ts'
        );
        dts.bundle(dtsOptions);
    });
};

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
        loader: 'babel-loader',
        options: {
          plugins: ['babel-plugin-transform-object-rest-spread']
        }
      }
    ]
  },
  plugins: [
    new DtsBundlePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      sourceMap: true,
      debug: true
    })
  ]
}
