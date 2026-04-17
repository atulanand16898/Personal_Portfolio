# Deployment Guide

## Option A: GitHub Pages (recommended, free)

This repository includes a GitHub Actions workflow at:

- `.github/workflows/deploy-pages.yml`

### Steps

1. Push this branch to GitHub.
2. In GitHub repository settings, open **Pages**.
3. Set source to **GitHub Actions**.
4. Push again (or run the workflow manually).
5. Your site will be available at:
   - `https://<your-github-username>.github.io/<repo-name>/`

---

## Option B: "Online localhost" tunnel (for quick sharing)

If you want to share your local machine publicly without deployment:

### Cloudflare Tunnel (recommended)

```bash
python3 -m http.server 8080
cloudflared tunnel --url http://localhost:8080
```

### LocalTunnel (Node.js)

```bash
python3 -m http.server 8080
npx localtunnel --port 8080
```

Both commands return a public URL you can share temporarily.

---

## Option C: One-click static hosts

- Netlify Drop: drag-and-drop the project folder
- Vercel: import repo and deploy
- Cloudflare Pages: connect repo and deploy


---

## Option D: Vercel (requested)

This repo now includes `vercel.json` for static hosting.

### CLI deploy

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Git-based deploy (recommended)

1. Push this repo to GitHub.
2. Go to Vercel Dashboard → **Add New Project**.
3. Import the repository.
4. Keep defaults (no build command needed for static files).
5. Click **Deploy**.

Vercel gives a production URL like:

- `https://your-project-name.vercel.app`
