import type { Dictionary } from "../types";

const vi: Dictionary = {
  site: {
    name: "QuyenTech",
    tagline: "Công nghệ thúc đẩy doanh nghiệp",
    description:
      "QuyenTech — đối tác công nghệ cao cấp cho phần mềm tùy chỉnh, website, SEO và giải pháp AI tại Việt Nam.",
    address: "TP. Hồ Chí Minh, Việt Nam",
    engineeredIn: "Engineered in Vietnam",
  },
  nav: {
    home: "Trang chủ",
    about: "Về chúng tôi",
    services: "Dịch vụ",
    portfolio: "Dự án",
    blog: "Blog",
    contact: "Liên hệ",
    cta: "Bắt đầu dự án",
  },
  footer: {
    links: "Liên kết",
    services: "Dịch vụ",
    contact: "Liên hệ",
    rights: "All rights reserved.",
  },
  hero: {
    badge: "Đối tác công nghệ cao cấp tại Việt Nam",
    titleLine1: "Công nghệ",
    titleHighlight: "thúc đẩy",
    titleLine2: "doanh nghiệp của bạn",
    description:
      "Xây dựng hệ thống số hiệu năng cao — phần mềm tùy chỉnh, website cao cấp, SEO và giải pháp AI cho doanh nghiệp Việt Nam.",
    ctaPrimary: "Bắt đầu dự án",
    ctaSecondary: "Xem dự án",
    scroll: "Scroll",
    stats: [
      { value: "50+", label: "Dự án hoàn thành" },
      { value: "99.9%", label: "Uptime hệ thống" },
      { value: "3x", label: "Tăng trưởng SEO" },
      { value: "24/7", label: "Hỗ trợ kỹ thuật" },
    ],
  },
  services: {
    label: "Dịch vụ",
    title: "Giải pháp công nghệ toàn diện",
    description:
      "Từ ý tưởng đến triển khai — chúng tôi xây dựng hệ thống số chất lượng cao cho doanh nghiệp Việt Nam.",
    items: [
      {
        slug: "software-development",
        title: "Phát triển phần mềm",
        subtitle: "Software Development",
        description:
          "Hệ thống tùy chỉnh, kiến trúc mở rộng và chất lượng kỹ thuật cấp doanh nghiệp.",
        icon: "code",
        href: "/services/software-development",
      },
      {
        slug: "website-design",
        title: "Thiết kế & phát triển website",
        subtitle: "Website Development",
        description:
          "Website cao cấp, tối ưu hiệu năng và trải nghiệm người dùng — nền tảng chuyển đổi cho thương hiệu.",
        icon: "globe",
        href: "/services/website-design",
      },
      {
        slug: "seo-services",
        title: "Dịch vụ SEO",
        subtitle: "SEO Services",
        description:
          "Chiến lược SEO kỹ thuật và nội dung giúp doanh nghiệp tăng trưởng bền vững trên Google.",
        icon: "search",
        href: "/services/seo-services",
      },
      {
        slug: "ai-solutions",
        title: "AI & Tự động hóa",
        subtitle: "AI Automation",
        description:
          "Tích hợp AI, workflow tự động và giải pháp thông minh nâng cao năng suất vận hành.",
        icon: "brain",
        href: "/services/ai-solutions",
      },
    ],
  },
  why: {
    label: "Tại sao QuyenTech",
    title: "Kỹ thuật đáng tin cậy, kết quả đo lường được",
    description:
      "Chúng tôi kết hợp tư duy kỹ sư với hiểu biết thị trường Việt Nam để mang lại giá trị dài hạn.",
    items: [
      {
        title: "Kiến trúc mở rộng",
        description: "Thiết kế hệ thống linh hoạt, sẵn sàng tăng trưởng cùng quy mô doanh nghiệp.",
        metric: "99.9%",
        metricLabel: "Uptime mục tiêu",
      },
      {
        title: "Tối ưu hiệu năng",
        description: "Core Web Vitals, tốc độ tải và trải nghiệm mượt trên mọi thiết bị.",
        metric: "<1s",
        metricLabel: "LCP mục tiêu",
      },
      {
        title: "Chuyên môn SEO",
        description: "SEO kỹ thuật, cấu trúc nội dung và chiến lược dài hạn cho thị trường VN.",
        metric: "3x",
        metricLabel: "Tăng trưởng organic",
      },
      {
        title: "Hỗ trợ dài hạn",
        description: "Đồng hành sau triển khai — bảo trì, nâng cấp và tối ưu liên tục.",
        metric: "24/7",
        metricLabel: "Monitoring",
      },
    ],
  },
  projects: {
    label: "Dự án",
    title: "Case studies cấp doanh nghiệp",
    description: "Những dự án thể hiện năng lực kỹ thuật và giá trị kinh doanh thực tế.",
    viewDetail: "Xem chi tiết",
    viewAll: "Xem tất cả dự án",
    items: [
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
        description: "Hệ thống tự động hóa quy trình nội bộ với AI agents và workflow engine.",
        tags: ["Python", "OpenAI", "Docker"],
        gradient: "from-emerald-500/20 to-cyan-500/20",
      },
    ],
  },
  tech: {
    label: "Công nghệ",
    title: "Stack hiện đại, đã được chứng minh",
    description:
      "Chúng tôi sử dụng công nghệ hàng đầu để xây dựng hệ thống bền vững và hiệu năng cao.",
  },
  process: {
    label: "Quy trình",
    title: "Quy trình engineering hiện đại",
    description: "Phương pháp làm việc minh bạch, lặp nhanh và tập trung vào kết quả kinh doanh.",
    steps: [
      { step: "01", title: "Khám phá", description: "Phân tích nhu cầu, mục tiêu kinh doanh và bối cảnh kỹ thuật." },
      { step: "02", title: "Lập kế hoạch", description: "Roadmap, kiến trúc hệ thống và timeline rõ ràng." },
      { step: "03", title: "Thiết kế", description: "UI/UX cao cấp, design system và prototype tương tác." },
      { step: "04", title: "Phát triển", description: "Engineering chất lượng cao với CI/CD và code review." },
      { step: "05", title: "Tối ưu", description: "Performance, SEO, bảo mật và accessibility." },
      { step: "06", title: "Triển khai", description: "Deploy production, monitoring và hỗ trợ dài hạn." },
    ],
  },
  cta: {
    titleLine1: "Sẵn sàng xây dựng",
    titleHighlight: "hệ thống số",
    titleLine2: "của bạn?",
    description:
      "Hãy cùng QuyenTech biến tầm nhìn công nghệ thành hiện thực — từ ý tưởng đến triển khai production.",
    primary: "Liên hệ ngay",
    secondary: "Khám phá dịch vụ",
  },
  about: {
    metaTitle: "Về chúng tôi",
    metaDescription:
      "QuyenTech — đội ngũ kỹ sư và designer xây dựng hệ thống số cao cấp cho doanh nghiệp Việt Nam.",
    label: "Về QuyenTech",
    title: "Đội ngũ kỹ sư xây dựng tương lai số",
    description:
      "Chúng tôi là công ty công nghệ Việt Nam chuyên phát triển phần mềm, website, SEO và giải pháp AI — với tiêu chuẩn kỹ thuật quốc tế.",
    missionTitle: "Sứ mệnh của chúng tôi",
    missionP1:
      "QuyenTech ra đời với mục tiêu trở thành đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam. Chúng tôi tin rằng công nghệ chất lượng cao không chỉ dành cho tập đoàn lớn — mà cũng phải tiếp cận được với SME và startup.",
    missionP2:
      "Từ kiến trúc hệ thống đến trải nghiệm người dùng, mỗi dự án đều được xây dựng với tư duy sản phẩm và trách nhiệm kỹ thuật lâu dài.",
    stats: [
      { n: "5+", l: "Năm kinh nghiệm" },
      { n: "50+", l: "Dự án" },
      { n: "30+", l: "Khách hàng" },
      { n: "100%", l: "Cam kết chất lượng" },
    ],
    valuesTitle: "Giá trị cốt lõi",
    values: [
      {
        title: "Engineering-first",
        description:
          "Mọi quyết định đều xuất phát từ chất lượng kỹ thuật, khả năng mở rộng và bảo trì dài hạn.",
      },
      {
        title: "Minh bạch",
        description: "Giao tiếp rõ ràng, timeline cụ thể và báo cáo tiến độ định kỳ trong suốt dự án.",
      },
      {
        title: "Đồng hành dài hạn",
        description: "Không chỉ bàn giao sản phẩm — chúng tôi hỗ trợ tối ưu, nâng cấp và phát triển liên tục.",
      },
      {
        title: "Hiểu thị trường VN",
        description: "Kinh nghiệm làm việc với SME, startup và enterprise trong bối cảnh Việt Nam.",
      },
    ],
  },
  servicesPage: {
    metaTitle: "Dịch vụ",
    metaDescription: "Dịch vụ công nghệ toàn diện — phần mềm, website, SEO và AI automation.",
    label: "Dịch vụ",
    title: "Giải pháp công nghệ cho doanh nghiệp",
    description:
      "Từ phát triển phần mềm đến SEO và AI — QuyenTech đồng hành xây dựng hệ thống số bền vững.",
  },
  portfolioPage: {
    metaTitle: "Dự án",
    metaDescription: "Portfolio dự án cấp doanh nghiệp — fintech, e-commerce, AI automation.",
    label: "Portfolio",
    title: "Dự án chúng tôi tự hào",
    description: "Case studies thể hiện năng lực kỹ thuật và giá trị kinh doanh mang lại cho khách hàng.",
  },
  blogPage: {
    metaTitle: "Blog",
    metaDescription: "Blog công nghệ — engineering, SEO, AI và best practices cho doanh nghiệp.",
    label: "Blog",
    title: "Insights từ đội ngũ kỹ sư",
    description: "Chia sẻ kiến thức về phát triển phần mềm, SEO, AI và xu hướng công nghệ.",
    readMore: "Đọc thêm",
    back: "Quay lại Blog",
    placeholder:
      "Nội dung bài viết đầy đủ sẽ được cập nhật sớm. QuyenTech chia sẻ kiến thức thực chiến về engineering, SEO và AI.",
    posts: [
      {
        slug: "nextjs-performance-2026",
        title: "Tối ưu hiệu năng Next.js cho doanh nghiệp Việt Nam",
        excerpt: "Chiến lược PPR, caching và Core Web Vitals giúp website đạt chuẩn Google.",
        date: "12 Tháng 5, 2026",
        category: "Engineering",
        readTime: "8 phút",
      },
      {
        slug: "ai-automation-sme",
        title: "AI Automation cho SME: Bắt đầu từ đâu?",
        excerpt: "Hướng dẫn triển khai workflow AI thực tế, ROI rõ ràng cho doanh nghiệp vừa và nhỏ.",
        date: "5 Tháng 5, 2026",
        category: "AI",
        readTime: "6 phút",
      },
      {
        slug: "technical-seo-checklist",
        title: "Technical SEO Checklist 2026",
        excerpt: "Danh sách kiểm tra kỹ thuật SEO toàn diện cho website doanh nghiệp.",
        date: "28 Tháng 4, 2026",
        category: "SEO",
        readTime: "10 phút",
      },
    ],
  },
  contactPage: {
    metaTitle: "Liên hệ",
    metaDescription: "Liên hệ QuyenTech để bắt đầu dự án phần mềm, website, SEO hoặc AI.",
    label: "Liên hệ",
    title: "Bắt đầu dự án của bạn",
    description: "Chia sẻ ý tưởng — chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.",
    infoTitle: "Thông tin liên hệ",
    infoDescription: "Sẵn sàng tư vấn miễn phí về dự án phần mềm, website, SEO hoặc AI.",
    email: "Email",
    phone: "Điện thoại",
    address: "Địa chỉ",
    form: {
      name: "Họ tên",
      email: "Email",
      company: "Công ty",
      service: "Dịch vụ quan tâm",
      message: "Mô tả dự án",
      submit: "Gửi yêu cầu",
      namePlaceholder: "Nguyễn Văn A",
      emailPlaceholder: "email@company.com",
      companyPlaceholder: "Tên công ty",
      messagePlaceholder: "Mô tả ngắn về dự án của bạn...",
      serviceOptions: [
        { value: "software", label: "Phát triển phần mềm" },
        { value: "website", label: "Website" },
        { value: "seo", label: "SEO" },
        { value: "ai", label: "AI & Automation" },
      ],
      thanksTitle: "Cảm ơn bạn!",
      thanksMessage: "Chúng tôi sẽ liên hệ sớm nhất có thể.",
    },
  },
  serviceDetail: {
    includes: "Dịch vụ bao gồm",
    benefits: "Lợi ích",
    cta: "Nhận tư vấn miễn phí",
    pages: {
      "software-development": {
        title: "Phát triển phần mềm",
        subtitle: "Custom Software Development",
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
        subtitle: "Website Design & Development",
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
        subtitle: "SEO Services",
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
        subtitle: "AI & Automation Solutions",
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
    },
  },
  meta: {
    defaultTitle: "QuyenTech — Công nghệ thúc đẩy doanh nghiệp",
    defaultDescription:
      "QuyenTech — đối tác công nghệ cao cấp cho phần mềm tùy chỉnh, website, SEO và giải pháp AI tại Việt Nam.",
    template: "%s | QuyenTech",
  },
};

export default vi;
