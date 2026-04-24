# static-website

Public repository for static website files hosted on GitHub Pages.

## 📁 Structure

```
.
├── public/              # Static website files (served from here)
│   └── *.html          # HTML pages
├── README.md           # This file
└── .github/workflows/  # GitHub Actions deployment configuration
```

## 🚀 Deployment

This repository uses **GitHub Pages** for automatic deployment.

### How it Works

- Any push to `main` or `master` branch automatically triggers deployment
- Files from the `public/` folder are served as your website
- Deployed at: `https://<username>.github.io/static-website`

### Setup Steps

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - Save

2. **Push to Deploy**
   - Make changes to files in `public/`
   - Push to `main` or `master` branch
   - GitHub Actions automatically builds and deploys
   - Monitor in the Actions tab

3. **Custom Domain (Optional)**
   - In repository Settings → Pages
   - Add your custom domain
   - Update DNS records as GitHub instructs

## 📝 Adding Pages

1. Create `.html` files in the `public/` folder
2. Commit and push to trigger deployment
3. Files are served at `https://<username>.github.io/static-website/<filename>.html`

## 📋 Current Pages

- `HK-Trip-2026.html` - Hong Kong trip documentation

## 🔧 Local Testing

To test locally:
```bash
# Install a simple HTTP server
python3 -m http.server 8000 --directory public

# Visit http://localhost:8000 in your browser
```

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Web Standards - MDN](https://developer.mozilla.org/en-US/docs/Web/Standards/)

## 📄 License

Public domain - feel free to use and modify as needed.
