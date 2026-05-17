import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog công nghệ — engineering, SEO, AI và best practices cho doanh nghiệp.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        label="Blog"
        title="Insights từ đội ngũ kỹ sư"
        description="Chia sẻ kiến thức về phát triển phần mềm, SEO, AI và xu hướng công nghệ."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
              <BlogPostMeta date={post.date} readTime={post.readTime} slug={post.slug} />
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function BlogPostMeta({
  date,
  readTime,
  slug,
}: {
  date: string;
  readTime: string;
  slug: string;
}) {
  return (
    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
      <span className="text-xs text-slate-500">
        {date} · {readTime}
      </span>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
      >
        Đọc thêm <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
