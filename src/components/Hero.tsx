import { FiArrowDown, FiGithub, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return <section className="hero" id="inicio"><div className="hero-orbit" aria-hidden="true" /><div className="container hero-grid">
    <div className="hero-copy"><p className="hero-name">{profile.nombre}</p><p className="eyebrow">{profile.rol}</p><h1>{profile.propuesta}</h1><p className="hero-summary">{profile.resumen}</p>
      <div className="hero-meta" aria-label="Ubicación y disponibilidad"><span><FiMapPin aria-hidden="true" /> {profile.ubicacion} · Remoto</span><span className="availability"><i aria-hidden="true" /> {profile.disponibilidad}</span></div>
      <div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver proyectos <FiArrowDown aria-hidden="true" /></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub</a></div>
    </div>
    <div className="api-wrap" aria-label="Representación visual de una API REST"><div className="api-shadow" aria-hidden="true" /><div className="api-card">
      <div className="api-card-top"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>api/v1/productos</span></div>
      <div className="api-card-body"><p><span className="method">POST</span><span className="endpoint">/v1/productos</span></p><div className="code-line"><span>auth</span><strong>JWT verificado</strong></div><div className="code-line"><span>reglas</span><strong>lógica de negocio</strong></div><div className="code-line"><span>datos</span><strong>PostgreSQL</strong></div><div className="response-line"><span>201</span> Producto listo para crecer</div></div>
      <div className="api-card-footer"><span>FastAPI</span><span>Next.js</span><span>Docker</span></div>
    </div><span className="api-caption">Diseño de sistemas · 01</span></div>
  </div></section>;
}
