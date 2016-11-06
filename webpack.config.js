var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './app/client.js');
var BUILD_PATH = path.resolve(__dirname, './public');

module.exports = {
	entry: {
		main: ['babel-polyfill', APP_PATH]
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['babel-loader?presets[]=es2015,presets[]=react']
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader?modules"
		}]
	}
}