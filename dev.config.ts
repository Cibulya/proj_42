import path from 'path';
import webpack from 'webpack';
import { cDevWebpackConfig } from './config/build/cDevConfig';
import { BuildEnv } from './config/build/types';
import { BuildPaths } from './config/build/types';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;

	const devConfig: webpack.Configuration = cDevWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});
	return devConfig;
};
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// module.exports = {
// 	entry: './src/index.tsx',
// 	mode: 'development',
// 	devServer: {
// 		static: {
// 			directory: path.join(__dirname, 'dist'),
// 		},
// 		port: 9000,
// 		devMiddleware: {
// 			index: 'index.html',
// 			writeToDisk: true,
// 		},
// 	},
// 	plugins: [
// 		new CleanWebpackPlugin(),
// 		new HtmlWebpackPlugin({
// 			title: 'Some title',
// 			template: 'public/index.html',
// 		}),
// 	],
// 	resolve: {
// 		extensions: ['.tsx', '.ts', '.js'],
// 	},
// 	output: {
// 		filename: 'bundle.js',
// 		path: path.resolve(__dirname, 'dist'),
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.tsx$/i,
// 				use: 'ts-loader',
// 				exclude: /node_modules/,
// 			},
// 			{
// 				test: /\.css$/i,
// 				use: ['style-loader', 'css-loader'],
// 			},
// 			{
// 				test: /\.scss$/,
// 				use: ['style-loader', 'css-loader', 'sass-loader'],
// 			},
// 			{
// 				test: /\.(woff|woff2|eot|ttf|otf)$/i,
// 				type: 'asset/resource',
// 				generator: {
// 					filename: 'assets/fonts/[name][ext]',
// 				},
// 			},
// 			{
// 				test: /\.json$/i,
// 			},
// 		],
// 	},
// };
