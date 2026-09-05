# Tailwind CSS v4 Mask Utilities

Tailwind CSS v4 includes native built-in CSS mask utilities (`mask-*`) that automatically generate `-webkit-mask-image`, `mask-image`, CSS variables, and composites:

## Radial Masks
- **Radial From**: `mask-radial-from-<percentage>` (e.g., `mask-radial-from-1%`, `mask-radial-from-50%`, `mask-radial-from-100%`)
- **Radial To**: `mask-radial-to-<percentage>` (e.g., `mask-radial-to-70%`, `mask-radial-to-90%`, `mask-radial-to-100%`)
- **Radial Position**: `mask-radial-at-<position>` (e.g., `mask-radial-at-center`, `mask-radial-at-top`, etc.)
- **Radial Shape / Size**: `mask-radial-circle`, `mask-radial-ellipse`

## Directional Linear Masks
Directional masks use abbreviated direction prefixes (`t`, `b`, `l`, `r`):
- **Top**: `mask-t-from-<percentage>` (e.g. `mask-t-from-80%`), `mask-t-to-<percentage>`
- **Bottom**: `mask-b-from-<percentage>`, `mask-b-to-<percentage>`
- **Left**: `mask-l-from-<percentage>`, `mask-l-to-<percentage>`
- **Right**: `mask-r-from-<percentage>`, `mask-r-to-<percentage>`

Avoid using full direction words like `mask-top-*` — always use the abbreviated form (`mask-t-*`).
