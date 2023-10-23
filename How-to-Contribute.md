# 如何参与贡献

本项目使用 `markdown` + `docsify` + `Github Pages` 部署

!> docsify 扩展 markdown 的[新语法](https://docsify.js.org/#/zh-cn/helpers)，有部分新加入的语法

首先需要确保本地有[nodejs](https://nodejs.org/en)环境，且已经安装好了 [docsify](https://docsify.js.org/#/zh-cn/quickstart) 依赖，将项目 fork 到自己仓库后 clone 到本地，创建新分支进行修改，修改完成后 push 到远程仓库，然后向本仓库提起 pr 即可

!> 注意，为了避免一些莫名其妙的错误，请勿使用相对路径，在使用时请使用从 docs 开始的绝对路径`<br/>`例如: `docs/PFCC导师/README.md`

## 项目结构

```
├─docs
│  ├─PFCC学员
|      ├─Lylinnnnn
|      └─...
│  ├─PFCC导师
|      ├─Ligoml
|      └─...
│  └─团队故事合集
│      ├─第一期
|      └─...
│  └─外部成员故事
│      ├─艾AA
|      └─...
├─README.md
├─_navbar.md
├─_sidebar.md
├─_converpage.md
├─How to contribute
├─.nojekyll
└─脚本
```

### 创建个人文件夹

添加新文件时需要按照固定的文档结构添加，以确保可以被 docsify 正常解析到，在添加新文件时，请在对应栏目内创建个人文件夹，并创建 `README.md`, `_siderbar.md`, `.nojekyll`三个基础文件，创建 `故事合集`文件夹，并在 `README.md`添加对应的介绍

`_siderbar.md`中的基础内容如下(以「PFCC导师-Ligoml」为参考, 添加后请修改到对应的目录下):

```markdown
-   [README](docs/PFCC导师/Ligoml/README.md)
-   故事合集
    -   [Ligoml](docs/PFCC导师/Ligoml/故事合集/story.md)
```

在当前目录创建完成之后，还需要在 `docs/PFCC导师/README.md`中添加对应的更新信息，指向当前科目的 `README.md`文件

做完基础的配置之后，就可以添加自己的故事到对应目录下, 添加完成后，记得在当前目录的 `_sidebar.md`中添加对应的故事条目以确保侧边栏可以正常显示该故事条目

### 上传故事

如果你已经有了个人文件夹，那么你只需要将自己的故事文件上传到对应 `故事合集` (首次上传需自行创建)，并在 `docs/xxx/README.md`中添加故事信息，确保可以在侧边栏显示


## 如何添加 pdf 文件预览

!> 注意：由于Github限制每个仓库的大小为500MB，为了确保仓库容量，请在自己的Github创建一个单独的repository，然后将pdf文件传到自己的仓库中，最后在刚刚创建的md文件中按照下面的格式要求写入预览pdf的链接即可<br/>
另外，尽量在上传前对自己的pdf文件进行**压缩**，减少文件大小，加快响应时间，可使用 [I love pdf](https://www.ilovepdf.com/zh-cn/compress_pdf)网站进行压缩

在添加 pdf 文件时候，需要先创建一个对应的 markdown 文件，在文件中按照下面的格式书写即可链接到 pdf 文件

````txt
```pdf
 path to the pdf file
```

````

例如, 我想在 `docs/PFCC导师/Ligoml/story.md`中引用一个 pdf, 我只需要在 `story.md`中写入下面的内容即可:

````txt
```pdf
预览pdf的url
```
````