const skills = [
  {
    title: 'Communication',
    description: 'Explain technical ideas clearly, document decisions, and listen carefully to understand what people need.',
  },
  {
    title: 'Collaboration',
    description: 'Work with developers, designers, and stakeholders toward shared goals, with openness to feedback and different perspectives.',
  },
  {
    title: 'Creative problem-solving',
    description: 'Break complex challenges into manageable steps and explore practical solutions grounded in user and system needs.',
  },
  {
    title: 'Accountability',
    description: 'Take ownership of commitments, communicate progress and blockers, and approach each task with care and attention to detail.',
  },
  {
    title: 'Organization & coordination',
    description: 'Set priorities, organize project tasks, and keep requirements and documentation clear to support steady team progress.',
  },
  {
    title: 'Adaptability & learning',
    description: 'Stay curious, learn new tools, and use constructive feedback to improve both the work and the way it gets done.',
  },
];

export default function ProfessionalSkills() {
  return (
    <section className="professional-section" id="professional-skills" aria-labelledby="professional-skills-title">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">04 / PROFESSIONAL SKILLS</div>
            <h2 id="professional-skills-title">Good work starts with<br />how we work together<span>.</span></h2>
          </div>
          <p>The human skills behind the technical work.<br />A thoughtful approach to people and projects.</p>
        </div>
        <div className="professional-grid">
          {skills.map((skill, index) => (
            <article className="professional-card" key={skill.title}>
              <span className="professional-number" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
