// Central nav definition — add/remove items here only
const NAV_ITEMS = [
  { label: 'Home',       path: 'index.html' },
  { label: 'AI / LLM',  path: 'ai/index.html' },
  { label: 'Technology', path: 'technology/index.html' },
  { label: 'Cloud',      path: 'cloud/index.html' },
  { label: 'Governance', path: 'governance/index.html' },
  { label: 'Finance',    path: 'finance/index.html' },
  { label: 'Method',     path: 'method/index.html' },
  { label: 'Resume',     path: 'resume/index.html' },
];

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  // Detect root prefix from the stylesheet link — works at any deployment depth
  const styleLink = document.querySelector('link[href*="css/style.css"]');
  const prefix = styleLink?.getAttribute('href').startsWith('../') ? '..' : '.';

  // Active page: match by directory segment so sub-pages (e.g. ai/rag.html) highlight the right tab
  const currentPath = window.location.pathname;
  const DOMAINS = ['ai', 'technology', 'cloud', 'governance', 'finance', 'method', 'resume'];

  function isActive(navPath) {
    const segment = navPath.split('/')[0]; // 'index.html' or domain name
    if (segment === 'index.html') {
      return !DOMAINS.some(d => currentPath.includes('/' + d + '/'));
    }
    return currentPath.includes('/' + segment + '/');
  }

  // Render nav links using safe DOM methods (no innerHTML — avoids XSS risk)
  const linksEl = nav.querySelector('.nav-links');
  if (linksEl) {
    linksEl.replaceChildren(
      ...NAV_ITEMS.map(({ label, path }) => {
        const a = document.createElement('a');
        a.href = `${prefix}/${path}`;
        a.textContent = label;
        if (isActive(path)) a.className = 'active';
        return a;
      })
    );
  }

  // Hamburger toggle
  const toggle = nav.querySelector('.nav-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }
  });
});
