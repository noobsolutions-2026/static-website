---
name: research-conventions
description: Standing conventions for the research hub — Mermaid pinning, chip colour classes, nav pattern, heading hierarchy, Karpathy style rules. Load before writing any research page HTML.
user-invocable: false
---

# Research Hub — Standing Conventions

## Mermaid Setup (on every page that uses diagrams)

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid.min.js"
        integrity="sha384-R63zfMfSwJF4xCR11wXii+QUsbiBIdiDzDbtxia72oGWfkT7WHJfmD/I/eeHPJyT"
        crossorigin="anonymous" defer></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof mermaid !== 'undefined') {
      mermaid.initialize({ startOnLoad: true, theme: 'neutral', fontSize: 14 });
    }
  });
</script>
```

Never change the version or hash. Never omit `defer` or the `DOMContentLoaded` guard.

## Domain Colour Classes

| Domain | CSS class | Accent var |
|--------|-----------|------------|
| AI/LLM | `.ai` | `var(--ai)` = `#6366f1` |
| Technology | `.tech` | `var(--tech)` = `#2563eb` |
| Cloud | `.cloud` | `var(--cloud)` = `#0891b2` |
| Governance | `.gov` | `var(--gov)` = `#7c3aed` |
| Finance | `.fin` | `var(--fin)` = `#dc2626` |
| Method | `.method` | `var(--method)` = `#059669` |

Use `<span class="chip <domain>">` — never inline styles. On domain hub pages and research pages, add to `<head>`:
```html
<style>:root { --domain-accent: var(--<domain>); }</style>
```

## Nav Order (all pages)

```html
<nav class="site-nav" aria-label="Site">
  <span class="nav-brand">Research Hub</span>
  <a href="[../]index.html">Home</a>
  <a href="[../]ai/index.html">AI / LLM</a>
  <a href="[../]technology/index.html">Technology</a>
  <a href="[../]cloud/index.html">Cloud</a>
  <a href="[../]governance/index.html">Governance</a>
  <a href="[../]finance/index.html">Finance</a>
  <a href="[../]method/index.html">Method</a>
</nav>
```

`class="active"` goes on the CURRENT page's link only. Use `../` prefix for domain-level pages; no prefix for root-level.

When a new domain is added, ALL existing HTML pages must have their nav updated.

## Heading Hierarchy

- `h1` — page title only (one per page)
- `h2` — major Deep Zone sections
- `h3` — subsections within h2
- Never use `h4` or deeper

## Karpathy Style Rules

1. **Start with the simplest concrete example** — not the definition, not the spec. "What is the minimal version of this that does something useful?"
2. **Intuition before formalism** — explain why it works before how it is specified
3. **Key questions reveal depth** — frame questions as "why does X behave this way?" not "what is X?"
4. **If a concept has a structure, draw it** — every research page must have at least one Mermaid diagram
5. **Curated references, not exhaustive bibliographies** — 3–5 links that each add something distinct; annotate each with what it adds and why it matters

## Accessibility

- All emoji icons: `aria-hidden="true"`
- Nav element: `aria-label="Site"`
- Page main: `<main class="page">` (research pages) or `<main class="page-wide">` (hub indexes)
- Zone labels (`.zone-label.quick` and `.zone-label.deep`) already meet WCAG AA — do not change their background colours

## File Naming

- Research slugs: lowercase, hyphen-separated, no special chars (e.g. `zero-trust-architecture.html`)
- Domain folders: lowercase single word (`ai`, `technology`, `cloud`, `governance`, `finance`, `method`)
