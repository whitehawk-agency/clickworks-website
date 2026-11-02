"use client";

import { useEffect, useState } from "react";
import { getConsent, resetConsent, type ConsentChoice } from "@/components/CookieConsent";

/**
 * Lets someone see and change the choice they made. Being able to withdraw
 * consent as easily as it was given is a GDPR requirement, so this lives on
 * the Cookie Policy page where people go looking for it.
 */
export function CookieSettingsButton() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setChoice(getConsent());
    sync();
    setReady(true);
    window.addEventListener("cw-consent-change", sync);
    return () => window.removeEventListener("cw-consent-change", sync);
  }, []);

  if (!ready) return null;

  return (
    <div>
      <p>
        {choice === "accepted"
          ? "You accepted optional cookies."
          : choice === "declined"
            ? "You declined optional cookies."
            : "You have not made a choice yet — the banner is still showing."}
      </p>
      {choice && (
        <button
          type="button"
          onClick={resetConsent}
          className="mt-3 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Change your choice
        </button>
      )}
    </div>
  );
}
