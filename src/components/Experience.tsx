import { FiCheck } from "react-icons/fi";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return <section className="section experience-section" id="experiencia"><div className="container experience-grid">
    <div className="experience-intro"><p className="eyebrow">Experiencia y formación</p><h2>Aprender, construir y aplicar.</h2><p>Formación técnica, proyectos propios y colaboración sobre módulos de un ERP real.</p></div>
    <div className="experience-content">{experience.map((item) => <article className="timeline-card" key={item.organizacion}><span className="timeline-dot" aria-hidden="true" /><div className="timeline-date">{item.periodo}</div><div><p className="timeline-role">{item.rol}</p><h3>{item.organizacion}</h3><p className="timeline-context">{item.contexto}</p><p>{item.descripcion}</p><small>{item.stack}</small></div></article>)}
      <div className="education-card"><p className="education-title">Formación</p><ul>{education.map((item) => <li key={item}><FiCheck aria-hidden="true" /> {item}</li>)}</ul></div>
    </div>
  </div></section>;
}
