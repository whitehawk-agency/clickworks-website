import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Container } from "@/components/Container";
import { Wordmark } from "@/components/Wordmark";
import { TikTokIcon, XIcon } from "@/components/BrandIcons";
import {
  COMPANY,
  HAS_LEGAL_DETAILS,
  SOCIALS,
  SOCIAL_HANDLE,
  TRADING_NAME,
} from "@/lib/company";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Core Team", href: "/our-team" },
      { label: "Contact", href: "/contact" },
    ],
    // Second group stacked under the first, as in the reference layout.
    subHeading: "Terms & Policies",
    subLinks: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Websites", href: "/services" },
      { label: "Social Media", href: "/services" },
      { label: "Branding", href: "/services" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "News", href: "/news" },
      { label: "Our Work", href: "/projects" },
    ],
  },
];

const SOCIAL_ICONS = {
  Instagram,
  TikTok: TikTokIcon,
  X: XIcon,
  LinkedIn: Linkedin,
  YouTube: Youtube,
} as const;

export function Footer() {
  // Only render profiles that actually have a destination.
  const profiles = SOCIALS.filter((s) => s.href);

  return (
    <footer className="border-t border-line bg-paper py-14 sm:py-20">
      <Container>
        <a href="/" className="inline-block text-3xl">
          <Wordmark alt="Clickworks home" sizes="200px" />
        </a>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-sm font-medium text-ink-muted">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink transition-colors hover:text-ink-muted"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {column.subHeading && (
                <>
                  <h3 className="mt-8 text-sm font-medium text-ink-muted">
                    {column.subHeading}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {column.subLinks?.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-ink transition-colors hover:text-ink-muted"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </nav>
          ))}
        </div>

        {/*
          Statutory business identification. Each line appears only once a real
          value is set in lib/company.ts, so nothing invented is published; an
          empty block means the details have not been supplied yet.
        */}
        {HAS_LEGAL_DETAILS && (
          <div className="mt-14 border-t border-line pt-8 text-sm leading-relaxed text-ink-muted">
            <h2 className="sr-only">Company details</h2>
            {COMPANY.legalName && (
              <p>
                {COMPANY.legalName}
                {COMPANY.registrationNumber && (
                  <>
                    {" "}
                    &middot; Registered in England and Wales, company no.{" "}
                    {COMPANY.registrationNumber}
                  </>
                )}
                {COMPANY.vatNumber && <> &middot; VAT {COMPANY.vatNumber}</>}
              </p>
            )}
            {COMPANY.registeredAddress && (
              <address className="not-italic">
                Registered office: {COMPANY.registeredAddress}
              </address>
            )}
            {COMPANY.contactEmail && (
              <p>
                <a
                  href={`mailto:${COMPANY.contactEmail}`}
                  className="underline underline-offset-4 transition-colors hover:text-ink"
                >
                  {COMPANY.contactEmail}
                </a>
              </p>
            )}
          </div>
        )}

        <div className="mt-16 flex flex-col items-center gap-6 text-center sm:mt-20 sm:flex-row sm:justify-between sm:text-left">
          <p className="order-2 text-sm text-ink-muted sm:order-1 sm:flex-1" />

          <p className="order-1 text-sm text-ink-muted sm:order-2">
            © {new Date().getFullYear()} {COMPANY.legalName || TRADING_NAME}.
            All rights reserved.
          </p>

          <div className="order-3 flex items-center gap-4 sm:flex-1 sm:justify-end">
            <span className="text-sm text-ink-muted">{SOCIAL_HANDLE}</span>
            {profiles.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${TRADING_NAME} on ${label} (opens in a new tab)`}
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  <Icon className="size-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
