# kova.md — web

Marketing site for [kova.md](https://kova.md) and documentation source for [wiki.kova.md](https://wiki.kova.md).

## Structure

```
index.html          Homepage
features.html        Feature tour
open-source.html     Open-source page
privacy.html         Privacy policy
blog/                Blog (static HTML posts)
css/                 Stylesheets (per-page + shared)
js/                  Scripts
assets/              Images, icons, fonts
docs/                MkDocs Material source for the wiki (wiki.kova.md)
```

## Development

The main site has no build step. Open `index.html` in a browser or serve with any static file server:

```bash
npx serve .
```

The wiki (`docs/`) is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/):

```bash
pip install mkdocs-material
cd docs && mkdocs serve
```

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which:

1. Builds the wiki with `mkdocs build`.
2. Rsyncs the repo root (excluding `.github/`, `README.md`, `LICENSE`, `docs/`) to kova.md.
3. Rsyncs the built wiki (`docs/site/`) to wiki.kova.md.

## License

[GPL-3.0](LICENSE)
