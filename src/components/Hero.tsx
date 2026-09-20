import { FiArrowDown, FiArrowUpRight, FiGithub, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return <section className="hero" id="inicio"><div className="hero-orbit" aria-hidden="true" /><div className="container hero-grid">
    <div className="hero-copy"><p className="hero-index">PORTFOLIO / 2026</p><h1><span>LÍDER</span><span>SALINAS</span></h1><p className="hero-role">Backend &amp; Full Stack Developer</p><p className="hero-summary">{profile.resumen}</p>
      <div className="hero-meta" aria-label="Ubicación y disponibilidad"><span><FiMapPin aria-hidden="true" /> {profile.ubicacion} · Remoto</span><span className="availability"><i aria-hidden="true" /> {profile.disponibilidad}</span></div>
      <div className="hero-proof" aria-label="Resultados profesionales"><span><strong>10+</strong> módulos en NexoVet</span><span><strong>78</strong> pruebas de backend</span><span><strong>37</strong> flujos de navegador</span></div>
      <div className="hero-actions"><a className="button button-primary" href="#proyectos">Explorar proyectos <FiArrowDown aria-hidden="true" /></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" /></a></div>
    </div>
    <div className="hero-city" aria-label="Composición arquitectónica digital que representa sistemas conectados"><span className="city-label">Sistemas que conectan<br />personas, datos y procesos.</span><div className="city-plane" aria-hidden="true"><i className="tower tower-one" /><i className="tower tower-two" /><i className="tower tower-three" /><i className="tower tower-four" /><i className="city-core">LS</i><i className="city-line line-one" /><i className="city-line line-two" /></div><span className="city-note">PY — REMOTE<br />25.2867° S</span></div>
  </div></section>;
}
