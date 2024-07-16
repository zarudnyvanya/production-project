import TerserPlugin from 'terser-webpack-plugin'
import { WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'

export const buildOptimizationPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new TerserPlugin({
      extractComments: false,
    }),
  ]
}
