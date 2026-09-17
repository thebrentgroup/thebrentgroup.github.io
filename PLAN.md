# Plan

## Success observation

At normal zoom, each document-plus-`CV` lockup optically matches the two-line name-and-role header. At browser zoom of 150% and above, the same vertical lockup compacts to the visible height of one header line. In both modes, its visible right edge aligns with the right edge of the shared text block.

## Verification method

Inspect the browser's reliable zoom signal, implement the compact mode without coupling it to ordinary narrow layouts, then measure visible-ink bounds at 100% and 150% zoom on localhost. Run lint and the production build.

## Pass criteria

- At normal zoom, the visible icon/name tops and `CV`/role bottoms remain within 1px.
- At 150% zoom, the compact icon-plus-`CV` lockup fits within the visible top and bottom of one header line, within 1px.
- Zoom detection does not compact the control solely because the viewport is narrow.
- The icon and `CV` are right-aligned to the same max-width block as the name, role, and biography.
- Both CV links remain functional and the page has no horizontal overflow.
- `npm run lint` and `npm run build` pass.
- Verification completes in under one minute.

## Steps

1. [x] Determine a reliable browser-zoom signal, implement the one-line-height compact lockup, and align it to the text block's right edge.
   > **Agent:** None — foreground in the main session, with no worktree or model override; zoom behavior and shared-card styling must be calibrated together in the live page.
2. [x] Verify visible-ink geometry at 100% and 150% zoom, then run lint/build.
   > **Agent:** None — foreground in the main session, with no worktree or model override; direct zoom and pixel checks exercise the requested browser boundary.
