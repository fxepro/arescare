import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { nav, contact, site } from "@/lib/site";

const solutions = nav.find((n) => n.label === "Solutions")?.children ?? [];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-ink-200">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Image
            src={site.logoWhite}
            alt={`${site.name} — ${site.tagline}`}
            width={168}
            height={44}
            className="h-9 w-auto"
          />
          <p className="mt-5 text-base text-ink-300">
            Friendly, coordinated healthcare for the whole family — telehealth,
            chronic care, medication access and more, all in one place.
          </p>
          <div className="mt-6 space-y-3 text-base">
            <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-white">
              <Icon name="phone" className="h-4 w-4 text-brand-300" />
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-3 hover:text-white">
              <Icon name="mail" className="h-4 w-4 text-brand-300" />
              {contact.email}
            </a>
            <p className="flex items-start gap-3">
              <Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-brand-300" />
              <span>
                {contact.address.line2}, {contact.address.city}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium uppercase tracking-[0.16em] text-ink-400">
            Solutions
          </h2>
          <ul className="mt-5 space-y-3">
            {solutions.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-base text-ink-300 hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium uppercase tracking-[0.16em] text-ink-400">
            Company
          </h2>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-base text-ink-300 hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pill mt-6 bg-white/10 text-brand-200">
            <Icon name="shield" className="h-4 w-4" />
            HIPAA certified
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-base text-ink-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {contact.address.line1}. All rights reserved.
          </p>
          <p>{site.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
