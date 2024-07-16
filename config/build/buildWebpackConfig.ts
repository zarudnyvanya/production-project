import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'
import TerserPlugin from 'terser-webpack-plugin'
import { buildOptimizationPlugins } from './buildOptimizationPlugins'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options
  return {
    mode,
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
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    optimization: {
      minimizer: buildOptimizationPlugins(options),
    },
  }
}
