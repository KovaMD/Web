# Layouts

Kova automatically selects the best layout for each slide based on its content. You can also [override](#manual-override) the layout manually with an HTML comment.

---

## Automatic layout detection

Kova analyses the elements on a slide and applies the **first matching rule** in priority order:

| Priority | Condition | Layout applied |
|:--------:|-----------|---------------|
| 1 | H1 heading | [`title`](#title) |
| 2 | Any `!youtube` or `!poll` element | [`media`](#media) |
| 3 | A `\|\|\|` column break | [`two-column`](#two-column) |
| 4 | All elements are code blocks or Mermaid diagrams | [`code`](#code) |
| 5 | No heading + single image | [`full-bleed`](#full-bleed) |
| 6 | No heading + single blockquote | [`quote`](#quote) |
| 7 | H2 + no body content | [`section`](#section) |
| 8 | Heading + single image only | [`title-image`](#title-image) |
| 9 | Heading + one image + one text block | [`split`](#split) |
| 10 | 2–3 logical elements, visually diverse | [`bsp`](#bsp) |
| 11 | 4 or more logical elements | [`grid`](#grid) |
| 12 | Dense pure-text exceeding overflow threshold | [`two-column`](#two-column) |
| 13 | Anything else | [`title-content`](#title-content) |

!!! note "Logical element counting"
    Consecutive `!progress` bars are treated as **a single logical unit** for the BSP and Grid threshold checks. A slide with a heading, a paragraph, and four progress bars is counted as 3 logical elements — not 6 — so it uses `bsp` rather than `grid`.

!!! note "Overflow guard"
    Text-only slides that exceed the safe area line count automatically fall back to `two-column` to prevent text clipping (rule 12).

!!! note "Rescaled to fit"
    If a slide's content still exceeds the available space after layout selection, Kova scales it down to fit. A **"rescaled to fit"** badge appears in the bottom-right corner of the preview to let you know. Consider splitting the slide or reducing content if you see this badge.

---

## Layout reference

### `title`

**Triggered by:** an H1 heading.

Full-colour hero slide. Paragraphs below the H1 render as subtitles. Background colour, text alignment, and decorative pattern follow the active theme.

```markdown
# Kova

The presentation tool for people who prefer to write.
```

---

### `section`

**Triggered by:** an H2 heading with no body content.

Coloured section-break slide for dividing a presentation into chapters.

```markdown
## Part Two: Results
```

---

### `title-content`

**Triggered by:** a heading with text, lists, tables, or other body content.

This is the **default layout**. The heading sits across the top; content fills the remainder of the slide.

```markdown
## Key findings

- Response time improved by 40%
- Error rate dropped below 0.1%
- Customer satisfaction up 18 points
```

---

### `title-image`

**Triggered by:** a heading with a single image and nothing else.

The heading anchors the left side; the image fills the right half.

```markdown
## Architecture overview

![System diagram](./diagram.png)
```

---

### `split`

**Triggered by:** a heading + one image + one text block (paragraph or list).

Image on the left, text on the right. Good for product screenshots with accompanying description.

```markdown
## The editor

![Screenshot](./editor.png)

Write slides in plain Markdown with a live preview alongside.
```

---

### `full-bleed`

**Triggered by:** a single image with no heading.

The image fills the entire slide (cover crop). Good for dramatic opening or closing slides.

```markdown
![Conference hall](./crowd.jpg)
```

---

### `quote`

**Triggered by:** a single blockquote with no heading.

Large centred quote with optional attribution in smaller text.

```markdown
> The best way to predict the future is to invent it.
> — Alan Kay
```

---

### `two-column`

**Triggered by:** a `|||` column break, or the overflow guard on a dense pure-text slide.

Splits the slide into two equal columns. If `|||` is present the split occurs there; otherwise Kova splits at the element midpoint.

```markdown
## Before and after

**Legacy workflow**

1. Open PowerPoint
2. Drag text boxes around
3. Fight with alignment

|||

**With Kova**

1. Write Markdown
2. Choose a theme
3. Click Present
```

---

### `bsp`

**Triggered by:** 2–3 logical elements where the mix is visually diverse.

- **2 elements:** side-by-side panes.
- **3 elements:** left column + stacked right column.

Text content is placed on the left; visual content (images, progress bars, Mermaid) goes on the right. Consecutive `!progress` bars are grouped into a single pane.

```markdown
## Team health

We're making solid progress across all workstreams.

!progress[Feature delivery](88)
!progress[Code review SLA](72)
!progress[Test coverage](91)
```

---

### `code`

**Triggered by:** all body elements are code blocks or Mermaid diagrams.

Dark, code-focused background with a full-width monospace display. Optimised for code reviews and technical walkthroughs.

````markdown
## Parsing a slide

```rust
fn parse_slide(src: &str) -> Slide {
    let tokens = tokenise(src);
    layout::detect(&tokens)
}
```
````

---

### `media`

**Triggered by:** a `!youtube` or `!poll` element.

Centred media display with the title above. Ideal for embedding polls or videos mid-presentation.

```markdown
## Quick poll

!poll[Which layout do you use most?](https://pollev.com/my-poll)
```

---

### `grid`

**Triggered by:** 4 or more logical elements.

Elements are arranged in a responsive grid of cards. Good for feature comparisons or category overviews.

```markdown
## Supported platforms

- **macOS** — Universal binary, Apple Silicon and Intel
- **Windows** — MSI and setup.exe installers
- **Debian/Ubuntu** — `.deb` package
- **Fedora/RHEL** — `.rpm` package
- **AppImage** — distro-independent
```

---

## Manual override

Place `<!-- layout:NAME -->` at the very top of a slide to force any layout regardless of content:

```markdown
<!-- layout:grid -->

## Pricing tiers

- **Free** — unlimited presentations, all themes
- **Pro** — priority support (coming soon)
- **Team** — shared theme library (coming soon)
- **Enterprise** — custom deployment (coming soon)
```

Available names: `title` · `section` · `title-content` · `title-image` · `split` · `full-bleed` · `quote` · `two-column` · `bsp` · `grid` · `media` · `code`
