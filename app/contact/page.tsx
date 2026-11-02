import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { COMPANY, SOCIALS, TRADING_NAME } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact — Clickworks",
  description: "How to get in touch with the Clickworks team.",
};

/*
  Deliberately no form. A form would collect personal data, which would in
  turn require a lawful basis, a retention period and a consent flow. Until
  there is somewhere for submissions to go, a plain address is both honest
  and less to comply with.
*/
export default function ContactPage() {
  const profiles = SOCIALS.filter((s) => s.href);

  return (
    <>
      <PageIntro
        title="Get in touch"
        lede={`Tell us what you are trying to grow and we will tell you whether ${TRADING_NAME} is the right fit.`}
      />

      <Container className="max-w-3xl pb-20 sm:pb-28">
        {COMPANY.contactEmail ? (
          <p className="text-lg text-ink">
            Email us at{" "}
            <a
              href={`mailto:${COMPANY.contactEmail}`}
              className="font-semibold underline underline-offset-4 hover:text-ink-muted"
            >
              {COMPANY.contactEmail}
            </a>
            .
          </p>
        ) : (
          <p className="text-lg text-ink">
            Our contact address is being set up and will be published here
            shortly.
          </p>
        )}

        {COMPANY.registeredAddress && (
          <div className="mt-10">
            <h2 className="text-sm font-medium text-ink-muted">
              Registered office
            </h2>
            <address className="mt-2 not-italic text-base text-ink">
              {COMPANY.registeredAddress}
            </address>
          </div>
        )}

        {profiles.length > 0 && (
          <div className="mt-10">
            <h2 className="text-sm font-medium text-ink-muted">Elsewhere</h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {profiles.map((profile) => (
                <li key={profile.label}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-ink underline underline-offset-4 hover:text-ink-muted"
                  >
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </>
  );
}
