import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Portfolio dự án cấp doanh nghiệp — fintech, e-commerce, AI automation.",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHero
        label="Portfolio"
        title="Dự án chúng tôi tự hào"
        description="Case studies thể hiện năng lực kỹ thuật và giá trị kinh doanh mang lại cho khách hàng."
      />
      <ProjectsSection />
      <CTASection />
    </PageShell>
  );
}
