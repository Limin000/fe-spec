#!/usr/bin/env sh
# 抛出异常信息

push_addr=`git remote get-url --push origin`
commit_info=`git describe --all --always --long`
dist_path=`docs/.vuepress/dist`
push_branch=gh-pages

npm run docs:build

cd $dist_path

git init
git add -A
git commit -m "deploy: $commit_info"

cd - 
rm -rf $dist_path