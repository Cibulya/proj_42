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
