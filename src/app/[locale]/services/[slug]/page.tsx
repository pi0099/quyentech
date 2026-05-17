import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { isValidLocale, locales, serviceSlugs } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) return {};
  const dict = await getDictionary(raw);
  const data = dict.serviceDetail.pages[slug];
  if (!data) return { title: dict.servicesPage.metaTitle };
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const dict = await getDictionary(raw);
  if (!dict.serviceDetail.pages[slug]) notFound();

  return <ServiceDetailTemplate slug={slug} />;
}
