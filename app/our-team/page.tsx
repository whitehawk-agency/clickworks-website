import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro, PhotoSlot } from "@/components/PageIntro";
import { TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team — Clickworks",
  description: "The people behind the work.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageIntro
        title="Our Team"
        lede="Real people providing world-class, evidence-based strategies."
      />

      <Container className="pb-16 sm:pb-24">
        <ul className="grid gap-6 sm:grid-cols-3 sm:gap-7">
          {TEAM.map((member, i) => (
            <li key={`${member.role}-${i}`}>
              <article className="group">
                <PhotoSlot
                  className="aspect-3/4 w-full transition-transform duration-500 ease-(--ease-out-soft) group-hover:-translate-y-1"
                  label="Portrait"
                />
                <h2 className="mt-4 text-base font-semibold tracking-tight text-ink sm:text-lg">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm text-ink-muted">{member.role}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
