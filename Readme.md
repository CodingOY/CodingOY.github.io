# 更新仓库
https://kimi.moonshot.cn/chat/cqhqdp2tnn0o6av0kbq0
```
cd Blog
git init

git add .

git commit -m "Initial commit"

git remote add origin git@github.com:CodingOY/CodingOY.github.io.git

git push -u origin main

#检查 Git 状态
git status

#检查提交历史：
git log

#检查远程仓库的状态：
git remote -v

hexo cl
hexo g
hexo d
```

# 更改图床图片
```
https://cdn.jsdelivr.net/gh/CodingOY/MyPic@版本号/图片名称
https://unpkg.com/gh/CodingOY/MyPic@1.0/touxiang.jpg
```

https://cdn.jsdelivr.net/gh/CodingOY/MyPic@1.0.2/xiaoyu.gif

---
运行命令
```bash
hexo cl
hexo g
hexo s
```


## 写作
```
---
title: Hello World 标题
categories: 前端开发 标签
---
```

## 友链
class_name	【必填】友链分类名
class_desc	【可选】友链分类描述
flink_style	【必填】flexcard或者anzhiyu或者telescopic
hundredSuffix	【可选】解决共同进步板块头像质量问题，配置后共同进步板块的头像会添加该后缀（请确保你的图片加上 hundredSuffix 的配置后依然可以访问）。 例如:hundredSuffix: "!w120"
link_list	【必须】友链列表
link_list.name	【必须】友链名称
link_list.link	【必须】友链链接
link_list.avatar	【必须】友链头像
link_list.descr	【必须】友链描述
link_list.siteshot	【可选】flink_style 为 flexcard 或 telescopic 时友链的站点图片
link_list.recommend	【可选】快捷选项，等于color:"" + tag: "荐"
link_list.tag	【可选】左上角的 tag，为当前友链打上标签 例如:"推荐"
link_list.color	【可选】tag 的十六进制背景颜色例如: "#646cff"，提供了两个快捷颜色选项分别是vip和speed

使用插件插入本地图片
要使用hexo-asset-img插件，首先需要在Hexo的插件目录下安装它。可以通过npm命令进行安装：
```bash
npm install hexo-asset-img --save
```
安装完成后，在Hexo的配置文件_config.yml中添加以下配置：
```
asset_img:
  enable: true
  # 图片目录，相对于source目录
  dir: images
  # 是否压缩图片
  compress: true
  # 压缩质量，0-1之间，默认为0.6
  quality: 0.6
  # 是否生成缩略图
  thumbnail: true
  # 缩略图大小，默认为120x120
  thumbnail_size: 120x120
  ```
使用方法
在Hexo的Markdown文件中，我们可以使用hexo-asset-img插件来插入图片。例如，假设我们有一张名为example.jpg的图片，放在source/images目录下，我们可以使用以下语法来插入它：
```
![Example Image](images/example.jpg)
```
hexo-asset-img插件会自动处理这张图片，包括压缩、调整大小等，然后将其插入到文章中。如果启用了缩略图功能，还会生成一个缩略图并显示在文章中。