const path = require('path');
const externalReact = require('webpack-external-react');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.wp.umd.js',
    libraryTarget: 'umd',
    library: 'react-components',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  externals: {
    ...externalReact.externals,
    'styled-components': {
      'commonjs' : 'styled-components',
      'commonjs2' : 'styled-components',
      'amd' : 'styled-components'
    }
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