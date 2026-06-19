import type { IconName } from "@/components/icon";

/** Accent token families used to tint cards/badges — keeps pages off raw color. */
export type Accent = "sky" | "mint" | "pink";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: IconName;
  accent: Accent;
  image: string;
};

export const services: Service[] = [
  {
    slug: "telehealth",
    title: "Telehealth",
    tagline: "Care that comes to you",
    description:
      "See a clinician by video from home — for the whole family. General consults, specialists, mental health and pediatric care, evenings and weekends included.",
    icon: "video",
    accent: "sky",
    image: "/media/2024/07/pexels-edward-jenner-4031818.jpg",
  },
  {
    slug: "chronic-care-management",
    title: "Chronic Care Management",
    tagline: "Steady support for ongoing conditions",
    description:
      "A dedicated care team helps you manage diabetes, hypertension, heart disease and more — with regular check-ins, remote monitoring and a plan built around you.",
    icon: "heart",
    accent: "mint",
    image: "/media/2024/07/matheus-ferrero-yfmjALh1S6s-unsplash.jpg",
  },
  {
    slug: "managed-healthcare",
    title: "Managed & Packaged Care",
    tagline: "One coordinated plan",
    description:
      "Bundled, coordinated services tailored to your family's needs — so care is simpler to navigate and more affordable, with one team keeping it all connected.",
    icon: "package",
    accent: "pink",
    image: "/media/2024/07/national-cancer-institute-roZ52cNNQuo-unsplash.jpg",
  },
  {
    slug: "international-drugs",
    title: "Medication Access",
    tagline: "Affordable access to medicine",
    description:
      "Safe, legal access to quality generic and specialty medications — often at a fraction of the cost — sourced through vetted international partners.",
    icon: "pill",
    accent: "sky",
    image: "/media/2024/07/myriam-zilles-KltoLK6Mk-g-unsplash.jpg",
  },
  {
    slug: "healthcare-research",
    title: "Healthcare Research",
    tagline: "Evidence that moves care forward",
    description:
      "Research, data and analytics partnerships that help providers and innovators deliver measurably better outcomes — from study design to publication.",
    icon: "research",
    accent: "mint",
    image: "/media/2024/07/luke-chesser-rCOWMC8qf8A-unsplash.jpg",
  },
  {
    slug: "consulting-placement",
    title: "Consulting & Placement",
    tagline: "The right people and systems",
    description:
      "Consulting and staffing for healthcare organizations — operations, compliance, technology and talent — matched to teams that need them.",
    icon: "users",
    accent: "pink",
    image: "/media/2024/07/online-marketing-hIgeoQjS_iE-unsplash.jpg",
  },
];

export type Feature = { title: string; body: string; icon: IconName; accent: Accent };

export const features: Feature[] = [
  {
    title: "Whole-family care",
    body: "From pediatrics to chronic care, one coordinated team looks after everyone under your roof.",
    icon: "users",
    accent: "sky",
  },
  {
    title: "Care on your schedule",
    body: "Telehealth visits days, evenings and weekends — no waiting rooms, no travel, no friction.",
    icon: "clock",
    accent: "mint",
  },
  {
    title: "Private & secure",
    body: "Bank-grade encryption and HIPAA-compliant handling of every record, every visit.",
    icon: "shield",
    accent: "pink",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "Since 2017", label: "Caring for families" },
  { value: "15+", label: "Clinicians & coordinators" },
  { value: "HIPAA", label: "Certified & compliant" },
  { value: "4.8 / 5", label: "Average partner rating" },
];

export type Step = { n: string; title: string; body: string };

export const steps: Step[] = [
  { n: "01", title: "Get in touch", body: "Tell us what your family needs in a quick call or message." },
  { n: "02", title: "Meet your team", body: "We match you with clinicians and a dedicated care coordinator." },
  { n: "03", title: "Start care", body: "Connect by video, or in coordination with your existing providers." },
  { n: "04", title: "Stay supported", body: "Check-ins, monitoring and resources keep everyone on track." },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Edward Miller",
    role: "Patient, 6 years",
    quote:
      "Arescare has looked after our family's care for years. Their commitment to getting things right never wavers — they've genuinely improved how we manage our health.",
    avatar: "/media/2023/09/reviewer-04.jpg",
  },
  {
    name: "Linda Martinez",
    role: "Family caregiver",
    quote:
      "Coordinating care for my parents used to be overwhelming. Arescare's team handles the details with warmth and precision — I finally feel like someone's in our corner.",
    avatar: "/media/2023/09/reviewer-05.jpg",
  },
  {
    name: "Daniel Thompson",
    role: "Telehealth patient",
    quote:
      "The video visits are a lifesaver with two young kids. Friendly clinicians, no waiting rooms, and real answers — exactly the kind of care a family needs.",
    avatar: "/media/2023/09/reviewer-07.jpg",
  },
];
