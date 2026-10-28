import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ProfessionalSkills from './components/ProfessionalSkills';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import ProjectLibrary from './components/ProjectLibrary';
import CaseStudy from './components/CaseStudy';
import { PROJECTS } from './projects';
import { profile } from './data/profile';

export function getProject(pathname) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? PROJECTS.find(project => project.slug === match[1]) : null;
}

function Home() {
  return <main id="main">
    <section className="hero section-wrap" id="home">
      <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> SOFTWARE WITH PURPOSE</div><p className="hero-identity">{profile.name}</p><h1>Thoughtful systems.<br />Meaningful <em>digital experiences.</em></h1><p className="hero-professional-title">Software Developer · Backend Engineer<br />Information Systems Specialist</p><p>{profile.summary} Based in Kigali, Rwanda.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <span aria-hidden="true">↗</span></a></div><div className="hero-note"><span>THINK IN SYSTEMS.</span><span>BUILD FOR PEOPLE.</span></div></div>
      <div className="hero-art" aria-label="Abstract geometric composition representing systems thinking and creative software development" role="img"><div className="art-grid" /><span className="art-label">CLEAR THINKING.<br />PRACTICAL POSSIBILITIES.</span><div className="art-circle" /><div className="art-arch" /><div className="art-sphere" /><span className="art-star">✳</span><div className="art-bottom"><span>SOFTWARE × SYSTEMS × PEOPLE</span><span>CN / KIGALI</span></div><div className="floating-note"><span className="note-icon">↗</span><div>Good ideas deserve<br /><b>thoughtful engineering.</b></div></div></div>
    </section>
    <div className="skills-strip" aria-label="Core technologies"><div>DESIGN. DEVELOP. CONNECT.</div>{['Python', 'Django', 'React', 'Next.js', 'Flutter', 'SQL'].map(skill => <span key={skill}>{skill}<i aria-hidden="true">✳</i></span>)}</div>
    <ProjectLibrary />
    <section className="about-section" id="about" aria-labelledby="about-title"><div className="section-wrap about-grid"><div className="about-art" aria-hidden="true"><div className="monogram">cn<span>✳</span></div><div className="about-art-footer"><span>KIGALI, RWANDA</span><span>CURIOUS BY NATURE.</span></div></div><div className="about-copy"><div className="eyebrow">02 / THE PERSON BEHIND THE SYSTEMS</div><h2 id="about-title">Curious mind.<br />Purposeful maker<span>.</span></h2><p>I’m {profile.name}, an Information Systems student at the University of Rwanda and an aspiring software engineer interested in reliable, maintainable software.</p><p>My work spans web and mobile development, backend engineering, database design, API integration, and systems analysis. I enjoy connecting technical execution with practical value for businesses, communities, and organizations.</p><p>I’ve developed my foundation through academic study and Django training at Solvit Africa. My goal is to grow into a strong software engineer who solves meaningful problems and contributes to technology development in Rwanda and beyond.</p><p>Outside technology, I enjoy running—a personal interest that brings balance to time spent building and learning.</p><div className="about-facts"><div><small>BASED IN</small><span>{profile.location}</span></div><div><small>STUDYING</small><span>Information Systems</span></div></div><a className="text-link" href="#education">Explore my education & training <span aria-hidden="true">↗</span></a></div></div></section>
    <TechnicalSkills />
    <ProfessionalSkills />
    <Education />
    <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-wrap"><div className="eyebrow"><span className="status-dot" /> LET’S MAKE SOMETHING MEANINGFUL</div><div className="contact-heading"><h2 id="contact-title">Your next idea.<br />Our next <em>conversation.</em></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Cynthia"><span aria-hidden="true">↗</span></a></div><div className="contact-bottom"><p>Have a project in mind or an opportunity to share?<br />I’m open to freelance work, internships, and collaborations.</p><div><a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><a className="phone-link" href="tel:+250791222275">{profile.phone}</a><a className="phone-link" href={profile.github} target="_blank" rel="noreferrer">GitHub / Cynthy15 ↗</a></div></div></div></section>
  </main>;
}

export default function App({ pathname = typeof window !== 'undefined' ? window.location.pathname : '/' }) {
  const project = getProject(pathname);
  const isHome = pathname === '/' || pathname === '/index.html';
  return <><a className="skip-link" href="#main">Skip to content</a><div id="top" /><SiteHeader />{project ? <CaseStudy project={project} /> : isHome ? <Home /> : <main id="main" className="section-wrap not-found"><div className="eyebrow">PAGE NOT FOUND</div><h1>Let’s get you back<br />to the work<span>.</span></h1><p>This page doesn’t exist. Explore the project library instead.</p><a className="button primary" href="/#work">View all projects ↗</a></main>}<SiteFooter /></>;
}
