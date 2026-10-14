# Plan

## Success observation

The About page publications list contains one linked citation for the Brent and Colman-Lerner 2026 preprint, in place of its “in prep” placeholder, and the change is pushed to `origin/main`.

## Verification method

Inspect the canonical Markdown and generated output, run lint and the production build, confirm the rendered list contains the correct link exactly once, then compare local and remote commit IDs after pushing.

## Pass criteria

- Entry 3 names both authors, gives 2026, links to `https://www.preprints.org/manuscript/202610.0605`, and no longer says “in prep”.
- The rendered publications list contains that link exactly once.
- `npm run lint` and `npm run build` pass. Verification target: under one minute.
- Local `main` and `origin/main` point to the same new commit after push.

## Steps

1. [x] Confirm the preprint metadata and locate the publications source of truth.
   > **Agent:** None — foreground in the main session, without a worktree or model override; this is one citation in one content file.
2. [x] Replace the draft citation with the published preprint citation.
   > **Agent:** None — foreground in the main session, without a worktree or model override; the existing Markdown entry already identifies the same work.
3. [x] Run the content, lint, build, and rendered-link checks.
   > **Agent:** None — foreground in the main session, without a worktree or model override; the checks are short and sequentially depend on the content edit.
4. [ ] Commit and push the verified update, then confirm the remote commit ID.
   > **Agent:** None — foreground in the main session, without a worktree or model override; publishing the single reviewed diff is a sequential Git operation.
