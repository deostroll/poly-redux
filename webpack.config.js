const path = require('path');
const webpack = require('webpack');
// console.log(webpack.ResolverPlugin)
module.exports = {
	entry: [
		'./store/src/index.js'
	],

	output : {
		filename: 'store.js',
		path: path.join(__dirname, './src'),
		library: 'ReduxApp',
		libraryTarget: 'window'
	},

	resolve: {
		modules: [ path.join(__dirname, "bower_components")]
	},

	// plugins: [
	// 	new webpack.ResolverPlugin(
	// 		new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
	// 	)
	// ],

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: ['babel-loader'],
				
			}
		]
	},
	devtool : 'source-map'
}