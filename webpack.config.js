const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
    mode,
    target,
    devtool,
    entry: ["@babel/polyfill", "/src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].[hash].js",
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.css|\.less$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.jsx$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".css", ".less"]
    }
}