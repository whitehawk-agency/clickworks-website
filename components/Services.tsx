import { Container } from "@/components/Container";
import { AppleIcon } from "@/components/AppleIcon";
import { ServiceTiles } from "@/components/ServiceTiles";
import { clsx } from "@/lib/clsx";

const STATS = [
  { value: "1,000+", label: "Strategies analysed every day" },
  { value: "24/7", label: "Always-on diagnosis and alerts" },
  { value: "180+", label: "Brands grown since launch" },
  { value: "4.9/5", label: "Average client rating" },
];

export function Services() {
  return (
    <section id="features" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        {/* App download */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className={clsx(
              "inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-white shadow-soft",
              "transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-0.5",
            )}
          >
            <AppleIcon className="size-5 shrink-0" />
            <span className="text-sm font-semibold tracking-tight">
              Download on iOS
            </span>
          </a>
        </div>

        {/* Value proposition */}
        <p className="mx-auto mt-10 max-w-2xl text-balance text-center text-lg leading-relaxed text-ink sm:mt-12 sm:text-xl">
          Imagine the power of 1,000 marketers in your pocket, always analyzing
          your strategy. Ready to diagnose and prescribe.
        </p>

        {/* Three animated service tiles */}
        <div id="services" className="mt-12 scroll-mt-24 sm:mt-16">
          <ServiceTiles />
        </div>

        {/* Human proof */}
        <p className="mx-auto mt-16 max-w-xl text-balance text-center text-base font-medium text-ink-muted sm:mt-20 sm:text-lg">
          Real people providing world-class, evidence-based strategies.
        </p>
      </Container>

      {/* Stat cards — a rail on small screens, a four-up grid from large */}
      <div className="mt-8 sm:mt-10">
        <Container>
          <div
            className={clsx(
              "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2",
              "sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:px-0 lg:pb-0",
            )}
          >
            {STATS.map((stat) => (
              <article
                key={stat.label}
                className={clsx(
                  "flex w-[70%] shrink-0 snap-center flex-col justify-center gap-2 rounded-3xl border border-line bg-paper p-6 shadow-soft",
                  "min-h-36 sm:w-[44%] lg:w-auto",
                )}
              >
                <p className="font-display text-3xl font-bold tracking-tight text-ink">
                  {stat.value}
                </p>
                <p className="text-sm leading-snug text-ink-muted">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
