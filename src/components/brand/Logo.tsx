"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "navbar" | "hero" | "footer";
  showText?: boolean;
  className?: string;
};

const HERO_LOGO_WIDTH = 176;
const HERO_LOGO_HEIGHT = Math.round(HERO_LOGO_WIDTH * (1024 / 1019));

export function Logo({ variant = "navbar", showText = true, className }: LogoProps) {
  if (variant === "hero") {
    return (
      <LocalizedLink
        href="/"
        className={cn("group flex flex-col items-center transition-opacity hover:opacity-95", className)}
      >
        <HeroCircularLogo />
        {showText && (
          <span className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
            Quyen<span className="gradient-text">Tech</span>
          </span>
        )}
      </LocalizedLink>
    );
  }

  const img = variant === "navbar" ? 40 : 36;
  const text = variant === "navbar" ? "text-lg" : "text-base";

  return (
    <LocalizedLink
      href="/"
      className={cn(
        "group flex items-center gap-3 transition-opacity hover:opacity-90",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="QuyenTech"
        width={img}
        height={img}
        className={cn(
          "object-contain transition-all duration-500",
          variant === "navbar" && "drop-shadow-[0_0_20px_rgba(0,217,255,0.25)]",
          variant === "footer" && "opacity-90"
        )}
        priority={variant === "navbar"}
      />
      {showText && (
        <span className={cn("font-display font-semibold tracking-tight text-white", text)}>
          Quyen<span className="gradient-text">Tech</span>
        </span>
      )}
    </LocalizedLink>
  );
}

function HeroCircularLogo() {
  const glowSize = 156;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      style={{ width: HERO_LOGO_WIDTH, minHeight: HERO_LOGO_HEIGHT }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Pulsing halo on the circular Q */}
      <motion.div
        className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: glowSize, height: glowSize }}
        animate={{ opacity: [0.45, 0.82, 0.45], scale: [1, 1.07, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.38)_0%,rgba(0,217,255,0.16)_48%,transparent_70%)] blur-2xl" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none ring-1 ring-cyan-400/25"
        style={{
          width: glowSize - 8,
          height: glowSize - 8,
          boxShadow:
            "0 0 36px rgba(0, 217, 255, 0.42), 0 0 72px rgba(0, 245, 160, 0.2)",
        }}
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
        <Image
          src="/hero-logo.png"
          alt="QuyenTech"
          width={HERO_LOGO_WIDTH}
          height={HERO_LOGO_HEIGHT}
          className="relative z-10 h-auto w-full object-contain drop-shadow-[0_0_32px_rgba(0,217,255,0.5)] drop-shadow-[0_0_64px_rgba(0,245,160,0.25)]"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
