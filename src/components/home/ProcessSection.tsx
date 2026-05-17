"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Quy trình"
          title="Quy trình engineering hiện đại"
          description="Phương pháp làm việc minh bạch, lặp nhanh và tập trung vào kết quả kinh doanh."
        />

        <motion.div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative p-6 rounded-2xl glass group hover:border-cyan-500/20 transition-all duration-500"
              >
                <span className="font-display text-3xl font-bold gradient-text opacity-80">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
