/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const styledComponentsTransformer = require('typescript-plugin-styled-components').default()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/***************************************************************/
// Constants
/***************************************************************/

const PORT = 7400

const mode = process.env.NODE_ENV || 'development'

const ENV = mode === 'development'
    ? {
        NODE_ENV: 'development',
        DEV_SERVER_PORT: require('./config/default.json').port
    }
    : {
        NODE_ENV: 'production',
    }

/***************************************************************/
// Config
/***************************************************************/

module.exports = {

    mode: process.env.NODE_ENV || 'development',

    entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),

    output: {
        filename: 'global-mechanic.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer]
                    })
                }
            },

            {
                test: /\.css$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name]@[contenthash].[ext]'
                }
            }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port: PORT
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Global Mechanic',
            template: path.resolve(__dirname, 'src', 'client', 'index.html'),
            inject: 'head'
        }),
        new EnvironmentPlugin(ENV)
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}