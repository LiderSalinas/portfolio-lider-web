import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-lider-web.vercel.app"),
  title: { default: "Líder Salinas | Backend & Full Stack Developer", template: "%s | Líder Salinas" },
  description: "Portfolio de Líder Salinas, Backend & Full Stack Developer de Paraguay especializado en APIs y productos digitales.",
  keywords: ["Líder Salinas", "Backend Developer", "Full Stack Developer", "FastAPI", "Next.js", "PostgreSQL", "Paraguay"],
  authors: [{ name: "Líder Salinas" }], creator: "Líder Salinas", alternates: { canonical: "/" },
  openGraph: { title: "Líder Salinas | Backend & Full Stack Developer", description: "APIs, lógica de negocio y productos digitales construidos con Python, TypeScript y PostgreSQL.", url: "/", siteName: "Portfolio de Líder Salinas", locale: "es_PY", type: "website" },
  twitter: { card: "summary", title: "Líder Salinas | Backend & Full Stack Developer", description: "APIs, lógica de negocio y productos digitales." },
  robots: { index: true, follow: true }, icons: { icon: "/favicon.ico" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07131f" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
