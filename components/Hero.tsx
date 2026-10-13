import { Container } from "@/components/Container";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Wordmark } from "@/components/Wordmark";
import { AppDownloadBadge } from "@/components/AppDownloadBadge";

export function Hero() {
  return (
    <section id="top">
      {/*
        The black block fills the first screen — 100svh less the 4rem sticky
        nav — so nothing else shows until the visitor scrolls. `svh` rather
        than `vh` keeps mobile browser chrome from cropping it.
      */}
      <div className="bg-ink">
        <Container className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-start pb-16 pt-16 text-center sm:pt-24">
          <p className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Introducing
          </p>
          <h1 className="mt-2 text-5xl sm:mt-3 sm:text-7xl lg:text-8xl">
            <Wordmark onDark priority />
          </h1>
        </Container>
      </div>

      {/* Welcome + video + app download */}
      <Container className="scroll-mt-20 py-16 sm:py-24" id="about">
        <h2 className="flex flex-wrap items-center justify-center gap-x-2.5 text-center text-xl font-semibold tracking-tight text-ink sm:text-2xl lg:text-3xl">
          Welcome to <Wordmark className="h-[0.85em]" />
        </h2>

        <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
          <VideoShowcase />
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <AppDownloadBadge />
        </div>
      </Container>
    </section>
  );
}
