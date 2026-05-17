"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyItems } from "@/lib/constants";

function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    setDisplay(value);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold gradient-text">
      {display}
    </span>
  );
}

export function WhySection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Tại sao QuyenTech"
          title="Kỹ thuật đáng tin cậy, kết quả đo lường được"
          description="Chúng tôi kết hợp tư duy kỹ sư với hiểu biết thị trường Việt Nam để mang lại giá trị dài hạn."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative p-6 rounded-2xl glass group hover:border-cyan-500/20 transition-colors duration-500"
            >
              <AnimatedMetric value={item.metric} />
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{item.metricLabel}</p>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.description}</p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
