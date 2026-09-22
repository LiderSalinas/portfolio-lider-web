import { profile } from "@/data/portfolio";
export default function Footer() { return <footer className="footer"><div className="container footer-inner"><a href="#inicio" className="footer-brand">Líder<span>.</span></a><p>Backend & Full Stack Developer</p><small>© {new Date().getFullYear()} {profile.nombre} · Paraguay</small></div></footer>; }
