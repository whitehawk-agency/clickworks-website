import { Container } from "@/components/Container";
import { ServiceTiles } from "@/components/ServiceTiles";
import { PeopleRail } from "@/components/PeopleRail";
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

        {/* Human proof, leading into the team */}
        <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-[2rem] font-bold leading-[1.12] tracking-tight text-ink sm:mt-20 sm:text-4xl">
          Real people providing world-class, evidence-based strategies.
        </p>
      </Container>

      <div className="mt-8 sm:mt-10">
        <PeopleRail />
      </div>

      <Container className="mt-10 flex justify-center">
        <a
          href="#community"
          className="inline-flex items-center gap-[18px] rounded-full border border-[#f2f2f2] bg-paper px-10 py-[13px] text-lg font-normal text-[#545454] shadow-soft transition-colors hover:border-line sm:px-[104px] sm:text-xl"
        >
          Meet Core Team
          <ArrowUpRight className="size-7 shrink-0" strokeWidth={2} />
        </a>
      </Container>
    </section>
  );
}
