import webpack from 'webpack';
import { BuildOptions } from './types';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const fileLoader = {
    test: /.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const imgLoader = {
    test: /\.(avif|jpe?g|png|webp)$/,
    type: 'asset',
  };
  const soundLoader = {
    test: /\.(mp3|ogg)$/,
    type: 'asset/resource',
    generator: {
      filename: 'assets/media/[name][ext]',
    },
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name][ext]',
    },
  };
  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.(tsx|ts|js)$/i,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
        ],
      },
    },
  };
  return [fileLoader, soundLoader, svgLoader, fontLoader, babelLoader, typescriptLoader, cssLoader, imgLoader];
}
