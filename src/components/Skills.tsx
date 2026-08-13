import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="section stack-section" id="stack">
      <div className="container">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Stack técnico</p>
            <h2>Herramientas que uso para llevar una idea a producción</h2>
          </div>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.titulo}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.titulo}</h3>
              <p>{group.descripcion}</p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
