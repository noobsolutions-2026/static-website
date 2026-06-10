# Research Hub — Claude Context

A personal research knowledge base published via GitHub Pages. Domain-focused, AI-assisted, built from first principles. All content is public-safe — no personal details.

## Authoring Workflow

Every new research page follows 7 steps (all handled by `/new-research-page`):

1. Write `research/<domain>/<slug>.md` — Markdown source with frontmatter
2. Render `public/<domain>/<slug>.html` — Two-zone HTML page
3. Update `public/<domain>/index.html` — Add topic card
4. Update `public/index.html` — Increment domain topic count
5. Cross-reference existing pages — add live `<a>` links in related pages' `.related-tags`
6. Update `research/index.md` — add row to domain table, update total count
7. Append to `research/log.md` — dated ingest entry with files touched and topics

**Shortcut**: Use the `/new-research-page` skill — it encodes all seven steps.

**Never commit automatically** — user always reviews the Markdown source before pushing.

## Wiki Operations (llm-wiki pattern)

The `research/` folder is a persistent, compounding wiki — not isolated pages.

| Operation | How | When |
|-----------|-----|------|
| **Ingest** | `/new-research-page <topic> for <domain>` | Adding new knowledge |
| **Query** | Ask questions; good answers can be filed back as pages | Exploring connections |
| **Lint** | `/lint-wiki` | Periodically — catches dead links, missing cross-refs, orphan pages |

**Wiki special files:**
- `research/index.md` — machine-readable catalog; LLM reads this first for cross-domain queries
- `research/log.md` — append-only ingest record; grep with `grep "^## \[" research/log.md`

## Domains

| Domain | CSS class | Accent colour | Focus |
|--------|-----------|---------------|-------|
| AI / LLM | `.ai` | `#6366f1` indigo | Agents, RAG, LLM internals, tool use |
| Technology | `.tech` | `#2563eb` blue | Security (ZTA, OWASP), networking, protocols |
| Cloud | `.cloud` | `#0891b2` cyan | AWS/GCP/Azure, Kubernetes, CNCF |
| Governance | `.gov` | `#7c3aed` violet | COBIT, ISO, risk, compliance |
| Finance | `.fin` | `#dc2626` red | Personal finance, investing, SG context |
| Method | `.method` | `#059669` emerald | Learning methodology, pedagogy, first principles |

## Key Conventions

Load the `research-conventions` skill before writing any research page HTML. Critical items:

- **Mermaid**: always pin `@10.9.3` with SRI hash `sha384-R63zfMfSwJF4xCR11wXii+QUsbiBIdiDzDbtxia72oGWfkT7WHJfmD/I/eeHPJyT`, `defer`, `DOMContentLoaded` guard
- **Nav**: 7 entries in order — Home, AI/LLM, Technology, Cloud, Governance, Finance, Method. When adding a new domain, update ALL existing HTML pages.
- **Headings**: h1 → h2 → h3 only. No h4+.
- **Chips**: always use domain class (`.ai`, `.tech`, etc.) — never inline colours
- **Accessibility**: `aria-label="Site"` on nav, `aria-hidden="true"` on decorative emoji, `<main class="page">` on research pages

## Quality Gate

After generating a research page, invoke the `research-page-reviewer` subagent to validate spec compliance before reporting done to the user.

## Local Testing

```bash
python3 -m http.server 8000 --directory public
# Visit http://localhost:8000
```

## Deployment

`git commit && git push` → GitHub Actions deploys `public/` to GitHub Pages in ~60 seconds.

## Reference Sources by Domain

- **AI/LLM**: Andrej Karpathy (YouTube + blog), Anthropic research, Lilian Weng blog, arXiv papers
- **Technology**: NIST, CISA, Cloudflare blog, OWASP, Bruce Schneier
- **Cloud**: AWS/GCP/Azure whitepapers, CNCF docs, Kelsey Hightower
- **Governance**: ISACA, COBIT, ISO standards, Gartner (public summaries)
- **Finance**: Investopedia, Ben Felix (YouTube), Bogleheads wiki, MAS guidelines
