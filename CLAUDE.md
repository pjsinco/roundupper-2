# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run deploy    # Build + deploy to GitHub Pages (gh-pages)
```

No test suite exists in this project.

## What This App Does

Roundupper is an **email HTML builder** — a tool for composing and copying HTML/plain-text for email campaigns. Each route is a self-contained block editor where a user fills out a form on the left, sees a live preview on the right, and copies the resulting HTML or text.

Deployed to GitHub Pages at base path `/roundupper-2/`.

## Architecture

### Core Pattern: Form → Preview → Copy

Every block component follows this pattern:
- **Left pane** (`slot:form`): Input fields rendered via a Pug template
- **Right pane** (`slot:render-container`): Live preview rendered via a Pug template
- **Copy buttons**: Copy HTML or plain text to clipboard via `clipboard.js`

The `Workspace.vue` component provides the split-pane shell. All block components use it.

### Component Organization

- `src/components/aoa-general/` — AOA General email block components
- `src/components/experiment/` — Experimental/in-progress components
- `src/components/newsletter/`, `affiliates/`, `the-do/` — Section-specific components
- `src/pages/` — Top-level page wrappers that render child routes (one per section)

### Pug Templates

Each component's form and render HTML is defined in Pug files, compiled and injected as raw HTML strings. Templates live in:

```
src/views/
  generic/        # Shared across sections
    forms/
    renders/
  aoa-general/
    forms/
    renders/
  experiment/
    forms/
    renders/
  ...
  includes/       # Shared partials (copy-button.pug, toast.pug, variables.pug, etc.)
```

Templates are imported in Vue components using:
```js
import formHtml from '../../views/.../form.pug?raw'
import renderHtml from '../../views/.../render.pug?raw'
```

Then injected via `v-html`. Reactive data is bound by setting `innerHTML` after computing values.

### Composables (`src/composables/`)

Shared logic lives in composables:
- `renderer-*.js` — `marked` renderer configs for each section (custom token renderers)
- `styles-base-*.js` — Base inline style strings for email HTML
- `useButtonFunctions.js` — Copy HTML/text functions with clipboard + toast feedback
- `useButtonSetup.js` — Wires up copy button click handlers
- `useIconListMarkdown.js`, `useGetIconListItem.js` — Icon list helpers
- `useMarkedStyleAttributesExtension.js` — Custom `marked` extension for inline style attrs

### Constants (`src/constants/`)

Centralized style strings and configuration for each section:
- `master-styles.js` — Shared base styles
- `aoa-general/styles.js`, `newsletter/styles.js`, etc. — Section-specific inline styles

### Routing

Routes are defined in `src/router/index.js`. Each section (`/experiment`, `/aoa-general`, etc.) has child routes. Each child route maps to a Vue component via lazy import. Adding a new block requires:
1. Creating a component in `src/components/<section>/`
2. Adding Pug form/render templates in `src/views/<section>/` (or `generic/`)
3. Adding the child route in `router/index.js`

## Key Conventions

- **Vue 3 Composition API** — Uses `setup()` function, not `<script setup>` syntax
- **No state management library** — State is local `ref()`/`reactive()` in components + composables
- **Email-safe HTML output** — Rendered HTML uses tables, inline styles, Outlook conditional comments
- **CodeMirror v5** — Used for markdown textarea editors; editors are initialized per-item after DOM mount via `nextTick`
- **`marked` v17** — Markdown parsing; custom renderers per section in `composables/renderer-*.js`
- **Prettier** — `printWidth: 72` (see `.prettierrc`)
- **SCSS** — Global styles in `src/assets/styles.scss`; `@/` alias maps to `src/`
