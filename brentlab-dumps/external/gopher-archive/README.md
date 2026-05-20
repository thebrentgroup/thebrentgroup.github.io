# site/external/gopher-archive

This directory was created by the 2026-05-06 `probe-gopher-archive`
scheduled task as the intended destination for any Brent-lab content
recovered from preserved Gopherspace archives.

**It is empty by design.** The probe found 0 attributable hits across:

- Internet Archive Gopher-related collections (the `gopherarchive` collection
  identifier referenced in the task brief does not exist on IA; the closest
  preserved set, `2007-gopher-mirror`, postdates the MGH Brent lab gopher
  era by 11+ years)
- 35+ IA search-API queries against metadata and full text
- Common Crawl 2008-2009 and 2013-20 indices for any
  `*mgh.harvard.edu*brent*` URL pattern (all returned `404 No Captures
  found`)
- The QUUX gopher mirror (origins explicitly enumerated, none Brent-related)

Floodgap (`gopher.floodgap.com`) and per-item IA download subdomains were
blocked at the Cowork egress firewall, so two probe paths could not be
exercised automatically: the Floodgap vstat usage page and grepping
`tar-filelist.txt` (108 MB) inside the Goerzen 2007 mirror. Both are
documented in `../../../gopher_findings.md`.

See `gopher_findings.md` in `brentlab_recovery/` for the full probe log.
