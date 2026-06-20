---
title: "AI Acceptable Use Policy (AUP)"
domain: governance
date: 2026-06-15
tags: [ai-governance, policy, acceptable-use, data-handling, controls]
one_liner: "The single document that tells everyone in an organisation what they may and may not do with AI — the first and most leveraged control in any AI governance program."
key_questions:
  - "Why is an acceptable-use policy the first thing to write, before any framework or committee?"
  - "What must an AI AUP actually contain to be usable rather than shelfware?"
  - "How do you stop staff pasting sensitive data into public AI tools?"
  - "Why do AUPs fail — and how do you write one people actually follow?"
  - "How does an AUP stay current when AI tools change every week?"
references:
  - title: "ISACA — Artificial Intelligence Acceptable Use Policy Template"
    url: https://www.isaca.org/resources/artificial-intelligence-acceptable-use-policy-template
    note: "A governance-authority template you can adapt. Strong on structure and the control objectives behind each clause — read it for the skeleton, not the boilerplate."
  - title: "SANS — Security Policy Templates"
    url: https://www.sans.org/information-security-policy
    note: "Free, security-team-oriented policy library (with the Cybersecurity Risk Foundation). Useful for the data-handling and enforcement language an AI AUP shares with your wider infosec policy set."
  - title: "OWASP Top 10 for LLM Applications & GenAI"
    url: https://genai.owasp.org/llm-top-10/
    note: "The risk content your 'prohibited uses' section should map to — sensitive-information disclosure, prompt injection, insecure output handling. Turns vague 'be careful' into specific bright lines."
  - title: "SHRM — Generative AI Usage Policy"
    url: https://www.shrm.org/topics-tools/tools/policies/chatgpt-generative-ai-usage
    note: "The people side. An AUP is read by every employee, not just engineers — SHRM frames scope, disclosure, and enforcement in HR terms that make a policy land and stick."
  - title: "NIST AI Risk Management Framework (AI RMF 1.0)"
    url: https://www.nist.gov/itl/ai-risk-management-framework
    note: "The upstream anchor: an AUP is the most visible output of the framework's Govern function. Use it to justify the policy to leadership and to map clauses to recognised controls."
---

## Overview

Ask most organisations for their AI rules and you get one of two answers: a blank stare, or a 40-page document nobody has read. Both leave the same gap — the person about to paste the customer list into a public chatbot has no idea whether they should.

An **AI Acceptable Use Policy (AUP)** closes that gap. It is the single document that tells everyone — staff, contractors, anyone acting for the organisation — what they **may** and **may not** do with AI, and how to handle data while doing it.

The core insight: **the AUP is the highest-leverage control in AI governance because it scales to every employee the instant it ships.** A risk assessment governs one use case; a monitoring tool watches one system. A one-page policy reaches everyone, immediately, at almost no cost. That is why it comes first — before the committee, before the framework, before the tooling.

---

## Core Concepts

### Start Simple: One Page Everyone Can Read

Before any framework, write the page a new joiner could read in three minutes and act on correctly. The minimum viable AUP answers four questions:

1. **Which tools may I use?** — a named, approved list (not "use good judgement").
2. **What may I never put into them?** — the data lines you must not cross.
3. **Who is responsible for the output?** — you are; verify before you rely on it.
4. **How do I get something new approved?** — the fast path, so people don't route around you.

A 200-person company with that one page is better governed than one with a 90-page policy nobody opens. Length is not rigour — clarity is.

### What an AI AUP Must Contain

Once the one-pager exists, the full policy fills in a predictable anatomy. Each section maps to a control objective:

- **Scope & applicability** — who and what it covers (all staff, contractors; built and bought AI).
- **Approved tools** — a tiered list (green / amber / red), pointing to a *living* register kept outside the policy.
- **Data-handling rules** — the heart: which data classes may go into which tool tiers.
- **Prohibited uses** — the bright lines (e.g. no fully automated decisions on people without review; no confidential data in public tools).
- **Human accountability** — the user owns and must verify AI output; AI assists, it does not absolve.
- **Transparency & disclosure** — when AI-assisted work must be labelled (e.g. customer-facing, legal, code).
- **Approval path** — how to request a new tool or use case (the enablement valve).
- **Consequences & contacts** — what happens on breach, and who to ask.

### The Data-Handling Core

If an AUP does only one thing well, make it this: tell people which data may go into which tool. Most real incidents are a data-classification failure, not a malicious act. Express it as a decision the user can run in their head:

### Why AUPs Fail — and How to Make One Stick

Four predictable failure modes, each with a fix:

- **Too long and legalistic** → nobody reads it. *Fix:* one page of plain language; detail in linked appendices.
- **Pure prohibition** → drives staff to unsanctioned tools (shadow AI). *Fix:* pair every "don't" with an approved "do".
- **Static** → stale within weeks as tools change. *Fix:* version it, name an owner, set a review cadence.
- **No enforcement path** → quietly ignored. *Fix:* wire it into onboarding, acknowledgement, and where possible DLP/tooling.

The governing principle is **enablement over prohibition**: the sanctioned path must be the easy path, or people will make their own.

### Keeping It Current

AI tools change faster than any policy review cycle. Resolve this by splitting stable from volatile: the **policy** states durable principles (data classes, accountability, disclosure) and changes rarely; the **approved-tools list** is a living register that changes weekly through a fast-track. Name an owner, set a quarterly principles review, and let the tool list move at the speed of the market.

---

## Key Questions Answered

**Q: Why is an acceptable-use policy the first thing to write, before any framework or committee?**

Because it is the cheapest control with the widest reach. A framework takes months and governs the program; an AUP takes days and immediately changes what every employee does at their keyboard. It also creates the shared vocabulary (data classes, tool tiers, approval path) that every later control builds on.

**Q: What must an AI AUP actually contain to be usable rather than shelfware?**

Scope, an approved-tools list, data-handling rules, prohibited uses, human accountability, disclosure expectations, an approval path, and consequences. The non-negotiable core is the data-handling rules — which data classes may enter which tools. Everything else supports that decision.

**Q: How do you stop staff pasting sensitive data into public AI tools?**

Three layers. **Policy:** a clear, memorable data × tool rule. **Enablement:** provide an approved enterprise tool so the safe option exists. **Enforcement:** acknowledgement at onboarding plus DLP/browser controls where feasible. Policy alone changes intent; you need the safe tool and a backstop to change behaviour.

**Q: Why do AUPs fail — and how do you write one people actually follow?**

They fail by being too long, purely prohibitive, static, or unenforced. They stick when they are short and plain, pair every restriction with a sanctioned alternative, are versioned and owned, and are wired into the systems people already use. Write for the busy non-technical reader, not the auditor.

**Q: How does an AUP stay current when AI tools change every week?**

Separate the slow-moving policy from the fast-moving tool list. Principles (data handling, accountability, disclosure) live in the policy and rarely change; the approved-tools register lives alongside it and updates through a lightweight fast-track with a named owner. Don't rev a formal policy every time a new tool appears.

---

## Annotated References

- **ISACA — AI Acceptable Use Policy Template**: A governance-authority template to adapt. Strongest on structure and the control objective behind each clause. Borrow the skeleton; rewrite the boilerplate in your own plain language.

- **SANS — Security Policy Templates**: A free, security-oriented policy library (with the Cybersecurity Risk Foundation). Useful for the data-handling and enforcement wording an AI AUP shares with the rest of your information-security policy set, so the AUP reads as part of the family rather than a one-off.

- **OWASP Top 10 for LLM Applications & GenAI**: The risk catalogue your "prohibited uses" should map to — sensitive-information disclosure, prompt injection, insecure handling of model output. It turns vague cautions into specific, defensible bright lines.

- **SHRM — Generative AI Usage Policy**: The people-and-HR perspective. Because an AUP is read by every employee, SHRM's framing of scope, disclosure, and enforcement helps the policy land with non-technical staff and survive contact with reality.

- **NIST AI RMF 1.0**: The upstream anchor. An AUP is the most visible artefact of the framework's Govern function — use NIST to justify the policy to leadership and to map its clauses to recognised, named controls.

---

## Related Topics

- [AI Governance](ai-governance.md) — the AUP is the first and most leveraged control in the broader governance program
- [AI System & Use-Case Inventory](ai-system-inventory.md) — the approved-tools register is drawn from, and feeds, the inventory
