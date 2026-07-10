import { useReveal } from "../hooks/useReveal";

const SKILLS = [
  { label: "Figma",                    pct: 100, color: "#3ECFA0" },
  { label: "HTML & CSS",               pct: 100, color: "#4AAFEB" },
  { label: "JavaScript",               pct: 95,  color: "#F5E642" },
  { label: "React / Next.js",          pct: 90,  color: "#3ECFA0" },
  { label: "Node.js",                  pct: 75,  color: "#4AAFEB" },
  { label: "SQL & NoSQL Databases",    pct: 80,  color: "#F5E642" },
  { label: "Git & GitHub",             pct: 90,  color: "#3ECFA0" },
  { label: "CI/CD & Testing",          pct: 65,  color: "#FF7EB3" },
  { label: "Team Collaboration",       pct: 95,  color: "#4AAFEB" },
  { label: "Communication Skills",     pct: 95,  color: "#F5E642" },
  { label: "Flutter",                  pct: 70,  color: "#FF7EB3" },
  { label: "Python",                   pct: 75,  color: "#3ECFA0" },
];

const TIMELINE = [
  { year: "2023–now", title: "UI/UX & Front-End",     desc: "University of Rwanda — building real-world digital systems" },
  { year: "2022",     title: "Database Systems",       desc: "Scalable schema design & data management" },
  { year: "2021",     title: "Started Coding Journey", desc: "HTML, CSS, JavaScript fundamentals" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative py-24 px-6 bg-navy-900/40">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint/30 to-transparent" />

      <div className="max-w-6xl mx-auto section-reveal" ref={ref}>
        {/* Section header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-sky/40 mb-3 flex items-center gap-2">
            <span className="text-mint">▸</span>
            <span>~/about</span>
            <span className="text-navy-600">$</span>
            <span className="text-white/50">cat README.md</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold text-white">
            The <span className="text-mint text-glow-mint">human</span> behind the code.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio + timeline */}
          <div>
            {/* Bio card */}
            <div className="term-card p-6 rounded-xl mb-6">
              <div className="font-mono text-xs text-sky/40 mb-4">
                <span className="text-mint">▸</span> bio.txt
              </div>
              <p className="text-sm text-sky-300/70 leading-[1.9]">
                My name is <span className="text-mint font-semibold">Cynthia Iraduikunda Niganze</span>,
                an Information Systems student at the University of Rwanda with a strong academic
                and practical interest in IT and digital systems.
              </p>
              <p className="text-sm text-sky-300/70 leading-[1.9] mt-3">
                Over two years I've built competencies in UI/UX design, web development,
                database systems, and data management — designing digital solutions that are
                <span className="text-sky font-medium"> functional, efficient, and user-centered</span>.
              </p>
              <p className="text-sm text-sky-300/70 leading-[1.9] mt-3">
                I'm driven by technology's power to address real-world challenges and improve
                access to digital systems across Africa and beyond.
              </p>
            </div>

            {/* Timeline */}
            <div className="term-card p-6 rounded-xl">
              <div className="font-mono text-xs text-sky/40 mb-5">
                <span className="text-mint">▸</span> git log --oneline
              </div>
              <div className="relative pl-6 space-y-5">
                <div className="absolute left-0 top-1 bottom-0 w-px bg-gradient-to-b from-mint/40 via-sky/20 to-transparent" />
                {TIMELINE.map((t, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full border border-mint bg-navy-800" />
                    <div className="font-mono text-[10px] text-mint/60 mb-0.5">{t.year}</div>
                    <div className="font-mono text-sm text-white font-bold">{t.title}</div>
                    <div className="text-xs text-sky-300/50 mt-0.5">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: skills */}
          <div>
            <div className="term-card p-6 rounded-xl">
              <div className="font-mono text-xs text-sky/40 mb-6">
                <span className="text-mint">▸</span> skills --proficiency
              </div>
              <div className="space-y-5">
                {SKILLS.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-mono text-xs text-sky-300/80">{s.label}</span>
                      <span className="font-mono text-xs font-bold" style={{ color: s.color }}>{s.pct}%</span>
                    </div>
                    <div className="h-1 bg-navy-600 rounded-full overflow-hidden">
                      <div
                        className="h-full skill-bar-fill rounded-full"
                        style={{ width: `${s.pct}%`, background: s.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Download CV */}
              <a
                href="#"
                className="mt-8 w-full flex items-center justify-center gap-2 font-mono text-xs bg-mint/10 border border-mint/30 text-mint py-3 rounded-lg hover:bg-mint/20 hover:border-mint/50 transition-all duration-200"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                $ wget cynthia-cv.pdf
              </a>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { label: "Location",    val: "Kigali, Rwanda 🇷🇼" },
                { label: "University",  val: "Univ. of Rwanda" },
                { label: "Speciality",  val: "UI/UX + Front-End" },
                { label: "Status",      val: "Open to work ✓" },
              ].map(f => (
                <div key={f.label} className="term-card p-4 rounded-xl">
                  <div className="font-mono text-[9px] text-sky/30 uppercase tracking-widest mb-1">{f.label}</div>
                  <div className="font-mono text-xs text-sky-200/80">{f.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
