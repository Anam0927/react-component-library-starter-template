import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.module, format: 'esm', sourcemap: true }],
    plugins: [
      replace({
        'process.env.CDN_URL': JSON.stringify('https://tyke-assets.s3.amazonaws.com'),
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        modules: true,
        extensions: ['.scss'],
        plugins: [autoprefixer()],
        sourceMap: true,
        minimize: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['./src/**/*.stories.@(js|jsx|ts|tsx)', './src/**/*.test.@(js|jsx|ts|tsx)'],
      }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
