const path = require('path');
const externalReact = require('webpack-external-react');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'react-components',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    ...externalReact.externals,
    'styled-components': 'styled-components'
  },
  module: {
    noParse: externalReact.noParse,
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader"
      },
    ]
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'styled-components': path.resolve('./node_modules/styled-components'),
    }
  }
}