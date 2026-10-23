import { CONTACT_HREF } from "@/lib/links";
import { clsx } from "@/lib/clsx";

/**
 * Secondary hero CTA, matching the supplied reference: a flat slate pill a
 * shade lighter than the hero field, with a soft off-white label.
 */
export function PreOrderPill({ className }: { className?: string }) {
  return (
    <a
      href={CONTACT_HREF}
      className={clsx(
        "inline-flex items-center justify-center rounded-full bg-[#151823] px-6 py-2.5",
        "text-[0.9375rem] leading-5 font-medium tracking-tight text-[#e0e1e0] sm:px-7 sm:py-3.5 sm:text-lg sm:leading-7",
        "transition-colors duration-300 ease-(--ease-out-soft) hover:bg-[#1e2232]",
        className,
      )}
    >
      Pre-order release
    </a>
  );
}
