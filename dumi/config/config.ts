import {join} from 'path';

export default {
  outputPath: '../dist', // 打包到项目根路径
  mode: 'site',
  favicon: '/logo.svg',
  logo: '/logo.svg',
  chainWebpack(memo) {
    // memo.plugins.delete('copy'); // TODO: 这行会影响静态资源的打包

    memo.module
      .rule('js')
      .test(/\.(js|mjs|jsx|ts|tsx)$/)
      .include.add(join(__dirname, '../../', 'src/components'))
      .end()
      .exclude.add(/node_modules/)
      .end()
      .use('babel-loader');
  },
  alias: {
    '@': join(__dirname, '../../', 'src'),
  },
};
