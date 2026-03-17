import { useState, useEffect } from "react";

const ROLES = [
  "Front-End Developer_",
  "UI/UX Designer_",
  "Data Analyst_",
  "IT Specialist_",
  "System Analyst_",
];

const TAGS = [
  { label: "React", color: "mint" },
  { label: "Figma", color: "sky" },
  { label: "JavaScript", color: "lemon" },
  { label: "Python", color: "rose-port" },
  { label: "Flutter", color: "mint" },
  { label: "Tailwind", color: "sky" },
  { label: "Photoshop", color: "lemon" },
  { label: "Canva", color: "rose-port" },
];

const COLOR_MAP = {
  mint: { bg: "bg-mint/10 border-mint/30", text: "text-mint" },
  sky: { bg: "bg-sky/10 border-sky/30", text: "text-sky" },
  lemon: { bg: "bg-lemon/10 border-lemon/30", text: "text-lemon" },
  "rose-port": {
    bg: "bg-[#FF7EB3]/10 border-[#FF7EB3]/30",
    text: "text-[#FF7EB3]",
  },
};

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        70
      );
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        35
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-mint text-glow-mint">
      {displayed}
      <span className="animate-blink">█</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-14 overflow-hidden px-4 sm:px-6"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ backgroundSize: "40px 40px" }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-mint/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* Terminal path */}
          <div className="font-mono text-xs text-sky/60 mb-6 flex items-center gap-2 flex-wrap">
            <span className="text-mint">▸</span>
            <span>~/cynthia-niganze</span>
            <span className="text-navy-600">$</span>
            <span className="text-white/60">who am i?</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-3 animate-fadeUp">
            Cynthia<br />
            <span className="text-mint text-glow-mint">Niganze.</span>
          </h1>

          {/* Role */}
          <div className="font-mono text-base sm:text-lg md:text-xl mb-6 min-h-[2rem] animate-fadeUp">
            <TypewriterRole />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-sky-300/70 leading-relaxed mb-8 max-w-md animate-fadeUp">
            Information Systems student at the University of Rwanda.
            I craft functional, beautiful digital experiences —
            from pixel-perfect UIs to data-driven insights.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 animate-fadeUp">
            {TAGS.map((t) => {
              const c = COLOR_MAP[t.color];
              return (
                <span
                  key={t.label}
                  className={`font-mono text-[11px] font-bold px-3 py-1 rounded border ${c.bg} ${c.text}`}
                >
                  {t.label}
                </span>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 animate-fadeUp">
            <a
              href="#contact"
              className="font-mono text-sm bg-mint text-navy-950 font-bold px-6 py-3 rounded hover:bg-mint-bright transition-colors duration-200 shadow-mint text-center"
            >
              $ ./contact.sh
            </a>
            <a
              href="#projects"
              className="font-mono text-sm border border-sky/30 text-sky px-6 py-3 rounded hover:border-sky/60 hover:bg-sky/5 transition-all duration-200 text-center"
            >
              $ ls ./projects
            </a>
            <a
              href="#"
              className="font-mono text-sm border border-navy-600 text-sky-300/60 px-6 py-3 rounded hover:border-navy-500 hover:text-sky-300 transition-all duration-200 text-center"
            >
              $ cat cv.pdf
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-6 sm:gap-8 animate-fadeUp">
            {[
              { val: "5+", label: "years experience" },
              { val: "5", label: "projects shipped" },
              { val: "100%", label: "Figma mastery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-mint text-glow-mint">
                  {s.val}
                </div>
                <div className="font-mono text-[10px] text-sky-400/50 uppercase tracking-widest mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="animate-fadeUp grid-flow-col lg:block w-full">
          <div className="term-card rounded-xl overflow-hidden animate-flicker">
            <div className="bg-navy-700 px-4 py-3 flex items-center gap-2 border-b border-navy-600">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="font-mono text-xs text-sky/40 ml-3">
                portfolio.sh — bash — 80×24
              </span>
            </div>

            <div className="p-5 font-mono text-xs leading-relaxed space-y-1 overflow-x-auto">
              <div><span className="text-mint">cynthia@portfolio</span><span className="text-sky/50">:</span><span className="text-sky">~</span><span className="text-white/40">$</span> <span className="text-white/80">cat profile.json</span></div>
              <div className="text-sky/40">{`{`}</div>
              <div className="ml-4 text-sky/60">"name": <span className="text-lemon">"Cynthia Niganze Iradukunda"</span>,</div>
              <div className="ml-4 text-sky/60">"location": <span className="text-lemon">"Kigali, Rwanda 🇷🇼"</span>,</div>
              <div className="ml-4 text-sky/60">"role": <span className="text-lemon">"Information Systems Student"</span>,</div>
              <div className="ml-4 text-sky/60">"university": <span className="text-lemon">"University of Rwanda"</span>,</div>
              <div className="ml-4 text-sky/60">"skills": [</div>
              <div className="ml-8 text-mint">"UI/UX", "Front-End", "Data", "IT", "System"</div>
              <div className="ml-4 text-sky/60">],</div>
              <div className="ml-4 text-sky/60">"available": <span className="text-mint">true</span>,</div>
              <div className="ml-4 text-sky/60">"email": <span className="text-[#FF7EB3]">"cynthynigaira@gmail.com"</span></div>
              <div className="text-sky/40">{`}`}</div>
            </div>
          </div>

          <div className="mt-4 term-card p-4 rounded-xl flex flex-wrap items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-mint animate-glow flex-shrink-0" />
            <span className="font-mono text-xs text-sky/60">Status:</span>
            <span className="font-mono text-xs text-mint">
              Open to opportunities & collaborations
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-sky/30 flex flex-col items-center gap-2">
        <span>scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-sky/30 to-transparent" />
      </div>
    </section>
  );
}