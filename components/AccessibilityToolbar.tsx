"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Accessibility, Minus, Plus, X } from "lucide-react";
import { clsx } from "@/lib/clsx";

const STORAGE_KEY = "cw-a11y";

type Prefs = { scale: number; contrast: "normal" | "high"; motion: "system" | "reduced" };
const DEFAULTS: Prefs = { scale: 100, contrast: "normal", motion: "system" };
const SCALES = [100, 112, 125, 150];

function load(): Prefs {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}

/** Written to <html> so the rules in globals.css can do the rest. */
function apply(p: Prefs) {
  const root = document.documentElement;
  // 100% maps to the browser's own base size, so a visitor who has already
  // raised their default keeps it rather than having it overwritten.
  root.style.fontSize = p.scale === 100 ? "" : `${p.scale}%`;
  root.dataset.a11yContrast = p.contrast;
  root.dataset.a11yMotion = p.motion;
}

/**
 * A small set of real display preferences: text size, stronger contrast and
 * motion off. Deliberately not an "accessibility overlay" that tries to patch
 * the page at runtime — those are widely criticised and tend to fight screen
 * readers. Each control here maps to one CSS custom property or attribute the
 * stylesheet already understands.
 */
export function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const [ready, setReady] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const p = load();
    setPrefs(p);
    apply(p);
    setReady(true);
  }, []);

  const update = useCallback((patch: Partial<Prefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      apply(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage blocked: the choice still applies for this page view.
      }
      return next;
    });
  }, []);

  // Escape closes and returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!ready) return null;

  const index = SCALES.indexOf(prefs.scale);
  const atMin = index <= 0;
  const atMax = index >= SCALES.length - 1;

  return (
    <div className="fixed bottom-4 left-4 z-[55] print:hidden">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Display preferences"
          className="mb-3 w-72 rounded-2xl border border-line bg-paper p-4 shadow-soft-lg"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink">
              Display preferences
            </h2>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close display preferences"
              className="rounded-full p-1 text-ink-muted transition-colors hover:bg-paper-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Text size */}
          <div className="mt-4">
            <p id="a11y-text-size" className="text-sm font-medium text-ink">
              Text size
            </p>
            <div
              role="group"
              aria-labelledby="a11y-text-size"
              className="mt-2 flex items-center gap-2"
            >
              <button
                type="button"
                onClick={() => update({ scale: SCALES[Math.max(0, index - 1)] })}
                disabled={atMin}
                aria-label="Decrease text size"
                className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Minus className="size-4" />
              </button>
              <output
                aria-live="polite"
                className="min-w-16 text-center text-sm text-ink"
              >
                {prefs.scale}%
              </output>
              <button
                type="button"
                onClick={() =>
                  update({ scale: SCALES[Math.min(SCALES.length - 1, index + 1)] })
                }
                disabled={atMax}
                aria-label="Increase text size"
                className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <Toggle
            label="Higher contrast"
            checked={prefs.contrast === "high"}
            onChange={(on) => update({ contrast: on ? "high" : "normal" })}
          />
          <Toggle
            label="Reduce motion"
            checked={prefs.motion === "reduced"}
            onChange={(on) => update({ motion: on ? "reduced" : "system" })}
          />

          <button
            type="button"
            onClick={() => update(DEFAULTS)}
            className="mt-4 text-sm text-ink-muted underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Reset to defaults
          </button>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Display preferences"
        className={clsx(
          "inline-flex size-12 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-soft",
          "transition-colors hover:border-ink",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        )}
      >
        <Accessibility className="size-5" />
      </button>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (on: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="mt-4 flex w-full items-center justify-between rounded-lg text-left text-sm font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {label}
      <span
        aria-hidden="true"
        className={clsx(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          checked ? "bg-accent" : "bg-line",
        )}
      >
        <span
          className={clsx(
            "absolute top-0.5 size-5 rounded-full bg-white shadow-soft transition-[left]",
            checked ? "left-[22px]" : "left-0.5",
          )}
        />
      </span>
    </button>
  );
}
