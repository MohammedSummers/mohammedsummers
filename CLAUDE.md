# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Production build to dist/
npm run lint     # ESLint check
npm run preview  # Preview production build locally
```

## Architecture

This is a personal portfolio site built with React 19 + Vite. It uses a single-page application pattern with client-side navigation (no router library).

### Navigation Pattern

`App.jsx` manages page state via `useState`. The `PAGES` object maps page names to components. Clicking nav links calls `setPage()` to swap the rendered component. No URL routing—all navigation is in-memory.

### Content Data

All site content (experience, projects, skills, contact info) lives in `src/data/content.js`. This is the single source of truth—update this file to change any copy on the site.

### Structure

- `src/components/` - Reusable UI (Nav, Footer)
- `src/pages/` - Page-level components (HomePage, AboutPage, ExperiencePage, ProjectsPage, ContactPage)
- `src/data/content.js` - All text content and data
- `src/index.css` - Global styles including light/dark theme
- `public/` - Static assets (favicon, icons)

### Theme Toggle

Light/dark mode is toggled via `lightMode` state in App.jsx. The `.light` class on the root container switches CSS custom properties.
