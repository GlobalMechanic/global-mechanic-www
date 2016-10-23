const path = require('path')
const config = require('./webpack.default.js')
const HtmlPlugin = require('html-webpack-plugin')

config.entry.unshift('webpack-dev-server/client?http://0.0.0.0:5000')

config.output =  {
  path: path.resolve(__dirname, '../dist-client/'),
  publicPath: '/assets/',
  filename: 'bundle.js'
}

config.plugins.push(
  new HtmlPlugin({
    template: path.join(__dirname, '../src-client/development.html'),
    filename: 'index.html',
    inject: 'head'
  })
)

config.devServer = {
  contentBase: path.resolve(__dirname, '../dist-client'),
  hot: false
}

module.exports = config
