"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { useTranslations } from "@/contexts/LocaleContext";

export function CTASection() {
  const t = useTranslations();

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <GlowOrb className="top-0 left-1/4" color="cyan" size="lg" />
      <GlowOrb className="bottom-0 right-1/4" color="purple" size="md" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t.cta.titleLine1}{" "}
            <span className="gradient-text">{t.cta.titleHighlight}</span> {t.cta.titleLine2}
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">{t.cta.description}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              {t.cta.primary}
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              {t.cta.secondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
