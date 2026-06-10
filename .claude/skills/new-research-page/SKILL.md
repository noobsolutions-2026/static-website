---
name: new-research-page
description: Full workflow to add a research page to the hub — writes Markdown source, renders two-zone HTML, updates domain hub index, updates home topic count. All four steps, in order, without stopping.
disable-model-invocation: true
---

# New Research Page

**Invocation**: `/new-research-page <topic> for <domain>`  
**Example**: `/new-research-page Zero Trust Architecture for technology`

## Before Starting

Load the `research-conventions` skill — it contains the standing rules for Mermaid pinning, chip classes, nav pattern, and heading hierarchy that must be followed exactly.

## Step 1 — Write Markdown source

File: `research/<domain>/<slug>.md`

Slug = lowercase, hyphenated (e.g. `zero-trust-architecture`).

Required frontmatter:
```yaml
---
title: "<Full Topic Title>"
domain: <domain>          # ai | technology | cloud | governance | finance | method
date: <today YYYY-MM-DD>
tags: [tag1, tag2, tag3, tag4]
one_liner: "<Single sentence capturing the essence. No jargon.>"
key_questions:
  - "<Question 1 — reveals depth, not definition>"
  - "<Question 2>"
  - "<Question 3>"
  - "<Question 4>"
  - "<Question 5>"
references:
  - title: "<Source Name>"
    url: <url>
    note: "<One line: what it adds and why it matters>"
  - title: "..."
    url: ...
    note: "..."
  - title: "..."
    url: ...
    note: "..."
---
```

Body sections (Karpathy style — intuition before formalism):
- `## Overview` — simplest concrete example first, then build complexity
- `## Core Concepts` — h3 per concept, intuition sentence first
- `## Key Questions Answered` — Q: / A: format for each frontmatter question
- `## Annotated References` — each ref with a paragraph on what it adds
- `## Related Topics` — bullet list of links

## Step 2 — Render HTML page

File: `public/<domain>/<slug>.html`

Template: follow `public/ai/ai-agents.html` exactly for structure.

Critical requirements:
- Title: `<Topic> — <Domain Name> — Research Hub`
- CSS link: `../css/style.css`
- Mermaid script block (ONLY on pages with diagrams): pinned `@10.9.3`, SRI hash, `defer`, `DOMContentLoaded` guard
- Domain accent override in `<head>`: `<style>:root { --domain-accent: var(--<domain>); }</style>`
- Nav: all 7 domains in order (Home, AI/LLM, Technology, Cloud, Governance, Finance, Method), `class="active"` on CURRENT domain only
- `<main class="page">` wrapper
- `<div class="research-header">` with breadcrumb, h1, tag-row using domain chip class
- Quick Zone with: `.zone-label.quick`, one-liner, chip-row, key-questions ol, top-refs ul (3 links)
- Deep Zone with: `.zone-label.deep`, at least ONE `.diagram-wrap .mermaid` block, h2/h3 prose sections, Q&A `.qa-block` blocks, `.ref-list`, `.related-tags`
- Heading hierarchy: h1 → h2 → h3 only (no h4+)

## Step 3 — Update domain hub

File: `public/<domain>/index.html`

Add a `.topic-card` inside `.topic-grid`:
```html
<a href="<slug>.html" class="topic-card">
  <h3><Topic Title></h3>
  <p class="topic-one-liner"><one_liner from frontmatter></p>
  <div class="topic-tags">
    <span class="chip <domain>"><tag1></span>
    <span class="chip <domain>"><tag2></span>
    <span class="chip <domain>"><tag3></span>
    <span class="chip <domain>"><tag4></span>
  </div>
</a>
```

If the hub currently shows an empty state (`<p class="empty-state">`), replace it with a `.topic-grid`.

## Step 4 — Update home page

File: `public/index.html`

Increment the topic count for the domain hub card:  
`<p class="hub-count">N topics</p>` → `<p class="hub-count">N+1 topic(s)</p>`

## After All Steps

Run a final check:
- All `href` values in the new HTML resolve to existing files
- Nav is identical across all pages (no domain missing)
- Breadcrumb links in the new HTML are correct

Do NOT commit. User reviews Markdown source and HTML before pushing.
