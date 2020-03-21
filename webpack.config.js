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
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: true,
    usedExports: true
  },
  externals: [
    'react',
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
  }
};