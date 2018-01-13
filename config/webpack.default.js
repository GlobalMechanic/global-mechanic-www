const webpack = require('webpack')
const path = require('path')

const noopPath = path.resolve(__dirname, '../../global-mechanic-gears/src/modules/noop.js')
const gearsUiPath = path.resolve(__dirname, '../../global-mechanic-gears/src/ui')
const gearsApiPath = path.resolve(__dirname, '../../global-mechanic-gears/src/api')
const gearsModulesPath = path.resolve(__dirname, '../../global-mechanic-gears/src/modules')

module.exports = {

  entry: [
    path.resolve(__dirname, '../src/webpack/index.js')
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', query: { importLoaders: 1 } },
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2?|svg)(\?.+)?$/,
        use: [ 'url-loader?limit=10000' ]
      },
      {
        test: /\.(ttf|eot|ico|png|gif|mp4|jpg|svg)(\?.+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    alias : {
      'path': noopPath,
      'open': noopPath,
      'fs-extra': noopPath,
      'fs': noopPath,
      'tls': noopPath,
      'net': noopPath,
      'module': noopPath,

      'modules': gearsModulesPath,
      'ui': gearsUiPath,
      'api': gearsApiPath,
      'global-mechanic-gears': gearsUiPath
    }
  },

  output: {
    filename: 'global-mechanic-www.js',
    path: path.join(__dirname, '../dist/public')
  }
}
