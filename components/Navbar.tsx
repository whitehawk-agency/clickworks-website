"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/Container";
import { Wordmark } from "@/components/Wordmark";
import { CONTACT_HREF } from "@/lib/links";
import { clsx } from "@/lib/clsx";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Community", href: "#community" },
  { label: "Sign Up", href: CONTACT_HREF },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <nav
            aria-label="Main"
            className="relative flex h-16 items-center justify-start gap-4 md:justify-center"
          >
            {/* Logo, links and the CTA all read as one group */}
            <div className="flex min-w-0 items-center gap-7">
              <a
                href="#top"
                className={clsx(
                  "shrink-0 text-2xl text-ink md:text-xl",
                  open && "hidden md:block",
                )}
              >
                <Wordmark
                  alt="Clickworks home"
                  priority
                  sizes="(max-width: 768px) 140px, 130px"
                />
              </a>

              {/* Opposite the X while the sheet is open, phones only. */}
              {open && (
                <a
                  href={CONTACT_HREF}
                  onClick={() => setOpen(false)}
                  className="motion-safe:animate-[nav-cta-in_300ms_var(--ease-out-soft)_both] rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-strong md:hidden"
                >
                  Get Started
                </a>
              )}

              <ul className="hidden items-center gap-7 md:flex">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="whitespace-nowrap text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT_HREF}
                className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-strong md:inline-flex"
              >
                Get Started
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="absolute right-0 inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-soft md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/*
        The sheet sits out of flow so it can fade rather than snap: a `hidden`
        toggle cannot transition. Visibility is in the transition list so it
        flips only once the fade has finished, keeping the links out of the
        tab order while closed.
      */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={clsx(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto md:hidden",
          "border-t border-line bg-paper/70 backdrop-blur-xl",
          "transition-[opacity,translate,visibility] duration-300 ease-(--ease-out-soft)",
          "motion-reduce:transition-none",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.label}
                // Links trail the panel in, one after another.
                style={{ transitionDelay: open ? `${90 + i * 45}ms` : "0ms" }}
                className={clsx(
                  "transition-[opacity,translate] duration-300 ease-(--ease-out-soft)",
                  "motion-reduce:transition-none",
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0",
                )}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? undefined : -1}
                  className={clsx(
                    "block rounded-xl px-2 py-4 text-xl font-medium text-ink",
                    "transition-colors hover:bg-paper-soft",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
