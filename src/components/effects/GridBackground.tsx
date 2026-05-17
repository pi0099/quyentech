"use client";

import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <GridBackgroundRadial />
      <div className="absolute inset-0 noise-overlay opacity-40" />
    </div>
  );
}

function GridBackgroundRadial() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 217, 255, 0.12), transparent)",
      }}
    />
  );
}
