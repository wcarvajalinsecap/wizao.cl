/**
 * Separador de ondas entre secciones — patrón de LandingInsecap con paleta Wizao.
 * Rojo + morado sobre negro.
 */
const WaveDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full pointer-events-none ${className}`}>
    <svg
      className="block w-full h-[70px] sm:h-[100px]"
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0,80 C240,30 480,110 720,70 C960,30 1200,100 1440,55 L1440,150 L0,150 Z"
        fill="#ef4444"
        opacity="0.5"
      />
      <path
        d="M0,105 C300,55 600,125 900,85 C1120,58 1320,105 1440,80 L1440,150 L0,150 Z"
        fill="#8b5cf6"
        opacity="0.4"
      />
      <path
        d="M0,125 C320,85 720,140 1080,105 C1260,88 1380,115 1440,100 L1440,150 L0,150 Z"
        fill="#0d0b1a"
      />
    </svg>
  </div>
);

export default WaveDivider;
