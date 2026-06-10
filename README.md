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
