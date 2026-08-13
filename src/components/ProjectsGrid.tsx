import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return <section className="section projects-section" id="proyectos"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">Trabajo seleccionado</p><h2>Casos de estudio.<br />Problemas reales, soluciones concretas.</h2></div><p>Tres productos donde backend, datos e interfaz trabajan como un solo sistema.</p></div>
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.titulo} {...project} number={`0${index + 1}`} />)}</div>
  </div></section>;
}
