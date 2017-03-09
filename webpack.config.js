var path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, "app")
    ],
    extensions: ['.js', '.json', '.jsx', '.xcc'],
  }
};
