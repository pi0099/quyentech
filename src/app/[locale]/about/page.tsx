import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const t = await getDictionary(raw as Locale);

  return (
    <PageShell>
      <PageHero label={t.about.label} title={t.about.title} description={t.about.description} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">{t.about.missionTitle}</h2>
              <p className="mt-6 text-slate-400 leading-relaxed">{t.about.missionP1}</p>
              <p className="mt-4 text-slate-400 leading-relaxed">{t.about.missionP2}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((s) => (
                <div key={s.l} className="p-6 rounded-2xl glass text-center">
                  <p className="font-display text-3xl font-bold gradient-text">{s.n}</p>
                  <p className="mt-2 text-sm text-slate-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
              {t.about.valuesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.about.values.map((v) => (
                <div key={v.title} className="p-8 rounded-2xl glass glow-border">
                  <h3 className="font-display text-xl font-semibold text-white">{v.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
