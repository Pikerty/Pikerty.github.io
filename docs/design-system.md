# 设计系统（Design System）

本站的设计规范，数值全部取自 style.css 现行代码（基线 2026-11-15，HEAD `7f88f0b`）。本文件为 Phase 1 批次 A 建立的框架版，批次 D 完成变量补全后定稿。

## 1. 色彩系统（CSS 变量）

浅色（:root）：

| 变量 | 值 | 用途 |
|---|---|---|
| --text | #1d1d1f | 主文字 |
| --body-text | #333336 | 正文 |
| --muted / --muted2 | #86868b / #6e6e73 | 次要文字 |
| --bg | #fbfbfd | 页面背景 |
| --card / --surface | #fff | 卡片/表面 |
| --line | #d2d2d7 | 分隔线、边框 |
| --link | #06c | 链接 |
| --btn-bg / --btn-text | #1d1d1f / #fff | 主按钮（反色按钮） |
| --ring | rgba(0,102,204,.14) | 焦点/高亮环 |

深色（html[data-theme="dark"]）：

| 变量 | 值 |
|---|---|
| --text | #f5f5f7 |
| --body-text | #e8e8ed |
| --muted / --muted2 | #a1a1a6 / #d1d1d6 |
| --bg | #000 |
| --card / --surface | #1c1c1e |
| --line | #38383a |
| --link | #2997ff |
| --btn-bg / --btn-text | #f5f5f7 / #000 |
| --ring | rgba(41,151,255,.28) |

状态色（成功/警告/错误/信息）：**待补全**（Phase 1 批次 D，深浅两套成对新增后在此登记）。

## 2. 字体系统

- 字体栈：`-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Helvetica, Arial, sans-serif`（系统字体，无外部加载）。
- 正文行高 1.6；开启 -webkit-font-smoothing: antialiased。
- 字号层级（现行值归纳）：Hero 主标题 56px/1.08、Hero 英文副题 32px、正文 15–19px、导航 14px、Logo 17px/700。完整层级表在批次 D 定稿时补全。

## 3. 间距系统

- 页面容器：最大宽 1024px，左右内边距 22px（.wrap / .nav-inner）。
- 导航栏高度 48px，导航项间距 28px。
- 其余组件间距以现行代码为准，刻度表在批次 D 归纳定稿（只归纳、不改值）。

## 4. 圆角与阴影

- --radius：18px（卡片等大圆角）。
- 胶囊形：980px（按钮、筛选 chip、语言按钮、搜索框）。
- --shadow：浅色 0 4px 24px rgba(0,0,0,.06)；深色 0 4px 24px rgba(0,0,0,.45)。

## 5. 按钮规范

- 主按钮 .btn：反色填充（浅色黑底白字 / 深色白底黑字），圆角 980px，内边距 10px 22px，字号 15px；Hover 透明度 .88。
- 幽灵按钮 .btn.ghost：透明底、链接色文字、1px 边框。
- 筛选 chip：胶囊形，选中态与主按钮同色系。

## 6. 卡片规范

- 文章卡片、导航卡片、内容卡片统一使用 --card 背景、--radius 圆角、--shadow 阴影；特色卡（featured）使用 --featured-bg 反色系。
- 卡片整卡可点击（guide 页现行做法），图片比例与 object-fit 规范在总规划 Phase 3 核查后补入。

## 7. 导航规范

- 桌面：顶部 sticky 导航，毛玻璃背景（backdrop-filter 饱和 180% + 模糊 20px），高 48px。
- 移动（≤640px）：导航链接为可横向滑动的第二行（现行做法，禁止再整排隐藏）。

## 8. 交互规范

- 过渡：背景/文字/边框/阴影 .4s、变换 .45s、透明度 .3s，缓动 var(--ease)；主题切换有平滑过渡。
- 点击反馈：按钮、卡片、社交图标 :active 有缩放反馈。
- 焦点：:focus-visible 焦点环 **待补**（Phase 1 批次 D，使用 --ring）；现行 :focus 规则仅 1 处，键盘焦点可见性不足（阶段 0 审计问题）。
- 动效尊重 prefers-reduced-motion（现行 CSS 已有 2 处适配，新增动效必须遵守）。
