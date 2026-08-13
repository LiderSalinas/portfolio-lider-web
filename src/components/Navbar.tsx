import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            LS
          </span>
          <span>Líder Salinas</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contacto">
          Contacto <FiArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
