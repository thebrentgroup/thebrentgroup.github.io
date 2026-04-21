# CLAUDE.md

Ensure `direnv` is active before working — run `direnv allow` if the shell env looks wrong.

## Project

Landing site for The Brent Group (Unconventional AI × Bio Countermeasures), a research org applying for SFF funding in 2026. The site must be reachable at `https://thebrentgroup.github.io` and serves as the public "Organization website" referenced in the grant application.

See `spec.md` for the v1 scope (source of truth).

## Architecture

- Jekyll site using the default `minima` theme. GitHub Pages builds automatically on push to `main` — no CI needed.
- Single page (`index.md`) with five sections: Mission, People, Org chart (inline), Publications, Document hub, Contact.
- Repo name must be `thebrentgroup.github.io` on GitHub (the magic name that triggers org-root Pages).

Expected layout once site files are in place:
```
_config.yml     # theme: minima; title; description
index.md        # single page, all sections
README.md       # human-facing repo readme
.gitignore      # _site/, .jekyll-cache/
```

## Local preview (optional)

`ruby` and `bundler` are in the nix dev shell. For local preview:
```
bundle init && bundle add jekyll minima github-pages
bundle exec jekyll serve
```
Not required — GH Pages builds on push.

## Editing workflow

Only Oleg edits. Edit `index.md`, commit, push to `main`. GH Pages rebuilds in ~1 minute. Adding a Google Doc link = swap a `TODO` marker for a link.

## Non-goals (v1)

No custom domain, no redirect infra, no PDF mirroring, no multi-page structure, no CI, no analytics. See `spec.md` "Out of Scope".

## Python template leftovers

This repo was scaffolded from `oserikov/template-cc` (Python + Typst template). The `paper-typst/`, `experiment/`, `pyproject.toml`, `build.ninja`, and `uv`/`ruff` scaffolding are unused for a Jekyll site. Leave in place, or delete when cleaning up.
