# Pikerty 的个人博客

Apple 风格的个人博客 / 日常记录站，托管在 GitHub Pages 上，纯 HTML + CSS + JavaScript 写成，没有用任何外部框架和库。

- **网站**：https://Pikerty.github.io
- **仓库**：https://github.com/Pikerty/Pikerty.github.io
- **修改记录**：见 [`CHANGELOG.md`](CHANGELOG.md)，每一次改动都有日期和提交号

## 网站里有什么

### 首页
- **今日日期**：Hero 上方显示当前浏览日期，按所选语言格式化，每天自动变。
- **海报**：深夜山月雪山海报做 Hero 背景，卡片和文章页配有时报广场、深色代码、深夜书桌海报，存在 `assets/`。
- **最新文章**：4 篇起始文章（雅思 Day 4、WHV 澳洲 vs 新西兰、ai-romance 部署、第一人称美国旅行视频），可按学习 / 技术 / 旅行 / 生活分类筛选。
- **前沿科研**：19 篇 Nature、Science、arXiv 的真实文章，分 5 个领域（太空天文 / 人工智能 / 生物医学 / 气候环境 / 物理）和 6 个国家或地区（中国 / 美国 / 欧洲 / 日本 / 韩国 / 其他地区），两排筛选可以叠加用；点卡片在新标签页读原文；下面的“浏览更多”按钮跟随当前领域，跳到该领域的 Nature 搜索页；筛到没有文章的组合会显示提示和“显示全部”按钮。
- **归档**：按月份整理文章。
- **关于我**：成都文理学院，大数据管理与应用，2026 年毕业，正在找数据分析 / 数据运营工作，备考雅思 5.5。

### 外网指南（`guide.html`）
- **导航**：X、Reddit、YouTube、Discord、SpaceX、Hacker News、NASA、arXiv、GitHub、Stack Overflow、维基百科、Coursera、MIT OCW、可汗学院、BBC、路透社——每个都写了是干嘛的、新手怎么逛，整张卡片都能点，点开就是对应网站主页。
- **文化词典**：18 个外网常用词，AMA、TL;DR、ELI5、meme、FOMO、GOAT、IMO、OP、NSFW、IRL、DM、LOL/LMAO、sus、vibe、no cap、touch grass、doomscrolling、based，每个都有中文意思加例句。

### 考试指南（`ielts.html`）
- **雅思**：什么是雅思（学术类 / 培训类）、考试流程、在哪报名（中国大陆 ielts.neea.cn、海外 ielts.org）、按目标分数分档（4.5 / 5.5 / 6.0–6.5 / 6.5–7.0 / 7.5+）、四项练法、每天 20 分钟一周计划、免费资源。
- **其他英语考试**：PTE、托福 iBT、多邻国。
- **其他语言考试**：日语 JLPT、韩语 TOPIK、德语歌德证书 / TestDaF、西班牙语 DELE、法语 DELF / DALF，全部用 CEFR（A1–C2）统一对照。

### 搜索
- 首页顶部放大镜打开搜索面板，输关键词实时筛站内文章和前沿科研文章，显示“找到 X 条结果”；键盘按 `/` 就能直接打开搜索。
- 下面还有站外搜索引擎：Google、Bing、百度、搜狐，输好关键词点一个，就在新标签页打开那个引擎的搜索结果。

### 外观和体验
- **9 种语言**：导航栏地球图标下拉菜单，中文（简体）、English、Español、日本語、粵語、한국어、Français、Русский、Deutsch，首页界面、导航、卡片标题都跟着变，选完会记住；文章页正文是中英双语。
- **夜间模式**：跟随系统，手动切换后记住选择；切换时全站 650ms 一起淡变，不会出现一半变了一半没变。
- **Apple 风格动画**：缓动用 Apple 的 cubic-bezier(.28,.11,.32,1) 和慢 ease-out (.32,.72,0,1)；渐显 1 秒、滚动视差和进度条用 rAF 平滑驱动，只动 transform/opacity；页面过场 450ms；卡片 hover 上浮；按钮和卡片按下时有缩放反馈；支持系统的减弱动效设置。
- **手机适配**：导航在手机上是可左右滑动的第二行，所有入口都能点到；卡片单列显示。
- **阅读进度条、回顶部、文章分享**：文章页有复制链接、分享到 X 和 Telegram。
- **RSS**：订阅文件是 `feed.xml`（https://Pikerty.github.io/feed.xml），页面上的 RSS 入口已拿掉，文件还在仓库里。

## 社交账号（已确认）

首页 About 和页脚只显示各家 logo（Steam 页脚那样的图标）：
- GitHub：https://github.com/Pikerty
- X：@PikertyLvery，https://x.com/PikertyLvery
- Telegram：手机号 +86 19808246285，链接 https://t.me/+8619808246285（点开直接聊这个号码）
- Instagram：pikertylvery，https://www.instagram.com/pikertylvery
- Facebook：Asimer Pikerty，主页直达链接 https://www.facebook.com/profile.php?id=61595852169522

YouTube / LinkedIn 还没给真实账号，先没放图标，拿到账号后加上。

## 文件结构

```
├── index.html          首页
├── guide.html          外网导航与文化词典
├── ielts.html          语言考试指南
├── style.css           全站样式（主题、动画、响应式）
├── script.js           全站脚本（语言、主题、搜索、筛选、进度条、日期）
├── feed.xml            RSS 订阅文件
├── CHANGELOG.md        全部修改记录（每次改动都补一条）
├── README.md           本文件
├── posts/              4 篇文章（雅思 Day 4、WHV、ai-romance、旅行视频）
└── assets/             4 张海报图
    ├── hero-mountain.jpg   深夜山月（Hero）
    ├── times-square.jpg    时代广场夜景
    ├── code-dark.jpg       深色代码
    └── study-desk.jpg      深夜书桌
```

## 本地预览

把仓库拉下来，用任意静态服务器打开就行，例如：

```sh
python3 -m http.server 8000
```

然后打开 http://localhost:8000 。直接双击 `index.html` 也能看，但部分功能（如语言记忆）需要通过服务器访问才正常。

## 怎么加一篇新文章

1. 在 `posts/` 里复制一篇现有的 `.html` 文件，改名，比如 `posts/my-new-post.html`。
2. 改标题、正文、日期和分类（`Learning / Tech / Travel / Life`）。
3. 在 `index.html` 的文章列表里加一张卡片，链接到这篇新文章。
4. 提交到 `main` 分支，几分钟后网站就会更新。

## 修改记录

每次改动都记在 [`CHANGELOG.md`](CHANGELOG.md) 里，从第一版 `3bc9bcc`（博客上线）到现在，每一条都有日期、提交号和改了什么。想知道网站是怎么一步步变成现在这样的，看那个文件就行。
