"use client";

import Image from "next/image";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { HeroLogoMark } from "@/components/brand/HeroLogoMark";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "navbar" | "hero" | "footer";
  showText?: boolean;
  className?: string;
};

export function Logo({ variant = "navbar", showText = true, className }: LogoProps) {
  if (variant === "hero") {
    return (
      <LocalizedLink
        href="/"
        className={cn("group flex flex-col items-center transition-opacity hover:opacity-95", className)}
      >
        <HeroLogoMark />
        {showText && (
          <span className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
            Quyen<span className="gradient-text">Tech</span>
          </span>
        )}
      </LocalizedLink>
    );
  }

  const img = variant === "navbar" ? 40 : 36;
  const text = variant === "navbar" ? "text-lg" : "text-base";

  return (
    <LocalizedLink
      href="/"
      className={cn(
        "group flex items-center gap-3 transition-opacity hover:opacity-90",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="QuyenTech"
        width={img}
        height={img}
        className={cn(
          "object-contain transition-all duration-500",
          variant === "navbar" && "drop-shadow-[0_0_20px_rgba(0,217,255,0.25)]",
          variant === "footer" && "opacity-90"
        )}
        priority={variant === "navbar"}
      />
      {showText && (
        <span className={cn("font-display font-semibold tracking-tight text-white", text)}>
          Quyen<span className="gradient-text">Tech</span>
        </span>
      )}
    </LocalizedLink>
  );
}
