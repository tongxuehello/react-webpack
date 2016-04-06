const path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./js/entry.js'
	],
	output: {
		path: __dirname + '/build/js/',
		publicPath: "http://localhost:3000/",
		filename: 'bundle.js'
	},
	module: {
		/*
		preLoaders: [{
			test: /\.js$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			loader: 'jsxhint'
		}],
		*/
		loaders: [{
			test: /\.js$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			include: [path.join(__dirname, 'js')],
			loader: 'react-hot!babel-loader!jsx-loader?harmony'
		}, {
			test: /\.less/,
			include: [path.join(__dirname, 'css')],
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.(css)$/,
			include: [path.join(__dirname, 'css')],
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}