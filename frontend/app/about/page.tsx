import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { aboutPage } from "@/lib/pages/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.banner.subtitle,
};

export default function AboutPage() {
  const p = aboutPage;

  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow="About"
        title={p.banner.title}
        subtitle={p.banner.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow={p.intro.eyebrow} title={p.intro.title} />
          <p className="mt-5 text-lg text-ink-600">{p.intro.body}</p>
        </div>
      </section>

      {p.pillars.map((pillar, i) => (
        <section key={pillar.title} className={i % 2 === 1 ? "section bg-sand-50" : "section"}>
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            <div className={i % 2 === 1 ? "lg:order-last" : ""}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 36rem"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl">{pillar.title}</h2>
              <p className="mt-5 text-lg text-ink-600">{pillar.body}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-sand-50">
        <div className="container">
          <SectionHeading
            eyebrow="Our journey"
            title="Milestones that shaped Arescare"
            align="center"
          />
          <div className="mt-12 space-y-12">
            {p.timeline.map((m) => (
              <article
                key={m.date}
                className="card grid overflow-hidden lg:grid-cols-[minmax(0,18rem)_1fr]"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-full">
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 18rem"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand-700">
                    {m.date}
                  </p>
                  <h3 className="mt-3 text-2xl">{m.title}</h3>
                  <p className="mt-4 text-base text-ink-600">{m.body}</p>
                  <ul className="mt-6 space-y-2">
                    {m.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-base text-ink-700">
                        <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={p.expertise.eyebrow}
            title={p.expertise.title}
            align="center"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.expertise.roles.map((role) => (
              <li key={role} className="card card-hover p-6 text-center font-display text-lg font-bold text-ink-800">
                {role}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/faqs" className="btn btn-primary">
              Healthcare FAQs
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
