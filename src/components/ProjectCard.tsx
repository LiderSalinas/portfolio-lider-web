import { FiArrowUpRight, FiCode, FiExternalLink } from "react-icons/fi";

type ProjectCardProps = {
  titulo: string;
  categoria: string;
  descripcion: string;
  aporte: string;
  stack: readonly string[];
  repoUrl: string;
  repoLabel?: string;
  demoUrl?: string;
  estado: string;
  codigo: string;
  tono: string;
  destacado?: boolean;
};

export default function ProjectCard({
  titulo,
  categoria,
  descripcion,
  aporte,
  stack,
  repoUrl,
  repoLabel = "Código",
  demoUrl,
  estado,
  codigo,
  tono,
  destacado = false,
}: ProjectCardProps) {
  return (
    <article className={`project-card ${destacado ? "project-card-featured" : ""}`}>
      <div className={`project-visual project-visual-${tono}`} aria-hidden="true">
        <span className="project-code">{codigo}</span>
        <div className="project-terminal">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="project-content">
        <div className="project-heading">
          <div>
            <p className="project-category">{categoria}</p>
            <h3>{titulo}</h3>
          </div>
          <span className="project-status">{estado}</span>
        </div>

        <p className="project-description">{descripcion}</p>
        <p className="project-contribution">
          <strong>Mi aporte:</strong> {aporte}
        </p>

        <ul className="tag-list" aria-label={`Tecnologías de ${titulo}`}>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <FiCode aria-hidden="true" /> {repoLabel}
            <FiArrowUpRight className="link-arrow" aria-hidden="true" />
          </a>
          {demoUrl ? (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <FiExternalLink aria-hidden="true" /> Ver producto
              <FiArrowUpRight className="link-arrow" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
