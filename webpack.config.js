/* eslint-env node */
/* eslint-disable no-undef */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENTRY_POINTS = {
    examples: [
        './examples/app.js',
    ],
};

const OUTPUT_DIR = 'examples/dist';

const config = {
    entry: ENTRY_POINTS,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CopyWebpackPlugin([{
            from: './examples/index.html',
        }]),
    ],
    resolve: {
        alias: {},
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, OUTPUT_DIR),
        publicPath: '/',
    },
};

module.exports = config;
