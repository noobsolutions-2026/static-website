---
name: lint-wiki
description: Health check the entire research wiki. Finds orphan pages, missing cross-references, index gaps, broken related-topic links, stale pages, and suggests new connections. Run periodically to keep the wiki healthy as it grows.
disable-model-invocation: true
---

# Lint Wiki

Run a full health check across the research hub. Check every item below and produce a report.

## 1 — Index Completeness

Read `research/index.md`. Compare to actual files in `research/`:
- Every `.md` file in `research/<domain>/` (excluding index.md and log.md) must have an entry in the index
- Every entry in the index must point to a file that exists
- Report: missing from index, orphan entries (in index but file gone)

## 2 — HTML Parity

Every `research/<domain>/<slug>.md` must have a corresponding `public/<domain>/<slug>.html`:
- Report any `.md` with no matching `.html` (page written but not rendered)
- Report any `.html` with no matching `.md` (HTML exists but source is gone)

## 3 — Related Topics Link Health

For each research page HTML in `public/`:
- Read the `.related-tags` section
- For any chip that contains text matching a known page slug (from the index), it should be an `<a href>` link, not a plain `<span>`
- Report all dead chips that should be live links (with suggested href)

## 4 — Cross-Reference Symmetry

Read the Cross-Reference Map in `research/index.md`.
For each pair (A ↔ B):
- Check that A's HTML `.related-tags` contains a link to B
- Check that B's HTML `.related-tags` contains a link to A
- Report any asymmetric or missing links

Also scan all research page HTML for mentions of other page topics (by title or slug) that are NOT yet in the Cross-Reference Map — suggest new connections.

## 5 — Nav Consistency

Read all HTML files in `public/`. Verify every page has identical nav content:
- 7 links in order: Home, AI/LLM, Technology, Cloud, Governance, Finance, Method
- Each link's `href` is correct for the page's directory level
- `class="active"` is on the correct link only
- Report any deviation with file and line number

## 6 — Internal Link Validity

For each HTML file in `public/`, extract all `href` values that are not external (`http`/`https`) or anchor-only (`#`). Verify each resolves to an existing file relative to the HTML file's directory. Report broken links.

## 7 — Staleness Check

Read the `date:` frontmatter field from each `.md` in `research/`. Flag any page where the date is more than 180 days before today as potentially stale. Include page title, domain, date, and a suggestion for what might have changed.

## 8 — Gap Analysis

Based on the topics covered and the Cross-Reference Map, suggest:
- Topics within existing domains that are mentioned but have no page (e.g. "RAG" is in AI Agents related topics but has no page)
- Potential cross-domain connections not yet captured

## Report Format

```
WIKI LINT REPORT — [date]

✅ Index: 2/2 pages indexed, 0 orphans
❌ HTML Parity: research/technology/zero-trust.md has no matching HTML
✅ Related Topic Links: all known-page chips are live links
❌ Cross-Reference Symmetry: ai/ai-agents → method/research-methodology missing (research-methodology links back but ai-agents does not)
✅ Nav Consistency: all 9 pages consistent
✅ Internal Links: no broken links
✅ Staleness: no pages older than 180 days
📋 Gap Analysis:
   - "RAG" mentioned in ai-agents related topics — no page exists yet
   - "MCP" mentioned in ai-agents related topics — no page exists yet
   - "Zero Trust" mentioned in research-methodology source quality example — potential technology page

RESULT: 2 issues found. Fix before next ingest.
```
