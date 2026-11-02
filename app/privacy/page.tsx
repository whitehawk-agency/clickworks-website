import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { PRIVACY_CONTACT, TRACKING_ENABLED, TRADING_NAME } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy — Clickworks",
  description:
    "What Clickworks collects, why, and the rights you have over it under the UK GDPR and CCPA.",
};

/*
  Written against what this site actually does today: no forms, no analytics,
  no cookies set by us. If that changes — a waitlist form, a pixel, an
  embedded player — the "What we collect" and "Cookies" sections must be
  updated in the same change, and TRACKING_ENABLED flipped in lib/company.ts.

  This is a working draft, not legal advice. Have a solicitor review it before
  relying on it.
*/
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what ${TRADING_NAME} does with personal data, and the rights you have over it.`}
    >
      <LegalSection heading="What we collect">
        <p>
          This website has no sign-up, contact or waitlist form, sets no
          analytics and places no cookies of its own. If you simply read these
          pages, we do not collect personal data from you.
        </p>
        <p>
          Our hosting provider records standard server logs for every request —
          IP address, timestamp, the page requested, and browser user agent.
          These are kept for a short period for security and to diagnose
          faults. We do not use them to build a profile of you.
        </p>
        <p>
          If you email us, we hold your message and address for as long as
          needed to answer and to keep a record of the correspondence.
        </p>
      </LegalSection>

      <LegalSection heading="Why we are allowed to hold it">
        <p>
          Server logs rest on our legitimate interest in keeping the site
          available and secure. Email correspondence rests on our legitimate
          interest in replying to you, or on steps taken at your request before
          entering a contract.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          {TRACKING_ENABLED
            ? "We use cookies as described in our Cookie Policy, and ask for your consent before any that are not strictly necessary are set."
            : "We do not set cookies. If that changes, a consent banner will appear before any non-essential cookie is placed, and the Cookie Policy will list each one."}
        </p>
      </LegalSection>

      <LegalSection heading="Sharing">
        <p>
          We do not sell personal data, and we do not share it for advertising.
          Data is processed by our hosting provider purely to deliver the site.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights under the UK GDPR">
        <p>
          You have the right to ask for a copy of the data we hold about you,
          to have it corrected or erased, to object to or restrict how we use
          it, and to receive it in a portable form. You can withdraw consent at
          any time where consent is the basis we rely on.
        </p>
        <p>
          You also have the right to complain to the Information Commissioner&rsquo;s
          Office at ico.org.uk.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights under the CCPA">
        <p>
          If you are a California resident you may request the categories and
          specific pieces of personal information collected about you, request
          deletion, and know whether it has been sold or shared. We do not sell
          or share personal information as those terms are defined by the CCPA,
          so there is nothing to opt out of. You will not be treated
          differently for exercising any of these rights.
        </p>
      </LegalSection>

      <LegalSection heading="International transfers">
        <p>
          The site is served from a global content network, so a request may be
          handled by a server outside the UK or EEA. Transfers are covered by
          the hosting provider&rsquo;s standard contractual clauses.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        {PRIVACY_CONTACT ? (
          <p>
            For any request under this policy, write to{" "}
            <a
              href={`mailto:${PRIVACY_CONTACT}`}
              className="text-ink underline underline-offset-4 hover:text-ink-muted"
            >
              {PRIVACY_CONTACT}
            </a>
            . We respond within one month.
          </p>
        ) : (
          <p>
            A contact address for privacy requests will be published here. Until
            then, please use the contact details given on our Contact page.
          </p>
        )}
      </LegalSection>
    </LegalPage>
  );
}
