import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { StepGrid } from "@/components/step-grid";
import { CtaBanner } from "@/components/cta-banner";
import { clsx } from "@/lib/clsx";
import { accentBadge, accentTile } from "@/lib/accent";
import { services, features, stats, steps, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-blush-50 to-blush-50" />
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="eyebrow">Advisory · Technology · Care</span>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Caring for your whole family,{" "}
              <span className="italic text-brand-600">for life.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-600">
              Arescare brings telehealth, chronic care, medication access and a
              dedicated care team together in one friendly place — so looking
              after the people you love feels simple.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/solutions" className="btn btn-primary">
                Explore solutions
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Talk to us
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-ink-500">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-5 w-5 text-accent-600" />
                Evenings & weekends
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-5 w-5 text-accent-600" />
                HIPAA certified
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-5 w-5 text-accent-600" />
                Whole-family care
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-200 via-brand-100 to-accent-200">
              <Image
                src="/media/2024/07/vecteezy_funny-doctor-in-medical-uniform-isolated-on-transparent_24841404.png"
                alt="A friendly Arescare clinician"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="object-contain object-bottom"
              />
            </div>
            <div className="card absolute -left-2 top-8 hidden items-center gap-3 px-4 py-3 sm:flex">
              <span className="icon-badge bg-accent-100 text-accent-700">
                <Icon name="heart" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-base font-medium text-ink-900">4.8 / 5</p>
                <p className="text-sm text-ink-500">Family rating</p>
              </div>
            </div>
            <div className="card absolute -right-2 bottom-10 hidden items-center gap-3 px-4 py-3 sm:flex">
              <span className="icon-badge bg-brand-100 text-brand-700">
                <Icon name="video" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-base font-medium text-ink-900">Telehealth</p>
                <p className="text-sm text-ink-500">Visit in minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="border-y border-ink-100 bg-white">
        <div className="container grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-display text-3xl font-medium text-navy-900">
                {s.value}
              </p>
              <p className="mt-1 text-base text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why families choose us"
            title="Healthcare that actually fits your life"
            intro="No waiting rooms, no runaround — just coordinated, compassionate care built around the people you love."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card card-hover p-8">
                <span className={clsx("icon-badge", accentBadge[f.accent])}>
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl">{f.title}</h3>
                <p className="mt-3 text-base text-ink-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section bg-sand-50">
        <div className="container">
          <SectionHeading
            eyebrow="What we offer"
            title="Everything your family needs, in one place"
            intro="Six connected services, one coordinated team. Mix and match what you need — we keep it all working together."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div
                  className={clsx(
                    "flex items-center justify-between bg-gradient-to-br p-6",
                    accentTile[s.accent],
                  )}
                >
                  <span className="icon-badge bg-white/70 text-navy-800">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <Icon
                    name="arrowUp"
                    className="h-5 w-5 text-navy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-brand-700">
                    {s.tagline}
                  </p>
                  <h3 className="mt-2 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-base text-ink-600">{s.description}</p>
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

      {/* ---------- Why choose / media split ---------- */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/media/2024/07/national-cancer-institute-LlZCxFmljxI-unsplash.jpg"
                alt="A clinician supporting a patient"
                fill
                sizes="(max-width: 1024px) 90vw, 36rem"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="The Arescare difference"
              title="A boutique team that knows your family by name"
              intro="We're small enough to stay close to the people we serve, and connected enough to bring you the best of modern healthcare."
            />
            <ul className="mt-8 space-y-4">
              {[
                "One coordinated care team across every service",
                "Personalized plans tailored to each family member",
                "Transparent costs and affordable medication access",
                "Secure, HIPAA-compliant records you control",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-base text-ink-700">{point}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-dark mt-8">
              More about us
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="section">
        <div className="container">
          <div className="banner-surface relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 lg:py-20">
            <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative">
              <SectionHeading
                eyebrow="How it works"
                title="Getting started takes minutes"
                intro="Four simple steps from first hello to ongoing, coordinated care."
                light
              />
              <StepGrid steps={steps} tone="navy" className="mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section bg-sand-50">
        <div className="container">
          <SectionHeading
            eyebrow="Family stories"
            title="Trusted by the families we serve"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex flex-col p-8">
                <div className="flex gap-1 text-brand-400" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-medium text-ink-900">{t.name}</p>
                    <p className="text-sm text-ink-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CtaBanner />
    </>
  );
}
