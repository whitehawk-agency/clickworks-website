import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { CONTACT_HREF } from "@/lib/links";

/**
 * Cards scattered around the rim of the panel. `a` is the angle in degrees
 * (0 = right, 90 = bottom) and `r` nudges each card in or out of the ring, so
 * they read as clusters rather than an even necklace. Positions resolve to
 * percentages, which makes the ring an ellipse that tracks the panel's shape.
 */
const RING = [
  { a: 208, r: 1.02, w: 11, ar: "3/4", tilt: -14, from: "#4d2921", to: "#190d0c" },
  { a: 218, r: 0.86, w: 9, ar: "4/5", tilt: 9, from: "#213537", to: "#0e1617" },
  { a: 236, r: 1.0, w: 9, ar: "3/4", tilt: 17, from: "#16242e", to: "#090f14" },
  { a: 250, r: 0.9, w: 8, ar: "1/1", tilt: -8, from: "#353026", to: "#14120f" },
  { a: 268, r: 1.04, w: 10, ar: "3/4", tilt: 12, from: "#632114", to: "#1e0a06" },
  { a: 279, r: 0.88, w: 8, ar: "4/5", tilt: -17, from: "#2a2b32", to: "#101114" },
  { a: 296, r: 1.0, w: 9, ar: "5/4", tilt: 7, from: "#153d45", to: "#07181c" },
  { a: 308, r: 0.9, w: 9, ar: "3/4", tilt: -11, from: "#423b32", to: "#181612" },
  { a: 322, r: 1.03, w: 10, ar: "4/5", tilt: 15, from: "#591e26", to: "#1e0a0e" },
  { a: 338, r: 0.87, w: 8, ar: "1/1", tilt: -6, from: "#1e2439", to: "#0b0d17" },
  { a: 354, r: 1.0, w: 9, ar: "3/4", tilt: 10, from: "#192e38", to: "#0a1217" },
  { a: 12, r: 0.92, w: 9, ar: "4/5", tilt: -15, from: "#4c1822", to: "#1b080c" },
  { a: 30, r: 1.02, w: 10, ar: "3/4", tilt: 8, from: "#272e3c", to: "#0f1217" },
  { a: 56, r: 0.95, w: 9, ar: "5/4", tilt: -12, from: "#38352b", to: "#151410" },
  { a: 78, r: 1.0, w: 9, ar: "3/4", tilt: 14, from: "#1e3933", to: "#0b1614" },
  { a: 96, r: 0.88, w: 8, ar: "4/5", tilt: -9, from: "#433b33", to: "#191513" },
  { a: 112, r: 1.03, w: 10, ar: "3/4", tilt: 11, from: "#2b2132", to: "#100c14" },
  { a: 132, r: 0.93, w: 9, ar: "1/1", tilt: -16, from: "#16353b", to: "#081417" },
  { a: 152, r: 1.0, w: 9, ar: "4/5", tilt: 6, from: "#3a291f", to: "#160f0c" },
  { a: 174, r: 0.9, w: 8, ar: "3/4", tilt: -13, from: "#242932", to: "#0d0f13" },
] as const;

const RX = 33;
const RY = 36;

export function MissionPanel() {
  return (
    <section className="scroll-mt-20 py-10 sm:py-24" id="mission">
      <Container>
        <div className="relative isolate aspect-4/5 overflow-hidden rounded-[1.75rem] bg-black sm:aspect-video sm:rounded-[2.5rem]">
          {/* The ring itself */}
          <div aria-hidden className="absolute inset-0">
            {RING.map((c, i) => {
              const rad = (c.a * Math.PI) / 180;
              return (
                <div
                  key={i}
                  className="absolute rounded-[3px] shadow-[0_8px_24px_rgba(0,0,0,0.55)] sm:rounded-[5px]"
                  style={{
                    left: `${50 + RX * c.r * Math.cos(rad)}%`,
                    top: `${50 + RY * c.r * Math.sin(rad)}%`,
                    width: `${c.w}%`,
                    aspectRatio: c.ar,
                    transform: `translate(-50%, -50%) rotate(${c.tilt}deg)`,
                    backgroundImage: `linear-gradient(145deg, ${c.from}, ${c.to})`,
                  }}
                />
              );
            })}
          </div>

          {/*
            Pulls the middle of the panel back to black so the ring reads as a
            halo and the copy sits on a clean field.
          */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(84%_46%_at_50%_50%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_56%,rgba(0,0,0,0.82)_74%,rgba(0,0,0,0)_94%)] sm:bg-[radial-gradient(closest-side,rgba(0,0,0,1)_0%,rgba(0,0,0,0.97)_42%,rgba(0,0,0,0.6)_66%,rgba(0,0,0,0)_84%)]"
          />
          {/* Darkens the outer edge so no card meets the panel's corner */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(118%_112%_at_50%_50%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.9)_76%,rgba(0,0,0,1)_92%)]"
          />

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
            <h2 className="max-w-[16ch] text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl">
              Traditional marketing is broken &amp; failing us
            </h2>
            <p className="mt-4 max-w-[42ch] text-balance text-sm font-medium leading-snug text-white/55 sm:mt-6 sm:text-base">
              We&rsquo;re rebuilding trust with you by making growth
              continuous, personalised, and available 24/7.
            </p>
            <a
              href={CONTACT_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[0.9375rem] font-semibold leading-5 tracking-tight text-ink shadow-soft transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-0.5 sm:mt-8 sm:px-6 sm:py-3"
            >
              Our mission
              <ArrowUpRight className="size-4 shrink-0" strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
