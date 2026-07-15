# Exporting

Kova can export your presentation to **PDF**, **PowerPoint (`.pptx`)**, or a **standalone HTML** file — all generated entirely in-process with no internet connection required.

---

## How to export

1. Click **Export** in the toolbar (next to **Save As**), or use **File → Export** in the menu bar.
2. Choose a format: **PDF**, **PowerPoint (.pptx)**, or **HTML**.
3. Choose a save location in the file dialog.

---

## Print

Select **File → Print** to send your slides to the OS print dialog. Each slide is captured as a high-resolution image and laid out one per page using the current aspect ratio, so Mermaid diagrams, syntax-highlighted code, and images are included exactly as they appear on screen. Print doesn't offer the slides-per-page/handout options described below for PDF export — for those, use **PDF export** instead.

!!! tip
    For sharing or archiving, **PDF export** (File → Export → PDF) is usually preferable — it gives you a file you can save. Print is most useful when you need a physical handout quickly.

---

## PDF export

Each slide is rendered to a single page at the exact pixel dimensions of the current aspect ratio. Because PDF export captures the live slide view, it faithfully reproduces everything you see in Kova — fonts, colours, gradients, images, Mermaid diagrams, syntax-highlighted code, and progress bars.

### Aspect ratio

The page size matches the aspect ratio set in the Inspector:

| Setting | Page dimensions |
|---------|----------------|
| 16:9 (default) | 338.7 mm × 190.5 mm |
| 16:10 | 254 mm × 158.8 mm |
| 4:3 | 254 mm × 190.5 mm |

### Export options

The **Export PDF** dialog offers:

| Option | Values | Notes |
|--------|--------|-------|
| **Slides per page** | 1 · 2 · 4 · 6 | Lays multiple slides out on one landscape page, each framed to the slide's own aspect ratio |
| **Include speaker notes (handout)** | On · Off | Only available at 1 slide per page; adds a divider rule and prints each slide's `???` notes below it. Disabled if the deck has no notes |

**Paper size** — A4 (default), Letter, or **Match slide size** — is set separately in **Settings → Workspace → PDF page size** — see [Settings & Keybindings](settings-and-keybindings.md#workspace). Pages are always laid out landscape.

!!! note "Match slide size"
    Instead of A4/Letter (which don't share a 16:9 or 4:3 slide's aspect ratio and so leave visible margins), **Match slide size** makes each PDF page exactly the slide's own dimensions — no margins. It falls back to A4 automatically when combined with **Slides per page** greater than 1, or with **Include speaker notes**, since a single slide's bounding box is too small to hold those layouts.

### Limitations

| Element | Export behaviour |
|---------|-----------------|
| **YouTube embeds** (`!youtube`) | Rendered as a static thumbnail/placeholder — not a playable video |
| **Local video** (`!video`) | Rendered as a static frame — not playable |
| **Poll / QR codes** (`!poll`) | Rendered as a static QR code image |

---

## PowerPoint export

Kova generates a `.pptx` file using [PptxGenJS](https://gitbrent.github.io/PptxGenJS/) that opens in Microsoft PowerPoint, LibreOffice Impress, Keynote, and Google Slides.

### What is exported

Every slide layout is reproduced in the `.pptx` output:

| Kova layout | PowerPoint equivalent |
|-------------|----------------------|
| `title` | Full-colour hero slide with title and subtitle text boxes |
| `section` | Coloured section-break slide |
| `title-content` | Title box at top, content area below |
| `title-image` | Title on the left, image on the right |
| `split` | Image on the left, text on the right |
| `full-bleed` | Full-slide image |
| `quote` | Centred large text with attribution |
| `two-column` | Two side-by-side content areas |
| `three-column` | Three side-by-side content areas |
| `bsp` | Two or three content panes |
| `grid` | Grid of content cards |
| `code` | Dark background with monospaced code block |
| `media` | Title with centred placeholder (see [Limitations](#limitations_1)) |

**Theme colours and fonts** are applied to all slides. Progress bars are exported as visual bars matching the slide theme. Code blocks are exported with syntax highlighting using the `github-dark` palette. Mermaid diagrams are rendered to PNG and embedded in the `.pptx`, preserving their original aspect ratio (a portrait flowchart stays portrait rather than stretching to fill the slide). The theme logo (if set) is stamped on every slide at the correct corner position with the theme's opacity setting. The `bar-left` decoration is replicated as an accent-coloured rectangle behind slide content.

**Inline formatting** (bold, italic, inline code, and links) inside list items is preserved in the `.pptx` output.

**Slide transitions** — every exported slide gets the same fade transition used in Kova's presentation mode, so playback in PowerPoint, Keynote, or Google Slides matches what you see when presenting from Kova.

!!! note "Mermaid render warnings"
    If a Mermaid diagram fails to render during export, Kova shows a warning after export naming the affected slide. The rest of the presentation exports normally.

### Aspect ratio

The output respects the aspect ratio set in the Inspector. Use the **Aspect Ratio** toggle to choose before exporting.

| Setting | PowerPoint layout | Dimensions |
|---------|-------------------|------------|
| 16:9 (default) | `LAYOUT_WIDE` | 33.87 cm × 19.05 cm |
| 16:10 | `LAYOUT_WIDE` (custom) | 25.4 cm × 15.88 cm |
| 4:3 | `LAYOUT_4x3` | 25.4 cm × 19.05 cm |

### Limitations

| Element | Export behaviour |
|---------|-----------------|
| **YouTube embeds** (`!youtube`) | Exported as a text placeholder with the URL — not as an embedded video |
| **Local video** (`!video`) | Exported as a text placeholder with the label and file path — not as an embedded video |
| **Poll / QR codes** (`!poll`) | Exported as a text placeholder with the URL — not as a QR code |
| **Custom web fonts** | Substituted with the closest PowerPoint-safe alternative (e.g. Georgia for a serif theme font) |

### After exporting

The `.pptx` file is a standard Office Open XML file. Open it in any compatible application for final polish — adjusting font sizes, adding animations, or inserting additional slides. Because it's a standard format, no Kova software is needed to open or edit the exported file.

---

## Standalone HTML export

**File → Export → HTML** saves the presentation as a single, self-contained `.html` file. Images and local videos are inlined as base64 data URIs, so the file opens and plays back correctly in any modern browser — no Kova installation, and no separate asset files to keep alongside it.

This is the one export format where **local video plays back normally**, since it's opened in a real browser rather than printed to a static page.
