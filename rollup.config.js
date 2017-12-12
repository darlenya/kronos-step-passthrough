import pkg from './package.json';

export default {
  input: pkg.module,
  output: {
    file: pkg.main,
    format: 'cjs'
  },
  plugins: [],
  external: ['kronos-step', 'kronos-endpoint']
};
