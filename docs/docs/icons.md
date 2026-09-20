# Icons

Kova has 180 built-in icons. Drop one into your text with an inline `:name:` shortcode — there's nothing to install, and each icon takes the size and colour of the text around it.

```markdown
## Launch checklist

- :check-circle: Tests passing
- :rocket: Ship on Friday
- :warning: **Heads up** — staging resets nightly
```

Every available name is listed in the [icon reference](#icon-reference) below.

---

## Using icons

| | |
|---|---|
| **Syntax** | A lowercase name between two colons — letters, digits and hyphens, such as `:rocket:` or `:git-branch:` |
| **Inline** | An icon sits in the flow of a line, so you can put one mid-sentence, at the start of a list item, or several in a row |
| **Size and colour** | Icons take the size and colour of the surrounding text, so they scale with a heading and follow your theme. Bold and italic never distort them |
| **Works in** | Paragraphs, list items, table cells, bold and italic text, and any heading below a slide's title |
| **Doesn't work in** | A slide's title (its first heading) — `:rocket:` there appears as typed. Inline code and code blocks are never converted either, so wrap a shortcode in backticks to show it literally |
| **Unknown names** | Left as typed, with no warning — colons are too common in ordinary text to flag every one. If an icon doesn't appear, check the spelling against the reference below |

---

## Icons in themes

Icons are drawn with a theme's `icon` font, which defaults to Kova's bundled icon font, `Kova Icons`. Every built-in theme and every [custom theme](themes.md#custom-themes) uses it automatically, so you don't need to set anything.

To use a different font, set the `icon` role alongside `title`, `body`, and `code` — in a custom theme file:

```yaml
fonts:
  icon: "Symbols Nerd Font"
```

or for a single document, under `theme_overrides` in its frontmatter (see [Inspector overrides](themes.md#inspector-overrides)):

```yaml
theme_overrides:
  fonts:
    icon: "Symbols Nerd Font"
```

!!! warning "Use a Nerd Fonts font"
    Kova's shortcode names map to Nerd Fonts codepoints, so point `icon` at a Nerd-Fonts-patched font you already have installed. A font that isn't patched that way — plain Font Awesome, for example — will likely show the wrong glyphs or none. There is no Inspector control for the icon font yet; set it in YAML.

---

## Exporting

**PDF and Print** capture the live slide, so icons look exactly as they do in the preview.

**PowerPoint** export is different: icons are written as text in the `Kova Icons` font, and that font isn't embedded in the `.pptx`. PowerPoint and Keynote only show the icons on machines where the font is installed. See [Exporting — PowerPoint limitations](exporting.md#limitations_1).

---

## Icon reference

Write any name below between two colons, for example `:rocket:`.

<div class="kova-icon-grid">
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf13d;</span><code>:anchor:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf17b;</span><code>:android:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf179;</span><code>:apple:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf187;</span><code>:archive:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf063;</span><code>:arrow-down:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf060;</span><code>:arrow-left:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf061;</span><code>:arrow-right:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf062;</span><code>:arrow-up:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1fa;</span><code>:at:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf02a;</span><code>:barcode:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf240;</span><code>:battery:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0f3;</span><code>:bell:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0e7;</span><code>:bolt:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf02d;</span><code>:book:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf02e;</span><code>:bookmark:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0b1;</span><code>:briefcase:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1fc;</span><code>:brush:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf188;</span><code>:bug:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf073;</span><code>:calendar:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf030;</span><code>:camera:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf080;</span><code>:chart-bar:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf201;</span><code>:chart-line:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf200;</span><code>:chart-pie:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf00c;</span><code>:check:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf058;</span><code>:check-circle:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf078;</span><code>:chevron-down:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf053;</span><code>:chevron-left:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf054;</span><code>:chevron-right:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf077;</span><code>:chevron-up:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf268;</span><code>:chrome:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf111;</span><code>:circle:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0ea;</span><code>:clipboard:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf017;</span><code>:clock:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c2;</span><code>:cloud:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe318;</span><code>:cloud-rain:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf121;</span><code>:code:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0f4;</span><code>:coffee:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf075;</span><code>:comment:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf086;</span><code>:comments:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf14e;</span><code>:compass:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c5;</span><code>:copy:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf09d;</span><code>:credit-card:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe749;</span><code>:css3:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1b2;</span><code>:cube:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1b3;</span><code>:cubes:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1c0;</span><code>:database:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe7b0;</span><code>:docker:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf019;</span><code>:download:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf040;</span><code>:edit:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf06a;</span><code>:exclamation-circle:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf08e;</span><code>:external-link:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf06e;</span><code>:eye:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf070;</span><code>:eye-off:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf15b;</span><code>:file:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf15c;</span><code>:file-text:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0b0;</span><code>:filter:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf06d;</span><code>:fire:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf269;</span><code>:firefox:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf024;</span><code>:flag:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe313;</span><code>:fog:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf07b;</span><code>:folder:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf07c;</span><code>:folder-open:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf06b;</span><code>:gift:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1d3;</span><code>:git:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf418;</span><code>:git-branch:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf417;</span><code>:git-commit:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf47f;</span><code>:git-compare:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf419;</span><code>:git-merge:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf407;</span><code>:git-pull-request:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf09b;</span><code>:github:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf296;</span><code>:gitlab:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0ac;</span><code>:globe:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf19d;</span><code>:graduation-cap:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf00a;</span><code>:grid:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf292;</span><code>:hashtag:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf004;</span><code>:heart:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf08a;</span><code>:heart-outline:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1da;</span><code>:history:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf015;</span><code>:home:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe736;</span><code>:html5:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf2c2;</span><code>:id-card:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf03e;</span><code>:image:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf01c;</span><code>:inbox:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xedfe;</span><code>:infinity:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf05a;</span><code>:info:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf41d;</span><code>:issue-closed:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf41b;</span><code>:issue-opened:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe738;</span><code>:java:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe781;</span><code>:javascript:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe60b;</span><code>:json:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf084;</span><code>:key:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf06c;</span><code>:leaf:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0eb;</span><code>:lightbulb:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c1;</span><code>:link:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf17c;</span><code>:linux:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf03a;</span><code>:list:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf023;</span><code>:lock:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0e0;</span><code>:mail:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf041;</span><code>:map-pin:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe73e;</span><code>:markdown:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c9;</span><code>:menu:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf130;</span><code>:microphone:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf068;</span><code>:minus:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf056;</span><code>:minus-circle:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe32b;</span><code>:moon:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf001;</span><code>:music:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf026;</span><code>:mute:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1ea;</span><code>:newspaper:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe718;</span><code>:nodejs:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe71e;</span><code>:npm:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf487;</span><code>:package:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c6;</span><code>:paperclip:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf04c;</span><code>:pause:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf295;</span><code>:percent:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf095;</span><code>:phone:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf04b;</span><code>:play:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf067;</span><code>:plus:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf055;</span><code>:plus-circle:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf011;</span><code>:power:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf02f;</span><code>:print:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe73c;</span><code>:python:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf029;</span><code>:qrcode:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf059;</span><code>:question:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe7ba;</span><code>:react:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf01e;</span><code>:redo:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf021;</span><code>:refresh:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf401;</span><code>:repo:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf402;</span><code>:repo-forked:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf135;</span><code>:rocket:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe7a8;</span><code>:rust:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c7;</span><code>:save:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c4;</span><code>:scissors:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf002;</span><code>:search:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1d8;</span><code>:send:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf233;</span><code>:server:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf013;</span><code>:settings:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1e0;</span><code>:share:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf132;</span><code>:shield:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf07a;</span><code>:shopping-cart:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0e8;</span><code>:sitemap:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf198;</span><code>:slack:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1de;</span><code>:sliders:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf118;</span><code>:smile:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe31a;</span><code>:snow:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0dc;</span><code>:sort:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c8;</span><code>:square:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf005;</span><code>:star:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf006;</span><code>:star-outline:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf04d;</span><code>:stop:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe31d;</span><code>:storm:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe30d;</span><code>:sun:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf412;</span><code>:tag:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf140;</span><code>:target:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf120;</span><code>:terminal:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf165;</span><code>:thumbs-down:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf164;</span><code>:thumbs-up:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf057;</span><code>:times-circle:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf204;</span><code>:toggle-off:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf205;</span><code>:toggle-on:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1f8;</span><code>:trash:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf091;</span><code>:trophy:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf099;</span><code>:twitter:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe628;</span><code>:typescript:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0e9;</span><code>:umbrella:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0e2;</span><code>:undo:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf09c;</span><code>:unlock:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf093;</span><code>:upload:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf007;</span><code>:user:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0c0;</span><code>:users:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf03d;</span><code>:video-camera:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe7c5;</span><code>:vim:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf028;</span><code>:volume:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf071;</span><code>:warning:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf1eb;</span><code>:wifi:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe34b;</span><code>:wind:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf17a;</span><code>:windows:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf0ad;</span><code>:wrench:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf00d;</span><code>:x:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xe6a8;</span><code>:yaml:</code></div>
<div class="kova-icon-cell"><span class="kova-icon" aria-hidden="true">&#xf16a;</span><code>:youtube:</code></div>
</div>

The icons come from the [Nerd Fonts](https://www.nerdfonts.com/) "Symbols Only" set, bundled with Kova under the MIT licence (© 2014 Ryan L McIntyre and contributors).
