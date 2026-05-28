# Exporting to PowerPoint

Kova can export your presentation to a `.pptx` file that opens in Microsoft PowerPoint, LibreOffice Impress, Keynote, and Google Slides.

---

## How to export

1. Click **Export** in the toolbar (next to **Save As**).
2. Choose a save location in the file dialog.

Kova generates the `.pptx` file entirely in-process using [PptxGenJS](https://gitbrent.github.io/PptxGenJS/) — **no internet connection is required**.

---

## What is exported

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
| `bsp` | Two or three content panes |
| `grid` | Grid of content cards |
| `code` | Dark background with monospaced code block |
| `media` | Title with centred placeholder (see [Limitations](#limitations)) |

**Theme colours and fonts** are applied to all slides. Progress bars are exported as visual bars matching the slide theme. Code blocks are exported with syntax highlighting using the `github-dark` palette. Mermaid diagrams are rendered to PNG and embedded in the `.pptx`.

!!! note "Mermaid render warnings"
    If a Mermaid diagram fails to render during export, Kova shows a warning after export naming the affected slide. The rest of the presentation exports normally.

---

## Aspect ratio

The output respects the aspect ratio set in the Inspector. Use the **Aspect Ratio** toggle to choose before exporting.

| Setting | PowerPoint layout | Dimensions |
|---------|-------------------|------------|
| 16:9 (default) | `LAYOUT_WIDE` | 33.87 cm × 19.05 cm |
| 16:10 | `LAYOUT_WIDE` (custom) | 25.4 cm × 15.88 cm |
| 4:3 | `LAYOUT_4x3` | 25.4 cm × 19.05 cm |

---

## Limitations

| Element | Export behaviour |
|---------|-----------------|
| **YouTube embeds** (`!youtube`) | Exported as a text placeholder with the URL — not as an embedded video |
| **Poll / QR codes** (`!poll`) | Exported as a text placeholder with the URL — not as a QR code |
| **Custom web fonts** | Substituted with the closest PowerPoint-safe alternative (e.g. Georgia for a serif theme font) |

---

## After exporting

The `.pptx` file is a standard Office Open XML file. Open it in any compatible application for final polish — adjusting font sizes, adding animations, or inserting additional slides. Because it's a standard format, no Kova software is needed to open or edit the exported file.
