"use client";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-5" href="#">
          Líder Salinas <span className="text-primary">| Fullstack Dev</span>
        </a>
        <div className="d-flex gap-3">
          <a className="nav-link text-white" href="#projects">Proyectos</a>
          <a className="nav-link text-white" href="mailto:rubensalinas05@gmail.com">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
