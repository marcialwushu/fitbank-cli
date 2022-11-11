export const webpack = `
const path = require('path')
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.svg'],
  },
  module: {
    rules: [
    {
        test: /\.js(x)?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-typescript",           
            "@babel/preset-env"
          ]
        }
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    })
  ]
}
`