export const profile = {
  nombre: "Líder Salinas",
  rol: "Backend & Full Stack Developer",
  propuesta: "Construyo la lógica que hace funcionar productos digitales.",
  resumen: "Diseño APIs, flujos de negocio y experiencias web con una base técnica preparada para crecer.",
  bio: "Soy desarrollador Backend & Full Stack de Paraguay. Me gusta entender el problema antes de escribir código y convertir procesos complejos en productos claros, útiles y mantenibles.",
  email: "rubensalinas05@gmail.com",
  linkedin: "https://www.linkedin.com/in/lider-salinas-dev",
  github: "https://github.com/LiderSalinas",
  ubicacion: "Paraguay",
  disponibilidad: "Disponible para trabajo remoto",
  especialidad: "APIs y productos full stack",
  formaDeTrabajo: "Claridad, colaboración y código mantenible",
};

export const projects = [
  { titulo: "Jahamina", categoria: "Producto Full Stack", problema: "Coordinar viajes compartidos requiere compatibilidad de trayectos, confianza y comunicación entre personas.", solucion: "Una plataforma que conecta trayectos y centraliza solicitudes, reservas y conversación privada.", aporte: "Arquitectura por servicios, autenticación JWT/OAuth2, permisos por rol, chat en tiempo real, migraciones y pruebas automatizadas.", stack: ["FastAPI", "Next.js", "PostgreSQL", "WebSocket", "Docker"], repoUrl: "https://github.com/LiderSalinas/Jahamina", demoUrl: "https://jahamina-cyan.vercel.app", estado: "MVP funcional", codigo: "JH", tono: "cyan", destacado: true, image: "/assets/projects/jahamina.webp", imageAlt: "Vista real de Jahamina con recorrido, mapa y conversación del viaje", imagePosition: "43% center" },
  { titulo: "Ranking Padel Oficial", categoria: "Plataforma deportiva", problema: "Una comunidad de pádel necesita ordenar desafíos, resultados, cuotas y posiciones sin fragmentar la gestión.", solucion: "Un sistema centralizado para administrar jugadores, parejas, desafíos, ranking y notificaciones.", aporte: "Integración de interfaz React/TypeScript con API FastAPI, persistencia PostgreSQL y notificaciones push mediante Firebase.", stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Firebase"], repoUrl: "https://github.com/LiderSalinas/ranking-padel-web", repoLabel: "Frontend", estado: "En evolución", codigo: "RP", tono: "violet", image: "/assets/projects/ranking-padel.webp", imageAlt: "Vista real de la clasificación de Ranking Pádel Oficial", imagePosition: "center 27%" },
  { titulo: "TV Paraguay", categoria: "Aplicación Flutter", problema: "Ver canales paraguayos en Android y TV Box necesita una experiencia directa y adaptada a distintos controles.", solucion: "Una aplicación liviana con grilla remota y reproducción de transmisiones HLS en vivo.", aporte: "Reproducción HLS, grilla mediante JSON, navegación para controles de TV y pruebas en dispositivos reales.", stack: ["Flutter", "Dart", "HLS", "JSON", "Android"], repoUrl: "https://github.com/LiderSalinas/tv_paraguay", estado: "En desarrollo y pruebas", codigo: "TV", tono: "amber" },
] as const;

export const skillGroups = [
  { titulo: "Backend", descripcion: "APIs, reglas de negocio y seguridad", items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "JWT / OAuth2"] },
  { titulo: "Datos / Infraestructura", descripcion: "Persistencia y entornos reproducibles", items: ["PostgreSQL", "SQLAlchemy", "Prisma", "Alembic", "Docker", "Git / GitHub"] },
  { titulo: "Frontend / Móvil", descripcion: "Interfaces web y experiencias multiplataforma", items: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Dart"] },
] as const;

export const experience = [{ periodo: "2025", rol: "Desarrollo Full Stack por proyecto", organizacion: "Talent Transfer LLC", contexto: "ERP de asociaciones", descripcion: "Colaboré en módulos operativos de pagos, pedidos en proceso, cuotas, inventario, movimientos de stock y reportes.", stack: "Next.js · Prisma · PostgreSQL" }] as const;
export const education = ["Analista de Sistemas", "Desarrollo Web Full Stack · UCSA (140 h)", "Bootcamp de Python"] as const;
