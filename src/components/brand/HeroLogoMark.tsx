"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const SIZE = 200;

export function HeroLogoMark() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <SolarFlareRays size={SIZE} reducedMotion={!!reduceMotion} />

      <div className="relative z-10 size-full rounded-full overflow-hidden bg-black shadow-[0_0_1px_rgba(255,200,100,0.3)]">
        <Image
          src="/hero-logo.png"
          alt="QuyenTech"
          fill
          sizes={`${SIZE}px`}
          className="object-cover object-center select-none"
          priority
          draggable={false}
        />
      </div>

      {/* Rim highlight on circular edge */}
      <div
        className="absolute inset-0 z-20 rounded-full pointer-events-none ring-1 ring-amber-300/15"
        style={{
          boxShadow:
            "inset 0 0 24px rgba(255, 180, 60, 0.12), 0 0 12px rgba(255, 140, 0, 0.15)",
        }}
        aria-hidden
      />
    </motion.div>
  );
}

function SolarFlareRays({
  size,
  reducedMotion,
}: {
  size: number;
  reducedMotion: boolean;
}) {
  const layer = size * 1.55;

  return (
    <>
      <motion.div
        className="absolute left-1/2 top-1/2 pointer-events-none"
        style={{ width: layer, height: layer, marginLeft: -layer / 2, marginTop: -layer / 2 }}
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={reducedMotion ? undefined : { duration: 36, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <div className="absolute inset-0 hero-sun-rays" />
        <motion.div
          className="absolute inset-0 hero-sun-rays hero-sun-rays--warm"
          animate={reducedMotion ? undefined : { opacity: [0.35, 0.85, 0.4, 0.9, 0.35] }}
          transition={
            reducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 pointer-events-none"
        style={{ width: layer * 1.08, height: layer * 1.08, marginLeft: -(layer * 1.08) / 2, marginTop: -(layer * 1.08) / 2 }}
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={reducedMotion ? undefined : { duration: 52, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <div className="absolute inset-0 hero-sun-rays hero-sun-rays--fine" />
      </motion.div>
    </>
  );
}
