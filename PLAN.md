# Plan

## Success observation

The bio chevron sits closer to the preview text while retaining its full click target and folding behavior.

## Verification method

Run lint/build, then measure the rendered bio-to-button spacing and exercise a fold control in the real page.

## Pass criteria

- The button's top margin computes to 8px rather than 20px.
- The visible chevron remains centered inside a 44×44px click target.
- The bio-fold interaction remains usable.
- `npm run lint` and `npm run build` pass.
- Verification completes in under one minute.

## Steps

1. [x] Reduce the shared bio-to-chevron margin without shrinking the control.
   > **Agent:** None — foreground in the main session, with no worktree or model override; this is a single spacing-token adjustment in the shared card component.
2. [x] Run repository checks and verify computed spacing and folding behavior.
   > **Agent:** None — foreground in the main session, with no worktree or model override; one browser measurement directly covers every card instance.
