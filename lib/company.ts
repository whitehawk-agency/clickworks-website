/**
 * Business identity and external profiles.
 *
 * FILL THESE IN. Everything here is rendered verbatim on a public page, and
 * several fields are legally operative (a company number and registered
 * office are statutory disclosures in the UK; the contact address is how data
 * subjects exercise GDPR/CCPA rights). Nothing is invented here — each field
 * is empty until someone supplies the real value, and every component treats
 * an empty value as "omit this", so an unfilled field is left off the page
 * rather than shipped as a placeholder that reads as fact.
 */
export const COMPANY = {
  /** Registered legal name, e.g. "Clickworks Ltd". */
  legalName: "",
  /** Companies House (or equivalent) registration number. */
  registrationNumber: "",
  /** Registered office, one line. */
  registeredAddress: "",
  /** VAT number, if registered. */
  vatNumber: "",
  /** General enquiries. Also the address for privacy requests below. */
  contactEmail: "",
  /** Where GDPR/CCPA requests should go, if different from contactEmail. */
  privacyEmail: "",
} as const;

/** Trading name, shown in the UI. Safe to display before the rest is filled. */
export const TRADING_NAME = "Clickworks";

/**
 * Social profiles. Leave an href empty and that icon is not rendered — a
 * missing link is better than one that goes nowhere.
 */
export const SOCIALS = [
  { label: "Instagram", href: "" },
  { label: "TikTok", href: "" },
  { label: "X", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "YouTube", href: "" },
] as const;

export const SOCIAL_HANDLE = "@clickworks";

/**
 * Flip to true only once something is actually set that needs consent —
 * analytics, embedded media that sets cookies, a pixel. While it is false the
 * site sets no cookies and stores nothing, so the consent banner stays out of
 * the way: showing a cookie notice on a site that sets no cookies is itself a
 * misleading statement.
 */
export const TRACKING_ENABLED = false;

/** True once any field that must be shown publicly has been supplied. */
export const HAS_LEGAL_DETAILS = Boolean(
  COMPANY.legalName ||
    COMPANY.registrationNumber ||
    COMPANY.registeredAddress ||
    COMPANY.contactEmail,
);

/** Where privacy requests go, falling back to the general address. */
export const PRIVACY_CONTACT = COMPANY.privacyEmail || COMPANY.contactEmail;

/** Review date shown on the policy pages. */
export const POLICY_UPDATED = "2 November 2026";
