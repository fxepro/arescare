import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { contactPage } from "@/lib/pages/contact";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.banner.subtitle,
};

export default function ContactPage() {
  const p = contactPage;

  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow="Contact"
        title={p.banner.title}
        subtitle={p.banner.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={p.heading} />
            <div className="mt-8 space-y-6">
              {p.details.map((item) => (
                <div key={item.label} className="card p-6">
                  <div className="flex items-start gap-4">
                    <span className="icon-badge bg-brand-100 text-brand-700">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-ink-900">{item.label}</p>
                      {"lines" in item ? (
                        <p className="mt-2 text-base text-ink-600">
                          {item.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      ) : (
                        <a
                          href={item.href}
                          className="mt-2 block text-base font-medium text-brand-700 hover:text-brand-800"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8 lg:p-10">
            <SectionHeading title={p.cta.title} intro={p.cta.body} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={contact.emailHref} className="btn btn-primary">
                <Icon name="mail" className="h-4 w-4" />
                Email us
              </a>
              <Link href="/solutions" className="btn btn-ghost">
                Explore solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="We're here when you're ready."
        body="Send us a message at contact@arescare.com — a care advisor will respond promptly."
      />
    </>
  );
}
