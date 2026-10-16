import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, Mail, Code2, GraduationCap, Users, Gamepad2 } from "lucide-react";
import { links, EMAIL, DBO_DOWNLOAD, DBO_SITE, PODCAST } from "./lib/site";

const nav = [
  { label: "Trabajo", href: "#trabajo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contenido", href: "#contenido" },
  { label: "Links", href: "/links" },
];

const highlights = ["En YouTube desde 2012", "Sistematizador", "Jurado HackaDISC 2026", "Autor de DBO Infinity"];

const work = [
  {
    icon: Code2,
    title: "Sistemas a medida",
    text: "Lidero el área TICA de INSECAP: ERP interno, integraciones y automatización de procesos con .NET, SQL Server, Azure y NestJS.",
  },
  {
    icon: GraduationCap,
    title: "E-learning y calidad",
    text: "Plataformas Moodle 5.1, QA automatizado con CI/CD y procesos alineados a ISO 9001 y NCh2728.",
  },
  {
    icon: Users,
    title: "Comunidad tech",
    text: "Jurado en HackaDISC 2026 junto a la UCN y voz del podcast «Hablemos de Capacitación».",
  },
];

const projects = [
  { title: "COTIZA", text: "Plataforma para comparar procesos de compra de forma formal y trazable.", label: "cotizasmart.cl", href: "https://cotizasmart.cl" },
  { title: "Hablemos de Capacitación", text: "Podcast sobre capacitación, industria y el futuro del trabajo.", label: "Escuchar", href: PODCAST },
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

export default function App() {
  const reduce = useReducedMotion();
  const fadeUp = {
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="text-lg font-bold tracking-tight">
            wizao<span className="text-primary">.cl</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hidden transition-colors hover:text-foreground sm:inline">
                {n.label}
              </a>
            ))}
            <a href="#contacto" className="btn-primary px-5 py-2">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="container flex min-h-[80vh] flex-col justify-center pb-16 pt-32">
        <div>
          <Eyebrow>Ingeniero Civil en Computación · Creador</Eyebrow>
          <h1 className="mt-4 text-display font-bold">Wilson Carvajal</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Ingeniero de día, creador desde 2012. Construyo sistemas que ordenan operaciones reales, y reviví un MMO.
          </p>
          <a
            href={DBO_DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent transition hover:border-accent"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> DBO Infinity ya está online
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}`} className="btn-primary">
              Escríbeme <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#trabajo" className="btn-ghost">Ver trabajo</a>
          </div>
        </div>
      </section>

      {/* FRANJA */}
      <section className="border-y border-border bg-card">
        <ul className="container grid grid-cols-2 gap-4 py-6 text-center text-sm font-semibold text-muted-foreground md:grid-cols-4">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* PROYECTO DESTACADO — DBO Infinity */}
      <section className="py-20">
        <div className="container">
          <motion.div {...fadeUp} className="rounded-2xl border border-accent/30 bg-card p-8 md:p-12">
            <Eyebrow className="text-accent">Proyecto propio</Eyebrow>
            <SectionTitle bar="bg-accent">
              <Gamepad2 className="mr-3 inline h-8 w-8 text-accent" />
              DBO Infinity
            </SectionTitle>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Servidor privado de Dragon Ball Online que diseño, programo y opero de punta a punta: servidor de juego,
              launcher, web y despliegue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={DBO_DOWNLOAD} target="_blank" rel="noopener noreferrer" className="btn-primary bg-accent hover:bg-accent/85">
                <Download className="h-4 w-4" /> Descargar gratis
              </a>
              <a href={DBO_SITE} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Ver sitio <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ HAGO */}
      <section id="trabajo" className="scroll-mt-16 py-20">
        <div className="container">
          <motion.div {...fadeUp}>
            <Eyebrow>Trabajo</Eyebrow>
            <SectionTitle>Qué hago</SectionTitle>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {work.map((w, i) => (
              <motion.div key={w.title} {...fadeUp} transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.12 }} className="rounded-2xl border border-border bg-card p-6">
                <w.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-16 py-20">
        <div className="container">
          <motion.div {...fadeUp}>
            <Eyebrow>Proyectos</Eyebrow>
            <SectionTitle>Más cosas que construyo</SectionTitle>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <motion.a key={p.title} {...fadeUp} href={p.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {p.label} <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="contenido" className="scroll-mt-16 py-20">
        <div className="container">
          <motion.div {...fadeUp}>
            <Eyebrow className="text-accent">Contenido</Eyebrow>
            <SectionTitle bar="bg-accent">Wizao</SectionTitle>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Hago videos en YouTube desde 2012 y publico música en Spotify y SoundCloud.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.filter((l) => l.social).map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-accent hover:text-foreground">
                  <l.icon className="h-5 w-5" />
                </a>
              ))}
              <a href="/links" className="btn-ghost py-2">Todos mis links <ArrowRight className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-16 py-20">
        <div className="container">
          <motion.div {...fadeUp} className="rounded-2xl border border-border bg-card px-8 py-16 text-center">
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="mt-3 text-heading font-bold">¿Conversamos?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Proyectos, colaboraciones, podcast o música. Respondo por correo.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn-primary mt-8">
              <Mail className="h-5 w-5" /> {EMAIL}
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © Wilson Carvajal · wizao.cl
      </footer>
    </div>
  );
}
