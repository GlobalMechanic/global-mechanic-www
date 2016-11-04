const config = require('./webpack.default.js')
const fs = require('fs')
const path = require('path')

const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin
const HtmlPlugin = require('html-webpack-plugin')

const assets = path.resolve(__dirname, '../dist-client/assets')

config.output =  {
  path: assets,
  publicPath: '/assets/',
  filename: 'bundle.js'
}

config.plugins.push(
  new HtmlPlugin({
    template: path.join(__dirname, '../src-client/production.html'),
    filename: '../index.html',
    inject: false
  }),

  new UglifyJsPlugin({
    mangle: false
  })
)

//
// config.output = {
//   path: path.resolve(__dirname, '../dist-client/assets'),
//   publicPath: '/',
//   filename: 'bundle.js'
// }

module.exports = config
