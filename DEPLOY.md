# GitHub Pages 上线与域名配置

## 1. 准备仓库

GitHub Free 使用公开仓库发布 Pages。登录自己的 GitHub 账号，新建 Public 仓库，建议先命名为 `portfolio`。

如果希望默认地址不带 `/portfolio/` 路径，可将仓库命名为 `你的用户名.github.io`。这里的用户名必须替换为你的真实 GitHub 用户名。

先测试默认地址，暂时不绑定域名。这个项目没有预置 `CNAME`，避免尚未配置 DNS 就发生自定义域名跳转。

## 2. 上传文件：两种方法任选其一

### A. 网页上传

1. 解压提供的 ZIP，打开解压后的文件夹。
2. 在 GitHub 仓库选择 Add file → Upload files。
3. 选中/拖入 `index.html` 等文件及 `assets/`、`documents/`，不要只上传 ZIP，也不要把外层文件夹拖进去。
4. 上传完成后核对仓库根目录直接能看到 `index.html`，而不是 `github-pages/index.html`。
5. 提交到 `main`。
6. macOS 默认隐藏点开头的文件。可按 Command + Shift + . 显示；网页上传未带上隐藏文件时，用 Add file → Create new file 创建 `.nojekyll`。
7. 如果准备用 Actions，再用 Create new file 创建 `.github/workflows/pages.yml`，粘贴随项目提供的同名文件内容。GitHub 会按斜杠自动创建目录。

项目只有数十个文件，直接网页上传即可。不要上传旧 `portfolio/.git` 或 `.openai`；此目录已将它们排除。

### B. Git 命令行上传

在本项目目录中打开终端，替换下面的仓库 URL，再执行。命令仅供你手动使用，本项目没有为你创建或推送仓库。

```sh
git init
git add .
git commit -m "Add personal portfolio for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

遇到登录要求，使用 GitHub 提供的授权方式，勿将密码或 token 写入源码或 README。如果使用已经有内容的仓库，先克隆它再拷入本项目，不要强制推送覆盖已有提交。

## 3. 选择一种发布方式

### 方式 A：从分支发布（网页操作最少）

Settings → Pages → Source: **Deploy from a branch** → Branch: **main** → Folder: **/(root)** → Save。

此时由 GitHub 自动运行 Pages 发布任务，不需要启用本项目的自定义工作流。如果上传了工作流但并未选择 GitHub Actions 作为 Source，可以不运行它；如收到该工作流失败通知，改用下面的方式 B，或只上传网站文件而不上传 `.github`。

### 方式 B：GitHub Actions（更新自动部署）

确保 `.github/workflows/pages.yml` 位于仓库正确位置，然后：

1. Settings → Pages → Source: **GitHub Actions**。
2. Actions → Deploy portfolio to GitHub Pages → Run workflow，选择 main。
3. 首次工作流没有显示时，确认文件已提交到默认分支；如果 Actions 被禁用，按仓库设置启用官方 Actions。
4. 等所有步骤绿色，打开工作流中的部署地址，或在 Settings → Pages 中点击 Visit site。

工作流无需 npm、第三方密钥和手动构建。它使用 GitHub 官方 checkout/configure-pages/upload-pages-artifact/deploy-pages actions，权限仅用于读取代码和发布 Pages。

## 4. 验收默认地址

打开 Settings → Pages 提供的真实网址，检查：

- 首页加载，字体与图片正常。
- 首页个人介绍与章节目录正常显示。
- 五个项目可筛选、打开与关闭详情。
- 章节目录能跳转。
- 三份文档可以逐页阅读。
- 脑图可以展开；刷新 `reader.html?doc=team-map` 仍能加载。
- 在手机移动数据、Wi-Fi 与电脑无痕窗口中实测。

普通仓库网址末尾应有仓库名，不要漏掉 `/portfolio/`。资源已使用相对路径，不要为了 GitHub Pages 把它们改成 `/assets/...` 或 `/documents/...`，那会在项目子路径下失效。

## 5. 之后再绑定 sunxiangyu.cn

建议先在 GitHub 账号设置中验证域名所有权，按 GitHub 生成的 TXT 要求完成。接着在仓库 **Settings → Pages → Custom domain** 填入 `sunxiangyu.cn` 并保存，然后去腾讯云 DNSPod 添加记录。先绑定仓库，再改 DNS。

### 腾讯云 DNSPod 记录

以下 GitHub Pages A 记录按 2026-10-25 官方文档核对；操作时也请对照最新文档：

| 主机记录 | 记录类型 | 记录值 |
|---|---|---|
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | 你的GitHub用户名.github.io |

线路用默认，TTL 保持平台默认。CNAME 不含 `https://`、仓库名或路径。核对并停用/替换同一主机名上属于旧网站的冲突记录，不要删除其它验证 TXT 或邮件记录。

**两种部署方式的 CNAME 文件区别：**

- 从分支发布：保存 Custom domain 后 GitHub 会在分支根目录创建 `CNAME` 文件，内容为 `sunxiangyu.cn`。后续本地更新先拉取该提交，保留文件。
- 使用本项目 GitHub Actions：仍必须在 Settings → Pages 设置 Custom domain；GitHub 官方说明该方式不依赖仓库 `CNAME` 文件，不要以为只上传 CNAME 就完成域名绑定。

等待 GitHub DNS 检查和证书签发，Enforce HTTPS 可用时勾选。测试裸域名与 www，确认 GitHub 的规范域名重定向生效。未配置完 DNS/HTTPS 时访问失败，不应直接归因于网站代码。

域名无需转出腾讯云，不需要照搬 CloudBase 的 CNAME、固定 IP 或证书上传步骤。这里使用 GitHub Pages 的域名和 HTTPS 流程。

## 6. 常见问题

| 现象 | 处理 |
|---|---|
| 首页 404 | 确认 Pages 已启用、index.html 在发布根目录、工作流成功、访问地址含仓库名 |
| CSS/图片不显示 | 是否完整上传 assets 和 documents；路径大小写是否一致；保留相对路径 |
| 工作流提示 Pages 未配置 | Settings → Pages 的 Source 改为 GitHub Actions，再手动运行 |
| 更新不触发 Actions | 是否推送到 main；workflow 是否位于 `.github/workflows/pages.yml` |
| 脑图加载失败 | 不要通过 file:// 打开；检查 team-map.json 已上传 |
| 新域名证书错误 | 核对 DNS 与 Custom domain，等待 GitHub 证书签发，不要绕过浏览器证书警告 |
| 国内网络打不开 | 分别测试默认地址与域名，收集网络与错误码；GitHub Pages 不能保证所有国内线路稳定 |

## 7. 后续更新

修改本目录网站文件并提交到 GitHub，选定的发布方式会更新网站。无需每次重新改 DNS。

更换作品 PDF 时同步页图及 documents.js 清单。

官方参考：

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
