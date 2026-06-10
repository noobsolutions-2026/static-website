---
title: AI Agents
domain: ai
date: 2026-06-10
tags: [agents, llm, tool-use, planning, memory, react]
one_liner: "Software that perceives its environment, plans actions, uses tools, and acts autonomously toward a goal."
key_questions:
  - What separates an agent from a simple LLM call?
  - How does the ReAct loop work?
  - When do agents fail, and why?
  - What does memory mean for an agent?
  - How do multi-agent systems coordinate?
references:
  - title: "Andrej Karpathy — Intro to Large Language Models"
    url: https://www.youtube.com/watch?v=zjkBMFhNj_g
    note: Best first-principles introduction to how LLMs underpin agents
  - title: "Anthropic — Building Effective Agents"
    url: https://www.anthropic.com/research/building-effective-agents
    note: Practical patterns and anti-patterns from production deployments
  - title: "Lilian Weng — LLM-powered Autonomous Agents"
    url: https://lilianweng.github.io/posts/2023-06-23-agent/
    note: Comprehensive deep-dive covering planning, memory, and tool use
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: https://arxiv.org/abs/2210.03629
    note: The original ReAct paper — the foundation of most agent loop designs
  - title: "Anthropic MCP Specification"
    url: https://modelcontextprotocol.io
    note: The open standard for connecting agents to tools and data sources
---

## Overview

Start with the simplest possible question: what is the difference between calling an LLM once and running an agent?

A single LLM call takes an input, produces an output, and stops. An agent wraps an LLM in a loop: it gets a result, decides if the goal is met, and if not, takes an action (calling a tool, querying a database, writing to memory) and loops again. The loop is the agent.

## Core Concepts

### The ReAct Loop
The dominant pattern for agent reasoning is ReAct (Reasoning + Acting). Each iteration: **Reason** (think about the current state), **Act** (emit a structured tool call), **Observe** (append the result and loop). Terminates when the LLM emits a final answer instead of a tool call.

### Tool Use
An agent's capabilities are bounded by its tools. Tools are functions the LLM can call: web search, code execution, database queries, file writes, API calls. The LLM never executes code directly — it requests an action, the runtime executes it, the result comes back as an observation.

### Memory
Memory is how an agent escapes the context window — persisting information across turns or sessions.

Four types: **In-context** (ephemeral, context window), **External/retrieval** (vector DB, persistent), **Episodic** (log of past interactions), **Procedural** (baked into system prompt).

### Planning
Decompose complex goals into subtasks — **tree-of-thought** (explore multiple reasoning paths in parallel) and **plan-and-execute** (generate a full plan before acting) are two common patterns. **Reflexion** means the agent critiques its own failed attempt and retries with an improved plan. These are enhancements layered on top of the ReAct loop, not replacements for it. Most production agents use the simplest planning that works.

### Multi-Agent Systems
An orchestrator agent delegates subtasks to specialist agents. Coordination via shared memory or explicit message passing.

## Key Questions Answered

**Q: What separates an agent from a simple LLM call?**
A loop and state. An LLM call is stateless and single-turn. An agent maintains state across multiple LLM calls and uses it to decide what to do next.

**Q: How does the ReAct loop work?**
The LLM is given a system prompt describing available tools and a goal. Each turn it produces either a tool call (name + arguments) or a final answer. The runtime executes tool calls and appends results; a final answer terminates the loop.

**Q: When do agents fail, and why?**
Context overflow, tool call hallucination, loop divergence, cost explosion. Good design bounds all: max loop depth, tool call validation, clear termination criteria.

**Q: What does memory mean for an agent?**
How an agent persists information beyond a single context window. Choosing the right memory type (in-context vs external) for a task is a key design decision.

**Q: How do multi-agent systems coordinate?**
Shared state (simpler, creates contention) or explicit messaging (more robust, adds overhead).

## Annotated References

- **Karpathy — Intro to Large Language Models**: Best entry point. Watch before reading anything else.
- **Anthropic — Building Effective Agents**: Key insight: simple loops with well-defined tools outperform over-engineered frameworks.
- **Lilian Weng — LLM-powered Autonomous Agents**: Most comprehensive overview. Dense but worth it.
- **ReAct paper (arXiv 2210.03629)**: Short and readable. Gives the mental model for 80% of agent loops.
- **Anthropic MCP Specification**: The open standard for connecting agents to tools and data sources.

## Related Topics

RAG · Tool Use / Function Calling · Model Context Protocol (MCP) · Fine-tuning vs Prompting · [How to Research, Learn & Present a Domain](../method/research-methodology.md)
