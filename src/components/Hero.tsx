"use client";

import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="bg-light py-5 border-bottom">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <h1 className="display-5 fw-bold">Soy {profile.nombre}</h1>
            <p className="lead mb-2">{profile.rol}</p>
            <p className="mb-0">{profile.resumen}</p>
            <small className="text-muted d-block">{profile.ubicacion}</small>
            <div className="mt-3 d-flex gap-2">
              <a className="btn btn-dark" href={`mailto:${profile.email}`}>Contactar</a>
              <a className="btn btn-outline-dark" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <Image
              src="/assets/img/hero.svg"
              alt="Líder Salinas – Desarrollador Fullstack"
              width={800}
              height={500}
              className="img-fluid rounded-3 shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
