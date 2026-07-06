# Your First Presentation

This page walks you through creating a presentation with Kova from scratch. You should have Kova [installed](installation.md) before continuing.

---

## The interface

When you open Kova you'll see four panels:

| Panel | Location | Purpose |
|-------|----------|---------|
| **Slides** | Left | Thumbnail strip — click any slide to jump to it; drag thumbnails to reorder; right-click a thumbnail to duplicate or delete that slide |
| **Editor** | Centre-left | Write your Markdown here |
| **Preview** | Centre-right | Live rendering of the current slide |
| **Inspector** | Right | Theme, colours, fonts, logo, and text formatting tools |

The **Inspector** can be toggled open or closed with the **ⓘ** button in the titlebar, independent of focus mode. The titlebar also has a **focus mode** button, between Present and the Inspector toggle, that hides everything but the editor and preview. Inside the Inspector, the **Format** accordion provides one-click buttons for headings (H1–H6), inline styles (bold, italic, underline, strikethrough, inline code), and block elements (lists, blockquote, divider).

The **status bar** at the bottom shows the current slide number, total word count, and estimated presentation time.

---

## Step 1 — Create a new file

Press `Ctrl+N` (or click **New**) to open a starter template:

```markdown
# My Presentation

---

## First Slide

- Point one
- Point two
- Point three
```

---

## Step 2 — Document settings

Kova manages document settings (title, date, theme, colour overrides, logo) automatically. You interact with all of these through the **Inspector** panel — there is nothing to edit manually.

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

## Step 7 — Open and insert files

**Open a Markdown file:** drag a `.md` file from your file manager and drop it onto the Kova window. Kova opens the file, replacing the current document (with an unsaved-changes prompt if needed).

**Insert an image or video:** drag an image or video file from your file manager and drop it onto the **editor**, or right-click and choose **Insert → Image** / **Insert → Video** to pick a file from a dialog. Kova copies the file into an `assets/` folder next to your document (or references it relatively if it's already alongside the file) and inserts a Markdown reference at the drop/cursor position:

```markdown
![My diagram](./assets/diagram.png)
!video[Demo clip](./assets/demo.mp4)
```

A dashed overlay appears over the editor while you drag to confirm the drop target.

**Paste a clipboard image or video:** copy an image or video from any app (screenshot, browser, design tool, file manager) and press `Ctrl+V` (or `Cmd+V` on macOS) in the editor. Kova saves the file alongside your document and inserts the reference automatically.

!!! note
    If no document is currently saved, image paths fall back to the absolute file path. Save your file first to get relative paths.

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
