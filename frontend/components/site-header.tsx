"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icon";
import { nav, contact } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-blush-50/85 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-base font-medium text-ink-700 transition-colors hover:bg-white hover:text-navy-900"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="card overflow-hidden p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-base text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.phoneHref} className="btn btn-ghost">
            <Icon name="phone" className="h-4 w-4" />
            {contact.phone}
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-blush-50 lg:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-ink-800 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2"
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
