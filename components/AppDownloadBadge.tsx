import { AppleIcon } from "@/components/AppleIcon";
import { CONTACT_HREF } from "@/lib/links";
import { clsx } from "@/lib/clsx";

/** "Download on iOS" pill. Point `href` at the App Store listing when it exists. */
export function AppDownloadBadge({ className }: { className?: string }) {
  return (
    <a
      href={CONTACT_HREF}
      className={clsx(
        "inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-white shadow-soft",
        "transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-0.5",
        className,
      )}
    >
      <AppleIcon className="size-5 shrink-0" />
      <span className="text-sm font-semibold tracking-tight">
        Download on iOS
      </span>
    </a>
  );
}
