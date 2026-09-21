import Image from "next/image";
import { FiArrowRight, FiCode, FiLinkedin, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const strengths = [
  { icon: FiShield, title: "Soluciones de negocio", text: "Sistemas reales, no solo código" },
  { icon: FiTrendingUp, title: "Enfoque en resultados", text: "Rendimiento y escalabilidad" },
  { icon: FiCode, title: "Aprendizaje constante", text: "Siempre explorando tecnologías" },
  { icon: FiUsers, title: "Trabajo en equipo", text: "Comunicación y compromiso" },
];

export default function Hero() {
  return <section className="hero" id="inicio">
    <Image className="hero-photo" src="/assets/hero/lider-cerro.jpg" alt="Líder Salinas con camiseta azul y roja de Cerro Porteño" fill priority sizes="100vw" />
    <div className="hero-overlay" aria-hidden="true" />
    <div className="container hero-inner"><div className="hero-copy"><p className="availability"><i /> Disponible para proyectos remotos</p><h1>Transformo ideas<br />en <span>soluciones reales</span></h1><p className="hero-summary">Desarrollador Full Stack con experiencia en Python, FastAPI, React/Next.js, PostgreSQL y Flutter. Creo aplicaciones web y móviles modernas, escalables y orientadas a resolver problemas de negocio.</p><div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver mis proyectos <FiArrowRight /></a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn</a></div></div><p className="hero-quote">“Disciplina hoy,<br />resultados mañana.”</p></div>
    <div className="container strength-grid">{strengths.map(({icon: Icon,title,text}) => <div className="strength" key={title}><Icon /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div>
  </section>;
}
