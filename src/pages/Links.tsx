import { motion, useReducedMotion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { links, DBO_DOWNLOAD } from "../lib/site";
import { usePageMeta } from "../lib/usePageMeta";

export default function Links() {
  const reduce = useReducedMotion();
  usePageMeta({
    title: "Wizao · Links",
    description: "Todos los links de Wilson Carvajal (Wizao): DBO Infinity, YouTube, música, podcast y contacto.",
    canonical: "https://wizao.cl/links",
  });

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: reduce ? 0 : 0.05 * i },
  });

  return (
    <main className="min-h-screen bg-background px-4 py-14">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <motion.div {...item(0)} className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-card text-3xl font-bold">
            W
          </div>
          <h1 className="mt-4 text-xl font-bold">Wilson Carvajal · Wizao</h1>
          <p className="mt-1 text-sm text-muted-foreground">Ingeniero · Creador desde 2012</p>
        </motion.div>

        <ul className="mt-8 flex w-full flex-col gap-3">
          <motion.li {...item(1)}>
            <a href={DBO_DOWNLOAD} target="_blank" rel="noopener noreferrer" className="btn-link min-h-16 py-3 border-transparent bg-dbo-gi text-dbo-night shadow-[0_8px_30px_-6px_oklch(0.72_0.19_50/0.6)] hover:brightness-110">
              <Download className="h-5 w-5 shrink-0" />
              <span className="flex flex-1 flex-col text-left leading-tight">
                <span className="font-bold">Descargar DBO Infinity</span>
                <span className="text-xs font-medium opacity-85">Dragon Ball Online · PC · gratis</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-dbo-night/15 px-2.5 py-1 text-xs font-semibold">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-600" /> Online
              </span>
            </a>
          </motion.li>
          {links.map((l, i) => (
            <motion.li key={l.href} {...item(i + 2)}>
              <a
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn-link min-h-[52px] py-3 bg-card hover:border-primary"
              >
                <l.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="flex-1 text-left font-semibold">{l.label}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </a>
            </motion.li>
          ))}
        </ul>

        <p className="mt-10 text-xs text-muted-foreground">© Wilson Carvajal · wizao.cl</p>
      </div>
    </main>
  );
}
