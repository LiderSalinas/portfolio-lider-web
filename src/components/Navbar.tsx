import { FiDownload } from "react-icons/fi";

const navItems = [{href:"#inicio",label:"Inicio"},{href:"#sobre-mi",label:"Sobre mí"},{href:"#proyectos",label:"Proyectos"},{href:"#stack",label:"Tecnologías"},{href:"#experiencia",label:"Experiencia"},{href:"#contacto",label:"Contacto"}];

export default function Navbar(){return <header className="site-header"><nav className="nav container" aria-label="Navegación principal"><a className="brand" href="#inicio"><span className="brand-mark">LS</span><span><b>Líder Salinas</b><small>Full Stack Developer</small></span></a><div className="nav-links">{navItems.map(item=><a key={item.href} href={item.href}>{item.label}</a>)}</div><details className="mobile-menu"><summary aria-label="Abrir menú"><span/><span/><span/></summary><div className="mobile-menu-panel">{navItems.map(item=><a key={item.href} href={item.href}>{item.label}</a>)}</div></details><a className="nav-cta" href="#contacto"><FiDownload/> Contacto</a></nav></header>}
