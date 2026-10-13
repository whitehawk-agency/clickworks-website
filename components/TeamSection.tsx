import { Container } from "@/components/Container";
import { Carousel } from "@/components/Carousel";
import { SketchArrow } from "@/components/SketchArrow";
import { Wordmark } from "@/components/Wordmark";

type Member = {
  name: string;
  role: string;
  note: string;
};

const TEAM: Member[] = [
  { name: "Ava Lindqvist", role: "Strategy Lead", note: "Turns messy data into a plan you can run on Monday." },
  { name: "Marcus Bell", role: "Creative Director", note: "Fifteen years making brands look like themselves." },
  { name: "Priya Raman", role: "Head of Growth", note: "Obsessed with the metric behind the metric." },
  { name: "Theo Okafor", role: "Design Engineer", note: "Builds the sites that do the converting." },
];

export function TeamSection() {
  return (
    <section id="plans" className="scroll-mt-20 bg-paper-soft py-16 sm:py-24">
      <Container>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-medium text-ink shadow-soft">
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full bg-linear-to-br from-fuchsia-400 to-indigo-500"
            />
            Meet Core Team
          </span>
        </div>

        <h2 className="mt-6 text-center font-display text-3xl font-bold tracking-tight text-ink sm:mt-8 sm:text-4xl lg:text-5xl">
          Life with <Wordmark className="text-[1.05em]" />
        </h2>
      </Container>

      <Carousel label="Team" className="mt-10 sm:mt-14">
        <MemberCard member={TEAM[0]} />

        {/* Wireframe's labelled carousel affordance */}
        <article className="flex w-[clamp(230px,66vw,290px)] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-paper p-8 text-center shadow-soft aspect-3/4">
          <p className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
            Team
            <br />
            Carousel
          </p>
          <SketchArrow className="w-28 text-ink sm:w-32" />
        </article>

        {TEAM.slice(1).map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </Carousel>
    </section>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex w-[clamp(230px,66vw,290px)] shrink-0 snap-start flex-col justify-end gap-3 rounded-3xl border border-line bg-paper p-6 shadow-soft aspect-3/4">
      {/* Portrait slot — swap the placeholder for a real image when available */}
      <div
        aria-hidden="true"
        className="mb-auto size-14 rounded-full bg-linear-to-br from-paper-soft to-line"
      />
      <div>
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-ink-muted">{member.role}</p>
        <p className="mt-2 text-sm leading-snug text-ink-muted">{member.note}</p>
      </div>
    </article>
  );
}
