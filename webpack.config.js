const path = require('path');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
        },
    ]
  },
};
