# Mark Tomaneng Portfolio

Static Astro portfolio built for GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

## Before publishing

GitHub and LinkedIn are configured in `src/data/profile.ts`. Add an email there if you want it public; put a resume PDF in `public/resume/` and set `resume` to `resume/filename.pdf`.

Push the repository to GitHub, open **Settings > Pages**, and choose **GitHub Actions** as the source. Every push to `main` will build and deploy the static site.

## Production build

```sh
npm run build
```
