"use client";
import Image from "next/image";

type Props = {
  titulo: string;
  descripcion: string;
  stack: string[];
  repoUrl: string;
  demoUrl: string;
  cover: string;
};

export default function ProjectCard({
  titulo,
  descripcion,
  stack,
  repoUrl,
  demoUrl,
  cover,
}: Props) {
  return (
    <div className="card h-100 border-0 shadow-sm hover-shadow">
      <Image
        src={cover}
        alt={titulo}
        width={1200}
        height={800}
        className="card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{titulo}</h5>
        <p className="card-text text-muted">{descripcion}</p>

        <div className="mb-2">
          {Array.isArray(stack) &&
            stack.map((s) => (
              <span key={s} className="badge bg-secondary me-2">
                {s}
              </span>
            ))}
        </div>

        <div className="mt-auto d-flex gap-2">
          <a
            className="btn btn-outline-dark btn-sm"
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Código
          </a>
          <a
            className="btn btn-primary btn-sm"
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
