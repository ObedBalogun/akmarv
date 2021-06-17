const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, '/dist', '/public'),
        filename: "index.bundle.js",
        publicPath: '/'

    },
    devServer: {
        proxy: {
            "/api": "http://localhost:8000"
        },
        port: 3010,
        watchContentBase: true,
        historyApiFallback: true,

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
            }
        ]
    }
};