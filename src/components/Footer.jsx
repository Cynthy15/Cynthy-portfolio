const MARQUEE_ITEMS = [
  "React", "Figma", "JavaScript", "Python", "Flutter", "Tailwind CSS",
  "Adobe Photoshop", "Canva", "UI/UX", "Front-End", "Data Analysis", "IT Support",
  "HTML5", "CSS3", "Node.js", "Git", "Firebase", "SQL",
];

export default function Footer() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <footer className="relative border-t border-navy-700 mt-0 overflow-hidden">
      {/* Marquee */}
      <div className="py-4 overflow-hidden border-b border-navy-700">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="font-mono text-xs text-sky/30 flex items-center gap-3">
              <span className="text-mint/40">▸</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-extrabold text-white mb-2 flex items-center gap-2">
              <span className="text-mint text-glow-mint">▸</span>
              cynthia.sh
            </div>
            <p className="font-mono text-xs text-sky/40 leading-relaxed">
              Front-End Developer · UI/UX Designer<br />
              Data Analyst · IT Specialist<br />
              <span className="text-mint">// Based in Kigali, Rwanda 🇷🇼</span>
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="font-mono text-[10px] text-sky/30 uppercase tracking-widest mb-3">navigate</div>
            <div className="space-y-2">
              {["#home","#services","#about","#projects","#contact"].map(h => (
                <a key={h} href={h} className="block font-mono text-xs text-sky/50 hover:text-mint transition-colors">
                  <span className="text-mint/40 mr-2">▸</span>{h}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[10px] text-sky/30 uppercase tracking-widest mb-3">connect</div>
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#FF7EB3]">cynthydigalra@gmail.com</div>
              <div className="font-mono text-xs text-lemon">+250 791 222 275</div>
              <div className="flex gap-3 mt-3">
                {["IG","LI","GH"].map(s => (
                  <a key={s} href="#" className="w-8 h-8 rounded border border-navy-600 flex items-center justify-center font-mono text-[10px] text-sky/40 hover:border-mint/40 hover:text-mint transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-700 pt-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[10px] text-sky/25">
            // designed & built by Cynthia Niganze — 2025
          </span>
          <span className="font-mono text-[10px] text-sky/25">
            exit code: 0 &nbsp;·&nbsp; <span className="text-mint/50">status: online</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
