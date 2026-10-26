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

/** The phone sheet groups the same links under headings. */
const NAV_GROUPS = [
  {
    label: "Explore",
    links: NAV_LINKS.filter((l) =>
      ["Features", "Services", "Our Work"].includes(l.label),
    ),
  },
  {
    label: "Company",
    links: NAV_LINKS.filter((l) =>
      ["About Us", "Community", "Sign Up"].includes(l.label),
    ),
  },
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

  // Running index across the groups, so the links trail in one after another.
  let order = -1;

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          // While the sheet is open the bar goes transparent and the sheet
          // runs behind it, so the two read as one unbroken dark surface.
          open
            ? "border-transparent bg-transparent backdrop-blur-none md:border-white/10 md:bg-black/85 md:backdrop-blur-md"
            : "border-white/10 bg-black/85 backdrop-blur-md",
        )}
      >
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
                  "shrink-0 text-2xl text-white md:text-xl",
                  open && "hidden md:block",
                )}
              >
                <Wordmark
                  onDark
                  alt="Clickworks home"
                  priority
                  sizes="(max-width: 768px) 140px, 130px"
                />
              </a>

              <ul className="hidden items-center gap-7 md:flex">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="whitespace-nowrap text-sm font-medium text-white/70 transition-colors hover:text-white"
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

            {/*
              While the sheet is open the phone bar swaps to the close control
              on the left, where the wordmark was, and the CTA on the right.
            */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className={clsx(
                "inline-flex size-10 items-center justify-center rounded-full transition-colors md:hidden",
                open
                  ? "order-first -ml-2 text-white hover:bg-white/10"
                  : "absolute right-0 text-white hover:bg-white/10",
              )}
            >
              {open ? <X className="size-6" /> : <Menu className="size-5" />}
            </button>

            {open && (
              <a
                href={CONTACT_HREF}
                onClick={() => setOpen(false)}
                className="motion-safe:animate-[nav-cta-in_300ms_var(--ease-out-soft)_both] absolute right-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold leading-5 text-ink shadow-soft transition-colors hover:bg-white/90 md:hidden"
              >
                Get Started
              </a>
            )}
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
          "fixed inset-0 z-40 overflow-y-auto md:hidden",
          "bg-black/75 backdrop-blur-2xl",
          "transition-[opacity,translate,visibility] duration-300 ease-(--ease-out-soft)",
          "motion-reduce:transition-none",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <Container className="pb-12 pt-[4.5rem]">
          {NAV_GROUPS.map((group) => (
            <section key={group.label} className="mt-6 first:mt-0">
              <h2
                style={{
                  transitionDelay: open ? `${90 + ++order * 45}ms` : "0ms",
                }}
                className={clsx(
                  "px-2 pb-1 text-base font-medium text-white/40",
                  "transition-[opacity,translate] duration-300 ease-(--ease-out-soft)",
                  "motion-reduce:transition-none",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
              >
                {group.label}
              </h2>

              <ul className="flex flex-col">
                {group.links.map((link) => (
                  <li
                    key={link.label}
                    style={{
                      transitionDelay: open ? `${90 + ++order * 45}ms` : "0ms",
                    }}
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
                        "block rounded-xl px-2 py-3 text-xl font-medium text-white",
                        "transition-colors hover:bg-white/10",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </Container>
      </div>
    </>
  );
}
