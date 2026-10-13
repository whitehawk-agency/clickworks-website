"use client";

import { useState } from "react";
import { Facebook, Instagram, Linkedin, Play, Youtube } from "lucide-react";
import { Container } from "@/components/Container";
import { Carousel } from "@/components/Carousel";
import { Wordmark } from "@/components/Wordmark";

const PLATFORMS = {
  instagram: { icon: Instagram, name: "Instagram" },
  youtube: { icon: Youtube, name: "YouTube" },
  facebook: { icon: Facebook, name: "Facebook" },
  linkedin: { icon: Linkedin, name: "LinkedIn" },
} as const;

type Testimonial = {
  name: string;
  handle: string;
  platform: keyof typeof PLATFORMS;
  quote: string;
  /** Video file pulled from the social feed. Without one the card stays a poster. */
  src?: string;
  /** Still frame shown before playback. */
  poster?: string;
};

/**
 * Feed these from the social accounts — either hard-coded after a manual pull,
 * or from a route handler that caches the latest clips from each platform's API.
 */
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jess Taylor",
    handle: "@northwindcoffee",
    platform: "instagram",
    quote: "They rebuilt our ordering flow and sales doubled in a quarter.",
  },
  {
    name: "Dre Williams",
    handle: "@halofitness",
    platform: "youtube",
    quote: "Our socials went from an afterthought to our biggest channel.",
  },
  {
    name: "Dr. Amelia Ford",
    handle: "@meridiandental",
    platform: "instagram",
    quote: "The rebrand finally looks like the practice we actually run.",
  },
  {
    name: "Sam Oyelaran",
    handle: "@fernandoak",
    platform: "facebook",
    quote: "Clear reporting every week. No jargon, just what moved.",
  },
  {
    name: "Nina Kovács",
    handle: "@studioverve",
    platform: "linkedin",
    quote: "Six weeks from first call to a brand we're proud of.",
  },
];

export function Testimonials() {
  return (
    <section id="plans" className="scroll-mt-20 bg-paper-soft py-16 sm:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Life with <Wordmark className="text-[1.05em]" />
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-center text-base text-ink-muted">
          Straight from our clients&rsquo; feeds.
        </p>
      </Container>

      {/* Manual, not autoplay — a rail that moves itself would interrupt playback. */}
      <Carousel label="Testimonials" className="mt-10 sm:mt-14">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.handle} testimonial={testimonial} />
        ))}
      </Carousel>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [playing, setPlaying] = useState(false);
  const platform = PLATFORMS[testimonial.platform];
  const PlatformIcon = platform.icon;

  return (
    <article className="relative aspect-9/16 w-[clamp(210px,62vw,260px)] shrink-0 snap-start overflow-hidden rounded-3xl bg-ink shadow-soft">
      {testimonial.src && playing ? (
        <video
          className="absolute inset-0 size-full object-cover"
          src={testimonial.src}
          poster={testimonial.poster}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button
          type="button"
          onClick={() => testimonial.src && setPlaying(true)}
          aria-label={
            testimonial.src
              ? `Play ${testimonial.name}'s testimonial from ${platform.name}`
              : undefined
          }
          aria-disabled={!testimonial.src}
          className="group absolute inset-0 flex flex-col justify-between p-5 text-left"
        >
          {/* Poster slot — swap this wash for the still frame from the feed. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/70"
          />

          <span className="relative flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/20 backdrop-blur-sm">
            <PlatformIcon className="size-3.5 text-white" />
            <span className="text-xs font-medium text-white/90">
              {testimonial.handle}
            </span>
          </span>

          <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 transition-colors group-hover:bg-white/25">
            <Play className="size-5 translate-x-0.5 fill-white text-white" />
          </span>

          <span className="relative block">
            <span className="block text-sm leading-snug text-white/85">
              &ldquo;{testimonial.quote}&rdquo;
            </span>
            <span className="mt-2 block font-display text-base font-semibold tracking-tight text-white">
              {testimonial.name}
            </span>
          </span>
        </button>
      )}
    </article>
  );
}
