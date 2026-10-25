# 孙翔宇 · AI 产品经理个人网站

## 文件结构

```text
仓库根目录/
├── .github/workflows/pages.yml  # GitHub Actions 自动部署
├── .gitignore
├── .nojekyll                    # 从分支发布时禁用 Jekyll
├── README.md
├── DEPLOY.md                    # 部署、自定义域名和排错
├── index.html                   # 网站首页
├── style.css
├── app.js                       # 项目筛选、详情弹窗
├── navigation.js                # 目录高亮、两页简历切换
├── library.js                   # 作品文档展示和项目关联
├── documents.js                 # 文档清单
├── reader.html                  # PDF 页图 / 脑图阅读器
├── reader.css
├── reader.js
├── resume.pdf                   # 完整简历下载
├── assets/                      # 项目 SVG 封面和简历页图
└── documents/                   # 作品 PDF、页图、XMind、JSON
```

上传的是这个目录**里面的内容**，不是把整个 `github-pages` 目录作为仓库中的一层子目录。GitHub 网页不会自动解压 ZIP，请先解压再上传文件。

## 最快上线：网页上传 + 从分支发布

1. 新建 GitHub Public 仓库，例如 `portfolio`；如果创建个人主页，名称必须是 `你的用户名.github.io`。
2. 进入仓库 → **Add file → Upload files**，上传本目录中的网站文件和 `assets`、`documents` 两个目录，提交到 `main`。
3. 本目录中的 `.nojekyll` 是隐藏文件。若上传界面没有带上它，在仓库 **Add file → Create new file** 新建名为 `.nojekyll` 的文件，可填一行注释后提交。无需上传 ZIP 本身。
4. 仓库 **Settings → Pages → Build and deployment**，Source 选择 **Deploy from a branch**，Branch 选择 **main**，Folder 选择 **/(root)**，保存。
5. 等 GitHub 内置的 Pages 发布任务完成，在同一页点击 **Visit site**。

这条方法不需要上传 `.github` 工作流目录，适合直接用网页操作。

## 自动部署：使用已提供的 GitHub Actions 工作流

1. 将本目录全部内容（包括 `.github/workflows/pages.yml`）提交到仓库的 `main` 分支。
2. **Settings → Pages → Source** 改选 **GitHub Actions**。它与上面的“从分支发布”二选一。
3. 在 **Actions → Deploy portfolio to GitHub Pages → Run workflow → main** 手动运行首次发布。
4. 后续推送到 `main` 时自动更新。部署产物仅包含网站文件，不包含 README 和部署说明。
5. 如果默认分支叫 `master`，先将其改为 `main`，或对应修改工作流 `branches: [main]`。

详细步骤、可选命令行上传、自定义域名与排错见 [DEPLOY.md](DEPLOY.md)。

## 页面地址

- 普通项目仓库 `portfolio`：`https://你的用户名.github.io/portfolio/`
- 个人主页仓库 `你的用户名.github.io`：`https://你的用户名.github.io/`
- 绑定域名后：`https://sunxiangyu.cn/`

资源和阅读器使用相对路径，两种仓库地址及自定义域名均可使用，无需改 base URL。

## 本地预览

在本目录运行：

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:8080/`。不要只双击 HTML：脑图需要通过 HTTP 加载 JSON。

## 修改内容

- 姓名、联系方式、经历和页面结构：`index.html`
- 项目详细描述：`app.js`
- 配色、字号、布局：`style.css`
- 简历：替换 `resume.pdf`，并同步更新 `assets/resume-1.webp`、`assets/resume-2.webp` 两页预览。页数变化时还需调整 `navigation.js`。
- 作品：同步维护 `documents.js`、`documents/` 中的 PDF 和页图。
- 封面：替换 `assets/` 中的 SVG。

本仓库含个人简历、联系方式及可下载作品，发布后访客可读取这些文件。项目 SVG 为概念示意，并非真实产品截图。未主动授予他人对简历、作品和图形的使用许可。

## 外部依赖与验证范围

不依赖原 Sites 平台或任何后端。CSS 当前通过 Google Fonts 申请字体，加载失败时会回退至系统字体。GitHub Pages 的实际网络可达性仍须在手机和目标访客网络下测试；绑定域名不等于保证国内访问稳定。

## 官方文档

- [创建 Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
