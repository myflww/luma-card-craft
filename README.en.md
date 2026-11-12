# Luma Card Craft

**A practical notebook and skill for making illustrated collectible cards.**

[简体中文](README.md) · [Gallery](https://myflww.github.io/luma-card-craft/) · [Installation guide](docs/installation.zh-CN.md)

Source-available · Non-commercial original content · AI-assisted artwork

This project brings together lessons from creating Luma cards: varied visual storytelling, delicate scene-matched frames, angle-dependent foil, readable depth, and collection interfaces that give the artwork room to breathe.

It includes selected finished card images, original production guidance, a quality checklist, and a separately installable skill based on an attributed upstream Blender/Three.js pipeline. It does **not** contain the Luma application source, installers, private accounts, or collection data.

## What you can explore

- **Artwork direction:** preserve a character's identity while changing the action, expression, camera, and environment.
- **Frame design:** derive ornament from the illustration and card back; preserve fine detail without covering the subject.
- **Material design:** apply foil selectively and make its response change with the viewing angle.
- **Depth design:** distinguish painted volume, whole-card rotation, layered parallax, surface relief, and geometry.
- **Reliable iteration:** bind each edition to its actual source assets and recheck affected layers after changes.
- **Presentation:** respect portrait and landscape proportions, center partial groups, and design theme-specific carriers and transitions.

Start with the [Chinese production guide](docs/production-guide.zh-CN.md), then use the [quality checklist](docs/quality-checklist.zh-CN.md) during your own work.

## The gallery and the production pipeline are different

The website presents selected card images with lightweight whole-card CSS interaction. It is a portfolio and explanation page, **not a complete Three.js viewer for every displayed card**.

A tilted image does not prove sculpted character depth. The installable pipeline provides a starting point for building your own Blender card geometry and Three.js presentation from prepared layers. The more advanced scene relief, masks, and themed carrier ideas described in the guide require appropriate assets and implementation; they are not all generated automatically by this template.

AI tools assisted the artwork process. Selection, composition, anatomy, contacts, masking, materials, and final viewing still require human review. A generated image, a unique file hash, or a renderer-ready flag is not aesthetic acceptance.

## Repository map

| Location | Purpose |
| --- | --- |
| `docs/production-guide.zh-CN.md` | An original, reusable production method |
| `docs/quality-checklist.zh-CN.md` | A practical review checklist |
| `docs/installation.zh-CN.md` | Skill installation and a layered-card workflow |
| `skills/luma-card-craft/` | The standalone skill, scripts, template, and attribution |
| `dist/luma-card-craft-skill.zip` | A packaged skill for installation |

The gallery assets are examples for viewing under their applicable license. They are not a ready-to-build layered source pack for the pipeline.

## Install the skill

Clone the repository, then copy the skill into a **new** local skill directory:

```sh
git clone https://github.com/myflww/luma-card-craft.git
cd luma-card-craft
python3 - <<'PY'
from pathlib import Path
from shutil import copytree
copytree("skills/luma-card-craft", Path.home() / ".codex" / "skills" / "luma-card-craft")
PY
```

The copy fails if that destination already exists, so an earlier installation is not silently merged or overwritten. It leaves an existing `RuiC-card-skill` installation alone. Restart your Codex session if needed for skill discovery.

You can also use [the skill ZIP](dist/luma-card-craft-skill.zip). Keep `SKILL.md`, `scripts/`, `references/`, template assets, and license notices together. See the [installation guide](docs/installation.zh-CN.md) for preparation, commands, dependencies, and limitations.

## Build your own card

You need Python 3 with Pillow, Node.js/npm, and suitable artwork. Blender can be supplied explicitly or downloaded into the output project's `tools/` directory with the upstream official-checksum installer. Initial dependency downloads need network access. Bun is optional when the included prebuilt viewer bundle is used.

1. Write an art brief that separates identity references from pose and lighting references.
2. Prepare aligned `subject.png`, `background.png`, `lineart.png`, and `text.png` layers, plus `card-config.json`.
3. Validate real Alpha and registration before building.
4. Run the pipeline in your own output directory.
5. Inspect front, opposite tilts, back, small screens, reduced motion, and resource cleanup in the actual browser.

The current four-layer template has its own typography and asset requirements. Wordless or differently structured cards need an appropriate adaptation rather than empty placeholder layers.

## License boundaries

This repository is **source-available**, not OSI-approved open source: a non-commercial restriction does not satisfy the OSI open-source definition.

| Material | Applicable terms |
| --- | --- |
| Original guidance and the original card showcase images | CC BY-NC-SA 4.0, within the rights the licensor can grant |
| Newly authored website code | PolyForm Noncommercial 1.0.0 |
| Attributed upstream skill and pipeline code | Its retained MIT license and copyright notice |
| Third-party dependencies and assets | Their own license notices |

The upstream MIT material is **not** made non-commercial by this repository. Its license allows commercial use under its own terms. Do not remove attribution or apply the original-content restrictions to someone else's MIT code.

Non-commercial use is a license condition, not proof of ownership. The availability and scope of copyright in AI-assisted images depend on applicable law; no rights in third-party references, brands, or likenesses are implied. Read the repository's licensing notices before reuse.

## Scope of the examples

The guides describe techniques and review questions. They do not certify your artwork, guarantee every platform, or establish that you have completed the Blender pipeline by reading or installing the skill. Record what you actually tested, preserve meaningful failures, and describe the achieved effect accurately.
