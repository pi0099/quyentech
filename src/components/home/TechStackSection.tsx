"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { techStack } from "@/lib/constants";

export function TechStackSection() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeader
          label="Công nghệ"
          title="Stack hiện đại, đã được chứng minh"
          description="Chúng tôi sử dụng công nghệ hàng đầu để xây dựng hệ thống bền vững và hiệu năng cao."
        />
      </div>
      <div className="relative">
        <TechStackFade side="left" />
        <TechStackFade side="right" />
        <div className="flex animate-marquee">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-3 px-6 py-3 rounded-full glass text-sm font-medium text-slate-300 whitespace-nowrap border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackFade({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={
        side === "left"
          ? "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none"
          : "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none"
      }
    />
  );
}
