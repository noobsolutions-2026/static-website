# Wiki Log

Append-only record of all ingest, query, and lint operations.
Format: `## [YYYY-MM-DD] <operation> | <title> (<domain>)`

Grep tip: `grep "^## \[" research/log.md | tail -10` shows the 10 most recent entries.

---

## [2026-06-10] ingest | AI Agents (ai)
**Files created:** research/ai/ai-agents.md, public/ai/ai-agents.html
**Hub created:** public/ai/index.html
**Files updated:** public/index.html (AI/LLM count 0→1), all nav bars
**Topics covered:** ReAct loop, tool use, memory types (in-context/external/episodic/procedural), planning strategies (tree-of-thought/reflexion/plan-and-execute), multi-agent coordination
**Cross-references added:** none (first page)

## [2026-06-10] ingest | How to Research, Learn & Present a Domain (method)
**Files created:** research/method/research-methodology.md, public/method/research-methodology.html
**Hub created:** public/method/index.html
**Files updated:** public/index.html (Method count 0→1), all nav bars (Method link added to all 7 pages)
**Topics covered:** Feynman technique, compression principle, source quality hierarchy (primary/secondary/tertiary), two-zone presentation, retrieval practice
**Cross-references added:** research-methodology → ai-agents (flagship first-principles example)

## [2026-06-11] setup | Wiki infrastructure (meta)
**Files created:** research/index.md, research/log.md
**Skills created:** .claude/skills/lint-wiki/SKILL.md
**Files updated:** CLAUDE.md (wiki operations documented), .claude/skills/new-research-page/SKILL.md (ingest/index/log steps added), .claude/agents/research-page-reviewer.md (index/log checks added)
**Cross-references backfilled:** ai-agents → research-methodology (bidirectional link completed)
**Notes:** Adopted llm-wiki.md pattern (Karpathy/2026). Index and log bootstrapped from existing 2 pages.

## [2026-06-11] ingest | RAG (ai)
**Files created:** research/ai/rag.md, public/ai/rag.html
**Files updated:** public/ai/index.html (RAG card added), public/index.html (AI/LLM count)
**Topics covered:** chunking, embeddings, vector stores, similarity search, context injection, naive vs advanced RAG
**Cross-references added:** rag → ai-agents, rag → tool-use

## [2026-06-11] ingest | Tool Use / Function Calling (ai)
**Files created:** research/ai/tool-use.md, public/ai/tool-use.html
**Files updated:** public/ai/index.html (tool-use card added)
**Topics covered:** function calling spec, JSON schema, parallel calls, tool selection, safety
**Cross-references added:** tool-use → ai-agents, tool-use → rag

## [2026-06-11] ingest | Model Context Protocol (ai)
**Files created:** research/ai/model-context-protocol.md, public/ai/model-context-protocol.html
**Files updated:** public/ai/index.html (MCP card added)
**Topics covered:** MCP architecture, hosts/clients/servers, resources, tools, prompts, transport
**Cross-references added:** mcp → tool-use, mcp → ai-agents

## [2026-06-11] ingest | Fine-tuning vs Prompting (ai)
**Files created:** research/ai/fine-tuning-vs-prompting.md, public/ai/fine-tuning-vs-prompting.html
**Files updated:** public/ai/index.html (fine-tuning card added), public/index.html (AI/LLM count → 5)
**Topics covered:** SFT, RLHF, DPO, data quality (LIMA), catastrophic forgetting, decision framework
**Cross-references added:** fine-tuning → rag, fine-tuning → tool-use, fine-tuning → ai-agents

## [2026-06-11] ingest | Spaced Repetition (method)
**Files created:** research/method/spaced-repetition.md, public/method/spaced-repetition.html
**Files updated:** public/method/index.html (spaced-repetition card added)
**Topics covered:** forgetting curve, SM-2 algorithm, retrieval practice, desirable difficulty, card design
**Cross-references added:** spaced-repetition → research-methodology, spaced-repetition → zettelkasten

## [2026-06-11] ingest | Zettelkasten Method (method)
**Files created:** research/method/zettelkasten.md, public/method/zettelkasten.html
**Files updated:** public/method/index.html (zettelkasten card added), public/index.html (Method count → 3)
**Topics covered:** three note types, atomicity, links vs hierarchy, emergent structure, compounding over time
**Cross-references added:** zettelkasten → research-methodology, zettelkasten → spaced-repetition

## [2026-06-11] enhancement | Mobile-responsive nav (meta)
**Files created:** public/js/nav.js
**Files updated:** public/css/style.css (hamburger styles, mobile media query), all 12 HTML pages (nav markup + script tag)
**Notes:** Replaced overflow-x scroll with hamburger toggle. Three-bar → X animation. Left-border active indicator on mobile. Nav links drop in with max-height transition.

## [2026-06-11] curate | Method domain quality pass (method)
**Files updated:** research/method/research-methodology.md + .html, research/method/spaced-repetition.md + .html, .claude/skills/research-conventions/SKILL.md
**Fixes:**
- research-methodology: removed fabricated reference "Paul Graham — How to Learn Things" (paulgraham.com/learn.html → 404); replaced with verified "How to Do Great Work" (greatwork.html). Frontmatter references synced to match Annotated References (3 → 5). Related Topics converted to live markdown links. Dead "Feynman Technique" chip removed from HTML.
- spaced-repetition: dead SuperMemo blog URL (403) replaced with canonical SM-2 algorithm page (super-memory.com/english/ol/sm2.htm). Ebbinghaus decay figures harmonised and hedged (Core Concepts said 40%/24h, Q&A said 50% — both now "roughly two-thirds for nonsense syllables, slower for meaningful material"). Anki algorithm claim updated: SM-2 is the classic; FSRS (ML-based) is recommended since v23.10 (2023), ~20–30% fewer reviews at equal retention.
- zettelkasten: re-verified — all 5 reference URLs live, Luhmann figures (90k notes, 70 books, 400 articles) match cited record. No changes.
**Skill updated:** research-conventions — added mandatory Reference Verification section (curl-check every URL, never cite from memory, frontmatter/annotated parity, hedge quantitative claims, bidirectional related-links rule); nav snippet updated to include mobile hamburger + nav.js.

## [2026-06-15] ingest | AI Governance (governance)
**Files created:** research/governance/ai-governance.md, public/governance/ai-governance.html
**Files updated:** public/governance/index.html (empty-state replaced with topic grid + AI Governance card), public/index.html (Governance count 0 → 1)
**Topics covered:** operational AI governance, minimum viable governance (policy + inventory + owner), why AI breaks existing GRC (non-determinism, opacity, data gravity, autonomy), operating model / accountability chain, proportionality (govern by risk), build-vs-buy / third-party AI risk
**Cross-references added:** governance/ai-governance ↔ ai/ai-agents (bidirectional)
**References verified:** NIST AI RMF (200), EU AI Act / EC (200), OECD AI Principles (200), Google SAIF (200), ISO/IEC 42001 (403 — ISO bot-block, catalog ID 81230 correct)
**Cluster note:** First page of a planned 9-page AI Governance cluster (operational lens). Remaining: AI Acceptable Use Policy, AI System & Use-Case Inventory, AI Risk Assessment & Tiering, Human Oversight & Accountability, Shadow AI, Third-Party / Vendor AI Risk, AI Governance Frameworks, AI Monitoring & Incident Response.

## [2026-06-15] ingest | AI Acceptable Use Policy (governance)
**Files created:** research/governance/ai-acceptable-use-policy.md, public/governance/ai-acceptable-use-policy.html
**Files updated:** public/governance/index.html (AUP card added), public/index.html (Governance count 1 → 2), public/governance/ai-governance.html + research/governance/ai-governance.md (back-link to AUP)
**Topics covered:** minimum viable one-page AUP, AUP anatomy / required sections, data-handling decision (data class × tool tier), why AUPs fail (too long / pure prohibition / static / unenforced), enablement over prohibition, keeping policy current (stable principles vs living tool list)
**Cross-references added:** governance/ai-acceptable-use-policy ↔ governance/ai-governance (bidirectional)
**References verified:** ISACA AUP template (200), SANS policy templates (200), OWASP LLM Top 10 / genai.owasp.org (200), SHRM GenAI usage policy (200), NIST AI RMF (200)
**Cluster progress:** 2 of 9. Remaining: AI System & Use-Case Inventory, AI Risk Assessment & Tiering, Human Oversight & Accountability, Shadow AI, Third-Party / Vendor AI Risk, AI Governance Frameworks, AI Monitoring & Incident Response.

## [2026-06-20] ingest | AI System & Use-Case Inventory (governance)
**Files created:** research/governance/ai-system-inventory.md, public/governance/ai-system-inventory.html
**Files updated:** public/governance/index.html (inventory card added — 3 cards), public/index.html (Governance count 2 → 3), public/governance/ai-governance.html + .md (back-link), public/governance/ai-acceptable-use-policy.html + .md (back-link)
**Topics covered:** inventory as the foundation control, use-case (not model/tool) as the unit, inventory entry schema/fields, active discovery of shadow AI (procurement, SSO, network/DLP, SaaS audits, surveys), living register vs one-time audit, inventory → downstream controls
**Cross-references added:** governance/ai-system-inventory ↔ governance/ai-governance; governance/ai-system-inventory ↔ governance/ai-acceptable-use-policy (both bidirectional)
**References verified:** NIST AI RMF / Map (200), NIST AI RMF Playbook (200), EU AI Act Art. 49 (200), ISO/IEC 42001 (200), Microsoft CAF Manage AI (200)
**Cluster progress:** 3 of 9. Remaining: AI Risk Assessment & Tiering, Human Oversight & Accountability, Shadow AI, Third-Party / Vendor AI Risk, AI Governance Frameworks, AI Monitoring & Incident Response.
