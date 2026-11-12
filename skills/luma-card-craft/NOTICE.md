# 来源与许可边界

此包由两类内容组成，不能用一份“禁止商用”声明覆盖所有上游权利。

| 范围 | 来源 / 作者 | 许可 |
|---|---|---|
| `scripts/`、`assets/web-template/`、`references/art-direction.md`、`references/illustration-quality.md`、`references/verification.md`、`references/config.example.json` | RuiC Card Skill，HRuiCcc，2026；复制自用户已有的 MIT 发行副本 | MIT，见 `LICENSE` |
| `SKILL.md`、`references/production-checklist.md`、`README.md`、`agents/openai.yaml` 及本次新增的整合说明 | myflww 的卡牌制作经验整理，AI 辅助编写 | CC BY-NC-SA 4.0，见 `LICENSE-GUIDANCE.md` |
| 预构建 `app.bundle.js` 内的 Three.js 与加载器 | Three.js authors，0.180.0 / r180 | MIT，见 `licenses/THREE-LICENSE.txt` |
| `icons.data.js` 和 bundle 中的 Lucide 图标树 | Lucide Contributors，0.468.0；部分源自 Cole Bemis 的 Feather | ISC 与保留的 Feather MIT 声明，见 `licenses/LUCIDE-LICENSE.txt`、`licenses/FEATHER-LICENSE.txt` |

上游 MIT 代码仍可按 MIT 条款使用，包括其允许的商业使用；本包的非商业限制不撤销这些权利。新的经验文档和仓库展示卡图不能因旁边附有 MIT 代码就自动获得商业授权。卡图的具体条款由仓库根许可说明和图像声明决定，卡图不包含在此 Skill ZIP 中。

复制文件的路径和 SHA-256 记录在 `upstream-manifest.json`。流水线和渲染算法保持复制版本；公开副本仅移除了 `style.css` 中来源许可未单独标明的嵌入 WOFF2 字体，改用现有系统字体回退。未重新分发该字体。原来演示媒体、捐赠二维码和内部制作流水账亦未打包。

本包没有捆绑 Blender、Node.js、Python、Pillow、Bun 或 `node_modules`。使用者安装或下载这些工具时适用它们各自的许可；Blender 自定义节点图与浏览器 GLSL 是两种实现，不宣称渲染结果逐像素相同。

许可原文来源：

- Three.js r180：<https://github.com/mrdoob/three.js/blob/r180/LICENSE>
- Lucide 0.468.0：<https://github.com/lucide-icons/lucide/blob/0.468.0/LICENSE>
- Feather：<https://github.com/feathericons/feather/blob/main/LICENSE>
- 新增指导 CC BY-NC-SA 4.0：<https://creativecommons.org/licenses/by-nc-sa/4.0/>

上游副本未包含可核实的仓库 URL，因此只标注它实际附带的名称、作者及许可，不猜测同名 GitHub 项目的归属。
