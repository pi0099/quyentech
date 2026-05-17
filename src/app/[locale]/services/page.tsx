import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.servicesPage.metaTitle,
    description: dict.servicesPage.metaDescription,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const t = await getDictionary(raw as Locale);

  return (
    <PageShell>
      <PageHero
        label={t.servicesPage.label}
        title={t.servicesPage.title}
        description={t.servicesPage.description}
      />
      <ServicesGrid />
      <CTASection />
    </PageShell>
  );
}
