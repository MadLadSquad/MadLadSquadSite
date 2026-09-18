# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The source for the MadLadSquad website (<https://madladsquad.com>), a [Hugo](https://gohugo.io) site deployed to GitHub Pages by `.github/workflows/pages.yml`. Content is Markdown; the only client-side code is `assets/index.js` (a small vanilla-JS enhancement layer) and `assets/main.css`.

## Building

```bash
git submodule update --init   # docs/ wiki submodules
hugo server                    # local preview at http://localhost:1313/
hugo --minify                  # production build into public/
```

CI pins Hugo extended `HUGO_VERSION` in `pages.yml`; keep it in sync when upgrading locally.

## URLs are a contract

Published URLs must never change. GitHub Pages serves `foo.html` at `/foo`, and every link uses that form (mixed case, no trailing slash, no `.html`). `hugo.toml` preserves this with `uglyURLs = true` and `disablePathToLower = true`, and a `cascade` stops section list pages (`/docs`, `/monthly-newsletter`, …) from being rendered. When linking, write root-relative clean URLs such as `/desktop` or `/docs/UntitledImGuiFramework/Home`.

## Layout

- `content/`: the site's own pages. `content/foo.md` → `/foo`, `content/monthly-newsletter/<year>/<Month>.md` → `/monthly-newsletter/<year>/<Month>`. `README.md` at the repo root is mounted as the homepage (`content/_index.md`) so GitHub still displays it.
- Pages need no front matter. The `<title>` is the page's first heading (`layouts/_partials/title.html`); set `title:` in front matter to override it.
- `docs/<Project>/` holds git submodules of each project's GitHub **wiki** (see `.gitmodules`). They are **never edited here**. `content/docs/_content.gotmpl` is a Hugo content adapter that publishes them at `/docs/<Project>/<Page>`. It appends `_Sidebar.md` to every page, skips `_`-prefixed files, and rewrites `github.com/MadLadSquad/<X>/wiki` links to `/docs/<X>`. It sets `url` explicitly because wiki page names contain characters (`[ ] : & ( ) ,`) that Hugo would otherwise strip from paths. `content/docs/docs.md` is the `/docs/docs` index page.
- `layouts/`: `baseof.html` (page shell, highlight.js), `_partials/` (head meta, nav in `header.html`, footer with twemoji), `404.html`, and `_markup/` render hooks (`render-table.html` wraps tables in `<div class="table">`; `render-link.html` makes `https://madladsquad.com/…` links root-relative; `render-blockquote.html` turns GitHub alerts (`> [!NOTE]` …) into `<div class="note">` etc., styled in `main.css`).
- `assets/main.css` and `assets/index.js` are built with esbuild (`css.Build`/`js.Build`) and published at `/main.css` and `/index.js`.
- `static/`: copied verbatim (`CNAME`, `uimgui.svg`).
- Code blocks are left as `<pre><code class="language-x">` (`markup.highlight.codeFences = false`) and highlighted client-side by highlight.js.
- Raw HTML in Markdown is enabled (`goldmark.renderer.unsafe`). Pages rely on it, e.g. `<div id="search-bar">` and `<div id="demo-div">`, which `index.js` fills in.

## Generated content

- The artist table on `/modus-mio-artists` is generated at build time from `static/modus-mio-artists.csv` (also published at `/modus-mio-artists.csv`) by the `{{% modus-mio-table %}}` shortcode (`layouts/_shortcodes/modus-mio-table.html`). Edit the CSV, not the page. `index.js` adds a live filter box (`#search-bar`) over this table; UI strings there are in Bulgarian.
- The `update-dependencies.yaml` workflow auto-bumps all submodules four times daily onto the `auto` branch and opens a tracking issue. This is the source of the `auto` commits in history.

## Conventions

- `index.js` deliberately defines `$()` as a `getElementById` helper (not jQuery).
- Hugo shortcode syntax (`{{< >}}`/`{{% %}}`) is interpreted in all content, including the wiki submodules. Plain `{{ }}` is not.
