import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  }

  const mode = env.mode ?? 'development'
  const PORT = env.port ?? 3000
  const apiUrl = env.apiUrl ?? process.env.apiUrl ?? 'http://localhost:8000'
  const isDev = mode === 'development'

  // env.apiUrl

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    apiUrl,
    isDev,
    port: PORT,
    project: 'frontend',
  })

  return config
}
