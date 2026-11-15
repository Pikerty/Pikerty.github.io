# 更新日志（CHANGELOG）

Pikerty 的个人博客 https://Pikerty.github.io 的全部修改记录，按时间倒序。每次改动推到 GitHub 后都会在这里补一条。

## 2026-11-15

### 批次 5（直接优化）— 首页顶部 Header 极简品牌化改版
- 时间：2026-11-15 18:16（CST）。基线版本：main `4d88427`。
- 任务名称：首页顶部区域视觉重构（Minimal Personal Brand Header）。
- 修改原因：用户指令 — 顶部 Logo、搜索、主题、语言全挤在同一行，布局不协调、品牌信息不突出、导航缺层次；要求拆成三个独立区域。
- 修改前存在的问题：单行顶栏承载全部元素（批次 4 只做了右对齐补救，结构未变）；站名只是 17px 小字，没有品牌展示区；导航与功能按钮同层、无选中状态反馈；主题句/简介压在海报图上（hero），层次靠图片撑。
- 新的设计方案：三区结构 — ①顶部功能区 utility-bar（搜索在左上角，主题切换+语言切换在右上角，sticky 吸顶、毛玻璃背景、含安全区 padding）；②中央品牌区 brand（日期行 → PIKERTY 大字品牌名 → 博客·日常记录 → 主题句 h1 + 英文副标题 → 简介 → IELTS/Technology/Travel/Personal Growth 四个低调标签 → 开始阅读/关于我按钮）；③底部导航区 main-nav（六个栏目独立成行、上下细分隔线、当前栏目低调加粗+下划线、手机端横向滚动+右侧渐隐）。原海报改为品牌区下方的纯视觉横幅（hero-poster），图片与署名保留。
- 具体实施内容：index.html 重构 header 与 hero 两处结构（所有 script.js 依赖的 ID — searchToggle/themeBtn/langBtn/langDropdown/todayDate/searchPanel — 与全部 data-i18n 键原样保留，逐项核对各出现 1 次）；style.css 末尾追加新样式段（.site-head/.utility-bar/.brand/.brand-name/.brand-tags/.main-nav/.hero-poster + 640px 与 1440px 两档适配），旧 .nav 样式保留给 guide/ielts/文章页使用，未删。
- 涉及文件：index.html、style.css、CHANGELOG.md。script.js 未动，其他 6 个页面未动。
- 移动端适配结果：本地静态服务器结构测试通过（首页 200、新结构类名齐全、CSS 配平）；iPhone 真机视觉待用户刷新确认（未实测前不记为通过）。
- 桌面端兼容性测试结果：本地结构测试通过；桌面真实渲染待确认。
- 功能回归测试结果：静态核对 — 搜索/主题/语言/日期/筛选所依赖的 ID 与 i18n 键全部保留且唯一；JS 未改动。真机点击回归待用户确认。
- 是否影响其他页面：guide/ielts/文章页继续用旧 .nav 顶栏，本次未改版（用户本次只要求首页）。
- GitHub Commit：本条目随本次修改同批推送（连接器逐文件提交，提交号在下一次记录中回填）。
- GitHub Pages 部署结果：推送后验证，回填于下一次记录。
- 尚未解决的问题：改版后移动端/桌面端截图待补（本地无无头浏览器，待线上后用云端浏览器截取或用户提供）；WebP（批次 2b）；feed.xml 星期错误；Lighthouse 未测。
- 附带回填：批次 4 提交号 `b853c06ca099b42896bdaf1ff58b9373b4b34235`（style，含事故）→ 修复 `2b23299a523e1cae62a2cf06c18cc0cdf5756cc4` → 日志 `4d88427b257730f52406cbf9ba38d9561fce9c5c`，部署已验证，线上 style.css 三批规则齐全、页面 200。

### 批次 4（直接优化）— 手机顶栏对齐修复
- 时间：2026-11-15 18:08（CST）。基线版本：main `17f514e`。
- 任务名称：全面页面优化批次 4（移动端顶栏布局）。
- 修改原因：用户在 iPhone 上实测截图反馈 — 语言切换（地球）按钮没有贴合右上角、停在顶栏中部，顶栏整体布局不合适，手机端适配不到位。
- 修改前存在的问题：手机端顶栏第一行（站名、搜索、浅色模式、语言按钮）按默认左对齐排布，右侧留出一大段空白，语言按钮视觉上悬在中间；按钮间距偏大（20px）；第二行导航链接被截断时没有任何可滚动提示；hero 区顶部间距偏大。
- 实际修改内容：style.css 末尾追加批次 4 段（只增不改）— `.lang-menu{margin-left:auto}` 让语言按钮在任何宽度下都贴到顶栏最右侧，语言下拉菜单本来就以按钮为锚点右对齐、自动跟随；手机端（≤640px）顶栏间距 20px→12px；图标按钮触控尺寸 34→38px；第二行导航加右侧渐隐遮罩，提示可横向滑动；hero 顶部间距收紧（margin-top 28→16px、上内边距 84→64px）。
- 涉及文件：style.css、CHANGELOG.md。
- 修复方案：追加式 CSS，利用 flex 的 margin-left:auto 推齐右边缘，不动 HTML 结构、不动 JS。
- 测试环境及结果：CSS 大括号配平校验通过；本地静态服务器实测首页 200、样式加载正常。手机真实视觉效果需用户在 iPhone 上刷新后确认（部署后回填）。
- 是否影响其他页面：style.css 全站共用；语言按钮只在首页有，guide/ielts/文章页顶栏结构不同、不受 margin 规则影响（已核对这几页没有 .lang-menu）。
- GitHub Commit：`b853c06ca099b42896bdaf1ff58b9373b4b34235` → 修复 `2b23299a523e1cae62a2cf06c18cc0cdf5756cc4` → 本日志 `4d88427b257730f52406cbf9ba38d9561fce9c5c`（回填于批次 5 记录）。
- GitHub Pages 部署结果：已验证成功 — 线上 style.css 含批次 4 规则（详见批次 5 记录的附带回填）。
- 事故与修复（如实记录）：本批第一次推送 style.css 时误用了批次 3 之前的旧版底稿，提交 `b853c06ca099b42896bdaf1ff58b9373b4b34235` 一度覆盖掉批次 3 的焦点环与两个断点规则；发现后立即以完整文件（批次 3 + 批次 4）修复，修复提交 `2b23299a523e1cae62a2cf06c18cc0cdf5756cc4`，线上复验三批规则齐全后才推送本日志。
- 尚未解决的问题：WebP（批次 2b）；feed.xml 星期错误；Lighthouse 未测；平板/大屏真实设备视觉未确认。
- 附带回填：批次 3 提交号 `ce5b2ea8d3f8c184a0a80f088aae7be783818703`（style.css）与 `17f514e9253df8c37b9f97b97a0751fddc678192`（本日志），部署已验证 — 线上 style.css 含 :focus-visible 与两个新断点，页面均 200。

### 批次 3（直接优化）— 焦点可见样式、平板与大屏断点
- 时间：2026-11-15 14:17（CST）。基线版本：main `72b4eb6`。
- 任务名称：全面页面优化批次 3（CSS 响应式补全）。
- 修改原因：审计确认 style.css 只有 640px 一个断点，641–1439px 区间没有任何针对性适配；全站只有一个 :focus 规则，键盘焦点不可见。
- 修改前存在的问题：平板（768–1023px）沿用桌面字号与间距；大屏（1440px+）内容宽度锁死 1024px、两侧留白过大；键盘 Tab 焦点无可见样式。
- 实际修改内容：style.css 末尾追加一段（只增不改原有规则）— 全局 `:focus-visible` 焦点环（用现有 --link 变量，含深色模式变量自动适配）；`img{max-width:100%;height:auto}` 兜底（与批次 2a 的宽高属性配合防变形，带 class 的定高图片规则优先级更高、不受影响）；新增 641–1023px 平板断点（hero 字号 56→48px、间距与导航间隔收紧、文章区上下边距调整）；新增 1440px+ 大屏断点（内容宽 1024→1200px、hero 字号 64px、栏目标题 36px）。
- 涉及文件：style.css、CHANGELOG.md。
- 修复方案：追加式修改，零删除零改写，出问题可整段回滚。
- 测试环境及结果：CSS 大括号配平校验通过（239/239）；本地静态服务器实测 7 个页面均 200 且样式正常加载；真实平板/大屏设备视觉效果未实测（Not Tested，需在真实设备上确认）。
- 是否影响其他页面：style.css 全站共用，7 个页面同时生效；640px 以下手机规则未动。
- GitHub Commit：`ce5b2ea8d3f8c184a0a80f088aae7be783818703`（style.css）与 `17f514e9253df8c37b9f97b97a0751fddc678192`（本日志），回填于批次 4 记录。
- GitHub Pages 部署结果：已验证成功 — 线上 style.css 含新规则，页面均 200（详见批次 4 记录的附带回填）。
- 尚未解决的问题：WebP（批次 2b）；feed.xml 星期错误；Lighthouse 未测；平板/大屏真实设备视觉未确认。
- 附带回填：批次 2a 提交号 `72b4eb6480e78544bb2b66cb130e63a89650d716`，部署已验证 — 线上首页首图带 width/height/fetchpriority、其余图片带 loading="lazy"，文章页头图为 fetchpriority 版本。

### 批次 2a（直接优化）— 图片宽高、懒加载与解码优化
- 时间：2026-11-15 14:13（CST）。基线版本：main `ccd97f7`。
- 任务名称：全面页面优化批次 2a（图片加载属性）。
- 修改原因：审计确认全站图片无 width/height（布局偏移 CLS 风险）、无懒加载，首屏外图片也一次性全量加载。
- 修改前存在的问题：12 处 `<img>` 均无宽高、无 loading 属性；首页 8 张图全量加载。
- 实际修改内容：按图片真实尺寸写入 width/height（hero-mountain 1920×1080、times-square 1200×801、code-dark 1200×797、study-desk 384×672，尺寸以文件实测为准）；全部图片加 decoding="async"；首页首图与 4 篇文章头图加 fetchpriority="high" 保持优先加载，其余 7 张加 loading="lazy"。
- 涉及文件：index.html、posts/ai-romance.html、posts/ielts-day4.html、posts/travel-video.html、posts/whv.html、CHANGELOG.md。
- 修复方案：只改 `<img>` 属性，不动图片文件本身、不动 CSS/JS；WebP 转换单列批次 2b。
- 测试环境及结果：本地静态服务器实测 5 个改动页面均 200，逐图核对属性计数（12/12 已加宽高）；推送后线上复验为准。
- 是否影响其他页面：guide.html、ielts.html 无图片，未受影响；style.css、script.js 未动。
- GitHub Commit：`72b4eb6480e78544bb2b66cb130e63a89650d716`（与本条目同一次提交，回填于批次 3 记录）。
- GitHub Pages 部署结果：已验证成功 — 线上图片属性为新版（详见批次 3 记录的附带回填）。
- 尚未解决的问题：WebP（批次 2b）；CSS 单断点（批次 3）；feed.xml 星期错误；Lighthouse 未测。
- 附带回填：批次 1 提交号 `ccd97f73783dfd33e5f94f207550757f2a9a0a99`，部署已验证 — 7 个页面新 `<head>` 内容线上生效，sitemap.xml / robots.txt / favicon.svg 部署初期短暂 404 后均返回 200。

### 批次 1（直接优化）— 全站 favicon、SEO 基础件、文章页 description
- 时间：2026-11-15 14:10–14:20（CST）。基线版本：main `7f88f0b`（2026-11-06）。
- 任务名称：全面页面优化批次 1（favicon + SEO 基础）。
- 修改原因：阶段 0 审计确认全站缺 favicon、缺 sitemap/robots/canonical/Open Graph，搜索引擎无法正确收录，浏览器标签页没有站点图标。
- 修改前存在的问题：7 个页面均无 `<link rel="icon">`；sitemap.xml 与 robots.txt 线上 404；无 canonical、无 OG/Twitter Card；4 篇文章页无 meta description。
- 实际修改内容：新增 favicon.svg（P 字标，深底浅字，与站名文字标一致）；7 个页面 `<head>` 统一加 favicon、canonical、OG（type/site_name/title/description/url/image）与 twitter:card；4 篇文章页按正文实写补 meta description（未编造内容）；新建 sitemap.xml（7 条真实页面 URL，lastmod 2026-11-15）与 robots.txt（全站允许 + Sitemap 声明）。
- 涉及文件：favicon.svg、sitemap.xml、robots.txt、index.html、guide.html、ielts.html、posts/ai-romance.html、posts/ielts-day4.html、posts/travel-video.html、posts/whv.html、CHANGELOG.md。
- 修复方案：只增不改 — 只在 `<head>` 插入新标签，不动正文、样式与脚本；OG 图片使用各页已有的真实配图。
- 测试环境及结果：本地克隆（HEAD 与线上一致）修改后用本地静态服务器实测，7 个页面与 3 个新文件均返回 200；逐页核对 icon/canonical/OG 计数各 1；sitemap.xml 通过 XML 解析；结果以推送后线上复验为准，未在线上复验前不记为部署成功。
- 是否影响其他页面：`<head>` 之外零改动，页面正文与交互不受影响；script.js、style.css、feed.xml 本批次未动。
- GitHub Commit：`ccd97f73783dfd33e5f94f207550757f2a9a0a99`（与本条目同一次提交，回填于批次 2a 记录）。
- GitHub Pages 部署结果：已验证成功 — 线上 7 页新标签生效，3 个新文件均 200（详见批次 2a 记录的附带回填）。
- 尚未解决的问题：图片无宽高与懒加载（批次 2）；CSS 仅 640px 单断点（批次 3）；feed.xml 星期错误；Lighthouse 未测。

## 2026-11-06

### `bd65ef8` — 科研筛选空状态：筛不到文章时给提示和一键重置
- 原因：领域筛选和地区筛选是叠加的，比如先选“人工智能”再选“中国”，3 篇人工智能文章里没有中国牵头的，就一张都不剩，页面上一片空白、没有任何提示，看起来像点筛选没反应。
- 修法：筛到 0 篇时在科研区显示提示“这个组合下没有文章，换个领域或地区试试。”加一个“显示全部”按钮，点一下两个筛选都回到“全部”；提示文案和按钮文字都进了 9 种语言的翻译字典。
- 顺带把 `CHANGELOG.md` 里漏记的 `dbf7ff2`（上一条日志的提交号修正）补上。

### `dbf7ff2` — 更新日志里的提交号修正
- 把 CHANGELOG 里 Facebook 那条的“待推送”占位改成真实提交号 `4bd4b9c`。

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
