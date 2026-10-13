"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Video slot from the wireframe. Until a real `src` is supplied it renders the
 * "Insert Video" placeholder; once it is, the poster swaps for the player on
 * click so the page never ships an autoplaying embed.
 */
export function VideoShowcase({ src, label }: { src?: string; label?: string }) {
  const [playing, setPlaying] = useState(false);

  if (src && playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-3xl bg-ink shadow-soft-lg">
        <video
          className="size-full object-cover"
          src={src}
          controls
          autoPlay
          playsInline
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => src && setPlaying(true)}
      aria-label={src ? "Play the Clickworks intro video" : undefined}
      aria-disabled={!src}
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl bg-ink shadow-soft-lg transition-transform duration-500 ease-(--ease-out-soft) hover:scale-[1.01]"
    >
      <span className="flex flex-col items-center gap-5">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-white/20 sm:size-20">
          <Play className="size-6 translate-x-0.5 fill-white text-white sm:size-7" />
        </span>
        <span className="text-xl font-medium tracking-tight text-white/90 sm:text-2xl">
          {label ?? "Insert Video"}
        </span>
      </span>
    </button>
  );
}
