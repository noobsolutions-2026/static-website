---
title: "Spaced Repetition"
domain: method
date: 2026-06-11
tags: [spaced-repetition, memory, retention, learning, flashcards]
one_liner: "A study technique that schedules reviews at increasing intervals — reviewing material just before you would forget it, maximising long-term retention per unit of study time."
key_questions:
  - "What is the forgetting curve, and why does it matter?"
  - "How does spaced repetition exploit the forgetting curve?"
  - "Why is retrieval practice more effective than re-reading?"
  - "What should and shouldn't go into an SRS?"
  - "How do you design flashcards that build understanding rather than pattern-matching?"
references:
  - title: "Michael Nielsen — Augmenting Long-term Memory"
    url: https://augmentingcognition.com/ltm.html
    note: "The best essay on using spaced repetition seriously. Nielsen uses Anki to learn physics and quantum computing — shows how deep the technique can go."
  - title: "Piotr Wozniak — SuperMemo and the SM-2 Algorithm"
    url: https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-achieved-in-working-with-the-supermemo-method
    note: "The original 1987 paper that invented computerised spaced repetition. Dense but historically significant."
  - title: "Andy Matuschak — Spaced Repetition as a Practice"
    url: https://ncase.me/remember/
    note: "Interactive essay 'How to Remember Anything Forever-ish' — the most accessible introduction to the forgetting curve and spacing effect."
  - title: "Anki Manual"
    url: https://docs.ankiweb.net/
    note: "The dominant open-source SRS tool. The manual explains the algorithm and card design in practical terms."
  - title: "Make It Stick (Brown, Roediger, McDaniel)"
    url: https://www.hup.harvard.edu/books/9780674729018
    note: "The academic evidence for retrieval practice, spaced practice, and interleaving — the three most evidence-backed learning techniques."
---

## Overview

Hermann Ebbinghaus showed in 1885 that memory decays predictably over time — and that reviewing material just before forgetting it dramatically extends retention. He drew this as the forgetting curve: steep initial loss, then a plateau that shifts upward with each successful review.

Spaced repetition is the systematic exploitation of this curve. Instead of reviewing material on a fixed schedule, you review each item on the schedule that keeps it in memory with the minimum number of reviews. **The same amount of practice, distributed intelligently, produces far better long-term retention than the same practice massed together.**

---

## Core Concepts

### The Forgetting Curve

Without review, memory of a newly learned item follows a predictable decay: ~40% of information is lost within 24 hours, 60% within a week. The curve is exponential — most forgetting happens early, and what survives becomes progressively more stable.

The key insight: the curve resets after each successful review, but the new curve decays more slowly. A word reviewed once is remembered for a day; reviewed again before forgetting, for a week; again, for a month. Each successful retrieval strengthens the memory trace and extends the interval before the next review is needed.

### Spaced Repetition Systems (SRS)

An SRS is an algorithm that schedules cards for review based on your performance. The dominant algorithm (SM-2, used by Anki) works as follows:

1. Each card starts with a 1-day interval
2. After a successful review, the interval is multiplied by an "ease factor" (default 2.5×)
3. After a failed review, the interval resets to 1 day
4. The ease factor adjusts based on your responses — easy cards grow intervals faster; hard cards grow slower

Over time, a well-designed deck shows you cards at exactly the interval that maximises retention efficiency: just before you would forget them.

### Retrieval Practice vs Re-reading

This is the most important result in the learning science literature: **retrieving information from memory is significantly more effective than re-reading it, even if retrieval is harder and feels less productive.**

Re-reading feels productive (you recognise the material), but recognition is not recall. Retrieval practice — trying to produce the answer before seeing it — forces the memory trace to be reconstructed, which strengthens it. The difficulty IS the mechanism.

Passive review of notes or textbooks is the most common and least effective study method. Active retrieval with flashcards is more effortful but produces 2–3× better long-term retention per unit of study time.

### What Belongs in an SRS

**Good candidates:**
- Atomic facts: vocabulary, definitions, formulas, dates, names
- Conceptual distinctions you keep confusing: "precision vs recall", "latency vs throughput"
- Mental models you want available reflexively: the OSI layers, the CAP theorem
- Questions that reveal understanding: "why does X happen in this system?"

**Poor candidates:**
- Complex reasoning chains (an SRS card can't test whether you understand a proof)
- Procedural skills (how to type, how to code — practice, not flashcards)
- Context-dependent knowledge (what to do in a specific situation depends on context that won't fit a card)
- Facts you don't actually need to recall — only add what you'll use

### Card Design

The most common mistake: creating cards that test pattern-matching rather than understanding. "What is the capital of France?" tests recall. "What does the forgetting curve look like, and why does the shape matter?" tests understanding.

Principles:
- **Minimum information**: one fact per card; complex cards get split
- **Cloze deletion**: fill-in-the-blank is often better than Q&A ("The forgetting curve was described by _____ in 1885")
- **Use images for spatial/visual concepts**: diagrams encode differently from text
- **Test from multiple angles**: "What is X?" AND "When would you use X?" for the same concept

---

## Key Questions Answered

**Q: What is the forgetting curve, and why does it matter?**

It's Ebbinghaus's empirical observation that memory decays exponentially after learning — roughly half of newly learned material is forgotten within 24 hours without review. It matters because it shows that the timing of practice matters as much as the amount of practice. Studying the same material three times in one hour produces far less retention than studying it once, then once after a day, then once after a week.

**Q: How does spaced repetition exploit the forgetting curve?**

By scheduling each review to occur just before the memory would fade — the point where retrieval is still possible but requires effort. Each successful retrieval at this point extends the next review interval (the memory strengthens). The algorithm tracks the individual decay curve for each card and schedules it optimally. The result: a very large number of items can be maintained in long-term memory with a small amount of daily practice (typically 15–30 minutes).

**Q: Why is retrieval practice more effective than re-reading?**

The testing effect (also called the retrieval practice effect): the act of reconstructing a memory from scratch strengthens the memory trace more than passively viewing it. Re-reading produces fluency — the material feels familiar — but doesn't build the retrieval pathways. When you need the knowledge later, fluency fails. The harder the retrieval during practice, the more durable the memory. This is called "desirable difficulty."

**Q: What should and shouldn't go into an SRS?**

Should: atomic facts, conceptual distinctions, mental models you want reflexively available, questions that test understanding. Should not: complex reasoning (can't fit on a card), procedural skills (need practice), context-dependent knowledge, and anything you don't actually need. Adding material indiscriminately bloats the deck and makes daily reviews unsustainable. Be selective.

**Q: How do you design cards that build understanding rather than pattern-matching?**

Ask "what would it mean to understand this?" not "what is the fact?" Test from multiple angles: definition, application, counterexample, comparison. Use cloze deletions for factual recall; use open questions for conceptual understanding. If you can answer the card without understanding why the answer is correct, the card is testing recognition, not knowledge.

---

## Annotated References

- **Michael Nielsen — Augmenting Long-term Memory**: The essay that convinced many knowledge workers to take spaced repetition seriously. Nielsen spent months using Anki for physics and mathematics — showing the technique works for deep conceptual material, not just vocabulary. Essential reading.

- **SuperMemo / SM-2 Algorithm**: The original 1987 research that created computerised SRS. Dense, but reading the algorithm description once clarifies everything about how modern tools like Anki actually work.

- **Andy Matuschak / Nicky Case — How to Remember Anything Forever-ish**: An interactive essay that simulates the forgetting curve in the browser. Fastest way to build an intuition for why spacing works. Read this first.

- **Anki Manual**: The most widely-used SRS tool. The manual explains card types, the SM-2 variant used, and deck organisation. Start with Anki before writing your own system.

- **Make It Stick**: The academic evidence base for spaced practice, retrieval practice, and interleaving. Chapter 1–3 covers the research clearly. Good if you want to understand *why* before you commit to the practice.

---

## Related Topics

- [How to Research, Learn & Present a Domain](research-methodology.md) — spaced repetition is the retention mechanism for knowledge built through research
- [Zettelkasten Method](zettelkasten.md) — zettelkasten builds the network of understanding; SRS builds the reflexive recall of its components
