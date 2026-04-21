"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Unsplash — real landmark photos per country
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1920&q=80&auto=format&fit=crop`;

type Country = {
  name: string;
  subtitle: string;
  accent: string;
  img: string;
  /** Transparent PNG foreground (landmark cutout) — if set, img becomes sky/bg */
  cutout?: string;
  stats: { label: string; value: string }[];
};

const countries: Country[] = [
  {
    name: "London",
    subtitle: "United Kingdom",
    accent: "#f59e0b",
    img: "", // sky bg — will be replaced by video later
    cutout: "/landmarks/london-transparent.webp",
    stats: [
      { label: "Universities", value: "150+" },
      { label: "Top Course", value: "Business & Law" },
      { label: "Work Visa", value: "2 Years" },
    ],
  },
  {
    name: "Tokyo",
    subtitle: "Japan",
    accent: "#f472b6",
    img: u("1540959733332-eab4deabeeaf"),
    stats: [
      { label: "Universities", value: "800+" },
      { label: "Top Course", value: "Robotics & AI" },
      { label: "Scholarship", value: "MEXT" },
    ],
  },
  {
    name: "Paris",
    subtitle: "France",
    accent: "#60a5fa",
    img: u("1502602898657-3e91760cbb34"),
    stats: [
      { label: "Universities", value: "75+" },
      { label: "Top Course", value: "Fashion & MBA" },
      { label: "Work Visa", value: "Available" },
    ],
  },
  {
    name: "Sydney",
    subtitle: "Australia",
    accent: "#34d399",
    img: "",
    cutout: "/landmarks/sydney-transparent.webp",
    stats: [
      { label: "Universities", value: "80+" },
      { label: "Top Course", value: "Engineering & IT" },
      { label: "Work Visa", value: "2-4 Years" },
    ],
  },
  {
    name: "New York",
    subtitle: "United States",
    accent: "#a78bfa",
    img: u("1485738422979-f5c462d49f04"),
    stats: [
      { label: "Universities", value: "200+" },
      { label: "Top Course", value: "CS & MBA" },
      { label: "OPT", value: "1-3 Years" },
    ],
  },
  {
    name: "Toronto",
    subtitle: "Canada",
    accent: "#fb923c",
    img: u("1517090504332-6560e72c4734"),
    stats: [
      { label: "Universities", value: "100+" },
      { label: "Top Course", value: "IT & Business" },
      { label: "PR Pathway", value: "Yes" },
    ],
  },
];

export function WordSwapHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const slides = section.querySelectorAll<HTMLElement>(".cz-slide");
      const total = slides.length;
      if (!total) return;

      // Set all slides: stacked, hidden except first
      slides.forEach((slide, i) => {
        const img = slide.querySelector<HTMLElement>(".cz-img");
        const text = slide.querySelector<HTMLElement>(".cz-text");

        if (i === 0) {
          gsap.set(slide, { autoAlpha: 1, zIndex: total - i });
          gsap.set(img, { scale: 1 });
          gsap.set(text, { y: 0, autoAlpha: 1 });
        } else {
          gsap.set(slide, { autoAlpha: 0, zIndex: total - i });
          gsap.set(img, { scale: 0.85 });
          gsap.set(text, { y: 60, autoAlpha: 0 });
        }
      });

      // Master pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${total * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // For each transition between slides
      for (let i = 0; i < total - 1; i++) {
        const curr = slides[i];
        const next = slides[i + 1];
        const currImg = curr.querySelector<HTMLElement>(".cz-img")!;
        const currText = curr.querySelector<HTMLElement>(".cz-text")!;
        const nextImg = next.querySelector<HTMLElement>(".cz-img")!;
        const nextText = next.querySelector<HTMLElement>(".cz-text")!;

        const pos = i + 0.5; // hold first half, transition second half

        // Hold phase — just sit on current slide
        // (automatic since we start at pos = i + 0.5)

        // Zoom current image in (1 → 1.6) + fade text out
        tl.to(currImg, { scale: 1.6, duration: 1, ease: "power1.in" }, pos)
          .to(currText, { y: -80, autoAlpha: 0, duration: 0.6, ease: "power2.in" }, pos)
          .to(curr, { autoAlpha: 0, duration: 0.4, ease: "none" }, pos + 0.6);

        // Bring next slide in — scale from 0.85 → 1 + fade text in
        tl.to(next, { autoAlpha: 1, duration: 0.4, ease: "none" }, pos + 0.3)
          .to(nextImg, { scale: 1, duration: 1, ease: "power2.out" }, pos + 0.3)
          .to(nextText, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" }, pos + 0.6);
      }

      // Progress bar
      const progressEl = section.querySelector<HTMLElement>(".cz-progress");
      if (progressEl) {
        gsap.to(progressEl, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${total * 100}%`,
            scrub: true,
          },
        });
      }

      // Counter
      const counterEl = section.querySelector<HTMLElement>(".cz-counter");
      if (counterEl) {
        const obj = { val: 1 };
        tl.to(obj, {
          val: total,
          duration: total - 1,
          ease: "none",
          onUpdate: () => {
            counterEl.textContent = `${String(Math.round(obj.val)).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
          },
        }, 0);
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chapter-01"
      className="relative bg-black h-screen overflow-hidden"
    >
      {/* Shared sky video background — plays behind all slides */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/landmarks/clouds.mp4"
      />
      {/* Dark tint over the video so landmarks pop */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Stacked full-screen country slides */}
      {countries.map((c, i) => (
        <div
          key={c.name}
          className="cz-slide absolute inset-0 z-[2]"
        >
          {/* Full-bleed background */}
          <div className="cz-img absolute inset-0 will-change-transform">
            {c.cutout ? (
              <>
                {/* Sky = clouds.mp4 shows through (transparent bg) */}
                {/* Transparent landmark cutout */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.cutout}
                  alt={c.name}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-none h-auto object-contain object-bottom"
                  loading="eager"
                />
                {/* Bottom vignette for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              </>
            )}
          </div>

          {/* Text content */}
          <div className="cz-text absolute inset-0 flex flex-col justify-end pb-28 md:pb-36 px-6 md:px-12 lg:px-20 z-10">
            {/* Country name — massive */}
            <p
              className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase mb-3 md:mb-4"
              style={{ color: c.accent }}
            >
              {c.subtitle}
            </p>
            <h2
              className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tight text-white"
            >
              {c.name}
              <span style={{ color: c.accent }}>.</span>
            </h2>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 md:gap-10 mt-6 md:mt-8">
              {c.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-lg md:text-2xl font-black text-white">{s.value}</p>
                  <p
                    className="text-[10px] font-bold tracking-[0.25em] uppercase mt-1"
                    style={{ color: c.accent, opacity: 0.9 }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Top labels */}
      <div className="absolute top-8 md:top-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 flex items-center justify-between z-20">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-amber-400/80">
          Study Abroad — Destinations
        </p>
        <p className="cz-counter text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-white/60 tabular-nums">
          01 / {String(countries.length).padStart(2, "0")}
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-20">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-white/30">
          Scroll to explore
        </p>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 z-20">
        <div className="relative h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
          <div className="cz-progress absolute inset-0 h-full origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
