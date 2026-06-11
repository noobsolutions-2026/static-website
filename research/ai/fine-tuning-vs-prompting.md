---
title: "Fine-tuning vs Prompting"
domain: ai
date: 2026-06-11
tags: [fine-tuning, prompting, training, llm, alignment]
one_liner: "The choice between teaching a model new behaviour by updating its weights (fine-tuning) versus guiding existing behaviour through instructions (prompting) — and why prompting should almost always come first."
key_questions:
  - "What does fine-tuning actually change in the model?"
  - "When does prompting fail in a way fine-tuning can fix?"
  - "Why does data quality matter more than data quantity for fine-tuning?"
  - "What are the hidden costs of fine-tuning beyond compute?"
  - "When is neither sufficient — and what are the alternatives?"
references:
  - title: "Andrej Karpathy — State of GPT (Microsoft Build 2023)"
    url: https://www.youtube.com/watch?v=bZQun8Y4L2A
    note: "Best accessible explanation of the full training pipeline: pretraining → SFT → RLHF. Watch before reading papers."
  - title: "Anthropic — Prompt Engineering Guide"
    url: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
    note: "What prompting can actually achieve before you reach for fine-tuning. Covers system prompts, examples, and chain-of-thought."
  - title: "OpenAI — Fine-tuning Guide"
    url: https://platform.openai.com/docs/guides/fine-tuning
    note: "Practical guidance on when fine-tuning helps, data requirements, and how to evaluate results."
  - title: "Lima: Less Is More for Alignment (arXiv 2023)"
    url: https://arxiv.org/abs/2305.11206
    note: "Foundational result: 1000 high-quality examples suffice for instruction fine-tuning. Quality >> quantity."
  - title: "Chip Huyen — Fine-tuning LLMs in Practice"
    url: https://huyenchip.com/2023/05/02/rlhf.html
    note: "Clear breakdown of RLHF, DPO, and when each training approach applies."
---

## Overview

The instinct when an LLM doesn't do what you want is to reach for fine-tuning. Resist this. **Fine-tuning is an expensive, slow, and often unnecessary operation** when prompting hasn't been given a serious attempt.

The core distinction: prompting steers behaviour that already exists in the model's weights; fine-tuning modifies those weights to install new behaviour. Prompting is free and reversible. Fine-tuning requires data, compute, and ongoing maintenance — and it can silently degrade capabilities you didn't intend to change.

---

## Core Concepts

### What Prompting Can Do

A well-engineered prompt can: specify output format precisely, set persona and tone, activate reasoning strategies (chain-of-thought, few-shot examples), constrain the solution space, and direct the model toward tasks it already has latent capability for. Most capability gaps that seem like "the model can't do X" are actually "the model hasn't been told how to do X."

Start here. Use few-shot examples. Use system prompts. Use chain-of-thought. Only move to fine-tuning when a serious prompting attempt genuinely fails.

### What Fine-tuning Does

Fine-tuning continues training on a new dataset — typically pairs of (input, desired output). The model's weights are updated via gradient descent on this data. After fine-tuning, the model's default behaviour shifts: it's more likely to produce outputs that match the training distribution.

Fine-tuning installs:
- **Style and format consistency** — highly reliable output structure without extensive prompting
- **Domain vocabulary and conventions** — specialised terminology used correctly by default
- **Implicit task knowledge** — patterns from many examples that are hard to express in a prompt

Fine-tuning does NOT give the model knowledge it hasn't seen. It adjusts behaviour on existing capabilities, not factual recall.

### The Data Quality Principle

The LIMA paper (2023) showed that 1000 carefully curated examples outperform 50,000 noisy ones for instruction tuning. The key properties:
- **Correct**: the output is actually what you want
- **Diverse**: examples cover the full range of inputs the model will see
- **Consistent**: the style and format is uniform across examples

Scraping many examples cheaply and hoping quantity compensates for quality is the most common fine-tuning mistake.

### Hidden Costs

Beyond compute, fine-tuning carries:
- **Maintenance burden**: every base model update requires re-fine-tuning
- **Catastrophic forgetting**: the model may lose general capabilities while gaining specific ones
- **Overfitting**: too few examples → the model memorises rather than generalises
- **Evaluation debt**: you now need a benchmark to catch regressions on every update

### The Decision

Use prompting when: the capability exists in the base model, format requirements can be shown by example in the prompt, the task changes frequently.

Use fine-tuning when: prompting + RAG genuinely fails on the task, you need latency or cost efficiency (shorter prompts), the output format is highly consistent and complex, the domain is specialised enough that the base model lacks the vocabulary.

Use neither when: the task requires knowledge beyond the training cutoff (use RAG) or the capability doesn't exist in any current model (collect data and wait for the next generation).

---

## Key Questions Answered

**Q: What does fine-tuning actually change in the model?**

The weights — the numerical parameters that determine how the model processes tokens. Specifically, gradient descent nudges the weights to increase the probability of producing training outputs given training inputs. The model's architecture and overall knowledge base remain the same; its output distribution shifts toward the training data's distribution.

**Q: When does prompting fail in a way fine-tuning can fix?**

Three genuine cases: (1) highly consistent output format required without verbose prompting — fine-tuning makes it automatic; (2) domain-specific style or terminology that's hard to convey by example in a prompt; (3) latency/cost constraints that prevent using long prompts — fine-tuning bakes instructions into weights, so the prompt can be shorter.

**Q: Why does data quality matter more than quantity?**

Because fine-tuning learns the distribution of your examples. Noisy examples → noisy distribution. A model fine-tuned on 10,000 mediocre examples will reliably produce mediocre outputs. A model fine-tuned on 500 excellent examples will produce excellent outputs in that style. The LIMA paper is the empirical proof.

**Q: What are the hidden costs beyond compute?**

The maintenance cycle: every time the base model is updated, you must re-fine-tune or accept that your fine-tuned version is falling behind. You also need: a curated dataset (expensive to build), an evaluation suite (expensive to build), and expertise to manage the training run. These costs are often larger than the compute cost.

**Q: When is neither sufficient?**

When the knowledge doesn't exist in the model's weights and can't be retrieved. Example: reasoning about a proprietary internal system with no public documentation. Here you need RAG with internal docs, or a purpose-built model trained from scratch on domain data — both expensive. The correct answer is often: can the task be decomposed so the LLM handles reasoning while external systems handle knowledge?

---

## Annotated References

- **Karpathy — State of GPT**: The most time-efficient way to understand the full training pipeline. The section on SFT (supervised fine-tuning) and RLHF explains what each phase teaches the model and why the order matters.

- **Anthropic Prompt Engineering Guide**: Read this *before* fine-tuning. If the techniques here don't achieve your goal, fine-tuning is probably justified. If you haven't tried them, it isn't.

- **OpenAI Fine-tuning Guide**: Platform-specific but the conceptual guidance generalises. The "when to use fine-tuning" section is a useful checklist.

- **LIMA paper**: The key empirical result on data quality. "1000 carefully curated samples is sufficient for competitive instruction following." Changed the field's intuition about data requirements.

- **Chip Huyen — RLHF in Practice**: Clear explanation of RLHF and DPO (direct preference optimisation). Useful if you need to understand preference-based fine-tuning beyond supervised fine-tuning.

---

## Related Topics

- [AI Agents](ai-agents.md) — agents are built on top of base or instruction-tuned models; fine-tuning can specialise them for domains
- [Tool Use / Function Calling](tool-use.md) — models can be fine-tuned to use specific tools more reliably
- [RAG](rag.md) — the alternative to fine-tuning when the gap is factual knowledge rather than behaviour
