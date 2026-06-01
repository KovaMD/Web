# Importing from PowerPoint

Kova can convert a `.pptx` file into a Kova Markdown presentation. This is useful for migrating an existing deck, or for starting from a PowerPoint file sent to you by a colleague.

---

## How to import

1. Click **Import** in the toolbar (next to **Export**).
2. Select a `.pptx` file using the file picker.
3. Kova prompts you to choose a save location for the new `.md` file.
4. Kova converts the file — a progress modal shows which slides are being processed.
5. When conversion is complete, the new presentation opens automatically.

---

## What is imported

Kova walks the OOXML slide XML and extracts:

| PPTX element | Kova output |
|---|---|
| Centre title placeholder (`ctrTitle`) | `# H1` heading |
| Title placeholder (`title`) | `## H2` heading |
| Body / object placeholder (single paragraph) | Body text |
| Body / object placeholder (multiple paragraphs) | Bulleted list (`- item`) |
| Image (PNG, JPG, GIF, WebP) | `![](./assets/filename.ext)` — image saved to `assets/` |
| Table | GitHub Flavored Markdown table |
| Speaker notes | Appended after the `???` delimiter |

After conversion, Kova applies its normal automatic layout detection to each slide — the same rules that run when you write slides from scratch. Review the results and adjust any slides where the detected layout doesn't match your intent.

### Speaker notes

Speaker notes from the `.pptx` file are preserved verbatim and appended to the corresponding slide using the `???` delimiter:

```markdown
## Q3 Revenue

- $2.4M (+22% YoY)

???

These are the speaker notes from the original PowerPoint slide.
```

---

## After importing

The imported file is a standard Kova Markdown file — you can edit it freely in the editor or in any external text editor. You will likely want to:

1. **Choose a theme** — the imported file has no theme set. Open the Inspector and pick one.
2. **Review layouts** — layout detection does its best, but slides with complex structure may need a `<!-- layout: ... -->` override. See [Layouts](layouts.md).
3. **Check images** — embedded images are saved as `assets/filename.ext` alongside your `.md` file. Check the `assets/` folder if any images appear broken.

---

## Unsupported elements

Some PowerPoint elements cannot be converted to Markdown and are skipped:

| Element | Reason |
|---|---|
| Charts (bar, pie, line, etc.) | No equivalent Kova syntax — consider replacing with a Mermaid diagram |
| SmartArt | Complex vector layout has no Markdown representation |
| WMF / EMF images | Legacy Windows metafile format; re-export as PNG in PowerPoint first |
| Animations and transitions | Kova does not support slide animations |
| Embedded videos | Use `!youtube[Title](url)` to link a video instead |

When elements are skipped, Kova lists them in the **results step** of the import modal (slide number and element type). The rest of the slide is imported normally.

!!! tip "Charts → Mermaid"
    If you have a bar or pie chart in your PowerPoint, you can often reproduce it as a Mermaid diagram in Kova. See the [Mermaid section in Markdown & Syntax](markdown-and-syntax.md#mermaid-diagrams) for supported chart types.
