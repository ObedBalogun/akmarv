const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    context: path.resolve(__dirname, 'frontend'),
    output: {
        path: path.join(__dirname, 'frontend/dist'),
        filename: "bundle.js",
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
            },
            {
            test: /\.(pdf)?$/,
            use: 'file-loader'
         }
        ],
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]

};