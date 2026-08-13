export const profile = {
  nombre: "Líder Salinas",
  rol: "Backend & Full Stack Developer",
  propuesta:
    "Construyo APIs y productos digitales que convierten procesos reales en soluciones simples y mantenibles.",
  resumen:
    "Trabajo con Python, FastAPI, Node.js, React, Next.js y PostgreSQL. Me enfoco en autenticación, lógica de negocio, datos y experiencias web listas para crecer.",
  email: "rubensalinas05@gmail.com",
  linkedin: "https://www.linkedin.com/in/lider-salinas-dev",
  github: "https://github.com/LiderSalinas",
  ubicacion: "Paraguay · Trabajo remoto",
  disponibilidad: "Disponible para oportunidades remotas",
};

export const projects = [
  {
    titulo: "Jahamina",
    categoria: "Producto Full Stack",
    descripcion:
      "Plataforma de viajes compartidos que conecta personas con trayectos compatibles y gestiona solicitudes, reservas y comunicación privada.",
    aporte:
      "Diseñé la arquitectura por servicios, autenticación JWT/OAuth2, permisos por rol, chat en tiempo real, migraciones y pruebas automatizadas.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "WebSocket", "Docker"],
    repoUrl: "https://github.com/LiderSalinas/Jahamina",
    demoUrl: "https://jahamina-cyan.vercel.app",
    estado: "MVP funcional",
    codigo: "JH",
    tono: "cyan",
    destacado: true,
  },
  {
    titulo: "Ranking Padel Oficial",
    categoria: "Plataforma deportiva",
    descripcion:
      "Sistema para administrar usuarios, parejas, desafíos, resultados, ranking, cuotas y notificaciones de una comunidad de pádel.",
    aporte:
      "Integré una interfaz React/TypeScript con una API FastAPI, persistencia PostgreSQL y notificaciones push mediante Firebase.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Firebase"],
    repoUrl: "https://github.com/LiderSalinas/ranking-padel-web",
    repoLabel: "Frontend",
    estado: "Producto en evolución",
    codigo: "RP",
    tono: "violet",
  },
  {
    titulo: "TV Paraguay",
    categoria: "Aplicación Flutter",
    descripcion:
      "Aplicación para reproducir canales paraguayos en vivo desde teléfonos Android y TV Box con una experiencia sencilla y directa.",
    aporte:
      "Implementé reproducción HLS, grilla remota mediante JSON, navegación adaptada a controles de TV y pruebas en dispositivos reales.",
    stack: ["Flutter", "Dart", "HLS", "JSON", "Android"],
    repoUrl: "https://github.com/LiderSalinas/tv_paraguay",
    estado: "En desarrollo y pruebas",
    codigo: "TV",
    tono: "amber",
  },
] as const;

export const skillGroups = [
  {
    titulo: "Backend",
    descripcion: "APIs, reglas de negocio y seguridad",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "JWT / OAuth2"],
  },
  {
    titulo: "Datos e infraestructura",
    descripcion: "Persistencia y entornos reproducibles",
    items: ["PostgreSQL", "SQLAlchemy", "Prisma", "Alembic", "Docker", "Git / GitHub"],
  },
  {
    titulo: "Frontend y móvil",
    descripcion: "Interfaces web y experiencias multiplataforma",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Dart"],
  },
] as const;

export const experience = [
  {
    periodo: "2025",
    rol: "Desarrollo Full Stack por proyecto",
    organizacion: "Talent Transfer LLC · ERP de asociaciones",
    descripcion:
      "Colaboré en módulos operativos de un ERP: pagos, pedidos en proceso, cuotas, inventario, movimientos de stock y reportes.",
    stack: "Next.js · Prisma · PostgreSQL",
  },
] as const;

export const education = [
  "Analista de Sistemas",
  "Desarrollo Web Full Stack · UCSA (140 h)",
  "Bootcamp de Python",
] as const;
