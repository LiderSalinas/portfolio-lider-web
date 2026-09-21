import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return <section className="section projects-section" id="proyectos"><div className="container">
    <div className="section-heading"><div><h2>Proyectos Destacados</h2><p>Algunos de los sistemas y aplicaciones en los que he trabajado recientemente.</p></div><a className="all-projects" href="https://github.com/LiderSalinas" target="_blank" rel="noopener noreferrer">Ver todos los proyectos →</a></div>
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.titulo} {...project} number={`0${index + 1}`} />)}</div>
  </div></section>;
}
