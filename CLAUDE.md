# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio for Usman Ghani, served as a plain static site by GitHub Pages at https://usmanghani.soargamesstudio.com/. There is no build step, package manager, linter, or test suite. Pushing to `main` publishes.

## Run locally

```bash
python -m http.server 8000   # then open http://localhost:8000
```

`.claude/launch.json` defines the same server on port 8765. Pages must be served over HTTP (not opened as `file://`) for paths to behave like production.

## Architecture

The site is data-driven: content lives in one file and a single script renders both pages from it.

- `data.js` defines a global `const PORTFOLIO = { profile, about, extraStats, skills, experience, projectCategories, projects, lab, education, certifications }`. It is meant to be edited by a non-developer, so it is heavily commented and ends `projects` with a commented-out TEMPLATE block. Keep that style when changing its shape, and update the README's "How to update it" table if a field's meaning changes.
- `assets/js/site.js` is one IIFE that reads `PORTFOLIO` and fills empty container elements (`#hero`, `#stats`, `#skillsGrid`, `#timeline`, `#projectsGrid`, `#filters`, `#labGrid`, `#eduList`, `#certList`, `#contactBox`, `#project`, `#footer`, `#logo`) via template strings. It dispatches on `<body data-page="home|project">`.
- `index.html` and `project.html` are mostly static shells: section headings and empty containers. `project.html?id=<project.id>` renders a single project's detail page.
- `assets/css/site.css` uses CSS custom properties on `:root`, overridden under `:root[data-theme="light"]`. The theme is set before paint by an inline script in each HTML `<head>` (from `localStorage.theme`, else `prefers-color-scheme`) and toggled by `#themeBtn`.
- Bootstrap Icons are vendored in `assets/vendor/bootstrap-icons/`; any `icon` field in `data.js` is a Bootstrap Icons class name like `bi-github`.

Behaviours derived in `site.js` rather than stored in data:
- Years of experience come from `experience` start/end dates; dates are `"YYYY-MM"` or `"present"`, and any other string (e.g. `"2021 – 2022"`) is displayed verbatim.
- Projects sort with `featured: true` first, then by the first `YYYY(-MM)` found in `date`. Category filter buttons only appear for categories actually used, and `category` must be a key of `projectCategories`.
- A project's `video` is parsed for a YouTube ID and embedded via youtube-nocookie; `images` falls back to `[cover]`; `description` paragraphs split on blank lines.
- All data strings pass through `esc()` before insertion. Keep that for any new field rendered as HTML.

## Gotchas

- GitHub Pages is case-sensitive: image paths in `data.js` must match file names in `assets/img/` exactly. New images should be lowercase with no spaces.
- To replace the CV, overwrite `assets/Usman_Ghani_CV.pdf` keeping the same name.
- `github-profile/` is git-ignored; it belongs to the separate `UsmanGhaniCode/UsmanGhaniCode` repo.
