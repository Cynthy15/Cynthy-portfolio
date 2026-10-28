# Deployment

## Production build

1. Install dependencies with `npm ci` using Node.js 20.19+ or 22 LTS.
2. Set `SITE_URL` in the hosting service to the actual production origin, for example your real `https://` domain. Do not copy a made-up domain into the published site.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Run `npm test` after building, or include it in the hosting build command: `npm run build && npm test`.

The existing application remains on React + Vite. Its build generates actual HTML at `/projects/<slug>/index.html`; no framework server or private credentials are required. All bundled content is public portfolio content. No API keys are needed.

## Vercel

Select the Vite framework preset, set the build command above and the output directory to `dist`. Add `SITE_URL` using the production domain shown by Vercel. Build and deploy. Static project pages work without a catch-all SPA rewrite. Unknown routes should use `404.html`.

## Netlify

Use the build command above and publish directory `dist`. Add `SITE_URL`. Netlify serves generated directory indexes and the included `404.html`; no catch-all rewrite is required.

## Other static hosts

Upload the complete `dist/` folder. Enable directory index serving and configure the host to return `404.html` for missing files with HTTP status 404. GitHub Pages requires a custom domain/root deployment with the current root-relative asset and project links; repository subpath hosting requires changing the site base and navigation paths first.

## Local production check

Run `npm run preview` after building. Check the homepage, a direct project URL, a refresh on that project URL, and an invalid URL. Preview servers can return a SPA fallback for invalid paths; actual production hosts must be configured to return the provided 404 document with status 404.

## Release checklist

- Check layout at phone and desktop widths, keyboard focus, menu, and reduced-motion behavior.
- Exercise search, category filters, no-results/reset, show-all/collapse, and links between case studies.
- Confirm email, telephone, and GitHub details belong to Cynthia.
- Review visible “details pending” entries and add source links or contribution records when available.
- Verify external deployment links separately. The supplied Boards Café links could not be confirmed during the evidence review and are labeled accordingly.
- Confirm canonical URLs and sitemap entries use the real production domain. Without `SITE_URL`, these domain-dependent fields are intentionally omitted.
- Keep measured outcomes, completed feature claims, and test results accurate. This portfolio’s tests do not execute the original projects’ test suites.
