"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SIZE = 200;

export function HeroLogoMark() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.2)_0%,rgba(0,245,160,0.08)_45%,transparent_70%)] blur-2xl animate-pulse-glow pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 size-full rounded-full overflow-hidden bg-black">
        <Image
          src="/hero-logo.png"
          alt="QuyenTech"
          fill
          sizes={`${SIZE}px`}
          className="object-cover object-center select-none drop-shadow-[0_0_28px_rgba(0,217,255,0.45)] drop-shadow-[0_0_56px_rgba(0,245,160,0.2)]"
          priority
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
