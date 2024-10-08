---
title: Hello-Hexo
date: 2023-12-17 01:09:26
tags: [Hexo, 工具]
category: Hexo
archive: false
# 首页文章封面大图
index_img: /img/bg.png
# 文章顶部大图
banner_img: /img/bg.png
---

# 前记 📘

&emsp;&emsp;你好呀 😊，欢迎来到 **_Wu Hao_** 的 `Hexo` 博客！在去年的这个时候也尝试过搭建自己的 `Hexo` 博客，但是由于疫情、工具熟练度等原因，经历了几次删库，没有坚持更新博客。

&emsp;&emsp;今天（目前已是 17 日凌晨，准确来说应该是 12 月 16 日）刚出差回来，拥有了短暂喘息的机会，蓦然回首，还是希望拥有一个记录自己日常学习及心得的博客。于是就有了这个博客。

&emsp;&emsp;工欲善其事，必先利其器。因此在这第一篇博客中，我标注了 `Tool` 标签，来记录一些管理 `Hexo` 管理、部署等使用方法，以应对后续因忘记管理命令而导致不想再更新（之前的博客大概率是因为此而夭折，这确实是一件令我头痛的问题）。

&emsp;&emsp;我不想 `Hexo` 对我只是一个简单记录技术学习的博客，我更想它能够充当一个树洞，能够接纳我一些无厘头的想法、感悟以及无所事事的日常碎碎念（嘿嘿:-P)，希望自己能够坚持更新下去吧！

&emsp;&emsp;最后以一句我最喜欢的古文之一的名句和大家共勉，同时也设置为了博客首页的 Slogan👇

> &emsp;**穷且益坚，不坠青云之志**

# 葵花宝典 📙

## 操作命令 ✍️

`Hexo` 初始化

    hexo init #类似于git init

`Hexo` 添加文章

    hexo new blog-name

`Hexo` 删除文章

`Hexo` 删除文章只需要删除./source/\_posts 文件夹下对应的`.md`文件后，重新编译即可

`Hexo` 清除缓存

    hexo clean

`Hexo` 生成（暂时可以理解为编译

    hexo g(enerate)

`Hexo` 服务预览

    hexo s(erver)

`Hexo` 部署

    hexo d(eploy)

`Hexo` 组合操作

    hexo d -g    # 先生成后部署

## 实用工具 🛠️

`Hexo` 热部署
&emsp;&emsp;如果想要更新代码后试试刷新调试界面，可以尝试使用 `hexo-browsersync` 这款工具，安装方式也只需要使用 `npm` 安装，安装后即可使用：

    npm install hexo-browsersync --save

`Fluid` 主题配置
&emsp;&emsp;本着简洁、美观、好用的想法，本博客使用的主题是 `Fluid` ，配置文档可以参考 [Hexo Fluid 用户手册](https://hexo.fluid-dev.com/docs/guide)

## 迁移终端 🏠

&emsp;&emsp;背景：开始以为 `Hexo` 的部署是将所有源代码上传到 github 再进行组织渲染的，后来发现不对，好像只是把 gernate 的文件上传到了 github，于是参照[Hexo 在多台电脑上提交和更新](https://blog.csdn.net/K1052176873/article/details/122879462)在 github 新建了 `source` 默认分支用来保存源代码， `main` 分支用来进行 Page 托管展示界面，现将简要流程进行梳理。

1. github 新建 `source` 分支，并在仓库 Settings->General->Default branch 中将其设置为默认分支，Settings->Pages->Build and Deploy 中的 branch 仍是 `main` 分支
2. 将该仓库 clone 到本地（此时 clone 到应该是 `source` 默认分支），下载的文件夹中仅留下 `.git` 文件夹，删除其余文件。返回原 hexo 根目录，将该文件夹下除了 `.deploy_git` 以外的所有文件复制到 clone 下来的文件夹。此时该文件夹中应有 `.gitignore` 文件，用以忽略不需要 git 的文件，内容如下：

```text
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
_multiconfig.yml
```

如果之前有 clone 过 theme 文件，需要把主题文件夹中的.git 删除掉，因为 git 无法嵌套上传

3. 将 clone 并修改后的文件夹推送到远程仓库

```sh
git add .
git commit -m init
git push
```

4. 后续写好文章，部署后，也需要将整个网站的管理文件上传至 source 分支进行同步，以便其他终端进行拉取

5. 其他终端配置好 github 的 ssh 后，就可以直接 clone 仓库到本地，并在 xxx.github.io 文件夹下执行以下命令，自动安装 `packages.json` 中的依赖，就可以生成、编译和部署啦～

```sh
npm install hexo
npm install
npm install hexo-deployer-git
```

6. 注意，Windows环境执行完以上命令，紧接着执行hexo相关命令时，可能会出现命令不存在的情况。此时需要前往环境变量中，将`./node_modules/.bin`文件夹加入到path环境变量中（该文件夹中含有hexo.exe）