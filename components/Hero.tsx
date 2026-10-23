import { Container } from "@/components/Container";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Wordmark } from "@/components/Wordmark";
import { AppDownloadBadge } from "@/components/AppDownloadBadge";
import { PreOrderPill } from "@/components/PreOrderPill";

export function Hero() {
  return (
    <section id="top">
      {/*
        The hero fills the first screen — 100svh less the 4rem sticky nav — so
        nothing else shows until the visitor scrolls. `svh` rather than `vh`
        keeps mobile browser chrome from cropping it.
      */}
      <div className="hero-sky">
        <Container className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-24">
          <p className="text-4xl font-semibold leading-none tracking-tight text-white sm:text-6xl">
            Introducing
          </p>
          {/*
            Flex blockifies the logo, so the h1 is exactly the artwork's height
            rather than a full line box with baseline space underneath. That
            dead space was most of the gap between the two lines.
          */}
          <h1 className="mt-1 flex justify-center text-5xl sm:text-7xl lg:text-8xl">
            <Wordmark onDark priority />
          </h1>

          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:gap-4">
            <AppDownloadBadge onDark />
            <PreOrderPill />
          </div>
        </Container>
      </div>

      {/* Welcome + video + app download */}
      <Container className="scroll-mt-20 pb-6 pt-16 sm:py-24" id="about">
        <h2 className="flex flex-wrap items-center justify-center gap-x-2.5 text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
          Welcome to <Wordmark className="h-[0.85em]" />
        </h2>

        <div className="mx-auto mt-6 max-w-4xl sm:mt-10">
          <VideoShowcase />
        </div>

        <div className="mt-5 flex justify-center sm:mt-12">
          <AppDownloadBadge />
        </div>
      </Container>
    </section>
  );
}
