const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'bootstrap-loader',
    'webpack-dev-server/client?http://localhost:5000',
//  'webpack/hot/only-dev-server',
    './src-public/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract("style", "raw", "sass")
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      },

      {
        test: /\.(ttf|eot|ico|png|gif)$/,
        loader: 'file'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        //loaders: ['react-hot', 'babel']
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ['html']
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist-public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src-public',
    hot: false
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};
