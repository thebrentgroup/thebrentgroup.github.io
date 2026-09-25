# Plan

## Success observation

All six People cards expose a consistent upper-right CV control. The four newly supplied CVs open as PDFs for Dmitrii Volkov, Reworr, Michael Marletta, and Alejandro Colman-Lerner.

## Verification method

Convert the two DOCX sources to PDFs and inspect every rendered page; copy all four assets into the site; add canonical profile metadata; then run lint/build and inspect/click all six CV controls on localhost at desktop and mobile widths.

## Pass criteria

- Reworr's and Dmitrii Volkov's DOCX files produce legible PDFs with no clipping, overlap, missing glyphs, or broken pagination.
- Michael Marletta's and Alejandro Colman-Lerner's supplied PDFs are copied without alteration.
- Each of the six People cards renders exactly one accessible CV link to the correct PDF.
- Long names and roles do not overlap the CV control.
- The People grid has no horizontal overflow at desktop or mobile widths.
- `npm run lint` and `npm run build` pass.
- Site verification completes in under one minute after document conversion.

## Steps

1. [x] Convert and visually verify the Reworr and Volkov DOCX CVs; inspect the supplied Marletta and Colman-Lerner PDFs.
   > **Agent:** None — foreground in the main session, with no worktree or model override; document conversion and visual QA are tightly coupled to the four exact source files.
2. [x] Copy the four final PDFs into site assets and add their URLs to canonical person metadata.
   > **Agent:** None — foreground in the main session, with no worktree or model override; four small data additions share the existing CV content pipeline.
3. [x] Run lint/build and exercise all six controls on localhost at desktop and mobile widths.
   > **Agent:** None — foreground in the main session, with no worktree or model override; one browser pass can verify all link targets, collisions, and responsive overflow.
