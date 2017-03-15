var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
	entry: [
		'./src/index'
	],
	output: {
		path:path.join(__dirname, 'dist'),
		filename:'app.bundle.js'
	},
	resolve: {
    	extensions: ['.js', '.jsx']
  	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			warnings:true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlPlugin({
			template:'./src/index.html'
		})
	],
	module:{
		loaders:[
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
			}

		]
	},
	devServer: {
		coontentBase: './dist',
		port: 7070
	}
};
module.exports=config;
