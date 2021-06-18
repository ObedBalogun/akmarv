const path = require('path');
const webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "index.bundle.js",
        publicPath: '/'

    },
    devServer: {
        proxy: {
            "/api": "http://localhost:8000"
        },
        port: 3000,
        watchContentBase: true,
        historyApiFallback: true,
        compress: true,

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("development"),
        //     },
        // }),
    ],

};