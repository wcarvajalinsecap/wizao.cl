import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: number;
  className?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

/**
 * Contador animado estilo LandingInsecap — arranca al entrar en viewport.
 */
export function NumberTicker({ value, className = "", suffix = "", duration = 2.2, delay = 0 }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animate(motionValue, value, { duration, ease: "easeOut" });
        return () => controls.stop();
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0,
        }).format(Number(latest.toFixed(0)));
      }
    });
    return unsub;
  }, [springValue]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
