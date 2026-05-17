"use client";

import { motion } from "framer-motion";
import { SpaceAtmosphere } from "@/components/effects/space/SpaceAtmosphere";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <SpaceAtmosphere intensity="medium" enableMouseGlow={false} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {label && (
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-cyan-400/90 glass">
              {label}
            </span>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
