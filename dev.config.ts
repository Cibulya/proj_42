import path from 'path';
import webpack from 'webpack';
// import { BuildOptions } from './types/index';
import { BuildOptions } from './config/build/types';
// import { buildPlugins } from './buildPlugins';
import { buildPlugins } from './config/build/buildPlugins';
// import { buildLoaders } from './buildLoaders';
import { buildLoaders } from './config/build/buildLoaders';
// import { buildResolves } from './buildResolvesrs';
import { buildResolves } from './config/build/buildResolvesrs';
// import { quickDev } from './cDevServer';
import { quickDev } from './config/build/cDevServer';
// import { BuildEnv } from './types/index';
import { BuildEnv } from './config/build/types';
// import { BuildPaths } from './types/index';
import { BuildPaths } from './config/build/types';

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
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolves(),
		devtool: 'inline-source-map',
		devServer: quickDev(options),
	};
}

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
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
