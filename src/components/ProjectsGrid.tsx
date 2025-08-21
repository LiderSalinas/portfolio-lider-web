"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-4">Proyectos</h2>
      <div className="row g-4">
        {projects.map((p) => (
          <div key={p.titulo} className="col-12 col-md-6 col-lg-4">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
