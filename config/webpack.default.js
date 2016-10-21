const path = require('path')
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
    root: [ path.resolve(__dirname, '../src-iso-modules')]
  },
  output: {
    path: path.resolve(__dirname, '../dist-client'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
