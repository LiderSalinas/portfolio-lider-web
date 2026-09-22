import { FiBriefcase, FiCode, FiHome, FiMail, FiUser } from "react-icons/fi";

const navItems = [
  { href: "#inicio", label: "Inicio", icon: FiHome },
  { href: "#sobre-mi", label: "Sobre mí", icon: FiUser },
  { href: "#stack", label: "Tecnologías", icon: FiCode },
  { href: "#proyectos", label: "Proyectos", icon: FiBriefcase },
  { href: "#contacto", label: "Contacto", icon: FiMail },
];

export default function Navbar() {
  return <header className="site-header">
    <div className="topbar container"><a className="wordmark" href="#inicio">Líder<span>.</span></a><span className="topbar-role">Backend · Full Stack · Paraguay</span><span className="theme-dot" aria-hidden="true" /></div>
    <nav className="nav-dock" aria-label="Navegación principal">{navItems.map(({ href, label, icon: Icon }) => <a key={href} href={href} aria-label={label} title={label}><Icon /><span>{label}</span></a>)}</nav>
  </header>;
}
