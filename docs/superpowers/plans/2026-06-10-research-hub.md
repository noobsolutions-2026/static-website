# Research Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static-website repo into a multi-domain research knowledge base published via GitHub Pages, with AI-assisted content generation and a two-zone page layout styled after Andrej Karpathy's pedagogical approach.

**Architecture:** Pure static HTML/CSS/JS — no build framework. A shared `public/css/style.css` powers all pages. Claude generates Markdown source in `research/` and rendered HTML in `public/`. GitHub Actions deploys `public/` on every push to main.

**Tech Stack:** HTML5, CSS3, Mermaid.js (CDN, v10 — for diagrams), GitHub Pages, GitHub Actions

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `public/css/style.css` | Create | Shared styles: nav, two-zone layout, concept chips, research cards, domain colours |
| `public/index.html` | Create | Home page — domain hub grid |
| `public/ai/index.html` | Create | AI/LLM domain hub — topic cards |
| `public/technology/index.html` | Create | Technology domain hub |
| `public/cloud/index.html` | Create | Cloud domain hub |
| `public/governance/index.html` | Create | Governance domain hub |
| `public/finance/index.html` | Create | Finance domain hub |
| `research/ai/ai-agents.md` | Create | Markdown source — AI Agents (flagship research page) |
| `public/ai/ai-agents.html` | Create | Rendered HTML — AI Agents (two-zone, Mermaid diagrams) |
| `.gitignore` | Modify | Add `.superpowers/` |
| `README.md` | Modify | Document research workflow |

---

### Task 1: Shared CSS + gitignore

**Files:**
- Create: `public/css/style.css`
- Modify: `.gitignore`

- [ ] **Step 1: Create the shared stylesheet**

Create `public/css/style.css`:

```css
/* === CSS Variables === */
:root {
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'Cascadia Code', monospace;
  --radius: 8px;
  --shadow: 0 1px 3px rgba(0,0,0,0.08);

  --ai:          #6366f1;
  --ai-bg:       #eef2ff;
  --ai-border:   #c7d2fe;
  --tech:        #2563eb;
  --tech-bg:     #eff6ff;
  --tech-border: #bfdbfe;
  --cloud:       #0891b2;
  --cloud-bg:    #ecfeff;
  --cloud-border:#a5f3fc;
  --gov:         #7c3aed;
  --gov-bg:      #f5f3ff;
  --gov-border:  #ddd6fe;
  --fin:         #dc2626;
  --fin-bg:      #fff1f2;
  --fin-border:  #fecdd3;
}

/* === Reset & Base === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: #1e293b;
  background: #f8fafc;
}
a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }
code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: #f1f5f9;
  padding: 1px 5px;
  border-radius: 4px;
}

/* === Nav === */
.site-nav {
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  height: 52px;
  position: sticky;
  top: 0;
  z-index: 10;
}
.site-nav .nav-brand {
  font-weight: 700;
  font-size: 0.95rem;
  color: #0f172a;
  margin-right: 2rem;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
.site-nav a {
  font-size: 0.875rem;
  color: #64748b;
  padding: 0 0.75rem;
  height: 52px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
  white-space: nowrap;
}
.site-nav a:hover,
.site-nav a.active {
  color: #0f172a;
  text-decoration: none;
  border-bottom-color: #6366f1;
}

/* === Page wrappers === */
.page      { max-width: 860px;  margin: 0 auto; padding: 2rem 1.5rem 4rem; }
.page-wide { max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }

/* === Home: domain hub grid === */
.hub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.hub-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  padding: 1.25rem;
  box-shadow: var(--shadow);
  transition: box-shadow 0.15s, transform 0.15s;
  display: block;
}
.hub-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  text-decoration: none;
}
.hub-card .hub-icon  { font-size: 1.75rem; margin-bottom: 0.5rem; }
.hub-card h2         { font-size: 1rem; font-weight: 600; color: #0f172a; }
.hub-card .hub-count { font-size: 0.8rem; color: #94a3b8; margin-top: 0.25rem; }
.hub-card .hub-desc  { font-size: 0.8rem; color: #64748b; margin-top: 0.5rem; line-height: 1.5; }

/* === Domain hub: topic cards === */
.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
.topic-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  padding: 1.25rem;
  box-shadow: var(--shadow);
  display: block;
  transition: box-shadow 0.15s, transform 0.15s;
}
.topic-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  text-decoration: none;
}
.topic-card h3               { font-size: 0.95rem; font-weight: 600; color: #0f172a; }
.topic-card .topic-one-liner { font-size: 0.8rem; color: #64748b; margin-top: 0.35rem; line-height: 1.5; }
.topic-card .topic-tags      { margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 5px; }

/* === Concept chips / tags === */
.chip {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 2px 9px;
  border-radius: 99px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
}
.chip.ai    { background: var(--ai-bg);    border-color: var(--ai-border);    color: var(--ai); }
.chip.tech  { background: var(--tech-bg);  border-color: var(--tech-border);  color: var(--tech); }
.chip.cloud { background: var(--cloud-bg); border-color: var(--cloud-border); color: var(--cloud); }
.chip.gov   { background: var(--gov-bg);   border-color: var(--gov-border);   color: var(--gov); }
.chip.fin   { background: var(--fin-bg);   border-color: var(--fin-border);   color: var(--fin); }

/* === Research page: two-zone layout === */
.research-header             { margin-bottom: 1.5rem; }
.research-header .breadcrumb { font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem; }
.research-header h1          { font-size: 1.75rem; font-weight: 700; color: #0f172a; letter-spacing: -0.02em; }
.research-header .tag-row    { margin-top: 0.5rem; display: flex; flex-wrap: wrap; gap: 6px; }

.quick-zone {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
}
.quick-zone-header {
  padding: 0.5rem 1.25rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.zone-label         { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 8px; border-radius: 99px; color: white; }
.zone-label.quick   { background: #0ea5e9; }
.zone-label.deep    { background: #6366f1; }
.quick-zone-body    { padding: 1.25rem; }

.one-liner {
  font-size: 1rem;
  font-style: italic;
  color: #334155;
  border-left: 3px solid #0ea5e9;
  padding-left: 0.75rem;
  margin-bottom: 1rem;
}
.chip-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1rem; }

.key-questions            { margin-bottom: 1rem; }
.key-questions h4         { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 0.5rem; }
.key-questions ol         { padding-left: 1.25rem; }
.key-questions li         { font-size: 0.875rem; color: #334155; margin-bottom: 0.25rem; }

.top-refs h4              { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 0.5rem; }
.top-refs ul              { list-style: none; padding: 0; }
.top-refs li              { font-size: 0.8rem; margin-bottom: 0.35rem; }
.top-refs a               { color: #2563eb; }
.top-refs .ref-note       { color: #94a3b8; margin-left: 0.35rem; }

.deep-zone {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.deep-zone-header {
  padding: 0.5rem 1.25rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.deep-zone-body                 { padding: 1.5rem 1.25rem; }
.deep-zone-body h2              { font-size: 1.1rem; font-weight: 600; color: #0f172a; margin: 1.5rem 0 0.5rem; }
.deep-zone-body h2:first-child  { margin-top: 0; }
.deep-zone-body h3              { font-size: 0.95rem; font-weight: 600; color: #334155; margin: 1rem 0 0.35rem; }
.deep-zone-body p               { font-size: 0.9rem; color: #475569; margin-bottom: 0.75rem; line-height: 1.7; }
.deep-zone-body ul,
.deep-zone-body ol              { padding-left: 1.5rem; margin-bottom: 0.75rem; }
.deep-zone-body li              { font-size: 0.9rem; color: #475569; margin-bottom: 0.35rem; }
.deep-zone-body .qa-block       { background: #f8fafc; border-radius: 6px; padding: 1rem; margin-bottom: 0.75rem; }
.deep-zone-body .qa-block .q   { font-weight: 600; color: #0f172a; margin-bottom: 0.35rem; font-size: 0.9rem; }
.deep-zone-body .qa-block .a   { font-size: 0.875rem; color: #475569; line-height: 1.7; margin: 0; }
.deep-zone-body .ref-list      { list-style: none; padding: 0; }
.deep-zone-body .ref-list li   { padding: 0.75rem; border: 1px solid #f1f5f9; border-radius: 6px; margin-bottom: 0.5rem; }
.deep-zone-body .ref-list a    { font-weight: 500; color: #2563eb; font-size: 0.875rem; }
.deep-zone-body .ref-list .ref-note { font-size: 0.8rem; color: #64748b; display: block; margin-top: 0.2rem; }
.related-tags                   { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 0.5rem; }

/* === Mermaid diagram container === */
.diagram-wrap {
  background: #fafafa;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
  text-align: center;
}

/* === Typography helpers === */
.page-title      { font-size: 1.75rem; font-weight: 700; color: #0f172a; letter-spacing: -0.02em; }
.page-subtitle   { font-size: 0.9rem; color: #64748b; margin-top: 0.35rem; }
.section-divider { border: none; border-top: 1px solid #e2e8f0; margin: 2rem 0; }
.empty-state     { color: #94a3b8; font-size: 0.875rem; text-align: center; padding: 3rem 0; }

/* === Footer === */
.site-footer {
  border-top: 1px solid #e2e8f0;
  padding: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 4rem;
  background: #fff;
}

/* === Responsive === */
@media (max-width: 600px) {
  .hub-grid   { grid-template-columns: 1fr 1fr; }
  .topic-grid { grid-template-columns: 1fr; }
  .site-nav   { overflow-x: auto; }
}
```

- [ ] **Step 2: Add `.superpowers/` to `.gitignore`**

Open `.gitignore` and append:

```
# Brainstorming visual companion session files
.superpowers/
```

- [ ] **Step 3: Start local server and verify CSS is accessible**

```bash
python3 -m http.server 8000 --directory public
```

Open http://localhost:8000/css/style.css — expect raw CSS, not a 404.

- [ ] **Step 4: Commit**

```bash
git add public/css/style.css .gitignore
git commit -m "feat: add shared stylesheet and update gitignore"
```

---

### Task 2: Home page

**Files:**
- Create: `public/index.html`

- [ ] **Step 1: Create the home page**

Create `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Research Hub</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="site-nav">
  <span class="nav-brand">Research Hub</span>
  <a href="index.html" class="active">Home</a>
  <a href="ai/index.html">AI / LLM</a>
  <a href="technology/index.html">Technology</a>
  <a href="cloud/index.html">Cloud</a>
  <a href="governance/index.html">Governance</a>
  <a href="finance/index.html">Finance</a>
</nav>

<div class="page-wide">
  <h1 class="page-title">Research Hub</h1>
  <p class="page-subtitle">A personal knowledge base — domain-focused, built from first principles.</p>

  <div class="hub-grid">
    <a href="ai/index.html" class="hub-card">
      <div class="hub-icon">🤖</div>
      <h2>AI / LLM</h2>
      <p class="hub-count">1 topic</p>
      <p class="hub-desc">How language models work, agents, RAG, tool use — built from first principles.</p>
    </a>
    <a href="technology/index.html" class="hub-card">
      <div class="hub-icon">🔐</div>
      <h2>Technology</h2>
      <p class="hub-count">0 topics</p>
      <p class="hub-desc">Security, networking, protocols, and systems.</p>
    </a>
    <a href="cloud/index.html" class="hub-card">
      <div class="hub-icon">☁️</div>
      <h2>Cloud</h2>
      <p class="hub-count">0 topics</p>
      <p class="hub-desc">Cloud architecture, Kubernetes, and the CNCF ecosystem.</p>
    </a>
    <a href="governance/index.html" class="hub-card">
      <div class="hub-icon">📋</div>
      <h2>Governance</h2>
      <p class="hub-count">0 topics</p>
      <p class="hub-desc">Frameworks, risk, compliance, and organisational control.</p>
    </a>
    <a href="finance/index.html" class="hub-card">
      <div class="hub-icon">💹</div>
      <h2>Finance</h2>
      <p class="hub-count">0 topics</p>
      <p class="hub-desc">Personal finance concepts, investing, and SG-context guidance.</p>
    </a>
  </div>
</div>

<footer class="site-footer">Research Hub · Public knowledge base · Domain-focused</footer>

</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:8000.

Expected: sticky nav bar, page title, 5 hub cards in a responsive grid. Cards are clickable (will 404 until later tasks — expected).

- [ ] **Step 3: Commit**

```bash
git add public/index.html
git commit -m "feat: add home page with domain hub grid"
```

---

### Task 3: AI domain hub

**Files:**
- Create: `public/ai/index.html`

- [ ] **Step 1: Create directory and hub page**

```bash
mkdir -p public/ai
```

Create `public/ai/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI / LLM — Research Hub</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

<nav class="site-nav">
  <span class="nav-brand">Research Hub</span>
  <a href="../index.html">Home</a>
  <a href="index.html" class="active">AI / LLM</a>
  <a href="../technology/index.html">Technology</a>
  <a href="../cloud/index.html">Cloud</a>
  <a href="../governance/index.html">Governance</a>
  <a href="../finance/index.html">Finance</a>
</nav>

<div class="page-wide">
  <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
    <span class="chip ai">AI / LLM</span>
    <span style="font-size:0.8rem;color:#94a3b8"><a href="../index.html" style="color:#94a3b8">Home</a> / AI / LLM</span>
  </div>
  <h1 class="page-title">AI / LLM</h1>
  <p class="page-subtitle">How language models work, agents, RAG, tool use — built from first principles in the style of Andrej Karpathy.</p>

  <hr class="section-divider">

  <div class="topic-grid">
    <a href="ai-agents.html" class="topic-card">
      <h3>AI Agents</h3>
      <p class="topic-one-liner">Software that perceives its environment, plans actions, uses tools, and acts autonomously toward a goal.</p>
      <div class="topic-tags">
        <span class="chip ai">agents</span>
        <span class="chip ai">llm</span>
        <span class="chip ai">tool-use</span>
        <span class="chip ai">planning</span>
      </div>
    </a>
  </div>
</div>

<footer class="site-footer">Research Hub · Public knowledge base · Domain-focused</footer>

</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:8000/ai/index.html.

Expected: "AI / LLM" link is active in nav, breadcrumb shows Home / AI / LLM, one topic card for "AI Agents" with blue chips.

- [ ] **Step 3: Commit**

```bash
git add public/ai/index.html
git commit -m "feat: add AI/LLM domain hub"
```

---

### Task 4: Remaining domain hubs

**Files:**
- Create: `public/technology/index.html`
- Create: `public/cloud/index.html`
- Create: `public/governance/index.html`
- Create: `public/finance/index.html`

- [ ] **Step 1: Create directories**

```bash
mkdir -p public/technology public/cloud public/governance public/finance
```

- [ ] **Step 2: Create Technology hub**

Create `public/technology/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Technology — Research Hub</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<nav class="site-nav">
  <span class="nav-brand">Research Hub</span>
  <a href="../index.html">Home</a>
  <a href="../ai/index.html">AI / LLM</a>
  <a href="index.html" class="active">Technology</a>
  <a href="../cloud/index.html">Cloud</a>
  <a href="../governance/index.html">Governance</a>
  <a href="../finance/index.html">Finance</a>
</nav>
<div class="page-wide">
  <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
    <span class="chip tech">Technology</span>
    <span style="font-size:0.8rem;color:#94a3b8"><a href="../index.html" style="color:#94a3b8">Home</a> / Technology</span>
  </div>
  <h1 class="page-title">Technology</h1>
  <p class="page-subtitle">Security, networking, protocols, and systems — explained from first principles.</p>
  <hr class="section-divider">
  <p class="empty-state">No topics yet. Start a research session to add the first one.</p>
</div>
<footer class="site-footer">Research Hub · Public knowledge base · Domain-focused</footer>
</body>
</html>
```

- [ ] **Step 3: Create Cloud hub**

Create `public/cloud/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cloud — Research Hub</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<nav class="site-nav">
  <span class="nav-brand">Research Hub</span>
  <a href="../index.html">Home</a>
  <a href="../ai/index.html">AI / LLM</a>
  <a href="../technology/index.html">Technology</a>
  <a href="index.html" class="active">Cloud</a>
  <a href="../governance/index.html">Governance</a>
  <a href="../finance/index.html">Finance</a>
</nav>
<div class="page-wide">
  <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
    <span class="chip cloud">Cloud</span>
    <span style="font-size:0.8rem;color:#94a3b8"><a href="../index.html" style="color:#94a3b8">Home</a> / Cloud</span>
  </div>
  <h1 class="page-title">Cloud</h1>
  <p class="page-subtitle">Cloud architecture, Kubernetes, and the CNCF ecosystem — from first principles.</p>
  <hr class="section-divider">
  <p class="empty-state">No topics yet. Start a research session to add the first one.</p>
</div>
<footer class="site-footer">Research Hub · Public knowledge base · Domain-focused</footer>
</body>
</html>
```

- [ ] **Step 4: Create Governance hub**

Create `public/governance/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Governance — Research Hub</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<nav class="site-nav">
  <span class="nav-brand">Research Hub</span>
  <a href="../index.html">Home</a>
  <a href="../ai/index.html">AI / LLM</a>
  <a href="../technology/index.html">Technology</a>
  <a href="../cloud/index.html">Cloud</a>
  <a href="index.html" class="active">Governance</a>
  <a href="../finance/index.html">Finance</a>
</nav>
<div class="page-wide">
  <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
    <span class="chip gov">Governance</span>
    <span style="font-size:0.8rem;color:#94a3b8"><a href="../index.html" style="color:#94a3b8">Home</a> / Governance</span>
  </div>
  <h1 class="page-title">Governance</h1>
  <p class="page-subtitle">Frameworks, risk, compliance, and organisational control — from first principles.</p>
  <hr class="section-divider">
  <p class="empty-state">No topics yet. Start a research session to add the first one.</p>
</div>
<footer class="site-footer">Research Hub · Public knowledge base · Domain-focused</footer>
</body>
</html>
```

- [ ] **Step 5: Create Finance hub**

Create `public/finance/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finance — Research Hub</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<nav class="site-nav">
  <span class="nav-brand">Research Hub</span>
  <a href="../index.html">Home</a>
  <a href="../ai/index.html">AI / LLM</a>
  <a href="../technology/index.html">Technology</a>
  <a href="../cloud/index.html">Cloud</a>
  <a href="../governance/index.html">Governance</a>
  <a href="index.html" class="active">Finance</a>
</nav>
<div class="page-wide">
  <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
    <span class="chip fin">Finance</span>
    <span style="font-size:0.8rem;color:#94a3b8"><a href="../index.html" style="color:#94a3b8">Home</a> / Finance</span>
  </div>
  <h1 class="page-title">Finance</h1>
  <p class="page-subtitle">Personal finance concepts, investing, and SG-context guidance — from first principles.</p>
  <hr class="section-divider">
  <p class="empty-state">No topics yet. Start a research session to add the first one.</p>
</div>
<footer class="site-footer">Research Hub · Public knowledge base · Domain-focused</footer>
</body>
</html>
```

- [ ] **Step 6: Verify all hubs in browser**

Open each URL and confirm the correct domain chip, title, and "No topics yet" message:
- http://localhost:8000/technology/index.html
- http://localhost:8000/cloud/index.html
- http://localhost:8000/governance/index.html
- http://localhost:8000/finance/index.html

- [ ] **Step 7: Commit**

```bash
git add public/technology/index.html public/cloud/index.html public/governance/index.html public/finance/index.html
git commit -m "feat: add Technology, Cloud, Governance, Finance domain hubs"
```

---

### Task 5: Markdown source — AI Agents (flagship)

**Files:**
- Create: `research/ai/ai-agents.md`

- [ ] **Step 1: Create research directory**

```bash
mkdir -p research/ai
```

- [ ] **Step 2: Create the Markdown source**

Create `research/ai/ai-agents.md`:

```markdown
---
title: AI Agents
domain: ai
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
date: 2026-06-10
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
Four types: **In-context** (ephemeral, context window), **External/retrieval** (vector DB, persistent), **Episodic** (log of past interactions), **Procedural** (baked into system prompt).

### Planning
Decompose complex goals into subtasks (tree-of-thought, plan-and-execute) or reflect on failures to revise (reflexion). Most production agents use the simplest planning that works.

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

RAG · Tool Use / Function Calling · Model Context Protocol (MCP) · Fine-tuning vs Prompting
```

- [ ] **Step 3: Commit**

```bash
git add research/ai/ai-agents.md
git commit -m "research: add AI Agents Markdown source"
```

---

### Task 6: Rendered HTML — AI Agents research page

**Files:**
- Create: `public/ai/ai-agents.html`

- [ ] **Step 1: Create the HTML research page**

Create `public/ai/ai-agents.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Agents — AI / LLM — Research Hub</title>
  <link rel="stylesheet" href="../css/style.css">
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid.min.js"
          integrity="sha384-R63zfMfSwJF4xCR11wXii+QUsbiBIdiDzDbtxia72oGWfkT7WHJfmD/I/eeHPJyT"
          crossorigin="anonymous"></script>
  <script>mermaid.initialize({ startOnLoad: true, theme: 'neutral', fontSize: 14 });</script>
</head>
<body>

<nav class="site-nav">
  <span class="nav-brand">Research Hub</span>
  <a href="../index.html">Home</a>
  <a href="index.html" class="active">AI / LLM</a>
  <a href="../technology/index.html">Technology</a>
  <a href="../cloud/index.html">Cloud</a>
  <a href="../governance/index.html">Governance</a>
  <a href="../finance/index.html">Finance</a>
</nav>

<div class="page">

  <div class="research-header">
    <p class="breadcrumb"><a href="../index.html">Home</a> / <a href="index.html">AI / LLM</a> / AI Agents</p>
    <h1>AI Agents</h1>
    <div class="tag-row">
      <span class="chip ai">agents</span>
      <span class="chip ai">llm</span>
      <span class="chip ai">tool-use</span>
      <span class="chip ai">planning</span>
      <span class="chip ai">memory</span>
      <span class="chip ai">react</span>
    </div>
  </div>

  <!-- QUICK ZONE -->
  <div class="quick-zone">
    <div class="quick-zone-header">
      <span class="zone-label quick">Quick Zone</span>
      <span style="font-size:0.75rem;color:#64748b">Skim in 60 seconds</span>
    </div>
    <div class="quick-zone-body">
      <p class="one-liner">Software that perceives its environment, plans actions, uses tools, and acts autonomously toward a goal.</p>

      <div class="chip-row">
        <span class="chip">LLM backbone</span>
        <span class="chip">ReAct loop</span>
        <span class="chip">Tool use</span>
        <span class="chip">Memory</span>
        <span class="chip">Planning</span>
        <span class="chip">Multi-agent</span>
      </div>

      <div class="key-questions">
        <h4>Key Questions</h4>
        <ol>
          <li>What separates an agent from a simple LLM call?</li>
          <li>How does the ReAct loop work?</li>
          <li>When do agents fail, and why?</li>
          <li>What does memory mean for an agent?</li>
          <li>How do multi-agent systems coordinate?</li>
        </ol>
      </div>

      <div class="top-refs">
        <h4>Top References</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=zjkBMFhNj_g" target="_blank" rel="noopener">Andrej Karpathy — Intro to Large Language Models</a>
            <span class="ref-note">— Best first-principles entry point</span>
          </li>
          <li>
            <a href="https://www.anthropic.com/research/building-effective-agents" target="_blank" rel="noopener">Anthropic — Building Effective Agents</a>
            <span class="ref-note">— Practical patterns from production deployments</span>
          </li>
          <li>
            <a href="https://lilianweng.github.io/posts/2023-06-23-agent/" target="_blank" rel="noopener">Lilian Weng — LLM-powered Autonomous Agents</a>
            <span class="ref-note">— Comprehensive overview: planning, memory, tool use</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- DEEP ZONE -->
  <div class="deep-zone">
    <div class="deep-zone-header">
      <span class="zone-label deep">Deep Zone</span>
      <span style="font-size:0.75rem;color:#64748b">First principles — Karpathy style</span>
    </div>
    <div class="deep-zone-body">

      <h2>Start Simple: What Is the Minimal Agent?</h2>
      <p>Start with the simplest possible question: what is the difference between calling an LLM once and running an agent?</p>
      <p>A single LLM call takes an input, produces an output, and stops. An agent wraps an LLM in a loop: it gets a result, decides if the goal is met, and if not, takes an action — calling a tool, querying a database, writing to memory — and loops again. <strong>The loop is the agent.</strong></p>

      <div class="diagram-wrap">
        <div class="mermaid">
flowchart LR
    Goal([Goal]) --> Reason[Reason\nWhat should I do?]
    Reason --> Act[Act\nCall a tool]
    Act --> Observe[Observe\nTool result]
    Observe --> Check{Goal met?}
    Check -- No --> Reason
    Check -- Yes --> Answer([Final Answer])
        </div>
      </div>

      <h2>Core Concepts</h2>

      <h3>The ReAct Loop</h3>
      <p>The dominant pattern for agent reasoning is ReAct (Reasoning + Acting). Each iteration: <strong>Reason</strong> (think about the current state), <strong>Act</strong> (emit a structured tool call), <strong>Observe</strong> (append the result and loop). The loop terminates when the LLM emits a final answer instead of a tool call.</p>

      <h3>Tool Use</h3>
      <p>An agent's capabilities are bounded by its tools — functions the LLM can call: web search, code execution, database queries, file writes, API calls. The LLM never executes code directly. It requests an action; the runtime executes it; the result comes back as an observation.</p>

      <h3>Memory</h3>
      <ul>
        <li><strong>In-context</strong> — everything in the current context window (ephemeral)</li>
        <li><strong>External / retrieval</strong> — a vector database the agent can query (persistent, semantic)</li>
        <li><strong>Episodic</strong> — a log of past interactions retrieved by recency or relevance</li>
        <li><strong>Procedural</strong> — instructions or knowledge baked into the system prompt</li>
      </ul>

      <h3>Planning</h3>
      <p>For complex goals, agents decompose tasks (tree-of-thought, plan-and-execute) or reflect on failures to revise their approach (reflexion). Most production agents use the simplest planning that works.</p>

      <h3>Multi-Agent Systems</h3>
      <p>An orchestrator agent breaks down a goal and delegates subtasks to specialist agents. Coordination via shared memory or explicit message passing.</p>

      <div class="diagram-wrap">
        <div class="mermaid">
flowchart TD
    User([User Goal]) --> Orch[Orchestrator Agent]
    Orch --> Researcher[Researcher Agent]
    Orch --> Coder[Coder Agent]
    Orch --> Reviewer[Reviewer Agent]
    Researcher --> Memory[(Shared Memory)]
    Coder --> Memory
    Reviewer --> Memory
    Memory --> Orch
    Orch --> Result([Result])
        </div>
      </div>

      <h2>Key Questions Answered</h2>

      <div class="qa-block">
        <p class="q">Q: What separates an agent from a simple LLM call?</p>
        <p class="a">A loop and state. An LLM call is stateless and single-turn. An agent maintains state (tool results, observations, memory) across multiple LLM calls and uses that state to decide what to do next. The loop is the defining characteristic.</p>
      </div>

      <div class="qa-block">
        <p class="q">Q: How does the ReAct loop work?</p>
        <p class="a">The LLM is given a system prompt describing available tools and a goal. Each turn it produces either a tool call (name + arguments) or a final answer. The runtime executes tool calls and appends results to the conversation; a final answer terminates the loop.</p>
      </div>

      <div class="qa-block">
        <p class="q">Q: When do agents fail, and why?</p>
        <p class="a">Context overflow (long loops fill the context window), tool call hallucination (the LLM invents tool names or arguments), loop divergence (actions move away from the goal), and cost explosion (unbounded loops run expensive calls repeatedly). Good design bounds all: max loop depth, tool call validation, clear termination criteria.</p>
      </div>

      <div class="qa-block">
        <p class="q">Q: What does memory mean for an agent?</p>
        <p class="a">How an agent persists information beyond a single context window. In-context is cheap but ephemeral. External memory (vector DB) lets the agent store and retrieve information across sessions. Choosing the right memory type for a task is a key design decision.</p>
      </div>

      <div class="qa-block">
        <p class="q">Q: How do multi-agent systems coordinate?</p>
        <p class="a">Through shared state or explicit messaging. Shared state is simpler but creates contention. Messaging is more robust but adds coordination overhead. Most frameworks support both patterns.</p>
      </div>

      <h2>Annotated References</h2>
      <ul class="ref-list">
        <li>
          <a href="https://www.youtube.com/watch?v=zjkBMFhNj_g" target="_blank" rel="noopener">Andrej Karpathy — Intro to Large Language Models</a>
          <span class="ref-note">The best entry point. Explains from first principles how LLMs work and how agents emerge from them. Watch before reading anything else.</span>
        </li>
        <li>
          <a href="https://www.anthropic.com/research/building-effective-agents" target="_blank" rel="noopener">Anthropic — Building Effective Agents</a>
          <span class="ref-note">Distilled patterns from production agents. Key insight: simple loops with well-defined tools outperform over-engineered frameworks.</span>
        </li>
        <li>
          <a href="https://lilianweng.github.io/posts/2023-06-23-agent/" target="_blank" rel="noopener">Lilian Weng — LLM-powered Autonomous Agents</a>
          <span class="ref-note">Most comprehensive overview. Covers planning, memory, and tool use with concrete examples. Dense but worth it.</span>
        </li>
        <li>
          <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">ReAct: Synergizing Reasoning and Acting in Language Models</a>
          <span class="ref-note">The original ReAct paper. Short and readable. Gives the mental model for 80% of agent loops in the wild.</span>
        </li>
        <li>
          <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener">Anthropic MCP Specification</a>
          <span class="ref-note">The open standard for connecting agents to tools and data sources. Increasingly the standard way to add tool use to agents.</span>
        </li>
      </ul>

      <h2>Related Topics</h2>
      <div class="related-tags">
        <span class="chip">RAG</span>
        <span class="chip">Tool Use / Function Calling</span>
        <span class="chip">Model Context Protocol (MCP)</span>
        <span class="chip">Fine-tuning vs Prompting</span>
      </div>

    </div>
  </div>

</div>

<footer class="site-footer">Research Hub · Public knowledge base · Domain-focused</footer>

</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:8000/ai/ai-agents.html.

Expected:
- Nav bar with "AI / LLM" active
- Breadcrumb: Home / AI / LLM / AI Agents
- Quick Zone: one-liner, 6 concept chips, 5 key questions, 3 top refs with notes
- Deep Zone: two Mermaid diagrams rendered (ReAct loop + multi-agent system), 5 Q&A blocks, 5 annotated refs, related tags

If Mermaid diagrams show as raw text: wait 3 seconds and refresh — CDN script loads asynchronously.

- [ ] **Step 3: Commit**

```bash
git add public/ai/ai-agents.html
git commit -m "feat: add AI Agents research page (two-zone, Mermaid diagrams)"
```

---

### Task 7: Update README

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Replace README contents**

Replace the full contents of `README.md` with:

```markdown
# Research Hub

A personal research knowledge base published via GitHub Pages. Domain-focused, AI-assisted, built from first principles.

## Structure

```
static-website/
├── research/          # Markdown source (authored / AI-assisted)
│   ├── ai/
│   ├── technology/
│   ├── cloud/
│   ├── governance/
│   └── finance/
├── public/            # Generated HTML — served by GitHub Pages
│   ├── index.html     # Home: domain hub grid
│   ├── ai/
│   ├── technology/
│   ├── cloud/
│   ├── governance/
│   └── finance/
└── .github/workflows/deploy.yml
```

## Adding a Research Page

1. Start a session: `"Research <topic> for the <domain> hub"`
2. Claude writes `research/<domain>/<topic>.md` (Markdown source with frontmatter)
3. Claude generates `public/<domain>/<topic>.html` (two-zone HTML with Mermaid diagrams)
4. Claude updates `public/<domain>/index.html` (adds topic card) and `public/index.html` (updates count)
5. Review the Markdown for accuracy
6. `git commit && git push` — GitHub Actions deploys in ~60 seconds

## Domains

| Domain | Focus |
|---|---|
| AI / LLM | Flagship hub — Karpathy-style first-principles (agents, RAG, tool use, LLM internals) |
| Technology | Security, networking, protocols |
| Cloud | AWS/GCP/Azure patterns, Kubernetes, CNCF |
| Governance | COBIT, ISO, risk, compliance |
| Finance | Personal finance, investing, SG context |

## Local Testing

```bash
python3 -m http.server 8000 --directory public
# Visit http://localhost:8000
```

## Deployment

Push to `main` → GitHub Actions deploys automatically. See `docs/DEPLOYMENT.md` for initial setup.
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: update README to document research hub workflow"
```

---

### Task 8: Smoke test — full site navigation

No files changed. Verification only.

- [ ] **Step 1: Run local server**

```bash
python3 -m http.server 8000 --directory public
```

- [ ] **Step 2: Verify full navigation**

| URL | Expected |
|---|---|
| http://localhost:8000 | Home: 5 domain hub cards |
| http://localhost:8000/ai/index.html | AI hub: 1 topic card (AI Agents) |
| http://localhost:8000/ai/ai-agents.html | Two-zone page: 2 Mermaid diagrams rendered |
| http://localhost:8000/technology/index.html | "No topics yet" |
| http://localhost:8000/cloud/index.html | "No topics yet" |
| http://localhost:8000/governance/index.html | "No topics yet" |
| http://localhost:8000/finance/index.html | "No topics yet" |

- [ ] **Step 3: Verify nav links from AI Agents page**

From http://localhost:8000/ai/ai-agents.html, click every nav link. Each must load the correct hub page without a 404.

- [ ] **Step 4: Push and verify GitHub Actions**

```bash
git push origin main
```

Go to the repository → Actions tab. Confirm the deploy workflow runs green. Visit the live GitHub Pages URL to confirm the home page loads.
