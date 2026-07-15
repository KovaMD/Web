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
| **Title font** | Font used for H1 and H2 headings |
| **Body font** | Font used for all other text |
| **Code font** | Monospace font for code blocks |
| **Logo** | Image displayed in the header or footer |
| **Header text** | Custom text shown at the top of every slide — supports template variables and `\|` segmented layout |
| **Footer text** | Custom text shown at the bottom — supports `{slide_number}`, `{total}`, `{title}`, `{date}` and `\|` segmented layout |
| **Table of contents → Numbered list** | Toggles a [`!toc`](markdown-and-syntax.md#table-of-contents-toc) slide between a numbered list and a plain hyperlinked list. On by default |

Kova saves overrides to the file automatically. Logo, Header, Footer, and Table of Contents controls live together under the Inspector's **Document** section.

### Per-slide-scoped heading and bold colour

Headings and bold/`<strong>` text can take a colour distinct from body text — set separately from the **Text colour** override above via `theme_overrides` in a deck's frontmatter, or the `heading`/`bold` keys in a [custom theme](#custom-themes) file:

```yaml
theme_overrides:
  colors:
    heading: "#0057B8"
    bold:    "#B8003F"
```

!!! warning "Prototype stage"
    This override has no Inspector colour swatch yet — it's YAML-only. Enable **Settings → Editor → Show frontmatter** to edit it directly in a document, or set `heading`/`bold` in a custom theme's `colors` block (see [Color reference](#color-reference)) to apply it to every document using that theme.

Both colours fall back to the theme's plain `text` colour when unset, and both are still overridden by a slide's own [per-slide text colour or invert](markdown-and-syntax.md#per-slide-text-colour) directive, so a slide's text stays legible together rather than mixing an old heading colour with a new per-slide one.

!!! note "Font availability"
    If a font you've chosen in the Inspector isn't installed on the current machine, a **⚠** warning appears next to the font name in the Inspector. Slides will fall back to the theme's default font until the missing font is installed.

---

## Custom themes

Create a `.yaml` file in your custom themes folder to define a fully custom theme — see [Settings & Keybindings — Themes](settings-and-keybindings.md#themes) for the exact path on each platform. Kova loads all valid `.yaml` files from that directory on startup. Any parse errors are reported in **Settings → Themes**.

### File format

```yaml
# my-brand.yaml, saved to your custom themes folder

name: My Brand          # Display name shown in the Inspector
id: my-brand            # The ID Kova uses internally to reference this theme

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

fonts:
  title: "Georgia, serif"       # H1 and H2
  body:  "Inter, sans-serif"    # All other text
  code:  "JetBrains Mono, monospace"

layout:
  title_align:   center   # "center" | "left" | "bottom-left" — text alignment on title slide
  heading_align: left     # "left" | "center" — heading alignment on content slides
  decoration:    none     # "none" | "dots" | "grid" | "diagonal" | "bar-left"

logo: /absolute/path/to/logo.png   # Must be an absolute path
logo_position: bottom-left         # "top-left" | "top-right" | "bottom-left" | "bottom-right"

footer:
  show:              false
  text:              "{title} | {date} | {slide_number}/{total}"
  show_slide_number: true

header:
  show: false
  text: ""

toc:
  numbered: true   # false renders a plain hyperlinked list instead of a numbered one
```

!!! note "Logo paths"
    The `logo` field requires an **absolute path**. Relative paths are not reliably resolved. On Windows, use forward slashes or a single backslash — do not quote the path or double-escape backslashes.

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
| `heading` | Content-slide heading colour; falls back to `text` when unset. See [Per-slide-scoped heading and bold colour](#per-slide-scoped-heading-and-bold-colour) |
| `bold` | Inline `**bold**`/`<strong>` colour; falls back to `text` when unset |

### Template variables

Use these in `header.text` and `footer.text`:

| Variable | Value |
|----------|-------|
| `{title}` | Document title |
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

### Inheriting from built-in themes

Omitted fields inherit from the **Light** theme defaults. You only need to specify what you want to change:

```yaml
name: Dark Blue
id: dark-blue

colors:
  background: "#0D1117"
  text:       "#E6EDF3"
  primary:    "#58A6FF"
```

### Applying changes

Edit the YAML file and **restart Kova**. Changes take effect on startup. Any YAML syntax errors are shown in **Settings → Themes** with the file path and line number.
