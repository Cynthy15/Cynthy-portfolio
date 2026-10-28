import { useState } from 'react';
import { FILTERS, PROJECTS } from '../projects';
import ProjectDiagram from './ProjectDiagram';

export default function ProjectLibrary() {
  const [filter, setFilter] = useState('All work');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const matches = PROJECTS.filter(project =>
    (filter === 'All work' || project.category.includes(filter)) &&
    `${project.title} ${project.subtitle} ${project.tech.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  const visible = showAll ? matches : matches.slice(0, 4);
  return (
    <section className="section-wrap work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div><div className="eyebrow">01 / ENGINEERING IN PRACTICE</div><h2 id="work-title">Real problems.<br />Considered solutions<span>.</span></h2></div>
        <p>Backend systems, thoughtful interfaces, and ideas<br />for better access to everyday services.</p>
      </div>
      <div className="library-controls">
        <div className="filters" aria-label="Filter projects">
          {FILTERS.map(item => <button key={item} aria-pressed={filter === item} className={filter === item ? 'active' : ''} onClick={() => { setFilter(item); setShowAll(false); }}>{item}</button>)}
        </div>
        <label className="project-search"><span className="sr-only">Search projects or technologies</span><input type="search" placeholder="Search projects or technologies…" value={query} onChange={event => { setQuery(event.target.value); setShowAll(false); }} /></label>
      </div>
      <p className="results-count" aria-live="polite">{matches.length} {matches.length === 1 ? 'project' : 'projects'}{query.trim() ? ` matching “${query.trim()}”` : ''} · {filter}</p>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article className={`project-card project-tone-${index % 4}`} key={project.slug}>
            <a className="project-cover" href={`/projects/${project.slug}/`} aria-label={`Read ${project.title} case study`}>
              <div className="cover-top"><span>{project.kind}</span><span className="project-status">{project.status}</span></div>
              <div className="cover-name">{project.title}</div>
              <span className="cover-subtitle">{project.subtitle}</span>
              <ProjectDiagram project={project} compact />
            </a>
            <div className="project-title"><h3><a href={`/projects/${project.slug}/`}>{project.title}</a></h3><a className="round-arrow" href={`/projects/${project.slug}/`} aria-label={`View ${project.title} details`}>↗</a></div>
            <div className="project-meta">{project.category.join(' · ')}</div>
            <p>{project.desc}</p>
            <div className="tags">{project.tech.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
          </article>
        ))}
      </div>
      {matches.length === 0 && <div className="empty-results"><h3>No projects found.</h3><p>Try a different name, technology, or category.</p><button className="button secondary" onClick={() => { setFilter('All work'); setQuery(''); }}>Reset filters</button></div>}
      {matches.length > 4 && <button className="button secondary more-work" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show selected work' : `Explore all ${matches.length} projects`} <span aria-hidden="true">{showAll ? '−' : '+'}</span></button>}
      <p className="preview-note">Case studies distinguish inspected source, proposed features, and details still being documented.</p>
    </section>
  );
}
