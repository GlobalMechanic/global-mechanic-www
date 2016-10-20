const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:5000',
    path.join(__dirname, 'src-client', 'index.jsx')
  ],
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style', 'raw', 'sass']
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
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ['html']
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [ path.join(__dirname, 'iso_modules')]
  },
  output: {
    path: path.join(__dirname, 'dist-client'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src-client'),
    hot: false
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
}
