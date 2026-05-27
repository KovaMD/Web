# Kova

**Kova** is a free, open-source desktop app for creating presentations from plain Markdown. Write slides in your editor; Kova handles layout, theming, and export to PowerPoint — no drag-and-drop required.

[Download Kova](https://github.com/KovaMD/Kova/releases){ .md-button .md-button--primary } [View on GitHub](https://github.com/KovaMD/Kova){ .md-button }

---

## How it works

A Kova presentation is a single `.md` file. Slides are separated by `---` on its own line. An optional YAML frontmatter block at the top sets the document title, theme, and aspect ratio.

```markdown
---
title: My Presentation
theme: slate
aspect_ratio: "16:9"
---

# My Presentation

Your Name · 2026

---

## What we'll cover

- Background and context
- The core problem
- Our proposed approach
- Next steps

---

## Progress so far

!progress[Feature complete](82)
!progress[Tests passing](94)
!progress[Docs written](67)
```

Kova parses the file in real time, detects the best layout for each slide automatically, and renders a live preview in the editor. Click **▶ Present** when you're ready — dual-screen presenter view opens automatically if an external display is detected.

---

## Feature overview

| | |
|---|---|
| **Plain Markdown** | Standard Markdown + GitHub Flavored Markdown tables |
| **Automatic layouts** | 13 layout rules applied without manual configuration |
| **11 built-in themes** | Customisable per-document via the Inspector panel |
| **Custom themes** | Drop a `.yaml` file into `~/.kova/themes/` |
| **Mermaid diagrams** | Rendered and auto-themed to match your presentation |
| **Kova extensions** | Progress bars, YouTube embeds, poll/QR codes |
| **Speaker notes** | Hidden from the audience, visible in presenter view |
| **Presenter view** | Dual-screen: next slide preview, notes, elapsed timer |
| **Export to PowerPoint** | Full `.pptx` output via PptxGenJS — no internet required |
| **Focus mode** | Distraction-free writing with `Ctrl+Shift+F` |

---

!!! info "Alpha status"
    Core features are stable, but you may encounter rough edges. Please [report issues](https://github.com/KovaMD/Kova/issues) on GitHub with your OS, Kova version, and reproduction steps.

---

## Documentation

<div class="grid cards" markdown>

-   :material-download: **[Installation](installation.md)**

    ---
    macOS, Windows, and Linux setup

-   :material-play-circle: **[Getting Started](getting-started.md)**

    ---
    Build your first presentation in 5 minutes

-   :material-text: **[Markdown & Syntax](markdown-and-syntax.md)**

    ---
    Everything you can write in a Kova slide

-   :material-view-dashboard: **[Layouts](layouts.md)**

    ---
    How automatic layout detection works

-   :material-palette: **[Themes](themes.md)**

    ---
    Built-in themes, Inspector overrides, and custom themes

-   :material-presentation: **[Presenting](presenting.md)**

    ---
    Single-screen and dual-screen presenter view

-   :material-keyboard: **[Keyboard Shortcuts](keyboard-shortcuts.md)**

    ---
    Complete shortcut reference

-   :material-cog: **[Settings & Keybindings](settings-and-keybindings.md)**

    ---
    Autosave, display modes, and key remapping

-   :material-microsoft-powerpoint: **[Exporting to PowerPoint](exporting-to-powerpoint.md)**

    ---
    `.pptx` export and what carries across

-   :material-source-branch: **[Contributing](contributing.md)**

    ---
    Build from source, run tests, submit PRs

</div>
