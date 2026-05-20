# brentlab.org — recovered archive, handoff bundle

This bundle is the static recovered web presence of the Brent group, ready for
publication on GitHub Pages at **brentlab.org**.

## What's in this bundle

The directory you're reading this from is the publishable site root. Two
archives live underneath it:

- **The Brent Lab at Fred Hutchinson Cancer Research Center** — original at
  `brentlab.fredhutch.org`, lab pages from roughly 2009 to 2024. Lobby:
  `brent/index.html`.
- **The Molecular Sciences Institute** — original at `molsci.org`, from
  roughly 1996 to 2009. Lobby: `external/molsci.org/index.html`.

The top-level entry page (`index.html`) frames both archives with cards
linking into each lobby. There is also a small WordPress and Squarespace
blog archive under `external/brentlab.org/systems/` and
`external/brentlab.net/blog/`, surfaced from the Fred Hutch lobby.

Approximately 1,013 HTML pages, ~400 MB total including assets.

## Critical: this site MUST be served from the domain root

The archive uses absolute root-relative paths throughout — links like
`/etc.clientlibs/foundation/clientlibs/main.min.css` and
`/external/molsci.org/index.html`. These only resolve when the contents of
this directory sit at the root of the served URL space.

- ✅ `https://brentlab.org/index.html`
- ✅ `https://brentlab.org/brent/index.html`
- ❌ `https://brentlab.org/site/index.html` (would break every stylesheet and cross-page link)

In practice that means: put the **contents** of this directory at the root of
the publishing repo (or in `/docs` configured as the GitHub Pages source).
Do not commit this directory as a subfolder.

## Publishing files already in place

- `.nojekyll` (empty file) — tells GitHub Pages not to run Jekyll on the
  archive. Without this, paths starting with `_` would be hidden.
- `CNAME` — contains the single line `brentlab.org`. Tells GitHub Pages this
  is the custom domain.

Both belong at the repo root next to `index.html`.

## DNS setup (once)

GitHub Pages knows to serve `brentlab.org` because of the `CNAME` file, but
DNS for `brentlab.org` itself has to point at GitHub. At the apex domain,
add four `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optionally, a `www.brentlab.org` `CNAME` record pointing at
`<github-username>.github.io`.

GitHub's docs:
<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>

DNS propagation usually takes minutes to hours. After DNS verifies, GitHub
Pages will automatically provision a Let's Encrypt TLS certificate; that
adds another few minutes.

## Things in the archive that look like bugs but are intentional

### The H5N1 missing-documents notice

Across four pages in `brent/en/center-biological-futures/` —
`document-repository.html`, `documentrepository.html`, `viral-library.html`,
and `virallibrary.html` — 196 links that originally pointed at policy PDFs
about the 2011 H5N1 transmissibility research now point at
`brent/en/center-biological-futures/notice-missing-documents.html`. The
notice explains that those specific documents were not preserved in this
archive. Visible link text on each page was left unchanged. This is
deliberate, not a recovery failure.

### 18 references to a missing `ResearchResourcesPage.html`

The original Fred Hutch site had a page at
`/brent/en/ResearchResourcesPage.html` that was referenced from 18 other
pages but was not recovered (it appears to no longer exist on the live
host either). Those 18 references remain in place as broken links pointing
at the missing path, on the chance that a future recovery effort fills it
in. Do not "fix" them by rewriting or deleting them.

### MSI redirect stubs

`external/molsci.org/www.molsci.org/Redirect*.html` (15 small files) are
the original CMS's "this URL has moved" placeholders. Their meta-refresh
URLs were rewritten to point at the MSI archive lobby instead of the
now-dead `www.molsci.org/` root. So they will redirect visitors arriving
via old bookmarks into the archive rather than out to a 404.

## First-publish spot-check list

After deploying, please verify the following pages render correctly with
their original CSS and that internal links work:

1. `https://brentlab.org/` — top-level index, both cards render with styling
2. `https://brentlab.org/brent/index.html` — Fred Hutch lobby, full nav
3. `https://brentlab.org/external/molsci.org/index.html` — MSI lobby
4. `https://brentlab.org/brent/en/research.html` — original FH page,
   verifies the absolute-path CSS chain
5. `https://brentlab.org/brent/en/center-biological-futures/document-repository.html`
   then click any link in the document list — should land on the
   notice-missing-documents page
6. `https://brentlab.org/external/molsci.org/www.molsci.org/Dispatch/index.html`
   — a sample MSI Dispatch page
7. `https://brentlab.org/external/brentlab.org/systems/index.html` — the
   WordPress "Systems" blog era

If any of those load with broken styling, almost certainly the absolute
path issue described above — verify the bundle's contents are at the
served root.

## Origin of this recovery

The archives were reassembled in May 2026 by Claude (Opus 4.7) working
from web-archive snapshots and other publicly available copies. The
reassembly is read-only: nothing here was authored, only recovered. Where
cross-references could not be resolved they were left as broken pointers
rather than rewritten or invented.

Questions about the recovery itself: ask Roger.
