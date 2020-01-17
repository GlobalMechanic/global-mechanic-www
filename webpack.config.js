/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const styledComponentsTransformer = require('typescript-plugin-styled-components').default()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/***************************************************************/
// Config
/***************************************************************/

module.exports = {

    entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),

    output: {
        filename: 'global-mechanic.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: () => ({
                        before: [ styledComponentsTransformer ]
                    })
                }
            },

            {
                test: /\.css$/,
                loader: [ MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 5500
    },

    plugins: [
        new CleanWebpackPlugin(),
        new EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: true
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Global Mechanic',
            template: path.resolve(__dirname, 'src', 'client', 'index.html')
        })
    ],

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

}