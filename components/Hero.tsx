import { Container } from "@/components/Container";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Wordmark } from "@/components/Wordmark";
import { AppDownloadBadge } from "@/components/AppDownloadBadge";

export function Hero() {
  return (
    <section id="top">
      {/* Full-bleed black announcement block, sitting high under the nav */}
      <div className="bg-ink">
        <Container className="flex flex-col items-center justify-center pb-16 pt-10 text-center sm:pb-20 sm:pt-14">
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Introducing
          </p>
          <h1 className="mt-2 text-5xl sm:mt-3 sm:text-7xl lg:text-8xl">
            <Wordmark onDark priority />
          </h1>
        </Container>
      </div>

      {/* Welcome + video + app download */}
      <Container className="scroll-mt-20 py-16 sm:py-24" id="about">
        <h2 className="flex flex-wrap items-center justify-center gap-x-4 text-center text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Welcome to <Wordmark className="h-[0.8em]" />
        </h2>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
          <VideoShowcase />
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <AppDownloadBadge />
        </div>
      </Container>
    </section>
  );
}
