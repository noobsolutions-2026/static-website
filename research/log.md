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
