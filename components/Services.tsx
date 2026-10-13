import { Container } from "@/components/Container";
import { ServiceTiles } from "@/components/ServiceTiles";
import { PeopleRail } from "@/components/PeopleRail";

export function Services() {
  return (
    <section id="features" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        {/* Value proposition */}
        <p className="mx-auto max-w-4xl text-balance text-center text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
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

      <Container className="mt-8 flex justify-center">
        <a
          href="#plans"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-medium text-ink shadow-soft transition-colors hover:border-ink"
        >
          <span
            aria-hidden="true"
            className="size-2.5 rounded-full bg-linear-to-br from-fuchsia-400 to-indigo-500"
          />
          Meet Core Team
        </a>
      </Container>
    </section>
  );
}
