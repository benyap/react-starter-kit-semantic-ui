const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// This is the configuration used when building for the dev environment
module.exports = merge(common, {
	devtool: 'inline-source-map'
});
