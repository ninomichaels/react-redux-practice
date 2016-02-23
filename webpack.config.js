var path = require('path');
var webpack = require('webpack');

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loader: "style!css",
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass",
        include: PATHS.app
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
