# Keyboard Shortcuts

---

## File operations

| Shortcut | Action |
|----------|--------|
| `Ctrl+N` | New presentation |
| `Ctrl+O` | Open file |
| `Ctrl+S` | Save (opens **Save As** if the file has never been saved) |
| `Ctrl+Shift+S` | Save As |
| `Ctrl+Shift+F` | Toggle focus mode |

---

## Editor

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` | Wrap selection in **bold** (`**…**`) |
| `Ctrl+I` | Wrap selection in *italic* (`*…*`) |
| `Ctrl+1` | Toggle H1 heading on the current line |
| `Ctrl+2` | Toggle H2 heading on the current line |
| `Ctrl+3` | Toggle H3 heading on the current line |
| `Ctrl+4` | Toggle H4 heading on the current line |
| `Ctrl+5` | Toggle H5 heading on the current line |
| `Ctrl+6` | Toggle H6 heading on the current line |
| `Ctrl+C` | Copy |
| `Ctrl+X` | Cut |
| `Ctrl+V` | Paste — also pastes clipboard images directly into the editor |
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `Ctrl+=` / `Ctrl+-` / `Ctrl+0` | Zoom editor font size in / out / reset — `Ctrl+scroll wheel` also works |

**Heading shortcuts:** pressing the same level again removes the heading marker — `Ctrl+2` on an existing `##` line strips it back to plain text.

**Bold / Italic with no selection:** if nothing is selected, `Ctrl+B` inserts `bold text` and `Ctrl+I` inserts `italic text`, with the placeholder pre-selected so you can type immediately.

---

## Editor slide navigation

Jump the editor cursor between slides without leaving the keyboard:

| Shortcut | Action |
|----------|--------|
| `Ctrl+Up` / `Ctrl+Down` (`Cmd` on macOS) or `PageUp` / `PageDown` | Previous / next slide |
| `Ctrl+Left` / `Ctrl+Right` (`Cmd` on macOS) or `Home` / `End` | First / last slide |

Each jump scrolls the target slide's first line to the top of the editor.

---

## Presentation mode

| Key | Action |
|-----|--------|
| `→` / `↓` / `Space` / `PageDown` | Next slide |
| `←` / `↑` / `PageUp` | Previous slide |
| `Home` / `End` | Jump to first / last slide |
| Digit key | Open the slide-jump input — `Enter` jumps, `Esc` cancels |
| Scroll wheel | Advance / go back a slide |
| `F5` | Start presenting from the first slide |
| `Shift+F5` | Start presenting from the current editor slide |
| `N` | Toggle speaker notes panel *(single-screen only)* |
| `B` / `W` | Blank the audience display to black / white |
| `L` | Toggle laser pointer |
| `Esc` | Exit presentation mode |

You can also navigate by clicking the **left third** or **right third** of the screen in single-screen mode, or click the slide counter in the HUD to open the slide-jump input with the mouse.

!!! note "Dual-screen mode"
    In dual-screen mode the presenter overlay handles all navigation, and speaker notes are always visible — no key press required. See [Presenting](presenting.md) for full details.

---

## Customising shortcuts

The five file-level shortcuts can be remapped via `~/.kova/keybindings.yaml`:

```yaml
new_file:   ctrl+n
open_file:  ctrl+o
save:       ctrl+s
save_as:    ctrl+shift+s
focus_mode: ctrl+shift+f
```

Editor shortcuts (`Ctrl+B`, `Ctrl+I`, heading toggles) and presentation navigation keys are **not currently remappable**.

See [Settings & Keybindings](settings-and-keybindings.md#keybindings) for the full format and supported modifier/key names.
