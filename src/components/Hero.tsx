import { FiArrowDown, FiGithub, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return <section className="hero" id="inicio"><div className="hero-orbit" aria-hidden="true" /><div className="container hero-grid">
    <div className="hero-copy"><p className="hero-name">{profile.nombre}</p><p className="eyebrow">{profile.rol}</p><h1>Construyo la lógica que hace funcionar <span>productos digitales.</span></h1><p className="hero-summary">{profile.resumen}</p>
      <div className="hero-meta" aria-label="Ubicación y disponibilidad"><span><FiMapPin aria-hidden="true" /> {profile.ubicacion} · Remoto</span><span className="availability"><i aria-hidden="true" /> {profile.disponibilidad}</span></div>
      <div className="hero-proof" aria-label="Resultados profesionales"><span><strong>10+</strong> módulos en NexoVet</span><span><strong>78</strong> pruebas de backend</span><span><strong>37</strong> flujos de navegador</span></div>
      <div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver proyectos <FiArrowDown aria-hidden="true" /></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub</a></div>
    </div>
    <div className="hero-product" aria-label="Vista conceptual del sistema NexoVet">
      <div className="product-glow" aria-hidden="true" />
      <div className="product-window">
        <div className="product-topbar"><span className="product-logo">N</span><strong>NexoVet</strong><span className="product-live"><i /> Sistema operativo</span></div>
        <div className="product-shell">
          <aside aria-hidden="true"><i className="active" /><i /><i /><i /><i /></aside>
          <div className="product-dashboard"><div className="product-welcome"><span>Panel general</span><strong>Buenos días, Líder</strong></div>
            <div className="product-stats"><span><small>Turnos hoy</small><strong>12</strong></span><span><small>Pacientes</small><strong>248</strong></span><span><small>Stock bajo</small><strong>04</strong></span></div>
            <div className="product-content"><div className="product-chart"><span>Actividad semanal</span><div className="chart-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="product-next"><span>Próximo turno</span><strong>10:30</strong><small>Luna · Control</small></div></div>
          </div>
        </div>
      </div>
      <div className="floating-card floating-security"><span>✓</span><div><strong>Acceso seguro</strong><small>Roles y auditoría</small></div></div>
      <div className="floating-card floating-tests"><strong>115</strong><small>pruebas automatizadas</small></div>
    </div>
  </div></section>;
}
