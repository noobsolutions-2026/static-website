---
title: "AI System & Use-Case Inventory"
domain: governance
date: 2026-06-20
tags: [ai-governance, inventory, registry, discovery, controls]
one_liner: "The living register of every AI system and use case in an organisation — because you cannot govern, risk-tier, or secure what you cannot see."
key_questions:
  - "Why is the inventory the foundation that every other AI control depends on?"
  - "What is the right unit to inventory — the model, the tool, or the use case?"
  - "What fields does a useful AI inventory entry actually need?"
  - "How do you find the AI you don't already know about?"
  - "How do you keep the inventory alive instead of stale within a month?"
references:
  - title: "NIST AI RMF — Map Function"
    url: https://www.nist.gov/itl/ai-risk-management-framework
    note: "The Map function is the inventory mandate in framework form: establish context, document what AI exists, who it affects, and what could go wrong. The inventory is Map's primary output."
  - title: "NIST AI RMF Playbook"
    url: https://airc.nist.gov/airmf-resources/playbook/
    note: "The concrete companion to the framework — suggested actions for each Govern/Map subcategory. Use it to decide exactly what to record per AI system rather than inventing fields from scratch."
  - title: "EU AI Act — Article 49 (Registration)"
    url: https://artificialintelligenceact.eu/article/49/
    note: "The regulatory driver: high-risk AI systems must be registered in an EU database before going to market. Even outside the EU, it shows what a serious, auditable system record is expected to contain."
  - title: "ISO/IEC 42001:2023 — AI Management System"
    url: https://www.iso.org/standard/81230.html
    note: "An AI management system treats AI systems as assets requiring documented information across their lifecycle. The inventory is the asset register the rest of the AIMS hangs off."
  - title: "Microsoft Cloud Adoption Framework — Manage AI"
    url: https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/manage
    note: "A practical, operations-oriented view: tracking AI workloads, ownership, and lifecycle as part of normal asset management rather than a one-off governance exercise."
---

## Overview

Ask a CISO how many databases they run and they can tell you. Ask how many AI systems are in use and the honest answer is usually a shrug. Yet AI is already woven through the organisation — a copilot in the IDE, an AI feature toggled on inside a SaaS product, a support bot a team built last quarter, a marketer's personal ChatGPT habit. None of it is on a list, so none of it can be governed.

**An AI System & Use-Case Inventory is the living register of every place AI is used — built or bought, sanctioned or not.** It is the unglamorous foundation of the whole program, and the one most organisations skip.

The core insight: **you cannot govern, risk-tier, secure, or report on what you cannot see.** Every other control in AI governance — risk assessment, human oversight, vendor review, monitoring, incident response — takes an inventory entry as its input. No inventory, no program; just a policy nobody can apply to systems nobody has listed.

---

## Core Concepts

### Start Simple: A Spreadsheet With the Right Columns

The minimum viable inventory is not a platform — it is a shared spreadsheet that answers, for each AI use, four questions: **what is it, who owns it, what data does it touch, and how risky is it?** That is enough to start tiering risk and assigning oversight the same week.

Resist the urge to buy tooling first. The hard part is never the storage; it is the discovery and the discipline. A maintained spreadsheet beats an empty governance platform every time.

### Inventory the Use Case, Not Just the Model

The most common mistake is listing *models* or *tools* and calling it done. "We use GPT-4o" is not a governable unit — the risk lives in how it is used. The same model is trivial in a grammar checker and serious in a hiring screen.

So the unit of inventory is the **use case**: a specific application of AI to a specific task, with its own owner, data, and risk. One tool may appear in many use-case entries. Govern the use, because that is where the harm and the accountability actually sit.

### What an Inventory Entry Needs

Each entry should carry just enough to drive the next control. A practical field set:

- **Identifier & name** — what it is, in plain language.
- **Business owner** — the accountable person (not "IT"), who owns the risk.
- **Purpose / use case** — the task it performs and the decision it informs.
- **Build vs buy** — internal build, standalone vendor tool, or AI embedded in existing SaaS.
- **Model & provider** — what is under the hood, and who hosts it.
- **Data classes touched** — what goes in and comes out (public / internal / confidential / regulated).
- **Risk tier** — the triage rating that sets how much control applies.
- **Human oversight** — decision type and where a human is in the loop.
- **Lifecycle status** — proposed, active, or retired.
- **Last reviewed** — the date that tells you whether the entry is trustworthy.

Everything else is optional. These fields are the hooks the risk-tiering, oversight, and vendor-review controls plug into.

### Finding the AI You Don't Know About

A register built only from what people volunteer captures the easy half. The rest — shadow AI — needs active discovery from sources the organisation already has:

- **Procurement & expense** — AI subscriptions and line items reveal bought tools.
- **SSO / identity logs** — which AI apps staff actually sign into.
- **Network & DLP** — traffic to public AI endpoints; data leaving for LLM domains.
- **SaaS feature audits** — AI toggles quietly shipped inside tools you already own.
- **Team surveys** — fast, cheap, and surprisingly revealing when paired with amnesty.

### From Inventory to Control

An inventory is a *register*, not an *audit*. A one-time sweep is stale within a month because new AI appears constantly — so make intake a front door, not a chase: wire registration into the moments AI enters (procurement approval, project intake, the AUP's tool-request path), name an owner, and run automated discovery as a backstop.

The inventory is never the goal; it is the feeder. Discovery sources flow in, and each entry flows out to the controls that act on it — risk tiering, human oversight, vendor review, and monitoring.

---

## Key Questions Answered

**Q: Why is the inventory the foundation that every other AI control depends on?**

Because every other control consumes an inventory entry. Risk assessment tiers an entry; oversight assigns a human to one; vendor review covers bought ones; monitoring and incident response watch listed systems. Without the list, the policy is unenforceable and the program is theatre — you are governing an empty set.

**Q: What is the right unit to inventory — the model, the tool, or the use case?**

The use case. A model or tool is not governable on its own; the risk lives in how it is applied. The same LLM is harmless summarising public docs and serious screening job applicants. Inventory each distinct application — with its own owner, data, and risk — even when several share one underlying tool.

**Q: What fields does a useful AI inventory entry actually need?**

The minimum that drives the next control: name, business owner, purpose, build-vs-buy, model/provider, data classes touched, risk tier, human oversight, lifecycle status, and last-reviewed date. Start there. Adding more fields than you will act on just slows adoption and ages faster.

**Q: How do you find the AI you don't already know about?**

Combine voluntary registration with active discovery: procurement and expense records, SSO sign-in logs, network/DLP traffic to AI endpoints, SaaS feature audits, and team surveys offered with amnesty. Self-reporting alone misses shadow AI — the part you most need to see. Triangulate from data you already collect.

**Q: How do you keep the inventory alive instead of stale within a month?**

Treat it as a living register with a front door, not a periodic audit. Wire intake into the moments AI enters — procurement approval, new-project intake, the AUP's tool-request path — so new systems register themselves on the way in. Name an owner, set a light review cadence, and automate discovery as a backstop.

---

## Annotated References

- **NIST AI RMF — Map Function**: The inventory mandate in framework language. Map is about establishing context — what AI exists, its purpose, its stakeholders, what could go wrong — and a documented inventory is its primary output. Read Map to understand *why* you inventory before you decide *how*.

- **NIST AI RMF Playbook**: The actionable companion to the framework, with suggested actions per subcategory. The fastest way to decide what to record about each system without reinventing the schema. Pair it with the Map function above.

- **EU AI Act — Article 49 (Registration)**: The hard-edged regulatory version of an inventory: high-risk systems must be registered in an EU database before market entry. Even with no EU exposure, it is a useful benchmark for what a credible, auditable system record looks like.

- **ISO/IEC 42001:2023**: The AI management-system standard treats AI systems as assets needing documented information across their lifecycle. Your inventory is the asset register the rest of the management system depends on — read it if you are heading toward certification.

- **Microsoft Cloud Adoption Framework — Manage AI**: The pragmatic, operations-first perspective: track AI workloads, ownership, and lifecycle inside normal asset management rather than as a separate governance ritual. Good for wiring the inventory into how IT already runs.

---

## Related Topics

- [AI Governance](ai-governance.md) — the inventory is the "list" pillar of the minimum viable program (policy + list + owner)
- [AI Acceptable Use Policy](ai-acceptable-use-policy.md) — the AUP's approved-tools register is drawn from, and feeds, the inventory
