import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.nombre}</p>
        <p>Diseñado y construido con Next.js</p>
      </div>
    </footer>
  );
}
