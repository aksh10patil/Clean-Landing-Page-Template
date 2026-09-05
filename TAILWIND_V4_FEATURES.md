# Tailwind CSS v4: Comprehensive Guide to What's New & Syntax Changes

Tailwind CSS v4 is a ground-up architectural rewrite built around the **Oxide engine** and native modern CSS features. It completely transitions Tailwind from a JavaScript-configured preprocessor to a lightning-fast, CSS-first styling engine.

---

## Table of Contents
1. [Core Architectural Breakthroughs](#1-core-architectural-breakthroughs)
2. [CSS-First Configuration (`@theme`, `@source`, `@utility`)](#2-css-first-configuration)
3. [Breaking Syntax Changes vs Tailwind v3](#3-breaking-syntax-changes-vs-tailwind-v3)
4. [New CSS & Layout Features (v4.0 – v4.3)](#4-new-css--layout-features)
   - [Container Queries in Core](#container-queries-in-core)
   - [3D Transforms](#3d-transforms)
   - [Expanded Gradient APIs](#expanded-gradient-apis)
   - [`@starting-style` Variant (Pure CSS Transitions)](#starting-style-variant)
   - [`not-*` Variant](#not--variant)
   - [Mask Utilities (v4.1)](#mask-utilities-v41)
   - [Text Shadows & Colored Drop Shadows (v4.1)](#text-shadows--colored-drop-shadows-v41)
   - [Device Variants & Baseline Alignment (v4.1)](#device-variants--baseline-alignment-v41)
   - [New Neutral Palettes & Webpack Plugin (v4.2)](#new-neutral-palettes--webpack-plugin-v42)
   - [Scrollbars, Container Size, Zoom & Tab (v4.3)](#scrollbars-container-size-zoom--tab-v43)
5. [Additional Modern Utilities & Variants](#5-additional-modern-utilities--variants)
6. [Migration Quick Reference (v3 to v4)](#6-migration-quick-reference)

---

## 1. Core Architectural Breakthroughs

### The Oxide Engine (Rust / Lightning CSS)
- **High-performance Rust compiler**: Full builds are **3.5x to 5x faster**, and incremental builds are up to **100x+ faster** (often executing in under 1 millisecond / microseconds).
- **All-in-one bundling**: Bundling `@import` rules, autoprefixer vendor prefixing, and CSS minification are handled natively via Lightning CSS. You no longer need separate `postcss-import` or `autoprefixer`.

### Single Import & Zero-Config Content Detection
- **Single line setup**: Replace `@tailwind base; @tailwind components; @tailwind utilities;` with simply:
  ```css
  @import "tailwindcss";
  ```
- **Automatic template discovery**: No more manual `content: [...]` arrays in config! Tailwind automatically scans your project tree, respects your `.gitignore` to avoid traversing `node_modules` or build directories, and excludes binary file extensions automatically.

### Dedicated Tooling Packages
- Vite plugin: `@tailwindcss/vite`
- PostCSS plugin: `@tailwindcss/postcss`
- Webpack plugin: `@tailwindcss/webpack`
- Standalone CLI: `@tailwindcss/cli`

---

## 2. CSS-First Configuration

Tailwind v4 deprecates `tailwind.config.js` in favor of defining tokens and extensions directly in CSS using `@theme` and standard CSS custom properties.

### The `@theme` Directive
Tokens defined inside `@theme` are registered as utility classes and generated as native CSS custom properties on `:root`:

```css
@import "tailwindcss";

@theme {
  /* Fonts */
  --font-display: "Satoshi", sans-serif;

  /* Custom breakpoints */
  --breakpoint-3xl: 1920px;

  /* Custom colors (accessible via bg-avocado-500, text-avocado-500, etc.) */
  --color-avocado-500: oklch(0.84 0.18 117.33);

  /* Custom easings */
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
}
```

#### `@theme inline`
When you want utility classes to reference external runtime CSS variables (like Shadcn UI themes or CSS variables dynamically switched via dark mode):

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --radius-lg: var(--radius);
}
```

### `@source` (Adding or Excluding Scan Paths)
If you need to scan an external component package in `node_modules` or exclude specific heavy directories:

```css
/* Include external library */
@source "../node_modules/@my-org/ui-kit";

/* Ignore directory (v4.1+) */
@source not "./dist";

/* Safelist specific classes dynamically (v4.1+) */
@source inline("grid-cols-7", "bg-red-500");
```

### `@utility` & `@custom-variant`
Define custom utilities and pseudo-state variants cleanly:

```css
/* Define a custom utility */
@utility tab-4 {
  tab-size: 4;
}

/* Custom dark mode variant matching .dark class anywhere in parent tree */
@custom-variant dark (&:where(.dark, .dark *));
```

---

## 3. Breaking Syntax Changes vs Tailwind v3

| v3 Syntax | v4 Replacement | Reason / Note |
|---|---|---|
| `@tailwind base; ...` | `@import "tailwindcss";` | Unified single CSS import |
| `tailwind.config.js` | `@theme { ... }` in CSS | Native CSS-first token configuration |
| `bg-gradient-to-r` | `bg-linear-to-r` | Renamed to distinguish linear, radial & conic gradients |
| `bg-gradient-to-tr` | `bg-linear-to-tr` or `bg-linear-45` | Angle values now natively supported |
| `shadow` | `shadow-sm` | Default shadow renamed; what was `shadow-sm` is now `shadow-xs` |
| `text-opacity-50` / `bg-opacity-50` | `text-black/50`, `bg-blue-500/50` | Removed old separate opacity utilities |
| `group` / `group-hover` | `in-hover:*` | Implicit group targeting without adding `.group` |
| Plugins: `@tailwindcss/container-queries` | Native core utilities (`@container`, `@md:*`) | Integrated into core |
| Colors: sRGB hex/rgb | OKLCH (P3 wide gamut) by default | More vivid colors on modern displays |

---

## 4. New CSS & Layout Features

### Container Queries in Core
Container queries are now built into the core framework without plugins:

```html
<div class="@container">
  <!-- Adapts based on container width rather than viewport -->
  <div class="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4">
    <!-- ... -->
  </div>

  <!-- Max-width container query -->
  <div class="@max-md:block hidden">
    <!-- ... -->
  </div>

  <!-- Container query range -->
  <div class="@min-md:@max-xl:hidden">
    <!-- ... -->
  </div>
</div>
```

*(v4.3 Addition: `@container-size` enables queries based on container height as well as width).*

---

### 3D Transforms
Style 3D perspective, rotation, and depth right in HTML without custom CSS:

```html
<div class="perspective-distant">
  <div class="transform-3d rotate-x-45 rotate-z-30 translate-z-12 backface-hidden">
    3D Card
  </div>
</div>
```
- **Utilities**: `transform-3d`, `transform-flat`, `perspective-none`, `perspective-distant`, `perspective-normal`, `perspective-origin-*`, `rotate-x-*`, `rotate-y-*`, `rotate-z-*`, `translate-z-*`, `scale-z-*`, `backface-visible`, `backface-hidden`.

---

### Expanded Gradient APIs
1. **Direct Angles**:
   ```html
   <div class="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500"></div>
   ```
2. **Color Interpolation Spaces**:
   Control the color space used to interpolate between colors (prevents muddy grayish midpoints):
   ```html
   <div class="bg-linear-to-r/oklch from-indigo-500 to-teal-400"></div>
   <div class="bg-linear-to-r/srgb from-indigo-500 to-teal-400"></div>
   ```
3. **Radial & Conic Gradients**:
   ```html
   <div class="bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
   <div class="bg-conic/[in_hsl_longer_hue] from-red-600 to-red-600"></div>
   ```

---

### `@starting-style` Variant
Animate elements upon entry/mount (such as native `<dialog>` and `popover`) purely with CSS, without JavaScript:

```html
<div popover class="transition-discrete starting:open:opacity-0 starting:open:scale-95 opacity-100 scale-100 duration-300">
  Popover content
</div>
```

---

### `not-*` Variant
Negate any pseudo-class, media query, or feature test:

```html
<!-- Applies when NOT hovered -->
<div class="not-hover:opacity-75">Hover me</div>

<!-- Negates media queries or feature queries -->
<div class="not-supports-hanging-punctuation:px-4">Fallback text</div>
```

---

### Mask Utilities (v4.1)
Native utilities for CSS masking with images or gradients:

- **Radial Masks**:
  - `mask-radial-from-<percentage>` (e.g. `mask-radial-from-50%`)
  - `mask-radial-to-<percentage>` (e.g. `mask-radial-to-100%`)
  - `mask-radial-at-<position>` (e.g. `mask-radial-at-center`, `mask-radial-at-top`)
  - `mask-radial-circle`, `mask-radial-ellipse`
- **Directional Linear Masks** (uses abbreviated directions `t`, `b`, `l`, `r`):
  - Top: `mask-t-from-80%`, `mask-t-to-100%`
  - Bottom: `mask-b-from-50%`, `mask-b-to-100%`
  - Left / Right: `mask-l-from-*`, `mask-r-from-*`

---

### Text Shadows & Colored Drop Shadows (v4.1)
- **Text Shadows**: `text-shadow-2xs`, `text-shadow-xs`, `text-shadow-sm`, `text-shadow-md`, `text-shadow-lg`, `text-shadow-none`.
  - Supports color modifiers: `text-shadow-sky-400`, `text-shadow-black/25`.
- **Colored Drop Shadows**: `drop-shadow-indigo-500/50`.

---

### Device Variants & Baseline Alignment (v4.1)
- **Device input queries**: `pointer-coarse` (touch devices), `pointer-fine` (mouse/trackpad), `any-pointer-fine`.
- **Baseline alignment**: `items-baseline-last`, `self-baseline-last` (aligning multi-line flex/grid items to the last text baseline).
- **Text wrapping**: `overflow-wrap-normal`, `overflow-wrap-anywhere`, `overflow-wrap-break-word`.

---

### New Neutral Palettes & Webpack Plugin (v4.2)
- **4 new neutral-adjacent color palettes**:
  - `mauve-*` (violet-tinted slate)
  - `olive-*` (warm green-tinted gray)
  - `mist-*` (cool airy gray)
  - `taupe-*` (warm earthen gray)
- **Expanded logical spacing**: `pbs-*` (padding-block-start), `mbe-*` (margin-block-end), `inset-inline-*`.
- **OpenType Font Features**: `font-features-*` for ligatures, small caps, tabular figures.
- **`@tailwindcss/webpack`**: Native first-party Webpack plugin.

---

### Scrollbars, Container Size, Zoom & Tab (v4.3)
- **First-party Scrollbar styling**: Native scrollbar color and sizing utilities (`scrollbar-*`).
- **`@container-size`**: Container queries targeting both height and width.
- **`zoom-*` utilities**: CSS `zoom` property support.
- **`tab-*` utilities**: Control the rendered character width of tab stops (e.g. `tab-2`, `tab-4`).
- **Default functional utility values**: Functional utilities can now be invoked bare or with values.

---

## 5. Additional Modern Utilities & Variants

- **Auto-resizing textareas**: `field-sizing-content` (expands textarea height to fit content without JavaScript).
- **Dark scrollbars & native inputs**: `color-scheme-dark` and `color-scheme-light`.
- **Layered Inset Shadows**: `inset-shadow-*` and `inset-ring-*` allow stacking up to 4 distinct shadow layers on a single element.
- **Variable Font Width**: `font-stretch-*` (e.g. `font-stretch-condensed`, `font-stretch-expanded`).
- **Inert State**: `inert:*` variant for styling elements flagged with HTML `inert`.
- **Implicit Groups (`in-*`)**: Target parent states without adding a `.group` class to the parent:
  ```html
  <div class="hover:... cursor-pointer">
    <span class="in-hover:text-blue-500">Changes when parent is hovered</span>
  </div>
  ```
- **Dynamic Numeric Arbitrary Values**:
  You no longer need square brackets for numerical scales:
  - `grid-cols-15` (works dynamically without configuration)
  - `px-29`, `w-17`, `mt-8` (dynamically calculated using `calc(var(--spacing) * N)`)

---

## 6. Migration Quick Reference (v3 to v4)

### Automated Upgrade Tool
Run Tailwind's official migration CLI on a clean branch:
```bash
npx @tailwindcss/upgrade
```
This automatically:
1. Replaces `@tailwind` directives in your CSS with `@import "tailwindcss";`.
2. Converts `tailwind.config.js` settings into `@theme` CSS declarations.
3. Updates `bg-gradient-to-*` to `bg-linear-to-*`.
4. Adjusts shadow names (`shadow` -> `shadow-sm`, etc.).
5. Installs `@tailwindcss/postcss` or corresponding Vite plugin.

### Minimum Supported Browsers
Tailwind CSS v4 targets modern standards-compliant browsers:
- Safari 16.4+
- Chrome / Edge 111+
- Firefox 128+
