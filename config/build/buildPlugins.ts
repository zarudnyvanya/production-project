import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import Dotenv from 'dotenv-webpack'
// import ESLintPlugin from 'eslint-webpack-plugin'

import CopyPlugin from 'copy-webpack-plugin'
import { ProgressPlugin, DefinePlugin, WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
// import path from 'node:path'

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    // new ESLintPlugin({
    //   overrideConfigFile: path.resolve(__dirname, 'eslint.config.mjs'),
    //   configType: 'flat',
    // }),
    new Dotenv({
      path: './../../.env',
      systemvars: true,
    }),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
  ]

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    )
  }

  return plugins
}
