import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return <section className="section projects-section" id="proyectos"><div className="container">
    <div className="section-title"><span>Mi portfolio</span><h2>Trabajos recientes</h2></div><div className="project-filters" aria-label="Categorías"><span className="active">Todos</span><span>Web</span><span>Backend</span><span>Móvil</span></div>
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.titulo} {...project} number={`0${index + 1}`} />)}</div>
    <a className="all-projects" href="https://github.com/LiderSalinas" target="_blank" rel="noopener noreferrer">Explorar GitHub →</a>
  </div></section>;
}
