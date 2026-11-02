import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { PRIVACY_CONTACT, TRACKING_ENABLED } from "@/lib/company";

export const metadata: Metadata = {
  title: "Cookie Policy — Clickworks",
  description: "Which cookies this site sets, and how to control them.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This page lists every cookie this site places, and how you control them."
    >
      <LegalSection heading="What we set today">
        {TRACKING_ENABLED ? (
          <p>
            We set cookies for the purposes listed below. Nothing other than
            strictly necessary cookies is placed until you accept.
          </p>
        ) : (
          <>
            <p>
              <strong className="font-semibold text-ink">
                This site currently sets no cookies at all.
              </strong>{" "}
              There is no analytics, no advertising pixel and no embedded media
              that stores anything on your device.
            </p>
            <p>
              Because nothing is stored, there is no consent banner to dismiss
              and nothing for you to opt out of.
            </p>
          </>
        )}
      </LegalSection>

      <LegalSection heading="If that changes">
        <p>
          Before any non-essential cookie is introduced, a consent banner will
          appear and nothing will be set until you choose. Strictly necessary
          cookies — the kind required for the site to function — may be set
          without consent, and this page will name each one, say what it does
          and how long it lasts.
        </p>
      </LegalSection>

      <LegalSection heading="Controlling cookies in your browser">
        <p>
          Every major browser lets you block or delete cookies for a site from
          its privacy or site-settings panel. Blocking cookies will not stop you
          reading these pages.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        {PRIVACY_CONTACT ? (
          <p>
            Questions about this policy:{" "}
            <a
              href={`mailto:${PRIVACY_CONTACT}`}
              className="text-ink underline underline-offset-4 hover:text-ink-muted"
            >
              {PRIVACY_CONTACT}
            </a>
            .
          </p>
        ) : (
          <p>
            A contact address will be published here. Until then, please use the
            details on our Contact page.
          </p>
        )}
      </LegalSection>
    </LegalPage>
  );
}
