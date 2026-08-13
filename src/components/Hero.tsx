import { FiArrowDown, FiGithub, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.rol}</p>
          <h1>{profile.propuesta}</h1>
          <p className="hero-summary">{profile.resumen}</p>

          <div className="hero-meta" aria-label="Ubicación y disponibilidad">
            <span>
              <FiMapPin aria-hidden="true" /> {profile.ubicacion}
            </span>
            <span className="availability">
              <i aria-hidden="true" /> {profile.disponibilidad}
            </span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Ver proyectos <FiArrowDown aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <div className="api-card" aria-label="Ejemplo visual de una API REST">
          <div className="api-card-top">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>api/v1/viajes</span>
          </div>
          <div className="api-card-body">
            <p>
              <span className="method">POST</span>
              <span className="endpoint">/reservas</span>
            </p>
            <div className="code-line">
              <span>auth</span>
              <strong>JWT verificado</strong>
            </div>
            <div className="code-line">
              <span>reglas</span>
              <strong>permisos por rol</strong>
            </div>
            <div className="code-line">
              <span>datos</span>
              <strong>PostgreSQL</strong>
            </div>
            <div className="response-line">
              <span>201</span> Reserva creada
            </div>
          </div>
          <div className="api-card-footer">
            <span>FastAPI</span>
            <span>SQLAlchemy</span>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}
