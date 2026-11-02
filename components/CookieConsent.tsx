"use client";

import { useCallback, useEffect, useState } from "react";
import { clsx } from "@/lib/clsx";

const STORAGE_KEY = "cw-cookie-consent";

export type ConsentChoice = "accepted" | "declined";

/** Broadcast so an open banner and the settings button stay in step. */
const CHANGE_EVENT = "cw-consent-change";

/** Read the stored choice. Safe where storage is blocked or unavailable. */
export function getConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

/** Clear the choice so the banner returns — how consent is withdrawn. */
export function resetConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage blocked; the banner will reappear on next load anyway.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * Cookie consent banner.
 *
 * Fixed to the bottom of every page, dark to match the site's hero and nav.
 * The choice is kept in localStorage, so the banner stays away once someone
 * has answered, on this and later visits.
 *
 * The copy is deliberately forward-looking — "we would like to set" rather
 * than "we use" — because the site currently sets no cookies. That keeps the
 * banner truthful today and still correct once analytics are added. Gate any
 * such script on `getConsent() === "accepted"` so nothing is ever set before
 * the visitor has agreed.
 */
export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => setChoice(getConsent()), []);

  useEffect(() => {
    refresh();
    setReady(true);
    window.addEventListener(CHANGE_EVENT, refresh);
    // Keep tabs in step if the choice is made in another one.
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(CHANGE_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  const decide = (next: ConsentChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: honour the choice for this page view only.
    }
    setChoice(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  // Render nothing until the stored choice is known, so the banner never
  // flashes up for someone who already answered.
  if (!ready || choice) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Consent"
      className={clsx(
        "fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 backdrop-blur-md",
        "motion-safe:animate-[nav-cta-in_300ms_var(--ease-out-soft)_both]",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
        <p className="text-sm leading-relaxed text-white/75">
          We would like to set optional cookies to understand how this site is
          used. Nothing is set unless you accept. See our{" "}
          <a
            href="/privacy"
            className="rounded-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="/cookies"
            className="rounded-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Cookie Policy
          </a>
          .
        </p>

        {/*
          Decline is given the same size and prominence as Accept. A buried or
          visually weaker reject is not freely given consent under the GDPR,
          and both the ICO and the EDPB have said so explicitly.
        */}
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className={clsx(
              "rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white",
              "transition-colors hover:border-white hover:bg-white/10",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            )}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className={clsx(
              "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink",
              "transition-colors hover:bg-white/90",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            )}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
