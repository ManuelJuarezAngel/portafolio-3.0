export interface PersonalInfo {
  name: string;
  role: string;
  mainMessage: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  availability: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface AboutCard {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
}

export interface TechItem {
  name: string;
  category: 'Lenguajes' | 'Backend' | 'Frontend' | 'Mobile' | 'Bases de datos' | 'Herramientas y metodología' | 'Diseño y prototipado' | 'Seguridad';
  icon: string;
  tooltip?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  status?: string;
  isCertification?: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "Manuel Juárez Angel",
  role: "Desarrollador Full Stack Web & Mobile",
  mainMessage: "Construyo plataformas empresariales, apps móviles y productos SaaS.",
  description: "Soy desarrollador Full Stack Web & Mobile con 5 años de experiencia. Construyo soluciones completas: backend, bases de datos, interfaces web, aplicaciones móviles y productos SaaS.",
  location: "Naucalpan, Estado de México, México",
  email: "manuelangel010625@gmail.com",
  phone: "56 2800 2149",
  linkedin: "https://linkedin.com/in/manuel-juarez",
  github: "https://github.com/manueljuarez", // Configurable
  cvUrl: "/cv-manuel-juarez.pdf",
  availability: "Disponible para nuevas oportunidades y proyectos",
};

export const stats: Stat[] = [
  { value: "5 Años", label: "Experiencia profesional", description: "En desarrollo web, móvil y productos SaaS" },
  { value: "Full Stack", label: "Web & Mobile Apps", description: "Soluciones punta a punta en producción" },
  { value: "iOS & Android", label: "App Store & Google Play", description: "Publicación y despliegue exitoso en tiendas" },
  { value: "Real-Time", label: "SaaS & WebSockets", description: "Arquitecturas asíncronas y chatbots" },
  { value: "13", label: "Sistemas migrados", description: "De PHP 5.3 y 7.3 a PHP 8.4 y 8.5" },
  { value: "PHP 8.5", label: "Modernización", description: "Con bases de datos actualizadas a MySQL 8.4" },
];

export const aboutCards: AboutCard[] = [
  {
    title: "Backend & Arquitectura",
    icon: "Server",
    description: "Construyo y mantengo plataformas empresariales con Laravel, CodeIgniter y MVC propio. Integro APIs REST y SOAP con bases de datos MySQL y PostgreSQL.",
    technologies: ["Laravel", "MVC propio", "CodeIgniter", "MySQL", "PostgreSQL", "APIs REST", "SOAP"],
  },
  {
    title: "Frontend & UI/UX",
    icon: "Layout",
    description: "Creo interfaces responsivas con React, Vue.js y Tailwind CSS. También desarrollo portafolios y landing pages con Astro y preparo prototipos en Figma y Adobe XD.",
    technologies: ["React", "Vue.js", "Astro", "Tailwind CSS", "TypeScript", "Figma", "Adobe XD"],
  },
  {
    title: "Aplicaciones Móviles",
    icon: "Smartphone",
    description: "Desarrollo apps híbridas con Ionic, Vue 3 y Capacitor. Implemento operación offline, captura de evidencias, generación de PDF y publicación en App Store y Google Play.",
    technologies: ["Ionic", "Vue 3", "Capacitor", "Offline", "PDF", "App Store", "Google Play"],
  },
  {
    title: "SaaS & Tiempo Real",
    icon: "Zap",
    description: "Creación de plataformas SaaS multitenant, sistemas de chat con WebSockets (Laravel Reverb), chatbots para WhatsApp y automatización asíncrona de procesos.",
    technologies: ["WebSockets", "Laravel Reverb", "WhatsApp API", "Cron Jobs", "Docker"],
  },
];

export const technologies: TechItem[] = [
  // Lenguajes
  { name: "PHP", category: "Lenguajes", icon: "Code2", tooltip: "Lenguaje principal para backend empresarial y Laravel" },
  { name: "JavaScript ES6+", category: "Lenguajes", icon: "FileCode", tooltip: "Desarrollo moderno frontend y asíncrono" },
  { name: "TypeScript", category: "Lenguajes", icon: "FileJson", tooltip: "Tipado estático seguro para proyectos escalables" },
  { name: "HTML5", category: "Lenguajes", icon: "Globe", tooltip: "Estructuración semántica y accesibilidad web" },
  { name: "CSS3", category: "Lenguajes", icon: "Palette", tooltip: "Estilos modernos, Flexbox, Grid y animaciones" },
  { name: "SQL", category: "Lenguajes", icon: "Database", tooltip: "Consultas complejas, procedimientos y optimización" },

  // Backend
  { name: "Laravel", category: "Backend", icon: "Server", tooltip: "Framework PHP insignia para arquitecturas backend" },
  { name: "CodeIgniter", category: "Backend", icon: "Cpu", tooltip: "Desarrollo ágil de aplicaciones PHP ligeras" },
  { name: "PHP MVC", category: "Backend", icon: "Layers", tooltip: "Patrón arquitectónico limpio y desacoplado" },
  { name: "APIs REST", category: "Backend", icon: "Send", tooltip: "Servicios web escalables e integración de datos" },
  { name: "SOAP", category: "Backend", icon: "Workflow", tooltip: "Integración con servicios corporativos heredados" },
  { name: "JWT", category: "Backend", icon: "KeyRound", tooltip: "Autenticación segura basada en tokens stateless" },
  { name: "OAuth2", category: "Backend", icon: "ShieldCheck", tooltip: "Protocolo de autorización estándar para APIs" },
  { name: "WebSockets", category: "Backend", icon: "Radio", tooltip: "Comunicación bidireccional en tiempo real" },

  // Frontend
  { name: "React", category: "Frontend", icon: "Component", tooltip: "Librería reactiva para SPAs y dashboards" },
  { name: "Vue.js", category: "Frontend", icon: "Box", tooltip: "Framework progresivo para UIs dinámicas" },
  { name: "Astro", category: "Frontend", icon: "Rocket", tooltip: "Portafolios y landing pages rápidas y responsivas" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Sparkles", tooltip: "Framework de CSS utility-first para diseño rápido" },
  { name: "DaisyUI", category: "Frontend", icon: "Feather", tooltip: "Componentes UI para Tailwind CSS" },
  { name: "Bootstrap", category: "Frontend", icon: "LayoutGrid", tooltip: "Maquetación responsiva estándar" },
  { name: "jQuery", category: "Frontend", icon: "Terminal", tooltip: "Manipulación DOM en proyectos legacy" },
  { name: "Sass", category: "Frontend", icon: "Paintbrush", tooltip: "Preprocesador CSS con variables y mixins" },

  // Mobile
  { name: "Ionic", category: "Mobile", icon: "Smartphone", tooltip: "Framework principal para apps híbridas multiplataforma" },
  { name: "React Native", category: "Mobile", icon: "Tablet", tooltip: "Desarrollo móvil nativo con ecosistema React" },
  { name: "Capacitor", category: "Mobile", icon: "HardDrive", tooltip: "Puente nativo para acceder a cámara, GPS y storage" },
  { name: "App Store", category: "Mobile", icon: "Apple", tooltip: "Configuración y publicación en iOS Apple Store" },
  { name: "Google Play", category: "Mobile", icon: "Play", tooltip: "Configuración y distribución en Google Play Store" },

  // Bases de datos
  { name: "MySQL", category: "Bases de datos", icon: "Database", tooltip: "Motor RDBMS principal con optimización de índices" },
  { name: "PostgreSQL", category: "Bases de datos", icon: "Database", tooltip: "Bases de datos relacionales para plataformas empresariales" },
  { name: "SQL Server", category: "Bases de datos", icon: "HardDriveDownload", tooltip: "Gestión de bases de datos empresariales Microsoft" },
  { name: "Optimización de consultas", category: "Bases de datos", icon: "TrendingUp", tooltip: "Tuning de queries y reducción del 50% de latencia" },

  // Herramientas y metodología
  { name: "Git", category: "Herramientas y metodología", icon: "GitBranch", tooltip: "Control de versiones distribuido y branching" },
  { name: "GitHub", category: "Herramientas y metodología", icon: "Github", tooltip: "Colaboración de código, PRs y CI/CD" },
  { name: "GitHub Actions", category: "Herramientas y metodología", icon: "Workflow", tooltip: "Automatización de integraciones y despliegues" },
  { name: "AWS S3", category: "Herramientas y metodología", icon: "Cloud", tooltip: "Almacenamiento de archivos y evidencias en la nube" },
  { name: "Docker", category: "Herramientas y metodología", icon: "Container", tooltip: "Contenedores para entornos idénticos de dev/prod" },
  { name: "Jira", category: "Herramientas y metodología", icon: "CheckSquare", tooltip: "Gestión ágil de proyectos y tickets en Scrum" },
  { name: "Trello", category: "Herramientas y metodología", icon: "Kanban", tooltip: "Organización Kanban de tareas" },
  { name: "Scrum", category: "Herramientas y metodología", icon: "Users", tooltip: "Metodología ágil con sprints y dailies" },

  // Diseño y prototipado
  { name: "Figma", category: "Diseño y prototipado", icon: "Figma", tooltip: "Experiencia creando wireframes, prototipos e interfaces" },
  { name: "Adobe XD", category: "Diseño y prototipado", icon: "PenTool", tooltip: "Experiencia creando prototipos y flujos de interfaz" },

  // Seguridad
  { name: "Prevención SQL Injection", category: "Seguridad", icon: "ShieldAlert", tooltip: "Consultas preparadas y sanitización estricta" },
  { name: "Prevención XSS", category: "Seguridad", icon: "Lock", tooltip: "Escape de salida y políticas CSP rigurosas" },
  { name: "Autenticación por Tokens", category: "Seguridad", icon: "Key", tooltip: "Sesiones seguras con revocación y expiración" },
  { name: "Sanitización y Cifrado", category: "Seguridad", icon: "FileSpreadsheet", tooltip: "Protección de datos sensibles y hashes bcrypt" },
];

export const experiences: ExperienceItem[] = [
  {
    id: "arguilea",
    company: "Arguilea Global Solutions",
    role: "Desarrollador Full Stack & Mobile Senior",
    period: "Octubre de 2022 - Actualidad",
    isCurrent: true,
    highlights: [
      "Migré alrededor de 13 sistemas de PHP 5.3 y 7.3 a PHP 8.4 y 8.5. También actualicé sus bases de datos a MySQL 8.4.",
      "Desarrollo y doy soporte a plataformas empresariales para KFC, Unilever, VDC, RBI, BIMBO y ALSEA.",
      "Desarrollé una app móvil de auditorías con Ionic y Vue 3. Implementé operación offline, captura de evidencias, generación de PDF y cálculo de puntuación. La publiqué en App Store y Google Play.",
      "Construyo y mantengo soluciones con Laravel, CodeIgniter y MVC propio. Integro APIs REST y SOAP con MySQL y PostgreSQL.",
      "Gestiono archivos y evidencias en AWS S3. Automatizo integraciones y despliegues con GitHub Actions.",
    ],
    skills: ["PHP 8.4/8.5", "Laravel", "CodeIgniter", "MVC propio", "Ionic", "Vue 3", "MySQL 8.4", "PostgreSQL", "REST", "SOAP", "AWS S3", "GitHub Actions"],
  },
  {
    id: "freelance",
    company: "Freelance y proyectos independientes",
    role: "Desarrollador de Software y Consultor SEO",
    period: "Enero de 2023 - Actualidad",
    isCurrent: true,
    highlights: [
      "Desarrollé Órbita, un SaaS que centraliza la gestión de negocios y automatiza citas y conversaciones por WhatsApp.",
      "Construí el backend con Laravel y la interfaz con React, Tailwind CSS y DaisyUI. Integré Laravel Reverb para actualizaciones en tiempo real.",
      "Creo portafolios y landing pages con Astro. Diseño interfaces responsivas y organizo el contenido para presentar servicios, experiencia y proyectos.",
      "Desarrollé la landing de SERVIRAM con Astro, TypeScript, Tailwind CSS y DaisyUI. Organicé servicios, cobertura, galería, testimonios y contacto directo por WhatsApp.",
      "Desarrollé la landing de Consultoría Omega con React, Tailwind CSS y DaisyUI. Organicé servicios de Protección Civil, normativas STPS, dictámenes y capacitación, con contacto por WhatsApp y estructura SEO.",
      "Preparo wireframes y prototipos con Figma y Adobe XD antes de llevarlos a componentes web.",
    ],
    skills: ["Astro", "Laravel", "React", "Tailwind CSS", "DaisyUI", "WebSockets", "WhatsApp API", "Figma", "Adobe XD"],
  },
  {
    id: "emsi",
    company: "EMSI Profesionistas y Asociados",
    role: "Desarrollador Web Full Stack",
    period: "Agosto de 2021 - Septiembre de 2022",
    highlights: [
      "Desarrollo de módulo para procesamiento, validación y extracción estructurada de datos a partir de archivos XML de viáticos.",
      "Reestructuración de sistema web para administración de contratos y estimaciones de PEMEX con reportes dinámicos en PDF.",
      "Creación de gráficas avanzadas de avances físicos y financieros, además de exportaciones masivas de información a Excel.",
      "Resolución de incidentes críticos en frontend y backend utilizando PHP MVC, JavaScript y entorno contenerizado con Docker.",
    ],
    skills: ["PHP MVC", "JavaScript", "XML Parsing", "PDF Engine", "Docker", "MySQL", "Bootstrap"],
  },
];

export const workProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Análisis y planificación",
    description: "Reunión de requerimientos, definición de objetivos del negocio, estructuración de arquitectura de datos y alineación tecnológica.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Diseño de arquitectura y UI/UX",
    description: "Creación de prototipos funcionales en Figma, diseño de esquema de base de datos relacional y definición de endpoints de API.",
    icon: "LayoutTemplate",
  },
  {
    number: "03",
    title: "Desarrollo e integración",
    description: "Construcción modular del backend y frontend/móvil, pruebas de integración, WebSockets en tiempo real y seguridad reforzada.",
    icon: "Code",
  },
  {
    number: "04",
    title: "Pruebas, optimización y publicación",
    description: "Auditoría de rendimiento, tuning de consultas SQL, pruebas en dispositivos reales y despliegue exitoso en producción o tiendas.",
    icon: "CheckCircle2",
  },
];

export const education: EducationItem[] = [
  {
    title: "Certificación en Desarrollo de Aplicaciones Móviles",
    institution: "Universidad del Valle de México (UVM)",
    period: "2025",
    isCertification: true,
  },
  {
    title: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad Hispano Americana del Bajío",
    period: "2021 – 2024",
    status: "Título en trámite / proceso",
  },
];
