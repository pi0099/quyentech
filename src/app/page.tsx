import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhySection } from "@/components/home/WhySection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <ProjectsSection />
      <TechStackSection />
      <ProcessSection />
      <CTASection />
    </PageShell>
  );
}
