"use client";

import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <PageHero
        label="Liên hệ"
        title="Bắt đầu dự án của bạn"
        description="Chia sẻ ý tưởng — chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">Thông tin liên hệ</h2>
              <p className="mt-4 text-slate-400">
                Sẵn sàng tư vấn miễn phí về dự án phần mềm, website, SEO hoặc AI.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-cyan-400">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Điện thoại</p>
                  <p className="text-white">{siteConfig.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Địa chỉ</p>
                  <p className="text-white">{siteConfig.address}</p>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 rounded-2xl glass glow-border space-y-6"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-display text-xl font-semibold text-white">Cảm ơn bạn!</p>
                <p className="mt-2 text-slate-400">Chúng tôi sẽ liên hệ sớm nhất có thể.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="text-sm text-slate-400">Họ tên</span>
                    <input
                      required
                      name="name"
                      className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="Nguyễn Văn A"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-slate-400">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="email@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm text-slate-400">Công ty</span>
                  <input
                    name="company"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="Tên công ty"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-400">Dịch vụ quan tâm</span>
                  <select
                    name="service"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    <option value="software">Phát triển phần mềm</option>
                    <option value="website">Website</option>
                    <option value="seo">SEO</option>
                    <option value="ai">AI & Automation</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm text-slate-400">Mô tả dự án</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    placeholder="Mô tả ngắn về dự án của bạn..."
                  />
                </label>
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Gửi yêu cầu <Send className="ml-2 w-4 h-4 inline" />
                </Button>
              </>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
