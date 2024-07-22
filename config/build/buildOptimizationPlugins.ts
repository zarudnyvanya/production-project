import TerserPlugin from 'terser-webpack-plugin'
import { WebpackPluginInstance } from 'webpack'

export const buildOptimizationPlugins = (): WebpackPluginInstance[] => {
  return [
    new TerserPlugin({
      extractComments: false,
    }),
  ]
}
