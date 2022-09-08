import { join } from 'path';

export default {
  chainWebpack(memo) {
    memo.plugins.delete('copy');

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
