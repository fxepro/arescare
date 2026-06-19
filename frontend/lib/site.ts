/**
 * Site-wide constants: brand, contact, navigation.
 * Content lives in data — never hardcoded inside components or pages.
 */

export const site = {
  name: "Arescare",
  tagline: "Integrity in care",
  description:
    "Friendly, coordinated healthcare for the whole family — telehealth, chronic care, medication access and more.",
  url: "https://arescare.com",
  logo: "/media/2024/07/arescare-logo-2.png",
  logoWhite: "/media/2023/09/arescare-logo-2-white.png",
} as const;

export const contact = {
  phone: "(303) 333-5145",
  phoneHref: "tel:+13033335145",
  email: "contact@arescare.com",
  emailHref: "mailto:contact@arescare.com",
  address: {
    line1: "Arescare Inc",
    line2: "1811 Wewatta Street, 11th Floor",
    city: "Denver, CO 80203",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Telehealth", href: "/solutions/telehealth" },
      { label: "Chronic Care Management", href: "/solutions/chronic-care-management" },
      { label: "Managed & Packaged Care", href: "/solutions/managed-healthcare" },
      { label: "Medication Access", href: "/solutions/international-drugs" },
      { label: "Healthcare Research", href: "/solutions/healthcare-research" },
      { label: "Consulting & Placement", href: "/solutions/consulting-placement" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];
