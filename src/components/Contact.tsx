import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>¿Tienes un proyecto o una oportunidad remota?</h2>
          <p>
            Estoy abierto a conversar sobre desarrollo backend, productos full stack y
            colaboraciones donde pueda aportar desde el primer día.
          </p>
        </div>

        <div className="contact-links">
          <a className="contact-primary" href={`mailto:${profile.email}`}>
            <FiMail aria-hidden="true" />
            <span>
              Escríbeme
              <small>{profile.email}</small>
            </span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
