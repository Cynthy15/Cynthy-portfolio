import { technicalSkills } from '../data/profile';

export default function TechnicalSkills() {
  return (
    <section className="section-wrap expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="section-heading"><div><div className="eyebrow">03 / MY TECHNICAL TOOLKIT</div><h2 id="expertise-title">From the interface<br />to the data underneath<span>.</span></h2></div><p>Technologies and practices I’ve worked with<br />through projects, study, and technical training.</p></div>
      <div className="technical-grid">{technicalSkills.map(group => <article className="technical-card" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>
  );
}
