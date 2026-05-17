export type Dictionary = {
  site: {
    name: string;
    tagline: string;
    description: string;
    address: string;
    engineeredIn: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    blog: string;
    contact: string;
    cta: string;
  };
  footer: {
    links: string;
    services: string;
    contact: string;
    rights: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    stats: { value: string; label: string }[];
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: {
      slug: string;
      title: string;
      subtitle: string;
      description: string;
      icon: string;
      href: string;
    }[];
  };
  why: {
    label: string;
    title: string;
    description: string;
    items: { title: string; description: string; metric: string; metricLabel: string }[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    viewDetail: string;
    viewAll: string;
    items: {
      title: string;
      category: string;
      description: string;
      tags: string[];
      gradient: string;
    }[];
  };
  tech: {
    label: string;
    title: string;
    description: string;
  };
  process: {
    label: string;
    title: string;
    description: string;
    steps: { step: string; title: string; description: string }[];
  };
  cta: {
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    primary: string;
    secondary: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    label: string;
    title: string;
    description: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    stats: { n: string; l: string }[];
    valuesTitle: string;
    values: { title: string; description: string }[];
  };
  servicesPage: {
    metaTitle: string;
    metaDescription: string;
    label: string;
    title: string;
    description: string;
  };
  portfolioPage: {
    metaTitle: string;
    metaDescription: string;
    label: string;
    title: string;
    description: string;
  };
  blogPage: {
    metaTitle: string;
    metaDescription: string;
    label: string;
    title: string;
    description: string;
    readMore: string;
    back: string;
    placeholder: string;
    posts: {
      slug: string;
      title: string;
      excerpt: string;
      date: string;
      category: string;
      readTime: string;
    }[];
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    label: string;
    title: string;
    description: string;
    infoTitle: string;
    infoDescription: string;
    email: string;
    phone: string;
    address: string;
    form: {
      name: string;
      email: string;
      company: string;
      service: string;
      message: string;
      submit: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      serviceOptions: { value: string; label: string }[];
      thanksTitle: string;
      thanksMessage: string;
    };
  };
  serviceDetail: {
    includes: string;
    benefits: string;
    cta: string;
    pages: Record<
      string,
      {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
      }
    >;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    template: string;
  };
};
