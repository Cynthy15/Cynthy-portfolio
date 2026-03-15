import { useReveal } from "../hooks/useReveal";

const PROJECTS = [
  {
    id: "001",
    title: "E-Commerce UI Redesign",
    type: "UI/UX Design",
    year: "2024",
    desc: "Full redesign of a Rwandan e-commerce platform — improved conversion rate through user-centered wireframes, prototypes, and a cohesive design system.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    color: "mint",
    accent: "#3ECFA0",
    status: "shipped",
  },
  {
    id: "002",
    title: "Data Dashboard",
    type: "Data Analysis",
    year: "2024",
    desc: "Interactive analytics dashboard for student performance tracking. Data pipeline from CSV to visual insights using Python and chart libraries.",
    tags: ["Python", "Data Viz", "Dashboard"],
    color: "lemon",
    accent: "#F5E642",
    status: "shipped",
  },
  {
    id: "003",
    title: "Portfolio v1",
    type: "Front-End Dev",
    year: "2023",
    desc: "Personal portfolio built from scratch — React, responsive grid layouts, animation system, and optimized performance scores.",
    tags: ["React", "CSS", "Animation"],
    color: "sky",
    accent: "#4AAFEB",
    status: "shipped",
  },
  {
    id: "004",
    title: "Mobile App – HealthTrack",
    type: "Flutter Dev",
    year: "2023",
    desc: "Health monitoring mobile application built with Flutter. User authentication, data persistence, and clean cross-platform UI.",
    tags: ["Flutter", "Dart", "Firebase"],
    color: "rose",
    accent: "#FF7EB3",
    status: "in-progress",
  },
];

const COLOR = {
  mint:  { title: "text-mint",          id: "text-mint/40",          badge: "bg-mint/10 text-mint border-mint/20",          dot: "bg-mint" },
  sky:   { title: "text-sky",           id: "text-sky/40",           badge: "bg-sky/10 text-sky border-sky/20",             dot: "bg-sky" },
  lemon: { title: "text-lemon",         id: "text-lemon/40",         badge: "bg-lemon/10 text-lemon border-lemon/20",       dot: "bg-lemon" },
  rose:  { title: "text-[#FF7EB3]",     id: "text-[#FF7EB3]/40",     badge: "bg-[#FF7EB3]/10 text-[#FF7EB3] border-[#FF7EB3]/20", dot: "bg-[#FF7EB3]" },
};

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky/20 to-transparent" />

      <div className="max-w-6xl mx-auto section-reveal" ref={ref}>
        <div className="mb-14">
          <div className="font-mono text-xs text-sky/40 mb-3 flex items-center gap-2">
            <span className="text-mint">▸</span>
            <span>~/projects</span>
            <span className="text-navy-600">$</span>
            <span className="text-white/50">ls -la ./shipped</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold text-white">
            Things I've <span className="text-mint text-glow-mint">shipped.</span>
          </h2>
          <p className="font-mono text-xs text-sky/40 mt-2">// total 4 entries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => {
            const c = COLOR[p.color];
            return (
              <div
                key={p.id}
                className="term-card p-6 rounded-xl group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`font-mono text-[10px] ${c.id} mb-1`}>[{p.id}] · {p.year}</div>
                    <h3 className={`font-display text-lg font-bold ${c.title} group-hover:underline`}>{p.title}</h3>
                    <div className="font-mono text-[11px] text-sky/40 mt-0.5">{p.type}</div>
                  </div>
                  {/* Status pill */}
                  <span className={`font-mono text-[9px] font-bold px-2 py-1 rounded border flex items-center gap-1.5 flex-shrink-0 mt-1 ${c.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot} ${p.status === "in-progress" ? "animate-pulse" : ""}`} />
                    {p.status}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-navy-600 mb-4" />

                {/* Description */}
                <p className="text-sm text-sky-300/60 leading-relaxed mb-5">{p.desc}</p>

                {/* Tags + arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className={`font-mono text-[10px] px-2 py-0.5 rounded border ${c.badge}`}>{t}</span>
                    ))}
                  </div>
                  <span className={`font-mono text-sm ${c.title} opacity-0 group-hover:opacity-100 transition-opacity`}>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
