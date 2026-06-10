# Research Hub — Design Spec
**Date:** 2026-06-10  
**Status:** Approved

---

## Overview

Transform the static-website repo into a personal research knowledge base published via GitHub Pages. Content is AI-assisted (Claude researches and generates pages), domain-focused (no personal details), and structured for both quick reference and deep understanding using Andrej Karpathy's pedagogical style.

---

## 1. Repo Structure

```
static-website/
├── research/                        ← Markdown source (source of truth)
│   ├── ai/
│   ├── technology/
│   ├── cloud/
│   ├── governance/
│   └── finance/
├── public/                          ← Generated HTML (served by GitHub Pages)
│   ├── index.html                   ← Home: domain hub grid
│   ├── ai/
│   │   ├── index.html               ← AI domain hub
│   │   └── <topic>.html             ← Research page
│   ├── technology/
│   ├── cloud/
│   ├── governance/
│   └── finance/
├── .github/workflows/deploy.yml     ← Unchanged; push to main triggers deploy
└── README.md
```

The `research/` folder is the authoring layer. The `public/` folder is the rendering layer. Claude is the build step between them.

---

## 2. Initial Domains

| Domain | Focus |
|---|---|
| AI / LLM | Flagship hub — modelled on Karpathy's teaching series (how LLMs work, agents, RAG, tool use, fine-tuning…) |
| Technology | Security (ZTA, OWASP), networking, protocols |
| Cloud | AWS/GCP/Azure patterns, Kubernetes, CNCF ecosystem |
| Governance | Frameworks (COBIT, ISO), risk, compliance |
| Finance | Personal finance concepts, investing, SG context |

New domains are added by creating a new folder under `research/` and `public/`.

---

## 3. Markdown Frontmatter (per research file)

```yaml
---
title: AI Agents
domain: ai
tags: [agents, llm, tool-use, planning]
one_liner: "Software that perceives its environment, plans actions, uses tools, and acts autonomously toward a goal."
key_questions:
  - What separates an agent from a simple LLM call?
  - How does the ReAct loop work?
  - When do agents fail, and why?
  - What does memory mean for an agent?
references:
  - title: "Karpathy — Intro to LLM Agents"
    url: https://www.youtube.com/watch?v=zjkBMFhNj_g
    note: Best first-principles introduction
  - title: "Anthropic — Building Effective Agents"
    url: https://www.anthropic.com/research/building-effective-agents
    note: Practical patterns and anti-patterns
date: 2026-06-10
---

## Overview
...

## Core Concepts
...

## Key Questions Answered
...

## Annotated References
...

## Related Topics
...
```

---

## 4. Research Page Anatomy (Two-Zone Layout)

Every research page has two zones at a single URL.

### Quick Zone (top)
Designed to be skimmed in under 60 seconds:
- **One-liner** — a single sentence that captures the essence of the topic
- **Concept chips** — 4–6 key terms as pills/badges
- **Key questions** — 3–5 questions that reveal depth (Karpathy style: "what would you want to understand?")
- **Top references** — 3 curated links with one-line descriptions

### Deep Zone (below)
Built from first principles (Karpathy pedagogical style):
1. **Start simple** — the minimal, concrete example that builds intuition
2. **Architecture diagram** — Mermaid.js flowchart or sequence diagram rendered inline
3. **Core concepts unpacked** — intuition first, mechanics second
4. **Q&A** — the key questions answered in depth
5. **Annotated references** — each link with a note on what it adds and why it matters
6. **Related topics** — links to other research pages in the hub

---

## 5. Authoring Style Guide (Karpathy Pattern)

All research pages — across all domains — follow this style:

- **First principles up**: start from the simplest concrete example; build to complexity
- **Intuition before formalism**: explain the "why it works" before the "how it's specified"
- **Key questions that reveal depth**: not "what is X?" but "why does X behave this way?"
- **Visual-first for complex relationships**: if a concept has a structure, draw it
- **Curated references over exhaustive bibliographies**: 3–5 links that each add something distinct
- **Domain-focused, no personal details**: all content is about the subject, not the author

The AI/LLM domain hub is the flagship implementation — it serves as the style reference for all other domains.

---

## 6. Diagram Strategy

| Type | Tool | When to use |
|---|---|---|
| Flowcharts, sequence diagrams, architecture | Mermaid.js (CDN) | Whenever a process or system has a structure — Claude writes the definition, browser renders it |
| Comparison tables, layered stacks, timelines | Pure HTML/CSS | Simple relationships that don't need a full diagram library |

No external image hosting. All diagrams are either code-rendered (Mermaid) or CSS-drawn.

---

## 7. End-to-End Workflow

```
1. Trigger    → "Research <topic> for <domain> hub"
2. Source     → Claude writes research/<domain>/<topic>.md
               (frontmatter + deep-dive content in Karpathy style)
3. Render     → Claude generates public/<domain>/<topic>.html
               (two-zone layout, Mermaid diagrams, concept chips)
4. Update hub → Claude updates public/<domain>/index.html
               (adds topic card, updates tag cloud)
5. Review     → User skims the Markdown for accuracy
6. Deploy     → git commit + push → GitHub Actions → live in ~60s
```

One research session = one commit = one new page live.

---

## 8. Reference Sources by Domain

| Domain | Primary Sources |
|---|---|
| AI / LLM | Andrej Karpathy (YouTube + blog), Anthropic research, Lilian Weng blog, Hugging Face docs, original papers (arXiv) |
| Technology | NIST publications, CISA guides, Cloudflare blog, OWASP, Bruce Schneier |
| Cloud | AWS/GCP/Azure whitepapers, CNCF docs, Kelsey Hightower talks |
| Governance | ISACA, COBIT, ISO standards, Gartner (public summaries), MIT Sloan |
| Finance | Investopedia (concepts), Ben Felix (YouTube), Bogleheads wiki, MAS guidelines (SG context) |

---

## 9. Navigation Model

- **Home (`public/index.html`)**: grid of domain hub cards with topic counts
- **Domain hub (`public/<domain>/index.html`)**: list/grid of topic cards + tag filter
- **Research page (`public/<domain>/<topic>.html`)**: two-zone page
- **Nav bar** (present on all pages): links to all domain hubs

---

## 10. Out of Scope

- No authentication or login
- No search functionality (v1 — browser Ctrl+F is sufficient)
- No comments or feedback mechanism
- No build framework or SSG — Claude is the build step
- No personal information, photos, or identifying details on any page
