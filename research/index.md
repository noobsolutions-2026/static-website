# Research Hub — Wiki Index

Machine-readable catalog of all research pages. Updated by the `new-research-page` skill on every ingest. Read this first when answering cross-domain queries or checking what's already been covered.

---

## AI / LLM

| Page | Slug | One-liner | Tags | Date |
|------|------|-----------|------|------|
| [AI Agents](ai/ai-agents.md) | `ai-agents` | Software that perceives its environment, plans actions, uses tools, and acts autonomously toward a goal. | agents, llm, tool-use, planning, memory, react | 2026-06-10 |
| [RAG](ai/rag.md) | `rag` | Giving an LLM access to external knowledge at query time by retrieving relevant documents and injecting them into the prompt — without retraining. | rag, retrieval, embeddings, vector-store, knowledge | 2026-06-11 |
| [Tool Use / Function Calling](ai/tool-use.md) | `tool-use` | The mechanism by which an LLM emits a structured request to call an external function — and receives the result back as context, extending its capabilities beyond text generation. | tool-use, function-calling, agents, api | 2026-06-11 |
| [Model Context Protocol (MCP)](ai/model-context-protocol.md) | `model-context-protocol` | An open standard for connecting LLMs to external tools, data sources, and services — so any model can use any tool without custom integration code. | mcp, tool-use, standard, integration | 2026-06-11 |
| [Fine-tuning vs Prompting](ai/fine-tuning-vs-prompting.md) | `fine-tuning-vs-prompting` | The choice between teaching a model new behaviour by updating its weights versus guiding existing behaviour through instructions — and why prompting should almost always come first. | fine-tuning, prompting, training, llm, alignment | 2026-06-11 |

## Technology
*(no pages yet)*

## Cloud
*(no pages yet)*

## Governance

| Page | Slug | One-liner | Tags | Date |
|------|------|-----------|------|------|
| [AI Governance](governance/ai-governance.md) | `ai-governance` | The system of policies, roles, and controls by which an organisation directs and constrains its use of AI — so the benefits are captured and the harms are bounded. | ai-governance, risk, policy, controls, accountability | 2026-06-15 |
| [AI Acceptable Use Policy (AUP)](governance/ai-acceptable-use-policy.md) | `ai-acceptable-use-policy` | The single document that tells everyone in an organisation what they may and may not do with AI — the first and most leveraged control in any AI governance program. | ai-governance, policy, acceptable-use, data-handling, controls | 2026-06-15 |

## Finance
*(no pages yet)*

## Method

| Page | Slug | One-liner | Tags | Date |
|------|------|-----------|------|------|
| [How to Research, Learn & Present a Domain](method/research-methodology.md) | `research-methodology` | The art of compressing a complex domain into stable mental models — and presenting them so others can build from first principles. | learning, mental-models, pedagogy, first-principles, feynman, knowledge | 2026-06-10 |
| [Spaced Repetition](method/spaced-repetition.md) | `spaced-repetition` | A study technique that schedules reviews at increasing intervals — reviewing material just before you would forget it, maximising long-term retention per unit of study time. | spaced-repetition, memory, retention, learning, flashcards | 2026-06-11 |
| [Zettelkasten Method](method/zettelkasten.md) | `zettelkasten` | A note-taking system where each idea lives in its own atomic note, linked to others by explicit connections — building a network of thought rather than a hierarchy of folders. | zettelkasten, note-taking, knowledge-management, linking, atomic-notes | 2026-06-11 |

---

## Cross-Reference Map

Tracks bidirectional links between pages. Maintained by the `new-research-page` skill.

| Page A | Page B | Connection |
|--------|--------|------------|
| ai/ai-agents | method/research-methodology | AI Agents is the flagship first-principles example used in the methodology page |
| ai/fine-tuning-vs-prompting | ai/rag | Fine-tuning alternative when the gap is factual knowledge rather than behaviour |
| ai/fine-tuning-vs-prompting | ai/tool-use | Models can be fine-tuned to use specific tools more reliably |
| ai/fine-tuning-vs-prompting | ai/ai-agents | Agents are built on top of base or instruction-tuned models |
| method/spaced-repetition | method/zettelkasten | Zettelkasten builds connections; SRS builds reflexive recall of components |
| method/spaced-repetition | method/research-methodology | SRS is the retention mechanism for knowledge built through research |
| method/zettelkasten | method/research-methodology | Zettelkasten is the knowledge-management implementation of the compression principle |
| governance/ai-governance | ai/ai-agents | Agentic AI is the hardest governance case — autonomy means the system takes actions, not just produces text |
| governance/ai-acceptable-use-policy | governance/ai-governance | The AUP is the first and most leveraged control the governance operating model puts in place |

---

*Total: 10 pages · 3 domains active · 3 domains pending*  
*Last updated: 2026-06-15*
