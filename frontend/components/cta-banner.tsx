import Link from "next/link";
import { Icon } from "@/components/icon";
import { contact } from "@/lib/site";

export function CtaBanner({
  title = "Let's take care of your family's health.",
  body = "Talk to a care advisor today — we'll help you find the right mix of services, with no pressure and no jargon.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="banner-surface relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 lg:py-20">
          <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-ink-200">{body}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-light">
                Get started
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={contact.emailHref} className="btn btn-accent">
                <Icon name="mail" className="h-4 w-4" />
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
