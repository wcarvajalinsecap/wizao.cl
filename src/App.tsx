import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Code2,
  GraduationCap,
  Users,
  Youtube,
  Mic,
  Server,
  Rocket,
  Globe,
  Trophy,
  Database,
  Cloud,
  Boxes,
  Receipt,
  Landmark,
  HandCoins,
  BadgeCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { links, EMAIL, DBO_DOWNLOAD, DBO_SITE, PODCAST } from "./lib/site";
import { NumberTicker } from "./components/NumberTicker";

const YOUTUBE_SINCE = 2012;
const YEARS_CREATING = new Date().getFullYear() - YOUTUBE_SINCE;

const nav = [
  { label: "DBO Infinity", href: "#dbo" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Contenido", href: "#contenido" },
  { label: "Links", href: "/links" },
];

const roles = ["sistemas", "comunidades", "música", "un MMO"];

// Cifras verificables: años se calculan solos; rates salen del server de DBO (og-image del juego).
const stats = [
  { value: YEARS_CREATING, suffix: "", label: "años creando en YouTube" },
  { value: 4, suffix: "", label: "personas en el equipo que lidero" },
  { value: 11, prefix: "x", suffix: "", label: "EXP en DBO Infinity" },
  { value: 3, suffix: "", label: "idiomas en dboinfinity.com" },
];

const stack = [".NET", "C#", "SQL Server", "Azure", "NestJS", "PostgreSQL", "Prisma", "React", "TypeScript", "Tailwind", "Moodle", "SAP", "Talana", "Masterbase", "SII", "SENCE", "n8n", "Hetzner", "Cloudflare", "MySQL", "CI/CD"];

const dboShots = [
  { src: "/dbo/bosque-cartel", alt: "DBO Infinity: personaje junto al cartel en memoria de Goku y Vegeta en el bosque" },
  { src: "/dbo/creacion-personaje", alt: "DBO Infinity: pantalla de creación de personaje frente al Tenkaichi Budokai" },
  { src: "/dbo/estado-personaje", alt: "DBO Infinity: ventana de estado del personaje con equipo legendario" },
];

const dboBuilt = [
  { icon: Server, title: "Servidor de juego", text: "Configurado, parchado y operando en la nube, con estado en vivo." },
  { icon: Rocket, title: "Launcher", text: "Actualizaciones por delta: el jugador baja solo lo que cambió." },
  { icon: Globe, title: "Web en 3 idiomas", text: "Registro, ranking, guía, mercado y noticias." },
];

const work = [
  {
    icon: Code2,
    title: "Sistemas a medida",
    text: "Lidero el área TICA de INSECAP: ERP interno, integraciones y automatización de procesos con .NET, SQL Server, Azure y NestJS.",
  },
  {
    icon: GraduationCap,
    title: "E-learning y calidad",
    text: "Plataformas Moodle 5.1, QA automatizado con CI/CD bloqueante y procesos alineados a ISO 9001 y NCh2728.",
  },
  {
    icon: Trophy,
    title: "Comunidad tech",
    text: "Jurado en HackaDISC 2026 junto a la UCN y voz del podcast «Hablemos de Capacitación».",
  },
];

// Ecosistema que construyo e integro en INSECAP. ponytail: sin personas ni topología de red (decisión del comité).
const ecosystem = [
  {
    icon: Database,
    title: "ERP de capacitación (TMS)",
    text: "El corazón: cotización → comercialización → participantes → credenciales, SENCE y Moodle. Todo conectado.",
    big: true,
  },
  { icon: GraduationCap, title: "Moodle 5.1", text: "Migración, plugins de feedback y quiz multilingüe." },
  { icon: Cloud, title: "Azure", text: "IIS, Blob Storage, VMs y optimización de costos." },
  { icon: Boxes, title: "SAP", text: "Parametrización e integración con el ERP." },
  { icon: Receipt, title: "Facturación electrónica", text: "Emisión de DTE con Masterbase." },
  { icon: Landmark, title: "SII", text: "Documentos tributarios conectados al SII." },
  { icon: HandCoins, title: "Cobranza", text: "Seguimiento y automatización del ciclo de cobro." },
  { icon: Users, title: "Talana", text: "Integración de RRHH y remuneraciones." },
  { icon: BadgeCheck, title: "SENCE", text: "Procesos de capacitación bajo la norma SENCE." },
  { icon: ShieldCheck, title: "QA y CI/CD", text: "xUnit, FluentAssertions y Bogus con CI/CD bloqueante.", wide: true },
  { icon: Workflow, title: "Automatización", text: "n8n y Google Workspace para eliminar trabajo manual.", wide: true },
];

const episodes = [
  "Cómo SAP cambia tu carrera en la industria y minería",
  "Lo que nadie te dice sobre operar maquinaria en minería",
];

function Eyebrow({ children, className = "text-primary" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${className}`}>{children}</p>;
}

function SectionTitle({ children, bar = "bg-primary" }: { children: React.ReactNode; bar?: string }) {
  return (
    <>
      <h2 className="mt-3 text-heading font-bold">{children}</h2>
      <span className={`mt-4 block h-1 w-16 rounded-full ${bar}`} />
    </>
  );
}

function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length, reduce]);
  return (
    <span className="relative inline-block h-[1.25em] overflow-hidden align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="block leading-[1.25em] text-primary"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Shot({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <img
      src={`${src}-1264.webp`}
      srcSet={`${src}-640.webp 640w, ${src}-1264.webp 1264w`}
      sizes="(min-width: 1024px) 600px, 100vw"
      width={1264}
      height={729}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={`rounded-xl border border-white/10 object-cover shadow-2xl ${className}`}
    />
  );
}

export default function App() {
  const reduce = useReducedMotion();
  const fadeUp = {
    initial: reduce ? false : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="text-lg font-bold tracking-tight">
            wizao<span className="text-primary">.cl</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hidden transition-colors hover:text-foreground md:inline">
                {n.label}
              </a>
            ))}
            <a href="#contacto" className="btn-primary px-5 py-2">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO — nombre gigante + capturas en abanico */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[160px]" />
        <div className="container relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Ingeniero · Creador · Game dev
              </span>
            </motion.div>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-mega font-bold uppercase"
            >
              Wilson
              <br />
              <span className="text-outline">Carvajal</span>
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-2xl font-semibold leading-[1.25em] md:text-3xl"
            >
              Construyo <RotatingWord words={roles} />
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Ingeniero Civil en Computación y Líder de Área TICA en INSECAP. Creador en YouTube desde 2012. Y sí: reviví
              Dragon Ball Online.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href={DBO_DOWNLOAD} target="_blank" rel="noopener noreferrer" className="btn-dbo">
                <Download className="h-5 w-5" /> Jugar DBO Infinity
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-ghost">
                Escríbeme <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Abanico de capturas */}
          <motion.a
            href="#dbo"
            aria-label="Ver DBO Infinity"
            initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative hidden aspect-[4/3] lg:block"
          >
            <Shot {...dboShots[1]} eager className="absolute left-0 top-6 w-[78%] -rotate-6 opacity-70 transition duration-500 group-hover:-rotate-[9deg] group-hover:-translate-x-4" />
            <Shot {...dboShots[2]} eager className="absolute bottom-0 right-0 w-[78%] rotate-6 opacity-80 transition duration-500 group-hover:rotate-[9deg] group-hover:translate-x-4" />
            <Shot {...dboShots[0]} eager className="absolute left-[11%] top-[18%] w-[78%] ring-2 ring-dbo-gi/60 transition duration-500 group-hover:scale-105" />
            <span className="absolute -bottom-3 left-[14%] rounded-full bg-dbo-gi px-4 py-1.5 text-sm font-bold text-dbo-night shadow-lg">
              DBO Infinity · online
            </span>
          </motion.a>
        </div>
      </section>

      {/* STACK — cinta continua */}
      <section aria-label="Tecnologías" className="relative border-y border-border bg-card py-5">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex shrink-0 animate-marquee gap-10 pr-10 motion-reduce:animate-none">
            {[...stack, ...stack].map((s, i) => (
              <li key={i} aria-hidden={i >= stack.length} className="whitespace-nowrap text-lg font-semibold text-muted-foreground">
                {s} <span className="ml-10 text-primary">/</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="py-24">
        <div className="container grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.1 }} className="border-l-2 border-primary pl-5">
              <p className="text-5xl font-bold tabular-nums tracking-tight md:text-7xl">
                {s.prefix}
                <NumberTicker value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 max-w-[180px] text-sm font-medium text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DBO INFINITY — bloque cinemático con la paleta del juego */}
      <section id="dbo" className="relative scroll-mt-16 overflow-hidden bg-dbo-night py-24 text-white">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-dbo-gi/20 blur-[150px]" />
        <div className="container relative">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Eyebrow className="text-dbo-ball">Proyecto propio</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[0.95] tracking-tight">
              DBO <span className="text-dbo-gi">Infinity</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Un servidor privado de Dragon Ball Online que diseño, programo y opero de punta a punta. Del servidor de
              juego al launcher, la web y el despliegue: todo hecho por mí.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["EXP x11", "Misiones x2", "Respawn x10", "Gratis"].map((r) => (
                <li key={r} className="rounded-full border border-dbo-ball/40 bg-dbo-ball/10 px-3 py-1 text-sm font-semibold text-dbo-ball">
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <motion.div {...fadeUp} className="md:col-span-2 md:row-span-2">
              <Shot {...dboShots[0]} className="h-full w-full" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: reduce ? 0 : 0.1 }}>
              <Shot {...dboShots[1]} className="h-full w-full" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: reduce ? 0 : 0.2 }}>
              <Shot {...dboShots[2]} className="h-full w-full" />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {dboBuilt.map((b, i) => (
              <motion.div key={b.title} {...fadeUp} transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <b.icon className="h-6 w-6 text-dbo-gi" />
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{b.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 flex flex-wrap gap-4">
            <a href={DBO_DOWNLOAD} target="_blank" rel="noopener noreferrer" className="btn-dbo">
              <Download className="h-5 w-5" /> Descargar gratis
            </a>
            <a href={DBO_SITE} target="_blank" rel="noopener noreferrer" className="btn-ghost border-white/20 hover:border-white">
              dboinfinity.com <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* QUÉ HAGO */}
      <section id="trabajo" className="scroll-mt-16 py-24">
        <div className="container">
          <motion.div {...fadeUp}>
            <Eyebrow>De día</Eyebrow>
            <SectionTitle>Convierto problemas operativos en sistemas</SectionTitle>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {work.map((w, i) => (
              <motion.div
                key={w.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="absolute -right-6 -top-6 text-[120px] font-bold leading-none text-white/[0.03] transition group-hover:text-primary/10">
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <w.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <motion.a {...fadeUp} href="https://cotizasmart.cl" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-border bg-card p-8 transition hover:border-primary/60">
              <Eyebrow className="text-muted-foreground">Emprendimiento</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold">COTIZA</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Plataforma para comparar procesos de compra de forma formal y trazable.</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                cotizasmart.cl <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
            <motion.a {...fadeUp} href={PODCAST} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-border bg-card p-8 transition hover:border-primary/60">
              <Eyebrow className="text-muted-foreground">Podcast</Eyebrow>
              <h3 className="mt-3 flex items-center gap-2 text-2xl font-bold">
                <Mic className="h-6 w-6 text-primary" /> Hablemos de Capacitación
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {episodes.map((e, i) => (
                  <li key={e}>
                    <span className="mr-2 font-semibold text-foreground">Cap {i + 1}</span>
                    {e}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Escuchar <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ECOSISTEMA — todo lo que integro alrededor del ERP */}
      <section id="ecosistema" className="relative scroll-mt-16 overflow-hidden border-t border-border bg-card/40 py-24">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container relative">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Eyebrow>Ecosistema</Eyebrow>
            <SectionTitle>Del ERP a la factura: todo conectado</SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Diseño e integro los sistemas que mueven una OTEC nacional: ventas, aula virtual, finanzas, tributación,
              cobranza y personas.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((e, i) => (
              <motion.div
                key={e.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: reduce ? 0 : (i % 4) * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 ${
                  e.big
                    ? "border-primary/40 bg-gradient-to-br from-primary/20 via-card to-card sm:col-span-2 lg:row-span-2 lg:p-10"
                    : "border-border bg-card hover:border-primary/60"
                } ${e.wide ? "lg:col-span-2" : ""}`}
              >
                <span className={`flex items-center justify-center rounded-xl bg-primary/10 ${e.big ? "h-16 w-16" : "h-11 w-11"}`}>
                  <e.icon className={`text-primary ${e.big ? "h-8 w-8" : "h-5 w-5"}`} />
                </span>
                <h3 className={`mt-5 font-bold ${e.big ? "text-3xl lg:text-4xl" : "text-base"}`}>{e.title}</h3>
                <p className={`mt-2 leading-relaxed text-muted-foreground ${e.big ? "text-lg" : "text-sm"}`}>{e.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO — Wizao */}
      <section id="contenido" className="relative scroll-mt-16 overflow-hidden border-t border-border py-24">
        <span aria-hidden className="pointer-events-none absolute -bottom-10 right-0 select-none text-[22vw] font-bold uppercase leading-none tracking-tighter text-white/[0.025]">
          wizao
        </span>
        <div className="container relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <Eyebrow className="text-accent">De noche</Eyebrow>
            <SectionTitle bar="bg-accent">Wizao: videos y música desde 2012</SectionTitle>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Más de una década publicando en YouTube: efectos especiales, gaming y música propia, hoy en Spotify y
              SoundCloud.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="https://www.youtube.com/c/OWizao" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Youtube className="h-5 w-5" /> Ver canal
              </a>
              {links.filter((l) => l.social && l.label !== "YouTube").map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-foreground">
                  <l.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a href="/links" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              Todos mis links <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div {...fadeUp}>
            <iframe
              title="Wizao en Spotify"
              src="https://open.spotify.com/embed/artist/0InHZv430Rp7Y2AM42lGA0?theme=0"
              width="100%"
              height="152"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-16 pb-24">
        <div className="container">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card px-8 py-20 text-center md:py-28">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
            <div className="relative">
              <Eyebrow>Contacto</Eyebrow>
              <h2 className="mt-4 text-[clamp(2.5rem,7vw,5rem)] font-bold leading-none tracking-tight">¿Conversamos?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Proyectos, colaboraciones, podcast, música o DBO. Respondo por correo.
              </p>
              <a href={`mailto:${EMAIL}`} className="btn-primary mt-10 px-9 py-4 text-lg">
                <Mail className="h-5 w-5" /> {EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <span>© Wilson Carvajal · wizao.cl</span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4" /> <a href="/links" className="hover:text-foreground">Todos mis links</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
