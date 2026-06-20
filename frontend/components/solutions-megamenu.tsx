import Link from "next/link";
import { Icon } from "@/components/icon";
import { accentBadge } from "@/lib/accent";
import { clsx } from "@/lib/clsx";
import { services } from "@/lib/content";

export function SolutionsMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="site-megamenu-panel" role="region" aria-label="Solutions menu">
      <div className="container py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:items-start">
          <div className="border-b border-accent-100 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <span className="eyebrow">What we offer</span>
            <p className="mt-4 font-display text-2xl text-ink-900">
              Six connected services, one coordinated team.
            </p>
            <p className="mt-3 text-base text-ink-600">
              Mix and match telehealth, chronic care, medication access and more —
              we keep it all working together.
            </p>
            <Link
              href="/solutions"
              className="btn btn-primary mt-6"
              onClick={onNavigate}
            >
              View all solutions
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/solutions/${service.slug}`}
                className="site-megamenu-link group"
                onClick={onNavigate}
              >
                <span className={clsx("icon-badge shrink-0", accentBadge[service.accent])}>
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-base text-ink-600">{service.tagline}</span>
                </span>
                <Icon
                  name="arrowUp"
                  className="h-4 w-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
