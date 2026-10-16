import { Youtube, Instagram, Twitter, Music2, Mic, Globe, Mail, type LucideIcon } from "lucide-react";

type IconComp = LucideIcon | ((p: { className?: string }) => JSX.Element);

export function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.6a2.9 2.9 0 1 1-2-2.7V9.4a6.3 6.3 0 1 0 5.4 6.2V8.7a8.2 8.2 0 0 0 3.8 1.2V6.7z" />
    </svg>
  );
}

export const EMAIL = "hola@wizao.cl";
export const DBO_DOWNLOAD = "https://dboinfinity.com/es/descargar";
export const DBO_SITE = "https://dboinfinity.com";
export const PODCAST = "https://www.youtube.com/playlist?list=PLEFHa-sTHvG2aDlqufBAD1mWdSTZdvxom";

// Orden decidido por el comité: el linkBio y el footer usan esta misma lista.
// ponytail: LinkedIn fuera hasta tener la URL real del perfil.
export const links: { label: string; href: string; icon: IconComp; social?: boolean }[] = [
  { label: "YouTube", href: "https://www.youtube.com/c/OWizao", icon: Youtube, social: true },
  { label: "TikTok", href: "https://www.tiktok.com/@owizao", icon: TikTokIcon, social: true },
  { label: "Instagram", href: "https://www.instagram.com/owizao/", icon: Instagram, social: true },
  { label: "Spotify", href: "https://open.spotify.com/artist/0InHZv430Rp7Y2AM42lGA0", icon: SpotifyIcon, social: true },
  { label: "SoundCloud", href: "https://soundcloud.com/wizao", icon: Music2, social: true },
  { label: "X", href: "https://x.com/Owizao", icon: Twitter, social: true },
  { label: "Podcast", href: PODCAST, icon: Mic },
  { label: "Web wizao.cl", href: "/", icon: Globe },
  { label: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
];
