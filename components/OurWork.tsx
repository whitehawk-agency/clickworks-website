import Image from "next/image";
import { Container } from "@/components/Container";
import { Carousel } from "@/components/Carousel";
import { clsx } from "@/lib/clsx";

type Project = {
  client: string;
  /** Photo filling the card. Drop the file in /public and reference it here. */
  photo?: string;
  /** Client logo, white version, sat over the photo. */
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

/**
 * Replace each entry's `photo` and `logo` with the real assets. Until they
 * land, the card renders a neutral slot and sets the client name in place of
 * the logo, so the layout is already the final one.
 */
const PROJECTS: Project[] = [
  { client: "Northwind Coffee" },
  { client: "Halo Fitness" },
  { client: "Meridian Dental" },
  { client: "Fern & Oak" },
  { client: "Studio Verve" },
  { client: "Harbour & Co" },
];

export function OurWork() {
  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
          Our work, Real Results.
        </h2>
      </Container>

      <Carousel
        label="Projects"
        autoplay
        interval={4500}
        arrows={false}
        className="mt-10 sm:mt-14"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.client} project={project} />
        ))}
      </Carousel>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative aspect-7/10 w-[clamp(170px,46vw,230px)] shrink-0 snap-start overflow-hidden rounded-3xl bg-ink shadow-soft-lg">
      {project.photo ? (
        <Image
          src={project.photo}
          alt={`${project.client} project`}
          fill
          sizes="(max-width: 640px) 46vw, 230px"
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-ink-soft via-ink to-black"
        />
      )}

      {/* Keeps a white logo legible over a bright photo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-2/5 bg-linear-to-b from-black/55 to-transparent"
      />

      <div className="absolute inset-x-0 top-0 flex justify-center px-4 pt-6">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.client}
            width={project.logoWidth ?? 320}
            height={project.logoHeight ?? 80}
            sizes="200px"
            className="h-7 w-auto object-contain sm:h-8"
          />
        ) : (
          <span
            className={clsx(
              "text-center text-xs font-semibold uppercase leading-tight tracking-[0.18em] text-white",
              "sm:text-sm",
            )}
          >
            {project.client}
          </span>
        )}
      </div>
    </article>
  );
}
