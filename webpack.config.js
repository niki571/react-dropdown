var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
    entry: {
        dropdown:['./src'],
        vendors: ['react','reflux','react-mixin','jquery']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpackCleanupPlugin(),
        //To compress the js files
        //new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
