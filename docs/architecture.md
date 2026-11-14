# 网站架构（Architecture）

Pikerty Personal Website 的技术架构记录，与实际代码保持一致。最后更新：2026-11-15（阶段 0 审计基线，仓库 HEAD `7f88f0b`）。

## 总览

| 项 | 内容 |
|---|---|
| 线上地址 | https://Pikerty.github.io |
| 仓库 | Pikerty/Pikerty.github.io（公开） |
| 托管 | GitHub Pages，main 分支根目录发布，无自定义域名 |
| 技术栈 | 原生 HTML5 + CSS3 + 原生 JavaScript；零框架、零构建工具、零第三方依赖、零外部字体 |
| 后端/数据库 | 无（纯静态站） |

## 页面与文件

| 文件 | 作用 |
|---|---|
| index.html | 首页：文章列表、搜索、归档、语言切换、前沿科研专区、关于我区块 |
| guide.html | 外网导航 + 文化词典 |
| ielts.html | 语言考试指南（IELTS/PTE/TOEFL/多语种） |
| posts/*.html（4 篇） | 文章页，共用 ../style.css |
| style.css | 全站统一样式与设计变量（见 design-system.md） |
| script.js | 全站逻辑：主题、语言、搜索、筛选、归档、进度条、返回顶部等 |
| feed.xml | RSS 订阅源 |
| assets/ | 海报图片（JPG，优化计划见 optimization-log.md） |

## 运行机制

- 主题：`data-theme` 属性 + CSS 变量切换深/浅色；JS 读 `matchMedia('(prefers-color-scheme: dark)')` 跟随系统，用户手动选择存 localStorage（键 `pikerty-theme`）。
- 语言：首页 UI 9 种语言切换，字典在 script.js 内，选择存 localStorage（键 `pikerty-lang`）；文章页为中英双语。
- 数据：无服务端数据；文章与前沿科研 19 篇数据写死于 HTML/JS。
- 发布：推送到 main 后由 GitHub Pages 自动构建发布；开发走分支 + PR，合并前需确认（流程见 development-log.md）。

## 已知约束

- GitHub Pages 缓存头不可自定义，缓存策略不在本站可控范围。
- 无 sitemap.xml / robots.txt（线上 404，2026-11-15 实测），SEO 基础设施补齐排在总规划 Phase 5。
- script.js 为单文件全站共用（56 KB），拆分评估排在 Phase 5，任何改动需单独说明影响范围与回归方案。

## 未来扩展方向（仅记录，不实施）

总规划 Phase 6（后端与云基础设施）处于冻结状态：不购服务器、不建后端、不上数据库。现有结构对未来扩展友好：URL 结构稳定（/posts/*.html）、语义化 HTML、科研数据已是 JS 结构化数据，将来无论接静态生成器还是 API，迁移成本都低。解冻需用户明确指令。
