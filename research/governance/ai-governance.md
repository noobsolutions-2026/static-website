---
title: "AI Governance"
domain: governance
date: 2026-06-15
tags: [ai-governance, risk, policy, controls, accountability]
one_liner: "The system of policies, roles, and controls by which an organisation directs and constrains its use of AI — so the benefits are captured and the harms are bounded."
key_questions:
  - "Why does AI need its own governance instead of fitting under existing IT and data governance?"
  - "What is the minimum viable AI governance an organisation can stand up this quarter?"
  - "Why do most AI governance programs stall or get bypassed?"
  - "Who actually owns AI risk in an organisation?"
  - "How do you govern AI you bought but didn't build?"
references:
  - title: "NIST AI Risk Management Framework (AI RMF 1.0)"
    url: https://www.nist.gov/itl/ai-risk-management-framework
    note: "The de facto operational backbone. Voluntary, vendor-neutral, organised around four functions — Govern, Map, Measure, Manage. Start here for the operating model."
  - title: "ISO/IEC 42001:2023 — Artificial Intelligence Management System"
    url: https://www.iso.org/standard/81230.html
    note: "The certifiable management-system standard — effectively 'ISO 27001 for AI'. Use it when you need an auditable, repeatable program rather than a one-off policy."
  - title: "EU AI Act — Regulatory Framework (European Commission)"
    url: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
    note: "The first binding, horizontal AI law. Its risk-tier model (unacceptable / high / limited / minimal) is worth adopting even if you never touch the EU market."
  - title: "OECD AI Principles"
    url: https://oecd.ai/en/ai-principles
    note: "The values baseline almost every framework and regulation traces back to. Short, readable, and useful for writing the 'why' at the top of your own policy."
  - title: "Google Secure AI Framework (SAIF)"
    url: https://saif.google/
    note: "A practical, security-led operationalisation of AI governance. Strong on the controls a DevSecOps team actually implements — supply chain, monitoring, access."
---

## Overview

Walk into most organisations today and AI is already everywhere — just not on any list. Someone in marketing pastes the customer roster into a public chatbot to draft a campaign. Finance turns on an AI feature in its invoicing SaaS that auto-categorises spend. A developer ships a support bot trained on internal tickets. None of it was reviewed, none of it is owned, and nobody could tell you where it all runs.

**AI governance is the system that makes AI use visible, bounded, and owned.** It is not an ethics committee or a slide deck — it is the working set of policies, roles, and controls by which an organisation directs *what* AI it uses and constrains *how* it uses it, so the upside is captured and the downside is contained.

The core insight: **you do not govern the algorithm, you govern the decisions and the organisation around it.** The model is probabilistic and opaque; the policy, the inventory, the approval gate, and the named owner are not.

---

## Core Concepts

### Start Simple: A Policy, a List, and an Owner

Forget the framework for a moment. The minimum viable AI governance — the version a 200-person company can stand up this quarter — is three things:

1. **A policy** that states plainly what staff may and may not do with AI, and how data is handled.
2. **A list** (an inventory) of where AI is actually used, internally built or bought.
3. **An owner** — one accountable person or committee with the authority to say no.

Everything else in this domain — risk tiering, vendor reviews, monitoring, incident response — is elaboration on these three. An organisation with a one-page policy, a living inventory, and a named owner is better governed than one with a 90-page framework that nobody applies.

### Why AI Breaks Existing Governance

Organisations already have IT, data, and security governance. The honest question is why AI needs anything new. The answer is that AI violates four assumptions baked into traditional controls:

- **Non-determinism** — the same input can yield different outputs. "We tested it" no longer means "it will behave."
- **Opacity** — you often cannot explain *why* a model produced an output, which breaks audit and recourse.
- **Data gravity** — prompting and training pull data across boundaries that access controls never anticipated (the customer list ending up in a third-party model).
- **Autonomy** — agentic systems take *actions*, not just produce reports. The blast radius is operational, not just informational.

Traditional GRC assumes deterministic, auditable systems. AI is probabilistic and opaque. So you *extend* governance — you do not bolt on a parallel universe that the business will route around.

### The Operating Model

Effective AI governance is a layered chain of accountability, not a single body. Authority flows down; risk signal and incidents flow back up.

### Govern by Risk, Not by Hype (Proportionality)

The single most common failure is applying one heavy process to everything. A grammar checker, a loan-approval model, and an autonomous agent with production access do not deserve the same scrutiny. Governance must be **proportionate**: tier use cases by risk, then spend control where the risk actually is.

Over-govern low-risk AI and you kill adoption — and adoption simply moves into the shadows. Under-govern high-risk AI and you become the headline. The art is calibrating the gate to the stakes.

### You Mostly Govern AI You Didn't Build

Most organisations consume far more AI than they create — embedded in SaaS, copilots, and vendor features that ship "AI" as a checkbox. A governance program scoped only to internally built models misses the majority of real exposure. Procurement, contracts, and third-party assessment are first-class governance surfaces, not afterthoughts.

---

## Key Questions Answered

**Q: Why does AI need its own governance instead of fitting under existing IT and data governance?**

Because AI breaks the assumptions those controls rely on: determinism, explainability, predictable data flow, and human-only action. Existing GRC is the right foundation — you extend it with AI-specific controls (model inventory, risk tiering, output monitoring, human oversight) rather than replacing it. Think "new chapter in the GRC manual," not "new manual."

**Q: What is the minimum viable AI governance an organisation can stand up this quarter?**

A one-page acceptable-use policy, a living inventory of where AI is used, and one accountable owner with authority to approve and to stop. This trio delivers most of the risk reduction at a fraction of the effort of a full framework, and it gives you something concrete to mature against NIST AI RMF or ISO/IEC 42001 later.

**Q: Why do most AI governance programs stall or get bypassed?**

Two opposite failure modes. They are either **too theoretical** — principles and committees with no operational controls staff can actually follow — or **too heavy** — every use case routed through the same slow gate, so people quietly use unsanctioned tools instead. The fix is proportionality plus enablement: make the sanctioned path the easy path.

**Q: Who actually owns AI risk in an organisation?**

The business owner of each use case owns its risk — not "IT" and not "the AI team." Central governance sets the policy, the tiering rubric, and the guardrails; the function deploying the AI owns the outcome. A cross-functional committee (legal, security, data, risk, and the business) arbitrates and sets standards, but accountability is distributed to where the decisions are made.

**Q: How do you govern AI you bought but didn't build?**

Through procurement and third-party risk: vendor due-diligence questions ("what model, trained on what, hosted where, who sees our data?"), contractual clauses on data use and model changes, and the same risk tiering you apply internally. The control point shifts from the codebase to the contract and the configuration.

---

## Annotated References

- **NIST AI Risk Management Framework (AI RMF 1.0)**: The de facto operational backbone. Vendor-neutral and voluntary, organised around four functions — Govern, Map, Measure, Manage — with Govern as the always-on centre. The best starting point for the operating model itself.

- **ISO/IEC 42001:2023**: The certifiable AI management-system standard — effectively "ISO 27001 for AI". Reach for it when you need an auditable, repeatable program (with management review, internal audit, continual improvement) rather than a single policy document.

- **EU AI Act (European Commission)**: The first binding, horizontal AI regulation. Even outside the EU, its four-level risk model (unacceptable / high / limited / minimal) is a clean, defensible basis for your own tiering. Read the Commission's overview before the legal text.

- **OECD AI Principles**: The values baseline that most frameworks and laws trace back to (human-centred values, transparency, robustness, accountability). Short and readable — useful for drafting the "why" at the top of your own policy.

- **Google Secure AI Framework (SAIF)**: A practical, security-led view of AI governance. Strongest on the controls an engineering or DevSecOps team actually owns — supply chain, access, detection and response, and treating AI systems as part of the attack surface.

---

## Related Topics

- [AI Agents](../ai/ai-agents.md) — autonomy is what makes agentic AI the hardest governance case: it takes actions, not just produces text
