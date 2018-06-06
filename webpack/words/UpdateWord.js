const baseConfig = require('../webpack.config');
const merge = require('webpack-merge');
const path = require('path');

const config = {
  entry: './src/words/UpdateWord.ts',
  output: {
    filename: 'UpdateWord.js',
    path: path.resolve(__dirname, '../../build/words'),
  }
}

const merged = merge(baseConfig, config);

module.exports = merged;