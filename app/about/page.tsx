import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Wordmark } from "@/components/Wordmark";
import { VideoShowcase } from "@/components/VideoShowcase";
import { ServiceTiles } from "@/components/ServiceTiles";
import { PhotoSlot } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About Us — Clickworks",
  description:
    "Why Clickworks exists, and the founder behind it.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="pb-6 pt-12 sm:pb-10 sm:pt-20">
        <h1 className="flex flex-wrap items-center justify-center gap-x-2.5 text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
          Welcome to <Wordmark className="h-[0.85em]" />
        </h1>

        <div className="mx-auto mt-6 max-w-4xl sm:mt-10">
          <VideoShowcase />
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-balance text-center text-[clamp(1.0625rem,4.6vw,1.25rem)] font-semibold leading-[1.25] tracking-tight text-ink sm:mt-16 sm:text-3xl">
          Imagine the power of 1,000 marketers in your pocket, always analyzing
          your strategy. Ready to diagnose and prescribe.
        </p>
      </Container>

      {/* Founder */}
      <Container className="py-12 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:items-start sm:gap-12">
          <PhotoSlot className="aspect-3/4 w-full" label="Portrait" />

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Meet our Founder
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink sm:mt-5 sm:text-lg">
              Samandeep Singh, who is a young Sikh entrepreneur who has been
              within the field of marketing for 5+ years and has helped scale
              20+ businesses within many industries from automotive to QSR. He
              introduced Clickworks seeing the increase of AI being used for
              marketing decreasing the value of key features in the industry
              alongside
            </p>
          </div>
        </div>
      </Container>

      <Container className="pb-16 sm:pb-24">
        <ServiceTiles />
      </Container>
    </>
  );
}
