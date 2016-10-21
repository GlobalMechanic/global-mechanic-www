const path = require('path')
const config = require('./webpack.default.js')

const HtmlPlugin = require('html-webpack-plugin')

config.entry.unshift('webpack-dev-server/client?http://0.0.0.0:5000')

config.devServer = {
  contentBase: path.resolve(__dirname, '../src-client'),
  hot: false
}

config.plugins.push(new HtmlPlugin({
  template: path.join(__dirname, '../src-client/template.dev.html'),
  inject: 'head'
}))

module.exports = config
