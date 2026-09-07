# Plan

## Success observation

The About lead has a centered, three-line, full-width headline above two black column headings: `Countermeasures` and `Strategy`. The headline uses multiplication signs, keeps `AI × CHEM` and `AI × BIO` together on its middle desktop line, and renders both terms in black while the remaining words retain the existing gradient.

## Verification method

Run lint/build, then inspect computed text, position, font, and color in the real page at desktop and mobile widths.

## Pass criteria

- The full-width headline appears before both columns and uses the Charon typeface.
- At desktop width, the centered headline is explicitly split into `Building countermeasures and plans`, `against foreseeable AI × CHEM and AI × BIO`, and `contingencies`.
- `AI × CHEM` and `AI × BIO` share the middle line, use multiplication signs, and compute to black; the rest of the headline retains the green-to-blue gradient treatment.
- The left heading reads only `Countermeasures`; the right reads `Strategy`; both compute to black.
- The existing two-column desktop layout, stacked mobile order, and page overflow behavior remain intact.
- `npm run lint` and `npm run build` pass.
- Verification completes in under one minute.

## Steps

1. [x] Update the About content model with the new overarching headline and `Countermeasures` column heading.
   > **Agent:** None — foreground in the main session, with no worktree or model override; the copy and generated-content contract are a small coupled content change.
2. [x] Restructure and restyle the lead so the headline spans both columns, its AI terms are black, and both column headings are black.
   > **Agent:** None — foreground in the main session, with no worktree or model override; one component owns the complete lead hierarchy and responsive layout.
3. [x] Apply the centered three-line refinement, then run repository checks and verify typography, colors, hierarchy, responsive order, and overflow in the browser.
   > **Agent:** None — foreground in the main session, with no worktree or model override; a single browser flow can measure the rendered result at both target widths.
