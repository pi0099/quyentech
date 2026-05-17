import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { Check } from "lucide-react";

type ServiceDetailTemplateProps = {
  title: string;
  titleEn: string;
  description: string;
  features: string[];
  benefits: string[];
};

export function ServiceDetailTemplate({
  title,
  titleEn,
  description,
  features,
  benefits,
}: ServiceDetailTemplateProps) {
  return (
    <PageShell>
      <PageHero label={titleEn} title={title} description={description} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ServiceDetailCard title="Dịch vụ bao gồm" items={features} />
          <ServiceDetailCard title="Lợi ích" items={benefits} />
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <Button href="/contact" variant="primary" size="lg">
            Nhận tư vấn miễn phí
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
