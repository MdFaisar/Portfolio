# 🚀 Developer Portfolio

A modern, dark-themed portfolio built with **HTML, CSS & JavaScript** — deployable to Vercel with zero config.

## 📁 File Structure

```
portfolio/
├── index.html      ← Main HTML structure
├── style.css       ← All styles
├── main.js         ← DOM rendering & interactions
├── config.js       ← ⭐ ALL your personal data lives here
├── vercel.json     ← Vercel deployment config
└── assets/         ← Create this folder and add your photo
    └── profile.jpg
```

## ✏️ How to Customize

Open **`config.js`** and update every field with your own info:

- `name`, `tagline`, `shortBio`, `photo`
- `contact` — email & phone
- `socials` — GitHub, LinkedIn, Twitter etc.
- `about` — description, education, stats, languages
- `skills` — programming languages (with % levels), frontend, backend, tools
- `projects` — featured (shown large) and other projects
- `certifications` — with issuer, date, credential link

## 🖼️ Adding Your Photo

1. Create an `assets/` folder in the project root
2. Add your photo as `assets/profile.jpg`
3. Update `photo: "assets/profile.jpg"` in `config.js`

## 🚀 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
cd portfolio
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — done! ✅

### Option C — Drag & Drop
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop your entire `portfolio/` folder
3. Deploy instantly

## 📬 Contact Form

The form uses a **mailto: link** — no backend needed. When a visitor submits the form, it opens their default email client with the message pre-filled. Works everywhere, including Vercel's free tier.

## 🛠 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JS** — zero dependencies, IntersectionObserver for scroll effects
- **Google Fonts** — Syne + DM Sans