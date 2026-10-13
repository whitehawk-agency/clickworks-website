import Image from "next/image";
import { clsx } from "@/lib/clsx";

/**
 * The brand gradient orb used alongside button labels. It is a 2KB, 28px
 * source, so it skips the image optimiser — there is nothing to resize and
 * routing it through would only add a round trip.
 */
export function GradientBall({ className }: { className?: string }) {
  return (
    <Image
      src="/gradient-ball.png"
      alt=""
      aria-hidden="true"
      width={28}
      height={29}
      unoptimized
      className={clsx("inline-block size-4 shrink-0 object-contain", className)}
    />
  );
}
