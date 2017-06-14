var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  output: { 
    filename: 'bundle.js',
    library: 'bizNamespace',
    libraryTarget: 'umd',
    path: __dirname,
    publicPath: '/virtual/',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/
        ],
        include: [
          path.resolve(__dirname, './src'),
        ],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};