---
title: "Tool Use / Function Calling"
domain: ai
date: 2026-06-11
tags: [tool-use, function-calling, agents, react, integration]
one_liner: "The mechanism by which an LLM emits a structured request to call an external function — and receives the result back as context, extending its capabilities beyond text generation."
key_questions:
  - "How does the LLM decide when and whether to use a tool?"
  - "What happens between the tool call and the result?"
  - "Why does tool description quality matter more than tool quantity?"
  - "How do parallel tool calls work, and when should you use them?"
  - "What makes a tool reliable vs brittle in production?"
references:
  - title: "Anthropic — Tool Use Documentation"
    url: https://docs.anthropic.com/en/docs/build-with-claude/tool-use
    note: "Definitive reference for Claude's tool use API — schemas, formats, multi-turn patterns, and best practices."
  - title: "Anthropic — Building Effective Agents"
    url: https://www.anthropic.com/research/building-effective-agents
    note: "Production patterns for tool-using agents. Key insight: fewer, well-defined tools outperform many ambiguous ones."
  - title: "ReAct: Synergizing Reasoning and Acting (arXiv 2022)"
    url: https://arxiv.org/abs/2210.03629
    note: "The paper that named the Reason-Act-Observe loop underlying most tool-using agents."
  - title: "Berkeley Function Calling Leaderboard"
    url: https://gorilla.cs.berkeley.edu/leaderboard.html
    note: "Empirical benchmark of model tool-calling accuracy across function types and nesting complexity."
  - title: "Lilian Weng — Tool-Augmented Language Models"
    url: https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/
    note: "Comprehensive survey of tool-augmented LMs from MRKL to ReAct to Toolformer."
---

## Overview

An LLM operating alone is bounded by what it can generate: text that reflects its training. Tool use removes that boundary. Give the model a search tool and it can look things up. Give it a code executor and it can run programs. Give it an API client and it can take actions in the world.

The mechanism is elegant: the LLM outputs a structured tool call (a JSON object specifying a function name and arguments), the runtime executes it, the result is appended to the conversation as an observation, and the LLM continues. **The loop — reason, act, observe — is the same pattern whether the tool is a calculator or a database.**

---

## Core Concepts

### The Tool Call Lifecycle

1. **Definition**: Developer provides a list of available tools with name, description, and parameter schema
2. **Decision**: LLM reads tool definitions and, when it needs external capability, emits a `tool_use` content block instead of (or alongside) text
3. **Execution**: Runtime (not the LLM) validates the arguments against the schema and calls the actual function
4. **Observation**: The result is returned to the LLM as a `tool_result` content block
5. **Continuation**: LLM reads the result and continues — either calling another tool, synthesising a final answer, or asking a follow-up

The LLM never executes code directly. It only proposes; the runtime decides whether and how to execute.

### Tool Definition Anatomy

A tool definition has three components that together determine how well the LLM uses it:

- **Name**: Short, verb-noun form. `search_web`, `read_file`, `execute_sql`. Names are parsed by the model — clear names improve selection accuracy.
- **Description**: The most important field. Should answer: what does this tool do, when should I use it, what does it return. Vague descriptions produce vague tool calls.
- **Parameter schema**: JSON Schema defining the inputs. Include descriptions on every parameter, mark which are required, specify enums where the set of valid values is finite.

### Parallel vs Sequential Tool Calls

**Sequential**: One tool call per LLM turn. Simple, easy to reason about, but slow for independent operations.

**Parallel**: Multiple tool calls in a single LLM turn (supported by most modern models). The LLM decides when calls are independent — it emits multiple `tool_use` blocks and the runtime can execute them concurrently. Use parallel calls when fetching data from multiple independent sources. Avoid when the result of one call is needed as input to another.

### Tool Reliability in Production

The most common failure modes:
- **Wrong arguments**: LLM passes incorrect types or formats. Fix: tighten parameter schemas and add validation.
- **Hallucinated tool names**: LLM calls tools that don't exist. Fix: explicit system prompt listing available tools.
- **Overuse**: LLM calls tools when text generation would suffice. Fix: describe when NOT to use each tool.
- **Underuse**: LLM tries to answer from memory when it should retrieve. Fix: instruct the model to prefer tool results over recalled knowledge for factual queries.

---

## Key Questions Answered

**Q: How does the LLM decide when and whether to use a tool?**

Based entirely on the tool descriptions and the current context. There's no separate routing layer — the same model that generates text also decides to call tools. The decision is learned from training on examples of appropriate tool use. This means description quality is the primary control surface: a well-described tool gets called appropriately; a poorly-described one gets called incorrectly or not at all.

**Q: What happens between the tool call and the result?**

The LLM emits a structured `tool_use` block and stops. Control passes to the runtime, which: validates arguments against the schema, executes the function, handles errors, formats the result, and appends it as a `tool_result` block. The LLM then gets a new turn with the result in context. The LLM has no visibility into what happened during execution — it only sees the formatted result.

**Q: Why does description quality matter more than quantity?**

With ten well-described tools, the LLM can make accurate selections and correct calls. With fifty vaguely-described tools, it struggles to pick the right one and often gets arguments wrong. Tool calls also consume context — large tool lists eat into the space available for reasoning. A focused, well-documented toolkit outperforms a comprehensive but ambiguous one in production.

**Q: How do parallel tool calls work?**

When the LLM's reasoning determines that multiple tools can be called without depending on each other's results, it emits multiple `tool_use` blocks in a single response. The runtime executes them (potentially in parallel) and returns all results together. The LLM then has all results available for its next turn. The model decides when calls are independent — this is part of its reasoning, not an external coordination layer.

**Q: What makes a tool reliable vs brittle?**

Reliable tools: idempotent where possible, return structured results, handle errors gracefully and return useful error messages rather than exceptions. Brittle tools: side effects on every call, return unstructured text requiring the LLM to parse, throw raw exceptions that confuse the model. Designing tools for LLM consumption is different from designing them for humans — error messages should explain what went wrong in terms the LLM can act on.

---

## Annotated References

- **Anthropic Tool Use Docs**: The reference implementation for how tool use works with Claude. The multi-turn examples (sections on `tool_result` and continuing the conversation) are the most practically useful.

- **Building Effective Agents**: The production insight: "the simplest working tool set" beats "the most comprehensive tool set." Fewer tools with clearer descriptions produce more reliable agent behaviour.

- **ReAct paper**: Short (8 pages). Defines the Reason-Act-Observe pattern formally and shows it outperforms pure reasoning (chain-of-thought) and pure acting (action-only) on knowledge and decision tasks.

- **Berkeley Function Calling Leaderboard**: Empirical benchmarks across models on function calling accuracy. Useful for model selection when tool use is a primary workload.

- **Lilian Weng — Tool-Augmented LMs**: The historical survey — from MRKL (modular reasoning + knowledge) through Toolformer (self-supervised tool learning) to modern function calling. Shows how the current approach evolved.

---

## Related Topics

- [AI Agents](ai-agents.md) — tool use is the mechanism that gives agents capabilities; the ReAct loop IS tool use in a loop
- [Model Context Protocol (MCP)](model-context-protocol.md) — MCP standardises how tools are exposed to LLMs across models
- [RAG](rag.md) — retrieval can be implemented as a tool the agent calls on demand
- [Fine-tuning vs Prompting](fine-tuning-vs-prompting.md) — prompting governs when tools are called; fine-tuning can encode tool-use patterns
