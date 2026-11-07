import fs from 'fs';
import path from 'path';

const dirs = [
  'public/images/projects',
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

const svgTemplates = {
  'orbita-saas-cover.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b0f19"/>
        <stop offset="50%" stop-color="#111827"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="50%" stop-color="#8b5cf6"/>
        <stop offset="100%" stop-color="#06b6d4"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="200" cy="150" r="300" fill="#3b82f6" opacity="0.15" filter="blur(80px)"/>
    <circle cx="1000" cy="500" r="250" fill="#8b5cf6" opacity="0.15" filter="blur(80px)"/>
    
    <!-- Grid -->
    <path d="M0 100 H1200 M0 200 H1200 M0 300 H1200 M0 400 H1200 M0 500 H1200 M200 0 V630 M400 0 V630 M600 0 V630 M800 0 V630 M1000 0 V630" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
    
    <!-- UI Container -->
    <rect x="150" y="90" width="900" height="450" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5"/>
    <rect x="150" y="90" width="900" height="40" rx="16" fill="#0f172a"/>
    <circle cx="180" cy="110" r="6" fill="#ef4444"/>
    <circle cx="200" cy="110" r="6" fill="#eab308"/>
    <circle cx="220" cy="110" r="6" fill="#22c55e"/>
    <text x="600" y="115" fill="#94a3b8" font-family="sans-serif" font-size="14" text-anchor="middle">app.maviklabs.cloud • WhatsApp SaaS Engine</text>

    <!-- Sidebar -->
    <rect x="170" y="150" width="220" height="370" rx="10" fill="#1e293b" fill-opacity="0.5" stroke="#ffffff" stroke-opacity="0.05"/>
    <rect x="190" y="175" width="180" height="12" rx="4" fill="#38bdf8" opacity="0.8"/>
    <rect x="190" y="205" width="140" height="10" rx="3" fill="#64748b"/>
    <rect x="190" y="230" width="160" height="10" rx="3" fill="#64748b"/>
    <rect x="190" y="255" width="120" height="10" rx="3" fill="#64748b"/>

    <!-- Main Content Panel -->
    <rect x="410" y="150" width="620" height="240" rx="10" fill="#0f172a" fill-opacity="0.7" stroke="#ffffff" stroke-opacity="0.05"/>
    <text x="430" y="190" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="20">Órbita WhatsApp Bot &amp; SaaS Engine</text>
    <text x="430" y="220" fill="#94a3b8" font-family="sans-serif" font-size="14">Sincronización en Tiempo Real • WebSockets • Multi-tenant</text>

    <!-- Stats Cards -->
    <rect x="430" y="250" width="180" height="110" rx="8" fill="#1e293b" stroke="url(#accent)" stroke-width="1.5"/>
    <text x="450" y="280" fill="#94a3b8" font-family="sans-serif" font-size="12">Citas Semanales</text>
    <text x="450" y="315" fill="#38bdf8" font-family="sans-serif" font-weight="bold" font-size="28">Citas</text>
    <text x="450" y="340" fill="#22c55e" font-family="sans-serif" font-size="11">Agendamiento automatizado</text>

    <rect x="630" y="250" width="180" height="110" rx="8" fill="#1e293b" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="650" y="280" fill="#94a3b8" font-family="sans-serif" font-size="12">Tiempo Respuesta</text>
    <text x="650" y="315" fill="#a78bfa" font-family="sans-serif" font-weight="bold" font-size="28">&lt; 3 seg</text>
    <text x="650" y="340" fill="#22c55e" font-family="sans-serif" font-size="11">WhatsApp API</text>

    <rect x="830" y="250" width="180" height="110" rx="8" fill="#1e293b" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="850" y="280" fill="#94a3b8" font-family="sans-serif" font-size="12">Retención</text>
    <text x="850" y="315" fill="#34d399" font-family="sans-serif" font-weight="bold" font-size="28">Tiempo real</text>
    <text x="850" y="340" fill="#94a3b8" font-family="sans-serif" font-size="11">Conversión alta</text>

    <!-- Bottom Code / Flow Box -->
    <rect x="410" y="400" width="620" height="120" rx="10" fill="#020617" stroke="#38bdf8" stroke-opacity="0.3"/>
    <text x="430" y="430" fill="#22c55e" font-family="monospace" font-size="13">const bot = new WhatsAppEngine({ tenantId: 'mavik-labs' });</text>
    <text x="430" y="455" fill="#38bdf8" font-family="monospace" font-size="13">await bot.syncWebSockets({ realTime: true, reverb: true });</text>
    <text x="430" y="480" fill="#f43f5e" font-family="monospace" font-size="13">// Status: Active • 24/7 Automated Appointments</text>

    <rect x="150" y="90" width="900" height="4" fill="url(#accent)"/>
  </svg>`,

  'orbita-saas-chat.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <rect width="1200" height="630" fill="#0b0f19"/>
    <rect x="200" y="80" width="800" height="470" rx="16" fill="#111827" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.3"/>
    <text x="600" y="140" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="24" text-anchor="middle">Módulo de Chat &amp; Turnos en Tiempo Real</text>
    <rect x="250" y="180" width="400" height="70" rx="12" fill="#1e293b"/>
    <text x="270" y="210" fill="#94a3b8" font-family="sans-serif" font-size="14">Cliente (WhatsApp):</text>
    <text x="270" y="232" fill="#38bdf8" font-family="sans-serif" font-size="14">"Hola, me gustaría agendar una cita para mañana a las 4:00 PM."</text>

    <rect x="550" y="270" width="400" height="90" rx="12" fill="#0369a1"/>
    <text x="570" y="300" fill="#e0f2fe" font-family="sans-serif" font-size="14">Bot Órbita (Laravel Reverb):</text>
    <text x="570" y="322" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="14">"¡Claro! He reservado tu turno para las 4:00 PM. Te enviamos confirmación."</text>

    <rect x="250" y="380" width="700" height="130" rx="12" fill="#0f172a" stroke="#8b5cf6" stroke-width="1"/>
    <text x="280" y="420" fill="#a78bfa" font-family="sans-serif" font-weight="bold" font-size="16">Panel del Negocio • Sincronización WebSockets activa</text>
    <text x="280" y="450" fill="#94a3b8" font-family="sans-serif" font-size="14">✓ Sucursal Principal • Cita registrada en base de datos MySQL • Notificación push enviada.</text>
  </svg>`,

  'orbita-saas-dashboard.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <rect width="1200" height="630" fill="#0b0f19"/>
    <rect x="100" y="60" width="1000" height="510" rx="16" fill="#111827" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="140" y="110" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="22">Dashboard Analítico &amp; Gestión Multitenant</text>
    
    <rect x="140" y="150" width="280" height="380" rx="10" fill="#1e293b"/>
    <text x="160" y="190" fill="#38bdf8" font-family="sans-serif" font-weight="bold" font-size="16">Configuración del Bot</text>
    <rect x="160" y="210" width="240" height="8" rx="4" fill="#64748b"/>
    <rect x="160" y="230" width="180" height="8" rx="4" fill="#64748b"/>
    <rect x="160" y="250" width="210" height="8" rx="4" fill="#64748b"/>

    <rect x="440" y="150" width="620" height="380" rx="10" fill="#0f172a"/>
    <polyline points="460,450 520,380 580,410 640,320 700,350 760,260 820,290 880,210 940,240 1000,180" fill="none" stroke="#38bdf8" stroke-width="4"/>
    <circle cx="1000" cy="180" r="6" fill="#38bdf8"/>
    <text x="460" y="190" fill="#94a3b8" font-family="sans-serif" font-size="14">Curva de Conversión de Citas Agendadas</text>
  </svg>`,

  'audit-mobile-cover.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#022c22"/>
        <stop offset="50%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#064e3b"/>
      </linearGradient>
      <linearGradient id="accent2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="50%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#3b82f6"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg2)"/>
    <circle cx="300" cy="200" r="280" fill="#10b981" opacity="0.15" filter="blur(80px)"/>
    
    <!-- Mobile Devices Mockup -->
    <rect x="420" y="70" width="360" height="490" rx="36" fill="#090d16" stroke="url(#accent2)" stroke-width="3"/>
    <rect x="440" y="95" width="320" height="440" rx="20" fill="#111827"/>
    <rect x="550" y="105" width="100" height="16" rx="8" fill="#1e293b"/>
    
    <!-- App Screen UI -->
    <rect x="460" y="140" width="280" height="50" rx="10" fill="#065f46"/>
    <text x="480" y="170" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="16">Auditoría en Campo • Operación Offline</text>

    <!-- Checklist items -->
    <rect x="460" y="210" width="280" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1"/>
    <circle cx="485" cy="235" r="10" fill="#10b981"/>
    <path d="M480 235 L484 239 L492 231" stroke="#ffffff" stroke-width="2" fill="none"/>
    <text x="505" y="240" fill="#f8fafc" font-family="sans-serif" font-size="13">Control de Seguridad e Higiene</text>

    <rect x="460" y="270" width="280" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1"/>
    <circle cx="485" cy="295" r="10" fill="#10b981"/>
    <path d="M480 295 L484 299 L492 291" stroke="#ffffff" stroke-width="2" fill="none"/>
    <text x="505" y="300" fill="#f8fafc" font-family="sans-serif" font-size="13">Verificación de Evidencia Fotográfica</text>

    <rect x="460" y="330" width="280" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="485" cy="355" r="10" fill="#38bdf8"/>
    <text x="505" y="360" fill="#f8fafc" font-family="sans-serif" font-size="13">Firma Digital &amp; Reporte PDF</text>

    <!-- Sync Pill -->
    <rect x="460" y="410" width="280" height="40" rx="20" fill="#0284c7"/>
    <text x="600" y="435" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="13" text-anchor="middle">Ionic + Vue 3 + Capacitor • Offline Sync</text>

    <!-- Left & Right Floating Badges -->
    <rect x="150" y="180" width="230" height="100" rx="12" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="170" y="220" fill="#34d399" font-family="sans-serif" font-weight="bold" font-size="22">App Store &amp; Play Store</text>
    <text x="170" y="250" fill="#94a3b8" font-family="sans-serif" font-size="13">Despliegue Multiplataforma</text>

    <rect x="820" y="320" width="230" height="100" rx="12" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="840" y="360" fill="#38bdf8" font-family="sans-serif" font-weight="bold" font-size="22">ES • EN • PT</text>
    <text x="840" y="390" fill="#94a3b8" font-family="sans-serif" font-size="13">Soporte Multilingüe</text>
  </svg>`,

  'audit-mobile-checklist.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <rect width="1200" height="630" fill="#0b0f19"/>
    <rect x="250" y="80" width="700" height="470" rx="16" fill="#111827" stroke="#10b981" stroke-width="1"/>
    <text x="600" y="140" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle">Checklists &amp; Evaluaciones Offline</text>
    <rect x="300" y="180" width="600" height="60" rx="8" fill="#1e293b"/>
    <text x="330" y="215" fill="#f8fafc" font-family="sans-serif" font-size="16">1. Control de Equipos e Infraestructura Planta A</text>
    <rect x="300" y="260" width="600" height="60" rx="8" fill="#1e293b"/>
    <text x="330" y="295" fill="#f8fafc" font-family="sans-serif" font-size="16">2. Captura de Fotos con Marcación en Pantalla</text>
    <rect x="300" y="340" width="600" height="60" rx="8" fill="#1e293b"/>
    <text x="330" y="375" fill="#f8fafc" font-family="sans-serif" font-size="16">3. Persistencia en Almacenamiento Local (IndexedDB)</text>
  </svg>`,

  'audit-mobile-report.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <rect width="1200" height="630" fill="#0b0f19"/>
    <rect x="300" y="60" width="600" height="510" rx="16" fill="#1e293b" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="600" y="120" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle">Generación de Reporte PDF Oficial</text>
    <rect x="350" y="160" width="500" height="350" rx="8" fill="#ffffff"/>
    <text x="380" y="210" fill="#0f172a" font-family="sans-serif" font-weight="bold" font-size="18">Reporte Oficial de Auditoría Operativa</text>
    <text x="380" y="240" fill="#64748b" font-family="sans-serif" font-size="14">Resultado: 98% Conforme • Estatus: Aprobado</text>
  </svg>`,

  'claims-kpi-cover.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <defs>
      <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e1b4b"/>
        <stop offset="50%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#311b92"/>
      </linearGradient>
      <linearGradient id="accent3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8b5cf6"/>
        <stop offset="50%" stop-color="#ec4899"/>
        <stop offset="100%" stop-color="#3b82f6"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg3)"/>
    <circle cx="900" cy="150" r="260" fill="#8b5cf6" opacity="0.15" filter="blur(80px)"/>
    
    <!-- Enterprise Dashboard UI Container -->
    <rect x="120" y="80" width="960" height="470" rx="16" fill="#0f172a" stroke="url(#accent3)" stroke-width="2"/>
    <rect x="120" y="80" width="960" height="40" rx="16" fill="#1e1b4b"/>
    <text x="150" y="105" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="14">Sistema Empresarial de Reclamaciones &amp; KPI (PHP MVC + ApexCharts)</text>

    <!-- Confidential Ribbon -->
    <rect x="880" y="80" width="200" height="40" fill="#dc2626" rx="0"/>
    <text x="980" y="105" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">CONFIDENCIAL</text>

    <!-- Charts area -->
    <rect x="150" y="140" width="430" height="240" rx="10" fill="#1e293b"/>
    <text x="170" y="175" fill="#c084fc" font-family="sans-serif" font-weight="bold" font-size="16">Reclamaciones por Planta de Producción</text>
    
    <!-- Bar charts -->
    <rect x="170" y="320" width="40" height="90" rx="4" fill="#8b5cf6"/>
    <rect x="230" y="270" width="40" height="140" rx="4" fill="#ec4899"/>
    <rect x="290" y="220" width="40" height="190" rx="4" fill="#3b82f6"/>
    <rect x="350" y="300" width="40" height="110" rx="4" fill="#10b981"/>
    <rect x="410" y="250" width="40" height="160" rx="4" fill="#f59e0b"/>

    <!-- Right KPI Cards -->
    <rect x="610" y="140" width="440" height="110" rx="10" fill="#1e293b"/>
    <text x="630" y="175" fill="#94a3b8" font-family="sans-serif" font-size="13">Ingesta &amp; Procesamiento Masivo</text>
    <text x="630" y="210" fill="#38bdf8" font-family="sans-serif" font-weight="bold" font-size="24">Importación XML / Excel + AWS S3</text>

    <rect x="610" y="270" width="440" height="110" rx="10" fill="#1e293b"/>
    <text x="630" y="305" fill="#94a3b8" font-family="sans-serif" font-size="13">Tiempo de Respuesta Investigación</text>
    <text x="630" y="340" fill="#34d399" font-family="sans-serif" font-weight="bold" font-size="24">Reducción del 50% en resolución</text>

    <!-- Data Table preview -->
    <rect x="150" y="400" width="900" height="120" rx="10" fill="#020617" stroke="#ffffff" stroke-opacity="0.05"/>
    <text x="170" y="435" fill="#94a3b8" font-family="monospace" font-size="13">ID | REGION | PRODUCTO | ACCION CORRECTIVA | ESTADO | EVIDENCIA</text>
    <text x="170" y="465" fill="#22c55e" font-family="monospace" font-size="13">#8942 | Norte   | Lote B-12| Sanitización Filtro| Cerrado | S3/ev_8942.pdf</text>
    <text x="170" y="490" fill="#38bdf8" font-family="monospace" font-size="13">#8943 | Centro  | Lote A-05| Calibración Módulo | En Proceso | S3/ev_8943.pdf</text>
  </svg>`,

  'claims-kpi-dashboard.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
    <rect width="1200" height="630" fill="#0b0f19"/>
    <rect x="150" y="60" width="900" height="510" rx="16" fill="#111827" stroke="#8b5cf6" stroke-width="1"/>
    <text x="200" y="120" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="22">Dashboards Comparativos &amp; Rankings</text>
    <rect x="200" y="160" width="800" height="360" rx="10" fill="#1e293b"/>
    <text x="230" y="200" fill="#a78bfa" font-family="sans-serif" font-size="16">Filtros Regionales &amp; Análisis Anual por Línea de Producto</text>
  </svg>`,
};

Object.entries(svgTemplates).forEach(([filename, content]) => {
  fs.writeFileSync(path.join('public/images/projects', filename), content);
  console.log('Created project image:', filename);
});
