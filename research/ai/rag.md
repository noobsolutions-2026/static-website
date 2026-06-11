---
title: "Retrieval-Augmented Generation (RAG)"
domain: ai
date: 2026-06-11
tags: [rag, retrieval, embeddings, vector-store, knowledge]
one_liner: "Giving an LLM access to external knowledge at query time by retrieving relevant documents and injecting them into the prompt — without retraining."
key_questions:
  - "What problem does RAG solve that prompting alone cannot?"
  - "What happens at each step of the RAG pipeline?"
  - "Why do retrieved documents sometimes hurt generation quality?"
  - "How do you choose chunk size and overlap?"
  - "When is RAG not enough — and what replaces it?"
references:
  - title: "Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv 2020)"
    url: https://arxiv.org/abs/2005.11401
    note: "The original RAG paper. Defines the pattern and shows it outperforms parametric-only models on knowledge-intensive tasks."
  - title: "Lilian Weng — Retrieval Augmented Generation"
    url: https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/
    note: "Dense but comprehensive. Covers naive RAG, advanced RAG, and modular RAG with concrete failure modes."
  - title: "LlamaIndex — RAG from Scratch"
    url: https://docs.llamaindex.ai/en/stable/getting_started/concepts/
    note: "Best practical introduction. Walks through chunking, embedding, retrieval, and generation with runnable examples."
  - title: "Anthropic — Contextual Retrieval"
    url: https://www.anthropic.com/news/contextual-retrieval
    note: "Anthropic's take on improving retrieval quality by prepending chunk-level context before embedding."
  - title: "Jerry Liu — Advanced RAG Techniques"
    url: https://towardsdatascience.com/advanced-rag-techniques-an-illustrated-overview-04d193d8fec6
    note: "Illustrated overview of re-ranking, HyDE, multi-query retrieval, and other production improvements."
---

## Overview

An LLM's knowledge is frozen at training time. Ask it about a document you wrote yesterday, a regulation that changed last month, or anything proprietary — and it can only hallucinate or admit ignorance. RAG solves this without retraining: at query time, retrieve relevant documents from an external store, inject them into the prompt, and let the LLM answer from that grounded context.

The core insight is deceptively simple: **an LLM that can read is more capable than one that only remembers.**

---

## Core Concepts

### The Knowledge Cutoff Problem

Every LLM is a compressed snapshot of text seen during training. Two failure modes follow:

1. **Staleness** — the model doesn't know about events, documents, or changes after its cutoff.
2. **Hallucination** — when asked about facts it didn't see, it confabulates plausible-sounding answers.

RAG addresses both by grounding answers in retrieved documents that exist outside the model's weights.

### The RAG Pipeline

Two separate pipelines operate in sequence:

**Ingestion (offline):**
1. Collect source documents
2. Split into chunks (the retrieval unit)
3. Embed each chunk into a vector
4. Store vectors + chunk text in a vector database

**Retrieval + Generation (online, per query):**
1. Embed the user's query
2. Find the top-K most similar chunk vectors (cosine or dot product similarity)
3. Inject the retrieved chunks into the prompt as context
4. LLM generates an answer grounded in that context

### Chunking

The retrieval unit. A chunk too small loses context; a chunk too large dilutes the signal and fills the context window with irrelevant content. Common starting points: 512–1024 tokens with 10–20% overlap between adjacent chunks to prevent boundary loss.

Chunk strategy affects retrieval quality more than almost any other variable. Semantic chunking (splitting at paragraph/section boundaries) consistently outperforms fixed-size chunking.

### Embeddings

A vector representation of a piece of text that positions semantically similar texts near each other in high-dimensional space. The embedding model is a critical choice — it determines what "similar" means for your retrieval. General-purpose embeddings (e.g. text-embedding-3-large) work broadly; domain-specific embeddings can significantly improve recall on technical content.

### Retrieval Quality

Retrieval quality is almost always the bottleneck in production RAG. Common failure modes:
- **Wrong top-K** — the relevant chunk isn't in the retrieved set at all
- **Dilution** — the right chunk is retrieved but buried among irrelevant ones
- **Contradiction** — retrieved chunks conflict, confusing the LLM
- **Semantic gap** — the query phrasing doesn't match the document phrasing even if the meaning is the same

---

## Key Questions Answered

**Q: What problem does RAG solve that prompting alone cannot?**

Prompting can only work with what the model already knows. RAG extends that with any document you can retrieve. The combination is powerful: the LLM contributes reasoning and language; the retrieval system contributes up-to-date, domain-specific, or proprietary knowledge.

**Q: What happens at each step of the RAG pipeline?**

Ingestion: documents → chunks → embeddings → vector store. Query: embed query → similarity search → retrieve top-K chunks → inject into prompt → LLM generates. The query and chunk embeddings must come from the same model — different embedding spaces are incompatible.

**Q: Why do retrieved documents sometimes hurt quality?**

Three reasons. First, irrelevant chunks add noise — the LLM may latch onto misleading content. Second, contradictory chunks confuse the model. Third, a large number of chunks consumes context window capacity that could have been used for reasoning. Retrieval precision (not just recall) matters enormously.

**Q: How do you choose chunk size and overlap?**

Start with 512–1024 tokens and 10–20% overlap, then evaluate retrieval recall on a representative query set. Smaller chunks give more precise retrieval; larger chunks give more context per retrieved unit. The right size depends on your documents: structured technical docs → larger; conversational transcripts → smaller.

**Q: When is RAG not enough?**

When the task requires reasoning over the entire corpus at once (RAG only retrieves fragments). When the knowledge is stable, well-defined, and comprehensive — fine-tuning bakes it into the weights directly. When sub-100ms latency is required — retrieval adds latency. When the model needs to have internalised a writing style or domain convention, not just recall facts.

---

## Annotated References

- **Lewis et al. — RAG (arXiv 2020)**: The foundational paper. Read the abstract and Sections 2–3 to understand the original formulation. The key result: RAG outperforms parametric-only and retrieval-only baselines on open-domain QA.

- **Lilian Weng — RAG blog post**: The best single reference for understanding the full design space — from naive RAG to modular RAG with fine-tuned retrievers. Dense but worth it if you're building a production system.

- **LlamaIndex concepts**: The most practical entry point. Skips the theory and shows you how each component works with actual code. Start here before reading the papers.

- **Anthropic — Contextual Retrieval**: A specific technique that prepends document-level context to each chunk before embedding ("this chunk is from a contract dated X describing Y"). Significantly improves retrieval on documents where individual chunks lose meaning out of context.

- **Jerry Liu — Advanced RAG Techniques**: Good survey of production improvements: HyDE (hypothetical document embeddings), multi-query retrieval, re-ranking. Read after you understand naive RAG.

---

## Related Topics

- [AI Agents](ai-agents.md) — RAG is the standard implementation of external memory in agentic systems
- [Tool Use / Function Calling](tool-use.md) — retrieval can be modelled as a tool the agent calls
- [Model Context Protocol](model-context-protocol.md) — MCP can expose a RAG pipeline as an MCP resource
