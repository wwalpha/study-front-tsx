const path = require('path');
const Webpack = require('webpack');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'cheap-module-eval-source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'GetNewList.js',
    path: path.resolve(__dirname, '../../build/words'),
  },
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ]
  },
  externals: ['aws-sdk'],
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js'
    ],
    alias: {
      src: path.resolve(__dirname, './src/'),
    },
  },
  plugins: [
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development') // 環境変数はwebpackで展開されるので、ここで設定します
      }
    }),
    new Webpack.LoaderOptionsPlugin({
      debug: false
    })
  ],
  bail: true,
}
