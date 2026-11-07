# Portafolio Profesional Senior - Manuel Juárez Angel

Landing page moderna, tecnológica, elegante y de nivel profesional desarrollada para **Manuel Juárez Angel** (Desarrollador Full Stack & Mobile Senior). Inspirada en las mejores prácticas de diseño de productos SaaS y portafolios de ingenieros senior.

## 🚀 Tecnologías Utilizadas

- **Astro 5+ / 7**: Generación estática de alto rendimiento, Content Collections y View Transitions.
- **TypeScript**: Tipado estático y robustez en todo el código.
- **Tailwind CSS v4**: Utility-first CSS con variables dinámicas de tema.
- **React**: Componentes interactivos reactivos (Navbar responsiva, selector de temas, filtro de tecnologías, timeline de experiencia y formulario de contacto).
- **Lucide Icons**: Iconografía vectorial minimalista y ligera.
- **Vercel & Cloudflare Pages**: Compatible con despliegue estático global de cero configuración.

---

## 🎨 Sistema de Temas Visuales

El sistema de temas soporta 3 opciones configurables desde el selector de la barra de navegación:
1. **Oscuro (Dark)**: Tema predeterminado al cargar por primera vez.
2. **Claro (Light)**: Tema limpio con superficies blancas y alto contraste.
3. **Sistema (System)**: Sincronización automática con las preferencias de `prefers-color-scheme`.

Evita el parpadeo (FOUC) mediante un script síncrono en `<head>` y persiste la elección en `localStorage` con la llave `mj-portfolio-theme`.

---

## 📁 Estructura del Proyecto

```text
portafolio-3.0/
├── public/
│   ├── cv-manuel-juarez.pdf       # Archivo de Currículum en PDF
│   ├── favicon.svg                # Monograma emblemático de favicon
│   ├── robots.txt                 # Configuración de rastreo SEO
│   ├── sitemap.xml                # Mapa del sitio estructurado
│   └── images/
│       └── projects/              # Imágenes y diagramas SVG de proyectos
├── src/
│   ├── components/
│   │   ├── react/                 # Componentes interactivos de React
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ExperienceTimeline.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── TechTabs.tsx
│   │   │   └── ThemeSelector.tsx
│   │   ├── About.astro
│   │   ├── AvailabilityBadge.astro
│   │   ├── Contact.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── HeroVisual.astro
│   │   ├── ProfessionalStats.astro
│   │   ├── ProjectCard.astro
│   │   ├── SectionHeading.astro
│   │   ├── Skills.astro
│   │   └── WorkProcess.astro
│   ├── content/
│   │   └── projects/              # Astro Content Collections (Markdown)
│   │       ├── aplicacion-auditorias.md
│   │       ├── orbita-saas.md
│   │       └── sistema-reclamaciones-kpi.md
│   ├── content.config.ts          # Esquema Zod de validación de proyectos
│   ├── data/
│   │   └── portfolioData.ts       # Datos personales, experiencia, tecnologías
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout principal HTML5 + SEO + Theme Script
│   ├── pages/
│   │   ├── 404.astro              # Página 404 personalizada
│   │   ├── index.astro            # Landing page principal
│   │   └── proyectos/
│   │       └── [slug].astro       # Páginas dinámicas de caso de estudio
│   └── styles/
│       └── global.css             # Design tokens y utilidades Tailwind
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🛠️ Instalación y Ejecución Local

### Requisitos Previos

- Node.js `v18+` o `v22+`
- npm `v10+`

### Pasos

1. Clonar o descargar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador en `http://localhost:4321`.

---

## 📦 Compilación y Producción

Para validar tipos e idioma con TypeScript y generar el build optimizado de producción:

```bash
# Validar código TypeScript y Astro
npx astro check

# Compilar el bundle estático de producción
npm run build

# Previsualizar el sitio compilado localmente
npm run preview
```

---

## ✏️ Guía de Personalización

### 1. Modificar Información Personal
Edita el archivo [`src/data/portfolioData.ts`](file:///Users/Usuario/Documents/Proyectos/portafolio%203.0/src/data/portfolioData.ts). Allí puedes cambiar:
- Nombre, cargo, ubicación, correo y teléfono.
- Enlaces de LinkedIn y GitHub.
- Puntos de experiencia laboral.
- Tarjetas de "Sobre mí", estadísticas e indicadores.

### 2. Agregar o Modificar Proyectos
Los proyectos se gestionan mediante **Astro Content Collections**.
Para agregar uno nuevo:
1. Crea un nuevo archivo `.md` en [`src/content/projects/`](file:///Users/Usuario/Documents/Proyectos/portafolio%203.0/src/content/projects/).
2. Completa la cabecera YAML respetando el esquema:
   ```yaml
   ---
   title: "Nombre del Proyecto"
   summary: "Resumen breve para la tarjeta"
   description: "Descripción detallada para el caso de estudio"
   image: "/images/projects/mi-proyecto-cover.svg"
   category: "Categoría"
   problem: "Problema resuelto"
   solution: "Solución tecnológica"
   myRole: "Rol en el desarrollo"
   technologies: ["React", "Laravel", "MySQL"]
   technicalChallenges: ["Desafío 1", "Desafío 2"]
   results: ["Resultado 1", "Resultado 2"]
   status: "En producción"
   isConfidential: false
   order: 4
   featured: true
   ---
   ```

### 3. Sustituir Imágenes de Proyectos
Coloca tus capturas o ilustraciones en `public/images/projects/` y actualiza la propiedad `image` y `gallery` en el archivo markdown correspondiente.

### 4. Actualizar el Currículum PDF
Coloca tu archivo de currículum actualizado en `public/cv-manuel-juarez.pdf`. Todos los botones con el atributo `download` apuntan directamente a esta ruta.

### 5. Personalizar Enlace de GitHub
En `src/data/portfolioData.ts`, modifica el atributo `github`:
```ts
github: "https://github.com/tu-usuario"
```

---

## ☁️ Despliegue

### Despliegue en Vercel
1. Conecta tu repositorio de GitHub a Vercel.
2. Vercel detectará Astro automáticamente.
3. Comando de build: `npm run build`.
4. Directorio de salida: `dist`.

### Despliegue en Cloudflare Pages
1. Ve al panel de Cloudflare Pages > Create a project.
2. Conecta tu repositorio.
3. Framework preset: **Astro**.
4. Build command: `npm run build`.
5. Build output directory: `dist`.
