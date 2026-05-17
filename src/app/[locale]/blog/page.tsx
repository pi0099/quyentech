import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { BlogPostList } from "@/components/blog/BlogPostList";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.blogPage.metaTitle,
    description: dict.blogPage.metaDescription,
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const t = await getDictionary(raw);

  return (
    <PageShell>
      <PageHero
        label={t.blogPage.label}
        title={t.blogPage.title}
        description={t.blogPage.description}
      />
      <BlogPostList />
    </PageShell>
  );
}
