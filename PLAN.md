# Plan

## Success observation

Every About-page biography ends with the requested residence sentence. London and San Francisco appear without a state or country; every other current city includes its state or country.

## Verification method

Run lint/build, then open the real About page on localhost, expand all six cards, and inspect their rendered text.

## Pass criteria

- Reworr’s biography ends with `He lives in London.`
- Dmitrii Volkov’s biography ends with `He lives in San Francisco.` exactly once.
- Roger Brent’s biography ends with `He lives in Seattle, Washington.`
- Oleg Serikov’s biography ends with `He lives in Tbilisi, Georgia, and plans to live in London.`
- Michael Marletta’s biography ends with `He lives in Berkeley, California.`
- Alejandro Colman-Lerner’s biography ends with `He lives in Buenos Aires, Argentina.`
- The sentences render in the matching About cards on localhost, and `npm run lint` and `npm run build` pass.
- Verification completes in under one minute.

## Steps

1. [x] Add the six residence sentences to the canonical biography Markdown files.
   > **Agent:** None — foreground in the main session, with no worktree or model override; six one-line content edits are tightly scoped and faster to verify together.
2. [x] Regenerate site content and run lint/build.
   > **Agent:** None — foreground in the main session, with no worktree or model override; the existing content generator owns the Markdown-to-app boundary.
3. [x] Start localhost and inspect every expanded biography in the rendered About page.
   > **Agent:** None — foreground in the main session, with no worktree or model override; one browser pass can verify all six cards and the exact punctuation.
