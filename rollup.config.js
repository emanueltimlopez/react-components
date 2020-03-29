import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
    },
  ],
  external: [
    'react',
    'styled-components'
  ],
  plugins: [
    external(),
    url(),
    svgr(),
    babel({
      exclude: '**/node_modules/**'
    }),
    resolve()
  ]
}
