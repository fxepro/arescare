import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Crumb = { label: string; href?: string };

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  highlights,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  highlights?: string[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        dark ? "banner-surface" : "banner-surface-light",
      )}
    >
      {dark && (
        <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      )}
      <div
        className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative py-16 lg:py-20">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand-700">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink-700">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-ink-300">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-2xl">
          {eyebrow && (
            <span className={clsx("eyebrow", dark && "eyebrow-light")}>{eyebrow}</span>
          )}
          <h1
            className={clsx(
              "mt-4 text-4xl sm:text-5xl",
              dark ? "text-white" : "text-ink-900",
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={clsx("mt-5 text-lg", dark ? "text-ink-200" : "text-ink-600")}>
              {subtitle}
            </p>
          )}
          {highlights && (
            <ul className="mt-7 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li key={h} className="pill bg-white/70 text-navy-800 ring-1 ring-ink-100">
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
