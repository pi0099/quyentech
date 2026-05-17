import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { locales, type Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: {
      default: dict.meta.defaultTitle,
      template: dict.meta.template,
    },
    description: dict.meta.defaultDescription,
    openGraph: {
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      locale: raw === "vi" ? "vi_VN" : "en_US",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();

  const dict = await getDictionary(raw);

  return <LocaleProvider locale={raw as Locale} dict={dict}>{children}</LocaleProvider>;
}
