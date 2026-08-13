import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <ProjectsGrid />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
