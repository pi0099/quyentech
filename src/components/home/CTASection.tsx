"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/effects/GlowOrb";

export function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <GlowOrb className="top-0 left-1/4" color="cyan" size="lg" />
      <GlowOrb className="bottom-0 right-1/4" color="purple" size="md" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sẵn sàng xây dựng{" "}
            <span className="gradient-text">hệ thống số</span> của bạn?
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Hãy cùng QuyenTech biến tầm nhìn công nghệ thành hiện thực — từ ý tưởng đến triển khai
            production.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Liên hệ ngay
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Khám phá dịch vụ
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
