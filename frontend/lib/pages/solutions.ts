import type { IconName } from "@/components/icon";

/** Solutions hub page — sourced from arescare-recovery/content/solutions.md */
export const solutionsPage = {
  banner: {
    eyebrow: "Solutions",
    title: "What we offer",
    subtitle:
      "Empowering your healthcare choices globally — six connected services, one coordinated team.",
  },
  intro: {
    body: "Making informed healthcare choices involves researching providers, understanding treatment options, assessing costs and insurance coverage, considering personal health goals, consulting professionals for advice, and prioritizing quality, accessibility, and compatibility with individual needs.",
  },
  /** Recovery page pairs each service with a category label + display title */
  serviceCards: [
    {
      slug: "telehealth",
      category: "Compassionate Care",
      title: "Telehealth – Services and Development",
      icon: "video" as IconName,
      accent: "sky" as const,
    },
    {
      slug: "chronic-care-management",
      category: "Personalized Medicine",
      title: "Chronic Care Management",
      icon: "heart" as IconName,
      accent: "mint" as const,
    },
    {
      slug: "managed-healthcare",
      category: "Holistic Healing",
      title: "Managed and Packaged Healthcare",
      icon: "package" as IconName,
      accent: "pink" as const,
    },
    {
      slug: "international-drugs",
      category: "Advanced Treatment",
      title: "Drugs Access – Import and Export",
      icon: "pill" as IconName,
      accent: "sky" as const,
    },
    {
      slug: "healthcare-research",
      category: "Patient-centered Care",
      title: "Healthcare Research and Development",
      icon: "research" as IconName,
      accent: "mint" as const,
    },
    {
      slug: "consulting-placement",
      category: "Integrated Wellness",
      title: "Consulting and Placement",
      icon: "users" as IconName,
      accent: "pink" as const,
    },
  ],
  wellness: {
    title: "Enhance Your Health with Arescare Wellness Solutions",
    subtitle: "Your journey to healthcare freedom",
  },
  invest: {
    title:
      "Create a sustainable future and shape your healthcare destiny — invest in your future health",
    body: "We are available to respond by email and will follow up at your convenience.",
    highlight:
      "Get personalized healthcare approaches and strategies designed for your better tomorrow.",
    bullets: [
      "Recent industry analytics and developments",
      "Guidelines for allocating resources and investments",
      "Explore traditional and holistic investment approaches",
    ],
  },
  pillars: {
    eyebrow: "Winning strategies",
    title: "Create winning healthcare implementation strategies",
    items: [
      {
        title: "Patient outcomes",
        body: "Consistently enhance patient outcomes through improved health metrics, reduced readmissions, and higher satisfaction.",
      },
      {
        title: "Technological integration",
        body: "Leverage cutting-edge technology to streamline operations, enhance diagnostic accuracy, and personalize care.",
      },
      {
        title: "Operational efficiencies",
        body: "Optimize processes, reduce unnecessary costs, and improve resource allocation while maintaining high standards of care.",
      },
    ],
    image: "/media/2023/09/investment-benefits-2.jpg",
    imageAlt: "Healthcare professional reviewing patient outcomes",
  },
  closing: {
    title: "Your Health, Our Investment.",
    tagline: "Always stay ahead of your health — health is wealth.",
  },
} as const;
