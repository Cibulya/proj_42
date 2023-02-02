const path = require('path');

import { BuildOptions } from './types';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
export function quickDev(options: BuildOptions): DevServerConfiguration {
	return {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3000,
		devMiddleware: {
			index: 'index.html',
			writeToDisk: true,
		},
	};
}
