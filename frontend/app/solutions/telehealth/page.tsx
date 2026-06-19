import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { StepGrid } from "@/components/step-grid";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";
import { telehealth } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Telehealth",
  description: telehealth.bannerSubtitle,
};

export default function TelehealthPage() {
  const t = telehealth;
  return (
    <>
      <PageBanner
        eyebrow="Telehealth"
        title={t.bannerTitle}
        subtitle={t.bannerSubtitle}
        highlights={t.highlights}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: t.name },
        ]}
      />

      {/* ---------- Lead / media split ---------- */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src={t.lead.image}
                alt="A patient on a telehealth video visit"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 36rem"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Your health, your way" title={t.lead.title} />
            <p className="mt-5 text-lg text-ink-600">{t.lead.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Book a visit
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="btn btn-ghost">
                All solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Offerings ---------- */}
      <section className="section bg-sand-50">
        <div className="container">
          <SectionHeading
            eyebrow="Crafting care, endless possibilities"
            title="What you can do from home"
            intro="One platform, the whole family — from quick questions to ongoing specialist support."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.offerings.map((o) => (
              <div key={o.title} className="card card-hover p-8">
                <span className="icon-badge bg-brand-100 text-brand-700">
                  <Icon name={o.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl">{o.title}</h3>
                <p className="mt-3 text-base text-ink-600">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="From sign-up to seen in four steps"
            align="center"
          />
          <StepGrid steps={t.steps} tone="light" className="mt-12" />
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section className="section bg-sand-50">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Good to know"
            title="Telehealth questions, answered"
            intro="Everything you need to feel confident before your first visit."
          />
          <FaqAccordion items={t.faqs} />
        </div>
      </section>

      <CtaBanner
        title="Ready to see a clinician from home?"
        body="Book a telehealth visit today, or talk to a care advisor about the right plan for your family."
      />
    </>
  );
}
