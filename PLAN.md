# Plan

## Success observation

The document-plus-`CV` lockup keeps its optically aligned two-line-header height at every browser zoom level, including 150% and above.

## Verification method

Remove zoom-dependent CV rendering, inspect the localhost geometry at normal and high zoom, then run lint and the production build.

## Pass criteria

- The CV lockup renders with the same icon size, label size, and 42px optical-stack height at normal and high zoom.
- The visible icon/name tops and `CV`/role bottoms remain within 1px.
- The icon and label remain aligned to the text block's right edge.
- Both CV links remain functional and the page has no horizontal overflow.
- `npm run lint` and `npm run build` pass.
- Verification completes in under one minute.

## Steps

1. [x] Remove zoom detection and the compact CV variant.
   > **Agent:** None — foreground in the main session, with no worktree or model override; this is a small reversal contained in the About page and shared card.
2. [x] Verify fixed two-line geometry at normal and high zoom, then run lint/build.
   > **Agent:** None — foreground in the main session, with no worktree or model override; direct browser geometry confirms the requested invariant.
