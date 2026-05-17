import type { Dictionary } from "../types";

const en: Dictionary = {
  site: {
    name: "QuyenTech",
    tagline: "Technology that drives business",
    description:
      "QuyenTech — premium technology partner for custom software, websites, SEO, and AI solutions in Vietnam.",
    address: "Ho Chi Minh City, Vietnam",
    engineeredIn: "Engineered in Vietnam",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    cta: "Start a project",
  },
  footer: {
    links: "Links",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  hero: {
    badge: "Premium technology partner in Vietnam",
    titleLine1: "Technology that",
    titleHighlight: "drives",
    titleLine2: "your business forward",
    description:
      "We build high-performance digital systems — custom software, premium websites, SEO, and AI solutions for Vietnamese businesses.",
    ctaPrimary: "Start a project",
    ctaSecondary: "View portfolio",
    scroll: "Scroll",
    stats: [
      { value: "50+", label: "Projects delivered" },
      { value: "99.9%", label: "System uptime" },
      { value: "3x", label: "Organic growth" },
      { value: "24/7", label: "Technical support" },
    ],
  },
  services: {
    label: "Services",
    title: "End-to-end technology solutions",
    description:
      "From idea to production — we build high-quality digital systems for businesses in Vietnam and beyond.",
    items: [
      {
        slug: "software-development",
        title: "Software Development",
        subtitle: "Custom Software",
        description:
          "Custom systems, scalable architecture, and enterprise-grade engineering quality.",
        icon: "code",
        href: "/services/software-development",
      },
      {
        slug: "website-design",
        title: "Website Design & Development",
        subtitle: "Web Experiences",
        description:
          "Premium websites optimized for performance, UX, and conversion — your brand's digital foundation.",
        icon: "globe",
        href: "/services/website-design",
      },
      {
        slug: "seo-services",
        title: "SEO Services",
        subtitle: "Search Growth",
        description:
          "Technical SEO and content strategy for sustainable growth on Google.",
        icon: "search",
        href: "/services/seo-services",
      },
      {
        slug: "ai-solutions",
        title: "AI & Automation",
        subtitle: "AI Solutions",
        description:
          "AI integration, automated workflows, and intelligent tools that boost operational efficiency.",
        icon: "brain",
        href: "/services/ai-solutions",
      },
    ],
  },
  why: {
    label: "Why QuyenTech",
    title: "Trusted engineering, measurable results",
    description:
      "We combine engineering excellence with deep understanding of the Vietnamese market for long-term value.",
    items: [
      {
        title: "Scalable architecture",
        description: "Flexible system design ready to grow with your business.",
        metric: "99.9%",
        metricLabel: "Target uptime",
      },
      {
        title: "Performance first",
        description: "Core Web Vitals, fast load times, and smooth experiences on every device.",
        metric: "<1s",
        metricLabel: "Target LCP",
      },
      {
        title: "SEO expertise",
        description: "Technical SEO, content structure, and long-term strategy for the VN market.",
        metric: "3x",
        metricLabel: "Organic growth",
      },
      {
        title: "Long-term support",
        description: "Partnership after launch — maintenance, upgrades, and continuous optimization.",
        metric: "24/7",
        metricLabel: "Monitoring",
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Enterprise-grade case studies",
    description: "Work that demonstrates technical excellence and real business impact.",
    viewDetail: "View details",
    viewAll: "View all projects",
    items: [
      {
        title: "FinFlow Dashboard",
        category: "Fintech · SaaS",
        description:
          "Enterprise financial management platform with real-time dashboards and automated reporting.",
        tags: ["Next.js", "Node.js", "PostgreSQL"],
        gradient: "from-cyan-500/20 to-blue-600/20",
      },
      {
        title: "LuxCommerce",
        category: "E-commerce",
        description:
          "Premium e-commerce website with SEO optimization and 40% higher conversion rate.",
        tags: ["React", "Stripe", "SEO"],
        gradient: "from-purple-500/20 to-cyan-500/20",
      },
      {
        title: "AutoOps AI",
        category: "AI Automation",
        description: "Internal process automation with AI agents and a workflow engine.",
        tags: ["Python", "OpenAI", "Docker"],
        gradient: "from-emerald-500/20 to-cyan-500/20",
      },
    ],
  },
  tech: {
    label: "Technology",
    title: "Modern, battle-tested stack",
    description: "We use industry-leading technologies to build sustainable, high-performance systems.",
  },
  process: {
    label: "Process",
    title: "Modern engineering workflow",
    description: "Transparent methodology, fast iterations, and focus on business outcomes.",
    steps: [
      { step: "01", title: "Discovery", description: "Requirements, business goals, and technical context analysis." },
      { step: "02", title: "Planning", description: "Roadmap, system architecture, and clear timelines." },
      { step: "03", title: "Design", description: "Premium UI/UX, design systems, and interactive prototypes." },
      { step: "04", title: "Development", description: "High-quality engineering with CI/CD and code review." },
      { step: "05", title: "Optimization", description: "Performance, SEO, security, and accessibility." },
      { step: "06", title: "Deployment", description: "Production launch, monitoring, and long-term support." },
    ],
  },
  cta: {
    titleLine1: "Ready to build your",
    titleHighlight: "digital system",
    titleLine2: "?",
    description:
      "Partner with QuyenTech to turn your technology vision into reality — from idea to production.",
    primary: "Contact us",
    secondary: "Explore services",
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "QuyenTech — engineers and designers building premium digital systems for businesses in Vietnam.",
    label: "About QuyenTech",
    title: "Engineers building the digital future",
    description:
      "We are a Vietnamese technology company specializing in software, websites, SEO, and AI — with international engineering standards.",
    missionTitle: "Our mission",
    missionP1:
      "QuyenTech aims to be a trusted technology partner for Vietnamese businesses. We believe premium technology should be accessible to SMEs and startups — not only large enterprises.",
    missionP2:
      "From system architecture to user experience, every project is built with product thinking and long-term technical responsibility.",
    stats: [
      { n: "5+", l: "Years of experience" },
      { n: "50+", l: "Projects" },
      { n: "30+", l: "Clients" },
      { n: "100%", l: "Quality commitment" },
    ],
    valuesTitle: "Core values",
    values: [
      {
        title: "Engineering-first",
        description:
          "Every decision starts with technical quality, scalability, and long-term maintainability.",
      },
      {
        title: "Transparency",
        description: "Clear communication, concrete timelines, and regular progress updates.",
      },
      {
        title: "Long-term partnership",
        description: "Beyond delivery — we support optimization, upgrades, and continuous growth.",
      },
      {
        title: "Vietnam market insight",
        description: "Experience with SMEs, startups, and enterprises in the Vietnamese context.",
      },
    ],
  },
  servicesPage: {
    metaTitle: "Services",
    metaDescription: "Full-stack services — software, websites, SEO, and AI automation.",
    label: "Services",
    title: "Technology solutions for business",
    description:
      "From software development to SEO and AI — QuyenTech partners with you to build sustainable digital systems.",
  },
  portfolioPage: {
    metaTitle: "Portfolio",
    metaDescription: "Enterprise portfolio — fintech, e-commerce, AI automation.",
    label: "Portfolio",
    title: "Projects we're proud of",
    description: "Case studies showcasing technical capability and business value delivered.",
  },
  blogPage: {
    metaTitle: "Blog",
    metaDescription: "Technology blog — engineering, SEO, AI, and best practices.",
    label: "Blog",
    title: "Insights from our engineering team",
    description: "Knowledge sharing on software development, SEO, AI, and technology trends.",
    readMore: "Read more",
    back: "Back to Blog",
    placeholder:
      "Full article content coming soon. QuyenTech shares practical knowledge on engineering, SEO, and AI for sustainable business growth.",
    posts: [
      {
        slug: "nextjs-performance-2026",
        title: "Next.js performance optimization for Vietnamese businesses",
        excerpt: "PPR, caching, and Core Web Vitals strategies to meet Google's standards.",
        date: "May 12, 2026",
        category: "Engineering",
        readTime: "8 min read",
      },
      {
        slug: "ai-automation-sme",
        title: "AI automation for SMEs: Where to start?",
        excerpt: "A practical guide to AI workflows with clear ROI for small and medium businesses.",
        date: "May 5, 2026",
        category: "AI",
        readTime: "6 min read",
      },
      {
        slug: "technical-seo-checklist",
        title: "Technical SEO Checklist 2026",
        excerpt: "A comprehensive technical SEO checklist for business websites.",
        date: "April 28, 2026",
        category: "SEO",
        readTime: "10 min read",
      },
    ],
  },
  contactPage: {
    metaTitle: "Contact",
    metaDescription: "Contact QuyenTech to start your software, website, SEO, or AI project.",
    label: "Contact",
    title: "Start your project",
    description: "Share your idea — we'll respond within 24 business hours.",
    infoTitle: "Contact information",
    infoDescription: "Free consultation for software, website, SEO, or AI projects.",
    email: "Email",
    phone: "Phone",
    address: "Address",
    form: {
      name: "Full name",
      email: "Email",
      company: "Company",
      service: "Service of interest",
      message: "Project description",
      submit: "Send inquiry",
      namePlaceholder: "John Doe",
      emailPlaceholder: "email@company.com",
      companyPlaceholder: "Company name",
      messagePlaceholder: "Brief description of your project...",
      serviceOptions: [
        { value: "software", label: "Software development" },
        { value: "website", label: "Website" },
        { value: "seo", label: "SEO" },
        { value: "ai", label: "AI & Automation" },
      ],
      thanksTitle: "Thank you!",
      thanksMessage: "We'll get back to you as soon as possible.",
    },
  },
  serviceDetail: {
    includes: "What's included",
    benefits: "Benefits",
    cta: "Get free consultation",
    pages: {
      "software-development": {
        title: "Software Development",
        subtitle: "Custom Software Development",
        description:
          "Build custom software with scalable architecture, strong security, and enterprise-grade code quality.",
        features: [
          "Web application & SaaS platforms",
          "API design & microservices",
          "Database architecture & optimization",
          "CI/CD & DevOps integration",
          "Legacy system modernization",
          "Third-party integrations",
        ],
        benefits: [
          "Lower long-term operational costs",
          "Systems that scale with your business",
          "Security and compliance standards",
          "Maintainable, upgradeable codebase",
        ],
      },
      "website-design": {
        title: "Website Design & Development",
        subtitle: "Website Design & Development",
        description:
          "Premium websites combining refined UI/UX with exceptional technical performance.",
        features: [
          "Premium UI/UX design",
          "Responsive & mobile-first",
          "Next.js & React development",
          "CMS integration",
          "Performance optimization",
          "Analytics & conversion tracking",
        ],
        benefits: [
          "Professional, trustworthy brand presence",
          "Fast, SEO-friendly performance",
          "Higher conversion rates",
          "Easy content management",
        ],
      },
      "seo-services": {
        title: "SEO Services",
        subtitle: "SEO Services",
        description:
          "Comprehensive SEO — technical and content — for sustainable organic growth.",
        features: [
          "Technical SEO audit",
          "On-page optimization",
          "Content strategy",
          "Local SEO (Vietnam)",
          "Core Web Vitals optimization",
          "Monthly reporting & analytics",
        ],
        benefits: [
          "Quality traffic from Google",
          "Measurable monthly ROI",
          "Stronger SERP brand presence",
          "Sustainable long-term SEO foundation",
        ],
      },
      "ai-solutions": {
        title: "AI & Automation",
        subtitle: "AI & Automation Solutions",
        description:
          "Integrate AI and automation into operations — boost productivity and reduce manual work.",
        features: [
          "AI chatbots & assistants",
          "Workflow automation",
          "Document processing AI",
          "Custom AI integrations (OpenAI, etc.)",
          "Data pipeline automation",
          "Internal tools & dashboards",
        ],
        benefits: [
          "Save operational time",
          "Reduce manual errors",
          "Scale processes without extra hiring",
          "Competitive edge through AI",
        ],
      },
    },
  },
  meta: {
    defaultTitle: "QuyenTech — Technology that drives business",
    defaultDescription:
      "QuyenTech — premium technology partner for custom software, websites, SEO, and AI solutions in Vietnam.",
    template: "%s | QuyenTech",
  },
};

export default en;
