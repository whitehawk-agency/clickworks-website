import { Container } from "@/components/Container";
import { Carousel } from "@/components/Carousel";
import { SketchArrow } from "@/components/SketchArrow";

type Project = {
  client: string;
  discipline: string;
  result: string;
};

const PROJECTS: Project[] = [
  { client: "Northwind Coffee", discipline: "Website", result: "+214% online orders" },
  { client: "Halo Fitness", discipline: "Social Media", result: "48k new followers" },
  { client: "Meridian Dental", discipline: "Branding", result: "3.1x booking rate" },
  { client: "Fern & Oak", discipline: "Website", result: "+68% conversion" },
  { client: "Studio Verve", discipline: "Branding", result: "Rebrand in 6 weeks" },
];

export function OurWork() {
  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Our work, Real Results.
        </h2>
      </Container>

      <Carousel label="Projects" autoplay interval={4500} className="mt-10 sm:mt-14">
        {/* Wireframe's labelled carousel affordance, kept as the second card */}
        <ProjectCard project={PROJECTS[0]} />

        <article className="flex w-[clamp(220px,62vw,280px)] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-3xl bg-ink p-8 text-center aspect-3/4">
          <p className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
            Projects
            <br />
            Carousel
          </p>
          <SketchArrow className="w-28 text-white sm:w-32" />
        </article>

        {PROJECTS.slice(1).map((project) => (
          <ProjectCard key={project.client} project={project} />
        ))}
      </Carousel>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex w-[clamp(220px,62vw,280px)] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 aspect-3/4">
      {/* Subtle wash so the type lifts off the black */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-white/5 opacity-80"
      />
      <div className="relative">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
          {project.discipline}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
          {project.client}
        </h3>
        <p className="mt-1 text-sm text-white/70">{project.result}</p>
      </div>
    </article>
  );
}
