import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section className="section projects-section" id="proyectos">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Trabajo seleccionado</p>
            <h2>Proyectos construidos sobre problemas reales</h2>
          </div>
          <p>
            Cada proyecto combina lógica de negocio, datos y una experiencia pensada
            para usuarios concretos.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.titulo} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
