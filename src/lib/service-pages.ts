export const servicePageData: Record<
  string,
  {
    title: string;
    titleEn: string;
    description: string;
    features: string[];
    benefits: string[];
  }
> = {
  "software-development": {
    title: "Phát triển phần mềm",
    titleEn: "Custom Software Development",
    description:
      "Xây dựng hệ thống phần mềm tùy chỉnh với kiến trúc mở rộng, bảo mật cao và chất lượng code cấp doanh nghiệp.",
    features: [
      "Web application & SaaS platforms",
      "API design & microservices",
      "Database architecture & optimization",
      "CI/CD & DevOps integration",
      "Legacy system modernization",
      "Third-party integrations",
    ],
    benefits: [
      "Giảm chi phí vận hành dài hạn",
      "Hệ thống mở rộng theo quy mô kinh doanh",
      "Bảo mật và tuân thủ tiêu chuẩn",
      "Codebase dễ bảo trì và nâng cấp",
    ],
  },
  "website-design": {
    title: "Thiết kế & phát triển website",
    titleEn: "Website Design & Development",
    description:
      "Website cao cấp kết hợp thiết kế UI/UX tinh tế với hiệu năng kỹ thuật vượt trội.",
    features: [
      "Premium UI/UX design",
      "Responsive & mobile-first",
      "Next.js & React development",
      "CMS integration",
      "Performance optimization",
      "Analytics & conversion tracking",
    ],
    benefits: [
      "Thương hiệu chuyên nghiệp, đáng tin",
      "Tốc độ tải nhanh, SEO-friendly",
      "Tỷ lệ chuyển đổi cao hơn",
      "Dễ quản trị nội dung",
    ],
  },
  "seo-services": {
    title: "Dịch vụ SEO",
    titleEn: "SEO Services",
    description:
      "Chiến lược SEO toàn diện — từ kỹ thuật đến nội dung — giúp doanh nghiệp tăng trưởng organic bền vững.",
    features: [
      "Technical SEO audit",
      "On-page optimization",
      "Content strategy",
      "Local SEO (Việt Nam)",
      "Core Web Vitals optimization",
      "Monthly reporting & analytics",
    ],
    benefits: [
      "Tăng traffic chất lượng từ Google",
      "ROI đo lường được theo tháng",
      "Vị thế thương hiệu trên SERP",
      "Nền tảng SEO bền vững dài hạn",
    ],
  },
  "ai-solutions": {
    title: "AI & Tự động hóa",
    titleEn: "AI & Automation Solutions",
    description:
      "Tích hợp AI và workflow tự động vào quy trình vận hành — nâng cao năng suất và giảm chi phí thủ công.",
    features: [
      "AI chatbots & assistants",
      "Workflow automation",
      "Document processing AI",
      "Custom AI integrations (OpenAI, etc.)",
      "Data pipeline automation",
      "Internal tools & dashboards",
    ],
    benefits: [
      "Tiết kiệm thời gian vận hành",
      "Giảm lỗi thủ công",
      "Scale quy trình không cần tuyển thêm",
      "Lợi thế cạnh tranh từ công nghệ AI",
    ],
  },
};
