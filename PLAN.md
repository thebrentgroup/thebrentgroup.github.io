# Plan

## Success observation

At desktop widths, the Strategy heading and paragraph are right-aligned while retaining the shared heading-bottom and paragraph-top geometry; mobile stays left-aligned in natural reading order.

## Verification method

Run lint/build and inspect computed text alignment alongside heading-bottom and paragraph-top geometry at desktop and mobile widths.

## Pass criteria

- Heading bottom edges differ by no more than 1px at desktop widths.
- Paragraph top edges differ by no more than 1px at desktop widths.
- Strategy heading and paragraph compute to right alignment on desktop and left alignment on mobile.
- Mobile reading order remains lead heading, lead paragraph, Strategy heading, Strategy paragraph.
- `npm run lint` and `npm run build` pass.

## Steps

1. [x] Right-align the Strategy heading and paragraph at desktop widths.
   > **Agent:** None — foreground in the main session; no worktree or model override because this is a two-class presentation adjustment.
2. [x] Verify text alignment, existing row geometry, mobile behavior, and repository checks.
   > **Agent:** None — foreground in the main session; no worktree or model override because browser-computed styles directly evaluate the change.
