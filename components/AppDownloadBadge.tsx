import { AppleIcon } from "@/components/AppleIcon";
import { CONTACT_HREF } from "@/lib/links";
import { clsx } from "@/lib/clsx";

/** "Download on iOS" pill. Point `href` at the App Store listing when it exists. */
export function AppDownloadBadge({ className }: { className?: string }) {
  return (
    <a
      href={CONTACT_HREF}
      className={clsx(
        "inline-flex items-center gap-2.5 rounded-full bg-ink px-4 py-2 text-white shadow-soft",
        "sm:gap-3 sm:px-6 sm:py-3",
        "transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-0.5",
        className,
      )}
    >
      <AppleIcon className="size-4 shrink-0 sm:size-5" />
      <span className="text-sm font-semibold tracking-tight sm:text-base">
        Download on iOS
      </span>
    </a>
  );
}
