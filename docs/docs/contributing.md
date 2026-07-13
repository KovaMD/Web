# Contributing

Kova is open source under the [GNU General Public License v3](https://github.com/KovaMD/Kova/blob/main/LICENSE) and welcomes contributions. This page covers how to build Kova from source, how its Markdown syntax is organised, and how to submit changes.

---

## Questions

For quick questions — "is this a bug or intended?", "would a PR for X be welcome?", general chat with the dev team — join [#kova-md:matrix.org](https://matrix.to/#/#kova-md:matrix.org) rather than opening an issue. Issues are still the right place for bug reports and feature proposals that need to be tracked.

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| **Node.js** | 18 or later | [nodejs.org](https://nodejs.org) |
| **Rust** | stable | `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs \| sh` |
| **Tauri CLI** | v2 | [Tauri prerequisites](https://tauri.app/start/prerequisites/) for your platform |

### Linux only — WebKit dependencies

```bash
sudo apt-get install -y \
  libwebkit2gtk-4.1-dev \
  libappindicator3-dev \
  librsvg2-dev \
  patchelf
```

!!! tip "Nix users"
    `nix develop` drops you into a shell with Rust, Node, and Tauri all ready — no manual prerequisite install needed. Linux only (`x86_64-linux` / `aarch64-linux`); webkitgtk doesn't build on Darwin.

---

## Getting started

```bash
git clone https://github.com/KovaMD/Kova.git
cd Kova
npm install
npm run tauri dev
```

The development server provides **hot module replacement** for the React/TypeScript frontend and **automatic recompilation** for Rust changes.

Before opening a PR, make sure both of these pass:

```bash
npm run test    # vitest
npm run build   # tsc + vite build
```

---

## Project structure

```
Kova/
├── src/                    # React + TypeScript frontend
│   ├── components/         # UI components
│   ├── engine/             # Parser, layout detection, themes, export, sheet formulas
│   │   └── __tests__/      # Engine unit tests
│   ├── store/              # App and settings state
│   ├── hooks/              # Shared React hooks
│   ├── i18n/               # Translations
│   └── styles/             # CSS and design tokens
├── src-tauri/              # Rust backend (Tauri 2)
│   ├── src/
│   └── Cargo.toml
└── .github/workflows/      # CI and release automation
```

---

## Running tests

```bash
npm test           # run all tests once
npm run test:watch # run in watch mode (re-runs on file change)
```

Tests live in `src/engine/__tests__/` and cover the parser, layout detection, theme loading, keybindings, and the `!sheet` formula engine.

---

## Building a release

```bash
npm run tauri build
```

### macOS universal binary

```bash
rustup target add aarch64-apple-darwin x86_64-apple-darwin
npm run tauri build -- --target universal-apple-darwin
```

---

## Markdown syntax conventions

This is the part that matters most if you're adding a new feature — it's easy to accumulate one-off, ad-hoc syntax over time. Kova uses **five distinct forms**, each with a specific job. If you're adding a new directive, find which category it belongs to below rather than inventing a sixth.

All of this is parsed in `src/engine/parser/`, mainly [`markdownToSlides.ts`](https://github.com/KovaMD/Kova/blob/main/src/engine/parser/markdownToSlides.ts).

### 1. Frontmatter (document-level metadata)

A YAML block at the very top of the file, applying once to the whole deck: `title`, `author`, `theme`, `theme_overrides`, `aspect_ratio`, `date`, `logo`, `footer`. Use this for anything that describes the **document**, not an individual slide.

### 2. Slide separator and structural markers (bare tokens)

A small, intentionally **closed** set of bare tokens, each alone on its own line:

| Token | Meaning |
|-------|---------|
| `---` | Slide separator |
| `???` | Everything after this becomes speaker notes |
| `\|\|\|` | Column break within a slide |

Bare tokens have no room for parameters, are easy to collide with legitimate Markdown a user is typing (a table row using `\|\|\|`, a line of dashes), and are hard to discover. **Don't add new ones** — use an HTML comment or a bang-directive instead.

### 3. Slide-level flags/overrides (HTML comments)

`<!-- hidden -->` and `<!-- layout: NAME -->`, each alone on its own line within a slide. These:

- carry no visible content of their own (stripped before rendering),
- toggle something about how the **slide itself** is treated,
- degrade gracefully — a plain Markdown viewer just sees a comment.

The pattern is `<!-- key -->` for a flag, `<!-- key: value -->` for a flag with a value. **Prefer this form** for new slide-level steering information (e.g. a future per-slide transition, a slide ID for intra-deck links) rather than inventing new bare tokens or frontmatter-like blocks mid-document.

### 4. Content directives (bang syntax)

`!name[label](target)`, each alone on its own line, for things that **render visible content** in place: `!youtube[label](url)`, `!video[label](path.mp4)`, `!poll[label](url)`, `!progress[label](value)`, `!ref[Author, Year. Title]`, `!sheet`/`!let`, and the parameter-less `!toc`. Use this form when the directive produces an actual slide element, as opposed to category 3, which only changes slide *behaviour*.

`!caption[text]` is a variant that never becomes its own slide element: it attaches to whichever image, Mermaid diagram, or math block it directly follows, merged in by the parser, and renders centred underneath that element. A `!caption` with no such element immediately above it is a compile error, same as a misplaced `!sheet`.

### 5. Template variables

`{title}`, `{date}`, `{slide_number}`, `{total}` — text substitution inside header/footer strings only (`theme_overrides.header.text`, `.footer.text`, or a theme's YAML). Not valid inside slide body content.

### Adding a new directive — checklist

1. Decide which of the five categories above it belongs to (there's no sixth).
2. Add parsing to `preprocess()` or the relevant extractor in `src/engine/parser/`.
3. Strip the raw marker from rendered content — don't let it leak into the slide body.
4. Add cases to [`src/engine/__tests__/parser.test.ts`](https://github.com/KovaMD/Kova/blob/main/src/engine/__tests__/parser.test.ts).
5. Document the syntax in the README's Features list, and on this wiki's [Markdown & Syntax](markdown-and-syntax.md) page if it's a significant one. Consider adding an editor snippet (see [`EditorPanel.tsx`](https://github.com/KovaMD/Kova/blob/main/src/components/layout/EditorPanel.tsx)).

---

## Code standards

- **TypeScript strict mode** is enabled — no `any`, no implicit conversions.
- **UI components** belong in `src/components/`; **pure logic** belongs in `src/engine/`.
- Write tests for all engine functions.
- Maintain consistent indentation and naming with the surrounding code.

---

## Submitting changes

1. Fork the repository on GitHub.
2. Create a focused feature branch:

    ```bash
    git checkout -b my-feature
    ```

3. Make your changes and add tests for any new engine logic.
4. Commit using `type(scope): summary` (e.g. `fix(toc): …`, `feat(sheet): …`) — see `git log` for examples. Keep the summary focused on *why*, not *what*.
5. Open a pull request against `main`.

!!! tip "Keep PRs focused"
    One feature or fix per pull request. Stacked PRs for related changes are welcome.

---

## Reporting bugs / proposing features

Open an issue at [github.com/KovaMD/Kova/issues](https://github.com/KovaMD/Kova/issues) describing the use case, not just the syntax or fix you have in mind. Include:

- Operating system and version
- Kova version (visible in **Settings → Updates**)
- Steps to reproduce
- What you expected vs. what actually happened

Attach your `.md` file if the issue is layout- or render-related. For a new syntax proposal, say which of the [five Markdown syntax categories](#markdown-syntax-conventions) above you think it fits — that shapes the design more than the exact spelling does.

---

## Adding a language

Kova's UI is translated via a per-locale strings file — see [Translating](translating.md) for the full guide to adding or updating a language.
