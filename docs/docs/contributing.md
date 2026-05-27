# Contributing

Kova is open source under the [GNU General Public License v3](https://github.com/KovaMD/Kova/blob/main/LICENSE) and welcomes contributions. This page covers how to build Kova from source, run tests, and submit changes.

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| **Node.js** | 18 or later | [nodejs.org](https://nodejs.org) |
| **Rust** | stable | `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` |
| **Tauri CLI** | v2 | `cargo install tauri-cli` |

### Linux only — WebKit dependencies

```bash
sudo apt-get install -y \
  libwebkit2gtk-4.1-dev \
  libappindicator3-dev \
  librsvg2-dev \
  patchelf
```

---

## Getting started

```bash
git clone https://github.com/KovaMD/Kova.git
cd Kova
npm install
npm run tauri dev
```

The development server provides **hot module replacement** for the React/TypeScript frontend and **automatic recompilation** for Rust changes.

---

## Project structure

```
Kova/
├── src/                    # React + TypeScript frontend
│   ├── components/         # UI components
│   ├── engine/             # Parser, layout detection, themes, keybindings
│   │   └── __tests__/      # Engine unit tests
│   ├── settings/           # Settings state and persistence
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

Tests live in `src/engine/__tests__/` and cover the parser, layout detection, theme loading, keybindings, and utility functions.

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
4. Open a pull request against `main`.

!!! tip "Keep PRs focused"
    One feature or fix per pull request. Stacked PRs for related changes are welcome.

---

## Reporting bugs

Open an issue at [github.com/KovaMD/Kova/issues](https://github.com/KovaMD/Kova/issues) and include:

- Operating system and version
- Kova version (visible in **Settings → Updates**)
- Steps to reproduce
- What you expected vs. what actually happened

Attach your `.md` file if the issue is layout- or render-related.
