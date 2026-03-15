import { useReveal } from "../hooks/useReveal";

const SERVICES = [
  {
    id: "01",
    title: "UI/UX Design",
    cmd:   "design --figma",
    color: "mint",
    accent: "#3ECFA0",
    desc: "Designing intuitive, visually compelling mobile and web interfaces. User research, wireframes, and Figma prototypes that convert visitors into fans.",
    tools: ["Figma", "Adobe XD", "Photoshop", "Canva"],
    metric: { val: "100%", label: "Figma proficiency" },
  },
  {
    id: "02",
    title: "Front-End Dev",
    cmd:   "build --react",
    color: "sky",
    accent: "#4AAFEB",
    desc: "Building pixel-perfect, responsive web interfaces with React, HTML/CSS, and JavaScript. Performance-first, accessible, and production-ready.",
    tools: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    metric: { val: "100%", label: "JS proficiency" },
  },
  {
    id: "03",
    title: "Data Analysis",
    cmd:   "analyze --insights",
    color: "lemon",
    accent: "#F5E642",
    desc: "Collecting, processing and interpreting data to generate actionable insights. Dashboards, reports, and decision-support systems.",
    tools: ["Python", "Excel", "SQL", "Visualization"],
    metric: { val: "85%", label: "Analytics depth" },
  },
  {
    id: "04",
    title: "IT Support",
    cmd:   "support --systems",
    color: "rose",
    accent: "#FF7EB3",
    desc: "Technical assistance, hardware/software troubleshooting, and system maintenance. Keeping operations smooth and secure.",
    tools: ["Networking", "Hardware", "OS Setup", "Security"],
    metric: { val: "70%", label: "Infrastructure ops" },
  },
];

const COLOR = {
  mint:  { border: "border-mint/20 hover:border-mint/50",  id: "text-mint/40",  title: "text-mint",  cmd: "text-mint/60",  bar: "bg-mint",   tool: "bg-mint/10 text-mint border-mint/20" },
  sky:   { border: "border-sky/20 hover:border-sky/50",    id: "text-sky/40",   title: "text-sky",   cmd: "text-sky/60",   bar: "bg-sky",    tool: "bg-sky/10 text-sky border-sky/20" },
  lemon: { border: "border-lemon/20 hover:border-lemon/50",id: "text-lemon/40", title: "text-lemon", cmd: "text-lemon/60", bar: "bg-lemon",  tool: "bg-lemon/10 text-lemon border-lemon/20" },
  rose:  { border: "border-[#FF7EB3]/20 hover:border-[#FF7EB3]/50", id: "text-[#FF7EB3]/40", title: "text-[#FF7EB3]", cmd: "text-[#FF7EB3]/60", bar: "bg-[#FF7EB3]", tool: "bg-[#FF7EB3]/10 text-[#FF7EB3] border-[#FF7EB3]/20" },
};

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto section-reveal" ref={ref}>
        {/* Section header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-sky/40 mb-3 flex items-center gap-2">
            <span className="text-mint">▸</span>
            <span>~/services</span>
            <span className="text-navy-600">$</span>
            <span className="text-white/50">ls -la</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold text-white">
            What I <span className="text-mint text-glow-mint">build.</span>
          </h2>
          <p className="font-mono text-xs text-sky/40 mt-2">
            // Clean code. Smooth design. Seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => {
            const c = COLOR[s.color];
            const pct = parseInt(s.metric.val);
            return (
              <div
                key={s.id}
                className={`term-card p-6 rounded-xl border ${c.border} cursor-default group`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`font-mono text-[10px] font-bold ${c.id} mb-1`}>
                      [{s.id}]
                    </div>
                    <h3 className={`font-display text-xl font-bold ${c.title}`}>
                      {s.title}
                    </h3>
                    <div className={`font-mono text-[11px] ${c.cmd} mt-0.5`}>
                      $ {s.cmd}
                    </div>
                  </div>
                  {/* Metric badge */}
                  <div className="text-right">
                    <div className={`font-display text-2xl font-extrabold ${c.title}`}>{s.metric.val}</div>
                    <div className="font-mono text-[9px] text-sky/30 uppercase tracking-wider">{s.metric.label}</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-px bg-navy-600 rounded mb-4 overflow-hidden">
                  <div
                    className={`h-full skill-bar-fill ${c.bar}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-sky-300/60 leading-relaxed mb-5">
                  {s.desc}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map(t => (
                    <span
                      key={t}
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border ${c.tool}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
