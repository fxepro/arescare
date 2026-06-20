import type { Faq } from "@/components/faq-accordion";
import {
  chronicCareManagement,
  consultingPlacement,
  healthcareResearch,
  internationalDrugs,
  managedHealthcare,
  telehealth,
} from "@/lib/solutions";

export type FaqCategory = {
  id: string;
  label: string;
  faqs: Faq[];
};

/** FAQ groups — sourced from recovery / per-solution content */
export const faqCategories: FaqCategory[] = [
  { id: "telehealth", label: "Telehealth", faqs: telehealth.faqs },
  {
    id: "chronic-care-management",
    label: "Chronic Care Management",
    faqs: chronicCareManagement.faqs,
  },
  {
    id: "managed-healthcare",
    label: "Managed Healthcare",
    faqs: managedHealthcare.faqs,
  },
  { id: "international-drugs", label: "Drug Access", faqs: internationalDrugs.faqs },
  {
    id: "healthcare-research",
    label: "Healthcare Research",
    faqs: healthcareResearch.faqs,
  },
  {
    id: "consulting-placement",
    label: "Consulting and Placement",
    faqs: consultingPlacement.faqs,
  },
];

export const faqsPage = {
  banner: {
    title: "Frequently asked questions",
    subtitle:
      "Answers about telehealth, chronic care, packaged healthcare, medication access, research and consulting — organized by topic.",
  },
} as const;
