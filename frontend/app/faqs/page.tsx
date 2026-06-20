import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";
import { faqCategories, faqsPage } from "@/lib/pages/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: faqsPage.banner.subtitle,
};

export default function FaqsPage() {
  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow="FAQs"
        title={faqsPage.banner.title}
        subtitle={faqsPage.banner.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="section">
        <div className="container space-y-16">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <SectionHeading title={category.label} />
              <div className="mt-8">
                <FaqAccordion items={category.faqs} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Still have questions?"
        body="Reach out by email — we'll help you find the right mix of services for your needs."
      />
    </>
  );
}
