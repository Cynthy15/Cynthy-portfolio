import { PROJECTS } from '../projects';
import ProjectDiagram from './ProjectDiagram';
import { profile } from '../data/profile';

function ContentSection({ title, children }) {
  return <section className="case-content-section"><h2>{title}</h2>{children}</section>;
}

export default function CaseStudy({ project }) {
  const next = PROJECTS[(PROJECTS.findIndex(item => item.slug === project.slug) + 1) % PROJECTS.length];
  return (
    <main id="main" className="case-main">
      <div className="section-wrap">
        <a className="case-back" href="/#work">← Back to all projects</a>
        <div className="case-hero">
          <div className="eyebrow">{project.kind} / {project.status}</div>
          <h1>{project.title}<span>.</span></h1><p className="case-subtitle">{project.subtitle}</p><p className="case-intro">{project.desc}</p>
          {project.fullTitle && <p className="case-full-title">{project.fullTitle}</p>}
          <div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
          <div className="case-actions">{project.repository && <a className="button primary" href={project.repository} target="_blank" rel="noreferrer">View repository ↗</a>}<a className="button secondary" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let’s discuss ${project.title}`)}`}>Discuss this project ↗</a></div>
        </div>
        <ProjectDiagram project={project} />
        <div className="case-layout">
          <div className="case-body">
            <ContentSection title="The problem & the people"><p>{project.problem}</p><h3>Intended users</h3><p>{project.users}</p></ContentSection>
            <ContentSection title="Approach & architecture"><p>{project.solution}</p><p>{project.architecture}</p></ContentSection>
            {project.equation && <ContentSection title="The inventory relationship"><div className="inventory-equation">{project.equation}</div><dl className="equation-key"><div><dt>B</dt><dd>Available blood stock</dd></div><div><dt>S</dt><dd>Incoming supply</dd></div><div><dt>D</dt><dd>Dispatched units</dd></div><div><dt>E</dt><dd>Expired or discarded units</dd></div></dl><p>This describes the stock balance between periods. The repository includes an implementation of this calculation; the full hospital workflow still needs validation.</p></ContentSection>}
            <ContentSection title="What the source confirms">{project.features.length ? <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul> : <p>Implementation details are awaiting source review. The workflow above describes the project’s intent, not verified working functionality.</p>}</ContentSection>
            <ContentSection title="Planned & still to validate"><ul>{project.planned.map(item => <li key={item}>{item}</li>)}</ul></ContentSection>
            <ContentSection title="Technical decisions & challenges"><p>{project.decision}</p></ContentSection>
            {project.slug === 'boards-cafe' && <ContentSection title="A closer look at pricing"><p>This excerpt from the menu model keeps the effective variant price explicit. Serializer validation separately rejects prices below zero.</p><pre><code>{'@property\ndef effective_price(self):\n    return self.product.base_price + self.price_adjustment'}</code></pre><a className="text-link" href={project.sources[0].url} target="_blank" rel="noreferrer">Read the original model ↗</a></ContentSection>}
            {project.slug === 'blood-supply' && <ContentSection title="From model to code"><pre><code>{'def inventory_balance(B: float, S: float, D: float, E: float) -> float:\n    return B + S - D - E'}</code></pre><a className="text-link" href={project.sources[2].url} target="_blank" rel="noreferrer">Read the inventory implementation ↗</a></ContentSection>}
            <ContentSection title="Outcome & engineering takeaways"><p>{project.outcome}</p><p>{project.reflection}</p></ContentSection>
            <ContentSection title="Details to complete"><ul>{project.missing.map(item => <li key={item}>{item}</li>)}</ul></ContentSection>
            <ContentSection title="Source material">{project.sources.length ? <><p>These links point to the exact commits inspected for this case study. Code review establishes what is in the repository; it does not establish successful execution or sole authorship.</p><ul className="source-list">{project.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></> : <p>This case study is based on my supplied project brief. A matched source repository or supporting artifact is still needed.</p>}{project.links && <><h3>Project links</h3><ul className="source-list">{project.links.map(link => <li key={link.url}><a href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a></li>)}</ul></>}</ContentSection>
          </div>
          <aside className="case-sidebar" aria-label="Project summary"><div><small>STATUS</small><p>{project.status}</p></div><div><small>MY CONTRIBUTION</small><p>{project.role}</p></div><div><small>PROJECT TYPE</small><p>{project.kind}</p></div><div><small>AREAS</small><p>{project.category.join(' · ')}</p></div><div><small>EVIDENCE REVIEW</small><p>28 October 2026</p></div>{project.related && <a className="text-link" href={`/projects/${project.related}/`}>Explore the REACH product ↗</a>}</aside>
        </div>
        <div className="case-next"><span className="eyebrow">CONTINUE EXPLORING</span><a href={`/projects/${next.slug}/`}>{next.title} <span aria-hidden="true">↗</span></a></div>
      </div>
    </main>
  );
}
