// import HtmlWebpackPlugin from "html-webpack-plugin";

const path = require('path');
const webpack = require("html-webpack-plugin");



module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/'

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
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
            {
            test: /\.(pdf)?$/,
            use: 'file-loader'
         }
        ],
    },

    devServer: {
        proxy: {
            "/api": "http://localhost:8000"
        },
        port: 3010,
        watchContentBase: true,
        historyApiFallback: true,

    },
    plugins: [
        new webpack({
            template:'./src/index.html',
            filename: 'index-file.html'
        })
    ]


};