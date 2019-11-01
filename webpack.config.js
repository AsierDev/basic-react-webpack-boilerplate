require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
      },
    module: {
        rules: [
            {
            test: /(\.js|jsx)$/,
            exclude: /(node_modules|dist)/,
            loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'cheap-module-inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 9000,
        stats: { colors: true },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
          ignoreOrder: false
        })
    ]

};