import Image from "next/image";
import { FiAward, FiBriefcase, FiHeadphones, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const stats = [
  { icon: FiAward, value: "Analista", label: "de Sistemas" },
  { icon: FiBriefcase, value: "4+", label: "productos reales" },
  { icon: FiHeadphones, value: "Remoto", label: "disponible" },
];

export default function About() {
  return <section className="section about-section" id="sobre-mi"><div className="container"><div className="section-title"><span>Mi historia</span><h2>Sobre mí</h2></div><div className="about-grid">
    <div className="about-photo"><Image src="/assets/hero/lider-cerro.jpg" alt="Líder Salinas en un ambiente informal" fill sizes="(max-width: 760px) 90vw, 360px" /></div>
    <div className="about-copy"><div className="about-stats">{stats.map(({ icon: Icon, value, label }) => <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>)}</div><p>{profile.bio} Construyo APIs, productos web y aplicaciones móviles pensando tanto en el funcionamiento como en la experiencia de quien los usa.</p><p className="location"><FiMapPin /> {profile.ubicacion} · trabajo remoto</p><a className="text-link" href="#contacto">Hablemos de tu proyecto →</a></div>
  </div></div></section>;
}
