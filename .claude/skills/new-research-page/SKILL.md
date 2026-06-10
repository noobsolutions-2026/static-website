---
name: new-research-page
description: Full workflow to add a research page to the hub — writes Markdown source, renders two-zone HTML, updates domain hub index, updates home topic count, cross-references existing pages, updates wiki index and log. All seven steps, in order, without stopping.
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

## Step 5 — Cross-reference existing pages

Read `research/index.md` to get all existing pages and their topics/tags.

For each existing page whose topics overlap meaningfully with the new page:
1. Add the new page as a live `<a href>` link in that page's HTML `.related-tags` div (if not already there)
2. Add the existing page as a live `<a href>` link in the new page's HTML `.related-tags` div
3. Add the pair to the Cross-Reference Map table in `research/index.md` with a one-line description of the connection

**What counts as meaningful overlap**: shared tags, one page being an example of the other's concept, or the topics being prerequisites/extensions of each other. Use judgment — 2–4 cross-references per page is healthy; more than 6 is noise.

Relative href from `public/<domain-a>/<slug-a>.html` to `public/<domain-b>/<slug-b>.html`:
- Same domain: `<slug-b>.html`
- Different domain: `../<domain-b>/<slug-b>.html`

## Step 6 — Update wiki index

File: `research/index.md`

Add a row to the domain's table:
```
| [<Title>](<domain>/<slug>.md) | `<slug>` | <one_liner> | <tags comma-separated> | <date> |
```

Update the footer line: increment total page count and update "Last updated" date.

## Step 7 — Append to wiki log

File: `research/log.md`

Append at the end:
```markdown
## [YYYY-MM-DD] ingest | <Title> (<domain>)
**Files created:** research/<domain>/<slug>.md, public/<domain>/<slug>.html
**Files updated:** public/<domain>/index.html (topic card), public/index.html (count N→N+1)
**Topics covered:** <comma-separated list of key concepts from the page>
**Cross-references added:** <new-slug> → <existing-slug> (<one-line reason>), ... or "none"
```

## After All Steps

Run a final check:
- All `href` values in the new HTML resolve to existing files
- Nav is identical across all pages (no domain missing)
- Breadcrumb links in the new HTML are correct
- New page appears in `research/index.md`
- Log entry appended to `research/log.md`

Do NOT commit. User reviews Markdown source and HTML before pushing.
