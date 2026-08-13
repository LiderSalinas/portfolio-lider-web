import { FiCheck } from "react-icons/fi";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="container experience-grid">
        <div className="experience-intro">
          <p className="eyebrow">Experiencia y formación</p>
          <h2>Código aplicado a procesos de negocio</h2>
          <p>
            Mi perfil combina base técnica, proyectos propios y experiencia colaborando
            sobre módulos utilizados en un sistema ERP real.
          </p>
        </div>

        <div className="experience-content">
          {experience.map((item) => (
            <article className="timeline-card" key={item.organizacion}>
              <span>{item.periodo}</span>
              <div>
                <p className="timeline-role">{item.rol}</p>
                <h3>{item.organizacion}</h3>
                <p>{item.descripcion}</p>
                <small>{item.stack}</small>
              </div>
            </article>
          ))}

          <div className="education-card">
            <p className="education-title">Formación</p>
            <ul>
              {education.map((item) => (
                <li key={item}>
                  <FiCheck aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
