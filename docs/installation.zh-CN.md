# 安装独立 Skill 与制作第一张卡

本仓库的独立技能名称是 `luma-card-craft`。它整理了制作经验，并附带保留原许可的 Blender／Three.js 上游流水线。本说明只针对独立创作项目，不安装或修改 Luma 应用。

## 1. 获取并安装 Skill

```sh
git clone https://github.com/myflww/luma-card-craft.git
cd luma-card-craft
python3 - <<'PY'
from pathlib import Path
from shutil import copytree
copytree("skills/luma-card-craft", Path.home() / ".codex" / "skills" / "luma-card-craft")
PY
```

这会复制到 `~/.codex/skills/luma-card-craft`，不会覆盖已有的 `RuiC-card-skill`。如果目标目录已存在，复制会报错停止：先比较并保留自己的修改，再自行决定升级方式，避免把不同版本的脚本混在一起。

也可下载仓库中的 [Skill ZIP](../dist/luma-card-craft-skill.zip)，解压后把完整技能目录放入上述位置；安装后的 `SKILL.md` 应直接位于 `luma-card-craft/` 下。保留脚本、模板、参考资料和许可文件。重新打开 Codex 会话后，用 `$luma-card-craft` 或自然语言提出制作请求。

## 2. 准备环境

- Python 3 和 Pillow，用于素材检查与文字图层生成。
- Node.js 与 npm，用于本地查看器及依赖安装。
- Blender：可提供现有可执行文件；未找到时，上游脚本会尝试下载官方版本，校验官方 SHA-256，再放到当前输出项目的 `tools/` 内。
- Bun 可选：可用于重新打包查看器；未安装 Bun 时，脚本可复用随模板提供的 `app.bundle.js`。修改了查看器源码时，需要重新构建，不能把旧 bundle 当作新代码。

首次下载 Blender、npm 依赖或安装 Pillow 需要联网。Blender 下载与解压可能占用较大空间；不要把输出项目或依赖目录直接提交进公开仓库。

以下是 macOS／Linux shell 示例；Windows 用户可在自己的 Python 环境运行相同脚本，并调整 shell 路径与虚拟环境激活方式。

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install Pillow
```

后面的命令在仓库根目录执行，输出项目使用 `"$PWD/examples/my-card"`，避免依赖某位作者的本机路径。使用已安装 Skill 时，也可以改为该 Skill 的脚本路径。

## 3. 新建自己的输出项目

```sh
mkdir -p examples/my-card/assets
cp skills/luma-card-craft/references/config.example.json examples/my-card/card-config.json
```

编辑配置中的标题、说明、参数与素材信息，再准备自己的四份等尺寸图层：

| 文件 | 要求 |
| --- | --- |
| `assets/subject.png` | 人物或物件，与背景注册；真实 RGBA 透明，同时有可见与透明像素 |
| `assets/background.png` | 完整背景，能够承接前景移开后露出的区域 |
| `assets/lineart.png` | 与主体位置一致的黑色轮廓、白色背景，具备足够明暗对比 |
| `assets/text.png` | 正确文字或图形排版，真实透明且含可见内容 |

展示页的完整卡图不是现成的四层素材包。不要把同一张完整卡图重命名四次，也不要把画出来的棋盘格当作 Alpha。建议使用适合卡片的清晰原图，并先按 [制作教程](production-guide.zh-CN.md) 核对构图与身体连接。

若需要文字图层，可在准备好背景和配置后生成：

```sh
python skills/luma-card-craft/scripts/generate_typography.py "$PWD/examples/my-card"
```

检查字体是否覆盖所用语言；必要时在配置中提供 `font`。不要仅凭脚本运行成功认定中文文字、换行与大小已经正确。

当前上游模板要求这四层，也要求 `text.png` 具备可见与透明像素。无字卡、不同分层结构或已有产品应适配其实际渲染器、验证器与布局；不应靠全透明占位图绕过检查。通用教程中的方法不限于此模板，但模板不会自动完成所有方法。

## 4. 检查并构建

```sh
python skills/luma-card-craft/scripts/validate_assets.py "$PWD/examples/my-card"
python skills/luma-card-craft/scripts/run_pipeline.py --project "$PWD/examples/my-card"
```

素材验证会检查 PNG、尺寸一致性、透明像素和线稿对比，并写出 `asset-validation.json`。它不能判断解剖、审美或轮廓是否真正贴合，仍需查看实图。

流水线随后准备 Blender、保存 `card.blend`、导出 `web/assets/card.glb`、复制素材与查看器，并安装 npm 依赖。若希望使用自己准备的 Blender，可向 `run_pipeline.py` 额外传入 `--blender` 和该可执行文件的实际路径。

不要跳过失败后声称完成。`--skip-render` 只省略离线渲染步骤；`--skip-npm` 只省略依赖安装；它们不是已经通过视觉或运行验证的证明。

## 5. 在浏览器查看

```sh
node "$PWD/examples/my-card/web/server.mjs"
```

按终端打印的地址打开浏览器。默认是 `http://127.0.0.1:4173`；端口占用时可自行设置 `PORT` 后重启该项目的预览服务。服务仅监听本机回环地址，关闭预览时在运行它的终端按 `Ctrl+C`。

等待纹理与模型实际加载，然后查看正面、背面、左右倾斜、拖动、回正、参数变化、窄屏与低动态设置。每次拍摄相反角度之前先回正，避免把增量旋转误记成绝对角度。关闭查看器后检查动画、事件与 GPU 资源是否释放。

浏览器中的材质需要实时着色器实现；导出的 glTF 不会原样携带 Blender 的全部自定义节点图。离线与浏览器渲染可以有差异，应以实际检查为准。

## 6. 能力与许可边界

本仓库官网使用精选卡图与整卡 CSS 交互，不为每张展示卡提供完整 Three.js 工程。独立技能是自建流水线的起点，不是现成的 Luma 应用，也不是一键生成全部场景浮雕、精细蒙版与主题卡册特效的完整工具。

安装 Skill、脚本语法检查、成功下载依赖、Blender 构建、浏览器渲染和最终审美接受应分别记录。本说明不声称已在你的系统上运行或通过 Blender，也不保证任意输入都能得到满意作品。

原创指导与卡图适用 CC BY-NC-SA 4.0，新网站代码适用 PolyForm Noncommercial 1.0.0；保留的 HRuiCcc 上游代码适用其原 MIT 许可，第三方组件继续遵守各自许可。上游 MIT 部分并未因本仓库而禁止商用。AI 辅助卡图的版权范围依适用法律，非商业前提也不构成所有权证明。详细范围以仓库许可说明为准。

返回 [中文首页](../README.md) · 继续使用 [质量检查表](quality-checklist.zh-CN.md)。
