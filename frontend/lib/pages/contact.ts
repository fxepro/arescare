import { contact } from "@/lib/site";

/** Contact page — sourced from arescare-recovery/content/contact.md */
export const contactPage = {
  banner: {
    title: "Contact us",
    subtitle: "Need consultation? Let's talk — reach our team by email or visit our Denver office.",
  },
  heading: "Contact information",
  cta: {
    title: "Need consultation? Let's talk.",
    body: "Tell us what you're looking for and a care advisor will get back to you — no pressure, no jargon.",
  },
  details: [
    {
      label: "Office address",
      lines: [contact.address.line1, contact.address.line2, contact.address.city],
      icon: "pin" as const,
    },
    {
      label: "Email",
      value: contact.email,
      href: contact.emailHref,
      icon: "mail" as const,
    },
  ],
} as const;
