import Image from "next/image";
import { Carousel } from "@/components/Carousel";
import { Wordmark } from "@/components/Wordmark";

export type Person = {
  name: string;
  role: string;
  /** Headshot. Drop the file in /public and reference it here. */
  photo?: string;
};

export const TEAM: Person[] = [
  { name: "Ava Lindqvist", role: "Strategy Lead" },
  { name: "Marcus Bell", role: "Creative Director" },
  { name: "Priya Raman", role: "Head of Growth" },
  { name: "Theo Okafor", role: "Design Engineer" },
  { name: "Ines Moreau", role: "Social Lead" },
  { name: "Daniel Cho", role: "Performance Marketing" },
];

/** The team rail — headshot, name, what they do — advancing on its own. */
export function PeopleRail() {
  return (
    <Carousel label="Team" autoplay interval={3500} arrows={false}>
      {TEAM.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </Carousel>
  );
}

function PersonCard({ person }: { person: Person }) {
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article className="flex w-[clamp(260px,78vw,300px)] shrink-0 snap-start items-center gap-4 rounded-2xl bg-paper-soft p-3 ring-1 ring-line/70">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-line/70 to-paper-soft">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <span className="grid size-full place-items-center text-xl font-bold tracking-tight text-ink/25">
            {initials}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold tracking-tight text-ink">
          {person.name}
        </h3>
        <p className="mt-0.5 text-xs leading-snug text-ink-muted">
          {person.role}
        </p>
        {/* Swap for a per-person logo if the rail ever mixes in outside advisors. */}
        <Wordmark className="mt-2.5 h-2.5" alt="Clickworks" sizes="80px" />
      </div>
    </article>
  );
}
