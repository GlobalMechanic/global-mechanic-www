const path = require('path')
const config = require('./webpack.default.js')

const HtmlPlugin = require('html-webpack-plugin')

const port = 3000
const host = '0.0.0.0'

config.entry.unshift(`webpack-dev-server/client?http://${host}:${port}`)

config.devServer = {
  contentBase: path.resolve(__dirname, '../dist-client'),
  hot: false,
  host,
  port,
  historyApiFallback: true,
}

config.plugins.push(new HtmlPlugin({
  template: path.join(__dirname, '../src-client/development.html'),
  filename: 'index.html',
  inject: 'head'
}))

module.exports = config
