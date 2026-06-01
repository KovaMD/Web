# Your First Presentation

This page walks you through creating a presentation with Kova from scratch. You should have Kova [installed](installation.md) before continuing.

---

## The interface

When you open Kova you'll see four panels:

| Panel | Location | Purpose |
|-------|----------|---------|
| **Slides** | Left | Thumbnail strip — click any slide to jump to it |
| **Editor** | Centre-left | Write your Markdown here |
| **Preview** | Centre-right | Live rendering of the current slide |
| **Inspector** | Right | Theme, colours, fonts, logo, and text formatting tools |

The **Inspector** can be toggled open or closed with the **ⓘ** button in the titlebar, independent of focus mode. Inside the Inspector, the **Format** accordion provides one-click buttons for headings (H1–H6), inline styles (bold, italic, underline, strikethrough, inline code), and block elements (lists, blockquote, divider).

The **status bar** at the bottom shows the current slide number, total word count, and estimated presentation time.

---

## Step 1 — Create a new file

Press `Ctrl+N` (or click **New**) to open a starter template:

```markdown
---
title: My Presentation
date: 2026
---

# My Presentation

---

## First Slide

- Point one
- Point two
- Point three
```

---

## Step 2 — Document settings

Kova stores document settings (title, date, theme, colour overrides, logo) in a YAML frontmatter block at the top of the file and keeps it in sync automatically. You interact with all of these through the **Inspector** panel — there is nothing to edit manually.

Use the **Aspect Ratio** toggle in the Inspector to choose between `16:9`, `16:10`, and `4:3`. See [Presenting](presenting.md) and [Exporting](exporting.md) for details.

---

## Step 3 — Add slides

Separate slides with `---` on a line by itself:

```markdown
## The Problem

Legacy tools require manual slide design for every change.

---

## Our Approach

Write once in Markdown — Kova handles the rest.

---

## Results

!progress[Adoption](78)
!progress[Satisfaction](91)
!progress[Time saved](65)
```

Kova automatically selects a layout for each slide based on its content. See [Layouts](layouts.md) for details on how layout detection works.

---

## Step 4 — Choose a theme

Open the **Inspector** (click **ⓘ** in the titlebar). The **Theme** section shows all 11 built-in themes as swatches. Click any theme to apply it — the change is instant and Kova saves it to the file automatically.

See [Themes](themes.md) for the full list and custom theme instructions.

---

## Step 5 — Present

Click **▶ Present** in the titlebar. Kova checks how many displays are connected:

- **External display detected** — a dual-screen presenter view opens automatically. Your laptop shows the presenter overlay (current slide, next-slide preview, speaker notes, elapsed timer); the external display shows the audience view fullscreen.
- **Single display** — the current slide fills your screen in fullscreen mode.

Navigate with ++arrow-right++ / ++space++ / ++page-down++ (next slide) and ++arrow-left++ / ++page-up++ (previous slide). Press ++escape++ to exit.

See [Presenting](presenting.md) for the full reference.

---

## Step 6 — Save

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save — overwrites the current file, or opens **Save As** if the file is new |
| `Ctrl+Shift+S` | Save As — choose a new location |

!!! tip "External editor support"
    Kova watches the file for external changes and reloads automatically. You can edit your `.md` file in VS Code, Neovim, or any other editor and see updates live in Kova.

---

## Step 7 — Insert images

Drag an image file from your file manager and drop it onto the editor. Kova inserts a Markdown image reference at the drop position using a **path relative to the current document**:

```markdown
![My diagram](./assets/diagram.png)
```

A dashed overlay appears over the editor while you drag to confirm the drop target.

!!! note
    If no document is currently saved, Kova falls back to the absolute file path. Save your file first to get relative paths.

---

## Next steps

<div class="grid cards" markdown>

-   :material-text: **[Markdown & Syntax](markdown-and-syntax.md)**

    ---
    All the content types Kova supports: code blocks, Mermaid diagrams, progress bars, YouTube embeds, speaker notes, and more

-   :material-palette: **[Themes](themes.md)**

    ---
    All 11 built-in themes, Inspector overrides, and how to write a custom theme YAML file

-   :material-presentation: **[Presenting](presenting.md)**

    ---
    Single-screen and dual-screen presenter view, display mode settings

-   :material-keyboard: **[Keyboard Shortcuts](keyboard-shortcuts.md)**

    ---
    Speed up your workflow with the full shortcut reference

</div>
