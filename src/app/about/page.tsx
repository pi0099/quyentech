import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "QuyenTech — đội ngũ kỹ sư và designer xây dựng hệ thống số cao cấp cho doanh nghiệp Việt Nam.",
};

const values = [
  {
    title: "Engineering-first",
    description:
      "Mọi quyết định đều xuất phát từ chất lượng kỹ thuật, khả năng mở rộng và bảo trì dài hạn.",
  },
  {
    title: "Minh bạch",
    description:
      "Giao tiếp rõ ràng, timeline cụ thể và báo cáo tiến độ định kỳ trong suốt dự án.",
  },
  {
    title: "Đồng hành dài hạn",
    description:
      "Không chỉ bàn giao sản phẩm — chúng tôi hỗ trợ tối ưu, nâng cấp và phát triển liên tục.",
  },
  {
    title: "Hiểu thị trường VN",
    description:
      "Kinh nghiệm làm việc với SME, startup và enterprise trong bối cảnh Việt Nam.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="Về QuyenTech"
        title="Đội ngũ kỹ sư xây dựng tương lai số"
        description="Chúng tôi là công ty công nghệ Việt Nam chuyên phát triển phần mềm, website, SEO và giải pháp AI — với tiêu chuẩn kỹ thuật quốc tế."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">Sứ mệnh của chúng tôi</h2>
              <p className="mt-6 text-slate-400 leading-relaxed">
                QuyenTech ra đời với mục tiêu trở thành đối tác công nghệ đáng tin cậy cho doanh nghiệp
                Việt Nam. Chúng tôi tin rằng công nghệ chất lượng cao không chỉ dành cho tập đoàn lớn
                — mà cũng phải tiếp cận được với SME và startup đang tìm kiếm sự chuyên nghiệp thực
                sự.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Từ kiến trúc hệ thống đến trải nghiệm người dùng, mỗi dự án đều được xây dựng với
                tư duy sản phẩm và trách nhiệm kỹ thuật lâu dài.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "5+", l: "Năm kinh nghiệm" },
                { n: "50+", l: "Dự án" },
                { n: "30+", l: "Khách hàng" },
                { n: "100%", l: "Cam kết chất lượng" },
              ].map((s) => (
                <div key={s.l} className="p-6 rounded-2xl glass text-center">
                  <p className="font-display text-3xl font-bold gradient-text">{s.n}</p>
                  <p className="mt-2 text-sm text-slate-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
              Giá trị cốt lõi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-8 rounded-2xl glass glow-border">
                  <h3 className="font-display text-xl font-semibold text-white">{v.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
