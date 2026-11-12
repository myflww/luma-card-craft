# 来源、署名与许可

本项目的新增经验文档与展示资源采用非商业许可，但不能收回上游已经给予的 MIT 权利。

| 内容 | 作者与来源 | 保留许可 |
| --- | --- | --- |
| Blender / Three.js 制作流水线、模板、复制参考 | HRuiCcc，RuiC Card Skill 的既有 MIT 副本 | [MIT 原文](skills/luma-card-craft/LICENSE) |
| Three.js r180 与加载器 | [Three.js authors](https://github.com/mrdoob/three.js/blob/r180/LICENSE) | [MIT](skills/luma-card-craft/licenses/THREE-LICENSE.txt) |
| Lucide 0.468.0 图标 | [Lucide Contributors](https://github.com/lucide-icons/lucide/blob/0.468.0/LICENSE) | [ISC](skills/luma-card-craft/licenses/LUCIDE-LICENSE.txt) |
| 部分图标的 Feather 来源 | [Cole Bemis / Feather](https://github.com/feathericons/feather/blob/main/LICENSE) | [MIT](skills/luma-card-craft/licenses/FEATHER-LICENSE.txt) |

Skill 中的 [upstream-manifest.json](skills/luma-card-craft/upstream-manifest.json) 记录复制范围与摘要，[NOTICE.md](skills/luma-card-craft/NOTICE.md) 列明新增指导和保留代码的区别。没有可核实的原 Skill 仓库地址，因此未猜测同名项目的归属。

公开副本只对原模板 CSS 做了一项来源清理：删除未单独标明许可的内嵌 WOFF2 字体，沿用系统字体回退。上游演示图片、视频、GIF 和捐赠二维码不再分发。这里没有捆绑 Blender、Python、Pillow、Node.js、Bun 或 node_modules；下载安装适用它们各自的许可。

`assets/showcase/` 为 Luma 制作过程中的精选卡牌预览，AI 辅助创作，经过人工艺术指导、筛选和工艺整合。它们是展示用派生预览，不是完整运行时或高分辨率源资产；部分预览按原绑定叠加完成版透明框。每张的版本、正反面摘要与处理方式见 [cards.json](assets/showcase/cards.json)。仅在发布者持有权利范围内按 CC BY-NC-SA 4.0 提供，不授权第三方商标、肖像或参考图权利。

新教程与 Skill 整合指导由 myflww 的制作经验整理而成，AI 辅助编写。新增说明页代码由本项目编写，采用 PolyForm Noncommercial 1.0.0。完整边界以根 [LICENSE](LICENSE) 为准。
