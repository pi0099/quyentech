import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localizedPath } from "@/lib/i18n-nav";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const dict = await getDictionary("vi");
  return locales.flatMap((locale) =>
    dict.blogPage.posts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) return {};
  const dict = await getDictionary(raw);
  const post = dict.blogPage.posts.find((p) => p.slug === slug);
  if (!post) return { title: dict.blogPage.metaTitle };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const post = dict.blogPage.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href={localizedPath(locale, "/blog")}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> {dict.blogPage.back}
          </Link>
          <span className="text-xs font-medium text-cyan-500/80 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            {post.date} · {post.readTime}
          </p>
          <div className="mt-10 prose prose-invert prose-slate max-w-none">
            <p className="text-lg text-slate-400 leading-relaxed">{post.excerpt}</p>
            <p className="mt-6 text-slate-400 leading-relaxed">{dict.blogPage.placeholder}</p>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
