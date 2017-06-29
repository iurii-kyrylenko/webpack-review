const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const parts = require('./webpack.parts')

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
}

const commonConfig = {
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
        test: /\.(png|jpg|swg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        use: ['file-loader']
      },
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
}

const productionConfig = merge(
  commonConfig,
  parts.extractCSS({
    use: {
      loader: 'css-loader',
      options: { modules: true }
    }
  })
)

const developmentConfig = merge(
  commonConfig,
  parts.loadCSS(),
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
