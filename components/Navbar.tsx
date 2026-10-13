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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Main"
          className="relative flex h-16 items-center justify-center gap-4"
        >
          {/* Logo, links and the CTA all read as one group */}
          <div className="flex min-w-0 items-center gap-7">
            <a href="#top" className="shrink-0 text-xl text-ink">
              <Wordmark alt="Clickworks home" priority sizes="130px" />
            </a>

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
      </Container>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "block rounded-xl px-2 py-3 text-base font-medium text-ink",
                    "transition-colors hover:bg-paper-soft",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT_HREF}
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </Container>
      </div>
    </header>
  );
}
