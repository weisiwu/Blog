const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('请输入文件名: \n', (name) => {
    const post_path = path.join(__dirname, '../', 'source/_posts');
    const template_path = path.join(post_path, 'template.md');
    const target_path = path.join(post_path, `${name}.md`);
    
    fs.copyFile(template_path, target_path, fs.constants.COPYFILE_EXCL, (err) => {
        if (!err) { console.log(`创建${name}.md成功!`); }
        readline.close();
    });
});