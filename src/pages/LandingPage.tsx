import { Navigate, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Mail,
  ChevronRight,
  Home,
} from "lucide-react";
import { getLanding, landings, WHATSAPP_URL, SITE_URL } from "../lib/landings";
import { usePageMeta } from "../lib/usePageMeta";

/**
 * Página de aterrizaje por servicio/keyword (checklist SEO #1-13).
 * URL: /servicios/:slug — data-driven desde landings.ts
 */
export default function LandingPage({ slug }: { slug: string }) {
  const page = getLanding(slug);

  // JSON-LD por página: Service + FAQPage + BreadcrumbList (checklist #13)
  const jsonLd = page
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: page.h1,
            description: page.metaDescription,
            url: `${SITE_URL}/servicios/${page.slug}`,
            provider: {
              "@type": "Person",
              name: "Wilson Carvajal Rozas (Wizao)",
              url: SITE_URL,
              email: "mailto:hola@wizao.cl",
            },
            areaServed: [
              { "@type": "Country", name: "Chile" },
              { "@type": "City", name: "Antofagasta" },
              { "@type": "City", name: "Calama" },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: page.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
              {
                "@type": "ListItem",
                position: 2,
                name: page.h1,
                item: `${SITE_URL}/servicios/${page.slug}`,
              },
            ],
          },
        ],
      }
    : undefined;

  usePageMeta({
    title: page ? page.title : "Wizao — Wilson Carvajal",
    description: page ? page.metaDescription : "Soluciones de software en Chile.",
    canonical: page ? `${SITE_URL}/servicios/${page.slug}` : SITE_URL,
    jsonLd,
  });

  if (!page) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV mínima */}
      <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-1 text-lg font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent">wizao</span>
            <span className="font-normal text-muted-foreground">.cl</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <Link to="/#ingeniero" className="transition-colors hover:text-foreground">Ingeniero</Link>
            <Link to="/#emprendedor" className="transition-colors hover:text-foreground">Emprendedor</Link>
            <Link to="/#contacto" className="transition-colors hover:text-foreground">Contacto</Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-red-500 to-violet-500 px-5 py-2 font-semibold text-white shadow-cta transition hover:brightness-110"
            >
              Hablemos
            </a>
          </nav>
        </div>
      </header>

      {/* Breadcrumb (checklist #18 URLs limpias + UX) */}
      <div className="container pt-24">
        <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground">
            <Home className="h-3.5 w-3.5" /> Inicio
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{page.h1}</span>
        </nav>
      </div>

      {/* HERO — H1 + intro + CTA tras primer párrafo (#4, #8) */}
      <section className="relative overflow-hidden bg-[#0d0b1a] text-white">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-red-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="container relative py-16 md:py-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-red-400">{page.tag}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300 md:text-xl">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-cta transition hover:brightness-110"
            >
              {page.ctaText} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hola@wizao.cl"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold backdrop-blur-sm transition hover:border-red-400/50"
            >
              <Mail className="h-4 w-4" /> hola@wizao.cl
            </a>
          </div>
        </div>
      </section>

      {/* TL;DR — Key takeaways (#6, #7) */}
      <section className="border-y border-border/60 bg-card/60">
        <div className="container py-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-violet-400">
            TL;DR — En resumen
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {page.tldr.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUÉ INCLUYE — tarjetas (#9, #10) */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Qué incluye</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.includes.map((inc) => (
              <div
                key={inc.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-hover"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{inc.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{inc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA — SEO local visible (#16) */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container py-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-red-400">Cobertura</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {page.coverage.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                <MapPin className="h-3.5 w-3.5 text-violet-400" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — preguntas reales (#12) */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8 space-y-3">
            {page.faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5 open:shadow-card"
              >
                <summary className="cursor-pointer list-none font-semibold transition-colors group-open:text-red-400">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SERVICIOS — interlinkeo clúster (#10) */}
      <section className="border-t border-border/60 bg-card/40 py-14">
        <div className="container">
          <h2 className="text-2xl font-extrabold tracking-tight">Otros servicios</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {landings
              .filter((l) => l.slug !== page.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  to={`/servicios/${l.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-red-400/50 hover:text-foreground"
                >
                  {l.h1} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#150d24] via-[#3b0d1a] to-[#1e1035] px-8 py-14 text-center text-white">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/20 blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">¿Hablamos de tu proyecto?</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-300">
                Escríbeme por WhatsApp o al correo — respondo directo, sin intermediarios.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-violet-500 px-8 py-4 text-lg font-bold text-white shadow-cta transition hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" /> {page.ctaText}
                </a>
                <a
                  href="mailto:hola@wizao.cl"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:border-red-400/50"
                >
                  <Mail className="h-5 w-5" /> hola@wizao.cl
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#0d0b1a] via-[#2d0a12] to-[#1e1035] py-8 text-center text-sm text-slate-400">
        <div className="container">
          <p>
            <Link to="/" className="hover:text-red-400">wizao.cl</Link> — Wilson Carvajal Rozas ·{" "}
            <a href="mailto:hola@wizao.cl" className="hover:text-violet-400">hola@wizao.cl</a>
          </p>
        </div>
      </footer>

      {/* CTA fijo móvil (#21) */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-end gap-3 p-4 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:p-0">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp a Wilson"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-violet-500 px-5 py-3.5 font-bold text-white shadow-cta transition hover:brightness-110 sm:h-14 sm:w-14 sm:flex-none sm:p-0"
        >
          <MessageCircle size={24} />
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
