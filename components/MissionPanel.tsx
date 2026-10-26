import { ArrowUpRight } from "lucide-react";
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

export function MissionPanel() {
  return (
    <section className="scroll-mt-20 py-3 sm:py-24" id="mission">
      {/* Full-bleed on phones, back inside the page gutter from sm up. */}
      <div className="mx-auto w-full max-w-6xl sm:px-8">
        {/*
          The ring's geometry is carried as custom properties so the two
          layouts can differ: a tall, card-heavy ellipse that bleeds off a
          full-width phone panel, and the wider, smaller-carded ring on
          desktop.
        */}
        <div className="relative isolate h-[92svh] overflow-hidden bg-black [--card-scale:2.4] [--ring-rx:46%] [--ring-ry:31%] sm:aspect-video sm:h-auto sm:rounded-[2.5rem] sm:[--card-scale:1] sm:[--ring-rx:33%] sm:[--ring-ry:36%]">
          {/* The ring itself */}
          <div aria-hidden className="ring-sway absolute inset-0 animate-[ring-sway_38s_ease-in-out_infinite]">
            {RING.map((c, i) => {
              const rad = (c.a * Math.PI) / 180;
              // Deterministic spread, so no two neighbours move in step.
              const dur = 14 + (i % 7) * 1.7;
              const delay = ((i * 0.83) % 9).toFixed(2);
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + var(--ring-rx) * ${(c.r * Math.cos(rad)).toFixed(4)})`,
                    top: `calc(50% + var(--ring-ry) * ${(c.r * Math.sin(rad)).toFixed(4)})`,
                    width: `calc(${c.w}% * var(--card-scale))`,
                    transform: `translate(-50%, -50%) rotate(${c.tilt}deg)`,
                  }}
                >
                  {/*
                    The shell owns placement and the face owns motion: a CSS
                    animation on transform would otherwise replace the
                    translate/rotate that puts the card on the ring.
                  */}
                  <div
                    className="ring-card w-full rounded-[3px] shadow-[0_8px_24px_rgba(0,0,0,0.55)] will-change-[transform,opacity] sm:rounded-[5px]"
                    style={{
                      aspectRatio: c.ar,
                      backgroundImage: `linear-gradient(145deg, ${c.from}, ${c.to})`,
                      animation: `card-drift ${dur}s ease-in-out ${delay}s infinite, card-breathe ${(dur * 1.35).toFixed(1)}s ease-in-out ${delay}s infinite`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/*
            Pulls the middle of the panel back to black so the ring reads as a
            halo and the copy sits on a clean field.
          */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(96%_32%_at_50%_50%,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,0.8)_72%,rgba(0,0,0,0)_92%)] sm:bg-[radial-gradient(closest-side,rgba(0,0,0,1)_0%,rgba(0,0,0,0.97)_42%,rgba(0,0,0,0.6)_66%,rgba(0,0,0,0)_84%)]"
          />
          {/* Darkens the outer edge so no card meets the panel's corner */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(135%_105%_at_50%_50%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.35)_78%,rgba(0,0,0,0.8)_100%)] sm:bg-[radial-gradient(118%_112%_at_50%_50%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.9)_76%,rgba(0,0,0,1)_92%)]"
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
      </div>
    </section>
  );
}
