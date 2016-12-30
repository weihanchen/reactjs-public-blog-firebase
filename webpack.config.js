const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(__dirname, './app/client.js');
const BUILD_PATH = path.resolve(__dirname, './public');
const INDEX_TEMPLATE_PATH = path.resolve(__dirname, './app/index.html');
module.exports = {
    entry: {
        main: ['babel-polyfill', APP_PATH]
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.(png|jpg|ico)$/,
            loader: 'file-loader'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }],
        noParse: [
            path.resolve('node_modules/react-quill/node_modules/quill/dist/quill.js'), //npm 2
            path.resolve('node_modules/quill/dist/quill.js') //npm 3
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            title: 'Reactjs Public Blog Firebase',
            template: INDEX_TEMPLATE_PATH,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
}
