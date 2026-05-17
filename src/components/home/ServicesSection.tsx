"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Search, Brain, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { useTranslations } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

const icons = {
  code: Code2,
  globe: Globe,
  search: Search,
  brain: Brain,
};

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label={t.services.label}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <LocalizedLink href={service.href} className="group block h-full">
                  <div
                    className={cn(
                      "relative h-full p-8 rounded-2xl glass glow-border",
                      "transition-all duration-500 hover:bg-white/[0.04]",
                      "hover:shadow-[0_0_40px_rgba(0,217,255,0.08)]"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-white group-hover:text-cyan-50 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-cyan-500/70 font-medium">{service.subtitle}</p>
                    <p className="mt-4 text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </LocalizedLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
