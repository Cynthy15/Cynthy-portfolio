import { useState } from 'react';
const links = [['Work', 'work'], ['About', 'about'], ['Expertise', 'expertise'], ['Professional skills', 'professional-skills'], ['Education', 'education']];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="/" aria-label="Cynthia home">cynthy<span aria-hidden="true">✳</span></a>
    <nav id="main-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>
      {links.map(([label, id]) => <a key={id} href={`/#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="/#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
    </nav>
    <button id="menu-toggle" className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
  </header>;
}
