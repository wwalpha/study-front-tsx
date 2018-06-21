const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

configs = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './index.tsx',
    'webpack-hot-middleware/client',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
      app: path.resolve(__dirname, '../src/container/app'),
      auth: path.resolve(__dirname, '../src/container/auth'),
      reduxform: path.resolve(__dirname, '../src/components/reduxform/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [
                '@babel/plugin-syntax-typescript',
                '@babel/plugin-syntax-decorators',
                '@babel/plugin-syntax-jsx',
                'react-hot-loader/babel',
              ],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
    ]
  },
  plugins: [
    new HappyPack({
      loaders: ['babel-loader', 'ts-loader']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Study Front',
      filename: 'index.html',
      template: path.join(__dirname, '../index.template.ejs'),
      minify: false,
      hash: true,
      inject: 'body',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false
    })
  ],
  bail: true,
};

// externals: ['aws-sdk'],

module.exports = configs;