# Settings & Keybindings

Open Settings by clicking the **gear icon** (⚙) in the titlebar. An **orange badge** appears on the icon when a Kova update is available.

---

## Appearance

| Setting | Options | Default |
|---------|---------|---------|
| **UI theme** | Dark · Light | Dark |

Toggles between Dark and Light mode for the interface, editor, and panels. Changes take effect immediately — no restart required.

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

When **Show frontmatter** is on, the YAML frontmatter block is visible in the editor. By default it is hidden — Kova manages it automatically via the Inspector. Turn it on if you want to edit frontmatter directly.

---

## Workspace

| Setting | Options | Default |
|---------|---------|---------|
| **Confirm before closing** | On · Off | On |

When enabled, Kova shows a confirmation dialog if you try to close a file with unsaved changes.

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

Sets the theme applied when you create a new document with `Ctrl+N`. Existing files keep whatever theme is saved in their frontmatter.

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
