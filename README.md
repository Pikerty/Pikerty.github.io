# Pikerty 的博客

Apple 风格的双语个人博客，用 GitHub Pages 搭建。

网站：https://Pikerty.github.io

## 怎么加一篇新文章

1. 在 `posts/` 里复制一篇现有的 `.html` 文件，改名，比如 `posts/my-new-post.html`。
2. 改标题、正文、日期和分类（`Learning / Tech / Travel / Life`）。
3. 在 `index.html` 的文章列表里加一张卡片，链接到这篇新文章。
4. 提交到 `main` 分支，几分钟后网站就会更新。

## 社交链接

已确认的账号：GitHub（https://github.com/Pikerty）、X（@PikertyLvery，https://x.com/PikertyLvery）、Telegram（Pikerty，https://t.me/Pikerty）。
YouTube / Instagram / LinkedIn 目前先用 `Pikerty` 占位，拿到真实账号后把 `index.html` 里对应的链接改掉，再推一次就行。

## 语言

首页界面支持 9 种语言：中文（简体）、English、Español、日本語、粵語、한국어、Français、Русский、Deutsch。
点导航栏的地球图标切换，存在 `localStorage` 里。翻译在 `script.js` 的 `I18N` 里，文章页本身是中英双语正文。

## RSS

RSS 订阅文件是 `feed.xml`（https://Pikerty.github.io/feed.xml），
RSS 就是一种订阅方式：用 RSS 阅读器订阅后，博客发了新文章，阅读器里会自动收到更新。
页面上的 RSS 入口已按要求拿掉，文件还在仓库里，要加回来只要在首页再加一个链接。

## 文件

- `index.html` — 首页
- `style.css` — 苹果风样式 + 夜间模式
- `script.js` — 中英文切换 + 分类筛选 + 搜索 + 夜间模式 + 阅读进度 + 分享
- `feed.xml` — RSS 订阅
- `posts/` — 文章页

## How to add a new post

1. Copy an existing file in `posts/`, e.g. `posts/my-new-post.html`.
2. Change the title, body, date and category.
3. Add a card for it in `index.html`.
4. Push to `main` — GitHub Pages updates in a few minutes.

## 海报图片

`assets/` 里的图片都存在仓库里，不是外链：
- `hero-mountain.jpg` — 深夜山月海报（WallpaperCave）
- `times-square.jpg` — 纽约时代广场夜景（Pexels）
- `code-dark.jpg` — 深色代码屏幕（Pexels）
- `study-desk.jpg` — 深夜书桌（StockCake）
