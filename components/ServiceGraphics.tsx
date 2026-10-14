/**
 * Artwork for the three service tiles.
 *
 * Drawn as inline SVG rather than shipped as images: it stays crisp at any
 * tile size, costs no extra request, and animates from the same CSS the rest
 * of the page uses — so the global prefers-reduced-motion rule stops it along
 * with everything else. All three share one language: white on the dark tile,
 * one stroke weight, matched corner radii, and depth carried by opacity.
 *
 * A note on transforms: a CSS `transform` animation REPLACES an element's SVG
 * `transform` attribute, so anything positioned by that attribute and animated
 * at the same time jumps to the origin. Wherever both are needed, an outer
 * group holds the placement and an inner group does the animating.
 */

const FRAME = {
  stroke: "white",
  strokeOpacity: 0.24,
  strokeWidth: 1.5,
} as const;

/** A site assembling itself inside a browser frame, with a light passing over. */
export function WebsitesGraphic() {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 size-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="cw-site-clip">
          <rect x="26" y="18" width="188" height="144" rx="12" />
        </clipPath>
        <linearGradient id="cw-site-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Browser chrome */}
      <rect
        x="26"
        y="18"
        width="188"
        height="144"
        rx="12"
        fill="white"
        fillOpacity="0.05"
        {...FRAME}
      />
      <path d="M26 43H214" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" />
      <circle cx="42" cy="30.5" r="3.2" fill="white" fillOpacity="0.38" />
      <circle cx="54" cy="30.5" r="3.2" fill="white" fillOpacity="0.24" />
      <circle cx="66" cy="30.5" r="3.2" fill="white" fillOpacity="0.24" />

      {/*
        The layout stays solid. An earlier pass faded the blocks in on a loop,
        but with staggered delays some blocks were mid-fade while others were
        up, which read as a broken page rather than one being built — and a
        permanently loading site is the wrong message for this tile anyway.
        The sweep below carries the motion instead.
      */}
      <rect x="40" y="55" width="160" height="34" rx="6" fill="white" fillOpacity="0.2" />
      <rect x="40" y="97" width="94" height="7" rx="3.5" fill="white" fillOpacity="0.3" />
      <rect x="40" y="110" width="62" height="7" rx="3.5" fill="white" fillOpacity="0.18" />
      <rect x="40" y="128" width="48" height="22" rx="6" fill="white" fillOpacity="0.17" />
      <rect x="96" y="128" width="48" height="22" rx="6" fill="white" fillOpacity="0.17" />
      <rect x="152" y="128" width="48" height="22" rx="6" fill="white" fillOpacity="0.17" />

      <g clipPath="url(#cw-site-clip)">
        <rect
          className="animate-scan"
          x="-70"
          y="18"
          width="70"
          height="144"
          fill="url(#cw-site-sheen)"
        />
      </g>
    </svg>
  );
}

/** A post picking up likes, with engagement climbing beside it. */
export function SocialGraphic() {
  const hearts = [
    { id: "a", x: 70, delay: "0s" },
    { id: "b", x: 82, delay: "1.1s" },
    { id: "c", x: 60, delay: "2.2s" },
  ];
  const bars = [
    { x: 164, h: 24, delay: "0s" },
    { x: 180, h: 40, delay: "0.2s" },
    { x: 196, h: 58, delay: "0.4s" },
  ];

  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 size-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Post card */}
      <rect
        x="40"
        y="16"
        width="104"
        height="148"
        rx="14"
        fill="white"
        fillOpacity="0.05"
        {...FRAME}
      />
      {/* Author row */}
      <circle cx="60" cy="36" r="8" fill="white" fillOpacity="0.3" />
      <rect x="74" y="31" width="38" height="5" rx="2.5" fill="white" fillOpacity="0.26" />
      <rect x="74" y="40" width="24" height="4" rx="2" fill="white" fillOpacity="0.15" />
      {/* Media */}
      <rect x="52" y="54" width="80" height="62" rx="9" fill="white" fillOpacity="0.13" />
      {/* Caption */}
      <rect x="52" y="140" width="58" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
      <rect x="52" y="150" width="36" height="5" rx="2.5" fill="white" fillOpacity="0.12" />

      {/* Like / comment / share */}
      <g transform="translate(52 124)">
        <path
          d="M6 10C2.5 7.6 0 5.6 0 3.2 0 1.3 1.5 0 3.2 0 4.3 0 5.4 .6 6 1.4 6.6 .6 7.7 0 8.8 0 10.5 0 12 1.3 12 3.2 12 5.6 9.5 7.6 6 10Z"
          fill="white"
          fillOpacity="0.6"
        />
        <circle cx="26" cy="5" r="5" stroke="white" strokeOpacity="0.34" strokeWidth="1.5" />
        <path
          d="M44 0l8 5-8 5V0Z"
          stroke="white"
          strokeOpacity="0.34"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>

      {/* Likes drifting up. Placement sits on the outer group so the CSS
          animation on the inner one does not blow away the translate. */}
      {hearts.map((heart) => (
        <g key={heart.id} transform={`translate(${heart.x} 118)`}>
          <g className="svg-fx animate-float-up" style={{ animationDelay: heart.delay }}>
            <path
              d="M5 8.5C2 6.4 0 4.6 0 2.6 0 1.1 1.2 0 2.7 0 3.6 0 4.5.5 5 1.2 5.5.5 6.4 0 7.3 0 8.8 0 10 1.1 10 2.6c0 2-2 3.8-5 5.9Z"
              fill="white"
              fillOpacity="0.85"
            />
          </g>
        </g>
      ))}

      {/* Engagement climbing */}
      {bars.map((bar) => (
        <rect
          key={bar.x}
          className="svg-fx animate-tick"
          style={{ animationDelay: bar.delay, transformOrigin: "bottom" }}
          x={bar.x}
          y={140 - bar.h}
          width="10"
          height={bar.h}
          rx="5"
          fill="white"
          fillOpacity="0.34"
        />
      ))}
      <path d="M158 146h50" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" />
    </svg>
  );
}

/** A mark turning inside its construction circle, over a colour palette. */
export function BrandingGraphic() {
  const swatches = [
    { x: 62, o: 0.45, delay: "0s" },
    { x: 96, o: 0.6, delay: "0.35s" },
    { x: 130, o: 0.45, delay: "0.7s" },
    { x: 164, o: 0.28, delay: "1.05s" },
  ];

  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 size-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Construction circle */}
      <circle cx="120" cy="68" r="44" {...FRAME} />
      <circle
        cx="120"
        cy="68"
        r="30"
        stroke="white"
        strokeOpacity="0.14"
        strokeWidth="1.5"
        strokeDasharray="2 9"
      />

      {/*
        The mark turns about the circle's centre, so transform-box is view-box
        and the origin is given in the viewBox's own coordinates. fill-box
        would pivot on the arc's bounding box instead and wobble off-centre.
      */}
      <g
        className="animate-spin-slow"
        style={{ transformBox: "view-box", transformOrigin: "120px 68px" }}
      >
        <path
          d="M120 24a44 44 0 0 1 44 44"
          stroke="white"
          strokeOpacity="0.8"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="120" cy="112" r="5.5" fill="white" fillOpacity="0.45" />
      </g>

      {/* Centre glyph: outer group rotates it, inner group breathes */}
      <g transform="rotate(45 120 68)">
        <g className="svg-fx animate-breathe">
          <rect
            x="106"
            y="54"
            width="28"
            height="28"
            rx="9"
            fill="white"
            fillOpacity="0.92"
          />
        </g>
      </g>

      {/* Palette */}
      {swatches.map((swatch) => (
        <rect
          key={swatch.x}
          className="animate-swatch"
          style={{ animationDelay: swatch.delay }}
          x={swatch.x}
          y="134"
          width="26"
          height="26"
          rx="8"
          fill="white"
          fillOpacity={swatch.o}
        />
      ))}
    </svg>
  );
}
