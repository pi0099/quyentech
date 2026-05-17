import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { services } from "@/lib/constants";
import { ArrowUpRight, Code2, Globe, Search, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Dịch vụ công nghệ toàn diện — phần mềm, website, SEO và AI automation.",
};

const icons = { code: Code2, globe: Globe, search: Search, brain: Brain };

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        label="Dịch vụ"
        title="Giải pháp công nghệ cho doanh nghiệp"
        description="Từ phát triển phần mềm đến SEO và AI — QuyenTech đồng hành xây dựng hệ thống số bền vững."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Link
                key={service.slug}
                href={service.href}
                className="group p-8 rounded-2xl glass glow-border hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-1 text-sm text-cyan-500/70">{service.titleEn}</p>
                <p className="mt-4 text-slate-400">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
