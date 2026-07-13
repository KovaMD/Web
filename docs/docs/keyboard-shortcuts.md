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
| `F5` | Start presentation from the first slide |
| `Shift+F5` | Start presentation from the current editor slide |

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
| `Ctrl+F` | Open the **Find** dialog |
| `Ctrl++` | Zoom editor in (increase font size) |
| `Ctrl+-` | Zoom editor out (decrease font size) |
| `Ctrl+0` | Reset editor zoom to default |
| `Ctrl+↑` / `PageUp` | Move to previous slide |
| `Ctrl+↓` / `PageDown` | Move to next slide |
| `Ctrl+Home` | Jump to first slide |
| `Ctrl+End` | Jump to last slide |

You can also zoom with `Ctrl+scroll` (mouse wheel).

**Heading shortcuts:** pressing the same level again removes the heading marker — `Ctrl+2` on an existing `##` line strips it back to plain text.

**Slide navigation:** the `Ctrl+Arrow` and `Ctrl+Home`/`Ctrl+End` shortcuts move the cursor to the first line of the target slide and scroll it into view. On macOS, `Cmd` replaces `Ctrl`.

**Bold / Italic with no selection:** if nothing is selected, `Ctrl+B` inserts `bold text` and `Ctrl+I` inserts `italic text`, with the placeholder pre-selected so you can type immediately.

**Find dialog:** `Ctrl+F` opens a small dialog with two modes — **Text**, which searches the document (`Enter` for next match, `Shift+Enter` for previous), and **Slide #**, which jumps straight to a slide by number. `Esc` closes the dialog.

---

## Presentation mode

| Key | Action |
|-----|--------|
| `→` / `↓` / `Space` / `PageDown` | Next slide |
| `←` / `↑` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `N` | Toggle speaker notes panel *(single-screen only)* |
| `B` | Toggle black blank screen |
| `W` | Toggle white blank screen |
| `L` | Toggle laser pointer |
| `Esc` | Exit presentation mode |

You can also navigate by clicking the **left third** or **right third** of the screen in single-screen mode.

Click the **slide counter** in the HUD to open a number input and jump directly to any slide — or just start typing a digit to open the input immediately, no click needed.

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
