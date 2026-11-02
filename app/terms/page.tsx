import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { COMPANY, PRIVACY_CONTACT, TRADING_NAME } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Service — Clickworks",
  description: "The terms on which the Clickworks website is made available.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These terms govern your use of this website. They do not govern any engagement with ${TRADING_NAME}, which is covered by a separate signed agreement.`}
    >
      <LegalSection heading="Who we are">
        <p>
          {COMPANY.legalName
            ? `This site is operated by ${COMPANY.legalName}${
                COMPANY.registrationNumber
                  ? `, registered in England and Wales under company number ${COMPANY.registrationNumber}`
                  : ""
              }.`
            : `This site is operated by ${TRADING_NAME}. Full company details are published in the footer.`}
        </p>
      </LegalSection>

      <LegalSection heading="Using this site">
        <p>
          You may read and share these pages. You may not copy the site&rsquo;s
          design, code or written content for your own commercial use, attempt
          to disrupt the service, or misrepresent your relationship with us.
        </p>
      </LegalSection>

      <LegalSection heading="What is on these pages">
        <p>
          The content here describes our services in general terms. It is not an
          offer, a quotation, or advice you should act on without speaking to
          us. Case studies and client names are illustrative of work done and
          are not a promise of a particular result.
        </p>
        <p>
          We may change, add to or remove anything on this site at any time.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The Clickworks name, wordmark and the design of this site belong to
          us. Client names and logos shown belong to their respective owners and
          appear with permission or as fair description of work performed.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          We take care to keep this site accurate and available, but it is
          provided as-is. To the extent the law allows, we are not liable for
          loss arising from your reliance on it. Nothing here limits liability
          for death or personal injury caused by negligence, or for fraud.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the law of England and Wales, and the
          courts of England and Wales have exclusive jurisdiction.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        {PRIVACY_CONTACT ? (
          <p>
            Questions about these terms:{" "}
            <a
              href={`mailto:${PRIVACY_CONTACT}`}
              className="text-ink underline underline-offset-4 hover:text-ink-muted"
            >
              {PRIVACY_CONTACT}
            </a>
            .
          </p>
        ) : (
          <p>A contact address will be published here.</p>
        )}
      </LegalSection>
    </LegalPage>
  );
}
