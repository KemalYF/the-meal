const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const path = require("path");
const webpack = require('webpack');
 
module.exports = {
    entry: {
        app: {import: './src/js/app.js', dependOn: 'shared'},
        sum: {import: './src/js/sum.js', dependOn: 'shared'},
        shared: 'lodash'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
        })
    ]
}