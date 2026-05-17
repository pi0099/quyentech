"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SpaceCanvas } from "./SpaceCanvas";

export type AtmosphereIntensity = "hero" | "medium" | "subtle";

const MULTIPLIERS: Record<AtmosphereIntensity, number> = {
  hero: 1,
  medium: 0.55,
  subtle: 0.3,
};

type SpaceAtmosphereProps = {
  intensity?: AtmosphereIntensity;
  className?: string;
  paused?: boolean;
  enableStars?: boolean;
  enableMouseGlow?: boolean;
  children?: React.ReactNode;
};

export function SpaceAtmosphere({
  intensity = "hero",
  className,
  paused = false,
  enableStars = true,
  enableMouseGlow = true,
  children,
}: SpaceAtmosphereProps) {
  const mult = MULTIPLIERS[intensity];
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (reducedMotion || !enableMouseGlow) return;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    let raf = 0;
    const tick = () => {
      const el = glowRef.current;
      if (el) {
        const { x, y } = mouseRef.current;
        el.style.background = `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(0, 217, 255, ${0.06 * mult}), transparent 50%),
          radial-gradient(400px circle at ${x * 100}% ${y * 100}%, rgba(124, 58, 237, ${0.04 * mult}), transparent 45%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion, enableMouseGlow, mult]);

  const effectiveMult = reducedMotion ? mult * 0.4 : mult;
  const isPaused = paused || reducedMotion;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        "[contain:strict] [transform:translateZ(0)]",
        className
      )}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, rgba(15, 30, 60, 0.9) 0%, transparent 55%),
            radial-gradient(ellipse 80% 60% at 80% 100%, rgba(30, 20, 60, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 10% 80%, rgba(10, 40, 50, 0.25) 0%, transparent 45%),
            linear-gradient(180deg, #030510 0%, #050816 40%, #060a14 100%)
          `,
          opacity: effectiveMult,
        }}
      />

      <div
        className="absolute inset-0 space-grid-perspective"
        style={{ opacity: 0.35 * effectiveMult }}
      />

      <NebulaLayer intensity={effectiveMult} reducedMotion={reducedMotion || isPaused} />
      <PlanetSilhouettes intensity={effectiveMult} />

      {mounted && enableStars && (
        <SpaceCanvas
          intensity={effectiveMult}
          enableShootingStars={intensity !== "subtle" && !reducedMotion}
          paused={isPaused}
        />
      )}

      {!reducedMotion && enableMouseGlow && (
        <div ref={glowRef} className="absolute inset-0 pointer-events-none" />
      )}

      <div
        className="absolute inset-0 noise-overlay"
        style={{ opacity: 0.25 * effectiveMult }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(3, 5, 16, 0.5) 100%)",
          opacity: effectiveMult,
        }}
      />

      {children}
    </div>
  );
}

function NebulaLayer({
  intensity,
  reducedMotion,
}: {
  intensity: number;
  reducedMotion: boolean;
}) {
  return (
    <div className="absolute inset-0" style={{ opacity: intensity }}>
      <div
        className={cn(
          "absolute w-[70%] h-[50%] -top-[10%] left-[5%] rounded-full blur-[80px]",
          !reducedMotion && "animate-nebula-drift-1"
        )}
        style={{
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className={cn(
          "absolute w-[60%] h-[45%] top-[20%] -right-[15%] rounded-full blur-[90px]",
          !reducedMotion && "animate-nebula-drift-2"
        )}
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className={cn(
          "absolute w-[50%] h-[40%] bottom-[5%] left-[20%] rounded-full blur-[70px]",
          !reducedMotion && "animate-nebula-drift-3"
        )}
        style={{
          background: "radial-gradient(circle, rgba(0, 245, 160, 0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

function PlanetSilhouettes({ intensity }: { intensity: number }) {
  return (
    <>
      <div
        className="absolute -top-[35%] -right-[25%] w-[55%] aspect-square rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(0, 217, 255, 0.05) 0%, transparent 65%)",
          opacity: intensity * 0.9,
        }}
      />
      <div
        className="absolute -bottom-[40%] -left-[30%] w-[50%] aspect-square rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.04) 0%, transparent 60%)",
          opacity: intensity * 0.7,
        }}
      />
    </>
  );
}

/** Page background — CSS only (no star canvas) to avoid double GPU load */
export function SpacePageBackground() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#050816]" aria-hidden />
    );
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none [contain:strict]">
      <SpaceAtmosphere
        intensity="subtle"
        enableStars={false}
        enableMouseGlow={false}
        paused={false}
        className="!absolute fixed inset-0"
      />
    </div>
  );
}
