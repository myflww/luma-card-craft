# 安装 Luma Card Craft

此目录本身就是可安装的 Codex Skill。它整合 MIT 的 RuiC Blender / Three.js 流水线与新的卡牌制作指导；许可范围见 [NOTICE.md](NOTICE.md)。这里没有卡图、模型或用户数据。

## 安装

克隆仓库后，将本目录复制到你的技能目录；不要覆盖同名目录中的独有修改：

```sh
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R skills/luma-card-craft "${CODEX_HOME:-$HOME/.codex}/skills/luma-card-craft"
```

如果使用仓库提供的 Skill ZIP，将其中 `luma-card-craft/` 文件夹解压到相同技能目录。随后在 Codex 中显式调用 `$luma-card-craft`；按客户端的技能发现方式刷新或重新打开任务。

## 示例请求

> 使用 $luma-card-craft，保留这个角色的身份，设计一张侧脸阅读旧信的黄昏海港卡。先完成插画；边框参考贝母和细铜刻线，保持画面主体清楚。

> 使用 $luma-card-craft，把我已经批准的图做成可拖动的镭射卡。请保留原画，说明你实现的是卡体、边框、图层视差还是人物浮雕，并检查左右倾斜和静态原画。

## 使用附带流水线

1. 准备 Python 3 + Pillow、Node.js/npm；已有 Blender 可指定路径，没有时脚本可下载校验过的官方便携版。
2. 按 [SKILL.md](SKILL.md) 和 [配置示例](references/config.example.json) 准备实际图层与配置。
3. 执行 `python3 scripts/validate_assets.py /path/to/project`，再执行 `python3 scripts/run_pipeline.py --project /path/to/project`。
4. 用 `node /path/to/project/web/server.mjs` 启动，在终端显示的本地地址检查实际效果。

附带模板是四层、有文字及线稿的制作基线。它不是自动抠图模型，也不会自动生成精确语义深度或闭合人物雕塑。无字卡、独立自定义卡背及现有产品接入需按目标调整实现；不要用空层伪造通过。改过网页源码时需要 Bun 重建 `app.bundle.js`；未修改源码可以使用附带的预构建文本 bundle。

## 本次包验证范围

本次分发检查覆盖文本白名单、Skill 元数据、ZIP 可读性、复制文件完整性和隐私模式扫描。没有在公开打包过程中生成新卡、下载 Blender 或重跑完整 Blender / WebGL 制作验收；实际产出需依 [验证清单](references/verification.md) 检查。

公开包从 CSS 中移除了未单独标明许可的内嵌字体，使用系统字体；其余上游流水线算法保持复制版本。完整清单见 `upstream-manifest.json`。
