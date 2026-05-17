"use client";

import Image from "next/image";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "navbar" | "hero" | "footer";
  showText?: boolean;
  className?: string;
};

export function Logo({ variant = "navbar", showText = true, className }: LogoProps) {
  const sizes = {
    navbar: { img: 40, text: "text-lg" },
    hero: { img: 140, text: "text-2xl" },
    footer: { img: 36, text: "text-base" },
  };

  const { img, text } = sizes[variant];

  const image = (
    <Image
      src="/logo.png"
      alt="QuyenTech"
      width={img}
      height={img}
      className={cn(
        "object-contain transition-all duration-500",
        variant === "hero" &&
          "drop-shadow-[0_0_40px_rgba(0,217,255,0.35)] group-hover:drop-shadow-[0_0_60px_rgba(0,245,160,0.45)]",
        variant === "navbar" && "drop-shadow-[0_0_20px_rgba(0,217,255,0.25)]",
        variant === "footer" && "opacity-90"
      )}
      priority={variant === "hero" || variant === "navbar"}
    />
  );

  return (
    <LocalizedLink
      href="/"
      className={cn(
        "group flex items-center gap-3 transition-opacity hover:opacity-90",
        className
      )}
    >
      {variant === "hero" ? (
        <div className="relative">
          <LogoRing />
          {image}
        </div>
      ) : (
        image
      )}
      {showText && (
        <span
          className={cn(
            "font-display font-semibold tracking-tight text-white",
            text,
            variant === "hero" && "hidden sm:inline"
          )}
        >
          Quyen<span className="gradient-text">Tech</span>
        </span>
      )}
    </LocalizedLink>
  );
}

function LogoRing() {
  return (
    <div
      className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse-glow pointer-events-none"
      aria-hidden
    />
  );
}
