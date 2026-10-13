import { Container } from "@/components/Container";
import { Wordmark } from "@/components/Wordmark";

const FOOTER_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Plans", href: "#plans" },
  { label: "Sign Up", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white sm:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <a href="#top" className="text-2xl">
            <Wordmark onDark alt="Clickworks home" sizes="150px" />
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/45 sm:text-left">
          © {new Date().getFullYear()} Clickworks. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
