import { FiArrowDown, FiGithub, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return <section className="hero" id="inicio"><div className="hero-orbit" aria-hidden="true" /><div className="container hero-grid">
    <div className="hero-copy"><p className="hero-name">{profile.nombre}</p><p className="eyebrow">{profile.rol}</p><h1>Construyo la lógica que hace funcionar <span>productos digitales.</span></h1><p className="hero-summary">{profile.resumen}</p>
      <div className="hero-meta" aria-label="Ubicación y disponibilidad"><span><FiMapPin aria-hidden="true" /> {profile.ubicacion} · Remoto</span><span className="availability"><i aria-hidden="true" /> {profile.disponibilidad}</span></div>
      <div className="hero-proof" aria-label="Resultados profesionales"><span><strong>10+</strong> módulos en NexoVet</span><span><strong>78</strong> pruebas de backend</span><span><strong>37</strong> flujos de navegador</span></div>
      <div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver proyectos <FiArrowDown aria-hidden="true" /></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub</a></div>
    </div>
    <div className="api-wrap" aria-label="Representación visual de una API REST"><div className="api-shadow" aria-hidden="true" /><div className="api-card">
      <div className="api-card-top"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>api/v1/productos</span></div>
      <div className="api-card-body"><p><span className="method">GET</span><span className="endpoint">/api/v1/clinicas/dashboard</span></p><div className="code-line"><span>auth</span><strong>rol verificado</strong></div><div className="code-line"><span>tenant</span><strong>clínica aislada</strong></div><div className="code-line"><span>datos</span><strong>PostgreSQL</strong></div><div className="response-line"><span>200</span> NexoVet listo para operar</div></div>
      <div className="api-card-footer"><span>FastAPI</span><span>Next.js</span><span>Docker</span></div>
    </div><span className="api-caption">Proyecto destacado · NexoVet</span></div>
  </div></section>;
}
