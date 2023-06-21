/** @format */

import hexo from 'hexo';
import { deleteSync as del } from 'del';
import sgit from 'simple-git';

const git = sgit();

// del方法无法被require引入，通过加type="module"解决
// https://stackoverflow.com/questions/69081410/error-err-require-esm-require-of-es-module-not-supported
// 引入一个新问题，在一个node程序中，如果不同的包使用不同的引入方式，需要怎么处理？

const server = new hexo(process.cwd(), {});

function clean() {
  del(['./db.json', './public/**', '!./public/.git']);
  return server;
}

server
  .init()
  .then(clean)
  .then(() => {
    server
      .call('generate', {
        force: true,
      })
      .then(() => {
        // git.cwd('./public');
        try {
          git.add('./*');
          git.commit('Site updated: ' + new Date().toISOString());
          git.push('origin', 'master');
          git.cwd('../');
          server.exit();
        } catch (e) {
          console.log(`Blog push Error: ${JSON.stringify(e)}`);
        }
      });
  });
