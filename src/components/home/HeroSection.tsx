"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { SpaceAtmosphere } from "@/components/effects/space/SpaceAtmosphere";
import { HeroNetwork } from "@/components/effects/HeroNetwork";
import { useTranslations } from "@/contexts/LocaleContext";
import { useInView } from "@/hooks/useInView";

export function HeroSection() {
  const t = useTranslations();
  const { ref, inView } = useInView<HTMLElement>("200px");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      <div
        className="absolute inset-0 [contain:strict] [transform:translateZ(0)]"
        style={{ visibility: inView ? "visible" : "hidden" }}
      >
        <SpaceAtmosphere intensity="hero" paused={!inView} enableMouseGlow={false} />
        {inView && (
          <div className="absolute inset-0 opacity-30">
            <HeroNetwork />
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <Logo variant="hero" showText={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan-400/90 mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.05]"
          >
            {t.hero.titleLine1}{" "}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
            <br />
            {t.hero.titleLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
