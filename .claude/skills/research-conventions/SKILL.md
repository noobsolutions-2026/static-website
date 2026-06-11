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

## Nav Order (all pages — includes mobile hamburger)

```html
<nav class="site-nav" aria-label="Site">
  <span class="nav-brand">Research Hub</span>
  <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false">
    <span class="hamburger-bar"></span>
    <span class="hamburger-bar"></span>
    <span class="hamburger-bar"></span>
  </button>
  <div class="nav-links">
    <a href="[../]index.html">Home</a>
    <a href="[../]ai/index.html">AI / LLM</a>
    <a href="[../]technology/index.html">Technology</a>
    <a href="[../]cloud/index.html">Cloud</a>
    <a href="[../]governance/index.html">Governance</a>
    <a href="[../]finance/index.html">Finance</a>
    <a href="[../]method/index.html">Method</a>
  </div>
</nav>
```

`class="active"` goes on the CURRENT page's link only. Use `../` prefix for domain-level pages; no prefix for root-level.

Every page must also load the mobile-nav script before `</body>`:
```html
<script src="[../]js/nav.js" defer></script>
```

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

## Reference Verification (mandatory before any page ships)

These rules exist because a fabricated reference (a Paul Graham essay that doesn't exist, URL 404) made it onto a published page in June 2026.

1. **Verify every reference URL resolves** before writing it into a page:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" -L --max-time 15 -A "Mozilla/5.0" "<url>"
   ```
   200 = good. 403 may be bot-blocking — confirm in a browser or find a stable alternative. 404 = the reference is wrong or invented; find the real source or drop it.
2. **Never cite a source from memory alone.** Titles, authors, and URLs must come from a live lookup, not from what "sounds right". If a search can't find the exact essay/paper/page, it does not exist — do not include it.
3. **Frontmatter `references` and the Annotated References section must list the same set.** No body-only references.
4. **Quantitative claims need hedging or a source.** Memory-research percentages, benchmark numbers, and version-specific tool behaviour drift; prefer "roughly", name the study, or state the version (e.g. "Anki since v23.10 recommends FSRS").
5. **Tool/version claims go stale** — when re-touching a page, re-check what the named tools currently do.
6. **Related Topics must be live links** in both `.md` (relative markdown links) and `.html` (`<a class="chip <domain>">` in `.related-tags`) — and bidirectional: if A links B, B links A. No dead plain-text chips for pages that exist; no chips at all for pages that don't.

## Accessibility

- All emoji icons: `aria-hidden="true"`
- Nav element: `aria-label="Site"`
- Page main: `<main class="page">` (research pages) or `<main class="page-wide">` (hub indexes)
- Zone labels (`.zone-label.quick` and `.zone-label.deep`) already meet WCAG AA — do not change their background colours

## File Naming

- Research slugs: lowercase, hyphen-separated, no special chars (e.g. `zero-trust-architecture.html`)
- Domain folders: lowercase single word (`ai`, `technology`, `cloud`, `governance`, `finance`, `method`)
