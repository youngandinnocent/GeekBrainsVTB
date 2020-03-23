const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: { //Not working
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader', 
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ]
};