import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro, PhotoSlot } from "@/components/PageIntro";
import { ServiceTiles } from "@/components/ServiceTiles";
import { PROJECTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects — Clickworks",
  description: "Work shipped for clients across automotive, QSR and retail.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        title="Projects"
        lede="A selection of the work, and what it was built to do."
      />

      <Container>
        <ul className="grid gap-6 sm:grid-cols-3 sm:gap-7">
          {PROJECTS.map((project) => (
            <li key={project.client}>
              <article className="group">
                <PhotoSlot
                  className="aspect-3/4 w-full transition-transform duration-500 ease-(--ease-out-soft) group-hover:-translate-y-1"
                  label={project.client}
                />
                <h2 className="mt-4 text-base font-semibold tracking-tight text-ink sm:text-lg">
                  {project.client}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                  {project.discipline}
                </p>
                <p className="mt-2 text-sm leading-snug text-ink-muted">
                  {project.summary}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="py-16 sm:py-24">
        <ServiceTiles />
      </Container>
    </>
  );
}
