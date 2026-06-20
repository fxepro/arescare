import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { StepGrid } from "@/components/step-grid";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";
import type { SolutionDetail } from "@/lib/solutions";

export function SolutionPage({ solution: s }: { solution: SolutionDetail }) {
  return (
    <>
      <PageBanner
        tone="light"
        eyebrow={s.name}
        title={s.bannerTitle}
        subtitle={s.bannerSubtitle}
        highlights={s.highlights}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: s.name },
        ]}
      />

      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src={s.lead.image}
                alt={s.leadImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 36rem"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={s.leadEyebrow} title={s.lead.title} />
            <p className="mt-5 text-lg text-ink-600">{s.lead.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                {s.primaryCtaLabel}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="btn btn-ghost">
                All solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand-50">
        <div className="container">
          <SectionHeading
            eyebrow={s.offeringsEyebrow ?? "Crafting care, endless possibilities"}
            title={s.offeringsTitle}
            intro={s.offeringsIntro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.offerings.map((o) => (
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

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={s.stepsEyebrow ?? "How it works"}
            title={s.stepsTitle}
            align="center"
          />
          <StepGrid steps={s.steps} tone="light" className="mt-12" />
        </div>
      </section>

      <section className="section bg-sand-50">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow={s.faqEyebrow ?? "Good to know"}
            title={s.faqTitle}
            intro={s.faqIntro}
          />
          <FaqAccordion items={s.faqs} />
        </div>
      </section>

      <CtaBanner title={s.ctaTitle} body={s.ctaBody} />
    </>
  );
}
