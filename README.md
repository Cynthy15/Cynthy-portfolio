# Cynthia Niganze Iradukunda — Professional Portfolio

A working software-development portfolio with a responsive homepage, searchable project library, 13 dedicated case studies, technical and professional skills, education, and contact links.

## Run locally

Requires Node.js 20.19+ (Node.js 22 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:5173. The development server supports direct project URLs such as `/projects/boards-cafe/`.

## Build and verify

```sh
npm run build
npm test
npm run preview -- --host 0.0.0.0
```

The build produces:

- `dist/index.html`: a fully prerendered homepage, hydrated for search and filtering.
- `dist/projects/<slug>/index.html`: individual case-study pages with unique titles, descriptions, and social metadata.
- `dist/404.html`: a useful not-found page.
- Bundled assets under `dist/assets/`.

`npm test` checks required project coverage, evidence links, prerendered pages, navigation targets, metadata, known gaps, and exclusion of placeholder links and prohibited branding. Browser verification should additionally exercise search, categories, show-all, case-study navigation, and the responsive menu.

## Content and evidence

- `src/data/profile.js`: identity, contact details, education, and grouped technical skills.
- `src/data/projects.json`: project content, implementation status, individual-role notes, architecture, planned features, missing details, and pinned source links.
- `src/components/ProfessionalSkills.jsx`: professional strengths.
- `docs/PROJECT_INVENTORY.md`: research inventory, contribution limits, and unresolved evidence.
- `docs/source-review.json`: reviewed repository commits and file inventories.
- `docs/DEPLOYMENT.md`: hosting and release checks.

Public GitHub source was reviewed on 28 October 2026. Source inspection confirms code contents, not successful execution or sole authorship. Education and background are supplied by Cynthia’s brief; dates, certificates, employment, and leadership details have not been invented. Missing implementation evidence is visible in relevant case studies.

The source named in the brief for medicine delivery was inspected for technical context. Public branding and repository links use Cynthia’s own profile and project repository.

## Architecture

The existing React + Vite + Tailwind setup is retained to preserve the working local environment and avoid an unnecessary framework migration. Components are reusable, project records are structured JSON, and a small React server-rendering step generates static pages for search engines and sharing. This meets the content-system requirement without an MDX dependency. Next.js and TypeScript are preferred in the brief but are not prerequisites for this static site; a future migration can reuse the same content records.

Project pages use ordinary links, so direct navigation, browser history, refresh, and static hosting work without a client-side routing dependency. No production login, contact-submission backend, or analytics is needed. Contact actions open email or phone applications. Project diagrams are explicitly marked as source-derived or proposed; they are not fabricated application screenshots.

## Editing

Update the project JSON, then run the build and tests. Keep implementation claims tied to inspected source or supplied evidence. Add verified screenshots as files under `public/` and describe them accurately. Do not replace unknown dates or responsibilities with guessed values. To add a project, provide a unique slug and the fields used by existing entries; its static page is generated automatically.

## Publishing

Deploy the `dist/` directory to a static host. Set `SITE_URL` to your actual production origin before building to generate canonical URLs, a sitemap, and robots metadata. See `docs/DEPLOYMENT.md` for instructions. No site has been published by this change.
