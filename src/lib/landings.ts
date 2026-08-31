// Wizao.cl — Landing pages por servicio/keyword (para SEO orgánico y páginas de ads)
// Mismo patrón que servicios.ts de gruahenry: data-driven + ruta dinámica.

export type FaqItem = { q: string; a: string };

export type LandingPage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  tag: string;
  intro: string;
  tldr: string[];
  includes: { title: string; text: string }[];
  coverage: string[];
  faq: FaqItem[];
  ctaText: string;
};

export const SITE_URL = "https://wizao.cl";

export const WHATSAPP_URL =
  "https://wa.me/56994122686?text=" +
  encodeURIComponent("Hola Wilson 👋, te escribo desde wizao.cl");

export const landings: LandingPage[] = [
  {
    slug: "desarrollo-software-antofagasta",
    title: "Desarrollo de Software a Medida en Antofagasta | Wizao",
    metaDescription:
      "Desarrollo de software a medida en Antofagasta y todo Chile: .NET, SQL Server, Azure, NestJS. Sistemas para minería, OTEC y empresas. Cotiza por WhatsApp.",
    h1: "Desarrollo de software a medida en Antofagasta",
    tag: "Servicio 01",
    intro:
      "Convierto problemas operativos recurrentes en sistemas estructurados. Desarrollo aplicaciones a medida con .NET (4.7.2 → moderno), Entity Framework, Razor MVC, SQL Server, Azure y NestJS + Prisma + PostgreSQL, con base en Antofagasta y cobertura en todo Chile.",
    tldr: [
      "Stack probado: .NET, SQL Server, Azure (IIS/Blob/VMs), NestJS + PostgreSQL",
      "QA automatizado (xUnit, FluentAssertions, Bogus) y CI/CD bloqueante",
      "Cobertura nacional con base en Antofagasta y Calama, foco en minería",
      "Respuesta directa por WhatsApp: hola@wizao.cl / wa.me/56994122686",
    ],
    includes: [
      { title: "Aplicaciones web y APIs", text: "Razor MVC, ASP.NET moderno, APIs REST con NestJS y Prisma sobre PostgreSQL." },
      { title: "Bases de datos", text: "Diseño, migraciones y optimización en SQL Server y PostgreSQL." },
      { title: "Nube Azure", text: "Publicación en IIS, Blob Storage, VMs y grupos de seguridad de red (NSG)." },
      { title: "QA automatizado", text: "Pruebas unitarias e integración con xUnit, FluentAssertions y Bogus en CI/CD." },
      { title: "Integraciones", text: "Mensajería, correo, Google Workspace y automatización con n8n." },
      { title: "Soporte y evolución", text: "Mantenimiento de sistemas legacy y rutas de modernización." },
    ],
    coverage: ["Antofagasta", "Calama", "Mejillones", "Sierra Gorda", "Taltal", "Todo Chile"],
    faq: [
      { q: "¿Trabajas solo con empresas de Antofagasta?", a: "No. Tengo base en Antofagasta y Calama, pero trabajo con clientes de todo Chile; las entregas y el soporte son 100% remotos cuando se requiere." },
      { q: "¿Qué stack tecnológico usas?", a: ".NET (ASP.NET 4.7.2 y versiones modernas), Entity Framework, Razor MVC, SQL Server, Azure (IIS, Blob Storage, VMs, NSG), y NestJS + Prisma + PostgreSQL. También automatización con n8n." },
      { q: "¿Cómo garantizas la calidad del software?", a: "Con QA automatizado: xUnit, FluentAssertions y Bogus, integrado como CI/CD bloqueante, además de checklists de verificación normativa (ISO 9001 / NCh2728)." },
      { q: "¿Tienes experiencia en la industria minera?", a: "Sí. Trabajo en INSECAP, OTEC regulada por SENCE con 17+ años y 13+ sucursales, desarrollando sistemas para la industria minera y de capacitación." },
    ],
    ctaText: "Cotiza tu sistema por WhatsApp",
  },
  {
    slug: "automatizacion-procesos-mineria",
    title: "Automatización de Procesos para Minería | Wizao",
    metaDescription:
      "Automatización de procesos e integraciones para la industria minera en Chile: n8n, Google Workspace, analítica de reclamos, ERP. Reduce costos y errores operativos.",
    h1: "Automatización de procesos para minería",
    tag: "Servicio 02",
    intro:
      "Automatizo procesos operativos recurrentes en empresas mineras y OTEC: integraciones de mensajería y correo, flujos con n8n, analítica de reclamos desde WhatsApp y optimización de costos en la nube.",
    tldr: [
      "Analítica real: 8 canales de WhatsApp, ~18.000 mensajes → dashboard accionable",
      "Automatización con n8n, Google Workspace, mensajería y correo",
      "Optimización Azure: discos huérfanos, backups duplicados, latencia cross-region",
      "Foco en minería y capacitación, con base en Antofagasta y Calama",
    ],
    includes: [
      { title: "Flujos n8n", text: "Automatización de tareas repetitivas entre sistemas, correo y mensajería." },
      { title: "Analítica de reclamos", text: "Procesamiento de canales de WhatsApp y generación de dashboards accionables en HTML/PPT." },
      { title: "Integraciones", text: "Google Workspace, mensajería, correo y conexión con sistemas ERP (TMS, SAP)." },
      { title: "Optimización de nube", text: "Reducción de costos en Azure: discos huérfanos, backups duplicados y latencia cross-region." },
      { title: "Conectividad multi-sede", text: "Tailscale como overlay seguro para sucursales, SQL remoto y CCTV." },
      { title: "Documentación", text: "Procesos modelados y documentados para que el equipo los opere sin depender de terceros." },
    ],
    coverage: ["Antofagasta", "Calama", "Zona minera norte", "Santiago", "Todo Chile"],
    faq: [
      { q: "¿Qué tipo de procesos se pueden automatizar?", a: "Desde flujos de mensajería y correo (n8n, Google Workspace) hasta analítica de reclamos desde WhatsApp: 8 canales y ~18.000 mensajes procesados en un caso real." },
      { q: "¿Tienes experiencia con empresas mineras?", a: "Sí: trabajo en INSECAP (OTEC regulada por SENCE con 13+ sucursales conectadas) desarrollando sistemas para la industria minera y de capacitación." },
      { q: "¿La automatización reemplaza personas?", a: "No. El objetivo es eliminar tareas repetitivas y errores manuales para que el equipo se concentre en decisiones; los dashboards y flujos están pensados para potenciar al personal." },
      { q: "¿Trabajas de forma remota?", a: "Sí. La implementación y el soporte son remotos; con conectividad multi-sede vía Tailscale y Starlink cuando se requiere presencia en faena." },
    ],
    ctaText: "Automatiza tu operación",
  },
  {
    slug: "e-learning-moodle",
    title: "Plataformas E-learning y Moodle | Wizao",
    metaDescription:
      "Administración, migración y desarrollo de Moodle: quiz multilingüe, plugins a medida, QA automatizado de evaluaciones. Para OTEC y empresas en Chile.",
    h1: "Plataformas e-learning y Moodle",
    tag: "Servicio 03",
    intro:
      "Administro y desarrollo sobre Moodle para OTEC y empresas: migraciones (incluida la de portal.insecap.cl a Moodle 5.1), quiz multilingüe, plugins de feedback y QA automatizado de evaluaciones con mi skill review-curso-moodle.",
    tldr: [
      "Migración real a Moodle 5.1 en portal.insecap.cl",
      "Quiz multilingüe y plugins de feedback desarrollados a medida",
      "QA automatizado de evaluaciones con la skill review-curso-moodle",
      "Integración con ERP de capacitación (TMS) y credenciales SENCE",
    ],
    includes: [
      { title: "Migración Moodle", text: "Upgrade y migración de plataformas (experiencia real: portal.insecap.cl a Moodle 5.1)." },
      { title: "Desarrollo de plugins", text: "Plugins de feedback y quiz multilingüe a medida." },
      { title: "QA de evaluaciones", text: "Revisión automatizada de quizzes y actividades con la skill review-curso-moodle." },
      { title: "Integración TMS", text: "Conexión de Moodle con el ERP de capacitación: participantes, credenciales y SENCE." },
      { title: "Administración", text: "Gestión de cursos, usuarios, roles y reportes." },
      { title: "Capacitación", text: "Formación de administradores y relatores para operar la plataforma." },
    ],
    coverage: ["Antofagasta", "Calama", "Santiago", "Todo Chile", "Multilingüe"],
    faq: [
      { q: "¿Puedo migrar mi Moodle sin perder cursos?", a: "Sí. Migré portal.insecap.cl a Moodle 5.1 con continuidad de cursos, usuarios y matrículas, con QA automatizado para validar evaluaciones." },
      { q: "¿Haces desarrollo de plugins a medida?", a: "Sí: plugins de feedback y quiz multilingüe, pensados para OTEC y empresas con alumnos de distintos idiomas." },
      { q: "¿Se integra con un ERP de capacitación?", a: "Sí. En INSECAP Moodle se integra con el ERP TMS/TMS Plus: cotización → comercialización → participantes → credenciales/SENCE/Moodle." },
      { q: "¿Das soporte continuo?", a: "Sí, con administración, monitoreo y evolución de la plataforma, además de capacitación al equipo interno." },
    ],
    ctaText: "Mejora tu plataforma e-learning",
  },
  {
    slug: "erp-capacitacion-tms",
    title: "ERP para OTEC y Gestión de Capacitación (TMS) | Wizao",
    metaDescription:
      "ERP de capacitación TMS/TMS Plus: cotización, comercialización, participantes, credenciales SENCE y Moodle. Software para OTEC en Chile con QA automatizado.",
    h1: "ERP para OTEC y gestión de capacitación",
    tag: "Servicio 04",
    intro:
      "Diseño y desarrollo de ERPs para OTEC: el TMS/TMS Plus de INSECAP cubre el ciclo completo de capacitación — cotización, comercialización, participantes, credenciales SENCE y Moodle — con QA automatizado y CI/CD bloqueante.",
    tldr: [
      "Ciclo completo: cotización → comercialización → participantes → credenciales/SENCE/Moodle",
      "QA automatizado con xUnit, FluentAssertions y Bogus",
      "Integración con SAP y ecosistema ERP",
      "Base instalada real: INSECAP, OTEC con 17+ años y 13+ sucursales",
    ],
    includes: [
      { title: "TMS / TMS Plus", text: "ERP interno de gestión de capacitación en reescritura activa con QA automatizado." },
      { title: "Parametrización SAP", text: "Implementación y soporte de módulos SAP e integración con el ecosistema TMS." },
      { title: "Credenciales SENCE", text: "Gestión de participantes, certificación y reportes regulatorios." },
      { title: "Integración Moodle", text: "Conexión automática entre el ERP y la plataforma e-learning." },
      { title: "CI/CD bloqueante", text: "Calidad garantizada: las pruebas bloquean el deploy si algo falla." },
      { title: "Modernización", text: "Ruta de evolución desde sistemas legacy hacia arquitecturas modernas." },
    ],
    coverage: ["Antofagasta", "Calama", "Todo Chile", "Regulado SENCE"],
    faq: [
      { q: "¿Qué es el TMS de capacitación?", a: "Un ERP que gestiona el ciclo completo de una OTEC: desde la cotización y comercialización de cursos hasta participantes, credenciales SENCE y sincronización con Moodle." },
      { q: "¿Tienes experiencia con SENCE?", a: "Sí. INSECAP es una OTEC regulada por SENCE con 17+ años de trayectoria; el TMS maneja credenciales y reportes regulatorios." },
      { q: "¿Puedo integrar SAP?", a: "Sí, soy parametrizador SAP: implementación y soporte de módulos, con integración al ecosistema TMS y procesos de negocio." },
      { q: "¿Cómo aseguras que el ERP no falle?", a: "QA automatizado con xUnit, FluentAssertions y Bogus, más CI/CD bloqueante: ninguna regresión llega a producción." },
    ],
    ctaText: "Cotiza tu ERP de capacitación",
  },
  {
    slug: "infraestructura-tecnologica",
    title: "Infraestructura Tecnológica y Conectividad | Wizao",
    metaDescription:
      "Infraestructura tecnológica para empresas: Tailscale multi-sucursal, Starlink, Azure DNS, SSL, SPF/DKIM/DMARC. Conecta 13+ sedes de forma segura en Chile.",
    h1: "Infraestructura tecnológica y conectividad",
    tag: "Servicio 05",
    intro:
      "Diseño y opero infraestructura para empresas multi-sucursal: red overlay segura con Tailscale (acceso SQL remoto y CCTV Hikvision en 13 sedes), Starlink, Azure DNS, SSL Sectigo y autenticación de correo SPF/DKIM/DMARC.",
    tldr: [
      "13+ sucursales conectadas con Tailscale (overlay seguro)",
      "CCTV Hikvision y acceso SQL remoto sin exponer puertos",
      "Azure DNS, SSL Sectigo, SPF/DKIM/DMARC configurados",
      "Starlink para sedes sin fibra",
    ],
    includes: [
      { title: "Red Tailscale", text: "Overlay seguro entre sedes: acceso SQL remoto, CCTV Hikvision y administración sin puertos expuestos." },
      { title: "Conectividad rural", text: "Starlink y respaldo de enlace para sedes sin fibra." },
      { title: "DNS y SSL", text: "Azure DNS, certificados Sectigo y configuración de dominios." },
      { title: "Correo seguro", text: "SPF, DKIM y DMARC para autenticación de correo y anti-spoofing." },
      { title: "Nube", text: "Azure: VMs, IIS, Blob Storage, NSG y optimización de costos." },
      { title: "Soporte", text: "Monitoreo y mantenimiento continuo de la infraestructura." },
    ],
    coverage: ["Antofagasta", "Calama", "13+ sucursales", "Todo Chile"],
    faq: [
      { q: "¿Cómo conecto sucursales sin abrir puertos?", a: "Con Tailscale: una red overlay segura que da acceso a SQL y CCTV entre sedes sin exponer servicios a internet." },
      { q: "¿Trabajas con sedes sin fibra?", a: "Sí. Implemento Starlink y enlaces de respaldo para sedes rurales o sin cobertura de fibra." },
      { q: "¿Configuras correo corporativo seguro?", a: "Sí: SPF, DKIM y DMARC para autenticación y contra suplantación de dominio." },
      { q: "¿Das soporte continuo?", a: "Sí: monitoreo, mantenimiento y evolución de la infraestructura con entrega 100% remota." },
    ],
    ctaText: "Conecta tus sucursales",
  },
];

export function getLanding(slug: string): LandingPage | undefined {
  return landings.find((l) => l.slug === slug);
}
