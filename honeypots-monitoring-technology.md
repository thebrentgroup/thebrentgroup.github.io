---
layout: page
title: Honeypots and monitoring technology
permalink: /honeypots-monitoring-technology/
---

*Palisade-era AI-safety work that underwrites the monitoring component of the present proposal.*

Volkov, Serikov, and colleagues have produced precedent-setting results on the AI × bio axis and on AI-enabled harm more broadly. [Volkov et al. (2025)](https://palisaderesearch.org/blog/biollama) tested whether LLMs can be fine-tuned into biology lab assistants; Brent and coworkers contributed training materials for that project, and both parties demonstrated complementary capabilities in the collaboration. In an earlier demonstration, the Palisade team showed that current AI systems can autonomously execute harmful end-to-end offensive actions ([Palisade Research, 2024a](https://palisaderesearch.org/blog/end-to-end-hacking)), establishing a broader "AI enables harm" track record.

## LLM Honeypots — the core monitoring capability

The AI-enabled biological risk has greatly increased recently, and we have developed and deployed a monitoring tool — **LLM Honeypots** — that lets us detect and monitor the engagement of AI agents with online resources of our choice.

[Volkov et al. (2024)](https://palisaderesearch.org/blog/llm-honeypot) deployed honeypot infrastructure that has to date captured and analyzed **over 1.7 million interactions across 10 countries**, and that distinguishes AI-agent traffic from conventional bot traffic. This is not a laboratory demo: it is a working surveillance layer with operational experience, field-tested detection heuristics, and a codebase maintained by the same team now proposing its application to biological knowledge sources.

## How this feeds the proposal

W1.2 of the proposed work inherits this infrastructure directly for the **"license plate reader"** component: we reuse working code, operational experience, and knowledge of how to deploy honeypots at scale, rather than building from scratch.

We will deploy LLM Honeypots on key sources of online biological knowledge. We have already secured signed letters of interest from the chiefs of both arXiv and bioRxiv, setting up the grounds for further collaboration; our PI's wide professional and personal network enables further distribution at similar scale. Within this stream of work we will continue improving the effectiveness of the monitoring technology and report our real-world findings and analytics.

## References

- Palisade Research (2024a). *End-to-end autonomous AI hacking.* <https://palisaderesearch.org/blog/end-to-end-hacking>
- Volkov, D., et al. (2024). *LLM Agent Honeypot.* arXiv:2410.13919. <https://palisaderesearch.org/blog/llm-honeypot>
- Volkov, D., et al. (2025). *Biollama: Testing biology pre-training risks.* <https://palisaderesearch.org/blog/biollama>
