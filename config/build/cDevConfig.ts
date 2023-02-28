import webpack from 'webpack';
import { BuildOptions } from './types/index';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolvesrs';
import { quickDev } from './cDevServer';

export function cDevWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { paths, mode, isDev } = options;

	return {
		mode: 'development',
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolves(options),
		devtool: 'inline-source-map',
		devServer: quickDev(options),
	};
}
