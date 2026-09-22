import { FiCheck } from "react-icons/fi";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return <section className="section experience-section" id="experiencia"><div className="container"><div className="section-title"><span>Mi recorrido</span><h2>Experiencia y formación</h2></div><div className="experience-grid">
    <div className="experience-content">{experience.map((item) => <article className="timeline-card" key={item.organizacion}><span className="timeline-dot" aria-hidden="true" /><div><p className="timeline-date">{item.periodo}</p><p className="timeline-role">{item.rol}</p><h3>{item.organizacion}</h3><p>{item.descripcion}</p><small>{item.stack}</small></div></article>)}</div>
      <div className="education-card"><span>Formación</span><ul>{education.map((item) => <li key={item}><FiCheck aria-hidden="true" /> {item}</li>)}</ul></div>
    </div>
  </div></section>;
}
