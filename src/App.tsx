import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Mic,
  Gamepad2,
  ArrowRight,
  Mail,
  Music,
  Youtube,
  Instagram,
  Twitter,
  Music2,
  MonitorPlay,
  Linkedin,
  Sparkles,
  Cpu,
  Database,
  Cloud,
  Bot,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const socials = [
  { name: "YouTube", href: "https://www.youtube.com/c/OWizao", icon: Youtube },
  { name: "Instagram", href: "https://www.instagram.com/owizao/", icon: Instagram },
  { name: "X", href: "https://x.com/Owizao", icon: Twitter },
  { name: "TikTok", href: "https://www.tiktok.com/@owizao", icon: MonitorPlay },
  { name: "Spotify", href: "https://open.spotify.com/artist/0InHZv430Rp7Y2AM42lGA0", icon: SpotifyIcon },
  { name: "SoundCloud", href: "https://soundcloud.com/wizao", icon: Music2 },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
];

const facets = [
  {
    id: "ingeniero",
    tag: "Faceta 01",
    icon: Code2,
    title: "El Ingeniero",
    desc: "Líder de Área TICA en INSECAP S.p.A. — OTEC chilena con 16 años, 13+ sucursales, regulada por SENCE. Convierto problemas operativos recurrentes en sistemas estructurados.",
    color: "from-cyan-400/20 to-cyan-600/5",
    accent: "text-cyan-400",
    border: "hover:border-cyan-400/40",
    items: [
      { icon: Briefcase, title: "Rol actual", text: "Líder de Área TICA en INSECAP S.p.A. — equipo de 4: Luis (TMS/Moodle), Renato (arquitectura e infraestructura), Ernes (TMS/TMS Plus/SAP) y yo, transversal." },
      { icon: Cpu, title: "Stack", text: ".NET (4.7.2 → moderno) · Entity Framework · Razor MVC · SQL Server · Azure (IIS, Blob, VMs, NSG) · NestJS + Prisma + PostgreSQL · Hetzner · Vultr" },
      { icon: Database, title: "TMS / TMS Plus", text: "ERP interno de capacitación: cotización → comercialización → participantes → credenciales/SENCE/Moodle. QA automatizado (xUnit, FluentAssertions, Bogus) + CI/CD bloqueante." },
      { icon: GraduationCap, title: "Moodle", text: "portal.insecap.cl — migración a Moodle 5.1, quiz multilingüe y plugins de feedback." },
      { icon: Bot, title: "IA agéntica", text: "Anthropic SDK · Claude Code · MCP · Skills — siguiendo el AI Engineering Skills Map de Andrew Ng." },
      { icon: Cloud, title: "Infraestructura", text: "Tailscale multi-sucursal (13 sedes, CCTV Hikvision), Starlink, Azure DNS, SSL Sectigo, SPF/DKIM/DMARC, n8n, Google Workspace." },
      { icon: Users, title: "Calidad", text: "ISO 9001 / NCh2728:2015 · auditorías SICEP · checklists de verificación normativa." },
      { icon: Rocket, title: "Hitos", text: "HackaDISC 2026 con UCN — INSECAP aportó el desafío de predicción de ventas; fui jurado." },
    ],
  },
  {
    id: "emprendedor",
    tag: "Faceta 02",
    icon: Rocket,
    title: "El Emprendedor",
    desc: "Proyectos donde la tecnología resuelve problemas reales: de la comparación de compras a la analítica de reclamos.",
    color: "from-violet-400/20 to-violet-600/5",
    accent: "text-violet-400",
    border: "hover:border-violet-400/40",
    items: [
      { icon: Sparkles, title: "COTIZA", text: "Plataforma formal de comparación de procesos de compra — 14 entidades, plan de 7 fases." },
      { icon: Users, title: "Analítica de reclamos", text: "8 canales de WhatsApp, ~18.000 mensajes → dashboard HTML + PPT accionable." },
      { icon: Database, title: "Optimización Azure", text: "Discos huérfanos, backups duplicados y latencia cross-region — menos costo, más performance." },
      { icon: Rocket, title: "Skills propias", text: "review-curso-moodle (QA automatizado de evaluaciones) · guiones-ads-redes · HackaDISC UCN (desafío de predicción de ventas, jurado)" },
    ],
  },
  {
    id: "comunicador",
    tag: "Faceta 03",
    icon: Mic,
    title: "El Comunicador",
    desc: "Divulgo lo que sé: capacitación, industria, tecnología y el futuro del trabajo.",
    color: "from-sky-400/20 to-sky-600/5",
    accent: "text-sky-400",
    border: "hover:border-sky-400/40",
    items: [
      { icon: Mic, title: "Podcast", text: "«Hablemos de Capacitación» — conversaciones que transforman experiencias en aprendizaje." },
      { icon: MonitorPlay, title: "Canal INSECAP", text: "@InsecapCapacitacion — contenido educativo técnico, cursos y cápsulas." },
      { icon: Users, title: "Cap 01", text: "Cómo SAP Cambia tu Carrera en la Industria y Minería." },
      { icon: Users, title: "Cap 02", text: "Lo que Nadie te Dice sobre Operar Maquinaria en Minería." },
    ],
  },
  {
    id: "creador",
    tag: "Faceta 04",
    icon: Gamepad2,
    title: "El Creador — Wizao",
    desc: "Más de 10 años creando en internet: YouTube, música, gaming y efectos especiales.",
    color: "from-fuchsia-400/20 to-fuchsia-600/5",
    accent: "text-fuchsia-400",
    border: "hover:border-fuchsia-400/40",
    items: [
      { icon: Youtube, title: "YouTube", text: "Canal activo desde ~2012: vlogs, efectos especiales, gaming y música." },
      { icon: Music, title: "Música", text: "Disponible en Spotify — Tu Esencia (2020) y más lanzamientos." },
      { icon: MonitorPlay, title: "TikTok", text: "@owizao — perfil con bio «Mejora Constante»." },
      { icon: Gamepad2, title: "Gaming", text: "Twitch + YouTube: Pokémon Go, Let's Go y comunidad." },
    ],
  },
];

const facetLinks: Record<string, { label: string; href: string }[]> = {
  emprendedor: [{ label: "cotizasmart.cl →", href: "https://cotizasmart.cl" }],
  comunicador: [
    { label: "Playlist podcast →", href: "https://www.youtube.com/playlist?list=PLEFHa-sTHvG2aDlqufBAD1mWdSTZdvxom" },
    { label: "@InsecapCapacitacion →", href: "https://www.youtube.com/@InsecapCapacitacion" },
  ],
  ingeniero: [
    { label: "INSECAP →", href: "https://www.insecap.cl" },
    { label: "portal.insecap.cl (Moodle) →", href: "https://portal.insecap.cl" },
  ],
  creador: [
    { label: "Canal YouTube →", href: "https://www.youtube.com/c/OWizao" },
    { label: "Spotify →", href: "https://open.spotify.com/artist/0InHZv430Rp7Y2AM42lGA0" },
    { label: "SoundCloud →", href: "https://soundcloud.com/wizao" },
  ],
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* fondo con glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px] animate-pulse-glow" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="text-cyan-400">wizao</span>
            <span className="text-muted-foreground">.cl</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {facets.map((f) => (
              <a key={f.id} href={`#${f.id}`} className="transition-colors hover:text-foreground">
                {f.title.replace("El ", "").replace("La ", "")}
              </a>
            ))}
            <a href="#contacto" className="rounded-full bg-primary px-4 py-1.5 font-semibold text-primary-foreground transition hover:bg-cyan-300">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center pt-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-sm text-cyan-400">// hola, soy</p>
            <h1 className="mt-3 text-5xl font-extrabold leading-tight md:text-7xl">
              Wilson <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Carvajal</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Ingeniero Civil en Computación · Líder de Área TICA en INSECAP · Creador digital
            </p>
            <p className="mt-2 text-muted-foreground">
              <span className="font-semibold text-cyan-300">Sistematizador:</span> convierto problemas operativos recurrentes en sistemas estructurados.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Cuatro facetas, una sola marca: <span className="font-semibold text-foreground">Wizao</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-cyan-300">
                Hablemos <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#ingeniero" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition hover:border-cyan-400/40 hover:text-cyan-300">
                Conóceme
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition hover:border-cyan-400/40 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4 text-cyan-400" />
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FACETAS */}
      {facets.map((f, idx) => (
        <section key={f.id} id={f.id} className={`relative py-24 ${idx % 2 === 1 ? "bg-card/30" : ""}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={`font-mono text-xs ${f.accent}`}>{f.tag}</span>
              <h2 className="mt-2 text-4xl font-bold md:text-5xl">
                <f.icon className="mr-3 inline h-8 w-8" />
                {f.title}
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{f.desc}</p>
            </motion.div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {f.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-xl border border-border bg-gradient-to-br ${f.color} p-6 backdrop-blur-sm transition ${f.border}`}
                >
                  <item.icon className={`h-6 w-6 ${f.accent}`} />
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {facetLinks[f.id] && (
              <div className="mt-6 flex flex-wrap gap-3">
                {facetLinks[f.id].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${f.accent} hover:underline`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CONTACTO */}
      <section id="contacto" className="relative py-24">
        <div className="container text-center">
          <span className="font-mono text-xs text-cyan-400">Contacto</span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Hablemos 🤝</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            ¿Proyecto, colaboración, podcast, música o simplemente saludar? Mi inbox está abierto.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hola@wizao.cl"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition hover:bg-cyan-300"
            >
              <Mail className="h-5 w-5" /> hola@wizao.cl
            </a>
          </div>
          <p className="mt-16 text-sm text-muted-foreground">
            wizao.cl — Wilson Carvajal Rozas · Hecho con 🤖 y ☕
          </p>
        </div>
      </section>
    </div>
  );
}
