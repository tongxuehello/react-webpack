const path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:[ // 入口文件
		'webpack-dev-server/client?http://localhost:3000', // webpack开发服务器，WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./js/entry.js'
	],
	output: {
		path: __dirname + '/build/js/', // __dirname变量获取当前模块文件所在目录的完整绝对路径
		publicPath: "http://localhost:3000/" + '/build/js/',
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
			exclude: path.resolve(__dirname, 'node_modules'), // 相对于运行Node.js程序的工作目录
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