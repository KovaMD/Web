# Themes

Kova ships with 11 built-in themes and supports fully custom themes via YAML files.

---

## Selecting a theme

Open the **Inspector** panel (click **ⓘ** in the titlebar) and choose a theme from the swatches in the **Theme** section. The change is instant and Kova saves it to the file automatically.

---

## Built-in themes

| ID | Style |
|----|-------|
| `light` | Clean white background, dark text — the default |
| `dark` | Deep charcoal background, light text |
| `institutional` | Formal navy and white with a structured header bar |
| `minimal` | No decorative elements; maximum focus on content |
| `editorial` | Serif typography, warm off-white — editorial / essay feel |
| `slate` | Dark blue-grey with accent highlights |
| `pitch` | High-contrast black with bold typographic hierarchy |
| `cosmos` | Deep space-inspired dark palette with indigo accents |
| `forge` | Industrial dark with amber highlights |
| `grove` | Earthy greens and warm neutrals |
| `horizon` | Gradient sunrise palette, soft and optimistic |

!!! tip "Theme library"
    The **More Themes…** button in the Inspector links to [themes.kova.md](https://themes.kova.md), where community-created themes are available to download. Downloads are verified against SHA-256 checksums.

---

## Inspector overrides

Without writing a custom theme file, you can override specific aspects of any built-in theme from the Inspector:

| Override | What it changes |
|----------|----------------|
| **Primary colour** | Accent colour used for headings, progress bars, and decorative elements |
| **Background colour** | Slide background |
| **Text colour** | Body text |
| **Heading colour** | Content-slide heading colour; falls back to Text colour until set |
| **Bold text colour** | Inline **bold**/`<strong>` colour; falls back to Text colour until set |
| **Title font** | Font used for H1 and H2 headings |
| **Body font** | Font used for all other text |
| **Code font** | Monospace font for code blocks |
| **Logo** | Image displayed in the header or footer |
| **Header text** | Custom text shown at the top of every slide — supports template variables and `\|` segmented layout |
| **Header → Hide on title slide** | Suppresses the header on the title slide only, keeping it everywhere else |
| **Footer text** | Custom text shown at the bottom — supports `{slide_number}`, `{total}`, `{title}`, `{author}`, `{date}` and `\|` segmented layout |
| **Footer → Hide on title slide** | Suppresses the footer on the title slide only, keeping it everywhere else |
| **Table of contents → Numbered list** | Toggles a [`!toc`](markdown-and-syntax.md#table-of-contents-toc) slide between a numbered list and a plain hyperlinked list. On by default |

Kova saves overrides to the file automatically. Logo, Header, Footer, and Table of Contents controls live together under the Inspector's **Document** section.

A small dot appears next to a control's label whenever its current value differs from the active theme's own default — i.e. it's been overridden via `theme_overrides` — as a quick visual sense of how much customising a document carries, which might be a sign it's worth promoting to a proper [custom theme](#custom-themes) instead.

### Heading and bold colour

Headings and bold/`<strong>` text can take a colour distinct from body text — set it via the **Heading colour** / **Bold text colour** swatches above, or directly in YAML via `theme_overrides` in a deck's frontmatter, or the `heading`/`bold` keys in a [custom theme](#custom-themes) file:

```yaml
theme_overrides:
  colors:
    heading: "#0057B8"
    bold:    "#B8003F"
```

Set `heading`/`bold` in a custom theme's `colors` block (see [Color reference](#color-reference)) to apply the colours to every document using that theme, rather than one document at a time via the Inspector.

Both colours fall back to the theme's plain `text` colour when unset, and both are still overridden by a slide's own [per-slide text colour or invert](markdown-and-syntax.md#per-slide-text-colour) directive, so a slide's text stays legible together rather than mixing an old heading colour with a new per-slide one.

!!! note "Font availability"
    If a font you've chosen in the Inspector isn't installed on the current machine, a **⚠** warning appears next to the font name in the Inspector. Slides will fall back to the theme's default font until the missing font is installed.

---

## Custom themes

Create a `.yaml` file in your custom themes folder to define a fully custom theme — see [Settings & Keybindings — Themes](settings-and-keybindings.md#themes) for the exact path on each platform. Kova loads all valid `.yaml` files from that directory on startup, and watches the folder while running — adding, editing, or removing a `.yaml`/`.yml` file there (from any editor) reloads it automatically within moments, no restart needed. Any parse errors are reported in **Settings → Themes**.

### File format

```yaml
# my-brand.yaml, saved to your custom themes folder

name: My Brand          # Display name shown in the Inspector
id: my-brand            # The ID Kova uses internally to reference this theme
extends: light          # Optional — base theme for any field this file doesn't set. A built-in ID, or another installed custom theme's `id`. Defaults to `light`. See "Inheriting from other themes" below.

colors:
  primary:    "#0057B8"   # Background of title and section slides
  accent:     "#003F8A"   # Links, progress bars, and highlights
  background: "#FFFFFF"   # All other slide backgrounds
  text:       "#1A1A1A"   # Body text
  title_text: "#FFFFFF"   # Heading text on title and section slides
  section_bg: "#E8F0FE"   # Overrides primary for section slides only
  code_bg:    "#F3F4F6"   # Code block background
  heading:    "#0057B8"   # Content-slide heading colour (optional, falls back to `text`)
  bold:       "#B8003F"   # Inline **bold**/<strong> colour (optional, falls back to `text`)
  chart_colors:            # Optional palette override for pie/xychart/timeline diagrams
    - "#0057B8"
    - "#00A676"
    - "#F2A900"
  diagram_colors:          # Optional overrides for Mermaid flowchart/sequence colours — see "Diagram & chart colours" below
    primary: "#0057B8"
    border:  "#003F8A"
    line:    "#5C6773"
    cluster: "#E8F0FE"
    text:    "#1A1A1A"

fonts:
  title: "Georgia, serif"       # H1 and H2
  body:  "Inter, sans-serif"    # All other text
  code:  "JetBrains Mono, monospace"

layout:
  title_align:   center   # "center" | "left" | "bottom-left" — text alignment on title slide
  heading_align: left     # "left" | "center" — heading alignment on content slides
  decoration:    none     # "none" | "dots" | "grid" | "diagonal" | "bar-left"

logo: logo.png                      # Absolute path, https:// URL, data:image/... URI, or — as here — a path relative to this theme file's own directory
logo_position: bottom-left          # "top-left" | "top-right" | "bottom-left" | "bottom-right"

footer:
  show:              false
  text:              "{title} | {date} | {slide_number}/{total}"
  show_slide_number: true
  hide_on_title:     false   # true suppresses the footer on the title slide only, keeping it everywhere else

header:
  show: false
  text: ""
  hide_on_title: false   # true suppresses the header on the title slide only, keeping it everywhere else

toc:
  numbered: true   # false renders a plain hyperlinked list instead of a numbered one
```

!!! note "Logo paths"
    `logo` accepts an absolute path, an `https://` URL, or a `data:image/...` URI — or, as of the theme file's own directory being known, a path **relative to the theme file itself** (e.g. `logo.png` sitting next to `theme.yaml`), so a self-contained theme folder keeps working if it's moved or renamed. A relative path only resolves for a theme loaded from a file; it's dropped for a theme with no file backing it. On Windows, use forward slashes or a single backslash — do not quote the path or double-escape backslashes.

### Color reference

| Key | What it controls |
|-----|-----------------|
| `primary` | Background of title and section slides |
| `accent` | Links, progress bars, and highlight elements |
| `background` | Background of all other slides |
| `text` | Body text |
| `title_text` | Heading text on title and section slides — set this if `primary` is dark, otherwise text may be unreadable |
| `section_bg` | Background of section slides only; overrides `primary` for those slides |
| `code_bg` | Code block background |
| `heading` | Content-slide heading colour; falls back to `text` when unset. See [Heading and bold colour](#heading-and-bold-colour) |
| `bold` | Inline `**bold**`/`<strong>` colour; falls back to `text` when unset |

### Diagram & chart colours

Mermaid diagrams otherwise derive their colours from `primary`/`accent`/`code_bg`/`text` above. Two optional keys under `colors` override that for specific diagram types instead:

| Key | Type | Controls |
|-----|------|----------|
| `chart_colors` | list of hex colours | Palette used for pie, xychart, and timeline diagrams |
| `diagram_colors` | map, see below | Flowchart and sequence-diagram colours |

`diagram_colors` fields, all optional and independent:

| Field | Controls |
|-------|----------|
| `primary` | Node/actor fill |
| `border` | Node/actor border; falls back to `primary` when unset |
| `line` | Connector lines |
| `cluster` | Subgraph/cluster background |
| `text` | Label text — doesn't affect pie-slice text, which stays tied to `title_text` for contrast on coloured slices |

Both apply to the live preview and to PDF/PowerPoint export alike. There's no Inspector UI for either — set them via `theme_overrides` in a deck's frontmatter or a custom theme's `colors` block, the same as [heading/bold colour](#heading-and-bold-colour) above.

### Template variables

Use these in `header.text` and `footer.text`:

| Variable | Value |
|----------|-------|
| `{title}` | Document title |
| `{author}` | Document author (frontmatter `author:`) |
| `{date}` | Document date |
| `{slide_number}` | Current slide number |
| `{total}` | Total slide count |

### Segmented header/footer layout

Use `|` as a stretch separator to divide a header or footer into **left**, **centre**, and **right** sections:

```yaml
header:
  show: true
  text: "My Deck | {title} | {date}"

footer:
  show: true
  text: "{title} | | {slide_number}/{total}"
```

| Example | Result |
|---------|--------|
| `Left header` | Left-aligned (unchanged) |
| `{date} \| caption \| {total}` | Three parts: left · centre · right |
| `\| caption` | Centre-aligned |
| `\|\| {slide_number}/{total}` | Right-aligned |

Text without a `|` renders left-aligned as before, so existing decks are unaffected. Segmented layout works in both the Inspector text fields and custom theme YAML. It is also faithfully reproduced in PowerPoint export.

### Inheriting from other themes

Omitted fields inherit from a base theme's defaults — the **Light** theme, unless you set `extends:`. You only need to specify what you want to change:

```yaml
name: Dark Blue
id: dark-blue

colors:
  background: "#0D1117"
  text:       "#E6EDF3"
  primary:    "#58A6FF"
```

Set `extends: <id>` to inherit from a different theme instead of Light — any built-in ID (`dark`, `slate`, `pitch`, …) or another installed custom theme's own `id`:

```yaml
name: Dark Blue Compact
id: dark-blue-compact
extends: dark-blue   # start from dark-blue above, only changing layout here

layout:
  heading_align: left
```

`extends` chains resolve transitively, so a custom theme can build on another custom theme that itself extends a third. If `extends` names a theme that doesn't exist, failed to parse, or forms a cycle (including extending itself), that entry falls back to the Light theme instead, with a warning shown in **Settings → Themes** — never the whole batch of custom themes failing together.

### Applying changes

Edit the YAML file — no restart needed. Kova watches the custom themes folder while it's running and reloads a `.yaml`/`.yml` file within moments of it being added, changed, or removed, whether the edit comes from another editor or Kova's own theme tooling; any open document using that theme updates live. YAML syntax errors are shown in **Settings → Themes** with the file path and error detail.
