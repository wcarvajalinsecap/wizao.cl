import { useEffect } from "react";

/**
 * Hook para SEO por página en SPA: título, meta description, canonical,
 * Open Graph y JSON-LD dinámicos. (Checklist SEO #1-4, #13)
 */
export function usePageMeta(opts: {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object;
}) {
  useEffect(() => {
    document.title = opts.title;

    const setMeta = (selector: string, attr: string, value: string, create: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", opts.description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    setMeta('link[rel="canonical"]', "href", opts.canonical, () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    setMeta('meta[property="og:title"]', "content", opts.title, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });
    setMeta('meta[property="og:description"]', "content", opts.description, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });
    setMeta('meta[property="og:url"]', "content", opts.canonical, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });

    // JSON-LD específico de la página (Service + FAQPage + BreadcrumbList)
    let ld = document.getElementById("page-jsonld") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.setAttribute("type", "application/ld+json");
      ld.id = "page-jsonld";
      document.head.appendChild(ld);
    }
    ld.textContent = opts.jsonLd ? JSON.stringify(opts.jsonLd) : "";
  }, [opts.title, opts.description, opts.canonical, opts.jsonLd]);
}
