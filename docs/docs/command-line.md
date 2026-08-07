# Command Line

After a standard install, `kova` works as a command-line tool on macOS, Windows, and Linux — present a deck, validate it in CI, or convert files in a script, all without opening a window.

---

## Getting `kova` on your PATH

| Platform | Setup |
|---|---|
| **Windows** | You choose. The setup `.exe` asks **Add `kova` to PATH?** (yes/no). The `.msi` offers a **PATH** choice of **User**, **System**, or **None**. Pick yes, User, or System to get `kova` on PATH; open a new terminal after installing. |
| **Linux** | Already on PATH — the `.deb`, `.rpm`, AUR, Nix, and Flatpak packages all install the binary into a directory your shell already searches. |
| **macOS** | Not automatic. Go to the **Kova** menu → **Install 'kova' Command in PATH**. This symlinks the binary into `/opt/homebrew/bin` or `/usr/local/bin` (whichever exists), without overwriting a `kova` command that isn't Kova's. Open a new terminal afterwards. |

If the automatic macOS install fails (for example, neither directory is writable), Kova shows the exact command to run manually instead.

Check it worked:

```bash
kova --version
```

---

## Usage

```text
kova [FILE...]                            open file(s) in the editor
kova --present <FILE.md>                  present FILE directly
kova --check <FILE.md>                    validate FILE and exit
kova --import <marp|pptx|url> <IN> <OUT>  convert IN to Kova Markdown
kova --export <pptx|pdf> <IN> <OUT>       export IN via Kova's engine
```

`--present` and `--check` require a `.md`/`.markdown` file, matching the requirement `--import`/`--export` already have — Kova rejects anything else rather than silently trying to read it as Markdown.

Only one **action** is allowed per invocation. Modifiers combine with an action in any order:

| Modifier | Effect |
|---|---|
| `--theme <NAME\|PATH>` | Override the deck's theme for this run. A bare name (e.g. `firefly`) resolves against built-in and installed community themes; anything that looks like a path (contains `/` or `\`, starts with `~`, or ends in `.yaml`/`.yml`) is read as a theme file instead. Valid with `--present` and `--export`. |
| `--check` | Validate the deck before running the action. See [Validating with `--check`](#validating-with-check) below. |
| `--force` | With `--import`, overwrite an existing output file instead of refusing. Valid with `--import` only. |
| `--notes` | Include a speaker-notes handout (1-up only). Valid with `--export pdf` only. |
| `--per-page <1\|2\|4\|6>` | Slides per PDF page (default `1`). Valid with `--export pdf` only. |
| `--paper <a4\|letter\|slide>` | PDF page size, overriding the persisted Settings value for this run. Valid with `--export pdf` only. |

`-h`/`--help` and `--version` win regardless of where they appear or what else is on the command line, and always exit `0`.

Both `--flag value` and `--flag=value` forms work for `--present`, `--theme`, `--per-page`, `--paper`, and `--import`/`--export`'s format argument.

!!! tip "Flag typo detection"
    A single-dash typo of a known long flag (e.g. `-check` instead of `--check`) errors with a suggestion — `unknown option '-check' — did you mean '--check'?` — instead of silently falling through to the editor-launch path with the flag's value misread as a file to open. Unrecognised single-dash flags (e.g. platform-injected launcher args) are still silently ignored, since that isn't a typo of anything Kova knows.

---

## Presenting from the terminal

```bash
kova --present talk.md
kova --theme=gruvbox-dark --present talk.md
```

Launches straight into presentation mode — the editor window is never shown. Monitor detection and single-screen/dual-screen/mirror behaviour work exactly as they do when you click **▶ Present** in the app (see [Presenting](presenting.md)); a `--theme` override replaces the deck's frontmatter theme but `theme_overrides` still apply on top. Exiting the presentation (however you'd normally exit) quits the process, since there's no editor session underneath it to return to.

---

## Validating with `--check`

```bash
kova --check talk.md
echo $?   # 0 = clean, 1 = errors found
```

Runs a headless validation pass and prints one line per issue to stdout, sorted by line number, followed by a summary:

```text
talk.md:1: error: frontmatter YAML: bad indentation of a mapping entry
talk.md:12: warning: unknown theme 'gruvbx-dark' (Kova will fall back to the default theme)
talk.md:34: error: unknown directive '!videoo'
1 error(s), 1 warning(s)
```

`--check` is deliberately narrow — it only flags things that visibly break a presentation or silently change it, not general style. It reports:

| Category | Severity |
|---|---|
| Invalid frontmatter YAML | error |
| Unknown frontmatter key | warning |
| Unknown `theme:` value | warning |
| Unknown `<!-- layout: ... -->` name | error |
| Invalid `<!-- color: ... -->` / `<!-- _color: ... -->` value | warning |
| Unknown `!directive` | error |
| Missing local media file (image/video) | error |
| Unreachable remote media URL (`http://`/`https://` image or video) | warning |
| Document contains no visible slides | error |
| Document fails to parse | error |

Fenced code blocks are skipped when scanning for layout comments and directives, so a `!youtube` mentioned inside a code sample isn't flagged. Hidden slides are skipped for the missing-media check, and a media file or remote URL referenced from several slides is only reported once. The remote-URL check sends a single request per unique URL (no full download) and reports the failure reason (bad host, 404, etc.) alongside the URL.

**As a standalone action** (`kova --check FILE`), the process always exits after reporting — `0` if there are no errors (warnings alone still exit `0`), `1` if there are.

**As a modifier** (`kova --check --present talk.md`), it gates the action: errors abort with exit `1` before the window ever appears, warnings are printed and the action proceeds normally.

!!! tip "CI usage"
    `--check`'s `FILE:LINE: severity: message` format and exit code make it a natural pre-commit or CI step:

    ```bash
    kova --check slides/*.md
    ```

    (Pass one file at a time — `--check` validates a single file per invocation.)

---

## Converting decks: `--import` and `--export`

Both run the exact same conversion and export code the in-app **Import** and **Export** menus use — fully headless, no window shown.

```bash
kova --import marp deck.md talk.md
kova --import pptx deck.pptx talk.md
kova --import url https://example.com/deck.md talk.md

kova --export pptx talk.md talk.pptx
kova --export pdf talk.md talk.pdf
```

| | Import formats | Export formats |
|---|---|---|
| Values | `marp`, `pptx`, `url` | `pptx`, `pdf` |
| Input | `.md`/`.markdown` (marp), `.pptx` (pptx), any URL (url) | `.md`/`.markdown` |
| Output | Always `.md` | `.pptx` or `.pdf` matching the format |

See [Importing](importing.md) and [Exporting](exporting.md) for what each conversion actually does with your content — the CLI path produces identical output to the GUI, including the same dropped-element reporting for Marp imports and the same warnings for export.

`--theme` composes with `--export` the same way it does with `--present`. `--check` composes too: a broken input file aborts before any output file is written.

!!! note "Import refuses to overwrite by default"
    `kova --import` exits `2` if the output path already exists, to catch a shell glob that happened to land on an existing file. Pass `--force` to overwrite it deliberately:

    ```bash
    kova --import marp deck.md talk.md --force
    ```

### PDF handout options

`--export pdf` accepts the same speaker-notes handout and page-layout options as the GUI's **Export PDF** dialog (see [Exporting — Export options](exporting.md#export-options)):

```bash
kova --export pdf talk.md talk.pdf --notes
kova --export pdf talk.md talk.pdf --per-page 4
kova --export pdf talk.md talk.pdf --paper letter
```

`--notes`, `--per-page`, and `--paper` are rejected outside `--export pdf` (e.g. combined with `--export pptx`). `--paper slide` corresponds to the GUI's **Match slide size** option; omitting `--paper` falls back to the persisted **Settings → Workspace → PDF page size** value, same as the GUI.

!!! warning "Extension guards"
    Input and output are two separate positional arguments with no other way to tell them apart, so Kova rejects a call where either file doesn't have the expected extension for its format — this is what catches a shell glob that happened to expand to exactly two files (e.g. `kova --export pptx *.md out.pptx` matching two decks) before it silently overwrites the second one. The one gap this can't close: `--import marp`'s input and output are both legitimately `.md`, so a two-file glob that lands on that specific combination still parses as a deliberate call.

---

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Success, or `--help`/`--version` |
| `1` | Runtime error — file not found, unknown/invalid theme, or `--check` found errors |
| `2` | Usage error — bad flags, missing arguments, unknown option, more than one action |

Usage errors (`2`) print to stderr with a `Try 'kova --help' for usage.` hint; runtime errors (`1`) print a plain `kova: ...` message to stderr. `--check` output itself goes to **stdout**, since it's data rather than an error about the invocation.

Opening the editor normally (`kova` or `kova file1.md file2.md`) never fails this way — a file that doesn't exist is silently dropped rather than aborting the launch, matching how double-clicking a missing file behaves.
