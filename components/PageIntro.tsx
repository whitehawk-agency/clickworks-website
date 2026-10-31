import { Container } from "@/components/Container";

/** Shared masthead for the inner pages, so they all start on the same beat. */
export function PageIntro({
  title,
  lede,
}: {
  title: string;
  lede?: string;
}) {
  return (
    <Container className="pb-8 pt-12 text-center sm:pb-14 sm:pt-20">
      <h1 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {lede && (
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-snug text-ink-muted sm:mt-5 sm:text-lg">
          {lede}
        </p>
      )}
    </Container>
  );
}

/**
 * The empty state every card uses until real artwork exists: a neutral slot at
 * the final aspect, so the page is already laid out correctly.
 */
export function PhotoSlot({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={
        "flex items-center justify-center overflow-hidden rounded-3xl bg-paper-soft ring-1 ring-line " +
        (className ?? "")
      }
    >
      {label && (
        <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.14em] text-ink-muted/70">
          {label}
        </span>
      )}
    </div>
  );
}
