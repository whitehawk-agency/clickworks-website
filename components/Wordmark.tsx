import Image from "next/image";
import { clsx } from "@/lib/clsx";

// Both files are the same artwork at the same crop, so the two variants are
// interchangeable — only the ink colour differs.
const LOGO = { width: 1572, height: 244 };

/**
 * The clickworks logo.
 *
 * Sized in `em` and sat on the baseline so it scales with whatever type it sits
 * in, which keeps it working inline mid-sentence ("Welcome to clickworks") as
 * well as on its own. Pass `onDark` anywhere it sits on a dark surface so it
 * picks up the white artwork.
 */
export function Wordmark({
  className,
  onDark = false,
  alt = "Clickworks",
  priority = false,
  sizes = "(max-width: 640px) 60vw, 480px",
}: {
  className?: string;
  onDark?: boolean;
  alt?: string;
  priority?: boolean;
  /** Rendered width, so the browser fetches a variant that fits the slot. */
  sizes?: string;
}) {
  return (
    <Image
      src={onDark ? "/clickworks-white.png" : "/clickworks-black.png"}
      alt={alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      // Roughly the ascender height of the surrounding type, so the logo reads
      // as the same size as the words either side of it.
      className={clsx("inline-block h-[0.76em] w-auto align-baseline", className)}
      sizes={sizes}
    />
  );
}
