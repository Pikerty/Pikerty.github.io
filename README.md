# Pikerty 的博客

Apple 风格的双语个人博客，用 GitHub Pages 搭建。

网站：https://Pikerty.github.io

## 怎么加一篇新文章

1. 在 `posts/` 里复制一篇现有的 `.html` 文件，改名，比如 `posts/my-new-post.html`。
2. 改标题、正文、日期和分类（`Learning / Tech / Travel / Life`）。
3. 在 `index.html` 的文章列表里加一张卡片，链接到这篇新文章。
4. 提交到 `main` 分支，几分钟后网站就会更新。

## 社交链接

已确认的账号（首页 About 和页脚都只显示图标，像 Steam 页脚那样）：
- GitHub：https://github.com/Pikerty
- X：@PikertyLvery，https://x.com/PikertyLvery
- Telegram：手机号 +86 19808246285，链接 https://t.me/+8619808246285（点开直接聊这个号码）
- Instagram：pikertylvery，https://www.instagram.com/pikertylvery
- Facebook：Asimer Pikerty，主页直达链接 https://www.facebook.com/profile.php?id=61595852169522（通过已连接的 Facebook 账号核对过，就是你本人的主页）
YouTube / LinkedIn 还没给真实账号，先没放图标，拿到账号后加上。

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


## 外网指南

`guide.html` 是常驻页面：外网导航（X、Reddit、YouTube、Discord、SpaceX、Hacker News、NASA、arXiv、GitHub、Stack Overflow、维基百科、Coursera、MIT OCW、可汗学院、BBC、路透社）+ 文化词典（AMA、TL;DR、ELI5、meme、FOMO、GOAT、IMO、OP、NSFW、IRL、DM、LOL/LMAO、sus、vibe、no cap、touch grass、doomscrolling、based，共 18 个词），首页导航和卡片都有入口，卡片标题随 9 种语言切换。


## 雅思指南

`ielts.html` 是常驻页面，现已扩成语言考试指南：先介绍什么是雅思、考试流程、在哪报名（中国大陆 ielts.neea.cn），再按目标分数分档（4.5 / 5.5 / 6.0–6.5 / 6.5–7.0 / 7.5+），然后是四项练法、每天 20 分钟计划、免费资源；另有 PTE、托福（及多邻国），以及日语 JLPT、韩语 TOPIK、德语歌德/TestDaF、西班牙语 DELE、法语 DELF/DALF，全部用 CEFR（A1–C2）统一对照。首页导航和卡片叫“考试指南”，卡片标题随 9 种语言切换。


## 搜索

首页顶部搜索框一边输一边筛站内文章；下面还有站外搜索引擎：Google、Bing、百度、搜狐，输好关键词点一个，就在新标签页打开那个引擎的搜索结果。


## 前沿科研

首页 Hero 上方显示当前浏览日期（按所选语言格式化）。首页“前沿科研”区按领域分（太空天文 / 人工智能 / 生物医学 / 气候环境），共 12 篇 Nature、Science、arXiv 的真实文章，点卡片在新标签页读原文或相关报道；点领域 chips 筛选，下面的“浏览更多”按钮会跟着切换，跳到该领域的 Nature 搜索页继续读。
