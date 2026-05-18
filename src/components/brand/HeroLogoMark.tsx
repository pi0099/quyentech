"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** Original asset aspect — no crop, no scale tricks */
const LOGO_W = 188;
const LOGO_H = Math.round(LOGO_W * (1024 / 1019));

export function HeroLogoMark() {
  return (
    <motion.div
      className="relative inline-block"
      style={{ width: LOGO_W, height: LOGO_H }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <SolarCoronaGlow />
      <Image
        src="/hero-logo.png"
        alt="QuyenTech"
        width={LOGO_W}
        height={LOGO_H}
        className="relative z-10 block h-full w-full object-contain select-none"
        priority
        draggable={false}
      />
    </motion.div>
  );
}

/** Fire-like corona around the entire logo image bounds */
function SolarCoronaGlow() {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ width: "142%", height: "138%" }}
      aria-hidden
    >
      {/* Core solar disk glow */}
      <motion.div
        className="absolute inset-0 hero-solar-core"
        animate={{
          scale: [1, 1.06, 1.02, 1.08, 1],
          opacity: [0.55, 0.88, 0.65, 0.92, 0.55],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating flame tongues (conic corona) */}
      <motion.div
        className="absolute inset-[-6%] hero-solar-flame"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[-4%] hero-solar-flame hero-solar-flame--reverse"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* Flickering outer fire */}
      <motion.div
        className="absolute inset-[-10%] hero-solar-outer"
        animate={{
          scale: [1, 1.1, 1.03, 1.12, 1],
          opacity: [0.35, 0.65, 0.45, 0.7, 0.35],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
