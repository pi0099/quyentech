"use client";

import { ArrowRight } from "lucide-react";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { useTranslations } from "@/contexts/LocaleContext";

export function BlogPostList() {
  const t = useTranslations();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.blogPage.posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col p-6 rounded-2xl glass glow-border hover:bg-white/[0.03] transition-all duration-500"
          >
            <span className="text-xs font-medium text-cyan-500/80 uppercase tracking-wider">
              {post.category}
            </span>
            <h2 className="mt-3 font-display text-xl font-semibold text-white group-hover:text-cyan-50 transition-colors">
              {post.title}
            </h2>
            <p className="mt-3 text-sm text-slate-400 flex-1 leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {post.date} · {post.readTime}
              </span>
              <LocalizedLink
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
              >
                {t.blogPage.readMore} <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
