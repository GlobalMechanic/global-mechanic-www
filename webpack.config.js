const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'bootstrap-loader',
    'webpack-dev-server/client?http://0.0.0.0:5000',
//  'webpack/hot/only-dev-server',
    './src-client/index.jsx'
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
        test: /\.(ttf|eot|ico|png|gif|mp4|jpg)$/,
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
    path: __dirname + '/dist-client',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src-client',
    hot: false
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};
