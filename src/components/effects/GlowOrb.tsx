"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowOrbProps = {
  className?: string;
  color?: "cyan" | "blue" | "purple";
  size?: "sm" | "md" | "lg";
};

const colors = {
  cyan: "bg-cyan-500/30",
  blue: "bg-blue-500/25",
  purple: "bg-purple-600/25",
};

const sizes = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[32rem] h-[32rem]",
};

export function GlowOrb({ className, color = "cyan", size = "md" }: GlowOrbProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-[100px] pointer-events-none",
        colors[color],
        sizes[size],
        className
      )}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
