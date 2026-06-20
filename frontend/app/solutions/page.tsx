import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { clsx } from "@/lib/clsx";
import { accentBadge, accentTile } from "@/lib/accent";
import { services } from "@/lib/content";
import { solutionsPage } from "@/lib/pages/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: solutionsPage.intro.body,
};

const serviceDescriptions = Object.fromEntries(
  services.map((s) => [s.slug, s.description]),
);

export default function SolutionsPage() {
  const p = solutionsPage;

  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow={p.banner.eyebrow}
        title={p.banner.title}
        subtitle={p.banner.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
      />

      {/* ---------- Intro ---------- */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="text-lg text-ink-600">{p.intro.body}</p>
        </div>
      </section>

      {/* ---------- Service grid ---------- */}
      <section className="section bg-sand-50">
        <div className="container">
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.serviceCards.map((card) => (
              <Link
                key={card.slug}
                href={`/solutions/${card.slug}`}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div
                  className={clsx(
                    "flex items-center justify-between bg-gradient-to-br p-6",
                    accentTile[card.accent],
                  )}
                >
                  <span className="icon-badge bg-white/70 text-navy-800">
                    <Icon name={card.icon} className="h-6 w-6" />
                  </span>
                  <Icon
                    name="arrowUp"
                    className="h-5 w-5 text-navy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-brand-700">
                    {card.category}
                  </p>
                  <h3 className="mt-2 text-2xl">{card.title}</h3>
                  <p className="mt-3 flex-1 text-base text-ink-600">
                    {serviceDescriptions[card.slug]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-brand-700">
                    Learn more
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Wellness ---------- */}
      <section className="section">
        <div className="container text-center">
          <SectionHeading
            title={p.wellness.title}
            intro={p.wellness.subtitle}
            align="center"
          />
        </div>
      </section>

      {/* ---------- Invest in your health ---------- */}
      <section className="section bg-sand-50">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={p.invest.title} intro={p.invest.body} />
            <p className="mt-6 text-base font-medium text-ink-800">
              {p.invest.highlight}
            </p>
            <ul className="mt-8 space-y-4">
              {p.invest.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={clsx(
                      "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                      accentBadge.sky,
                    )}
                  >
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-base text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/contact" className="btn btn-primary">
                Get expert advice
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={p.pillars.image}
              alt={p.pillars.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 36rem"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- Pillars ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={p.pillars.eyebrow}
            title={p.pillars.title}
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.pillars.items.map((item) => (
              <div key={item.title} className="card card-hover p-8 text-center">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 text-base text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="section bg-sand-50">
        <div className="container text-center">
          <h2 className="font-display text-4xl text-navy-900 sm:text-5xl">
            {p.closing.title}
          </h2>
          <p className="mt-4 text-lg text-ink-600">{p.closing.tagline}</p>
        </div>
      </section>

      <CtaBanner
        title="Ready to find the right mix of services?"
        body="Talk to a care advisor — we'll help you build a plan around your family's needs."
      />
    </>
  );
}
