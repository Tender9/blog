#!/usr/bin/env sh
 
# 忽略错误
set -e  #有错误抛出错误
 
# 构建
yarn run build  #然后执行打包命令
 
# 进入待发布的目录
cd .vitepress/dist  #进到dist目录
 
git init  #执行这些git命令
git add -A
git commit -m 'deploy'
 
git push -f git@github.com:Tender9/blog.git master:root-pages  #提交到这个分支
 
cd -
 
rm -rf .vitepress/dist  #删除 dist 文件夹