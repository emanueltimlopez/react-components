const path = require('path');
const { readdirSync, existsSync } = require('fs');

const entries = {};

readdirSync('./modules').forEach((name) => {
  const indexJS = `./modules/${name}/index.js`;
  if (existsSync(indexJS) && name !== 'all') {
    entries[name] = indexJS;
  }
});

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true
  },
  externals: [
    'react',
    'styled-components'
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
};