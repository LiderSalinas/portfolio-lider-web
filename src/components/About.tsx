import { FiMapPin, FiRadio, FiTerminal } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const details = [
  { icon: FiTerminal, label: "Especialidad", value: profile.especialidad },
  { icon: FiMapPin, label: "Ubicación", value: `${profile.ubicacion} · Remoto` },
  { icon: FiRadio, label: "Disponibilidad", value: profile.disponibilidad },
];

export default function About() {
  return <section className="section about-section" id="sobre-mi"><div className="container about-grid">
    <div className="portrait" aria-label="Monograma de Líder Salinas"><span>LS</span><small>Backend / Full Stack</small></div>
    <div className="about-copy"><p className="eyebrow">Sobre mí</p><h2>Tecnología con criterio, cercanía y propósito.</h2><p className="about-lead">{profile.bio}</p><p className="about-method">Mi forma de trabajar: {profile.formaDeTrabajo.toLowerCase()}.</p>
      <dl className="profile-details">{details.map(({ icon: Icon, label, value }) => <div key={label}><Icon aria-hidden="true" /><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div>
  </div></section>;
}
