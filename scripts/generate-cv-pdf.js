import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';

async function createCvPdf() {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([612, 792]); // Letter size
  const { width, height } = page.getSize();
  
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = height - 50;

  // Title
  page.drawText('MANUEL JUÁREZ ANGEL', {
    x: 50,
    y: y,
    size: 20,
    font: fontBold,
    color: rgb(0.06, 0.09, 0.16),
  });

  y -= 22;
  page.drawText('Desarrollador Full Stack Web & Mobile', {
    x: 50,
    y: y,
    size: 13,
    font: fontBold,
    color: rgb(0.14, 0.38, 0.92),
  });

  y -= 18;
  page.drawText('Naucalpan, Estado de México | 56 2800 2149 | manuelangel010625@gmail.com | linkedin.com/in/manuel-juarez', {
    x: 50,
    y: y,
    size: 9,
    font: fontRegular,
    color: rgb(0.3, 0.35, 0.45),
  });

  y -= 15;
  page.drawLine({
    start: { x: 50, y: y },
    end: { x: width - 50, y: y },
    thickness: 1,
    color: rgb(0.8, 0.85, 0.9),
  });

  y -= 20;

  // Section helper
  const addSectionHeader = (title) => {
    if (y < 80) {
      page = pdfDoc.addPage([612, 792]);
      y = height - 50;
    }
    page.drawText(title, {
      x: 50,
      y: y,
      size: 11,
      font: fontBold,
      color: rgb(0.14, 0.38, 0.92),
    });
    y -= 14;
    page.drawLine({
      start: { x: 50, y: y },
      end: { x: width - 50, y: y },
      thickness: 0.5,
      color: rgb(0.8, 0.85, 0.9),
    });
    y -= 15;
  };

  // Profile
  addSectionHeader('PERFIL PROFESIONAL');
  const profileLines = [
    'Soy desarrollador Full Stack Web & Mobile con 5 años de experiencia en plataformas empresariales,',
    'aplicaciones móviles y productos SaaS. Construyo soluciones con PHP, Laravel, CodeIgniter, React, Vue, Astro',
    'e Ionic. Trabajo con MySQL y PostgreSQL, integro APIs REST y SOAP, y automatizo despliegues con GitHub Actions.',
    'También publico aplicaciones en App Store y Google Play y preparo prototipos con Figma y Adobe XD.',
  ];

  profileLines.forEach((line) => {
    page.drawText(line, {
      x: 50,
      y: y,
      size: 9,
      font: fontRegular,
      color: rgb(0.15, 0.2, 0.25),
    });
    y -= 12;
  });

  y -= 10;

  // Skills
  addSectionHeader('HABILIDADES TÉCNICAS');
  const skills = [
    ['Lenguajes:', 'PHP, JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL.'],
    ['Frameworks:', 'Laravel, React, Vue 3, Astro, Ionic, CodeIgniter, Tailwind CSS, DaisyUI.'],
    ['Bases de Datos:', 'MySQL, PostgreSQL, SQL Server.'],
    ['Seguridad y APIs:', 'JWT, OAuth2, RESTful APIs, SOAP, WebSockets, Prevención SQLi y XSS, Cifrado.'],
    ['Herramientas:', 'Git, GitHub Actions, Docker, AWS S3, Scrum, Jira, App Store y Google Play.'],
    ['Diseño:', 'Figma y Adobe XD.'],
  ];

  skills.forEach(([label, val]) => {
    page.drawText(`•  ${label} `, { x: 50, y: y, size: 8.5, font: fontBold, color: rgb(0.1, 0.15, 0.2) });
    page.drawText(val, { x: 130, y: y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
    y -= 12;
  });

  y -= 10;

  // Experience
  addSectionHeader('EXPERIENCIA LABORAL');

  // Job 1
  page.drawText('ARGUILEA GLOBAL SOLUTIONS', { x: 50, y: y, size: 9.5, font: fontBold, color: rgb(0.06, 0.09, 0.16) });
  page.drawText(' |  Desarrollador Full Stack & Mobile Senior', { x: 210, y: y, size: 9, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
  page.drawText('Oct 2022 – Actualidad', { x: 470, y: y, size: 8.5, font: fontBold, color: rgb(0.3, 0.35, 0.45) });
  y -= 14;

  const job1Bullets = [
    'Migré alrededor de 13 sistemas de PHP 5.3 y 7.3 a PHP 8.4 y 8.5, y sus bases de datos a MySQL 8.4.',
    'Desarrollo y doy soporte a plataformas para KFC, Unilever, VDC, RBI, BIMBO y ALSEA.',
    'Desarrollé una app de auditorías con Ionic y Vue 3: offline, evidencias, puntuación y reportes PDF.',
    'Publiqué la app de auditorías en App Store y Google Play.',
    'Trabajo con Laravel, CodeIgniter, MVC propio, APIs REST/SOAP, MySQL y PostgreSQL.',
    'Gestiono archivos en AWS S3 y automatizo integraciones y despliegues con GitHub Actions.',
  ];

  job1Bullets.forEach((bullet) => {
    page.drawText('•  ' + bullet, { x: 60, y: y, size: 8, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
    y -= 11;
  });

  y -= 8;

  // Job 2
  page.drawText('FREELANCE Y PROYECTOS INDEPENDIENTES', { x: 50, y: y, size: 9.5, font: fontBold, color: rgb(0.06, 0.09, 0.16) });
  page.drawText(' |  Desarrollador & Consultor SEO', { x: 265, y: y, size: 9, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
  page.drawText('Ene 2023 – Actualidad', { x: 470, y: y, size: 8.5, font: fontBold, color: rgb(0.3, 0.35, 0.45) });
  y -= 14;

  const job2Bullets = [
    'Desarrollé Órbita, un SaaS que automatiza citas y conversaciones por WhatsApp.',
    'Construí el backend con Laravel y la interfaz con React, Tailwind CSS y DaisyUI.',
    'Creo portafolios y landing pages con Astro; preparo prototipos con Figma y Adobe XD.',
  ];

  job2Bullets.forEach((bullet) => {
    page.drawText('•  ' + bullet, { x: 60, y: y, size: 8, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
    y -= 11;
  });

  y -= 8;

  // Job 3
  page.drawText('EMSI PROFESIONISTAS Y ASOCIADOS', { x: 50, y: y, size: 9.5, font: fontBold, color: rgb(0.06, 0.09, 0.16) });
  page.drawText(' |  Desarrollador Web Full Stack', { x: 235, y: y, size: 9, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
  page.drawText('Ago 2021 – Sep 2022', { x: 470, y: y, size: 8.5, font: fontBold, color: rgb(0.3, 0.35, 0.45) });
  y -= 14;

  const job3Bullets = [
    'Módulo para procesamiento automático de facturas XML de viáticos y cálculo de reembolsos.',
    'Reestructuración de sistema web para contratos PEMEX con reportes PDF y gráficas de avances.',
    'Mantenimiento y resolución de incidentes con PHP, MVC, JS y Docker.',
  ];

  job3Bullets.forEach((bullet) => {
    page.drawText('•  ' + bullet, { x: 60, y: y, size: 8, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
    y -= 11;
  });

  y -= 10;

  // Education
  addSectionHeader('EDUCACIÓN Y CERTIFICACIONES');
  page.drawText('•  Certificación en Desarrollo de Aplicaciones Móviles', { x: 50, y: y, size: 8.5, font: fontBold, color: rgb(0.1, 0.15, 0.2) });
  page.drawText('Universidad del Valle de México (UVM), 2025', { x: 280, y: y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.3, 0.35) });
  y -= 14;

  page.drawText('•  Ingeniería en Sistemas Computacionales', { x: 50, y: y, size: 8.5, font: fontBold, color: rgb(0.1, 0.15, 0.2) });
  page.drawText('Universidad Hispano Americana del Bajío, 2021 – 2024 (Título en trámite)', { x: 240, y: y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.3, 0.35) });

  fs.mkdirSync('public', { recursive: true });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/cv-manuel-juarez.pdf', pdfBytes);
  console.log('CV PDF generated successfully at public/cv-manuel-juarez.pdf');
}

createCvPdf();
