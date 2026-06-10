---
title: "How to Research, Learn & Present a Domain"
domain: method
date: 2026-06-10
tags: [learning, mental-models, pedagogy, first-principles, feynman, knowledge]
one_liner: "The art of compressing a complex domain into stable mental models — and presenting them so others can build from first principles."
key_questions:
  - "What is the difference between information and understanding?"
  - "How do you find the signal in a noisy domain?"
  - "What makes a mental model stick?"
  - "How do you know when you understand something well enough to explain it?"
  - "What separates a primary source from noise?"
references:
  - title: "The Feynman Learning Technique (Farnam Street)"
    url: https://fs.blog/feynman-learning-technique/
    note: "Four steps that surface gaps in understanding instead of hiding them."
  - title: "Andrej Karpathy — Let's Build GPT (YouTube)"
    url: https://www.youtube.com/watch?v=kCc8FmEb1nY
    note: "Live example of first-principles teaching — starts from scratch, builds only what's necessary."
  - title: "Barbara Oakley — A Mind for Numbers"
    url: https://barbaraoakley.com/books/a-mind-for-numbers/
    note: "Focused vs diffuse thinking modes; how experts build durable mental models."
---

## Overview

Most people confuse familiarity with understanding. You can recognise an answer when you see it — but can you generate it from scratch, on a blank page, without looking? If not, you have pattern-matching, not a mental model.

This page is the meta-skill behind the entire research hub: how to take a complex domain, compress it into something you actually understand, and present it in a way that helps someone else build the same understanding from first principles.

---

## Core Concepts

### Information vs Understanding

Information is data you can look up. Understanding is a mental model that lets you *predict and derive*.

The distinction matters because:
- Familiarity fails under novel conditions — the question is slightly different and you're stuck
- Understanding transfers to new problems — the mental model works even when the surface looks different
- Teaching from familiarity produces students who memorise without comprehending

The Feynman test cuts straight to this: write a plain-language explanation without looking at any sources. Every place you write "basically" or "essentially", or skip a step, is a gap. Those gaps are where the real learning happens.

### The Compression Principle

Learning is lossy compression that preserves causal structure. A good mental model is:
- **Compact** — fits in working memory (you can hold the whole thing at once)
- **Causal** — explains why, not just what (you can predict outcomes)
- **Connected** — links to things you already know (isolated facts dissolve; connected models compound)

Bad models are either too detailed (you have facts without structure) or too abstract (you have slogans without mechanisms). "AI learns from data" is a slogan. Understanding backpropagation from first principles is a model.

### Source Quality Hierarchy

Not all sources are equal. Primary sources are ground truth: the original paper, the official specification, the RFC, the person who built the system. Secondary sources compress primaries — textbooks, documentation, survey papers — faster to read, but you inherit their simplifications. Tertiary sources compress secondaries — blog posts, YouTube explainers, Stack Overflow answers — fastest to consume, but two rounds of telephone from ground truth.

For building durable understanding: read at least one primary source before going tertiary. The mental model you build from a primary is more accurate and harder to unlearn when the field moves on.

### The Feynman Technique (Four Steps)

1. **Pick a concept** you want to understand
2. **Explain it in plain language** as if teaching someone with no background — no jargon allowed
3. **Find the gaps** — wherever your explanation gets hand-wavy or you have to skip a step
4. **Go back to sources** and fill the gaps; simplify your explanation further

Repeat until you can explain it cleanly. The gaps are the learning. Most people skip to memorisation and never surface them.

### How to Present: The Two-Zone Principle

Every complex topic has two audiences in the same person:
- **The skimmer** who needs a quick mental map before committing time
- **The deep reader** who is ready to build genuine understanding

Structure content for both. The Quick Zone is not a summary — it's a doorway. A one-liner that captures the essence, key questions that reveal depth, and three curated links that are worth the time. The Deep Zone is not a knowledge dump — it's a curated path from simplest concrete example to full mechanism.

Key presentation principles:
- Lead with the simplest concrete example, not the definition
- Give the intuition before the formalism
- Use diagrams for structure, prose for narrative
- Key questions reveal depth better than outlines or bullet lists

---

## Key Questions Answered

**Q: What is the difference between information and understanding?**

Information is data you can look up; understanding is a mental model that lets you predict and derive. You can have information without understanding (memorising facts) but not understanding without information (the structure has to be built from something real). The test: can you produce the answer on a blank page, or only recognise it when you see it?

**Q: How do you find the signal in a noisy domain?**

Start with primary sources and work outward. The author of the original paper knows what was tried and failed; the blogger only knows what worked and what's popular. Find the 3–5 sources that every expert in the domain cites — those are your signal. Then read one of them fully before going broad.

**Q: What makes a mental model stick?**

Compression + connection. A sticky model is compact enough to hold in working memory, causal enough to explain outcomes, and connected enough to link with models you already have. New knowledge sticks when it attaches to something — isolated nodes fall off. This is why analogies and examples matter more than formal definitions.

**Q: How do you know when you understand something well enough to explain it?**

The Feynman test: write a plain explanation without sources. Every "basically", every skipped step, every sentence where you used jargon to avoid explaining — those are your gaps. Fill them. When you can explain the mechanism simply, without hiding behind terminology, you understand it.

**Q: What separates a primary source from noise?**

The author was there. Primary sources contain the reasoning, the constraints that shaped the design, the failed attempts, and the trade-offs. Secondary and tertiary sources often strip this out, leaving you with conclusions without understanding. When you understand the constraints that forced a decision, you understand the decision. When you only know the decision, you're memorising.

---

## Annotated References

- **The Feynman Learning Technique (Farnam Street)** — The most actionable version of how Feynman taught himself physics. Read this before any other resource on learning. The four-step structure is immediately applicable to any domain.

- **Andrej Karpathy — Let's Build GPT (YouTube)** — The best live example of first-principles teaching you will find. Notice: he starts from the simplest version that does anything meaningful, adds complexity only when the simpler version breaks, and never uses a concept before building it from scratch.

- **Barbara Oakley — A Mind for Numbers** — Science-backed breakdown of focused and diffuse thinking modes and how experts build durable mental models. The title is misleading — this applies to every complex domain, not just maths.

- **Michael Nielsen — Augmenting Long-term Memory** — Deep exploration of spaced repetition and why retrieval practice beats passive review by a large margin. Changes how you think about what "knowing" something means.

- **Paul Graham — How to Learn Things (Essay)** — Short and sharp. The central point: you learn by doing, not by trying to learn. The domain work and the learning are the same activity.

---

## Related Topics

- AI Agents (AI / LLM hub)
- Zettelkasten Method
- Spaced Repetition
