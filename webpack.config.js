const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: [
			'babel-polyfill',
			'./src/index.jsx',
		],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'env'],
							plugins: ['transform-class-properties', 'transform-decorators-legacy', 'syntax-dynamic-import'],
						}
					},
				],
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { minimize: true, sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } },
					]
				}),
			},
			{
				test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: 'file-loader', options: {name: '[name].[ext]'},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: 'file-loader', options: {name: 'fonts/[name].[ext]'},
			},
			{
				test: /\.(jpg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: 'file-loader', options: {name: 'images/[name].[ext]'},
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(['dist/*']),

		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			}
		}),
		
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),

		new ExtractTextPlugin('css/[name].css'),
		
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: 'src/assets/index.html',
		}),
	],
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].min.js',
		chunkFilename: 'js/[name].min.js',
		publicPath: '/',
	},
	devtool: 'source-map',
};
