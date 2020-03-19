const path = require('path');
const { readdirSync, existsSync } = require('fs');

const entries = {};

readdirSync('./modules').forEach((name) => {
  const index = `./modules/${name}/index.js`;
  if (existsSync(index) && name !== 'all') {
    entries[`${name}/index`] = index;
  }
});

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'components',
  },
  optimization: {
    runtimeChunk: false,
    usedExports: true
  },
  externals: [
    'react',
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
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