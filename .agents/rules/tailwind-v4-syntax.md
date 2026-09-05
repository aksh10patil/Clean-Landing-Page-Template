# Tailwind CSS v4 Project Rules

This repository uses Tailwind CSS v4. Always adhere to v4 syntax and avoid deprecated v3 conventions:

1. **Imports & Configuration**:
   - Do NOT create or edit `tailwind.config.js`.
   - The project uses `@import "tailwindcss";` in `app/globals.css`.
   - Define custom theme tokens and design variables inside `@theme` or `@theme inline` blocks in `app/globals.css`.

2. **Gradients**:
   - Use `bg-linear-to-*` or direct angles like `bg-linear-45` instead of `bg-gradient-to-*`.
   - For radial/conic gradients, use `bg-radial-*` or `bg-conic-*`.
   - Color interpolation modifiers are supported (e.g. `bg-linear-to-r/oklch`).

3. **Colors & Opacity**:
   - Use slash opacity syntax: `bg-primary/20`, `text-muted-foreground/70`.
   - Do NOT use `text-opacity-*` or `bg-opacity-*`.

4. **Shadows**:
   - The default subtle shadow is `shadow-xs` or `shadow-sm`.
   - Colored drop shadows are supported natively: `drop-shadow-<color>`.
   - Native text shadows: `text-shadow-*` (e.g. `text-shadow-sm`, `text-shadow-sky-400`).

5. **Container Queries & Layout**:
   - Container queries are built-in without plugins: use `@container`, `@sm:*`, `@md:*`, `@max-md:*`.
   - Implicit groups: prefer `in-hover:*` instead of requiring a `.group` class on parent elements when possible.
   - For auto-growing textareas, use `field-sizing-content`.

6. **Masks**:
   - Use native mask utilities: `mask-radial-at-*`, `mask-t-from-*`, `mask-b-to-*` (refer to `.agents/rules/tailwind-v4-masks.md`).
