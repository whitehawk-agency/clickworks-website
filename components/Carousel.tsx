"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

/**
 * Full-bleed, snap-scrolling rail. Cards peek in from both edges the way the
 * wireframe shows them; the buttons are a convenience on top of native
 * scrolling, so touch, trackpad and keyboard all work without them.
 *
 * With `autoplay` the rail advances one card at a time and wraps at the end.
 * It holds still while someone is hovering, touching or tabbing through it,
 * while the tab is in the background, and while it is scrolled out of view —
 * and never starts at all when the visitor prefers reduced motion.
 */
export function Carousel({
  label,
  children,
  className,
  autoplay = false,
  interval = 4000,
  arrows = true,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  interval?: number;
  /** Prev/next buttons. */
  arrows?: boolean;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(false);

  // Transient hold while someone is hovering, touching or tabbing the rail.
  const heldRef = useRef(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setAtStart(rail.scrollLeft <= 1);
    setAtEnd(rail.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    sync();
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(sync);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [sync]);

  const step = useCallback((direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    // Advance by roughly one card, derived from the first child's width.
    const card = rail.firstElementChild as HTMLElement | null;
    const distance = card ? card.offsetWidth + 16 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  }, []);

  // Honour the reduced-motion preference, and keep honouring it if it changes.
  useEffect(() => {
    if (!autoplay || typeof window === "undefined") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setCanAutoplay(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, [autoplay]);

  useEffect(() => {
    if (!canAutoplay) return;
    const rail = railRef.current;
    if (!rail) return;

    let onScreen = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    observer.observe(rail);

    const timer = window.setInterval(() => {
      if (heldRef.current || !onScreen || document.hidden) return;
      const max = rail.scrollWidth - rail.clientWidth;
      if (rail.scrollLeft >= max - 1) {
        rail.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        step(1);
      }
    }, interval);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [canAutoplay, interval, step]);

  const hold = () => {
    heldRef.current = true;
  };
  const release = () => {
    heldRef.current = false;
  };

  return (
    <div
      className={clsx("relative", className)}
      onMouseEnter={hold}
      onMouseLeave={release}
      onFocusCapture={hold}
      onBlurCapture={release}
      onTouchStart={hold}
      onTouchEnd={release}
    >
      <div
        ref={railRef}
        onScroll={sync}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={clsx(
          "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2",
          // Align the first card with the page gutter while letting the rail bleed.
          // The matching scroll-padding keeps every snap point on that same line.
          "px-[max(1.25rem,calc((100vw-72rem)/2))]",
          "scroll-pl-[max(1.25rem,calc((100vw-72rem)/2))]",
        )}
      >
        {children}
      </div>

      {arrows && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <RailButton
            icon={ChevronLeft}
            disabled={atStart}
            onClick={() => step(-1)}
            label={`Scroll ${label} backward`}
          />
          <RailButton
            icon={ChevronRight}
            disabled={atEnd}
            onClick={() => step(1)}
            label={`Scroll ${label} forward`}
          />
        </div>
      )}
    </div>
  );
}

function RailButton({
  icon: Icon,
  disabled = false,
  onClick,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={clsx(
        "inline-flex size-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-soft",
        "transition-all hover:border-ink hover:bg-ink hover:text-white",
        "disabled:pointer-events-none disabled:opacity-35",
      )}
    >
      <Icon className="size-5" />
    </button>
  );
}
