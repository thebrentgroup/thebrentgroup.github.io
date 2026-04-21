# thebrentgroup.github.io

Landing page for **The Brent Group** (Unconventional AI × Bio Countermeasures), served at <https://thebrentgroup.github.io>. Single-page Jekyll site on the default `minima` theme; GitHub Pages builds automatically on push to `main`.

## How to edit

Edit `index.md`, commit, push to `main`. GitHub Pages rebuilds in about one minute. Adding a new Google Doc link = swap a `TODO` marker in `index.md` for a Markdown link.

## Local preview (optional)

Requires Ruby + Bundler (provided by the nix dev shell in this repo's scaffolding):

```bash
bundle init && bundle add jekyll minima github-pages
bundle exec jekyll serve
```

Not required — GitHub Pages builds on push.

## Scope

See `spec.md` for the v1 scope and `CLAUDE.md` for architecture notes.
