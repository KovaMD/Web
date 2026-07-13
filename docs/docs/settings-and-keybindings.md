# Settings & Keybindings

Open Settings by clicking the **gear icon** (⚙) in the titlebar. An **orange badge** appears on the icon when a Kova update is available.

---

## Appearance

| Setting | Options | Default |
|---------|---------|---------|
| **UI theme** | Dark · Light | Dark |
| **Interface scale** | 70% · 80% · 90% · 100% · 110% · 120% · 130% · 140% · 150% | 100% |
| **Content width** | Fixed · Full | Fixed |

Toggles between Dark and Light mode for the interface, editor, and panels. Changes take effect immediately — no restart required.

**Interface scale** zooms the entire app chrome — titlebars, panels, menus, editor. Useful if the default size feels too large or too small on your display. Presentation slides are always rendered at pixel-exact resolution regardless of the scale setting.

**Content width** controls the editor's line width. **Fixed** keeps editor lines at a comfortable reading width, centred in the panel. **Full** stretches the editor to fill the panel as you resize the editor/preview split.

---

## Saving

| Setting | Options | Default |
|---------|---------|---------|
| **Autosave** | Off · 15 sec · 30 sec · 1 min · 5 min | 30 sec |

When enabled, Kova saves the file automatically after the first manual save. Autosave does not trigger on an unsaved new document.

---

## Editor

| Setting | Options | Default |
|---------|---------|---------|
| **Show frontmatter** | On · Off | Off |
| **Word wrap** | On · Off | On |

When **Show frontmatter** is on, the YAML frontmatter block is visible in the editor. By default it is hidden — Kova manages it automatically via the Inspector. Turn it on if you want to edit frontmatter directly.

When **Word wrap** is off, long lines extend past the panel edge and a horizontal scrollbar appears instead of wrapping. Useful when working with wide tables or code snippets.

**Editor zoom** — hold `Ctrl` and scroll the mouse wheel to increase or decrease the editor font size. Keyboard shortcuts also work: `Ctrl++` to zoom in, `Ctrl+-` to zoom out, `Ctrl+0` to reset to default. The zoom level is not persisted across sessions.

---

## Language & Spelling

| Setting | Options | Default |
|---------|---------|---------|
| **Check spelling while typing** | On · Off | Off |
| **Dictionary language** | 22 languages | Auto-detected from system locale |

When **Check spelling while typing** is enabled, Kova underlines misspelled words in red as you type. The dictionary is loaded on first use.

When enabled, a **Dictionary language** selector appears. Kova supports 22 languages including English (US/UK/AU), French, German, Spanish, Italian, Portuguese, Dutch, Polish, Russian, Ukrainian, and more.

Kova also tracks **Learned words** — words you've right-clicked and added to your personal dictionary. These are listed in Settings and can be removed individually.

---

## Workspace

| Setting | Options | Default |
|---------|---------|---------|
| **Confirm before closing** | On · Off | On |
| **On startup** | Blank document · Reopen last file | Blank document |
| **PDF page size** | A4 · Letter · Match slide size | A4 |

**PDF page size** — paper size used for [PDF export](exporting.md#export-options). Pages are always laid out landscape. **Match slide size** makes each page exactly the slide's own dimensions instead of a fixed paper size — see [Exporting — PDF export](exporting.md#export-options).

**Confirm before closing** — when enabled, Kova shows a confirmation dialog if you try to close or quit with unsaved changes. This applies to the window × button, Alt+F4, taskbar close, and Cmd+Q.

**On startup** — controls what Kova opens when it launches. Window size and position are always restored regardless of this setting.

- **Blank document** — opens a new empty file on every launch.
- **Reopen last file** — reopens the file you had open when you last quit, and restores the active slide position.

---

## Presentation

Controls for the **▶ Present** feature. See [Presenting](presenting.md) for a full explanation of each mode.

| Setting | Options | Default |
|---------|---------|---------|
| **Display mode** | Auto · Single · Dual · Mirror | Auto |
| **Show next slide** | On · Off | On |
| **Show timer** | On · Off | On |
| **Notes font size** | Small · Medium · Large | Medium |

---

## Themes

| Setting | Options | Default |
|---------|---------|---------|
| **Default theme** | Any installed theme | `light` |

Sets the theme applied when you create a new document with `Ctrl+N`. Existing files keep whatever theme was last applied to them.

Shows the path to the custom themes folder (`~/.kova/themes/`) with an **Open folder** button. If Kova finds any `.yaml` files with syntax errors in that folder, the filenames and error details are listed here.

See [Themes — Custom themes](themes.md#custom-themes) for the theme file format.

---

## Updates

| Setting | Options | Default |
|---------|---------|---------|
| **Check for updates on startup** | On · Off | Off |

When enabled, Kova checks the [GitHub Releases page](https://github.com/KovaMD/Kova/releases) for new versions and shows an orange badge on the gear icon when one is available. No data is sent to Kova's servers — only a public GitHub API call is made.

Use the **Check now** button for an on-demand check without enabling automatic checks.

---

## Keybindings

Five file-level shortcuts can be remapped by editing a YAML file.

### File location

```
~/.kova/keybindings.yaml
```

### Format

```yaml
new_file:   ctrl+n
open_file:  ctrl+o
save:       ctrl+s
save_as:    ctrl+shift+s
focus_mode: ctrl+shift+f
```

### Modifiers and keys

**Modifiers:** `ctrl` · `shift` · `alt`

**Keys:** single characters (`n`, `s`, `f`, …) or named keys:

| Named key | Description |
|-----------|-------------|
| `escape` | Escape |
| `tab` | Tab |
| `space` | Space bar |
| `enter` | Enter / Return |
| `backspace` | Backspace |
| `delete` | Delete |
| `f1` – `f12` | Function keys |
| `up`, `down`, `left`, `right` | Arrow keys |
| `page_up`, `page_down` | Page Up / Page Down |
| `home`, `end` | Home / End |

Combine modifiers and keys with `+`: `ctrl+shift+s`, `alt+f4`, `ctrl+f1`.

### Example remapping

```yaml
# Change Save As to Ctrl+Alt+S
save_as: ctrl+alt+s

# Remap focus mode to F11
focus_mode: f11
```

Omitted keys retain their defaults. Edit the file and **restart Kova** for changes to take effect.

### Limitations

Editor shortcuts (`Ctrl+B`, `Ctrl+I`, heading toggles) and presentation navigation keys are not currently remappable via the keybindings file. See [Keyboard Shortcuts](keyboard-shortcuts.md) for the full list.
