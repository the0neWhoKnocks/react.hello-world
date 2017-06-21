var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    components: './components.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
  },
  output: { 
    filename: 'bizNamespace.[name].js',
    library: ['bizNamespace', '[name]'], // expose exported item to window
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/public/js',
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