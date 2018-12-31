import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from "rollup-plugin-terser"

module.exports = {
  input: './src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    name: 'VFormLayout'
  },

  plugins: [
    vue(),
    buble(),
    resolve({
      browser: true,
      jsnext: true,
      modulesOnly: true
    }),
    commonjs(),
    terser()
  ]
}