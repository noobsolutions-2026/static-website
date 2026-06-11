---
title: "Model Context Protocol (MCP)"
domain: ai
date: 2026-06-11
tags: [mcp, tool-use, agents, integration, standard]
one_liner: "An open standard for connecting LLMs to external tools, data sources, and services — so any model can use any tool without custom integration code."
key_questions:
  - "What problem does MCP solve that function calling doesn't?"
  - "How do hosts, clients, and servers fit together?"
  - "What is the difference between a tool, a resource, and a prompt in MCP?"
  - "How does an MCP server expose capabilities to an LLM?"
  - "Why does standardisation matter for the agentic ecosystem?"
references:
  - title: "MCP Specification — modelcontextprotocol.io"
    url: https://modelcontextprotocol.io/specification
    note: "The authoritative spec. Read the Introduction and Core Architecture sections first."
  - title: "Anthropic — Introducing MCP"
    url: https://www.anthropic.com/news/model-context-protocol
    note: "The original announcement. Explains the motivation clearly and links to the reference implementations."
  - title: "MCP GitHub Repository"
    url: https://github.com/modelcontextprotocol
    note: "Official SDKs (Python, TypeScript), reference servers, and community servers. Good place to see working examples."
  - title: "Claude Code MCP Docs"
    url: https://docs.anthropic.com/en/docs/claude-code/mcp
    note: "Practical guide to adding MCP servers to Claude Code — the fastest way to see MCP working end-to-end."
  - title: "Simon Willison — MCP Explained"
    url: https://simonwillison.net/2024/Nov/25/model-context-protocol/
    note: "Clear explainer with concrete examples. Good if the spec feels dense."
---

## Overview

Before MCP, connecting an LLM to an external tool required custom code for every model-tool pair. Add a new tool to Claude? Write integration code. Switch to a different LLM? Rewrite it. The combinatorial problem grew with every new model and every new tool.

MCP solves this with a standard protocol: tools expose themselves as MCP servers, LLM hosts connect to them as MCP clients. Any server works with any client. The integration code is written once per server, not once per model-tool pair. **MCP is to LLM tool use what HTTP is to web communication** — a shared language that decouples producers from consumers.

---

## Core Concepts

### The Integration Problem

Without a standard, each LLM integration is bespoke:
- Anthropic has tool use with its own schema
- OpenAI has function calling with its own schema
- Local models have their own formats

A tool built for Claude can't be used by GPT-4 without rewriting. A client written for one tool can't use another without new code. The ecosystem fragments.

MCP defines a transport-agnostic protocol (JSON-RPC 2.0 over stdio or HTTP/SSE) that any model and any tool can speak.

### Three-Layer Architecture

**Host** — the application the user interacts with (e.g. Claude Code, an IDE, a custom app). The host launches and manages MCP clients.

**Client** — lives inside the host; maintains a one-to-one connection with one MCP server; translates between the host's needs and the server's protocol.

**Server** — a lightweight process that exposes capabilities (tools, resources, prompts) via the MCP protocol. Could be a filesystem bridge, a database connector, a GitHub API wrapper, or anything else.

### Three Capability Types

**Tools** — functions the LLM can call. Have a name, description, and JSON schema for parameters. The LLM decides when to call a tool based on the description. Example: `search_files(query, directory)`.

**Resources** — data the LLM can read, referenced by URI. Statically available context: file contents, database rows, live API data. The LLM requests specific resources; the server fetches and returns them. Example: `file:///project/README.md`.

**Prompts** — reusable prompt templates the server exposes. The host can surface these to the user as slash commands or quick actions. Example: `/review-code` → a structured code review prompt template.

### Connection Lifecycle

1. Host launches MCP server as a subprocess (or connects over HTTP)
2. Client sends `initialize` — negotiates protocol version and capabilities
3. Client calls `tools/list`, `resources/list` to discover what the server offers
4. During a conversation, LLM emits a tool call → client routes to the correct server → server executes → result returned as tool output
5. Session ends when the host terminates the server

---

## Key Questions Answered

**Q: What problem does MCP solve that function calling doesn't?**

Function calling defines *how* an LLM calls a function within a single model's API. MCP defines *how tools expose themselves* in a model-agnostic way. Function calling is the LLM side; MCP is the tool side. With MCP, a tool built once works with any model that speaks MCP, and a client written once can use any MCP server without modification.

**Q: How do hosts, clients, and servers fit together?**

The host is the user-facing application (Claude Code, VS Code, a custom chatbot). It creates MCP clients — one per server it wants to connect to. Each client maintains a persistent connection to one MCP server. The server runs as a separate process and responds to client requests. The LLM never talks directly to servers; everything is mediated through host → client → server.

**Q: What is the difference between a tool, a resource, and a prompt?**

Tools are actions (the LLM calls them to do things). Resources are data (the LLM reads them as context). Prompts are templates (the host surfaces them as user-invocable shortcuts). A database MCP server might expose `execute_query` as a tool, table schemas as resources, and a `describe-schema` prompt template.

**Q: How does an MCP server expose capabilities to an LLM?**

The server responds to `tools/list` with an array of tool definitions — each with a name, description, and JSON schema. The host injects these definitions into the LLM's context (as part of the system prompt or tool spec). The LLM reads the descriptions and decides when to call which tool. **The quality of the description is the quality of the tool** — a poorly described tool won't get called correctly.

**Q: Why does standardisation matter for the agentic ecosystem?**

Agents need many tools. Without a standard, building a capable agent means writing custom integrations for every tool it uses. With MCP, tool builders write one server; agent builders write one client; both work with everything. The ecosystem grows in parallel instead of fragmenting. The analogy: USB-C vs proprietary connectors — standardisation unlocks composability.

---

## Annotated References

- **MCP Specification**: Start with the Introduction section — it explains the motivation in two pages better than any blog post. Then read Core Architecture to understand the three-layer model.

- **Anthropic — Introducing MCP**: The original announcement. Worth reading for the stated motivation: "the M×N integration problem" — M models × N tools = M×N custom integrations without a standard.

- **MCP GitHub Repository**: The reference Python and TypeScript SDKs are the best way to understand the protocol in practice. The `server-filesystem` reference implementation is ~200 lines and shows the full pattern.

- **Claude Code MCP Docs**: The fastest path from zero to a working MCP integration. Shows how to add existing community servers (context7, GitHub) and how to verify they're working.

- **Simon Willison — MCP Explained**: Good if the spec feels abstract. Willison is a reliable "what does this actually mean in practice" commentator on AI tooling.

---

## Related Topics

- [AI Agents](ai-agents.md) — MCP is the standard way to connect agents to tools and data in production
- [Tool Use / Function Calling](tool-use.md) — function calling is the LLM-side mechanism that MCP servers are built on top of
- [RAG](rag.md) — a RAG pipeline can be exposed as an MCP resource or search tool
