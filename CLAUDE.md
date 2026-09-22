# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The source for the MadLadSquad website (<https://madladsquad.com>), a [Hugo](https://gohugo.io) site deployed to GitHub Pages by `.github/workflows/pages.yml`. Content is Markdown; the only client-side code is `assets/index.js` (a small vanilla-JS enhancement layer) and `assets/main.css`.

## Building

```bash
git submodule update --init   # docs/ wiki submodules
npm ci                         # front-end dependencies bundled by Hugo (fonts, highlight.js, twemoji)
hugo server                    # local preview at http://localhost:1313/
hugo --minify                  # production build into public/
```

CI pins Hugo extended `HUGO_VERSION` in `pages.yml`; keep it in sync when upgrading locally.

## URLs are a contract

Published URLs must never change. GitHub Pages serves `foo.html` at `/foo`, and every link uses that form (mixed case, no trailing slash, no `.html`). `hugo.toml` preserves this with `uglyURLs = true` and `disablePathToLower = true`, and a `cascade` stops section list pages (`/docs`, `/monthly-newsletter`, …) from being rendered. When linking, write root-relative clean URLs such as `/desktop` or `/docs/UntitledImGuiFramework/Home`.

## Layout

- `content/`: the site's own pages. `content/foo.md` → `/foo`, `content/monthly-newsletter/<year>/<Month>.md` → `/monthly-newsletter/<year>/<Month>`. `README.md` at the repo root is mounted as the homepage (`content/_index.md`) so GitHub still displays it.
- Pages need no front matter. The `<title>` is the page's first heading (`layouts/_partials/title.html`); set `title:` in front matter to override it.
- `docs/<Project>/` holds git submodules of each project's GitHub **wiki** (see `.gitmodules`). They are **never edited here**. `content/docs/_content.gotmpl` is a Hugo content adapter that publishes them at `/docs/<Project>/<Page>`. It passes `_Sidebar.md` to every page as `params.sidebar` (rendered by `single.html` as a docs navigation rail, a collapsible "Contents" panel on narrow screens) and the project name as `params.project` (for the "All docs / <Project>" breadcrumb), skips `_`-prefixed files, and rewrites `github.com/MadLadSquad/<X>/wiki` links to `/docs/<X>`. It sets `url` explicitly because wiki page names contain characters (`[ ] : & ( ) ,`) that Hugo would otherwise strip from paths. `content/docs/docs.md` is the `/docs/docs` index page.
- `layouts/`: `baseof.html` (page shell), `_partials/` (head meta, Material 3 top app bar and narrow-screen nav drawer in `header.html` + `nav-items.html`, footer with the privacy policy link), `404.html`, and `_markup/` render hooks (`render-table.html` wraps tables in `<div class="table">`; `render-link.html` makes `https://madladsquad.com/…` links root-relative; `render-blockquote.html` turns GitHub alerts (`> [!NOTE]` …) into `<div class="note">` etc., styled in `main.css`).
- The UI is Material 3 style on the original palette; colours, shapes and motion are `--md-*` tokens at the top of `main.css`. `index.js` drives the nav drawer, the app bar's `scrolled` elevation and the docs nav's active link.
- `assets/main.css` and `assets/index.js` are built with esbuild (`css.Build`/`js.Build`) and published at `/main.css` and `/index.js`.

## Everything is self-hosted

The privacy policy (`content/privacy-policy.md`) promises that pages load nothing from third parties, so never add CDN links, Google Fonts, hotlinked images or third-party embeds. Dependencies come from npm (`package.json`) and are bundled at build time:

- highlight.js (common languages + cmake) and `@twemoji/api` are imported by `index.js`; the highlight.js theme is `@import`ed by `main.css`.
- Ubuntu and JetBrains Mono come from `@fontsource`, imported by `assets/fonts.css`, which is built to `/fonts/fonts.css` so the font files land in `/fonts/`.
- Twemoji SVGs are mounted from `node_modules/@twemoji/svg` to `/twemoji/` in `hugo.toml`.
- Images for the site's own pages live in `static/images/` (newsletter images under `static/images/monthly-newsletter/<year>/<Month>/`). The logo/favicon are `static/logo.png` and `static/favicon.png`.
- Wiki images are downloaded at build time by `content/docs/_content.gotmpl` (see the comment there).
- `static/`: copied verbatim (`CNAME`, `uimgui.svg`).
- Code blocks are left as `<pre><code class="language-x">` (`markup.highlight.codeFences = false`) and highlighted client-side by the bundled highlight.js.
- Raw HTML in Markdown is enabled (`goldmark.renderer.unsafe`). Pages rely on it, e.g. `<div id="search-bar">` and `<div id="demo-div">`, which `index.js` fills in.

## Generated content

- The artist table on `/modus-mio-artists` is generated at build time from `static/modus-mio-artists.csv` (also published at `/modus-mio-artists.csv`) by the `{{% modus-mio-table %}}` shortcode (`layouts/_shortcodes/modus-mio-table.html`). Edit the CSV, not the page. `index.js` adds a live filter box (`#search-bar`) over this table; UI strings there are in Bulgarian.
- The `update-dependencies.yaml` workflow auto-bumps all submodules four times daily onto the `auto` branch and opens a tracking issue. This is the source of the `auto` commits in history.

## Conventions

- `index.js` deliberately defines `$()` as a `getElementById` helper (not jQuery).
- Hugo shortcode syntax (`{{< >}}`/`{{% %}}`) is interpreted in all content, including the wiki submodules. Plain `{{ }}` is not.
