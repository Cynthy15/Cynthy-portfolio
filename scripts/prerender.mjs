import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render } from '../.ssr/entry-server.js';

const projects = JSON.parse(await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
const siteUrl = process.env.SITE_URL?.replace(/\/$/, '');
if (siteUrl && !/^https?:\/\/[^/]+/.test(siteUrl)) throw new Error('SITE_URL must be an absolute http(s) URL.');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const homeTitle = 'Cynthia Niganze Iradukunda — Software Developer & Backend Engineer';
const homeDescription = 'Software developer and Information Systems student in Kigali, Rwanda. Explore backend engineering, web and mobile development, databases, and source-backed project case studies.';

function page(pathname, title, description) {
  const canonical = siteUrl ? new URL(pathname, `${siteUrl}/`).href : null;
  const person = {
    '@context': 'https://schema.org', '@type': 'Person',
    name: 'Cynthia Niganze Iradukunda', jobTitle: 'Software Developer',
    sameAs: ['https://github.com/Cynthy15'],
    ...(siteUrl ? { url: siteUrl } : {}),
  };
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(description)}" />`)
    .replace('<!--page-meta-->', `<meta property="og:title" content="${escape(title)}" />\n<meta property="og:description" content="${escape(description)}" />\n<meta property="og:type" content="website" />\n${canonical ? `<link rel="canonical" href="${escape(canonical)}" /><meta property="og:url" content="${escape(canonical)}" />` : ''}\n<script type="application/ld+json">${JSON.stringify(person).replaceAll('<', '\\u003c')}</script>`)
    .replace('<div id="root"></div>', `<div id="root">${render(pathname)}</div>`);
}

await writeFile('dist/index.html', page('/', homeTitle, homeDescription));
for (const project of projects) {
  const pathname = `/projects/${project.slug}/`;
  const directory = resolve('dist', 'projects', project.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, page(pathname, `${project.title} — ${project.subtitle} | Cynthia Niganze`, project.desc));
}
await writeFile('dist/404.html', page('/not-found/', 'Page not found | Cynthia Niganze', 'Explore Cynthia’s software development projects.'));
if (siteUrl) {
  const paths = ['/', ...projects.map(project => `/projects/${project.slug}/`)];
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${escape(new URL(path, `${siteUrl}/`).href)}</loc></url>`).join('')}</urlset>`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
}
console.log(`Prerendered homepage, ${projects.length} case studies, and 404 page.${siteUrl ? ' Sitemap and canonical URLs generated.' : ' Set SITE_URL for sitemap and canonical URLs.'}`);
