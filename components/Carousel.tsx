"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

/**
 * Full-bleed, snap-scrolling rail. Cards peek in from both edges the way the
 * wireframe shows them; the buttons are a convenience on top of native
 * scrolling, so touch, trackpad and keyboard all work without them.
 */
export function Carousel({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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

  const step = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    // Advance by roughly one card, derived from the first child's width.
    const card = rail.firstElementChild as HTMLElement | null;
    const distance = card ? card.offsetWidth + 16 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div className={clsx("relative", className)}>
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

      <div className="mt-6 flex items-center justify-center gap-3">
        <RailButton
          direction="left"
          disabled={atStart}
          onClick={() => step(-1)}
          label={`Scroll ${label} backward`}
        />
        <RailButton
          direction="right"
          disabled={atEnd}
          onClick={() => step(1)}
          label={`Scroll ${label} forward`}
        />
      </div>
    </div>
  );
}

function RailButton({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
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
