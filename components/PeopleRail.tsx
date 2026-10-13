import { Carousel } from "@/components/Carousel";

export type Person = {
  name: string;
  role: string;
};

/** Swap for real records (and add a `photo` path) once the shoot is done. */
export const TEAM: Person[] = [
  { name: "Ava Lindqvist", role: "Strategy Lead" },
  { name: "Marcus Bell", role: "Creative Director" },
  { name: "Priya Raman", role: "Head of Growth" },
  { name: "Theo Okafor", role: "Design Engineer" },
  { name: "Ines Moreau", role: "Social Lead" },
  { name: "Daniel Cho", role: "Performance Marketing" },
];

/** The team rail — photo, name and what they do — advancing on its own. */
export function PeopleRail() {
  return (
    <Carousel label="Team" autoplay interval={3500}>
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
    <article className="w-[clamp(200px,58vw,240px)] shrink-0 snap-start rounded-3xl border border-line bg-paper p-3 shadow-soft">
      {/* Portrait slot — drop in next/image here when the photography lands. */}
      <div
        aria-hidden="true"
        className="grid aspect-4/5 place-items-center rounded-2xl bg-linear-to-br from-paper-soft via-line/60 to-paper-soft"
      >
        <span className="font-display text-4xl font-bold tracking-tight text-ink/25">
          {initials}
        </span>
      </div>

      <div className="px-2 pb-1 pt-4">
        <h3 className="font-display text-base font-semibold tracking-tight text-ink">
          {person.name}
        </h3>
        <p className="mt-0.5 text-sm text-ink-muted">{person.role}</p>
      </div>
    </article>
  );
}
