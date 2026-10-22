import { Container } from "@/components/Container";
import { ServiceTiles } from "@/components/ServiceTiles";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="features" className="scroll-mt-20 pb-16 pt-6 sm:pb-24 sm:pt-10">
      <Container>
        {/* Value proposition — sized to break onto two lines */}
        <p className="mx-auto max-w-4xl text-balance text-center text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
          Imagine the power of 1,000 marketers in your pocket, always analyzing
          your strategy. Ready to diagnose and prescribe.
        </p>

        {/* Three animated service tiles */}
        <div id="services" className="mt-12 scroll-mt-24 sm:mt-16">
          <ServiceTiles />
        </div>

        {/* Human proof */}
        <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-2xl font-bold leading-[1.15] tracking-tight text-ink sm:mt-20 sm:text-3xl">
          Real people providing world-class, evidence-based strategies.
        </p>
      </Container>

      <Container className="mt-10 flex justify-center sm:mt-12">
        <a
          href="#community"
          className="inline-flex items-center gap-3 rounded-full border border-[#f2f2f2] bg-paper px-6 py-3 text-base font-normal text-[#545454] shadow-soft transition-colors hover:border-line sm:px-16"
        >
          Meet Core Team
          <ArrowUpRight className="size-5 shrink-0" strokeWidth={2} />
        </a>
      </Container>
    </section>
  );
}
