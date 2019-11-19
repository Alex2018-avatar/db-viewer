const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['@babel/polyfill', './web/js/index.js', './web/scss/style.scss'],
  output: {
    path: path.resolve(__dirname, 'api/public'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './api/public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './web/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      reloadAll: true,
      'exclude': ['node_modules']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}