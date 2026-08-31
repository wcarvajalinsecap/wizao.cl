import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL } from "../lib/landings";

/**
 * CTA fijo en móvil (checklist SEO #21): WhatsApp + correo siempre visibles.
 */
export function FloatingWhatsApp() {
  return (
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
      <a
        href="mailto:hola@wizao.cl"
        aria-label="Enviar correo a Wilson"
        className="hidden items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-red-400/50 sm:flex sm:h-14 sm:w-14 sm:p-0"
      >
        <Mail size={22} />
      </a>
    </div>
  );
}
