const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, '../src-client/index.jsx')
  ],
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'resolve-url', 'sass']
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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname, '../src-iso'),
      path.resolve(__dirname, '../src-client')
    ]
  },
  externals: {
    jquery: 'jQuery',
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
