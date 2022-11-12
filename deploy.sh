#.sh

# 确保脚本抛出遇到的错误
set -e

# 1、生成静态文件
# yarn build

# 2、进入生成的文件夹
# cd build

# 3、提交
# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

# git init
# git remote add origin https://github.com/ihoneys/ihoneys.github.io.git
# git add -A
# git commit -m 'docs: some'

# 3-1. 提交到github和gitee仓库仓库中

# 如果想用username.gitee.io或者username.github.io访问你的网站，必须让新建的仓库名和你的用户名一致！！

# A 执行提交到github仓库的master中（USERNAME是你的仓库名）
# 如果你想要部署到 https://USERNAME.github.io
# B 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目

# 提交到github
# git push origin master:gh-pages -f 
# 提交到gitee
# git push -f git@gitee.com:{name}/{name}.git master

# 提交静态文件到部署的仓库结束
# 开始提交源码

cd ~/Desktop/my-blog-finaly
git add .
git commit -m 'docs: some'
git push origin master -f
#提交源码到github结束

# git push -f {git url} master
# 提交源码到gitee结束
# 结束
