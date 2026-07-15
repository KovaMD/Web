# Importing

Kova can bring in content from PowerPoint files, remote URLs, and Marp decks. Each method opens the result as an editable Kova Markdown presentation — the source file is never modified.

---

## From PowerPoint

Convert a `.pptx` file into a Kova Markdown presentation. Useful for migrating an existing deck or starting from a file sent by a colleague.

### How to import

1. Go to **File → Import → From PowerPoint…**
2. Select a `.pptx` file using the file picker.
3. Kova prompts you to choose a save location for the new `.md` file.
4. A progress modal shows which slides are being processed.
5. When conversion is complete, the new presentation opens automatically.

### What is imported

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

Speaker notes from the `.pptx` file are preserved verbatim and appended using the `???` delimiter:

```markdown
## Q3 Revenue

- $2.4M (+22% YoY)

???

These are the speaker notes from the original PowerPoint slide.
```

### After importing

1. **Choose a theme** — the imported file has no theme set. Open the Inspector and pick one.
2. **Review layouts** — layout detection does its best, but slides with complex structure may need a `<!-- layout: ... -->` override. See [Layouts](layouts.md).
3. **Check images** — embedded images are saved as `assets/filename.ext` alongside your `.md` file. Check the `assets/` folder if any images appear broken.

### Unsupported elements

| Element | Reason |
|---|---|
| Charts (bar, pie, line, etc.) | No equivalent Kova syntax — consider replacing with a Mermaid diagram |
| SmartArt | Complex vector layout has no Markdown representation |
| WMF / EMF images | Legacy Windows metafile format; re-export as PNG in PowerPoint first |
| Animations and transitions | Kova does not support slide animations |
| Embedded videos | Use `!youtube[Title](url)` to link a video instead |

When elements are skipped, Kova lists them in the **results step** of the import modal (slide number and element type). The rest of the slide is imported normally.

!!! tip "Charts → Mermaid"
    If you have a bar or pie chart in your PowerPoint, you can often reproduce it as a Mermaid diagram in Kova. See the [Mermaid section in Markdown & Syntax](markdown-and-syntax.md#diagrams-mermaid) for supported chart types.

---

## From URL

Fetch any Markdown file from the web directly into Kova. GitHub, GitLab, and Bitbucket links are rewritten to their raw equivalents automatically — no need to copy the raw URL yourself.

### How to import

1. Go to **File → Import → From URL…**
2. Paste a link to a Markdown file and press **Import** (or `Enter`).
3. If Kova rewrites the URL to its raw form, the resolved address is shown below the input so you can verify it.
4. The file loads as an unsaved document — save it when you're ready.

### Supported URL formats

| Host | Input URL | Fetched as |
|---|---|---|
| GitHub | `github.com/user/repo/blob/branch/file.md` | `raw.githubusercontent.com/…` |
| GitLab | `gitlab.com/user/repo/-/blob/branch/file.md` | `gitlab.com/…/-/raw/…` |
| Bitbucket | `bitbucket.org/user/repo/src/branch/file.md` | `bitbucket.org/…/raw/…` |
| Any other | Fetched as-is | — |

The fetch runs inside the Kova process (via `reqwest`) so the URL must be publicly accessible — private repos behind authentication are not supported.

---

## From Marp

Convert a [Marp](https://marp.app/) presentation into editable Kova Markdown. Kova maps the most common Marp constructs onto its own layout and theme system. The source file is not modified.

### How to import

**Option 1 — Auto-detect:** Open a `.md` file that contains `marp: true` in its frontmatter. Kova detects the flag and shows a banner offering to convert it.

**Option 2 — Menu:** Go to **File → Import → From Marp…** and select a `.md` file.

In both cases the result opens as an untitled buffer. Save it to a new location when you're ready.

### What is mapped

| Marp construct | Kova output |
|---|---|
| `![bg](image.jpg)` | `<!-- layout:full-bleed -->` + `![](image.jpg)` |
| `![bg left](image.jpg)` / `![bg right](…)` | `<!-- layout:split -->` + `![](…)` |
| `<!-- _class: lead -->` | `<!-- layout:title -->` |
| `<!-- _class: invert -->` | `<!-- _class: invert -->` — kept as Kova's own [per-slide invert](markdown-and-syntax.md#per-slide-text-colour) |
| `<!-- color: … -->` / `<!-- _color: … -->` | `<!-- color: … -->` — kept as Kova's own [per-slide text colour](markdown-and-syntax.md#per-slide-text-colour) |
| `size: 4:3` / `size: 16:9` | `aspect_ratio: "4:3"` / `aspect_ratio: "16:9"` |
| `paginate: true` | `footer: { show_slide_number: true }` |
| `footer: "My footer"` | `footer: { show: true, text: "My footer" }` |
| `title:`, `author:`, `date:` (and other simple scalars) | Passed through verbatim |
| `<!-- comment -->` (not a Marp directive) | Converted to a `???` speaker note |

### What is dropped

Some Marp features have no direct Kova equivalent. Kova logs each dropped item as an inline comment (`<!-- marp: dropped … -->`) and shows a count in a banner after import.

| Dropped | Why |
|---|---|
| Per-slide `backgroundColor` (`_backgroundColor`) | No per-slide background colour equivalent — use `theme_overrides` or a [background image](markdown-and-syntax.md#slide-background-images-bg) instead |
| `![bg]` sizing keywords (`left:40%`, `w:300`, etc.) | Images are included but sizing is stripped |
| Multiple `![bg]` on one slide | Only the first background image is used |
| `theme:` | Marp themes have no Kova equivalent — choose a Kova theme after import |
| `header:` | No header element in Kova |
| `style:` (embedded CSS) | Kova does not accept raw CSS |
| `backgroundColor` / `color` / `backgroundImage` (global, in frontmatter) | Use a Kova theme or `theme_overrides` instead |
| `_class:` values other than `lead` | Only `lead` maps to a layout |

### After importing

1. **Choose a theme** — Marp theme information is dropped. Open the Inspector and pick a Kova theme.
2. **Review layouts** — Check slides that used `![bg]` or `_class` directives; adjust any `<!-- layout: … -->` overrides as needed. See [Layouts](layouts.md).
3. **Search for drop comments** — Search for `marp: dropped` in the editor to find every location where something was simplified, and decide whether you need to recreate it manually.
4. **Relative images** — If the source file used relative image paths, keep the imported file in the same directory as the original images, or update the paths after saving.

!!! tip "Speaker notes from comments"
    Marp authors sometimes use `<!-- … -->` HTML comments for presenter notes. Kova converts any comment that isn't a Marp directive into a `???` note, so your notes should carry over automatically.
