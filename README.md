# sovatha.dev

A one-page personal portfolio for **Sovatha** — Sydney-based backend & platform engineer. Built with Astro 5 and Tailwind CSS 4, deployed as a static site.

Design language is inspired by [brittanychiang.com](https://brittanychiang.com): dark navy background, mint accent, monospaced micro-typography, numbered section headings, and the alternating image-on-card layout for featured projects.

## Stack

| Layer       | Choice                                    | Why                                                                |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------ |
| Framework   | Astro 5                                   | Zero-JS by default, fast static output, good DX                    |
| Styling     | Tailwind CSS 4 (Vite plugin)              | CSS-based theming via `@theme`, no separate config file            |
| Typography  | Satoshi (Fontshare) + JetBrains Mono      | Free, distinctive — Calibre/SF Mono alternatives                   |
| Hosting     | Cloudflare Pages (recommended)            | Free, fast, GitHub-integrated CI/CD                                |
| CI          | GitHub Actions (`.github/workflows/ci.yml`) | Build + format check on every push                                 |

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:4321> to view the site.

## Project structure

```
sovatha-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/                  # project screenshots go here
│       ├── sim-microservice.png
│       ├── homelab.png
│       └── hr-system.png
├── src/
│   ├── components/              # one .astro file per section
│   │   ├── Sidebar.astro        # sticky left rail (desktop)
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro     # tabbed work history
│   │   ├── FeaturedProjects.astro  # alternating image+card pattern
│   │   └── Contact.astro
│   ├── data/
│   │   └── portfolio.ts         # ⬅ single source of truth — edit me
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## How to customize

### 1. Update content

Open `src/data/portfolio.ts`. Everything the visitor sees is in this file — name, tagline, intro, experience, projects, social links. Rebuilding the site is just editing this object.

### 2. Add project screenshots

Drop your images into `public/images/`. Reference them in `portfolio.ts` like `'/images/sim-microservice.png'`. Suggested specs:

- **Aspect ratio:** 16:10 (the layout crops to this)
- **Resolution:** 1600×1000 px (2× of display size)
- **Format:** PNG for UI screenshots, WebP for photos
- **File size:** under 200 KB per image (use `cwebp -q 80` or [Squoosh](https://squoosh.app))

The cards apply a mint-tinted multiply blend by default; the image returns to full color on hover. Choose screenshots with decent contrast or this effect will mush them. Dashboards, terminals, and architecture diagrams all work well.

### 3. Change colors

Edit the `@theme` block at the top of `src/styles/global.css`. The two anchor colors are `--color-navy` (background) and `--color-mint` (accent). Tweak both and the rest of the palette ripples through.

### 4. Replace the resume

Drop your CV at `public/resume.pdf`. The "View resume" and resume-icon links already point there through `site.resumeUrl` in `src/data/portfolio.ts`.

## Building and deploying

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally
```

### Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: Pages → Create project → Connect to Git.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Add your custom domain (e.g. `sovatha.dev`) in the project's Custom Domains tab.

Cloudflare will auto-deploy on every push to `main`. PRs get preview deployments.

### Vercel

Equivalent: Import the repo, accept the auto-detected Astro preset, deploy.

## Accessibility & performance notes

- Skip-to-content link
- `prefers-reduced-motion` respected (fade-ups and smooth-scroll disable)
- Semantic landmarks (`aria-labelledby`, `role="tablist"`, etc.)
- All interactive elements keyboard-navigable; experience tabs support ↑/↓ on desktop and ←/→ on mobile
- Lazy-loaded project images
- Aim for 100/100/100/100 on Lighthouse (the CI workflow doesn't enforce this — worth adding [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) if you want a badge for it)

## Inspiration & credit

The visual design is heavily inspired by [Brittany Chiang's site](https://brittanychiang.com). If you fork or adapt this, please don't pixel-copy hers — make it yours. Brittany has [written about her design process](https://brittanychiang.com/archive); worth reading before you tweak.

## License

MIT. Use it, change it, ship it.
