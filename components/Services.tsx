import { Container } from "@/components/Container";
import { ServiceTiles } from "@/components/ServiceTiles";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="features" className="scroll-mt-20 pb-8 pt-6 sm:pb-24 sm:pt-10">
      <Container>
        {/* Value proposition — sized to break onto two lines */}
        <p className="mx-auto max-w-4xl text-balance text-center text-[clamp(1rem,4.3vw,1.125rem)] font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
          Imagine the power of 1,000 marketers in your pocket, always analyzing
          your strategy. Ready to diagnose and prescribe.
        </p>

        {/* Three animated service tiles */}
        <div id="services" className="mt-8 scroll-mt-24 sm:mt-16">
          <ServiceTiles />
        </div>

        {/* Human proof */}
        <p className="mx-auto mt-12 max-w-3xl text-balance text-center text-lg font-bold leading-[1.2] tracking-tight text-ink sm:mt-20 sm:text-3xl">
          Real people providing world-class, evidence-based strategies.
        </p>
      </Container>

      <Container className="mt-6 flex justify-center sm:mt-12">
        <a
          href="#community"
          className="inline-flex items-center gap-2 rounded-full border border-[#f2f2f2] bg-paper px-4 py-2 text-sm font-normal text-[#545454] shadow-soft transition-colors hover:border-line sm:gap-3 sm:px-16 sm:py-3 sm:text-base"
        >
          Meet Core Team
          <ArrowUpRight className="size-4 shrink-0 sm:size-5" strokeWidth={2} />
        </a>
      </Container>
    </section>
  );
}
