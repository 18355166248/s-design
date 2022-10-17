const process = require('child_process');

(function () {
  process.exec('cd ./packages/jiang-design && pnpm link', error => {
    if (!error) {
      console.log('💚 link成功');
      // 成功
      process.exec('cd ../../ && pnpm link jiang-design', error => {
        if (!error) {
          console.log('💚 主项目link jiang-design 成功');
          // 成功
        } else {
          // 失败
        }
      });
    } else {
      // 失败
    }
  });
})();
