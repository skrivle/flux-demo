module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	entry: {
		'js/main.js': [
			'./src/index',
			'webpack/hot/only-dev-server'
		]
	},
	output: {
		path: './static/assets/',
		publicPath: '/assets/',
		filename: '[name]'
	},
	module: {
		loaders: [
			{ test: /\.js(x?)$/, exclude: /node_modules/, loader: require.resolve('babel-loader') },
			{ test: /\.json$/, loader: 'json-loader'}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './static',
		inline: true
	}
};
