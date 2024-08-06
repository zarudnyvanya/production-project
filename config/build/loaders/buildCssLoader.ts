import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from '../types/config'
import path from 'path'

export const buildCssLoader = (options: BuildOptions) => {
  const { isDev } = options

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
            namedExport: false,
            exportLocalsConvention: 'as-is',
          },
        },
      },
      // Compiles Sass to CSS

      'sass-loader',
    ],
  }

  return cssLoader
}
