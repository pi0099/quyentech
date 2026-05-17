"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { useTranslations } from "@/contexts/LocaleContext";
import { Check } from "lucide-react";

type ServiceDetailTemplateProps = {
  slug: string;
};

export function ServiceDetailTemplate({ slug }: ServiceDetailTemplateProps) {
  const t = useTranslations();
  const data = t.serviceDetail.pages[slug];
  if (!data) return null;

  return (
    <PageShell>
      <PageHero label={data.subtitle} title={data.title} description={data.description} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ServiceDetailCard title={t.serviceDetail.includes} items={data.features} />
          <ServiceDetailCard title={t.serviceDetail.benefits} items={data.benefits} />
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <Button href="/contact" variant="primary" size="lg">
            {t.serviceDetail.cta}
          </Button>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

function ServiceDetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-8 rounded-2xl glass glow-border">
      <h2 className="font-display text-2xl font-bold text-white mb-6">{title}</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-400">
            <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
