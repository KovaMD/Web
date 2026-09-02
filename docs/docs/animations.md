# Build Animations

Mark any bullet, image, code block, table, formula, diagram, blockquote, or a handful of other elements with `<!-- step -->` and it appears on its own click during a presentation, instead of the whole slide landing at once — build/reveal animations, the same idea as PowerPoint's "Animations" or reveal.js fragments.

A slide with no `<!-- step -->` markers behaves exactly as before — this is entirely opt-in.

!!! tip "Full worked example"
    [`examples/animations-demo.md`](https://github.com/KovaMD/Kova/blob/main/examples/animations-demo.md) in the app repo is a complete tour of every marker form across every supported content type — open it in Kova and step through it in Presentation mode.

---

## Basic syntax

```markdown
- Always visible from the start
- Appears on the first click <!-- step -->
- Appears on the second click <!-- step -->
- Appears on the third click <!-- step -->
```

`<!-- step -->` auto-increments in document order — no numbers to manage. Steps are scoped per slide; the count resets to 1 after every slide separator (`---`).

### Grouping elements onto one click

Add an explicit number to group several elements onto the same click:

```markdown
- Revealed alone, first click <!-- step -->
- These two <!-- step: 2 -->
- arrive together <!-- step: 2 -->
- Back to auto-increment <!-- step -->
```

A later bare `<!-- step -->` continues counting from the highest explicit number used so far, rather than colliding with it.

### Placement

The marker either trails inline after a paragraph or list item, or — for a block element with no text to trail onto — sits alone on the line directly underneath it:

```markdown
![A chart](chart.png)
<!-- step -->
```

This is the same "must directly follow" convention `!caption` already uses. A `<!-- step -->` with no eligible element directly above it, or a second one stacked on an element that already has one, reports a clear `#ERR` rather than silently vanishing.

---

## What can be stepped

| Element | Notes |
|---|---|
| List items | Nested/sub-bullets share the same per-slide click sequence as their parents |
| A whole list | A marker placed after the *list* (not each item) gates every item as one unit — any per-item markers inside that list are cleared automatically |
| Images | |
| Code blocks | |
| Tables | The whole table appears together — tables build as one unit, not row by row |
| Display math (`$$...$$`) | |
| Mermaid diagrams | |
| Blockquotes and callouts | |
| `!youtube`, `!video`, `!poll` embeds | |
| `!progress` bars | |
| `!toc` | |

Paragraphs and list items take the marker trailing inline; every other type in the list above takes it on its own line directly underneath, per [Placement](#placement).

---

## Presenting

A "next" action (click, `→`, `Space`, scroll down, …) advances through the current slide's remaining steps one at a time before it moves to the next slide. Going backward across a slide boundary lands on the previous slide fully revealed (its last step), not back at its start — the least surprising place to arrive from when stepping backward. See [Keyboard Shortcuts — Presentation mode](keyboard-shortcuts.md#presentation-mode) for the full key list.

This works identically in **single-screen mode**, the **dual-screen presenter view** (both the audience window and the presenter's own next-slide preview stay in sync), and the **standalone HTML export** — see [Presenting](presenting.md) and [Exporting — Standalone HTML export](exporting.md#standalone-html-export).

!!! note "Editor preview always shows everything"
    The live preview in the editor is for editing, not rehearsing — it always shows a slide fully revealed regardless of step markers. Use Presentation mode to see builds actually happen.

---

## Editor support

Right-click a line and choose **Reveal on click** (or press `Ctrl+Shift+R`, `Cmd+Shift+R` on macOS) to toggle a step marker on it without typing the comment by hand. Selecting multiple lines toggles all of them together: if any already has a marker they're all removed, otherwise every line gets one, sharing a single step so they build together on one click.

Each marker shows a small **`· N`** badge next to it in the editor, computed the same way the presentation numbers its clicks — so what you see while editing can never drift from what the presentation actually does.

---

## Export behaviour

**PowerPoint export** — steps become real, native click-triggered animations in the `.pptx` file (not a flattened, always-visible placeholder), built from hand-authored OOXML timing data.

!!! warning "Hand-authored timing data — report decks that misbehave"
    The `.pptx` animation timing is written by hand from the OOXML spec rather than produced by a PowerPoint library. It has been tested in both **LibreOffice Impress** and **Microsoft PowerPoint**, with several bugs fixed in v0.7.9, but edge cases are still possible on complex slides. If a build animation doesn't play correctly, please [open an issue](https://github.com/KovaMD/Kova/issues) and attach the deck.

A `<!-- step -->` on the [`quote`](layouts.md#quote) layout's hero quote, or on the video/poll embed in a full-slide [`media`](layouts.md#media) layout, is a known, bounded gap: it still gates the live preview, presentation, and HTML export normally, but exports to PowerPoint unanimated — visible immediately, the same as before this feature existed.

**PDF export and Print** — both capture each slide in its final, fully-revealed state as a single page; steps don't produce extra pages. See [Exporting](exporting.md).

---

## Errors

| Situation | Result |
|---|---|
| `<!-- step -->` with no eligible element directly above it | `#ERR <!-- step --> must directly follow a list, image, diagram, formula, table, blockquote, code block, YouTube embed, video, poll, progress bar, or table of contents` |
| A second marker stacked on an element that already has one | `#ERR duplicate <!-- step --> marker` |

As with other Kova directives, an error is scoped to that one spot — the rest of the slide still renders normally.
