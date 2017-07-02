const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const parts = require('./webpack.parts')

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
}

const commonConfig = merge(
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.xml$/,
          use: ['xml-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack Review'
      })
    ]
  },
  parts.loadFonts({ options: {
    name: '[name].[hash].[ext]'
  }})
)

const productionConfig = merge(
  commonConfig,
  parts.loadImages({
    options: {
      limit: 5000,
      name: '[name].[hash].[ext]'
    }
  }),
  parts.extractCSS({
    use: [
      {
        loader: 'css-loader',
        options: { modules: false }
      },
      parts.autoprefix()
    ]
  })
)

const developmentConfig = merge(
  commonConfig,
  parts.loadImages(),
  parts.loadCSS({ options: { modules: false } }),
  parts.devServer({
    host: process.env.HOST, // Defaults to 'localhost'
    port: process.env.PORT  // Defaults to 8080
  }),
  parts.lintJavaScript({
    options: { emitWarning: true },
    include: PATHS.app
  })
)

module.exports = (env) => (
  env === 'production' ? productionConfig : developmentConfig
)
