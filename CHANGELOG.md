# 更新日志（CHANGELOG）

Pikerty 的个人博客 https://Pikerty.github.io 的全部修改记录，按时间倒序。每次改动推到 GitHub 后都会在这里补一条。

## 2026-11-06

### `4bd4b9c` — Facebook 改成主页直达链接
- Facebook 图标之前链到的是 Facebook 搜索页，现在改成主页直达链接 https://www.facebook.com/profile.php?id=61595852169522（通过已连接的 Facebook 账号核对过，名字就是 Asimer Pikerty，是你本人的主页）。


### `78ce444` — 前沿科研扩容、点击反馈、丝滑度、搜索优化
- 前沿科研从 12 篇扩到 19 篇，新增物理领域（欧洲核子中心 LHCb 超稀有粒子衰变、ALICE 胶子测量、CMS 新重粒子寻找）。
- 新增按国家/地区划分：全部地区 / 中国 / 美国 / 欧洲 / 日本 / 韩国 / 其他地区，可与按领域筛选叠加使用；新增文章包括浙江大学领衔的哈勃再电离研究（中国）、欧空局欧几里得彗星（欧洲）、韦伯望远镜星际彗星 3I/ATLAS（美国）、北极气候临界点（美国）。
- 点击反馈：按钮、卡片、社交图标按下时有缩放反馈（`:active`），点下去能感觉到。
- 高帧率丝滑：平滑滚动（`scroll-behavior: smooth`）、卡片 GPU 加速（`translateZ(0)`）、筛选切换时卡片淡入动画，并尊重系统的减弱动效设置。
- 搜索优化：站内搜索现在也能搜到前沿科研的文章；输入时显示“找到 X 条结果”；键盘按 `/` 就能直接打开搜索框。
- 本文件（CHANGELOG.md）新建，首页页脚加了“更新日志”入口。

## 2026-11-05

### `2c354ee` — 修手机导航和指南卡片点击
- 手机上导航链接之前被整排隐藏了，改成可左右滑动的第二行，最新文章 / 外网指南 / 考试指南 / 前沿科研 / 关于我都能点到。
- 指南页 10 张卡片改成整张可点，点任意位置都在新标签页打开对应公司/机构主页。

### `86936e5` — 首页日期 + 前沿科研
- 首页 Hero 上方显示当前浏览日期，按所选语言格式化，每天自动变。
- 新增“前沿科研”区：12 篇 Nature、Science、arXiv 的真实文章，分太空天文 / 人工智能 / 生物医学 / 气候环境 4 个领域，可筛选；每张卡片链接到原文或相关报道；“浏览更多”按钮跟随当前领域，跳到该领域的 Nature 搜索页。

### `6e8c128` — 雅思页扩成语言考试指南
- `ielts.html` 从只讲雅思 5.5 扩成完整语言考试指南：什么是雅思、考试流程、在哪报名（中国大陆 ielts.neea.cn）、按目标分数分档（4.5 / 5.5 / 6.0–6.5 / 6.5–7.0 / 7.5+）、四项练法、每天 20 分钟计划、免费资源；另有 PTE、托福、多邻国，以及日语 JLPT、韩语 TOPIK、德语歌德/TestDaF、西班牙语 DELE、法语 DELF/DALF，全部用 CEFR（A1–C2）统一对照。首页卡片和导航改名“考试指南”。

### `c6bf143` — 搜索框加外部搜索引擎
- 顶部搜索面板新增 Google、Bing、百度、搜狐：输关键词点一个，就在新标签页打开该引擎的搜索结果；不输词直接点，打开搜索引擎首页。

### `8239670` — 外网指南 + 雅思学习页
- 新增 `guide.html`：外网导航（X、Reddit、YouTube、Discord、SpaceX、Hacker News、NASA、arXiv、GitHub、Stack Overflow、维基百科、Coursera、MIT OCW、可汗学院、BBC、路透社）+ 文化词典 18 个词（AMA、TL;DR、ELI5、meme、FOMO、GOAT、IMO、OP、NSFW、IRL、DM、LOL/LMAO、sus、vibe、no cap、touch grass、doomscrolling、based）。
- 新增 `ielts.html`（当时是雅思 5.5 学习页）：分数对照、四项练法、每天 20 分钟一周计划、免费资源。两页都从首页导航和卡片进入。

### `73570a5` — 社交账号修正 + 图标化
- Telegram 改成手机号链接 https://t.me/+8619808246285（之前 t.me/Pikerty 是错的）；新增 Instagram（pikertylvery）和 Facebook（按名字 Asimer Pikerty 搜，没找到直接主页链接）。
- 社交链接改成 Steam 页脚那样的品牌图标：GitHub、X、Telegram、Instagram、Facebook；YouTube、LinkedIn 没给真实账号，先没放。

### `fb55b42` — 地球图标语言菜单 + 9 种语言
- 语言切换从“EN / 中文”文字按钮改成导航栏地球图标下拉菜单，9 种语言：中文（简体）、English、Español、日本語、粵語、한국어、Français、Русский、Deutsch（首页界面，文章页仍是中英双语正文）。
- 页面上的 RSS 入口拿掉，`feed.xml` 文件保留在仓库里。

### `87481ef` — 海报图片上传
- 4 张海报图传到仓库 `assets/`：hero-mountain.jpg（深夜山月）、times-square.jpg（时代广场）、code-dark.jpg（深色代码）、study-desk.jpg（深夜书桌）。

### `5bbf15a` — 深色药丸、搜索上移、海报
- 修深色模式下药丸按钮不跟随的问题：加了主题化药丸颜色 + 650ms 全站主题淡变；删掉页脚“用 GitHub Pages 搭建”那行；搜索移到顶部导航放大镜图标里（点开面板、ESC 关闭）；海报图接到 Hero、精选和卡片。

### `50f8ae6` — 按 Apple 动画重做
- 缓动改成 Apple 的 cubic-bezier(.28,.11,.32,1) 和慢 ease-out (.32,.72,0,1)；渐显 1 秒（36px 上升 + 轻微缩放）、系统化 stagger；滚动用 rAF lerp（0.14/帧）驱动 Hero 缩小/淡出/视差与进度条（只动 transform/opacity）；页面过场 450ms；卡片 hover 上浮 0.6s。

### `79ff76d` — 修深色字体 bug
- 主因是 `.btn`、`.chip.active` 用 `var(--text)` 做背景加固定白字（深色下白底白字看不见），加了反色令牌 `--btn-bg/--btn-text`、`--featured-bg/--featured-text`、`--surface`、`--body-text`，标题显式主题色，`color-scheme`。

### `98722b3` — 夜间模式、搜索、归档、RSS
- 夜间模式（跟随系统/手动切换/记住选择）、搜索、按月归档、RSS `feed.xml`、阅读进度条、回顶部、文章复制链接/分享到 X 和 Telegram、社交链接栏。

### `92d9845` — 平滑过场初版
- 页面淡入、滚动渐显、卡片 hover 更平滑、240ms 页面离开淡出、支持减弱动效设置。

### `3bc9bcc` — 博客上线
- Apple 风格双语博客第一版：首页、中英文切换、分类筛选、4 篇起始文章（雅思 Day 4、WHV 澳洲 vs 新西兰、ai-romance 部署、第一人称美国旅行视频）。仓库 `Pikerty/Pikerty.github.io` 当天已存在，直接复用，网站 https://Pikerty.github.io 验证上线。
