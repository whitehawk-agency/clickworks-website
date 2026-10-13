import { clsx } from "@/lib/clsx";

/**
 * The hand-drawn, looping arrow from the wireframe. Points left by default and
 * is purely decorative, so it is hidden from assistive tech.
 */
export function SketchArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 56"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={clsx("h-auto w-36", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Tail: sweeps in from the right and curls into a loop */}
        <path d="M152 32C152 32 120 52 120 30C120 14 140 14 136 30C132 46 98 46 62 40C44 37 28 32 16 27" />
        {/* Arrowhead */}
        <path d="M16 27L38 17" />
        <path d="M16 27L33 40" />
      </g>
    </svg>
  );
}
