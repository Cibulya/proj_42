import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

export function buildPlugins({
	paths,
	isDev
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		//new ESLintPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		//new StylelintPlugin(),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		})
	];
}
