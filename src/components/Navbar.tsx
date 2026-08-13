import { FiArrowUpRight } from "react-icons/fi";

const navItems = [{ href: "#sobre-mi", label: "Sobre mí" }, { href: "#proyectos", label: "Proyectos" }, { href: "#experiencia", label: "Trayectoria" }, { href: "#stack", label: "Stack" }];

export default function Navbar() {
  return <header className="site-header"><nav className="nav container" aria-label="Navegación principal">
    <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark" aria-hidden="true">LS</span><span>Líder Salinas</span></a>
    <div className="nav-links">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
    <details className="mobile-menu">
      <summary aria-label="Abrir menú de navegación"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></summary>
      <div className="mobile-menu-panel">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#contacto">Contacto</a></div>
    </details>
    <a className="nav-cta" href="#contacto">Hablemos <FiArrowUpRight aria-hidden="true" /></a>
  </nav></header>;
}
