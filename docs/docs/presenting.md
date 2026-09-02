# Presenting

Kova offers two presentation modes: **single-screen** (fullscreen slideshow on one monitor) and **dual-screen** (presenter view on your laptop with the audience view on an external display). The correct mode launches automatically when you click **▶ Present**, or you can pin a specific mode in Settings.

---

## Starting a presentation

Click **▶ Present** in the titlebar, or press the button in the toolbar — or use `F5` to start from the first slide, `Shift+F5` from the current editor slide (see [Keyboard Shortcuts](keyboard-shortcuts.md#file-operations)). Kova detects connected displays and opens the appropriate view.

---

## Single-screen mode

The current slide fills the screen. Navigate with the keyboard or by clicking the left or right third of the screen — see [Keyboard Shortcuts — Presentation mode](keyboard-shortcuts.md#presentation-mode) for the full key list.

Press ++n++ to reveal the notes panel below the slide — it shows the `???` block from your Markdown.

**Blank screen** — press `B` to blank the audience display to black, or `W` for white. Press the same key again to return to the slide. The HUD stays visible in single-screen mode so you can un-blank without losing control.

**Jump to slide** — click the slide counter in the HUD to open a number input, or just start typing a number — pressing any digit key opens the input immediately without clicking first. Type a slide number and press ++enter++ to jump directly to it. Press ++escape++ or click away to cancel.

---

## Dual-screen presenter view

When Kova detects an external display (with **Auto** or **Dual** mode enabled), it opens two windows simultaneously:

- **Audience window** — displayed fullscreen on the external display or projector. Shows the current slide with no presenter UI.
- **Presenter overlay** — shown on your laptop, containing:
    - Current slide (large, left side)
    - Next slide preview (top-right)
    - Speaker notes (bottom-right)
    - Elapsed timer (bottom bar)
    - Slide counter

The **next-slide preview panel** can be resized by dragging the vertical handle between the current slide and the right column. Drag it left to widen the preview for more detail, or right to give the current slide more space. The width is clamped between 180 px and 600 px and persisted across sessions.

Keyboard navigation in the presenter overlay controls both windows simultaneously.

**Blank screen** — press `B` (black) or `W` (white) to blank the audience display. The presenter overlay shows an *"Audience screen is blank"* indicator while blanked. Press the key again to restore the slide.

**Jump to slide** — click the slide counter in the presenter overlay to enter a slide number and jump directly to it, or just start typing a number to open the input without clicking first.

!!! warning "Dual-screen is in active development"
    Multi-monitor support is actively being refined and is currently unstable. **Single-screen mode is stable** — use dual-screen with caution for important presentations.

### Windowed presenter view

By default the presenter overlay is fullscreen on your own display. Turn on **Windowed presenter view** in **Settings → Presentation** to keep it in a normal, resizable window instead — useful for placing it alongside a video call or another app. A dependent **Always on top** toggle appears once windowed view is on, keeping the presenter window above other apps so nothing covers it. The audience window is unaffected either way — it always stays fullscreen.

---

## Display mode settings

Go to **Settings → Presentation** to configure how Kova uses connected displays:

| Mode | Behaviour |
|------|-----------|
| **Auto** *(default)* | Dual presenter view if an external display is detected; single screen otherwise |
| **Single** | Always single-screen fullscreen, regardless of displays |
| **Dual** | Always open dual presenter view |
| **Mirror** | Same slide fullscreen on both displays; no presenter overlay |

### Additional dual-screen options

| Setting | Default | Description |
|---------|---------|-------------|
| **Show next slide** | On | Displays the upcoming slide in the top-right pane |
| **Show timer** | On | Shows elapsed time at the bottom of the presenter overlay |
| **Notes font size** | Medium | Speaker notes text size: Small / Medium / Large |
| **Windowed presenter view** | Off | Keeps the presenter overlay in a resizable window instead of fullscreen |
| **Always on top** | Off | Keeps the windowed presenter view above other apps — shown only when windowed view is on |

---

## Build animations

If a slide has `<!-- step -->` markers, a "next" action reveals its elements one click at a time before advancing to the next slide; going backward across a slide boundary lands on the previous slide fully revealed rather than at its start. This applies in single-screen mode, dual-screen presenter view (audience window and presenter overlay stay in sync), and the standalone HTML export. See [Build Animations](animations.md) for the full syntax and behaviour.

---

## Speaker notes

Add speaker notes to any slide using the `???` delimiter. Notes are **never shown to the audience**.

```markdown
## Q3 Results

- Revenue: $2.4M (+22% YoY)
- Churn: 3.1% (down from 4.8%)
- NPS: 61

???

Pause here. The revenue number is the headline — give the audience a moment.

Note: the churn drop is worth emphasising — it directly ties to the onboarding improvements from Q2.
```

- **Single-screen mode:** press ++n++ to toggle the notes panel below the slide.
- **Dual-screen mode:** notes appear permanently in the presenter overlay bottom-right.

---

## Laser pointer

During a presentation, press `L` (or click the **laser pointer** button in the HUD) to toggle a glowing dot that follows your cursor across the slide. In dual-screen mode the pointer appears on the audience display in real time, at the correct position regardless of display size.

To change the pointer colour, open **Settings → Presentation** and pick one under **Laser pointer colour** (Red, Orange, Green, Blue, or White).

---

## Display wake lock

During a presentation, Kova prevents your screen from sleeping so that slides stay visible without you needing to move the mouse.

| Platform | Mechanism |
|---|---|
| **macOS** | `caffeinate -d` |
| **Linux** | `org.freedesktop.ScreenSaver` D-Bus inhibit (works on X11 and Wayland) |
| **Windows** | `SetThreadExecutionState` |

The wake lock is released automatically when you exit the presentation. No configuration is needed.

---

## Aspect ratio

Use the **Aspect Ratio** toggle in the Inspector, or click the ratio indicator in the **status bar** at the bottom of the window, to choose the ratio for the current document. Both windows in dual-screen mode use the same ratio.

| Setting | Value | Notes |
|---------|-------|-------|
| 16:9 | `"16:9"` | Default — widescreen |
| 16:10 | `"16:10"` | Common on MacBooks and many laptop displays |
| 4:3 | `"4:3"` | Older projectors and some venue requirements |
