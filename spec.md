# thebrentgroup.github.io — Landing Page Spec

## Problem

The Brent Group (Unconventional AI × Bio Countermeasures) is a freshly-forming research organization applying for SFF funding in 2026. The grant application requires a public organization website and a stable URL for the "Organization website" field (currently TODO). Additionally, the grant ecosystem (SFF advisors, speculation grantors, preprint-server partners, other funders) needs a permanent, viewable-by-anyone landing point that links to organization materials — many of which today live in Google Docs and will migrate later.

## Smallest Useful Version

A Jekyll site deployed at `https://thebrentgroup.github.io` containing five sections (Mission, People, Publications, Document hub, Contact) and an inline org chart. Links out to existing Google Docs / external publications. TODOs are marked visibly where URLs are not yet final. No redirect infrastructure, no custom domain, no PDF mirroring in v1.

## In Scope (v1)

- GitHub org `thebrentgroup` created via `gh`.
- Repository `thebrentgroup.github.io` under that org (the magic name that makes GitHub Pages serve at `https://thebrentgroup.github.io`).
- Jekyll site using the default `minima` theme (zero-config, GH Pages builds it automatically).
- Single-page layout (index.md) with sections:
  1. **Mission** — one-paragraph blurb adapted from the grant app's "What you do" and "Plan for impact":
     > "We develop technical countermeasures that make dangerous biological software harder for AI agents to misuse, and machine-legible warning notices embedded in preprints that enter the pre-training corpora of near-future AI models. Work is coordinated with leadership at arXiv and bioRxiv and with developers of biological design tools."
  2. **People** — short bios (2–4 sentences each) for Roger Brent (PI), Oleg Serikov (Researcher), Dmitrii Volkov (Advisor). Sourced from the "Key Individuals" descriptions in the rolling application. Postdoc-level hire listed as "Planned hire, Q3 2026".
  3. **Org chart (inline)** — simple ASCII/Markdown or SVG diagram showing PI → (Researcher, Advisor, Planned Postdoc). Must be static markup committed to the repo — not a link to a Google Doc.
  4. **Publications / Links of Interest** — linked list of the concrete URLs already available:
     - Brent, McKelvey & Matheny (2024), *Foreign Affairs* — `https://www.foreignaffairs.com/world/new-bioweapons-covid-biology`
     - Williams et al. (2026), RAND RR-A4490-1 — `https://www.rand.org/pubs/research_reports/RRA4490-1.html`
     - Brent & McKelvey (2025), arXiv:2506.13798
     - Brent (2005), *In the valley of the shadow of death*, MIT DSpace — `https://dspace.mit.edu/handle/1721.1/34914`
     - Palisade Research (2024), End-to-end autonomous AI hacking — `https://palisaderesearch.org/blog/end-to-end-hacking`
     - Volkov et al. (2024), LLM Agent Honeypot — `https://palisaderesearch.org/blog/llm-honeypot`, arXiv:2410.13919
     - Volkov et al. (2025), Biollama — `https://palisaderesearch.org/blog/biollama`
     - Explainer LinkedIn post (Williams et al.) — `https://www.linkedin.com/feed/update/urn:li:activity:7428597484945321984/`
     - Future-work LinkedIn post (Williams et al.) — `https://www.linkedin.com/feed/update/urn:li:activity:7443501693507661824/`
  5. **Document hub** — grant-application documents that SFF advisors / funders need to reach. Entries where we have URLs get linked; entries where we don't get a visible `TODO` marker. Expected entries:
     - Long-form SFF attachment (TODO)
     - Base budget (TODO)
     - Ambitious budget (TODO)
     - Anonymized compensation (TODO)
     - Org chart (served inline on this page; separate link optional)
     - Charity verification (Palisade Research Inc, EIN 93-1591014) (TODO)
  6. **Contact** — "Contact: Oleg Serikov — srkvoa@gmail.com" as a plain line. No form, no obfuscation, no Roger contact.
- `README.md` with a one-paragraph description and a "How to edit" pointer: edit `index.md`, commit, push; GH Pages rebuilds automatically.
- GitHub Pages enabled via `gh` (or repo setting) on the `main` branch root.

## Out of Scope (v1)

- Redirect infrastructure (`/budget` → Google Doc). Deferred; user said "later we will migrate".
- PDF mirroring of Google Docs.
- Custom domain (e.g. thebrentgroup.org).
- Multi-page structure (`/people`, `/publications` as separate URLs).
- Letters of support hosting (arXiv, bioRxiv LoS remain "provided upon request").
- News/updates log, blog, RSS.
- GitHub Actions CI, linting, link-checking.
- Any dynamic functionality (forms, analytics, comments).
- Roger's public contact info.
- Logo / custom branding beyond minima defaults.

## Design

### Repo layout
```
thebrentgroup.github.io/
├── _config.yml          # theme: minima; title; description; minimal config
├── index.md             # single page, all sections
├── README.md            # human-facing repo readme
└── .gitignore           # _site/, .jekyll-cache/, Gemfile.lock optional
```

No `Gemfile` needed if we rely on GH Pages' built-in minima — but one can be added for local preview.

### Maintenance workflow
- Only Oleg edits. Workflow: edit `index.md` in his editor, commit, push to `main`. GitHub Pages rebuilds in ~1 minute.
- Adding a new Google Doc link = swap a `TODO` span for an `<a>` or markdown link in `index.md`.

### Authorship / provenance
- All content in v1 is extracted from the two grant application docx files (`Brent Group SFF Funding Rolling Application.docx` and `Brent Group SFF long-form attachment.docx`) under `/Users/oleg/obsidian-notes/Notes/Roger Documents/`. Claude writes the markdown; Roger and Oleg review before the site is publicized in any grant application.

## Execution Steps

1. `gh auth status` — confirm Oleg is authenticated.
2. `gh api user/orgs` or `gh org list` — check whether `thebrentgroup` org exists; if not, create via `gh api -X POST /orgs ...` (note: GitHub's REST API no longer allows org creation via unauthenticated API for personal accounts — may require the web UI at `github.com/organizations/new`). **Quick-failure checkpoint:** if org creation via `gh` is blocked, fall back to asking the user to create it in the browser, then proceed.
3. `gh repo create thebrentgroup/thebrentgroup.github.io --public --description "Brent Group — Unconventional AI × Bio Countermeasures"`.
4. Locally: initialize repo, write `_config.yml`, `index.md`, `README.md`, `.gitignore`.
5. `git push -u origin main`.
6. `gh api -X POST /repos/thebrentgroup/thebrentgroup.github.io/pages -f source.branch=main -f source.path=/` — enable Pages. (Alternatively via repo settings UI.)
7. Verify the site is live: `curl -sSf https://thebrentgroup.github.io | head`.

### Quick-failure checkpoints
- Step 2 fails → stop, hand off to user to create the org manually.
- Step 3 fails (org exists but you lack admin) → stop.
- Step 6 fails → site may still build automatically for `<org>.github.io` repos; verify step 7 before treating it as a failure.

## Done Criteria

- [ ] `https://thebrentgroup.github.io` returns HTTP 200 and renders.
- [ ] All five sections + inline org chart are visible on the landing page.
- [ ] Every external URL in the Publications section resolves (200 or 3xx).
- [ ] Document hub shows each SFF-required doc, with a live link or a visible `TODO`.
- [ ] Contact line shows `srkvoa@gmail.com` exactly.
- [ ] Repo is public under `thebrentgroup` org; `README.md` explains how to edit.
- [ ] Oleg has push access and has verified he can make a small edit and see it live within ~2 min.

## Open Questions / TODOs for Oleg

- Final URLs for: long-form attachment, base budget, ambitious budget, anonymized compensation, charity verification screenshot.
- Confirm postdoc title / "planned hire" phrasing is OK to publish before Reworr (or other candidate) commits.
- Does Volkov want to be listed publicly as a paid advisor, or phrased more neutrally?
- Should the page disclose the fiscal-sponsor relationship with Palisade Research? (Recommended yes — it's already public in grant context.)
