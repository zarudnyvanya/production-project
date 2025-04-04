import { buildCssLoader } from './../build/loaders/buildCssLoader'
import { BuildOptions, BuildPaths } from './../build/types/config'
import webpack, { DefinePlugin } from 'webpack'
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
    apiUrl: '',
    project: 'storybook',
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

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(storybookOptions.isDev),
      __API__: JSON.stringify(storybookOptions.apiUrl),
      __PROJECT__: JSON.stringify(storybookOptions.project),
    }),
  )

  return config
}
