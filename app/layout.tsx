import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Lider Salinas - Portafolio",
  description: "Desarrollador Fullstack (React/Next.js - Python/FastAPI).",
  openGraph: {
    title: "Lider Salinas - Portafolio",
    description: "Desarrollador Fullstack (React/Next.js - Python/FastAPI).",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
