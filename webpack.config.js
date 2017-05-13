const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname,
    port: 8080
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017'],
          plugins: ['transform-flow-strip-types']
        }
      }
    ]
  }
};