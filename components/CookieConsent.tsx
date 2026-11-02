"use client";

import { useEffect, useState } from "react";
import { TRACKING_ENABLED } from "@/lib/company";

const STORAGE_KEY = "cw-cookie-consent";

export type ConsentChoice = "accepted" | "rejected";

/** Read the stored choice. Safe where storage is blocked or unavailable. */
export function getConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Consent banner for non-essential cookies.
 *
 * It renders nothing while TRACKING_ENABLED is false, which is the current
 * state: the site sets no cookies, and a banner claiming otherwise would be a
 * false statement rather than a compliance measure. Flip that flag in
 * lib/company.ts at the same time as adding analytics, and gate the script on
 * getConsent() === "accepted" so nothing is set before a choice is made.
 *
 * Reject is given equal visual weight to Accept, which the EDPB guidance and
 * the ICO both require — a prominent Accept beside a buried Reject is not
 * freely given consent.
 */
export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChoice(getConsent());
    setReady(true);
  }, []);

  const decide = (next: ConsentChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: honour the choice for this page view only.
    }
    setChoice(next);
  };

  if (!TRACKING_ENABLED || !ready || choice) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <h2
            id="cookie-consent-title"
            className="text-sm font-semibold text-ink"
          >
            Cookies on this site
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            We would like to set optional cookies to understand how the site is
            used. Nothing is set unless you accept.{" "}
            <a
              href="/cookies"
              className="text-ink underline underline-offset-4"
            >
              Read our Cookie Policy
            </a>
            .
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
