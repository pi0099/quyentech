"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { useTranslations } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

function ProjectMockup({ gradient }: { gradient: string }) {
  return (
    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0a0f1f]">
      <div className="absolute inset-0 p-4 flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2 mt-2">
          <div className="col-span-1 space-y-2">
            <div className="h-2 bg-white/10 rounded w-full" />
            <div className="h-2 bg-white/5 rounded w-3/4" />
            <div className="h-2 bg-white/5 rounded w-1/2" />
            <div className="h-16 bg-cyan-500/10 rounded-lg mt-4 border border-cyan-500/20" />
          </div>
          <div className="col-span-2 space-y-2">
            <div className="h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-white/5" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 bg-white/5 rounded-lg" />
              <div className="h-12 bg-white/5 rounded-lg" />
            </div>
            <div className="h-24 bg-white/5 rounded-lg" />
          </div>
        </div>
      </div>
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40", gradient)} />
    </div>
  );
}

export function ProjectsSection() {
  const t = useTranslations();

  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mt-16 space-y-8">
          {t.projects.items.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={cn(
                "group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 lg:p-10 rounded-3xl glass",
                i % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <ProjectMockup gradient={project.gradient} />
              </div>
              <div className={cn(i % 2 === 1 && "lg:order-1")}>
                <span className="text-sm text-cyan-500/80 font-medium">{project.category}</span>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-50 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <LocalizedLink
                  href="/portfolio"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {t.projects.viewDetail} <ExternalLink className="w-4 h-4" />
                </LocalizedLink>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="secondary" size="lg">
            {t.projects.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
