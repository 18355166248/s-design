import {defineConfig, UserConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import typescriptRollup from '@rollup/plugin-typescript';

const {version} = require('./package.json');

console.log('version', version);

const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig(({mode}: UserConfig) => {
  if (mode === 'html') {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist-html',
      },
    };
  }

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: resolvePath('src/components/index.ts'),
        name: 'index',
        fileName: format => `index.${format}.js`,
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        input: {
          Button: resolvePath('src/components/Button/index.tsx'),
        },
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'react',
            'react-dom': 'react-dom',
          },
          banner: '/* s-design-jiang version ' + version + ' */',
          footer: '/* 关注我 github@18355166248 */',
        },
        plugins: [
          typescriptRollup({
            target: 'es2015', // 这里指定编译到的版本，
            rootDir: resolvePath('src/components/'),
            declaration: true,
            declarationDir: resolvePath('dist'),
            exclude: resolvePath('node_modules/**'),
            allowSyntheticDefaultImports: true,
          }),
        ],
      },
    },
    clearScreen: false,
  };
});
