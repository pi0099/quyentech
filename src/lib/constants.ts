export const siteConfig = {
  name: "QuyenTech",
  tagline: "Công nghệ thúc đẩy doanh nghiệp",
  description:
    "QuyenTech — đối tác công nghệ cao cấp cho phần mềm tùy chỉnh, website, SEO và giải pháp AI tại Việt Nam.",
  email: "hello@quyentech.vn",
  phone: "+84 90 000 0000",
  address: "TP. Hồ Chí Minh, Việt Nam",
};

export const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/portfolio", label: "Dự án" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Liên hệ" },
];

export const services = [
  {
    slug: "software-development",
    title: "Phát triển phần mềm",
    titleEn: "Software Development",
    description:
      "Hệ thống tùy chỉnh, kiến trúc mở rộng và chất lượng kỹ thuật cấp doanh nghiệp cho doanh nghiệp Việt Nam.",
    icon: "code",
    href: "/services/software-development",
  },
  {
    slug: "website-design",
    title: "Thiết kế & phát triển website",
    titleEn: "Website Development",
    description:
      "Website cao cấp, tối ưu hiệu năng và trải nghiệm người dùng — nền tảng chuyển đổi cho thương hiệu của bạn.",
    icon: "globe",
    href: "/services/website-design",
  },
  {
    slug: "seo-services",
    title: "Dịch vụ SEO",
    titleEn: "SEO Services",
    description:
      "Chiến lược SEO kỹ thuật và nội dung giúp doanh nghiệp tăng trưởng bền vững trên Google.",
    icon: "search",
    href: "/services/seo-services",
  },
  {
    slug: "ai-solutions",
    title: "AI & Tự động hóa",
    titleEn: "AI Automation",
    description:
      "Tích hợp AI, workflow tự động và giải pháp thông minh nâng cao năng suất vận hành.",
    icon: "brain",
    href: "/services/ai-solutions",
  },
];

export const whyItems = [
  {
    title: "Kiến trúc mở rộng",
    description:
      "Thiết kế hệ thống linh hoạt, sẵn sàng tăng trưởng cùng quy mô doanh nghiệp.",
    metric: "99.9%",
    metricLabel: "Uptime mục tiêu",
  },
  {
    title: "Tối ưu hiệu năng",
    description:
      "Core Web Vitals, tốc độ tải và trải nghiệm mượt trên mọi thiết bị.",
    metric: "<1s",
    metricLabel: "LCP mục tiêu",
  },
  {
    title: "Chuyên môn SEO",
    description:
      "SEO kỹ thuật, cấu trúc nội dung và chiến lược dài hạn cho thị trường VN.",
    metric: "3x",
    metricLabel: "Tăng trưởng organic",
  },
  {
    title: "Hỗ trợ dài hạn",
    description:
      "Đồng hành sau triển khai — bảo trì, nâng cấp và tối ưu liên tục.",
    metric: "24/7",
    metricLabel: "Monitoring",
  },
];

export const projects = [
  {
    title: "FinFlow Dashboard",
    category: "Fintech · SaaS",
    description:
      "Nền tảng quản lý tài chính doanh nghiệp với dashboard real-time và báo cáo tự động.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-cyan-500/20 to-blue-600/20",
  },
  {
    title: "LuxCommerce",
    category: "E-commerce",
    description:
      "Website thương mại điện tử cao cấp với tối ưu SEO và tỷ lệ chuyển đổi tăng 40%.",
    tags: ["React", "Stripe", "SEO"],
    gradient: "from-purple-500/20 to-cyan-500/20",
  },
  {
    title: "AutoOps AI",
    category: "AI Automation",
    description:
      "Hệ thống tự động hóa quy trình nội bộ với AI agents và workflow engine.",
    tags: ["Python", "OpenAI", "Docker"],
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Vercel",
  "OpenAI",
  "Tailwind CSS",
  "Redis",
];

export const processSteps = [
  {
    step: "01",
    title: "Khám phá",
    description: "Phân tích nhu cầu, mục tiêu kinh doanh và bối cảnh kỹ thuật.",
  },
  {
    step: "02",
    title: "Lập kế hoạch",
    description: "Roadmap, kiến trúc hệ thống và timeline rõ ràng.",
  },
  {
    step: "03",
    title: "Thiết kế",
    description: "UI/UX cao cấp, design system và prototype tương tác.",
  },
  {
    step: "04",
    title: "Phát triển",
    description: "Engineering chất lượng cao với CI/CD và code review.",
  },
  {
    step: "05",
    title: "Tối ưu",
    description: "Performance, SEO, bảo mật và accessibility.",
  },
  {
    step: "06",
    title: "Triển khai",
    description: "Deploy production, monitoring và hỗ trợ dài hạn.",
  },
];

export const blogPosts = [
  {
    slug: "nextjs-performance-2026",
    title: "Tối ưu hiệu năng Next.js cho doanh nghiệp Việt Nam",
    excerpt:
      "Chiến lược PPR, caching và Core Web Vitals giúp website đạt chuẩn Google.",
    date: "12 Tháng 5, 2026",
    category: "Engineering",
    readTime: "8 phút",
  },
  {
    slug: "ai-automation-sme",
    title: "AI Automation cho SME: Bắt đầu từ đâu?",
    excerpt:
      "Hướng dẫn triển khai workflow AI thực tế, ROI rõ ràng cho doanh nghiệp vừa và nhỏ.",
    date: "5 Tháng 5, 2026",
    category: "AI",
    readTime: "6 phút",
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist 2026",
    excerpt:
      "Danh sách kiểm tra kỹ thuật SEO toàn diện cho website doanh nghiệp.",
    date: "28 Tháng 4, 2026",
    category: "SEO",
    readTime: "10 phút",
  },
];
