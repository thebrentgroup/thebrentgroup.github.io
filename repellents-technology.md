---
layout: page
title: LLM Repellents — live demo
permalink: /repellents-technology/
---

*A working demonstration of one of the two countermeasures we propose to deploy.*

## What are LLM Repellents?

The AI-enabled biological risk has greatly increased recently. We have learned how to trigger low-level safety mechanisms innate to modern AIs with concrete bits of information added to biological information and software of dual-use nature. This increases friction in AI-assisted work on potentially harmful biological topics **at zero cost to AI developers**. We call this technology **LLM Repellents**.

Repellents are designed for deployment on key sources of online biological knowledge — we have already secured signed letters of interest from the chiefs of both arXiv and bioRxiv, and our PI's professional network enables further distribution at similar scale. This work is one of the first three streams (W1–W3) of the present proposal, alongside our [LLM Honeypots](/honeypots-monitoring-technology/) monitoring technology and the effort to expand widespread adoption.

## The demo

> **[Open the live demo →](/repellents-effect-example/)**

The demo presents **nine real dual-use biology papers** — the same papers flagged as particularly interesting in [Williams et al. (2026)](https://www.rand.org/pubs/research_reports/RRA4490-1.html)'s risk-scoring analysis of AI-enabled biological design. For each paper, two versions are shown side-by-side:

- **Original** — the paper as published.
- **Canary** — the same paper with an LLM repellent watermark added.

In the production deployment on arXiv and bioRxiv, the watermarks will be **invisible to humans**. They are shown here only for ease of perception, so that the reader can see exactly what the paper looks like to a downstream AI model. The technology works: the watermark reliably triggers the model's built-in refusal behavior on the very content it was trained to refuse.

## How to read the demo

Each tab switches between the nine papers. The top pane shows the original; the bottom pane shows the canary version. Drag the handle to resize. The nine papers are the ones Williams et al. unearthed as genuinely alarming dual-use work — the exact class of material we need AI agents to treat with friction rather than as free training signal.

## References

- Williams, A. E., Del Castello, B., Lee, J., Roberts, D., Tarangelo, J. P., Atanda, J., Colman-Lerner, A., Gerold, J., & Brent, R. (2026). *Developing a risk-scoring tool for artificial intelligence–enabled biological design.* RAND RR-A4490-1. <https://www.rand.org/pubs/research_reports/RRA4490-1.html>
- Barkan et al. (in prep., RAND). *LLM Repellents* — the technical framework extended by W1.1 of the present proposal.
