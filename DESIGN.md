---
version: "alpha"
name: "Workshop Vibe Design — DesignBridge"
description: "Design system specification generated from Workshop Vibe Design"
colors:
  color-black: "#000000"
  color-white: "#ffffff"
  color-linen: "#f3f3f1"
  color-neutral-100: "#f4f4f2"
  color-neutral-200: "#eeeeec"
  color-neutral-300: "#e8e8e6"
  color-silver: "#c7c8cb"
  color-concrete: "#adadad"
  color-sage: "#676b5f"
  color-midnight: "#1e2330"
  color-charcoal: "#222222"
  color-lime: "#d2e823"
  color-leaf: "#ebffc5"
  color-moss: "#e8efd6"
  color-lavender: "#e9c0e9"
  color-cobalt: "#2665d6"
  color-cobalt-deep: "#061492"
  color-forest: "#254f1a"
  color-mustard: "#d6a337"
  color-maroon: "#780016"
  color-info-soft: "#d9e2ff"
  color-danger-soft: "#ffdad8"
  color-danger: "#ae2f37"
  color-black-20: "#00000033"
  color-black-40: "#00000066"
  color-black-60: "#00000099"
  color-black-80: "#000000cc"
  surface-canvas: "#f3f3f1"
  surface-card: "#ffffff"
  surface-subtle: "#eeeeec"
  text-primary: "#000000"
  text-secondary: "#676b5f"
  text-accent: "#254f1a"
  border-strong: "#000000"
  border-subtle: "#c7c8cb"
  action-primary-background: "#d2e823"
  action-primary-text: "#000000"
  action-secondary-background: "#ffffff"
  action-secondary-text: "#000000"
  status-info-background: "#d9e2ff"
  status-danger-background: "#ffdad8"
  decorative-lavender: "#e9c0e9"
  decorative-cobalt: "#2665d6"
  decorative-cobalt-deep: "#061492"
  decorative-forest: "#254f1a"
  decorative-mustard: "#d6a337"
  decorative-maroon: "#780016"
  decorative-leaf: "#ebffc5"
  decorative-moss: "#e8efd6"
  icon-primary: "#000000"
  icon-secondary: "#676b5f"
  icon-accent: "#254f1a"
  surface-inverse: "#000000"
  surface-code: "#222222"
  surface-code-alt: "#1e2330"
  surface-white: "#ffffff"
  overlay-subtle: "#00000033"
  overlay-scrim: "#00000099"
  border-overlay: "#00000033"
  border-neutral: "#676b5f"
  status-info-foreground: "#2665d6"
  status-danger-foreground: "#ae2f37"
rounded:
  radius-0: 0px
  radius-8: 8px
  radius-12: 12px
  radius-16: 16px
  radius-18: 18px
  radius-20: 20px
  radius-24: 24px
  radius-28: 28px
  radius-32: 32px
  radius-64: 64px
  radius-pill: 9999px
  radius-organic: 1000px
  radius-control: 8px
  radius-card: 32px
  radius-hero: 64px
  radius-pill: 9999px
spacing:
  space-0: 0px
  space-2: 2px
  space-4: 4px
  space-6: 6px
  space-8: 8px
  space-10: 10px
  space-12: 12px
  space-14: 14px
  space-16: 16px
  space-18: 18px
  space-20: 20px
  space-22: 22px
  space-24: 24px
  space-26: 26px
  space-40: 40px
  space-48: 48px
  space-64: 64px
  space-80: 80px
  space-128: 128px
  space-192: 192px
  space-216: 216px
  font-tracking-0_12: 0.11999999731779099px
  font-tracking-neg-0_28: -0.2800000011920929px
  font-tracking-neg-0_16: -0.1599999964237213px
  font-tracking-neg-0_36: -0.36000001430511475px
  font-tracking-neg-0_48: -0.47999998927116394px
  font-tracking-neg-0_67: -0.6700000166893005px
  font-tracking-neg-2_19: -2.190000057220459px
  font-tracking-neg-3_44: -3.440000057220459px
  stroke-standard: 2px
  stroke-emphasis: 3px
  layout-page-padding: 64px
  layout-section-gap: 80px
  layout-grid-gap: 24px
  layout-card-padding: 24px
  layout-control-gap: 12px
  layout-inline-gap: 8px
  stroke-default: 2px
components:
  button---base:
    width: 1072px
    height: 384px
    variant: "default | outline | secondary | ghost | destructive | link"
    size: "default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg"
  fab---extended:
    width: 1536px
    height: 680px
    color: "surface | primary | secondary | tertiary"
    state: "enabled | hovered | focused | pressed | disabled"
    elevation: "standard | lowered"
    icon: "on | off"
  navigation-header:
    width: 1280px
    height: 96px
  navigation-footer:
    width: 1280px
    height: 356px
  card-quickstart-step:
    width: 384px
    height: 236px
  data-metric:
    width: 196px
    height: 69px
  button:
    width: 129px
    height: 33px
themes:
  light:
    source: "Semantic"
    colors:
      surface-canvas: "#f3f3f1"
      surface-card: "#ffffff"
      surface-subtle: "#eeeeec"
      text-primary: "#000000"
      text-secondary: "#676b5f"
      text-accent: "#254f1a"
      border-strong: "#000000"
      border-subtle: "#c7c8cb"
      action-primary-background: "#d2e823"
      action-primary-text: "#000000"
      action-secondary-background: "#ffffff"
      action-secondary-text: "#000000"
      status-info-background: "#d9e2ff"
      status-danger-background: "#ffdad8"
      decorative-lavender: "#e9c0e9"
      decorative-cobalt: "#2665d6"
      decorative-cobalt-deep: "#061492"
      decorative-forest: "#254f1a"
      decorative-mustard: "#d6a337"
      decorative-maroon: "#780016"
      decorative-leaf: "#ebffc5"
      decorative-moss: "#e8efd6"
      icon-primary: "#000000"
      icon-secondary: "#676b5f"
      icon-accent: "#254f1a"
      surface-inverse: "#000000"
      surface-code: "#222222"
      surface-code-alt: "#1e2330"
      surface-white: "#ffffff"
      overlay-subtle: "#00000033"
      overlay-scrim: "#00000099"
      border-overlay: "#00000033"
      border-neutral: "#676b5f"
      status-info-foreground: "#2665d6"
      status-danger-foreground: "#ae2f37"
    spacing:
      layout-page-padding: 64px
      layout-section-gap: 80px
      layout-grid-gap: 24px
      layout-card-padding: 24px
      layout-control-gap: 12px
      layout-inline-gap: 8px
      stroke-default: 2px
      stroke-emphasis: 3px
      radius-control: 8px
      radius-card: 32px
      radius-hero: 64px
      radius-pill: 9999px
  dark-band:
    source: "Semantic"
    colors:
      surface-canvas: "#780016"
      surface-card: "#061492"
      surface-subtle: "#254f1a"
      text-primary: "#ffffff"
      text-secondary: "#ebffc5"
      text-accent: "#d2e823"
      border-strong: "#000000"
      border-subtle: "#ffffff"
      action-primary-background: "#d2e823"
      action-primary-text: "#000000"
      action-secondary-background: "#ffffff"
      action-secondary-text: "#000000"
      status-info-background: "#2665d6"
      status-danger-background: "#ae2f37"
      decorative-lavender: "#e9c0e9"
      decorative-cobalt: "#2665d6"
      decorative-cobalt-deep: "#061492"
      decorative-forest: "#254f1a"
      decorative-mustard: "#d6a337"
      decorative-maroon: "#780016"
      decorative-leaf: "#ebffc5"
      decorative-moss: "#e8efd6"
      icon-primary: "#ffffff"
      icon-secondary: "#ebffc5"
      icon-accent: "#d2e823"
      surface-inverse: "#000000"
      surface-code: "#222222"
      surface-code-alt: "#1e2330"
      surface-white: "#ffffff"
      overlay-subtle: "#00000033"
      overlay-scrim: "#00000099"
      border-overlay: "#ffffff"
      border-neutral: "#676b5f"
      status-info-foreground: "#2665d6"
      status-danger-foreground: "#ae2f37"
    spacing:
      layout-page-padding: 64px
      layout-section-gap: 80px
      layout-grid-gap: 24px
      layout-card-padding: 24px
      layout-control-gap: 12px
      layout-inline-gap: 8px
      stroke-default: 2px
      stroke-emphasis: 3px
      radius-control: 8px
      radius-card: 32px
      radius-hero: 64px
      radius-pill: 9999px
---

# Workshop Vibe Design — DesignBridge

> **AI AGENT INSTRUCTIONS — READ FIRST, APPLY TO ALL OUTPUT**
>
> This file is the complete visual specification for **"Workshop Vibe Design — DesignBridge"**.
> The YAML front matter above contains the normative design tokens. The sections below explain how to apply them.
> Apply every rule to every line of UI, HTML, CSS, JSX, or component code you generate.
>
> 1. **Colours** — Use only exact hex values or `var(--token)` names from this file. No substitutions.
> 2. **Typography** — Match font family, weight, size, line-height exactly.
> 3. **Spacing** — Use only values from the spacing/sizing token tables.
> 4. **Border radius** — Use only the defined radius tokens.
> 5. **Components** — Mirror defined structures. Honour variant property names exactly.
> 6. **Shadows** — Apply defined elevation styles. Do not invent shadows.
> 7. **Themes** — Use the `themes` block for dark mode / multi-theme support. Apply correct mode tokens.
> 8. **Unknowns** — If a visual decision is not defined here, ask before inventing it.

## How to Use

| Platform | Instructions |
|----------|-------------|
| **Claude Design** | Upload as design asset: *Add assets → DESIGN.md*, or attach in chat: *"Create a design system from this DESIGN.md"* |
| **Google Stitch** | Upload via *Design System → DESIGN.md* |
| **Claude Code** | Place in project root, reference as `@DESIGN.md` |
| **Cursor / Windsurf** | Add to context, prompt: *"Follow @DESIGN.md for all visual decisions"* |
| **Gemini CLI** | Place in project root — auto-detected by Gemini agents |
| **Antigravity** | Import via *Design System settings* |
| **GitHub Copilot** | Place in project root for automatic context |
| **OpenAI Codex** | Paste as system context before UI tasks |
| **Any LLM** | Paste at top of session as system context |

```
You have the design system for "Workshop Vibe Design — DesignBridge" in DESIGN.md. Follow it precisely for ALL visual decisions. No deviations.
```

## Overview

Design system extracted from **Workshop Vibe Design**. This specification defines the complete visual language including colour palette, typography scale, spacing system, and component catalogue.

## Design System Summary

- **Source**: Workshop Vibe Design · Generated: 2026-09-19
- **Generator**: DesignOps Tools: DesignBridge v2.1 — [designops.tools](https://designops.tools)
- **Spec**: [google-labs-code/design.md](https://github.com/google-labs-code/design.md) (alpha)
- **Color tokens**: 62
- **Spacing / size tokens**: 55
- **Border radius tokens**: 16
- **Typography tokens**: 28
- **Themes**: Light · Dark Band
- **Component sets**: 2
- **Standalone components**: 5

## Color Tokens

> Use only these values. Reference as CSS custom properties (`var(--token-name)`).

### Primitive

| Token | Value | Alias source |
|-------|-------|-------------|
| `color/black` | `#000000` | — |
| `color/white` | `#ffffff` | — |
| `color/linen` | `#f3f3f1` | — |
| `color/neutral/100` | `#f4f4f2` | — |
| `color/neutral/200` | `#eeeeec` | — |
| `color/neutral/300` | `#e8e8e6` | — |
| `color/silver` | `#c7c8cb` | — |
| `color/concrete` | `#adadad` | — |
| `color/sage` | `#676b5f` | — |
| `color/midnight` | `#1e2330` | — |
| `color/charcoal` | `#222222` | — |
| `color/lime` | `#d2e823` | — |
| `color/leaf` | `#ebffc5` | — |
| `color/moss` | `#e8efd6` | — |
| `color/lavender` | `#e9c0e9` | — |
| `color/cobalt` | `#2665d6` | — |
| `color/cobalt-deep` | `#061492` | — |
| `color/forest` | `#254f1a` | — |
| `color/mustard` | `#d6a337` | — |
| `color/maroon` | `#780016` | — |
| `color/info-soft` | `#d9e2ff` | — |
| `color/danger-soft` | `#ffdad8` | — |
| `color/danger` | `#ae2f37` | — |
| `color/black/20` | `#00000033` | — |
| `color/black/40` | `#00000066` | — |
| `color/black/60` | `#00000099` | — |
| `color/black/80` | `#000000cc` | — |

### Semantic

| Token | Value | Alias source |
|-------|-------|-------------|
| `surface/canvas` | `#f3f3f1` | ← `color/linen` |
| `surface/card` | `#ffffff` | ← `color/white` |
| `surface/subtle` | `#eeeeec` | ← `color/neutral/200` |
| `text/primary` | `#000000` | ← `color/black` |
| `text/secondary` | `#676b5f` | ← `color/sage` |
| `text/accent` | `#254f1a` | ← `color/forest` |
| `border/strong` | `#000000` | ← `color/black` |
| `border/subtle` | `#c7c8cb` | ← `color/silver` |
| `action/primary/background` | `#d2e823` | ← `color/lime` |
| `action/primary/text` | `#000000` | ← `color/black` |
| `action/secondary/background` | `#ffffff` | ← `color/white` |
| `action/secondary/text` | `#000000` | ← `color/black` |
| `status/info/background` | `#d9e2ff` | ← `color/info-soft` |
| `status/danger/background` | `#ffdad8` | ← `color/danger-soft` |
| `decorative/lavender` | `#e9c0e9` | ← `color/lavender` |
| `decorative/cobalt` | `#2665d6` | ← `color/cobalt` |
| `decorative/cobalt-deep` | `#061492` | ← `color/cobalt-deep` |
| `decorative/forest` | `#254f1a` | ← `color/forest` |
| `decorative/mustard` | `#d6a337` | ← `color/mustard` |
| `decorative/maroon` | `#780016` | ← `color/maroon` |
| `decorative/leaf` | `#ebffc5` | ← `color/leaf` |
| `decorative/moss` | `#e8efd6` | ← `color/moss` |
| `icon/primary` | `#000000` | ← `color/black` |
| `icon/secondary` | `#676b5f` | ← `color/sage` |
| `icon/accent` | `#254f1a` | ← `color/forest` |
| `surface/inverse` | `#000000` | ← `color/black` |
| `surface/code` | `#222222` | ← `color/charcoal` |
| `surface/code-alt` | `#1e2330` | ← `color/midnight` |
| `surface/white` | `#ffffff` | ← `color/white` |
| `overlay/subtle` | `#00000033` | ← `color/black/20` |
| `overlay/scrim` | `#00000099` | ← `color/black/60` |
| `border/overlay` | `#00000033` | ← `color/black/20` |
| `border/neutral` | `#676b5f` | ← `color/sage` |
| `status/info/foreground` | `#2665d6` | ← `color/cobalt` |
| `status/danger/foreground` | `#ae2f37` | ← `color/danger` |

**Multi-mode values:**

- `surface/canvas`: Light: `#f3f3f1` | Dark Band: `#780016`
- `surface/card`: Light: `#ffffff` | Dark Band: `#061492`
- `surface/subtle`: Light: `#eeeeec` | Dark Band: `#254f1a`
- `text/primary`: Light: `#000000` | Dark Band: `#ffffff`
- `text/secondary`: Light: `#676b5f` | Dark Band: `#ebffc5`
- `text/accent`: Light: `#254f1a` | Dark Band: `#d2e823`
- `border/strong`: Light: `#000000` | Dark Band: `#000000`
- `border/subtle`: Light: `#c7c8cb` | Dark Band: `#ffffff`
- `action/primary/background`: Light: `#d2e823` | Dark Band: `#d2e823`
- `action/primary/text`: Light: `#000000` | Dark Band: `#000000`
- `action/secondary/background`: Light: `#ffffff` | Dark Band: `#ffffff`
- `action/secondary/text`: Light: `#000000` | Dark Band: `#000000`
- `status/info/background`: Light: `#d9e2ff` | Dark Band: `#2665d6`
- `status/danger/background`: Light: `#ffdad8` | Dark Band: `#ae2f37`
- `decorative/lavender`: Light: `#e9c0e9` | Dark Band: `#e9c0e9`
- `decorative/cobalt`: Light: `#2665d6` | Dark Band: `#2665d6`
- `decorative/cobalt-deep`: Light: `#061492` | Dark Band: `#061492`
- `decorative/forest`: Light: `#254f1a` | Dark Band: `#254f1a`
- `decorative/mustard`: Light: `#d6a337` | Dark Band: `#d6a337`
- `decorative/maroon`: Light: `#780016` | Dark Band: `#780016`
- `decorative/leaf`: Light: `#ebffc5` | Dark Band: `#ebffc5`
- `decorative/moss`: Light: `#e8efd6` | Dark Band: `#e8efd6`
- `icon/primary`: Light: `#000000` | Dark Band: `#ffffff`
- `icon/secondary`: Light: `#676b5f` | Dark Band: `#ebffc5`
- `icon/accent`: Light: `#254f1a` | Dark Band: `#d2e823`
- `surface/inverse`: Light: `#000000` | Dark Band: `#000000`
- `surface/code`: Light: `#222222` | Dark Band: `#222222`
- `surface/code-alt`: Light: `#1e2330` | Dark Band: `#1e2330`
- `surface/white`: Light: `#ffffff` | Dark Band: `#ffffff`
- `overlay/subtle`: Light: `#00000033` | Dark Band: `#00000033`
- `overlay/scrim`: Light: `#00000099` | Dark Band: `#00000099`
- `border/overlay`: Light: `#00000033` | Dark Band: `#ffffff`
- `border/neutral`: Light: `#676b5f` | Dark Band: `#676b5f`
- `status/info/foreground`: Light: `#2665d6` | Dark Band: `#2665d6`
- `status/danger/foreground`: Light: `#ae2f37` | Dark Band: `#ae2f37`

## Spacing Tokens

> Apply these values for all margins, padding, and gaps.

### Primitive

| Token | Value |
|-------|-------|
| `space/0` | `0px` |
| `space/2` | `2px` |
| `space/4` | `4px` |
| `space/6` | `6px` |
| `space/8` | `8px` |
| `space/10` | `10px` |
| `space/12` | `12px` |
| `space/14` | `14px` |
| `space/16` | `16px` |
| `space/18` | `18px` |
| `space/20` | `20px` |
| `space/22` | `22px` |
| `space/24` | `24px` |
| `space/26` | `26px` |
| `space/40` | `40px` |
| `space/48` | `48px` |
| `space/64` | `64px` |
| `space/80` | `80px` |
| `space/128` | `128px` |
| `space/192` | `192px` |
| `space/216` | `216px` |
| `font/tracking/0_12` | `0.11999999731779099px` |
| `font/tracking/neg-0_28` | `-0.2800000011920929px` |
| `font/tracking/neg-0_16` | `-0.1599999964237213px` |
| `font/tracking/neg-0_36` | `-0.36000001430511475px` |
| `font/tracking/neg-0_48` | `-0.47999998927116394px` |
| `font/tracking/neg-0_67` | `-0.6700000166893005px` |
| `font/tracking/neg-2_19` | `-2.190000057220459px` |
| `font/tracking/neg-3_44` | `-3.440000057220459px` |
| `stroke/standard` | `2px` |
| `stroke/emphasis` | `3px` |

### Semantic

| Token | Value |
|-------|-------|
| `layout/page-padding` | `64px` |
| `layout/section-gap` | `80px` |
| `layout/grid-gap` | `24px` |
| `layout/card-padding` | `24px` |
| `layout/control-gap` | `12px` |
| `layout/inline-gap` | `8px` |
| `stroke/default` | `2px` |

## Border Radius Tokens

| Token | Value |
|-------|-------|
| `radius/0` | `0px` |
| `radius/8` | `8px` |
| `radius/12` | `12px` |
| `radius/16` | `16px` |
| `radius/18` | `18px` |
| `radius/20` | `20px` |
| `radius/24` | `24px` |
| `radius/28` | `28px` |
| `radius/32` | `32px` |
| `radius/64` | `64px` |
| `radius/pill` | `9999px` |
| `radius/organic` | `1000px` |
| `radius/control` | `8px` |
| `radius/card` | `32px` |
| `radius/hero` | `64px` |
| `radius/pill` | `9999px` |

## Font Weight Tokens

| Token | Value |
|-------|-------|
| `font/weight/regular` | `400` |
| `font/weight/medium` | `500` |
| `font/weight/bold` | `700` |
| `font/weight/display` | `800` |
| `typography/caption/font-weight` | `400` |
| `typography/body-sm/font-weight` | `400` |
| `typography/body/font-weight` | `400` |
| `typography/body-lg/font-weight` | `400` |
| `typography/subheading/font-weight` | `700` |
| `typography/heading-sm/font-weight` | `700` |
| `typography/heading/font-weight` | `800` |
| `typography/display/font-weight` | `800` |

## Letter Spacing Tokens

| Token | Value |
|-------|-------|
| `typography/caption/letter-spacing` | `0.11999999731779099px` |
| `typography/body-sm/letter-spacing` | `-0.2800000011920929px` |
| `typography/body/letter-spacing` | `-0.1599999964237213px` |
| `typography/body-lg/letter-spacing` | `-0.36000001430511475px` |
| `typography/subheading/letter-spacing` | `-0.47999998927116394px` |
| `typography/heading-sm/letter-spacing` | `-0.6700000166893005px` |
| `typography/heading/letter-spacing` | `-2.190000057220459px` |
| `typography/display/letter-spacing` | `-3.440000057220459px` |

## String Tokens

### Primitive

- `font/family/brand`: `Inter`
- `font/family/technical`: `Noto Sans`

### Semantic

- `typography/family/body`: `Inter`
- `typography/family/technical`: `Noto Sans`

## Components

> Replicate structures exactly. Honour variant property names for interactive states.

### Variant Sets

#### Button / Base
*Page: Page 1*
> Local master component set recreated from shadcn/ui Base Button. Source: https://ui.shadcn.com/docs/components/base/button
Props: variant = default | outline | secondary | ghost | destructive | link; size = default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg.

- **Total variants**: 48
- **Frame size**: 1072 × 384px
- **Variant properties**:
  - `Variant: default | outline | secondary | ghost | destructive | link`
  - `Size: default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg`
- **Sample variant names**: `Variant=default, Size=default` · `Variant=default, Size=xs` · `Variant=default, Size=sm` · `Variant=default, Size=lg` · `Variant=default, Size=icon` · `Variant=default, Size=icon-xs` · `Variant=default, Size=icon-sm` · `Variant=default, Size=icon-lg`

**Component anatomy** (default variant):

```
└─ Component "Variant=default, Size=default" (76×32) [row, gap:6px, pad:0px 10px, align:center / center]
  ├─ Frame "Leading Icon" (16×16)
    ├─ Rectangle "Horizontal"
    ├─ Rectangle "Vertical"
  ├─ Frame "Loading" (16×16)
    ├─ Ellipse "Dot 1"
    ├─ Ellipse "Dot 2"
    ├─ Ellipse "Dot 3"
    ├─ Ellipse "Dot 4"
    ├─ Ellipse "Dot 5"
    ├─ Ellipse "Dot 6"
    ├─ Ellipse "Dot 7"
    ├─ Ellipse "Dot 8"
  ├─ Text "Label" (45×19) → "Button"
  ├─ Frame "Trailing Icon" (16×16)
    ├─ Rectangle "Horizontal"
    ├─ Rectangle "Vertical"
```

#### FAB / Extended
*Page: Page 1*
> Material Design 3 Extended FAB master component set. Source: https://m3.material.io/components/extended-fab/specs
56 dp height, minimum 80 dp width, 16 dp radius, 24 dp icon, Label Large 14/20. Includes surface/primary/secondary/tertiary colors; enabled/hovered/focused/pressed/disabled states; standard/lowered elevation; icon on/off.

- **Total variants**: 80
- **Frame size**: 1536 × 680px
- **Variant properties**:
  - `Color: surface | primary | secondary | tertiary`
  - `State: enabled | hovered | focused | pressed | disabled`
  - `Elevation: standard | lowered`
  - `Icon: on | off`
- **Sample variant names**: `Color=surface, State=enabled, Elevation=standard, Icon=on` · `Color=surface, State=enabled, Elevation=standard, Icon=off` · `Color=surface, State=enabled, Elevation=lowered, Icon=on` · `Color=surface, State=enabled, Elevation=lowered, Icon=off` · `Color=surface, State=hovered, Elevation=standard, Icon=on` · `Color=surface, State=hovered, Elevation=standard, Icon=off` · `Color=surface, State=hovered, Elevation=lowered, Icon=on` · `Color=surface, State=hovered, Elevation=lowered, Icon=off`

**Component anatomy** (default variant):

```
└─ Component "Color=surface, State=enabled, Elevation=standard, Icon=on" (80×56) [row, gap:12px, pad:0px 20px 0px 16px, align:center / center]
  ├─ Frame "Icon" (24×24)
    ├─ Rectangle "Horizontal"
    ├─ Rectangle "Vertical"
  ├─ Text "Label" (42×20) → "Create"
```

**Interactive state map:**

```css
/* Component: FAB / Extended */
/* Variant property: State */
.fab---extended[data-state="enabled"] {
  /* State: enabled */
}
.fab---extended:hover {
  /* State: hovered */
}
.fab---extended:focus-visible {
  /* State: focused */
}
.fab---extended:active {
  /* State: pressed */
}
.fab---extended:disabled {
  /* State: disabled */
}
```

### Standalone Components

#### Navigation/Header
*Page: Page 1*
> Shared AI Hub desktop header

- **Size**: 1280 × 96px

**Component anatomy:**

```
└─ Component "Navigation/Header" (1280×96) [column, pad:16px 40px 0px 40px]
  ├─ Frame "Background+Border+Shadow" (1200×80) [row, gap:49.900001525878906px, pad:0px 24px, align:space-between / center]
    ├─ Frame "Container" [row, gap:4px, align:start / center]
      ├─ Text "AI_HUB" → "AI_HUB"
      ├─ Frame "Background+Border" [column, pad:4px]
        ├─ Text "PRO" → "PRO"
    ├─ Frame "Nav" [row, gap:24px, align:start / center]
      ├─ Frame "Link" [column]
        ├─ Text "Features" → "Features"
      ├─ Frame "Link" [column]
        ├─ Text "AI Models" → "AI Models"
      ├─ Frame "Link" [column]
        ├─ Text "Marketplace Preview" → "Marketplace Preview"
      ├─ Frame "Link" [column]
        ├─ Text "Pricing" → "Pricing"
      ├─ Frame "Link" [column]
        ├─ Text "Documentation" → "Documentation"
      ├─ Frame "Link" [column]
        ├─ Text "FAQ" → "FAQ"
    ├─ Frame "Container" [row, gap:4px, align:start / center]
      ├─ Frame "Link" [row, pad:4px 16px, align:center / center]
        ├─ Text "View Documentation" → "View Documentation"
      ├─ Instance "Link" [row, pad:4px 24px, align:center / center]
        ├─ Text "Get Started" → "Get Started"
      ├─ Frame "Margin" [column, pad:0px 0px 0px 4px]
        ├─ Frame "Background+Border" [row, align:center / center]
```

#### Navigation/Footer
*Page: Page 1*
> Shared AI Hub desktop footer

- **Size**: 1280 × 356px

**Component anatomy:**

```
└─ Component "Navigation/Footer" (1280×356) [column, pad:64px 0px 40px 0px]
  ├─ Frame "Container" (1280×250) [column, pad:0px 40px]
    ├─ Frame "HorizontalBorder" [column, pad:0px 0px 40px 0px]
      ├─ Frame "Container" [column, gap:16px]
        ├─ Frame "Container" [row, gap:4px, align:start / center]
        ├─ Frame "Container" [column]
        ├─ Frame "Container" [row, gap:8px, pad:4px 0px 0px 0px, align:start / center]
      ├─ Frame "Container" [column, gap:8px, pad:0px 0px 16px 0px]
        ├─ Frame "Container" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
      ├─ Frame "Container" [column, gap:8px, pad:0px 0px 16px 0px]
        ├─ Frame "Container" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
      ├─ Frame "Container" [column, gap:8px, pad:0px 0px 45px 0px]
        ├─ Frame "Container" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
        ├─ Frame "Link" [column]
    ├─ Frame "Container" [row, gap:603.47998046875px, pad:24px 0px 0px 0px, align:space-between / center]
      ├─ Frame "Container" [column]
        ├─ Text "Text" → "© 2025 AI Hub Inc. Handcrafted with sticker bru…"
      ├─ Frame "Background+Border" [column, pad:4px 8px]
        ├─ Text "Text" → "LINEN CANVAS EDITION"
```

#### Card/Quickstart Step
*Page: Page 1*
> Reusable quickstart instruction card

- **Size**: 384 × 236px

**Component anatomy:**

```
└─ Component "Card/Quickstart Step" (384×236) [column, gap:8px, pad:24px]
  ├─ Frame "Background+Border" (40×40) [row, align:center / center]
    ├─ Text "Text" → "1"
  ├─ Frame "Heading 3" (332×29) [column]
    ├─ Text "Obtain Sandbox Token" → "Obtain Sandbox Token"
  ├─ Frame "Container" (332×63) [column]
    ├─ Text "Generate an ephemeral key in one click. Instant access to public testing quotas with no credit card requirement." → "Generate an ephemeral key in one click. Instant…"
  ├─ Frame "Background+Border" (332×28) [column, pad:4px]
    ├─ Text "export AIHUB_API_KEY="ai_sandbox_01"" → "export AIHUB_API_KEY="ai_sandbox_01""
```

#### Data/Metric
*Page: Page 1*
> Reusable compact KPI metric card

- **Size**: 196 × 69px

**Component anatomy:**

```
└─ Component "Data/Metric" (196×69) [column, pad:8px 8px 9px 8px]
  ├─ Frame "Container" (176×18) [column]
    ├─ Text "P99 LATENCY" → "P99 LATENCY"
  ├─ Text "Text" (94×30) → "< 18ms"
```

#### Button
*Page: Page 1*
- **Size**: 129 × 33px

**Component anatomy:**

```
└─ Component "Button" (129×33) [row, pad:4px 24px, align:center / center]
  ├─ Text "Get Started" (77×21) → "Get Started"
```

## Design Rules — Mandatory for AI Agents

| Category | Rule |
|----------|------|
| Colours | Use only tokens defined above. Always output as `var(--token)`. Never hard-code. |
| Typography | Match family, weight, size, line-height exactly from the table above. |
| Spacing | Use only spacing token values. No arbitrary numbers. |
| Radius | Use only border-radius tokens. No arbitrary values. |
| Shadows | Use only defined elevation/effect styles. |
| Components | Replicate structures. Honour variant property names. |
| Themes | Implement all defined themes. Use CSS custom properties with mode-specific overrides. |
| HTML | Output semantic HTML5 with ARIA roles. All components responsive by default. |
| Unknowns | If a decision is not defined here: ask the user, do not invent. |

## CSS Custom Properties

```css
:root {
  /* ── Colour tokens ──────────────────── */
  --color-black: #000000;
  --color-white: #ffffff;
  --color-linen: #f3f3f1;
  --color-neutral-100: #f4f4f2;
  --color-neutral-200: #eeeeec;
  --color-neutral-300: #e8e8e6;
  --color-silver: #c7c8cb;
  --color-concrete: #adadad;
  --color-sage: #676b5f;
  --color-midnight: #1e2330;
  --color-charcoal: #222222;
  --color-lime: #d2e823;
  --color-leaf: #ebffc5;
  --color-moss: #e8efd6;
  --color-lavender: #e9c0e9;
  --color-cobalt: #2665d6;
  --color-cobalt-deep: #061492;
  --color-forest: #254f1a;
  --color-mustard: #d6a337;
  --color-maroon: #780016;
  --color-info-soft: #d9e2ff;
  --color-danger-soft: #ffdad8;
  --color-danger: #ae2f37;
  --color-black-20: #00000033;
  --color-black-40: #00000066;
  --color-black-60: #00000099;
  --color-black-80: #000000cc;
  --surface-canvas: #f3f3f1;
  --surface-card: #ffffff;
  --surface-subtle: #eeeeec;
  --text-primary: #000000;
  --text-secondary: #676b5f;
  --text-accent: #254f1a;
  --border-strong: #000000;
  --border-subtle: #c7c8cb;
  --action-primary-background: #d2e823;
  --action-primary-text: #000000;
  --action-secondary-background: #ffffff;
  --action-secondary-text: #000000;
  --status-info-background: #d9e2ff;
  --status-danger-background: #ffdad8;
  --decorative-lavender: #e9c0e9;
  --decorative-cobalt: #2665d6;
  --decorative-cobalt-deep: #061492;
  --decorative-forest: #254f1a;
  --decorative-mustard: #d6a337;
  --decorative-maroon: #780016;
  --decorative-leaf: #ebffc5;
  --decorative-moss: #e8efd6;
  --icon-primary: #000000;
  --icon-secondary: #676b5f;
  --icon-accent: #254f1a;
  --surface-inverse: #000000;
  --surface-code: #222222;
  --surface-code-alt: #1e2330;
  --surface-white: #ffffff;
  --overlay-subtle: #00000033;
  --overlay-scrim: #00000099;
  --border-overlay: #00000033;
  --border-neutral: #676b5f;
  --status-info-foreground: #2665d6;
  --status-danger-foreground: #ae2f37;

  /* ── Spacing ────────────────────────── */
  --space-0: 0px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-14: 14px;
  --space-16: 16px;
  --space-18: 18px;
  --space-20: 20px;
  --space-22: 22px;
  --space-24: 24px;
  --space-26: 26px;
  --space-40: 40px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 80px;
  --space-128: 128px;
  --space-192: 192px;
  --space-216: 216px;
  --font-tracking-012: 0.11999999731779099px;
  --font-tracking-neg-028: -0.2800000011920929px;
  --font-tracking-neg-016: -0.1599999964237213px;
  --font-tracking-neg-036: -0.36000001430511475px;
  --font-tracking-neg-048: -0.47999998927116394px;
  --font-tracking-neg-067: -0.6700000166893005px;
  --font-tracking-neg-219: -2.190000057220459px;
  --font-tracking-neg-344: -3.440000057220459px;
  --stroke-standard: 2px;
  --stroke-emphasis: 3px;
  --layout-page-padding: 64px;
  --layout-section-gap: 80px;
  --layout-grid-gap: 24px;
  --layout-card-padding: 24px;
  --layout-control-gap: 12px;
  --layout-inline-gap: 8px;
  --stroke-default: 2px;

  /* ── Border radius ──────────────────── */
  --radius-0: 0px;
  --radius-8: 8px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-18: 18px;
  --radius-20: 20px;
  --radius-24: 24px;
  --radius-28: 28px;
  --radius-32: 32px;
  --radius-64: 64px;
  --radius-pill: 9999px;
  --radius-organic: 1000px;
  --radius-control: 8px;
  --radius-card: 32px;
  --radius-hero: 64px;
  --radius-pill: 9999px;

  /* ── Font weight ────────────────────── */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-display: 800;
  --typography-caption-font-weight: 400;
  --typography-body-sm-font-weight: 400;
  --typography-body-font-weight: 400;
  --typography-body-lg-font-weight: 400;
  --typography-subheading-font-weight: 700;
  --typography-heading-sm-font-weight: 700;
  --typography-heading-font-weight: 800;
  --typography-display-font-weight: 800;

  /* ── Letter spacing ─────────────────── */
  --typography-caption-letter-spacing: 0.11999999731779099px;
  --typography-body-sm-letter-spacing: -0.2800000011920929px;
  --typography-body-letter-spacing: -0.1599999964237213px;
  --typography-body-lg-letter-spacing: -0.36000001430511475px;
  --typography-subheading-letter-spacing: -0.47999998927116394px;
  --typography-heading-sm-letter-spacing: -0.6700000166893005px;
  --typography-heading-letter-spacing: -2.190000057220459px;
  --typography-display-letter-spacing: -3.440000057220459px;
}
```

### Theme Overrides

```css
/* Theme: Dark Band (source: Semantic) */
@media (prefers-color-scheme: dark) {
  :root {
    --surface-canvas: #780016;
    --surface-card: #061492;
    --surface-subtle: #254f1a;
    --text-primary: #ffffff;
    --text-secondary: #ebffc5;
    --text-accent: #d2e823;
    --border-strong: #000000;
    --border-subtle: #ffffff;
    --action-primary-background: #d2e823;
    --action-primary-text: #000000;
    --action-secondary-background: #ffffff;
    --action-secondary-text: #000000;
    --status-info-background: #2665d6;
    --status-danger-background: #ae2f37;
    --decorative-lavender: #e9c0e9;
    --decorative-cobalt: #2665d6;
    --decorative-cobalt-deep: #061492;
    --decorative-forest: #254f1a;
    --decorative-mustard: #d6a337;
    --decorative-maroon: #780016;
    --decorative-leaf: #ebffc5;
    --decorative-moss: #e8efd6;
    --icon-primary: #ffffff;
    --icon-secondary: #ebffc5;
    --icon-accent: #d2e823;
    --surface-inverse: #000000;
    --surface-code: #222222;
    --surface-code-alt: #1e2330;
    --surface-white: #ffffff;
    --overlay-subtle: #00000033;
    --overlay-scrim: #00000099;
    --border-overlay: #ffffff;
    --border-neutral: #676b5f;
    --status-info-foreground: #2665d6;
    --status-danger-foreground: #ae2f37;
    --layout-page-padding: 64px;
    --layout-section-gap: 80px;
    --layout-grid-gap: 24px;
    --layout-card-padding: 24px;
    --layout-control-gap: 12px;
    --layout-inline-gap: 8px;
    --stroke-default: 2px;
    --stroke-emphasis: 3px;
    --radius-control: 8px;
    --radius-card: 32px;
    --radius-hero: 64px;
    --radius-pill: 9999px;
  }
}
```

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = { theme: { extend: {

  colors: {
    'color-black': '#000000',
    'color-white': '#ffffff',
    'color-linen': '#f3f3f1',
    'color-neutral-100': '#f4f4f2',
    'color-neutral-200': '#eeeeec',
    'color-neutral-300': '#e8e8e6',
    'color-silver': '#c7c8cb',
    'color-concrete': '#adadad',
    'color-sage': '#676b5f',
    'color-midnight': '#1e2330',
    'color-charcoal': '#222222',
    'color-lime': '#d2e823',
    'color-leaf': '#ebffc5',
    'color-moss': '#e8efd6',
    'color-lavender': '#e9c0e9',
    'color-cobalt': '#2665d6',
    'color-cobalt-deep': '#061492',
    'color-forest': '#254f1a',
    'color-mustard': '#d6a337',
    'color-maroon': '#780016',
    'color-info-soft': '#d9e2ff',
    'color-danger-soft': '#ffdad8',
    'color-danger': '#ae2f37',
    'color-black-20': '#00000033',
    'color-black-40': '#00000066',
    'color-black-60': '#00000099',
    'color-black-80': '#000000cc',
    'surface-canvas': '#f3f3f1',
    'surface-card': '#ffffff',
    'surface-subtle': '#eeeeec',
    'text-primary': '#000000',
    'text-secondary': '#676b5f',
    'text-accent': '#254f1a',
    'border-strong': '#000000',
    'border-subtle': '#c7c8cb',
    'action-primary-background': '#d2e823',
    'action-primary-text': '#000000',
    'action-secondary-background': '#ffffff',
    'action-secondary-text': '#000000',
    'status-info-background': '#d9e2ff',
    'status-danger-background': '#ffdad8',
    'decorative-lavender': '#e9c0e9',
    'decorative-cobalt': '#2665d6',
    'decorative-cobalt-deep': '#061492',
    'decorative-forest': '#254f1a',
    'decorative-mustard': '#d6a337',
    'decorative-maroon': '#780016',
    'decorative-leaf': '#ebffc5',
    'decorative-moss': '#e8efd6',
    'icon-primary': '#000000',
    'icon-secondary': '#676b5f',
    'icon-accent': '#254f1a',
    'surface-inverse': '#000000',
    'surface-code': '#222222',
    'surface-code-alt': '#1e2330',
    'surface-white': '#ffffff',
    'overlay-subtle': '#00000033',
    'overlay-scrim': '#00000099',
    'border-overlay': '#00000033',
    'border-neutral': '#676b5f',
    'status-info-foreground': '#2665d6',
    'status-danger-foreground': '#ae2f37',
  },
  spacing: {
    'space-0': '0px',
    'space-2': '2px',
    'space-4': '4px',
    'space-6': '6px',
    'space-8': '8px',
    'space-10': '10px',
    'space-12': '12px',
    'space-14': '14px',
    'space-16': '16px',
    'space-18': '18px',
    'space-20': '20px',
    'space-22': '22px',
    'space-24': '24px',
    'space-26': '26px',
    'space-40': '40px',
    'space-48': '48px',
    'space-64': '64px',
    'space-80': '80px',
    'space-128': '128px',
    'space-192': '192px',
    'space-216': '216px',
    'font-tracking-012': '0.11999999731779099px',
    'font-tracking-neg-028': '-0.2800000011920929px',
    'font-tracking-neg-016': '-0.1599999964237213px',
    'font-tracking-neg-036': '-0.36000001430511475px',
    'font-tracking-neg-048': '-0.47999998927116394px',
    'font-tracking-neg-067': '-0.6700000166893005px',
    'font-tracking-neg-219': '-2.190000057220459px',
    'font-tracking-neg-344': '-3.440000057220459px',
    'stroke-standard': '2px',
    'stroke-emphasis': '3px',
    'layout-page-padding': '64px',
    'layout-section-gap': '80px',
    'layout-grid-gap': '24px',
    'layout-card-padding': '24px',
    'layout-control-gap': '12px',
    'layout-inline-gap': '8px',
    'stroke-default': '2px',
  },
  borderRadius: {
    'radius-0': '0px',
    'radius-8': '8px',
    'radius-12': '12px',
    'radius-16': '16px',
    'radius-18': '18px',
    'radius-20': '20px',
    'radius-24': '24px',
    'radius-28': '28px',
    'radius-32': '32px',
    'radius-64': '64px',
    'radius-pill': '9999px',
    'radius-organic': '1000px',
    'radius-control': '8px',
    'radius-card': '32px',
    'radius-hero': '64px',
    'radius-pill': '9999px',
  },
  fontWeight: {
    'font-weight-regular': '400',
    'font-weight-medium': '500',
    'font-weight-bold': '700',
    'font-weight-display': '800',
    'typography-caption-font-weight': '400',
    'typography-body-sm-font-weight': '400',
    'typography-body-font-weight': '400',
    'typography-body-lg-font-weight': '400',
    'typography-subheading-font-weight': '700',
    'typography-heading-sm-font-weight': '700',
    'typography-heading-font-weight': '800',
    'typography-display-font-weight': '800',
  },
}}};
```

---

*Generated on 2026-09-19 by **DesignOps Tools: DesignBridge v2.1** from "Workshop Vibe Design".*
*Spec: [google-labs-code/design.md](https://github.com/google-labs-code/design.md) · Format version: alpha*
*[designops.tools](https://designops.tools) — Bridge your Figma design system to any AI tool.*
