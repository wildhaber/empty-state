/* eslint-env node */
/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                use: ExtractTextPlugin.extract(
                    {
                        use: [
                            {
                                loader: 'css-loader',
                            },
                            {
                                loader: 'sass-loader',
                            },
                        ],
                    },
                ),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            ignoreOrder: false,
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