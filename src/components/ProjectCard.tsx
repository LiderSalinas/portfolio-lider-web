import { FiArrowUpRight, FiCode, FiExternalLink } from "react-icons/fi";

type ProjectCardProps = { titulo: string; categoria: string; problema: string; solucion: string; aporte: string; stack: readonly string[]; repoUrl: string; repoLabel?: string; demoUrl?: string; estado: string; codigo: string; tono: string; destacado?: boolean; number: string };

export default function ProjectCard({ titulo, categoria, problema, solucion, aporte, stack, repoUrl, repoLabel = "Código", demoUrl, estado, codigo, tono, destacado = false, number }: ProjectCardProps) {
  return <article className={`project-card ${destacado ? "project-card-featured" : ""}`}>
    <div className={`project-visual project-visual-${tono}`} aria-label={`Portada gráfica original de ${titulo}`} role="img"><span className="visual-number">{number}</span><span className="project-code">{codigo}</span><div className="project-ui" aria-hidden="true"><i /><i /><i /></div><span className="visual-label">Portada conceptual</span></div>
    <div className="project-content"><div className="project-heading"><div><p className="project-category">{categoria}</p><h3>{titulo}</h3></div><span className="project-status">{estado}</span></div>
      <div className="case-grid"><div><span>El problema</span><p>{problema}</p></div><div><span>La solución</span><p>{solucion}</p></div></div>
      <p className="project-contribution"><strong>Mi aporte</strong>{aporte}</p>
      <ul className="tag-list" aria-label={`Tecnologías de ${titulo}`}>{stack.map((item) => <li key={item}>{item}</li>)}</ul>
      <div className="project-links"><a href={repoUrl} target="_blank" rel="noopener noreferrer"><FiCode aria-hidden="true" /> {repoLabel}<FiArrowUpRight className="link-arrow" aria-hidden="true" /></a>{demoUrl ? <a href={demoUrl} target="_blank" rel="noopener noreferrer"><FiExternalLink aria-hidden="true" /> Ver producto<FiArrowUpRight className="link-arrow" aria-hidden="true" /></a> : null}</div>
    </div>
  </article>;
}
