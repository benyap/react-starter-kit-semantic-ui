const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.jsx',
		vendor: [
			'babel-polyfill',
			'react',
			'react-dom',
			'react-router-dom',
			'semantic-ui-react',
		]
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
							presets: [
								'react', 
								'env', 
							],
							plugins: [
								'transform-class-properties', 
								'transform-decorators-legacy', 
								'syntax-dynamic-import', 
							],
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

		new webpack.HashedModuleIdsPlugin(),
		
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons'
		}),

		new ExtractTextPlugin('css/[name].[chunkhash].css'),
		
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: 'src/assets/index.html',
		}),
	],
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].js',
		publicPath: '/',
	},
};
