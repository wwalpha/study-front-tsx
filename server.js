const webpack = require('webpack');
const webpackConfig = require('./webpack/webpack.config');

const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const path = require('path');

const compiler = webpack(webpackConfig);
const express = require('express');

const app = express();

app.use(dev(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(hot(compiler));

app.use('*', (req, res, next) => {
  const fileName = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(fileName, (err, result) => {
    if (err) {
      next(err);
      return;
    }

    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

