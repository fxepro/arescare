import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import type { ProjectDetail } from "@/lib/projects";

export function ProjectPage({ project: p }: { project: ProjectDetail }) {
  return (
    <>
      <PageBanner
        tone="light"
        eyebrow="Project"
        title={p.title}
        subtitle={p.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: p.title },
        ]}
      />

      <section className="section">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={p.image}
              alt={p.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 36rem"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Project activities" title="Overview" />
            <p className="mt-5 text-lg text-ink-600">{p.introduction}</p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Discuss this project
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand-50">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div>
            <SectionHeading title="Objectives" />
            <ul className="mt-6 space-y-3">
              {p.objectives.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base text-ink-700">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Methodology" />
            <ul className="mt-6 space-y-3">
              {p.methodology.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base text-ink-700">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Beneficiaries" />
            <ul className="mt-6 space-y-3">
              {p.beneficiaries.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base text-ink-700">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to learn more about this work?"
        body="Email our research team — we'd love to share findings and explore collaboration."
      />
    </>
  );
}
