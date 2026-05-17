"use client";

import { useEffect, useRef, useState } from "react";

export function useThrottledScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);
  const lastValue = useRef(false);

  useEffect(() => {
    const update = () => {
      const next = window.scrollY > threshold;
      if (next !== lastValue.current) {
        lastValue.current = next;
        setScrolled(next);
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
