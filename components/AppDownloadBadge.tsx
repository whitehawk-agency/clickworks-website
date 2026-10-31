import { AppleIcon } from "@/components/AppleIcon";
import { CONTACT_HREF } from "@/lib/links";
import { clsx } from "@/lib/clsx";

/** "Download on iOS" pill. Point `href` at the App Store listing when it exists. */
export function AppDownloadBadge({
  className,
  onDark,
}: {
  className?: string;
  /** White pill with dark type, for the hero. */
  onDark?: boolean;
}) {
  return (
    <a
      href={CONTACT_HREF}
      className={clsx(
        "inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 shadow-soft",
        "sm:gap-3 sm:px-7 sm:py-3.5",
        "transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-0.5",
        onDark ? "bg-white text-ink" : "bg-ink text-white",
        className,
      )}
    >
      <AppleIcon className="size-[1.125rem] shrink-0 sm:size-6" />
      <span className="text-[0.9375rem] leading-5 font-normal tracking-tight sm:text-lg sm:leading-7">
        Download on iOS
      </span>
    </a>
  );
}
