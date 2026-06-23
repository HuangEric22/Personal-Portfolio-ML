# Eric Huang Portfolio

Modern personal portfolio for Eric Huang, built with Vite, React, TypeScript, and resume-driven content.

## Highlights

- Recruiter-focused landing experience with impact metrics, experience, projects, skills, education, and contact links.
- Structured portfolio content in `src/content.ts` for quick edits.
- Downloadable resume from `public/Eric_Huang_Resume.pdf`.
- GitHub Pages workflow included for automatic deployment from `main`.

## Local Development

```bash
npm install
npm run dev
```

Build and preview the production site:

```bash
npm run build
npm run preview
```

## Editing Content

- Update profile, experience, project, skill, and education data in `src/content.ts`.
- Update page structure in `src/App.tsx`.
- Update visual styling in `src/styles.css`.
- Replace the PDF in `public/Eric_Huang_Resume.pdf` when the resume changes.

## GitHub Pages Deployment

1. Create a GitHub repository, for example `HuangEric22/personal_portfolio_ml`.
2. Add the remote locally:

```bash
git remote add origin https://github.com/HuangEric22/personal_portfolio_ml.git
git push -u origin main
```

3. In the GitHub repository settings, set Pages to deploy from GitHub Actions.
4. The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist`.