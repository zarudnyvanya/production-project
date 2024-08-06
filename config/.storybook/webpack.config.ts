import { buildCssLoader } from './../build/loaders/buildCssLoader'
import { BuildOptions, BuildPaths } from './../build/types/config'
import webpack from 'webpack'
import path from 'path'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, './../../src'),
  }

  const storybookOptions: BuildOptions = {
    isDev: true,
    mode: 'development',
    port: 3000,
    paths,
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fileLoaderRule.exclude = /\.svg$/

  config.module?.rules?.unshift({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.resolve?.modules?.push(paths.src)
  config.module?.rules?.push(buildCssLoader(storybookOptions))

  return config
}
