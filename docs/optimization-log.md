# 优化日志（Optimization Log）

记录每一次优化的日期、项目、原因、改前问题、方案、涉及文件、效果与测试结果。规则：每次优化在**同一次提交**里更新本文件；效果数据必须来自实测或文件体积对比，不写推测值。

## 基线（2026-11-15，阶段 0 审计实测，HEAD `7f88f0b`）

| 资源 | 体积 |
|---|---|
| index.html | 29,026 B |
| style.css | 21,039 B |
| script.js | 56,109 B |
| guide.html / ielts.html | 10,758 B / 16,044 B |
| assets/hero-mountain.jpg（1920×1080） | 73,572 B |
| assets/times-square.jpg（1200×801） | 273,175 B |
| assets/code-dark.jpg（1200×797） | 85,126 B |
| assets/study-desk.jpg（384×672） | 45,308 B |

基线备注：图片无懒加载、无宽高属性、全站仅 JPG 格式；Lighthouse / Core Web Vitals 未测（Phase 5 建正式基线）。后续每批优化在本表基线上做前后对比。

## 记录

### 2026-11-15 — Phase 1 批次 A：建立 docs/ 文档体系
- 优化项目：项目文档体系（非网站代码优化）。
- 原因：总规划要求文档与代码同步维护，此前仓库只有 README 与 CHANGELOG。
- 方案：新建 docs/ 六个文件（architecture、design-system、compatibility、optimization-log、development-log、testing/test-report），内容以阶段 0 审计实测为准。
- 涉及文件：docs/*.md、CHANGELOG.md（追加条目）。
- 效果：文档体系从 2 个文件扩到 8 个；网站代码零改动，线上无任何变化。
- 测试：见 testing/test-report.md 的 2026-11-15 条目。
