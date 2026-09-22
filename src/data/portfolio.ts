export const profile = {
  nombre: "Líder Salinas",
  rol: "Backend & Full Stack Developer",
  propuesta: "Construyo la lógica que hace funcionar productos digitales.",
  resumen: "Construyo sistemas completos para negocios: desde la API y la base de datos hasta una experiencia web clara, segura y lista para usarse.",
  bio: "Soy desarrollador Backend & Full Stack de Paraguay. Me gusta entender el problema antes de escribir código y convertir procesos complejos en productos claros, útiles y mantenibles.",
  email: "rubensalinas05@gmail.com",
  whatsapp: "+595 975 779293",
  whatsappUrl: "https://wa.me/595975779293",
  linkedin: "https://www.linkedin.com/in/lider-salinas-blanco-353903401",
  github: "https://github.com/LiderSalinas",
  ubicacion: "Paraguay",
  disponibilidad: "Disponible para trabajo remoto",
  especialidad: "APIs y productos full stack",
  formaDeTrabajo: "Claridad, colaboración y código mantenible",
};

export const projects = [
  { titulo: "NexoVet", categoria: "Sistema de gestión veterinaria", problema: "Una clínica necesita reunir pacientes, agenda, historia clínica, vacunas, ventas, inventario, compras y caja sin perder control operativo.", solucion: "Una plataforma integral, responsive y multi-clínica que conecta la atención veterinaria con la administración diaria.", aporte: "Arquitectura full stack, 10 módulos conectados, autenticación por roles, aislamiento entre clínicas, respaldos firmados, restauración y auditoría de acciones sensibles.", stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"], repoUrl: "https://github.com/LiderSalinas", repoLabel: "Perfil GitHub", estado: "Proyecto destacado", codigo: "NV", tono: "cyan", destacado: true },
  { titulo: "Jahamina", categoria: "Producto Full Stack", problema: "Coordinar viajes compartidos requiere compatibilidad de trayectos, confianza y comunicación entre personas.", solucion: "Una plataforma que conecta trayectos y centraliza solicitudes, reservas y conversación privada.", aporte: "Arquitectura por servicios, autenticación JWT/OAuth2, permisos por rol, chat en tiempo real, migraciones y pruebas automatizadas.", stack: ["FastAPI", "Next.js", "PostgreSQL", "WebSocket", "Docker"], repoUrl: "https://github.com/LiderSalinas/Jahamina", demoUrl: "https://jahamina-cyan.vercel.app", estado: "MVP funcional", codigo: "JH", tono: "violet", image: "/assets/projects/jahamina.webp", imageAlt: "Vista real de Jahamina con recorrido, mapa y conversación del viaje", imagePosition: "43% center" },
  { titulo: "TV Paraguay", categoria: "Aplicación Flutter", problema: "Ver canales paraguayos en Android y TV Box necesita una experiencia directa y adaptada a distintos controles.", solucion: "Una aplicación liviana con grilla remota y reproducción de transmisiones HLS en vivo.", aporte: "Reproducción HLS, grilla mediante JSON, navegación para controles de TV y pruebas en dispositivos reales.", stack: ["Flutter", "Dart", "HLS", "JSON", "Android"], repoUrl: "https://github.com/LiderSalinas/tv_paraguay", estado: "En desarrollo y pruebas", codigo: "TV", tono: "amber" },
  { titulo: "Sistema de Gimnasios", categoria: "Sistema de gestión", problema: "Administrar socios, cuotas y vencimientos manualmente genera atrasos y poca visibilidad.", solucion: "Una plataforma para centralizar clientes, membresías, pagos, vencimientos y reportes.", aporte: "API REST con autenticación, reglas de cuotas y pagos, persistencia PostgreSQL y panel administrativo.", stack: ["Python", "FastAPI", "PostgreSQL", "JWT"], repoUrl: "https://github.com/LiderSalinas", repoLabel: "Perfil GitHub", estado: "En evolución", codigo: "GY", tono: "violet" },
] as const;

export const skillGroups = [
  { titulo: "Backend", descripcion: "APIs, reglas de negocio y seguridad", items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "JWT / OAuth2"] },
  { titulo: "Datos / Infraestructura", descripcion: "Persistencia y entornos reproducibles", items: ["PostgreSQL", "SQLAlchemy", "Prisma", "Alembic", "Docker", "Git / GitHub"] },
  { titulo: "Frontend / Móvil", descripcion: "Interfaces web y experiencias multiplataforma", items: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Dart"] },
] as const;

export const experience = [{ periodo: "2025", rol: "Desarrollo Full Stack por proyecto", organizacion: "Talent Transfer LLC", contexto: "ERP de asociaciones", descripcion: "Colaboré en módulos operativos de pagos, pedidos en proceso, cuotas, inventario, movimientos de stock y reportes.", stack: "Next.js · Prisma · PostgreSQL" }] as const;
export const education = ["Analista de Sistemas", "Desarrollo Web Full Stack · UCSA", "Bootcamp de Python"] as const;
