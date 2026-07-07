import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

/* ─── Project Data ─────────────────────────────────────── */
const PROJECTS = [
  {
    id: "001",
    title: "REACH",
    category: ["FinTech", "Information Systems"],
    status: "Featured",
    statusColor: "mint",
    desc: "A digital lending platform designed to improve financial inclusion by helping SMEs access financing without relying primarily on collateral. Integrates verified business data from government institutions to support faster, fairer credit assessment.",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs", "JWT Auth", "Git", "GitHub"],
    github: "https://github.com",
    demo: null,
    accent: "#3ECFA0",
  },
  {
    id: "002",
    title: "OmniReach",
    category: ["Mobile"],
    status: "In Progress",
    statusColor: "lemon",
    desc: "A cross-platform remote desktop application enabling users to securely access and manage their computers from mobile devices. Focuses on secure connectivity, remote productivity, and seamless device management.",
    tech: ["Flutter", "Dart", "PostgreSQL", "REST API", "Android Studio"],
    github: "https://github.com",
    demo: null,
    accent: "#FAD201",
  },
  {
    id: "003",
    title: "Blood Supply Monitoring IS",
    category: ["Healthcare", "Information Systems"],
    status: "Academic",
    statusColor: "sky",
    desc: "A healthcare information system improving blood donation management, inventory monitoring, and distribution between blood banks and hospitals. Reduces shortages and enhances emergency response through centralized data management.",
    tech: ["IS Analysis", "SQL", "Database Design", "ER Modeling", "UML"],
    github: "https://github.com",
    demo: null,
    accent: "#4AAFEB",
  },
  {
    id: "004",
    title: "Rescue Pulse",
    category: ["AI", "Healthcare"],
    status: "Concept",
    statusColor: "rose",
    desc: "An AI-powered emergency response platform designed to reduce response times by intelligently prioritizing incidents, locating nearby healthcare facilities, and coordinating emergency services through real-time decision support.",
    tech: ["Artificial Intelligence", "GIS", "Mobile Dev", "Web Technologies", "System Design"],
    github: "https://github.com",
    demo: null,
    accent: "#FF7EB3",
  },
  {
    id: "005",
    title: "Video Streaming Platform",
    category: ["Web Development"],
    status: "Completed",
    statusColor: "mint",
    desc: "A modern YouTube-inspired video streaming application for browsing, searching, and watching videos via external APIs. Demonstrates responsive frontend development, API integration, and modern React architecture.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "React Query", "Zustand", "Axios", "RapidAPI"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "#3ECFA0",
  },
  {
    id: "006",
    title: "MedDelivery",
    category: ["Healthcare"],
    status: "Completed",
    statusColor: "mint",
    desc: "A healthcare logistics platform streamlining medicine ordering and delivery by connecting patients, pharmacies, and delivery personnel through one centralized system. Enables efficient order management and delivery tracking.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "REST APIs", "Git", "GitHub"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "#4AAFEB",
  },
  {
    id: "007",
    title: "UWACU",
    category: ["Web Development"],
    status: "Completed",
    statusColor: "mint",
    desc: "A modern web application demonstrating responsive interface design, reusable React components, and scalable frontend architecture. Emphasizes clean user experience, performance, and modern web development best practices.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Git", "GitHub"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "#F5E642",
  },
  {
    id: "008",
    title: "Database Design Projects",
    category: ["Information Systems"],
    status: "Academic",
    statusColor: "sky",
    desc: "A collection of database design projects demonstrating the complete database development lifecycle: requirements analysis, ER modeling, normalization, SQL implementation, and optimization for real-world information systems.",
    tech: ["PostgreSQL", "SQL", "ER Diagrams", "DB Normalization", "Relational Design", "Data Modeling"],
    github: "https://github.com",
    demo: null,
    accent: "#F5E642",
  },
];

const ALL_FILTERS = ["All", "FinTech", "Healthcare", "Web Development", "Information Systems", "AI", "Mobile"];

const STATUS_COLORS = {
  Featured:   "bg-[#3ECFA0]/15 text-[#3ECFA0] border-[#3ECFA0]/30",
  "In Progress": "bg-[#FAD201]/15 text-[#FAD201] border-[#FAD201]/30",
  Academic:   "bg-[#4AAFEB]/15 text-[#4AAFEB] border-[#4AAFEB]/30",
  Concept:    "bg-[#FF7EB3]/15 text-[#FF7EB3] border-[#FF7EB3]/30",
  Completed:  "bg-[#3ECFA0]/15 text-[#3ECFA0] border-[#3ECFA0]/30",
};

/* ─── Tech Stack Data ──────────────────────────────────── */
const TECH_GROUPS = [
  {
    label: "Frontend",
    color: "#3ECFA0",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Next.js"],
  },
  {
    label: "Mobile",
    color: "#FAD201",
    items: ["Flutter", "Dart"],
  },
  {
    label: "Backend",
    color: "#4AAFEB",
    items: ["Node.js", "REST APIs", "JWT Auth"],
  },
  {
    label: "Database",
    color: "#FF7EB3",
    items: ["PostgreSQL", "SQL", "Database Design", "ER Modeling"],
  },
  {
    label: "Tools",
    color: "#F5E642",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Figma"],
  },
  {
    label: "Expertise",
    color: "#3ECFA0",
    items: ["Information Systems", "FinTech", "AI", "Healthcare Tech", "Mobile Dev", "Web Dev", "DB Engineering", "API Integration", "UI/UX Design"],
  },
];

/* ─── Modal Component ──────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="relative z-10 term-card rounded-2xl max-w-2xl w-full p-8 border border-navy-600 shadow-2xl animate-fadeUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-xs text-sky/40 hover:text-mint transition-colors px-2 py-1 border border-navy-600 rounded"
        >
          [ESC] ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="font-mono text-[10px] text-sky/40 mb-1">
            [{project.id}] · Project Details
          </div>
          <h3 className="font-display text-2xl font-extrabold text-white mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="font-mono text-[10px] px-2 py-0.5 rounded border bg-navy-700 border-navy-600 text-sky/60"
              >
                {cat}
              </span>
            ))}
            <span
              className={`font-mono text-[10px] px-2 py-0.5 rounded border ${STATUS_COLORS[project.status]}`}
            >
              ● {project.status}
            </span>
          </div>
        </div>

        <div className="h-px bg-navy-600 mb-6" />

        {/* Description */}
        <p className="text-sm text-sky-300/70 leading-relaxed mb-6">
          {project.desc}
        </p>

        {/* Tech */}
        <div className="mb-6">
          <div className="font-mono text-[10px] text-sky/40 uppercase tracking-widest mb-3">
            Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-3 py-1 rounded-full border"
                style={{
                  background: `${project.accent}15`,
                  color: project.accent,
                  borderColor: `${project.accent}30`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-5 py-2.5 rounded border border-sky/30 text-sky hover:border-sky/60 hover:bg-sky/5 transition-all duration-200"
          >
            ↗ GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-5 py-2.5 rounded bg-mint text-navy-950 font-bold hover:bg-mint-bright transition-colors duration-200 shadow-mint"
            >
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────── */
export default function Projects() {
  const ref = useReveal();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) =>
        p.category.some((c) => c.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(c.toLowerCase()))
      );

  return (
    <>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      <section id="projects" className="relative py-24 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky/20 to-transparent" />

        <div className="max-w-6xl mx-auto section-reveal" ref={ref}>
          {/* Section header */}
          <div className="mb-10">
            <div className="font-mono text-xs text-sky/40 mb-3 flex items-center gap-2">
              <span className="text-mint">▸</span>
              <span>~/projects</span>
              <span className="text-navy-600">$</span>
              <span className="text-white/50">ls -la ./shipped</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold text-white">
              Things I've <span className="text-mint text-glow-mint">built.</span>
            </h2>
            <p className="font-mono text-xs text-sky/40 mt-2">
              // {PROJECTS.length} projects · FinTech · Healthcare · Web · Mobile · AI · Database
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-[11px] px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  filter === f
                    ? "bg-mint text-navy-950 border-mint font-bold shadow-mint"
                    : "border-navy-600 text-sky/50 hover:border-mint/40 hover:text-mint"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="term-card p-6 rounded-xl group cursor-pointer flex flex-col gap-4 border border-navy-600 hover:border-opacity-60 transition-all duration-300"
                style={{
                  animationDelay: `${i * 0.07}s`,
                  "--card-accent": p.accent,
                  borderColor: "rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${p.accent}40`;
                  e.currentTarget.style.boxShadow = `0 0 24px ${p.accent}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] text-sky/30 mb-1">[{p.id}]</div>
                    <h3
                      className="font-display text-base font-bold text-white group-hover:underline leading-snug"
                      style={{ color: p.accent }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <span
                    className={`font-mono text-[9px] font-bold px-2 py-1 rounded border flex-shrink-0 ml-2 mt-1 ${STATUS_COLORS[p.status]}`}
                  >
                    ● {p.status}
                  </span>
                </div>

                {/* Category badges */}
                <div className="flex flex-wrap gap-1.5">
                  {p.category.map((cat) => (
                    <span
                      key={cat}
                      className="font-mono text-[9px] px-2 py-0.5 rounded border bg-navy-700 border-navy-600 text-sky/50"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-navy-600" />

                {/* Description */}
                <p className="text-xs text-sky-300/60 leading-relaxed flex-1">
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] px-2 py-0.5 rounded-full border"
                      style={{
                        background: `${p.accent}12`,
                        color: p.accent,
                        borderColor: `${p.accent}25`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-navy-600 text-sky/30">
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] px-3 py-1.5 rounded border border-navy-600 text-sky/50 hover:border-sky/40 hover:text-sky transition-colors"
                  >
                    GitHub ↗
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono text-[10px] px-3 py-1.5 rounded border text-navy-950 font-bold transition-colors"
                      style={{ background: p.accent, borderColor: p.accent }}
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <button
                    onClick={() => setSelected(p)}
                    className="font-mono text-[10px] px-3 py-1.5 rounded border border-navy-600 text-sky/50 hover:border-mint/40 hover:text-mint transition-colors ml-auto"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── Technologies & Tools Section ── */}
          <div className="border-t border-navy-700 pt-16">
            <div className="mb-10">
              <div className="font-mono text-xs text-sky/40 mb-3 flex items-center gap-2">
                <span className="text-mint">▸</span>
                <span>~/stack</span>
                <span className="text-navy-600">$</span>
                <span className="text-white/50">cat technologies.json</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white">
                Technologies &amp; <span className="text-mint text-glow-mint">Tools.</span>
              </h2>
              <p className="font-mono text-xs text-sky/40 mt-2">
                // The stack powering my projects
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TECH_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="term-card p-5 rounded-xl border border-navy-600"
                  style={{ borderColor: `${group.color}20` }}
                >
                  <div
                    className="font-mono text-[11px] font-bold uppercase tracking-widest mb-4"
                    style={{ color: group.color }}
                  >
                    ▸ {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[10px] px-3 py-1 rounded-full border transition-all duration-200 hover:scale-105 cursor-default"
                        style={{
                          background: `${group.color}10`,
                          color: group.color,
                          borderColor: `${group.color}25`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
