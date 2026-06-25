# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The source for the MadLadSquad website (<https://madladsquad.com>), deployed to GitHub Pages. It is a **static site generator**: content is authored as Markdown, converted to HTML with pandoc, run through a custom templating step, then post-processed for deployment. There is no runtime backend — the only client-side code is `index.js` (a small vanilla-JS enhancement layer) and `main.css`.

## Build pipeline

The full build is a sequence of shell scripts, orchestrated by `.github/workflows/pages.yml`. Run them in this order from the repo root:

1. **`./clone-docs.sh`** — operates on the `docs/` submodules (each is a project's GitHub *wiki*, see `.gitmodules`). Appends each project's `_Sidebar.md` to its pages, rewrites `github.com/MadLadSquad/<X>/wiki` links to `madladsquad.com/docs/<X>`, and temporarily renames `docs/UVKBuildTool` → `docs/UVKBuildToolN` to avoid colliding with the top-level `UVKBuildTool/` tool submodule.
2. **`./run.sh`** — invokes the built `UVKBuildTool` binary, which runs the templating engine. It reads `uvproj.yaml`, executes `custom-pre-generation-commands` (which calls `generate-html.sh build/` to pandoc-convert all `.md` → `.html` using `template.html`), then resolves `{{ include ... }}` directives in `.tmpl.html` files.
3. **`./ci-clean.sh`** — flattens `build/` output into the repo root, deletes source dirs, and rewrites relative URLs to absolute `https://madladsquad.com/` ones, stripping `.html`/`index.html` suffixes for clean URLs.

`ci-clean.sh` is **destructive** — it `rm -rf`s `*.md`, `docs/`, `Components/`, `.github/`, etc. Only run it in CI or a throwaway checkout, never in your working tree.

### Building the UVKBuildTool binary

`run.sh`/`ci-clean.sh` depend on a compiled `UVKBuildTool` (a C++ submodule). Build it with:

```bash
cd UVKBuildTool/ && ./setup-web.sh ..
```

This CMake-builds the tool with `-DUBT_COMPILING_FOR_WEB=ON`, copies `UBTCustomFunctions/` into it, and creates `Translations/`. Requires `cmake`, a C++ compiler, and `libyaml-cpp-dev`. Pandoc and GNU `parallel` are also required for `generate-html.sh`.

### Local preview

`uvproj.yaml`'s `localhost-commands` rewrite URLs to `http://0.0.0.0:8080/` and serve via `python3 -m http.server 8080`. The tool runs these unless `run-localhost-automatically: false` is set (CI appends that line).

## Authoring content

- **Pages** are Markdown files at the repo root (e.g. `desktop.md`, `games.md`, `utilities.md`) and in `monthly-newsletter/<year>/`. `README.md` becomes `index.html`. The H1 (`# Title`) of each file becomes its `<title>`.
- **Templates** (`template.html`, `Components/*.tmpl.html`) use two distinct syntaxes — don't confuse them:
  - `$title$` / `$body$` are **pandoc** template variables (filled during `generate-html.sh`).
  - `{{ include Components/foo.tmpl.html }}` is **UntitledTemplatingEngine** syntax (resolved later by `run.sh`). The engine uses a lisp-like language; `{{ raw ... }}` escapes content (see how `clone-docs.sh` wraps `UntitledTemplatingEngine/Templating-guide.md`).
- The site nav lives in `Components/header.tmpl.html`; shared `<head>` and footer in the other `Components/*.tmpl.html`.
- `uvproj.yaml` controls the tool: `filename-blacklist` (dirs to skip), `allowed-extensions`, and `intermediate-extensions` (`.tmpl.html` files are templating inputs, not output).

## Generated content

- `modus-mio-artists.md`'s artist table is generated from `modus-mio-artists.csv` by `Scripts/generate-modus-mio-table.py` (run with CWD = `Scripts/`; it appends to `../modus-mio-artists.md`). Edit the CSV, not the generated table. `index.js` adds a live filter box (`#search-bar`) over this table; UI strings there are in Bulgarian.
- `docs/` content is **never edited here** — it comes from each project's wiki submodule. The `update-dependencies.yaml` workflow auto-bumps all submodules four times daily onto the `auto` branch and opens a tracking issue. This is the source of the `auto` commits in history.

## Conventions

- `UBTCustomFunctions/UBTCustomFunctions.cpp` is a C++ hook (`funcExportMain`) compiled into the web build of UVKBuildTool to expose custom templating functions; it's currently a no-op stub guarded by `#ifdef UBT_TARGET_WEB`.
- `index.js` deliberately defines `$()` as a `getElementById` helper (not jQuery).
