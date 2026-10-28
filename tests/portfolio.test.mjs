import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const projects = JSON.parse(await readFile('src/data/projects.json', 'utf8'));
const homepage = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');

test('all requested projects have complete, unique case-study records', () => {
  const required = ['reach', 'omnireach', 'blood-supply', 'rescue-pulse', 'meddelivery', 'uwacu', 'video-platform', 'database-design', 'boards-cafe', 'expense-management', 'reach-django-backend'];
  assert.equal(new Set(projects.map(project => project.slug)).size, projects.length);
  for (const slug of required) assert.ok(projects.some(project => project.slug === slug), slug);
  for (const project of projects) {
    for (const field of ['problem', 'users', 'solution', 'architecture', 'role', 'decision', 'outcome', 'reflection']) assert.ok(project[field]?.length > 10, `${project.slug}: ${field}`);
    assert.ok(project.status.length > 0);
    assert.ok(project.missing.length > 0);
    assert.ok(project.flow.length > 1);
  }
});

test('homepage is prerendered with identity, technical skills, training, and working section targets', () => {
  for (const text of ['Cynthia Niganze Iradukunda', 'Backend Engineer', 'University of Rwanda', 'Solvit Africa', 'CMU-Africa', 'running', 'Django REST Framework', 'Professional skills']) assert.ok(homepage.includes(text), text);
  for (const id of ['main', 'top', 'home', 'work', 'about', 'expertise', 'professional-skills', 'education', 'contact']) assert.ok(homepage.includes(`id="${id}"`), id);
  assert.equal((homepage.match(/<h1[ >]/g) || []).length, 1);
});

test('every project URL has prebuilt content, unique metadata, evidence, and return navigation', async () => {
  for (const project of projects) {
    const html = await readFile(`dist/projects/${project.slug}/index.html`, 'utf8');
    assert.ok(html.includes(`<title>${escape(project.title)} —`), project.slug);
    assert.ok(html.includes(escape(project.problem)), project.slug);
    assert.ok(html.includes('href="/#work"'));
    assert.ok(html.includes('What the source confirms'));
    assert.ok(html.includes('Details to complete'));
    assert.ok(html.includes('property="og:title"'));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, project.slug);
    for (const source of project.sources) assert.ok(html.includes(escape(source.url)), source.url);
  }
});

test('code-supported claims link to reviewed commits and missing implementations stay explicit', () => {
  for (const project of projects) {
    if (project.features.length) assert.ok(project.sources.length, project.slug);
    for (const source of project.sources) assert.match(source.url, /^https:\/\/github.com\/Cynthy15\/[^/]+\/blob\/[0-9a-f]{40}\//);
    if (!project.sources.length) assert.ok(['Details pending', 'Concept'].includes(project.status), project.slug);
  }
});

test('published content avoids placeholder links, excluded branding, and fabricated metrics', async () => {
  const pages = [homepage, ...await Promise.all(projects.map(project => readFile(`dist/projects/${project.slug}/index.html`, 'utf8')))];
  for (const html of pages) {
    assert.doesNotMatch(html, /href="#"|https:\/\/example\.com|SheCanCODE|100%|years experience|Message sent!/i);
    assert.ok(html.includes('mailto:cynthynigaira@gmail.com'));
    assert.ok(html.includes('https://github.com/Cynthy15'));
  }
  const cafe = projects.find(project => project.slug === 'boards-cafe');
  assert.ok(cafe.outcome.includes('Payment processing is outside the scope'));
});

test('blood-supply stock relationship and realistic implementation status are preserved', async () => {
  const html = await readFile('dist/projects/blood-supply/index.html', 'utf8');
  assert.ok(html.includes('B(t+1) = B(t) + S − D − E'));
  assert.ok(html.includes('FastAPI'));
  assert.ok(html.includes('Next.js and PostgreSQL remain the intended direction'));
  assert.ok(html.includes('not an operational hospital or RBC production deployment'));
});
