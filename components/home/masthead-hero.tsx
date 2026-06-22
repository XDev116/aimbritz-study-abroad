"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FlipText, BtnPrimary, BtnGhost } from "@/components/ui/primitives";
import { FlowLines } from "@/components/ui/flow-lines";

/* ------------------------------------------------------------------ */
/*  Inline placement data                                             */
/* ------------------------------------------------------------------ */
interface Placement {
  name: string;
  first: string;
  uni: string;
  country: string;
  flag: string;
  course: string;
  year: string;
  photo: string;
  objectPosition?: string;
}

const PLACEMENTS: Placement[] = [
  { name: "Priya Nair",   first: "Priya",  uni: "Oxford",         country: "UK",        flag: "GB", course: "MSc Computer Science", year: "'26", photo: "/images/students/student1.webp" },
  { name: "Vignesh Arumugham", first: "Vignesh", uni: "Northumbria University", country: "UK", flag: "GB", course: "MBA", year: "'26", photo: "/images/students/Vignesh Arumugham.jpg", objectPosition: "top" },
  { name: "Meera Iyer",   first: "Meera",  uni: "Toronto",        country: "Canada",    flag: "CA", course: "MS Data Science",      year: "'26", photo: "/images/students/student3.webp" },
  { name: "Arjun Das",    first: "Arjun",  uni: "Edinburgh",      country: "UK",        flag: "GB", course: "MSc Finance",          year: "'26", photo: "/images/students/student4.webp" },
  { name: "Neha Varma",   first: "Neha",   uni: "Sydney",         country: "Australia", flag: "AU", course: "BArch",                year: "'26", photo: "/images/students/student5.webp" },
  { name: "Rajesh Menon", first: "Rajesh", uni: "Trinity Dublin", country: "Ireland",   flag: "IE", course: "MSc Pharmacology",     year: "'26", photo: "/images/students/student6.webp" },
];

/* ------------------------------------------------------------------ */
/*  MastheadHero                                                      */
/* ------------------------------------------------------------------ */
export function MastheadHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  /* Auto-rotate */
  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) =>
        hoverIdx !== null ? i : (i + 1) % PLACEMENTS.length,
      );
    }, 3800);
    return () => clearInterval(id);
  }, [hoverIdx]);

  /* No intro animation — the parent BrandPromise handles hero enter/exit.
     Internal gsap.from tweens leave stale inline styles that don't revert
     cleanly on scroll-back (causes photo scale + meta opacity to get stuck). */

  const p = PLACEMENTS[hoverIdx ?? active];

  return (
    <section
      ref={heroRef}
      className="relative w-full h-full overflow-hidden"
      style={{
        paddingTop: "clamp(96px,11vh,116px)",
        paddingBottom: "clamp(20px,3vh,40px)",
      }}
    >
      <FlowLines />

      <div className="relative z-10 px-5 md:px-10 lg:px-14 grid grid-cols-12 gap-4 lg:gap-6 h-full">
        {/* LEFT column -- rotating headline */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top eyebrow row */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase"
                style={{ background: "var(--ember)", color: "var(--ink)" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full"
                    style={{
                      background: "var(--ink)",
                      opacity: 0.4,
                      animation: "ping 1.6s infinite",
                    }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-1.5 w-1.5"
                    style={{ background: "var(--ink)" }}
                  />
                </span>
                Placement{" "}
                {String((hoverIdx ?? active) + 1).padStart(2, "0")} /{" "}
                {String(PLACEMENTS.length).padStart(2, "0")}
              </span>
              <span className="t-eyebrow text-ink-3 hidden sm:inline">
                FILED&nbsp;&middot;&nbsp;{p.country} BUREAU
              </span>
            </div>

            {/* Rotating headline -- flip-board feel */}
            <div className="h-line">
              <p
                className="t-display text-ink leading-[0.95]"
                style={{ fontSize: "clamp(2rem, 5.4vw, 5.6rem)" }}
              >
                We sent
              </p>
            </div>

            <div
              className="h-line mt-0.5 relative"
              style={{ minHeight: "1.05em" }}
            >
              <FlipText
                text={p.first.toUpperCase()}
                className="t-display inline-block leading-[0.95]"
                style={{ fontSize: "clamp(2rem, 5.4vw, 5.6rem)" }}
              />
              <span
                className="font-serif italic ml-4"
                style={{
                  color: "var(--ember)",
                  fontSize: "clamp(1rem, 2.2vw, 2.2rem)",
                }}
              >
                to
              </span>
            </div>

            <div className="h-line mt-0.5 overflow-hidden">
              <div
                key={p.uni}
                style={{
                  animation:
                    "heroUp 0.7s cubic-bezier(0.65,0.05,0,1) both",
                }}
              >
                <span
                  className="t-display leading-[0.95]"
                  style={{
                    color: "var(--ember)",
                    fontSize: "clamp(2.2rem, 6vw, 6.4rem)",
                  }}
                >
                  {p.uni}.
                </span>
              </div>
            </div>

            {/* Subline */}
            <p className="h-line mt-5 max-w-md text-[14px] md:text-[15px] leading-relaxed text-ink-2">
              {p.course}, Class of {p.year}.
            </p>

            {/* CTAs — hidden on mobile to save vertical space */}
            <div className="mt-6 hidden lg:flex flex-wrap items-center gap-3">
              <BtnPrimary href="/contact">Be the next one</BtnPrimary>
              <BtnGhost href="#story">See how we did it</BtnGhost>
            </div>
          </div>

          {/* Meta strip */}
          <div
            className="mt-4 pt-3 border-t flex flex-wrap gap-x-8 gap-y-2"
            style={{ borderColor: "var(--hairline)" }}
          >
            {(
              [
                ["5,246", "placed"],
                ["500+", "universities"],
                ["14", "countries"],
                ["98%", "visa success"],
              ] as const
            ).map(([v, k]) => (
              <div key={k} className="h-meta flex items-baseline gap-2">
                <span className="font-sans font-black tabular-nums text-[18px]">
                  {v}
                </span>
                <span className="t-eyebrow text-ink-3">{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT column -- cinematic portrait + mini grid */}
        <div className="col-span-12 lg:col-span-5 relative flex flex-col lg:h-full">
          {/* Big portrait / film frame */}
          <div
            className="h-frame relative overflow-hidden flex-1 min-h-0"
            style={{
              maxHeight: "clamp(280px, 52vh, 520px)",
              background: "var(--paper-3)",
              border: "1px solid var(--hairline)",
            }}
          >
            <div
              className="h-film absolute inset-0"
              key={`film-${p.uni}`}
              style={{
                animation:
                  "filmSwap 1.1s cubic-bezier(0.22,1,0.36,1) both",
              }}
            >
              <Image
                src={p.photo}
                alt={p.name}
                fill
                className="object-cover"
                style={{ objectPosition: p.objectPosition ?? "center" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 35%, rgba(10,10,10,0.55) 100%)",
                }}
              />

              {/* Film frame marks */}
              <span
                className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "var(--paper)" }}
              >
                FRAME{" "}
                {String((hoverIdx ?? active) + 1).padStart(3, "0")}
              </span>
              <span
                className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "var(--ember)" }}
              >
                REC
              </span>

              {/* Caption card */}
              <div
                className="absolute left-0 right-0 bottom-0 px-4 py-4 flex items-end justify-between"
                style={{
                  background: "linear-gradient(0deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.4) 70%, transparent 100%)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <div>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[10px] tracking-[0.22em] uppercase font-bold"
                    style={{ background: "rgba(255,255,255,0.12)", color: "var(--paper)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <span
                      className="font-mono font-bold text-[9px] tracking-[0.18em] px-1 py-0.5 rounded"
                      style={{ background: "var(--ember)", color: "var(--ink)" }}
                    >
                      {p.flag}
                    </span>
                    {p.country}
                  </span>
                  <p className="font-sans font-black text-[22px] tracking-[-0.02em] mt-2 uppercase" style={{ color: "var(--paper)" }}>
                    {p.name}
                  </p>
                  <p className="text-[12px] mt-0.5" style={{ color: "rgba(252,252,250,0.6)" }}>
                    {p.course}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(252,252,250,0.5)" }}>
                    Class of
                  </p>
                  <p className="font-sans font-black text-[24px]" style={{ color: "var(--paper)" }}>
                    {p.year}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini strip of other students */}
          <div className="mt-2 grid grid-cols-6 gap-1.5 shrink-0">
            {PLACEMENTS.map((pl, i) => {
              const isActive = i === (hoverIdx ?? active);
              return (
                <button
                  key={pl.name}
                  type="button"
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                  onFocus={() => setHoverIdx(i)}
                  aria-label={`${pl.name} at ${pl.uni}`}
                  className="h-port relative aspect-[3/4] overflow-hidden focus:outline-none"
                  style={{ border: "1px solid var(--hairline)" }}
                >
                  <Image
                    src={pl.photo}
                    alt=""
                    fill
                    className="object-cover transition-all duration-700"
                    style={{
                      objectPosition: pl.objectPosition ?? "center",
                      filter: isActive
                        ? "grayscale(0) contrast(1.05)"
                        : "grayscale(1) contrast(1.08)",
                      opacity: isActive ? 1 : 0.65,
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  <span
                    className="absolute bottom-1 left-1 font-mono text-[8px] font-bold tracking-[0.2em]"
                    style={{
                      color: isActive ? "var(--paper)" : "var(--ink)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] origin-left transition-transform"
                    style={{
                      background: "var(--ember)",
                      width: "100%",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transitionDuration: isActive ? "3500ms" : "180ms",
                      transitionTimingFunction: "linear",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <p className="mt-2 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] uppercase text-ink-3 shrink-0">
            <span>Hover to pin frame</span>
            <span>Auto-cycle &middot; 4s</span>
          </p>
        </div>
      </div>

    </section>
  );
}
