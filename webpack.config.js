'use strict';


const NODE_ENV = process.env.NODE_ENV || 'development',
	isDevelopment = NODE_ENV === 'development';

const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const AssetsPlugin = require('assets-webpack-plugin');

let app = 'index.js';

let plugins = [];

plugins.push(new webpack.NoEmitOnErrorsPlugin());

plugins.push(new webpack.EnvironmentPlugin(Object.keys(process.env)));

plugins.push(new webpack.optimize.CommonsChunkPlugin({
	name: 'vendor',
	filename: 'vendor_[chunkhash].js',
	minChunks(module, count) {
		var context = module.context;
		return context && context.indexOf('node_modules') >= 0;
	},
}));


if (!isDevelopment) {

	app = 'index_production.js';

	plugins.push(new UglifyJSPlugin());
	plugins.push(new webpack.LoaderOptionsPlugin({minimize: true}));
	plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
	plugins.push(new CompressionPlugin({
		asset: "[path].gz[query]",
		algorithm: "gzip",
		test: /\.js$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	}));

} else {
	// plugins.push(new BundleAnalyzerPlugin({
	// 	analyzerMode: 'static'
	// }))

}

plugins.push(new AssetsPlugin({filename: 'assets.json'}));


module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './' + app,
		vendor: [
			'react',
			'redux',
			'react-dom',
			'react-redux',
			'react-router',
			'react-router-redux',
			'redux-thunk',
			'redux-promise-middleware',
			'babel-polyfill',
			'object-assign'
		]
	},
	output: {
		path: __dirname + '/public/js/build',
		filename: 'bundle_[chunkhash].js',
	},
	// watch: isDevelopment,
	watchOptions: {
		//запускати перезбірку через 100 мс після збереження файла. Default 300
		aggregateTimeout: 100,
		poll: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules(?!(\/newbuild_library|\/redux-promise-middleware))/,
				loader: 'babel-loader',
				options: {
					presets: ["es2015-ie", 'stage-0', 'react'],
					plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-object-assign', 'transform-async-to-generator']
				}
			}
		]
	},
	devtool: isDevelopment ? 'eval-source-map' : false,
	plugins: plugins,
	resolve: {
		extensions: ['.*', '.js', '.jsx']
	}
};
