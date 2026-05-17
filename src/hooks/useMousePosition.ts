"use client";

import { useEffect, useRef, useState } from "react";

export function useMousePosition(smoothing = 0.08) {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const target = useRef({ x: 0.5, y: 0.5 });
  const frame = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (target.current.x - prev.x) * smoothing,
        y: prev.y + (target.current.y - prev.y) * smoothing,
      }));
      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, [smoothing]);

  return position;
}
