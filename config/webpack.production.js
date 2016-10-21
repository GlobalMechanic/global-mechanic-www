const config = require('./webpack.default.js')
const path = require('path')

const FaviconsPlugin = require('favicons-webpack-plugin')
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin
const HtmlPlugin = require('html-webpack-plugin')

config.plugins.push(
  new HtmlPlugin({
    template: path.join(__dirname, '../src-client/template.production.html'),
    filename: '../index.html',
    inject: 'head'
  }),
  new FaviconsPlugin({
    logo: path.resolve(__dirname, '../favicon.png'),
    prefix: 'favicon-[hash]/',
    inject: true
  }),
  new UglifyJsPlugin({
    mangle: false
  })
)

module.exports = config
