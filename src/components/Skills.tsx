import { FiCheckCircle } from "react-icons/fi";
import { skillGroups } from "@/data/portfolio";

export default function Skills(){return <section className="section skills-section" id="stack"><div className="container"><div className="section-title"><span>Mis habilidades</span><h2>Experiencia técnica</h2></div><div className="skills-grid">{skillGroups.map(group=><article className="skill-card" key={group.titulo}><span className="skill-index">0{skillGroups.indexOf(group)+1}</span><h3>{group.titulo}</h3><p>{group.descripcion}</p><ul>{group.items.map(item=><li key={item}><FiCheckCircle/><span>{item}</span></li>)}</ul></article>)}</div></div></section>}
