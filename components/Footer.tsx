import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Container } from "@/components/Container";
import { CONTACT_HREF } from "@/lib/links";
import { Wordmark } from "@/components/Wordmark";
import { TikTokIcon, XIcon } from "@/components/BrandIcons";

/** Set this to show the "Founded & built in …" line; empty hides it. */
const FOUNDED_IN = "";

const SOCIAL_HANDLE = "@clickworks";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Press", href: CONTACT_HREF },
      { label: "Careers", href: CONTACT_HREF },
      { label: "Core Team", href: "#community" },
    ],
    // Second group stacked under the first, as in the reference layout.
    subHeading: "Terms & Policies",
    subLinks: [
      { label: "Terms of Service", href: CONTACT_HREF },
      { label: "Privacy Policy", href: CONTACT_HREF },
      { label: "Cookie Policy", href: CONTACT_HREF },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Websites", href: "#services" },
      { label: "Social Media", href: "#services" },
      { label: "Branding", href: "#services" },
      { label: "The App", href: "#features" },
    ],
  },
  {
    heading: "For Clients",
    links: [
      { label: "Get Started", href: CONTACT_HREF },
      { label: "Community", href: "#community" },
      { label: "Support", href: CONTACT_HREF },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "News", href: CONTACT_HREF },
      { label: "Our Work", href: "#work" },
    ],
  },
];

// Point these at the real profile URLs.
const SOCIALS = [
  { label: "Instagram", href: CONTACT_HREF, Icon: Instagram },
  { label: "TikTok", href: CONTACT_HREF, Icon: TikTokIcon },
  { label: "X", href: CONTACT_HREF, Icon: XIcon },
  { label: "LinkedIn", href: CONTACT_HREF, Icon: Linkedin },
  { label: "YouTube", href: CONTACT_HREF, Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-14 sm:py-20">
      <Container>
        <a href="#top" className="inline-block text-3xl">
          <Wordmark alt="Clickworks home" sizes="200px" />
        </a>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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

        <div className="mt-16 flex flex-col items-center gap-6 text-center sm:mt-20 sm:flex-row sm:justify-between sm:text-left">
          <p className="order-2 text-sm text-ink-muted sm:order-1 sm:flex-1">
            {FOUNDED_IN ? `Founded & built in ${FOUNDED_IN}` : null}
          </p>

          <p className="order-1 text-sm text-ink-muted sm:order-2">
            © {new Date().getFullYear()} Clickworks. All rights reserved.
          </p>

          <div className="order-3 flex items-center gap-4 sm:flex-1 sm:justify-end">
            <span className="text-sm text-ink-muted">{SOCIAL_HANDLE}</span>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
