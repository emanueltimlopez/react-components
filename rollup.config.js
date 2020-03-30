import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
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
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
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
  ]
}
