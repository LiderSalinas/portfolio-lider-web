import { FiDatabase, FiLayers, FiMapPin, FiRadio, FiServer, FiTerminal } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const details = [
  { icon: FiTerminal, label: "Especialidad", value: profile.especialidad },
  { icon: FiMapPin, label: "Ubicación", value: `${profile.ubicacion} · Remoto` },
  { icon: FiRadio, label: "Disponibilidad", value: profile.disponibilidad },
];

const specialties = [
  { icon: FiServer, title: "APIs y backend", text: "Arquitectura, autenticación, reglas de negocio y servicios mantenibles." },
  { icon: FiLayers, title: "Productos full stack", text: "Interfaz, backend y base de datos conectados como un solo producto." },
  { icon: FiDatabase, title: "Integraciones y datos", text: "PostgreSQL, servicios externos, automatizaciones y flujos de información." },
];

export default function About() {
  return <section className="section about-section" id="sobre-mi"><div className="container about-grid">
    <div className="portrait" aria-label="Monograma de Líder Salinas"><span>LS</span><small>Backend / Full Stack</small></div>
    <div className="about-copy"><p className="eyebrow">Sobre mí</p><h2>Tecnología con criterio, cercanía y propósito.</h2><p className="about-lead">{profile.bio}</p><p className="about-method">Mi forma de trabajar: {profile.formaDeTrabajo.toLowerCase()}.</p>
      <dl className="profile-details">{details.map(({ icon: Icon, label, value }) => <div key={label}><Icon aria-hidden="true" /><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div>
    <div className="specialties" aria-labelledby="specialties-title"><p className="specialties-kicker" id="specialties-title">Cómo puedo aportar</p><div className="specialties-grid">{specialties.map(({ icon: Icon, title, text }) => <article className="specialty-card" key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
  </div></section>;
}
