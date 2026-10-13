import { clsx } from "@/lib/clsx";

/**
 * The "clickworks" lockup. Rendered as text (not an image) so it stays crisp,
 * selectable and translatable. Size is inherited from the parent.
 */
export function Wordmark({ className }: { className?: string }) {
  return <span className={clsx("wordmark lowercase", className)}>clickworks</span>;
}
