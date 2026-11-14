# 跨平台兼容性记录（Compatibility）

记录各操作系统 × 浏览器 × 视口的实测结果。规则：**未实际测试的组合一律标记 Not Tested**，不以 Chromium 结果冒充其他浏览器或真机结果。系统化实测在总规划 Phase 2 执行，本表随实测逐格填充。

## 测试矩阵（当前状态）

| 操作系统 | 浏览器 | 视口/设备 | 状态 | 最近测试 | 备注 |
|---|---|---|---|---|---|
| Windows 10/11 | Chrome | 桌面 | Not Tested | — | Phase 2 用用户 PC 实测 |
| Windows 10/11 | Edge | 桌面 | Not Tested | — | Phase 2 用用户 PC 实测 |
| Windows 10/11 | Firefox | 桌面 | Not Tested | — | Phase 2 用用户 PC 实测 |
| macOS | Safari | 桌面 | Not Tested | — | 无真机，待设备条件 |
| macOS | Chrome / Firefox | 桌面 | Not Tested | — | 无真机，待设备条件 |
| Linux（Ubuntu/Debian） | Firefox / Chrome | 桌面 | Not Tested | — | 无真机，待设备条件 |
| iOS | Safari | iPhone（390px 级） | Not Tested | — | Phase 2 用用户 iPhone 实测 |
| Android | Chrome | 手机 | Not Tested | — | 无真机，待设备条件 |

参考基线：桌面 Chromium 渲染在 2026-11-05/06 建站与历次验收中实际验证可用，但那不构成上表任何一格的正式测试结论，故不填入。

## 视口断点核查清单（Phase 1 批次 E 使用）

360 / 390 / 640 / 768 / 1024 / 1280 / 1440 px，逐档检查：无横向溢出、导航可用、图片比例正常、卡片自适应、阅读宽度适宜、弹窗与菜单可关闭、链接可点。

## 已知兼容性风险（阶段 0 审计，代码层识别）

- 响应式仅 `@media(max-width:640px)` 一档，平板与大屏无分档规则（Phase 1 批次 E 处理）。
- :focus 样式仅 1 处，键盘焦点可见性不足（Phase 1 批次 D 处理）。
- 深浅主题对比度未做量化核查（总规划 Phase 5 无障碍专项）。
- `<html lang="zh-CN">` 固定，但首页 UI 可切换 9 种语言，屏幕阅读器存在发音风险（Phase 5 评估）。

## 测试记录格式

每次实测追加一行：日期 ｜ 系统 ｜ 浏览器及版本 ｜ 设备/视口 ｜ 测试页面 ｜ 测试项 ｜ 结果（Pass/Fail）｜ 已知问题。
