"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * "Al Ameen" signature — loaded from /public/signature.svg.
 * Each path is stroked (not filled) and animated via strokeDashoffset
 * so the outline of the signature draws on like pen writing.
 * After the stroke completes, the paths fade to filled ink.
 */

// Inline the signature path data so we can animate stroke-dashoffset
// (loading an external SVG via <img> doesn't allow per-path animation)
const SIG_PATHS = [
  "M3600 2833 c-93 -101 -307 -414 -466 -681 -55 -92 -40 -84 -231 -132 -201 -51 -270 -87 -234 -123 7 -7 23 -5 53 6 58 22 213 63 267 72 l43 7 -28 -48 c-15 -27 -38 -65 -49 -84 -110 -178 -373 -683 -450 -862 -40 -94 -42 -121 -8 -126 26 -4 27 -1 238 408 87 168 178 341 202 385 25 44 68 121 96 170 93 167 106 184 151 196 23 6 58 15 79 21 20 6 40 9 43 6 3 -3 -10 -55 -29 -115 -49 -154 -61 -217 -47 -243 13 -24 48 -24 61 0 4 8 29 79 54 158 77 238 98 271 182 296 22 7 22 7 9 -36 -7 -24 -32 -90 -55 -147 -22 -57 -41 -111 -41 -122 0 -20 34 -43 54 -36 6 3 36 45 65 93 47 78 158 234 167 234 3 0 -8 -37 -34 -110 -33 -96 -34 -108 -12 -130 26 -26 53 -14 76 33 25 52 138 217 147 217 5 0 6 -8 2 -17 -5 -10 -13 -43 -20 -73 -18 -83 5 -130 65 -130 12 0 46 24 80 56 l59 56 15 -30 c18 -35 65 -57 103 -47 33 8 81 42 140 98 l42 40 7 -27 c15 -62 93 -74 165 -27 58 40 138 122 246 255 49 60 94 111 100 113 6 2 -13 -53 -42 -122 -54 -130 -57 -158 -23 -176 27 -14 48 6 92 89 19 37 51 90 70 117 45 63 150 169 154 157 2 -6 -10 -52 -27 -104 -44 -137 -46 -158 -22 -212 34 -78 109 -101 236 -72 33 8 128 30 210 50 83 19 200 42 260 51 141 20 181 31 189 52 10 26 -3 52 -35 69 -26 13 -42 13 -107 4 -110 -16 -289 -57 -406 -92 -156 -47 -211 -57 -238 -44 -34 17 -35 71 -3 170 33 104 32 175 -4 192 -37 19 -78 -2 -153 -77 l-68 -67 0 39 c0 29 -5 41 -21 49 -45 25 -78 -4 -250 -216 -138 -169 -249 -240 -249 -159 0 20 20 46 75 101 91 90 126 141 127 184 2 77 -83 79 -154 3 -35 -37 -94 -136 -109 -182 -12 -39 -80 -115 -143 -162 -40 -30 -85 -38 -87 -16 -4 40 7 62 49 100 71 64 92 88 123 136 47 74 32 121 -39 121 -52 0 -124 -77 -181 -195 -41 -82 -138 -205 -163 -205 -15 0 -8 36 27 140 36 108 35 132 -5 145 -29 9 -54 -8 -111 -78 l-52 -62 7 47 c7 46 -8 78 -37 78 -23 0 -67 -37 -115 -97 l-49 -61 1 57 c1 56 1 56 -30 59 -18 2 -51 -7 -80 -22 -27 -14 -50 -21 -52 -16 -2 5 24 73 56 152 73 175 156 397 173 460 15 55 2 98 -30 98 -10 0 -42 -25 -71 -57z m-70 -252 c-53 -124 -151 -365 -167 -408 -12 -36 -21 -44 -51 -53 -56 -15 -112 -23 -112 -16 0 22 338 546 352 546 4 0 -6 -31 -22 -69z m1073 -239 c-26 -41 -83 -108 -83 -99 0 24 75 127 92 127 5 0 2 -13 -9 -28z m-301 -64 c-24 -38 -72 -86 -72 -72 0 20 79 119 88 109 2 -2 -5 -19 -16 -37z",
  "M2206 2640 c-46 -43 -211 -251 -270 -342 -14 -21 -165 -119 -211 -137 -5 -2 -28 -16 -50 -31 -22 -15 -107 -72 -190 -126 -313 -204 -651 -466 -960 -746 -126 -113 -127 -115 -187 -187 -88 -106 -17 -181 158 -168 228 17 492 164 835 465 146 128 221 207 308 322 69 91 65 89 209 126 35 9 65 14 66 13 2 -2 -13 -56 -34 -119 -50 -154 -55 -184 -34 -205 9 -9 26 -15 38 -13 17 2 26 18 44 78 24 77 92 254 270 695 109 270 133 357 114 399 -17 38 -44 32 -106 -24z m-57 -257 c-120 -287 -191 -458 -196 -475 -3 -12 -20 -19 -52 -24 -25 -3 -63 -10 -84 -14 -20 -4 -39 -5 -42 -1 -5 9 203 358 291 488 77 113 134 186 141 179 3 -2 -23 -71 -58 -153z m-363 -330 c-15 -26 -52 -86 -84 -133 l-57 -84 -85 -22 c-123 -31 -242 -76 -254 -96 -8 -13 -7 -21 2 -30 10 -10 29 -7 95 14 132 43 158 50 164 44 17 -16 -237 -261 -442 -427 -104 -83 -244 -178 -328 -220 -134 -68 -353 -121 -372 -89 -9 15 39 65 226 234 215 193 306 269 489 407 270 204 656 466 668 455 2 -3 -8 -26 -22 -53z",
  "M2505 2526 c-60 -64 -179 -261 -269 -446 -37 -76 -77 -144 -92 -156 -20 -17 -25 -28 -21 -46 4 -13 -2 -53 -13 -89 -26 -83 -26 -160 -2 -182 45 -41 119 -7 189 85 59 77 68 97 47 105 -11 4 -24 -5 -42 -28 -59 -78 -132 -133 -132 -100 0 18 52 155 91 237 21 46 70 124 109 174 91 117 206 291 235 356 34 77 39 109 20 128 -31 31 -66 20 -120 -38z m54 -88 c-27 -53 -127 -208 -134 -208 -7 0 25 63 86 165 51 88 86 118 48 43z",
];

export function BrandPromise() {
  const outerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const sigContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const sigContainer = sigContainerRef.current;
    const svg = svgRef.current;
    const content = contentRef.current;
    if (!outer || !sticky || !sigContainer || !svg || !content) return;

    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path"));
    if (!paths.length) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(sigContainer, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        opacity: 1,
      });

      // Measure each path and set stroke-dasharray so strokes are hidden
      const lengths = paths.map((p) => p.getTotalLength());
      paths.forEach((p, i) => {
        gsap.set(p, {
          strokeDasharray: lengths[i],
          strokeDashoffset: lengths[i],
          fillOpacity: 0,
        });
      });

      gsap.set(content, { opacity: 0, y: 40 });
      gsap.set(".bp-line", { y: 60, opacity: 0 });
      gsap.set(".bp-eyebrow", { y: 30, opacity: 0 });
      gsap.set(".bp-meta", { y: 20, opacity: 0 });
      sticky.style.setProperty("--bp-bg", "rgba(242,242,239,0)");
      sticky.style.setProperty("--bp-fg", "#0a0a0a");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // PHASE 1 (0 → 0.08): background darkens
      tl.to(sticky, {
        "--bp-bg": "rgba(40,44,32,0.92)",
        "--bp-fg": "#fcfcfa",
        duration: 0.08,
        ease: "none",
      } as gsap.TweenVars, 0);

      // PHASE 2 (0.05 → 0.40): strokes draw one by one (pen writing)
      const STROKE_START = 0.05;
      const STROKE_SPAN = 0.35;
      const perStroke = STROKE_SPAN / paths.length;
      paths.forEach((p, i) => {
        tl.to(p, {
          strokeDashoffset: 0,
          duration: perStroke * 1.1,
          ease: "none",
        }, STROKE_START + i * perStroke * 0.9);
      });

      // PHASE 3 (0.40 → 0.48): fill fades in (outline becomes solid ink)
      tl.to(paths, { fillOpacity: 1, duration: 0.08, ease: "power2.out" }, 0.4);

      // PHASE 4 (0.48 → 0.58): hold big centered
      tl.to({}, { duration: 0.1 }, 0.48);

      // PHASE 5 (0.58 → 0.72): signature shrinks + moves DOWN from center to rest slot.
      // Use fromTo to guarantee start/end values. Animating `top` (the CSS property)
      // is the most reliable way to move an absolute-positioned element.
      tl.fromTo(
        sigContainer,
        { top: "50%" },
        {
          top: "28%",
          scale: 0.35,
          duration: 0.14,
          ease: "power2.inOut",
        },
        0.58,
      );

      // PHASE 6 (0.65 → 0.85): text block cascades in
      tl.to(content, { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" }, 0.65)
        .to(".bp-eyebrow", { y: 0, opacity: 1, duration: 0.05 }, 0.69)
        .to(".bp-line", { y: 0, opacity: 1, duration: 0.05, stagger: 0.04 }, 0.73)
        .to(".bp-meta", { y: 0, opacity: 1, duration: 0.05 }, 0.85);

      // Flow color override
      ScrollTrigger.create({
        trigger: outer,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () =>
          document.documentElement.style.setProperty("--flow-color", "rgba(252,252,250,0.35)"),
        onEnterBack: () =>
          document.documentElement.style.setProperty("--flow-color", "rgba(252,252,250,0.35)"),
        onLeave: () =>
          document.documentElement.style.removeProperty("--flow-color"),
        onLeaveBack: () =>
          document.documentElement.style.removeProperty("--flow-color"),
      });
    }, outer);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={outerRef} className="relative" style={{ height: "500vh" }}>
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          background: "var(--bp-bg, rgba(242,242,239,0))",
          color: "var(--bp-fg, #0a0a0a)",
        }}
      >
        {/* SVG signature — loaded from public/signature.svg content */}
        <div ref={sigContainerRef} className="pointer-events-none">
          <svg
            ref={svgRef}
            viewBox="100 80 440 240"
            style={{
              width: "clamp(360px, 55vw, 760px)",
              height: "auto",
              display: "block",
              overflow: "visible",
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0,405) scale(0.1,-0.1)">
              {SIG_PATHS.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Text content */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center pt-[32vh]">
            <div className="bp-eyebrow flex items-center justify-center gap-3">
              <span className="inline-block h-px w-10" style={{ background: "var(--ember)" }} />
              <span className="t-eyebrow" style={{ color: "var(--ember)" }}>The Promise</span>
              <span className="inline-block h-px w-10" style={{ background: "var(--ember)" }} />
            </div>

            <div className="mt-10">
              <p className="bp-line t-display" style={{ fontSize: "clamp(2rem, 6vw, 6.2rem)" }}>
                We don&apos;t place
              </p>
              <p className="bp-line t-display" style={{ fontSize: "clamp(2rem, 6vw, 6.2rem)" }}>
                students abroad.
              </p>
              <p className="bp-line t-display-serif mt-4" style={{ color: "var(--ember)", fontSize: "clamp(2rem, 6vw, 6.2rem)" }}>
                We build global futures.
              </p>
            </div>

            <div className="bp-meta mt-10 flex flex-col items-center gap-2">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ opacity: 0.6 }}>
                Al Ameen · Founder · Aimbritz
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-[10px] tracking-[0.22em] uppercase" style={{ opacity: 0.45 }}>
                <span>42 advisors globally</span>
                <span>·</span>
                <span>Since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
