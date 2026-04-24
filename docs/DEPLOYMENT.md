# GitHub Pages Deployment Guide

## ✅ Initial Setup (One-time)

### 1. Repository Settings
1. Push your code to GitHub
2. Go to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save the changes

### 2. Enable GitHub Actions
1. Go to **Settings** → **Actions** → **General**
2. Ensure "All actions and reusable workflows" is selected
3. Save

## 🔄 Automatic Deployment Workflow

The `.github/workflows/deploy.yml` file automatically:

1. **Triggers on push** to `main` or `master` branch
2. **Builds** by uploading the `public/` folder
3. **Deploys** to GitHub Pages
4. **Reports status** in your repository's Actions tab

## 📊 Monitor Deployments

1. Go to **Actions** tab in your repository
2. Click on the most recent workflow run
3. Check the status:
   - ✅ Green = Successful deployment
   - ❌ Red = Deployment failed (check logs)

## 🌐 Access Your Site

After first deployment:
- **Default URL**: `https://<username>.github.io/static-website`
- **Pages**: `https://<username>.github.io/static-website/<filename>.html`

Example:
- `https://noobsolutions.github.io/static-website/HK-Trip-2026.html`

## 🎯 Custom Domain Setup

To use a custom domain (e.g., `mysite.com`):

1. Purchase domain from registrar
2. Update DNS records:
   ```
   A record → 185.199.108.153
   A record → 185.199.109.153
   A record → 185.199.110.153
   A record → 185.199.111.153
   
   CNAME record → <username>.github.io
   ```
3. In **Settings** → **Pages**, enter your domain
4. GitHub automatically creates `CNAME` file and enables HTTPS

## 🐛 Troubleshooting

### Deployment Failed
- Check the Actions tab for error logs
- Verify `public/` folder contains your files
- Ensure you have a valid `index.html` for root access

### Changes Not Appearing
- Deployment can take 1-2 minutes
- Hard refresh browser (Cmd+Shift+R on Mac)
- Check that push was successful

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages settings show your domain

## 📝 Best Practices

1. **Organize files**: Keep related assets in `public/` subfolder
2. **Use index.html**: Create `public/index.html` for root access
3. **Optimize assets**: Compress images before committing
4. **Version control**: Commit all source files, not just builds
5. **Test locally**: Use `python3 -m http.server 8000 --directory public`

## 🔗 Useful Links

- [GitHub Pages Docs](https://docs.github.com/pages)
- [GitHub Actions Docs](https://docs.github.com/actions)
- [DNS Configuration Help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
