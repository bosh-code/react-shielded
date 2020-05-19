import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    exports: 'named',
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: ['prop-types', 'react', 'react-dom', 'react-use-keypress'],
  plugins: [
    svgr(),
    postcss({
      extensions: ['.css'],
      modules: true,
      plugins: [autoprefixer(), cssnano()],
    }),
    babel(),
  ],
};
