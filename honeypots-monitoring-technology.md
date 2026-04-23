---
layout: page
title: Volkov, Serikov, and coworkers — expertise and relevant prior work
permalink: /honeypots-monitoring-technology/
---

*Palisade-era AI-safety work that underwrites the monitoring component of the present proposal.*

Volkov, Serikov, and colleagues continue to carry out relevant work on AI-enabled harm. In an earlier demonstration, Volkov and team showed that current AI systems can autonomously execute harmful end-to-end offensive actions (Bondarenko et al. 2025). In 2024–2025, Volkov and colleagues ([Volkov et al. (2025)](https://palisaderesearch.org/blog/biollama) and Dev, 2025) contributed to a study that made safety-degraded open-weight LLMs and fine-tuned those into being biology lab assistants. Brent and coworkers contributed training materials for that project, and became acquainted with Volkov during the course of that work.

In continuing work, Reworr and Volkov (2024a and 2024b) have deployed honeypot infrastructure that has to date captured and analyzed **over 1.7 million interactions** with weakly defended Linux systems in 10 countries. The system distinguishes AI-agent traffic from conventional bot traffic. This is a working surveillance system for which we maintain codebase and operational experience.

## How this feeds the proposal

Aim 1.2 of the project uses this experience to build the "license plate reader" run-time intervention, one of the two new run-time interventions proposed here.

If resources permit, in order to better surveill agentic traffic, we will also seek to deploy LLM monitors on key repositories of online biological knowledge. We have already secured cooperation from Richard Sever and Stein Sigurdsson, chiefs of bioRxiv, medRxiv, and arXiv, setting up the grounds for this proposed further collaboration, and will seek to engage PubMed Central in the National Library of Medicine if/when executive branch turmoil in the US DHHS diminishes. We will seek to enlist Reworr to continue improving the effectiveness of the monitoring technology, and we will report our real-world findings and analytics.

## References

- Bondarenko, A., Ryzhenkov, F., Turtayev, R., and Volkov, D. (2025). End-to-end hacking with AI agents. Palisade Research, 12 September 2025. <https://palisaderesearch.org/blog/end-to-end-hacking>
- Dev, S., Teague, C., Ellison, G., Brady, K., Lee, J., Gebauer, S.L., Bradley, H.A., Maciorowski, D., Persaud, B., Despanie, J., Del Castello, B., Worland, A., Miller, M., Salas, A., Nguyen, D., Liu, J., Johnson, J., Sloan, A., Stonehouse, W., Merrill, T., Goode, T., McKelvey, G., Jr., and Guest, E. (2025). *Toward Comprehensive Benchmarking of the Biological Knowledge of Frontier Large Language Models.* RAND Corporation, RR-A3797-1. <https://www.rand.org/pubs/research_reports/RRA3797-1.html>
- Reworr and Volkov, D. (2024). LLM Agent Honeypot: Monitoring AI Hacking Agents in the Wild. arXiv:2410.13919. <https://arxiv.org/abs/2410.13919>
- Reworr, R. and Volkov, D. (2024). *LLM Agent Honeypot.* arXiv:2410.13919. <https://palisaderesearch.org/blog/llm-honeypot>
- Volkov, D., Petrov, A., Petukhov, V., Bikmaev, K., and Volk, D. (2025). Biollama: testing biology pre-training risks. Palisade Research. <https://palisaderesearch.org/blog/biollama>
