<!-- @format -->

## 使用说明

记录下，免得自己忘记了怎么弄

1. 文档放在 ./Blog/source/\_posts 下
2. Blog 保存的是文档草稿，public 目录下是网站使用的网页文档，两个目录都是 git respository，需要分别提交。

**文档发布&&更新**

1. 在最上层目录(./Blog)运行: npm run deploy
2. 命令会自动更新文档并发布。
3. 在最上层目录(./Blog)手动添加提交，并推送远程

**脚本工具使用说明**

1. npm run debug: 本地查看网站效果
2. npm run sync: 同步两个仓库代码
3. npm run deploy: 将草稿发布到网站上
4. npm run publish: 本地生成网站文件，但不发布
5. npm run generate: 生成新的空白草稿

## 文件夹说明

**public**: 生成的文档存放目录  
**source**: 原始文稿  
**themes**: 样式主题

## TODOLIST

1. 模板管理方式优化，目前是通过 submodule 的方式去做的，每次需要更新两个路径，麻烦而且容易遇到冲突。
2. 文档生产明确化，虽然在 npm 脚本中，写了 build 命令，但其实没法直接一键生成更新博客
3. 插件管理系统完善，让在页面上插入三方能力变得简单。
4. 添加轮播插件
5. 样式改版
6. 单条文章，搞简洁点
7. 文章顶部给简介
   https://fengge.site/2022/07/24/hexo/hexo%E7%BC%96%E8%AF%91%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4/
8. 全局 loading
9. 文章是否可以自动生成梗概的图片

## 准备参考的样式
