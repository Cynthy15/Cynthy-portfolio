export default function ProjectDiagram({ project, compact = false }) {
  return (
    <figure className={`system-diagram ${compact ? 'compact' : ''}`}>
      <figcaption>{project.flowLabel}</figcaption>
      <ol className="system-flow">
        {project.flow.map((step, index) => (
          <li key={step}>
            <span className="flow-index">0{index + 1}</span>
            <span>{step}</span>
            {index < project.flow.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
    </figure>
  );
}
