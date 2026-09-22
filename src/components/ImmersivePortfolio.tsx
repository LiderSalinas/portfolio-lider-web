"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import { experience, profile, projects, skillGroups } from "@/data/portfolio";

const scenes = [
  { id: "inicio", label: "Inicio", accent: "#e9b52f" },
  { id: "sobre-mi", label: "Sobre mí", accent: "#ffc735" },
  { id: "proyectos", label: "Proyectos", accent: "#f0671f" },
  { id: "stack", label: "Tecnologías", accent: "#df1832" },
  { id: "experiencia", label: "Experiencia", accent: "#673044" },
  { id: "contacto", label: "Contacto", accent: "#355e66" },
] as const;

type SceneId = (typeof scenes)[number]["id"];

export default function ImmersivePortfolio() {
  const [active, setActive] = useState<SceneId>("inicio");
  const current = useMemo(() => scenes.find((scene) => scene.id === active) ?? scenes[0], [active]);

  useEffect(() => {
    const requested = window.location.hash.replace("#", "") as SceneId;
    if (scenes.some((scene) => scene.id === requested)) setActive(requested);
  }, []);

  const selectScene = (id: SceneId) => {
    setActive(id);
    window.history.replaceState(null, "", "#" + id);
  };

  const sharePortfolio = async () => {
    const shareData = { title: "Portfolio de Líder Salinas", text: "Backend & Full Stack Developer", url: window.location.origin };
    if (navigator.share) await navigator.share(shareData);
    else await navigator.clipboard.writeText(window.location.origin);
  };

  return <main className="immersive-shell" style={{ "--scene-accent": current.accent } as React.CSSProperties}>
    <aside className="side-panel">
      <button className="identity" onClick={() => selectScene("inicio")} aria-label="Ir al inicio">
        <strong>Líder Salinas</strong>
        <span>Backend & Full Stack Developer</span>
      </button>
      <nav className="scene-nav" aria-label="Secciones del portfolio">
        {scenes.slice(1).map((scene) => <button key={scene.id} className={active === scene.id ? "active" : ""} style={{ "--item-accent": scene.accent } as React.CSSProperties} onClick={() => selectScene(scene.id)} aria-current={active === scene.id ? "page" : undefined}><i aria-hidden="true" /><span>{scene.label}</span></button>)}
        <button className="share-nav" style={{ "--item-accent": "#355e66" } as React.CSSProperties} onClick={sharePortfolio}><i aria-hidden="true" /><span>Compartir</span></button>
      </nav>
      <div className="side-socials">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        <a href={"mailto:" + profile.email} aria-label="Correo"><FiMail /></a>
      </div>
    </aside>

    <section className={"scene scene-" + active} aria-live="polite">
      <div className="scene-grid" aria-hidden="true" />
      <GeometricSculpture active={active} />
      <div className="scene-content" key={active}>
        {active === "inicio" && <HomeScene onProjects={() => selectScene("proyectos")} />}
        {active === "sobre-mi" && <AboutScene />}
        {active === "proyectos" && <ProjectsScene />}
        {active === "stack" && <StackScene />}
        {active === "experiencia" && <ExperienceScene />}
        {active === "contacto" && <ContactScene />}
      </div>
      <div className="scene-counter"><span>0{scenes.findIndex((scene) => scene.id === active) + 1}</span><i /><small>06</small></div>
    </section>
  </main>;
}

function GeometricSculpture({ active }: { active: SceneId }) {
  return <div className={"sculpture sculpture-" + active} aria-hidden="true"><div className="poly-cube"><span className="face face-front" /><span className="face face-back" /><span className="face face-right" /><span className="face face-left" /><span className="face face-top" /><span className="face face-bottom" /></div><span className="shard shard-one" /><span className="shard shard-two" /><span className="shard shard-three" /></div>;
}

function HomeScene({ onProjects }: { onProjects: () => void }) {
  return <div className="home-scene-copy"><span className="scene-eyebrow">Portfolio · 2026</span><h1>Ideas que<br />se convierten<br /><em>en sistemas.</em></h1><p>{profile.resumen}</p><div><button onClick={onProjects}>Explorar proyectos</button><a href={"mailto:" + profile.email}>Contactar</a></div></div>;
}

function AboutScene() {
  return <div className="about-scene"><div className="scene-heading"><span>01 / PERFIL</span><h2>Sobre mí</h2></div><div className="about-scene-grid"><div className="about-scene-photo"><Image src="/assets/hero/lider-cerro.jpg" alt="Líder Salinas con camiseta de Cerro Porteño" fill sizes="(max-width: 760px) 80vw, 320px" /></div><div className="about-scene-copy"><p>{profile.bio}</p><dl><div><dt>Enfoque</dt><dd>Backend y productos Full Stack</dd></div><div><dt>Ubicación</dt><dd>Paraguay · Remoto</dd></div><div><dt>Forma de trabajo</dt><dd>{profile.formaDeTrabajo}</dd></div></dl></div></div></div>;
}

function ProjectsScene() {
  return <div className="projects-scene"><div className="scene-heading"><span>02 / TRABAJO RECIENTE</span><h2>Proyectos</h2></div><div className="project-slats">{projects.map((project, index) => <a key={project.titulo} href={("demoUrl" in project && project.demoUrl) || project.repoUrl} target="_blank" rel="noopener noreferrer"><span>0{index + 1}</span><div><strong>{project.titulo}</strong><small>{project.categoria}</small></div><FiArrowUpRight /></a>)}</div></div>;
}

function StackScene() {
  return <div className="stack-scene"><div className="scene-heading"><span>03 / HERRAMIENTAS</span><h2>Tecnologías</h2></div><div className="stack-orbits">{skillGroups.map((group, index) => <article key={group.titulo} style={{ "--orbit-index": index } as React.CSSProperties}><h3>{group.titulo}</h3><p>{group.items.join(" · ")}</p></article>)}</div></div>;
}

function ExperienceScene() {
  const item = experience[0];
  return <div className="experience-scene"><div className="scene-heading"><span>04 / RECORRIDO</span><h2>Experiencia</h2></div><article><span>{item.periodo}</span><h3>{item.organizacion}</h3><strong>{item.rol}</strong><p>{item.descripcion}</p><small>{item.stack}</small></article><p className="education-line">Analista de Sistemas · Full Stack UCSA · Bootcamp Python</p></div>;
}

function ContactScene() {
  const moveCard = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    event.currentTarget.style.setProperty("--pointer-x", `${-y * 9}deg`);
    event.currentTarget.style.setProperty("--pointer-y", `${x * 12}deg`);
  };

  const resetCard = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "0deg");
    event.currentTarget.style.setProperty("--pointer-y", "0deg");
  };

  return <div className="contact-scene"><div className="contact-card-stage" onPointerMove={moveCard} onPointerLeave={resetCard}><article className="contact-card"><div className="contact-card-screen"><div className="contact-mark" aria-hidden="true"><i /><i /><i /></div></div><h2>{profile.nombre}</h2><p>{profile.rol}</p><div className="contact-card-details"><a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer"><span><FiMessageCircle /> WhatsApp</span><strong>{profile.whatsapp} <FiArrowUpRight /></strong></a><a href={"mailto:" + profile.email}><span><FiMail /> Correo electrónico</span><strong>{profile.email}</strong></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span><FiLinkedin /> LinkedIn</span><strong>Ver perfil <FiArrowUpRight /></strong></a><div><span><FiMapPin /> Ubicación</span><strong>{profile.ubicacion} · Remoto</strong></div></div><footer>Disponible para nuevos proyectos</footer></article></div></div>;
}
