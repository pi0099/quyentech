"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
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
        <HeroCircularLogo />
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

function HeroCircularLogo() {
  const qSize = 148;
  const markWidth = 160;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow behind circular Q */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{ width: qSize + 56, height: qSize + 56 }}
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <motion.div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.35)_0%,rgba(0,217,255,0.15)_45%,transparent_68%)] blur-2xl" />
      </motion.div>

      <motion.div
        className="relative rounded-full"
        style={{ width: qSize, height: qSize }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <div
          className="absolute -inset-3 rounded-full blur-md pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,245,160,0.45) 0%, rgba(0,217,255,0.25) 50%, transparent 72%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-cyan-400/30"
          style={{
            boxShadow:
              "0 0 32px rgba(0, 217, 255, 0.45), 0 0 64px rgba(0, 245, 160, 0.22)",
          }}
          aria-hidden
        />
        <div className="relative size-full overflow-hidden rounded-full">
          <Image
            src="/hero-logo.png"
            alt=""
            fill
            sizes={`${qSize}px`}
            className="object-cover object-[center_18%] scale-[1.28]"
            priority
          />
        </div>
      </motion.div>

      {/* UYEN wordmark crop */}
      <div className="relative mt-4 w-[132px] h-9 overflow-hidden">
        <Image
          src="/hero-logo.png"
          alt="QuyenTech"
          fill
          sizes={`${markWidth}px`}
          className="object-cover object-[50%_94%] scale-[3.35]"
          priority
        />
      </div>
    </motion.div>
  );
}
