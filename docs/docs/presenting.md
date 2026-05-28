# Presenting

Kova offers two presentation modes: **single-screen** (fullscreen slideshow on one monitor) and **dual-screen** (presenter view on your laptop with the audience view on an external display). The correct mode launches automatically when you click **▶ Present**, or you can pin a specific mode in Settings.

---

## Starting a presentation

Click **▶ Present** in the titlebar, or press the button in the toolbar. Kova detects connected displays and opens the appropriate view.

---

## Single-screen mode

The current slide fills the screen. Navigate with the keyboard or by clicking the left or right third of the screen.

| Key | Action |
|-----|--------|
| ++arrow-right++ / ++arrow-down++ / ++space++ / ++page-down++ | Next slide |
| ++arrow-left++ / ++arrow-up++ / ++page-up++ | Previous slide |
| ++n++ | Toggle speaker notes panel |
| ++escape++ | Exit presentation |

Press ++n++ to reveal the notes panel below the slide — it shows the `???` block from your Markdown.

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

Keyboard navigation in the presenter overlay controls both windows simultaneously.

!!! warning "Dual-screen is in active development"
    Multi-monitor support is actively being refined and is currently unstable. **Single-screen mode is stable** — use dual-screen with caution for important presentations.

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

## Aspect ratio

Use the **Aspect Ratio** toggle in the Inspector to choose the ratio for the current document. Both windows in dual-screen mode use the same ratio.

| Setting | Value | Notes |
|---------|-------|-------|
| 16:9 | `"16:9"` | Default — widescreen |
| 16:10 | `"16:10"` | Common on MacBooks and many laptop displays |
| 4:3 | `"4:3"` | Older projectors and some venue requirements |
