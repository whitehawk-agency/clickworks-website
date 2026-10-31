import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { ServiceTiles } from "@/components/ServiceTiles";
import { SERVICE_DETAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Clickworks",
  description: "Websites, social media and branding, built on evidence.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Services"
        lede="Three disciplines, run by people and sharpened by AI that never sleeps."
      />

      <Container>
        <ServiceTiles />
      </Container>

      <Container className="py-14 sm:py-24">
        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {SERVICE_DETAIL.map((service) => (
            <li key={service.title}>
              <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-snug text-ink-muted sm:text-base">
                {service.blurb}
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                {service.includes.map((item) => (
                  <li key={item} className="text-sm text-ink sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
