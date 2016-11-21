const config = require('./webpack.default.js')
const path = require('path')
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin
const HtmlPlugin = require('html-webpack-plugin')

config.output.path = path.join(config.output.path, 'assets')

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

module.exports = config
