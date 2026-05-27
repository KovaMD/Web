# Themes

Kova ships with 11 built-in themes and supports fully custom themes via YAML files.

---

## Selecting a theme

Open the **Inspector** panel (click **ⓘ** in the titlebar) and choose a theme from the swatches in the **Theme** section. The change is instant. Kova saves your selection to the document frontmatter automatically:

```yaml
---
title: My Presentation
theme: slate
---
```

You can also set or change the theme by editing `theme:` directly in the frontmatter.

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
| **Header text** | Custom text shown at the top of every slide |
| **Footer text** | Custom text shown at the bottom — supports `{slide_number}`, `{total}`, `{title}`, `{date}` |

Overrides are saved to `theme_overrides` in your frontmatter:

```yaml
---
title: Brand Deck
theme: light
theme_overrides:
  primary: "#0057B8"
  title_font: "Georgia"
  footer: "{title} — Slide {slide_number} of {total}"
---
```

---

## Custom themes

Create a `.yaml` file in `~/.kova/themes/` to define a fully custom theme. Kova loads all valid `.yaml` files from that directory on startup. Any parse errors are reported in **Settings → Themes**.

### File format

```yaml
# ~/.kova/themes/my-brand.yaml

name: My Brand          # Display name shown in the Inspector
id: my-brand            # Used in frontmatter: theme: my-brand

colors:
  primary:    "#0057B8"   # Accent colour (headings, progress bars, decorations)
  accent:     "#003F8A"   # Secondary accent
  background: "#FFFFFF"   # Slide background
  text:       "#1A1A1A"   # Body text
  muted:      "#6B7280"   # Subdued text (attributions, captions)
  code_bg:    "#F3F4F6"   # Code block background

fonts:
  title: "Georgia, serif"       # H1 and H2
  body:  "Inter, sans-serif"    # All other text
  code:  "JetBrains Mono, monospace"

layout:
  alignment: left         # "left" | "center" | "right" — text alignment on title slide
  decoration: subtle      # "none" | "subtle" | "bold" — decorative pattern intensity

logo:
  path: "./assets/logo.png"   # Path relative to the theme file
  position: header            # "header" | "footer" | "none"
  size: 48px

header: ""               # Text in the header bar on every slide ("" to hide)
footer: "{title}"        # Text in the footer — supports template variables
```

### Template variables

Use these in `header` and `footer` strings:

| Variable | Value |
|----------|-------|
| `{title}` | Document title from frontmatter |
| `{date}` | Document date from frontmatter |
| `{slide_number}` | Current slide number |
| `{total}` | Total slide count |

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
