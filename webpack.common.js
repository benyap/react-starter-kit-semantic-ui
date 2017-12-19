const webpack = require('webpack');
const resolve = require('path').resolve;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractAppStyles = new ExtractTextPlugin('css/app.[contenthash].css');
const extractVendorStyles = new ExtractTextPlugin('css/vendor.[contenthash].css');


// This contains shared configuration for dev and prod builds
module.exports = {
	entry: {
		// All App source files will be compiled into main
		app: './src/index.js',

		// All vendor files will be compiled into vendor.
		// You should add new packages you install here. 
		vendor: [
			'babel-polyfill',
			'react',
			'react-dom',
			'react-router-dom',
			'semantic-ui-react',
			'dateformat',
			'axios',
			'react-waypoint'
		]
	},
	module: {
		rules: [
			// Transpile all .js and .jsx files
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
								'transform-object-rest-spread', 
								'syntax-dynamic-import', 
							],
						}
					},
				],
			},

			// Compile SCSS files
			{
				test: /\.scss$/,
				// This compiles styles specific to this app
				include: resolve(__dirname, './src/app/styles'),
				use: extractAppStyles.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { minimize: true, sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } },
					]
				}),
			},
			{
				test: /\.scss$/,
				// This compiles styles from Semantic-UI
				include: resolve(__dirname, './src/assets'),
				use: extractVendorStyles.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { minimize: true, sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } },
					]
				}),
			},

			// Copy static assets over with file-loader
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
		// This pulls out webpack module IDs that changes every build to help with caching
		new webpack.HashedModuleIdsPlugin(),
		
		// This separates vendor-provided code into a separate chunk
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		
		// This pulls out webpack boilerplate code that changes every build to help with caching
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),

		// Extract styles into a separate css files
		extractAppStyles,
		extractVendorStyles,

		// Inject the build date as an environment variable 
		new webpack.DefinePlugin({
			'process.env':{
				'BUILD_DATE': JSON.stringify(new Date())
			}
		}),
		
		// Inject the required assets into the template index file
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: 'src/assets/index.html',
		}),

		// Copy public files into the dist folder
		new CopyWebpackPlugin([
			{ from: 'src/public' }
		]),
	],
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].js',
		publicPath: '/',
	},
};
