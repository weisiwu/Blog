## 写作说明
1. 用markdown格式书写文章  
2. 文档放在 ./Blog/source/_posts 下  
3. Blog保存的是文档草稿，public目录下是网站使用的网页文档，两个目录都是git respository，需要分别提交。  

## 初始化
安装依赖  
``` shell
npm i
```
之后就可以开始书写自己的文档了，发布请按照如下指引进行。  

## 文档发布&&更新
1. 在最上层目录(./Blog)运行: npm run deploy
2. 命令会自动更新文档并发布。  
3. 在最上层目录(./Blog)手动添加提交，并推送远程  

## 脚本工具使用说明
1. npm run debug: 本地查看网站效果
2. npm run sync: 同步两个仓库代码
3. npm run deploy: 将草稿发布到网站上
4. npm run publish: 本地生成网站文件，但不发布 
5. npm run generate: 生成新的空白草稿

## 文件夹说明
**public**: 生成的文档存放目录  
**source**: 原始文稿  
**themes**: 样式主题  
