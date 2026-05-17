import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { CTASection } from "@/components/home/CTASection";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.portfolioPage.metaTitle,
    description: dict.portfolioPage.metaDescription,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const t = await getDictionary(raw);

  return (
    <PageShell>
      <PageHero
        label={t.portfolioPage.label}
        title={t.portfolioPage.title}
        description={t.portfolioPage.description}
      />
      <ProjectsSection />
      <CTASection />
    </PageShell>
  );
}
