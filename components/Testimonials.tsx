"use client";

import { useState } from "react";
import { Facebook, Instagram, Linkedin, Play, Youtube } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Carousel } from "@/components/Carousel";
import { Wordmark } from "@/components/Wordmark";
import { GradientBall } from "@/components/GradientBall";
import { CONTACT_HREF } from "@/lib/links";

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
  /** Video pulled from the social feed. Without one the card stays a poster. */
  src?: string;
  /** Still frame shown before playback. */
  poster?: string;
};

/**
 * Feed these from the social accounts — either hard-coded after a manual pull,
 * or from a route handler that caches the latest clips from each platform.
 */
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jess Taylor",
    handle: "@northwindcoffee",
    platform: "instagram",
    quote:
      "They rebuilt our ordering flow and sales doubled in a single quarter.",
  },
  {
    name: "Dre Williams",
    handle: "@halofitness",
    platform: "youtube",
    quote:
      "Our socials went from an afterthought to our single biggest channel.",
  },
  {
    name: "Dr. Amelia Ford",
    handle: "@meridiandental",
    platform: "instagram",
    quote:
      "The rebrand finally looks like the practice we actually run every day.",
  },
];

export function Testimonials() {
  return (
    <section id="community" className="scroll-mt-20 bg-paper-soft py-16 sm:py-24">
      <Container>
        <h2 className="flex flex-wrap items-center justify-center gap-x-3 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Life with <Wordmark className="h-[0.8em]" />
        </h2>

      </Container>

      {/*
        A rail rather than a grid. Deliberately not autoplaying: these cards
        play video, and a rail that slides itself would pull a clip off screen
        mid-sentence.
      */}
      <Carousel label="Testimonials" arrows={false} className="mt-10 sm:mt-14">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.handle} testimonial={testimonial} />
        ))}
      </Carousel>

      <Container>
        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center gap-4 rounded-full bg-black px-4 py-3 text-lg font-semibold text-white shadow-soft transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-0.5"
          >
            Explore all stories
            <GradientBall className="size-6" />
          </a>
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [playing, setPlaying] = useState(false);
  const platform = PLATFORMS[testimonial.platform];
  const PlatformIcon = platform.icon;

  if (testimonial.src && playing) {
    return (
      <article className="relative aspect-4/5 w-[clamp(250px,74vw,320px)] shrink-0 snap-start overflow-hidden rounded-3xl bg-ink shadow-soft">
        <video
          className="absolute inset-0 size-full object-cover"
          src={testimonial.src}
          poster={testimonial.poster}
          controls
          autoPlay
          playsInline
        />
      </article>
    );
  }

  return (
    <article className="relative aspect-4/5 w-[clamp(250px,74vw,320px)] shrink-0 snap-start overflow-hidden rounded-3xl bg-ink shadow-soft">
      {testimonial.poster ? (
        <Image
          src={testimonial.poster}
          alt=""
          fill
          sizes="(max-width: 640px) 74vw, 320px"
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-ink-soft via-ink to-black"
        />
      )}

      {/* Scrim so the quote holds up over a bright frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent"
      />

      <button
        type="button"
        onClick={() => testimonial.src && setPlaying(true)}
        aria-label={
          testimonial.src
            ? `Play ${testimonial.name}'s story from ${platform.name}`
            : undefined
        }
        aria-disabled={!testimonial.src}
        className="group absolute inset-0 flex flex-col justify-end p-6 text-left"
      >
        <span className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm transition-colors group-hover:bg-white/25">
          <Play className="size-4 translate-x-px fill-white text-white" />
        </span>

        <span className="relative block text-base font-medium leading-snug text-white sm:text-lg">
          &ldquo;{testimonial.quote}&rdquo;
        </span>

        <span className="relative mt-4 flex items-center gap-2">
          <span className="text-sm font-semibold text-white">
            {testimonial.name}
          </span>
          <PlatformIcon className="size-3.5 shrink-0 text-white/55" />
          <span className="truncate text-sm text-white/55">
            {testimonial.handle}
          </span>
        </span>
      </button>
    </article>
  );
}
