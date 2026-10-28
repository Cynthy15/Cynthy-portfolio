import { profile } from '../data/profile';
export default function SiteFooter() {
  return <footer className="site-footer section-wrap"><a className="brand" href="/" aria-label="Cynthia home">cynthy<span aria-hidden="true">✳</span></a><p>© {new Date().getFullYear()} {profile.name}. Crafted with purpose.</p><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></footer>;
}
