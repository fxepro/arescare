import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { projectsList, projectsPage } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: projectsPage.banner.subtitle,
};

export default function ProjectsPage() {
  const p = projectsPage;

  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow="Projects"
        title={p.banner.title}
        subtitle={p.banner.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={p.intro.image}
              alt={p.intro.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 36rem"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow={p.intro.eyebrow} title={p.intro.title} />
            <p className="mt-5 text-lg text-ink-600">{p.intro.body}</p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Get in touch
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand-50">
        <div className="container">
          <SectionHeading
            eyebrow="Featured work"
            title="Research and innovation projects"
            align="center"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {projectsList.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card card-hover group overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 24rem"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="mt-3 text-base text-ink-600">{project.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-brand-700">
                    View project
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Interested in partnering on research?"
        body="Tell us about your project goals — we'll explore how Arescare can help."
      />
    </>
  );
}
