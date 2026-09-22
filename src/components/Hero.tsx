import Image from "next/image";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return <section className="home-section section" id="inicio"><div className="container home-container">
    <div className="home-heading"><span className="kicker">Hola, soy</span><h1>{profile.nombre}</h1><p>{profile.rol}</p><span className="availability"><i /> Disponible para proyectos remotos</span></div>
    <div className="home-actions"><a className="button button-outline" href={`mailto:${profile.email}`}>Contactar</a><a className="button button-primary" href="#sobre-mi">Sobre mí</a></div>
    <div className="home-stage">
      <div className="social-rail" aria-label="Redes sociales"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a><a href={`mailto:${profile.email}`} aria-label="Correo"><FiMail /></a><i /></div>
      <div className="home-portrait"><Image src="/assets/hero/lider-cerro.jpg" alt="Líder Salinas con camiseta de Cerro Porteño" fill priority sizes="(max-width: 640px) 260px, 340px" /></div>
      <a className="scroll-cue" href="#sobre-mi"><FiArrowDown /><span>Desplazá</span></a>
    </div>
  </div>
  </section>;
}
