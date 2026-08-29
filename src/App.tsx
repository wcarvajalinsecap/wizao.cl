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
  Briefcase,
  GraduationCap,
  Users,
  Puzzle,
  SlidersHorizontal,
  Building2,
  MapPin,
  Award,
  MessageSquareText,
} from "lucide-react";

import WaveDivider from "./components/WaveDivider";
import { NumberTicker } from "./components/NumberTicker";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const WHATSAPP_URL =
  "https://wa.me/56994122686?text=" +
  encodeURIComponent("Hola Wilson 👋, te escribo desde wizao.cl");

// INSECAP fundado en 2009 → los años de trayectoria se calculan solos (incremental)
const INSECAP_FOUNDING_YEAR = 2009;
const INSECAP_YEARS = new Date().getFullYear() - INSECAP_FOUNDING_YEAR;

const socials = [
  { name: "YouTube", href: "https://www.youtube.com/c/OWizao", icon: Youtube },
  { name: "Instagram", href: "https://www.instagram.com/owizao/", icon: Instagram },
  { name: "X", href: "https://x.com/Owizao", icon: Twitter },
  { name: "TikTok", href: "https://www.tiktok.com/@owizao", icon: MonitorPlay },
  { name: "Spotify", href: "https://open.spotify.com/artist/0InHZv430Rp7Y2AM42lGA0", icon: SpotifyIcon },
  { name: "SoundCloud", href: "https://soundcloud.com/wizao", icon: Music2 },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
];

const stats = [
  { icon: Building2, value: INSECAP_YEARS, suffix: "+", label: "años de trayectoria OTEC" },
  { icon: MapPin, value: 13, suffix: "+", label: "sucursales conectadas" },
  { icon: MessageSquareText, value: 18000, suffix: "+", label: "mensajes analizados" },
];

const facets = [
  {
    id: "ingeniero",
    tag: "Faceta 01",
    icon: Code2,
    title: "El Ingeniero",
    desc: `Líder de Área TICA en INSECAP S.p.A. — OTEC chilena con ${INSECAP_YEARS} años, 13+ sucursales, regulada por SENCE. Convierto problemas operativos recurrentes en sistemas estructurados.`,
    accent: "text-red-400",
    iconBg: "bg-red-500/10 text-red-400",
    border: "hover:border-red-500/50",
    items: [
      { icon: Briefcase, title: "Rol actual", text: "Líder de Área TICA en INSECAP S.p.A. — equipo de 4: Luis (TMS/Moodle), Renato (arquitectura e infraestructura), Ernes (TMS/TMS Plus/SAP) y yo, transversal." },
      { icon: Cpu, title: "Stack", text: ".NET (4.7.2 → moderno) · Entity Framework · Razor MVC · SQL Server · Azure (IIS, Blob, VMs, NSG) · NestJS + Prisma + PostgreSQL · Hetzner · Vultr" },
      { icon: Database, title: "TMS / TMS Plus", text: "ERP interno de capacitación: cotización → comercialización → participantes → credenciales/SENCE/Moodle. QA automatizado (xUnit, FluentAssertions, Bogus) + CI/CD bloqueante." },
      { icon: SlidersHorizontal, title: "SAP", text: "Parametrizador SAP — implementación y soporte de módulos, integración con el ecosistema TMS y procesos de negocio." },
      { icon: GraduationCap, title: "Moodle", text: "portal.insecap.cl — migración a Moodle 5.1, quiz multilingüe y plugins de feedback." },
      { icon: Puzzle, title: "Plugins Moodle", text: "Desarrollo a medida: plugins de feedback y quiz multilingüe, migración a Moodle 5.1 — QA automatizado con mi skill review-curso-moodle." },
      { icon: Cloud, title: "Infraestructura", text: "Tailscale multi-sucursal (13 sedes, CCTV Hikvision), Starlink, Azure DNS, SSL Sectigo, SPF/DKIM/DMARC, n8n, Google Workspace." },
      { icon: Award, title: "Calidad", text: "ISO 9001 / NCh2728:2015 · auditorías SICEP · checklists de verificación normativa." },
      { icon: Rocket, title: "Hitos", text: "HackaDISC 2026 con UCN — INSECAP aportó el desafío de predicción de ventas; fui jurado." },
    ],
  },
  {
    id: "emprendedor",
    tag: "Faceta 02",
    icon: Rocket,
    title: "El Emprendedor",
    desc: "Proyectos donde la tecnología resuelve problemas reales: de la comparación de compras a la analítica de reclamos.",
    accent: "text-violet-400",
    iconBg: "bg-violet-500/10 text-violet-400",
    border: "hover:border-violet-500/50",
    items: [
      { icon: Sparkles, title: "COTIZA", text: "Plataforma formal de comparación de procesos de compra — 14 entidades, plan de 7 fases." },
      { icon: MessageSquareText, title: "Analítica de reclamos", text: "8 canales de WhatsApp, ~18.000 mensajes → dashboard HTML + PPT accionable." },
      { icon: Cloud, title: "Optimización Azure", text: "Discos huérfanos, backups duplicados y latencia cross-region — menos costo, más performance." },
      { icon: Rocket, title: "Skills propias", text: "review-curso-moodle (QA automatizado de evaluaciones) · guiones-ads-redes · HackaDISC UCN (desafío de predicción de ventas, jurado)" },
    ],
  },
  {
    id: "comunicador",
    tag: "Faceta 03",
    icon: Mic,
    title: "El Comunicador",
    desc: "Divulgo lo que sé: capacitación, industria, tecnología y el futuro del trabajo.",
    accent: "text-rose-400",
    iconBg: "bg-rose-500/10 text-rose-400",
    border: "hover:border-rose-500/50",
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
    accent: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-400",
    border: "hover:border-fuchsia-500/50",
    items: [
      { icon: Youtube, title: "YouTube", text: "Canal activo desde ~2012: vlogs, efectos especiales, gaming y música." },
      { icon: Music, title: "Música", text: "Disponible en Spotify — Tu Esencia (2020) y más lanzamientos." },
      { icon: MonitorPlay, title: "TikTok", text: "@owizao — perfil con bio «Mejora Constante»." },
      { icon: Gamepad2, title: "Gaming", text: "Twitch + YouTube: Pokémon Go, Let's Go y comunidad." },
    ],
  },
];

const facetLinks: Record<string, { label: string; href: string }[]> = {
  ingeniero: [
    { label: "INSECAP →", href: "https://www.insecap.cl" },
    { label: "portal.insecap.cl (Moodle) →", href: "https://portal.insecap.cl" },
  ],
  emprendedor: [{ label: "cotizasmart.cl →", href: "https://cotizasmart.cl" }],
  comunicador: [
    { label: "Playlist podcast →", href: "https://www.youtube.com/playlist?list=PLEFHa-sTHvG2aDlqufBAD1mWdSTZdvxom" },
    { label: "@InsecapCapacitacion →", href: "https://www.youtube.com/@InsecapCapacitacion" },
  ],
  creador: [
    { label: "Canal YouTube →", href: "https://www.youtube.com/c/OWizao" },
    { label: "Spotify →", href: "https://open.spotify.com/artist/0InHZv430Rp7Y2AM42lGA0" },
    { label: "SoundCloud →", href: "https://soundcloud.com/wizao" },
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-1 text-lg font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent">wizao</span>
            <span className="font-normal text-muted-foreground">.cl</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            {facets.map((f) => (
              <a key={f.id} href={`#${f.id}`} className="transition-colors hover:text-foreground">
                {f.title.replace("El ", "").replace("La ", "").replace(" — Wizao", "")}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-cta transition hover:brightness-110"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO — negro profundo con glow rojo/morado */}
      <section id="top" className="relative overflow-hidden bg-[#0d0b1a] text-white">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-red-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="container relative flex min-h-[88vh] flex-col justify-center py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-sm text-red-400">// hola, soy</p>
            <h1 className="mt-3 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Wilson{" "}
              <span className="bg-gradient-to-r from-red-400 to-violet-400 bg-clip-text text-transparent">
                Carvajal
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300 md:text-xl">
              Ingeniero Civil en Computación · Líder de Área TICA en INSECAP · Creador digital
            </p>
            <p className="mt-3 max-w-2xl text-slate-400">
              <span className="font-semibold text-red-400">Sistematizador:</span> convierto problemas
              operativos recurrentes en sistemas estructurados.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-cta transition hover:brightness-110"
              >
                Hablemos <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#ingeniero"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold backdrop-blur-sm transition hover:border-red-400/50 hover:text-red-200"
              >
                Conóceme
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition hover:border-red-400/40 hover:text-white"
                >
                  <s.icon className="h-4 w-4 text-red-400" />
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ONDA — transición hero → stats (Wave Rule) */}
      <WaveDivider className="-mb-px" />

      {/* STATS — banda gradiente rojo → morado con contadores animados */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-500 to-violet-600">
        <div className="container grid grid-cols-1 gap-6 py-14 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center py-4 text-center"
            >
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="text-3xl font-extrabold tabular-nums text-white md:text-4xl">
                <NumberTicker value={s.value} className="text-white" suffix={s.suffix} />
              </p>
              <p className="mt-1 max-w-[150px] text-xs font-semibold leading-snug text-white/80">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COBERTURA — SEO local visible: todo Chile + Antofagasta/Calama + minería */}
      <section className="border-y border-border/60 bg-card/60">
        <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-red-400" />
            <span className="font-semibold text-foreground">Cobertura nacional</span> — todo Chile
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-2">
            <Building2 className="h-4 w-4 text-violet-400" />
            Base en <span className="font-semibold text-foreground">Antofagasta · Calama</span>
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-2">
            <Award className="h-4 w-4 text-red-400" />
            Foco en <span className="font-semibold text-foreground">industria minera</span>
          </span>
        </div>
      </section>

      {/* FACETAS — tarjetas oscuras con acentos rojo/morado */}
      {facets.map((f, idx) => (
        <section key={f.id} id={f.id} className={`py-24 ${idx % 2 === 1 ? "bg-card/40" : "bg-background"}`}>
          <div className="container">
            <motion.div {...fadeUp}>
              <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${f.accent}`}>
                {f.tag}
              </span>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
                <f.icon className={`mr-3 inline h-8 w-8 ${f.accent}`} />
                {f.title}
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">{f.desc}</p>
            </motion.div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {f.items.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                  className={`group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-hover ${f.border}`}
                >
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.iconBg}`}>
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {facetLinks[f.id] && (
              <motion.div {...fadeUp} className="mt-8 flex flex-wrap gap-5">
                {facetLinks[f.id].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${f.accent} hover:underline`}
                  >
                    {l.label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* CONTACTO — CTA con gradiente rojo/morado */}
      <section id="contacto" className="py-24">
        <div className="container">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#150d24] via-[#3b0d1a] to-[#1e1035] px-8 py-16 text-center text-white md:py-20"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-60" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/20 blur-[100px]" />
            <div className="relative">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-red-400">
                Contacto
              </span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                Hablemos <span className="text-red-400">🤝</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                ¿Proyecto, colaboración, podcast, música o simplemente saludar? Escríbeme por WhatsApp o al correo.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-violet-500 px-8 py-4 text-lg font-bold text-white shadow-cta transition hover:brightness-110"
                >
                  <MessageSquareText className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href="mailto:hola@wizao.cl"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:border-red-400/50"
                >
                  <Mail className="h-5 w-5" /> hola@wizao.cl
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER — gradiente negro → rojo oscuro → morado oscuro */}
      <footer className="bg-gradient-to-br from-[#0d0b1a] via-[#2d0a12] to-[#1e1035] py-10 text-center text-sm text-slate-400">
        <div className="container">
          <p>
            wizao.cl — Wilson Carvajal Rozas · Hecho con <span className="text-red-400">🤖</span> y{" "}
            <span className="text-violet-400">☕</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
