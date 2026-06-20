"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icon";
import { SolutionsMegaMenu } from "@/components/solutions-megamenu";
import { clsx } from "@/lib/clsx";
import { nav, contact } from "@/lib/site";

const SOLUTIONS_HREF = "/solutions";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  function closeMenus() {
    setMobileOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }

  return (
    <header className="site-header">
      <div
        className="relative hidden lg:block"
        onMouseLeave={() => setSolutionsOpen(false)}
      >
        <div className="container flex h-20 items-center justify-between gap-6 py-3">
          <Logo />

          <nav className="flex items-center gap-1" aria-label="Primary">
            {nav.map((item) =>
              item.href === SOLUTIONS_HREF && item.children ? (
                <div
                  key={item.href}
                  onMouseEnter={() => setSolutionsOpen(true)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "site-nav-link site-nav-link-mega",
                      solutionsOpen && "bg-accent-50 text-navy-900",
                    )}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                    onFocus={() => setSolutionsOpen(true)}
                  >
                    {item.label}
                    <Icon
                      name="chevron"
                      className={clsx(
                        "h-4 w-4 transition-transform",
                        solutionsOpen && "rotate-180",
                      )}
                    />
                  </Link>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="site-nav-link">
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a href={contact.emailHref} className="btn btn-ghost">
              <Icon name="mail" className="h-4 w-4" />
              Email us
            </a>
            <Link href="/contact" className="btn btn-primary">
              Get started
            </Link>
          </div>
        </div>

        {solutionsOpen && (
          <SolutionsMegaMenu onNavigate={() => setSolutionsOpen(false)} />
        )}
      </div>

      {/* Mobile / tablet bar */}
      <div className="container flex h-20 items-center justify-between gap-6 py-3 lg:hidden">
        <Logo />

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get started
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-200 text-ink-800"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="site-nav-mobile-panel">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) =>
              item.href === SOLUTIONS_HREF && item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    className="site-nav-mobile-link flex w-full items-center justify-between"
                    onClick={() => setMobileSolutionsOpen((v) => !v)}
                    aria-expanded={mobileSolutionsOpen}
                  >
                    {item.label}
                    <Icon
                      name="chevron"
                      className={clsx(
                        "h-5 w-5",
                        mobileSolutionsOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="mb-2 ml-2 space-y-1 border-l-2 border-accent-200 pl-4">
                      <Link
                        href={item.href}
                        onClick={closeMenus}
                        className="site-nav-dropdown-link"
                      >
                        All solutions
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenus}
                          className="site-nav-dropdown-link"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className="site-nav-mobile-link"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
