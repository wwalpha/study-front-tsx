const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
          'ts-loader',
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