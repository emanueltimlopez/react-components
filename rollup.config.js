import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import commonjs from '@rollup/plugin-commonjs';
import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactIs from 'react-is';
import * as propTypes from 'prop-types';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      sourcemap: true,
      name: 'react-components'
    },
  ],
  external: [
    {'react': 'React'},
    {'styled-components': 'styled'}
  ],
  plugins: [
    external(),
    url(),
    svgr(),
    babel({
      exclude: '**/node_modules/**'
    }),
    resolve(),
    commonjs({
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom),
        'react-is': Object.keys(reactIs),
        'prop-types': Object.keys(propTypes)
      }
    })
  ]
}
