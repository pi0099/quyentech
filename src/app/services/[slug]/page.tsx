import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicePageData } from "@/lib/service-pages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(servicePageData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = servicePageData[slug];
  if (!data) return { title: "Dịch vụ" };
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = servicePageData[slug];
  if (!data) notFound();

  return (
    <ServiceDetailTemplate
      title={data.title}
      titleEn={data.titleEn}
      description={data.description}
      features={data.features}
      benefits={data.benefits}
    />
  );
}
