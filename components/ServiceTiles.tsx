import { clsx } from "@/lib/clsx";
import {
  BrandingGraphic,
  SocialGraphic,
  WebsitesGraphic,
} from "@/components/ServiceGraphics";

/**
 * The three service tiles. Each carries its own looping motif — the wireframe
 * calls for all three to be animated — drawn as inline SVG so there is no
 * runtime animation library to load.
 */
export function ServiceTiles() {
  return (
    <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
      <Tile title="Websites" graphic={<WebsitesGraphic />} />
      <Tile title="Social Media" graphic={<SocialGraphic />} />
      <Tile title="Branding" graphic={<BrandingGraphic />} />
    </div>
  );
}

function Tile({ title, graphic }: { title: string; graphic: React.ReactNode }) {
  return (
    <article
      className={clsx(
        "group relative flex aspect-4/3 flex-col justify-between overflow-hidden rounded-3xl bg-ink p-6 shadow-soft",
        "transition-transform duration-500 ease-(--ease-out-soft) hover:-translate-y-1 sm:aspect-square",
      )}
    >
      <div aria-hidden="true" className="relative flex-1">
        {graphic}
      </div>
      <h3 className="relative font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h3>
    </article>
  );
}
