const path = require('path');

module.exports = {
	entry:[
		'./js/entry.js'
	],
	output: {
		path: __dirname + '/build/js/',
		publicPath: __dirname + "/build/js/",
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
			loader: 'jsx-loader?harmony'
		}, {
			test: /\.less/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
		test: /\.(css)$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	}
}