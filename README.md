# 梁子林 · GIS Spatial Portfolio V1

学院派国土空间规划 × GIS 工程实践个人网站。

## 包含内容

- React 19 + Vite 6，单页主页及基于 Hash 的项目详情视图
- 全屏 Hero、自带无声循环 MP4、导航及联系按钮
- 个人介绍、可替换头像、项目统计数据
- 四个项目卡片与项目详情入口
- 专业优势、论文与竞赛荣誉、实习经历时间线
- 整屏联系页，邮箱、GitHub、电话均可点击
- PC 为主要设计对象，最大内容宽度 1700px，兼容手机
- `.github/workflows/deploy.yml` 用于 GitHub Pages 自动构建部署

> 项目视觉图 `public/visuals/*.svg` 为原创**抽象概念示意**，不是实际 GIS 成果图。人物图是明显标注的占位图；换成你的照片与脱敏项目图后展示效果更好。可公开使用项目成果前，应先确认不涉及保密/单位内部资料。

## 本地运行

先安装 [Node.js](https://nodejs.org/) 20.19+ 或 22.12+。在项目文件夹打开终端：

```bash
npm install
npm run dev
```

浏览器打开终端提示的网址，一般为 `http://localhost:5173/github.io/`。Vite 会将项目部署在 `/github.io/` 子路径下，因此建议以终端提供的网址为准。

构建检查：

```bash
npm run build
npm run preview
```

运行后生成 `dist/`，这是可直接托管的静态网站文件夹。**不要把未经构建的 `src/` 当成网页首页上传给 GitHub Pages 的分支发布功能。**

## 部署到目前的 GitHub 仓库

当前默认目标：

- 仓库：`https://github.com/LZLLZL777/github.io`
- 站点：`https://lzllzl777.github.io/github.io/`
- `vite.config.js` 中 `base: '/github.io/'` 已按此仓库配置。

推荐按 Git 分支流程：

1. 先在已有仓库创建 `portfolio-v3` 分支，不直接覆盖当前 V2 正式网页。
2. 在本地 `git clone` 仓库，并 `git switch portfolio-v3`（确保此分支已存在且同步）。
3. 将**压缩包内部的全部内容**放到仓库根目录（包括隐藏 `.github` 文件夹），替换旧的 `index.html`，提交并推送新分支。
4. 在 GitHub 打开 PR，确认代码和页面素材无敏感内容后合并到 `main`。
5. 在 GitHub 仓库 **Settings → Pages → Build and deployment → Source**，将旧的 `Deploy from a branch` 改成 **GitHub Actions**。
6. 到 **Actions → Deploy GIS Portfolio to GitHub Pages** 查看构建和部署是否成功，随后访问原站点网址。

**注意**：如果网页打不开，请先在 Actions 检查 npm install/build 是否报错，再确认仓库名称与 Vite `base` 一致。

如果 GitHub 网页上传器无法保存隐藏的 `.github` 文件夹，建议使用 Git 或 VS Code 推送目录。GitHub 的网页上传可用于小文件，但对整个 React 工程来说本地 Git 更稳妥。

### 如果你更想用传统分支部署

在本地 `npm run build` 后，仅将 `dist/` **里面的构建文件**上传到专门的部署分支（或配置 Pages 指向合适的发布目录）。注意主页路径。不要把 React 源码直接当成成品 HTML 发布。

## 改内容（首选）

| 内容 | 位置 |
|---|---|
| 姓名、邮箱、电话、个人简介 | `src/content.js` |
| 四个项目名称、技术方法、描述和角色 | `src/content.js` 内 `projects` |
| 能力、实习经历 | `src/content.js` |
| 论文与荣誉 | `src/main.jsx` 内 `Recognition` |
| 页面整体样式、颜色 | `src/styles.css` |
| 主页大标题 | `src/main.jsx` 内 `Hero` |
| 视频背景 | `public/media/cartographic-motion.mp4` |
| 人像占位图 | `public/visuals/portrait-placeholder.svg` |
| 四张概念示意图 | `public/visuals/*.svg` |

**换头像**：把个人照片放入 `public/visuals/portrait.jpg`，将 `src/main.jsx` 中的 `asset('visuals/portrait-placeholder.svg')` 改为 `asset('visuals/portrait.jpg')`。

**换作品图**：把经过授权或脱敏的图片保存到 `public/visuals/`，把 `src/content.js` 对应项目 `visual` 改成该文件名。

**更换主视频**：使用 MP4（H.264、无声、循环视觉），覆盖 `public/media/cartographic-motion.mp4`；首帧图片在 `hero-poster.jpg`。网页遵循“减少动态效果”系统偏好。

## 关于真实性与隐私

素材源自用户提供的个人简历及两篇论文/大创材料。部分数值、研究方法来自简历，项目封面只是抽象设计。正式上线前建议确认公开电话、邮箱是否适合放在网页上，并审查实习单位业务项目的保密限制。
