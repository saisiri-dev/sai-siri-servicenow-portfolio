# Sai Siri Kudaravalli — ServiceNow Developer Portfolio

A personal portfolio site positioning Sai Siri Kudaravalli as an aspiring
**ServiceNow Developer** — a B.Tech Computer Science student with ServiceNow
CSA / CAD certifications and hands-on workflow automation project experience.

This is a standalone project, separate from any other (e.g. general
Software Engineer) portfolio.

## Technologies used

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- Plain JavaScript (JSX), no TypeScript
- Deployed via GitHub Actions to GitHub Pages

## Local setup

Requires Node.js 18+.

```bash
# install dependencies
npm install

# start the local dev server (http://localhost:5173)
npm run dev

# build a production bundle into dist/
npm run build

# preview the production build locally
npm run preview
```

## Deployment (GitHub Pages)

This repo includes a ready-to-use workflow at
`.github/workflows/deploy.yml` that builds the site and publishes it to
GitHub Pages on every push to `main`.

To enable it:

1. Push this project to a GitHub repository.
2. In the repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. Your site will be published at
   `https://<your-username>.github.io/<repo-name>/`.

The build uses a **relative Vite base (`base: "./"`)** and
`import.meta.env.BASE_URL` for internal asset links (like the resume PDF),
so it works correctly at any sub-path — you do not need to hardcode the
repository name anywhere.

## Project structure

```
├── public/
│   └── resume.pdf              # Downloadable resume (replace to update)
├── src/
│   ├── components/             # Reusable UI pieces (Navbar, Footer, etc.)
│   ├── sections/                # One component per page section
│   ├── data/
│   │   └── portfolio.js         # ALL content lives here (single source of truth)
│   ├── App.jsx                  # Assembles all sections in order
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives + base styles
├── .github/workflows/deploy.yml # GitHub Pages deployment workflow
├── index.html                   # Document shell + SEO meta tags
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## How to update portfolio content

Almost everything on the site is driven by a single file:
**`src/data/portfolio.js`**. To update your information, edit the relevant
export in that file — no component code needs to change for a typical
content update:

- `personal` — name, location, phone, email, social links, resume path
- `nav` — navbar links
- `hero` — headline, description, hero buttons
- `about` — About section paragraphs
- `skills` — ServiceNow skills + supporting skill categories
- `experience` — internship details and bullet points
- `featuredProject` / `secondProject` — project details, tags, and links
  - Update `featuredProject.githubUrl` and `featuredProject.demoUrl` once
    those links are available; leave them as empty strings to show a
    "coming soon" state instead of a broken link.
- `education` — schools, degrees, dates
- `certifications` — certification names
- `research` — publication details
- `achievements` — hackathon results and extracurriculars
- `contact` — contact section heading and message

To replace the downloadable resume, replace `public/resume.pdf` with your
updated file (keep the same filename, or update `personal.resumeUrl` in
`src/data/portfolio.js` if you rename it).

## Accessibility & responsiveness

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `section`)
- Visible focus states on all interactive elements
- A "Skip to main content" link for keyboard users
- Responsive layout tested down to mobile widths, with a collapsible
  mobile navigation menu
- Respects `prefers-reduced-motion`
