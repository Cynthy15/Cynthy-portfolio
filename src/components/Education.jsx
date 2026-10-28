import { education } from '../data/profile';

export default function Education() {
  return (
    <section className="section-wrap education-section" id="education" aria-labelledby="education-title">
      <div className="section-heading"><div><div className="eyebrow">05 / EDUCATION & CONTINUED GROWTH</div><h2 id="education-title">A foundation to build on<span>.</span></h2></div><p>Academic study, technical training,<br />and professional learning.</p></div>
      <div className="education-list">{education.map(item => <article className="education-item" key={item.institution}><div><span className="eyebrow">{item.type}</span><h3>{item.institution}</h3><p className="education-date">{item.date}</p></div><div><h4>{item.title}</h4><p>{item.description}</p></div></article>)}</div>
      <div className="experience-note"><h3>Growing through collaboration.</h3><p>My project work includes frontend contributions to MedDelivery and Uwacu, backend exploration, and academic information systems. I value clear requirements, shared ownership, and constructive feedback. Each case study records the contribution details currently available; team leadership, volunteering, and club roles will be added when supporting details are documented.</p></div>
    </section>
  );
}
