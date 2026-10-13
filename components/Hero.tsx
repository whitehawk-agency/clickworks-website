import { Container } from "@/components/Container";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Wordmark } from "@/components/Wordmark";
import { AppDownloadBadge } from "@/components/AppDownloadBadge";

export function Hero() {
  return (
    <section id="top">
      {/* Full-bleed black announcement block */}
      <div className="bg-ink">
        <Container className="flex min-h-[48vh] flex-col items-center justify-center py-20 text-center sm:py-28">
          <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Introducing
          </p>
          <h1 className="mt-1 text-5xl sm:mt-2 sm:text-7xl lg:text-8xl">
            <Wordmark onDark priority />
          </h1>
        </Container>
      </div>

      {/* Welcome + video + app download */}
      <Container className="scroll-mt-20 py-16 sm:py-24" id="about">
        <h2 className="text-center text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Welcome to{" "}
          <Wordmark className="h-[0.8em]" />
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
