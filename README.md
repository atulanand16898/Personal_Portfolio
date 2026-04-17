# Atul Anand - Local Portfolio Website

A local-first, media-rich portfolio website designed to present:

- Career path and milestones
- Featured work / case studies
- Videos of current work
- PDF resources (decks, case studies, resumes)
- Photos (events, products, achievements)

## 1) Run locally

```bash
python3 -m http.server 8080
```

Open: `http://localhost:8080`

## 2) Add your repository resources

Create folders and put your files:

```bash
mkdir -p assets/videos assets/pdfs assets/photos
```

Then update `script.js`:

- `portfolioData.media.videos[]` for embed URLs
- `portfolioData.media.pdfs[]` for local PDF file paths
- `portfolioData.media.photos[]` for local image file paths
- `portfolioData.projects[]` and `portfolioData.career[]` for content

## 3) Customize text and contacts

Edit `index.html` for:

- Hero text
- About section
- Contact details

## 4) Deployment options

- GitHub Pages
- Netlify
- Vercel
- Any static host

No backend required.


## 5) Host online (instead of only localhost)

If you want an "online localhost" style URL to share quickly:

- Use a tunnel (temporary URL): see `DEPLOY.md` Option B.
- For a permanent URL: use GitHub Pages via included workflow (Option A in `DEPLOY.md`).


## 6) Deploy to Vercel

This repository includes `vercel.json` and can be deployed directly to Vercel as a static site.

Quick path:

1. Push repository to GitHub.
2. Import the repo in Vercel.
3. Deploy (no backend or special build command required).
