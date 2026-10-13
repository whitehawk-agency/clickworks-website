import { clsx } from "@/lib/clsx";

/**
 * The three service tiles. Each carries its own looping motif — the wireframe
 * calls for all three to be animated — built from CSS so there is no runtime
 * animation library to load.
 */
export function ServiceTiles() {
  return (
    <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
      <Tile title="Websites" motif={<WebsitesMotif />} />
      <Tile title="Social Media" motif={<SocialMotif />} />
      <Tile title="Branding" motif={<BrandingMotif />} />
    </div>
  );
}

function Tile({ title, motif }: { title: string; motif: React.ReactNode }) {
  return (
    <article
      className={clsx(
        "group relative flex aspect-4/3 flex-col justify-between overflow-hidden rounded-3xl bg-ink p-6 shadow-soft",
        "transition-transform duration-500 ease-(--ease-out-soft) hover:-translate-y-1 sm:aspect-square",
      )}
    >
      <div aria-hidden="true" className="relative flex-1">
        {motif}
      </div>
      <h3 className="relative font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h3>
    </article>
  );
}

/** Browser frame with a light sweeping across it. */
function WebsitesMotif() {
  return (
    <div className="absolute inset-x-0 top-1 flex h-full items-center justify-center">
      <div className="relative w-full max-w-[180px] overflow-hidden rounded-xl border border-white/15 bg-white/5">
        <div className="flex gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="size-1.5 rounded-full bg-white/30" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 w-3/4 rounded-full bg-white/25" />
          <div className="h-2 w-1/2 rounded-full bg-white/15" />
          <div className="h-8 rounded-lg bg-white/10" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sweep bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}

/** Engagement bars climbing in sequence. */
function SocialMotif() {
  const bars = [0, 0.25, 0.5, 0.75, 1];
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-full items-end justify-center gap-2 pb-1">
      {bars.map((delay, index) => (
        <span
          key={delay}
          style={{ animationDelay: `${delay}s` }}
          className={clsx(
            "w-4 origin-bottom animate-rise rounded-t-md bg-white/30",
            index % 2 === 0 ? "h-16" : "h-24",
          )}
        />
      ))}
    </div>
  );
}

/** Orbiting marks around a breathing core. */
function BrandingMotif() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative size-28">
        <div className="absolute inset-0 animate-orbit">
          <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-white/60" />
          <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 rounded-sm bg-white/35" />
          <span className="absolute left-0 top-1/2 size-2 -translate-y-1/2 rotate-45 bg-white/35" />
        </div>
        <span className="absolute inset-[30%] animate-breathe rounded-full bg-white/25" />
      </div>
    </div>
  );
}
