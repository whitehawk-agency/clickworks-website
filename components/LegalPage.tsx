import { Container } from "@/components/Container";
import { POLICY_UPDATED } from "@/lib/company";

/** Shared shell for the policy pages: one measure, one rhythm, one date. */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-3xl pb-20 pt-12 sm:pb-28 sm:pt-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        Last updated {POLICY_UPDATED}
      </p>
      <p className="mt-6 text-base leading-relaxed text-ink sm:text-lg">
        {intro}
      </p>
      <div className="mt-10 flex flex-col gap-8">{children}</div>
    </Container>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
