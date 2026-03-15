import { useState, useEffect } from "react";

const links = [
  { label: "~/home", href: "#home" },
  { label: "~/services", href: "#services" },
  { label: "~/about", href: "#about" },
  { label: "~/projects", href: "#projects" },
  { label: "~/contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "about", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy-900/95 backdrop-blur-md border-b border-navy-700" : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-lg font-bold text-white flex items-center gap-2">
          <span className="text-mint text-glow-mint">▸</span>
          <span>cynthy.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`font-mono text-xs px-3 py-1.5 rounded transition-colors duration-150 ${active === l.href
                  ? "text-mint text-glow-mint"
                  : "text-sky-400/60 hover:text-sky-300"
                }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 font-mono text-xs bg-mint/10 border border-mint/30 text-mint px-4 py-2 rounded hover:bg-mint/20 hover:border-mint/60 transition-all duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse inline-block"></span>
          ./hire-me.sh
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-mint font-mono text-sm"
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? "[×]" : "[≡]"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900/98 border-b border-navy-700 px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-sm ${active === l.href ? "text-mint" : "text-sky-400/70"}`}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="font-mono text-xs text-mint border border-mint/30 px-3 py-1.5 rounded w-fit mt-1">
            ./hire-me.sh
          </a>
        </div>
      )}
    </nav>
  );
}
