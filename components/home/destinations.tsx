/* eslint-disable @next/next/no-img-element */
"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow, FlagChip } from "@/components/ui/primitives";
import { getCountrySlugByCode } from "@/lib/data/countries";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Country {
  code: string;
  name: string;
  unis: number;
  topCourse: string;
  cost: string;
  intake: string;
  hero: string;
  shape: "tall" | "half";
  w?: number;
}

const COUNTRIES: Country[] = [
  { code: "GB", name: "United Kingdom",  unis: 142, topCourse: "MSc Computer Science", cost: "£22k / yr",  intake: "Sept",   hero: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1600&q=80", shape: "tall",  w: 460 },
  { code: "CA", name: "Canada",          unis: 96,  topCourse: "MS Data Science",      cost: "C$28k / yr", intake: "Sept",   hero: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=80", shape: "tall",  w: 480 },
  { code: "DE", name: "Germany",         unis: 58,  topCourse: "MS Automotive Eng",    cost: "€0 public",  intake: "Oct",    hero: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=1200&q=80", shape: "half",  w: 340 },
  { code: "FR", name: "France",          unis: 41,  topCourse: "MSc Business",         cost: "€12k / yr",  intake: "Sept",   hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80", shape: "half",  w: 340 },
  { code: "US", name: "United States",   unis: 182, topCourse: "MS Engineering",       cost: "$42k / yr",  intake: "Fall",   hero: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=80", shape: "tall",  w: 540 },
  { code: "AU", name: "Australia",       unis: 68,  topCourse: "BArch",                cost: "A$34k / yr", intake: "Feb",    hero: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80", shape: "tall",  w: 420 },
  { code: "IE", name: "Ireland",         unis: 24,  topCourse: "MSc Pharma",           cost: "€18k / yr",  intake: "Sept",   hero: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&q=80", shape: "half",  w: 380 },
  { code: "AT", name: "Austria",         unis: 22,  topCourse: "MSc Engineering",      cost: "€1.5k / yr", intake: "Oct",    hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", shape: "half",  w: 380 },
  { code: "SG", name: "Singapore",       unis: 35,  topCourse: "MSc Finance",          cost: "S$25k / yr", intake: "Aug",    hero: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80", shape: "half",  w: 360 },
  { code: "AE", name: "Dubai (UAE)",     unis: 40,  topCourse: "MBA",                  cost: "AED 55k/yr", intake: "Sept",   hero: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80", shape: "half",  w: 360 },
  { code: "GE", name: "Georgia",         unis: 18,  topCourse: "MBBS / Medicine",      cost: "$4k / yr",   intake: "Sept",   hero: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=80", shape: "tall",  w: 440 },
  { code: "MY", name: "Malaysia",        unis: 50,  topCourse: "Business & IT",        cost: "MYR 30k/yr", intake: "Mar",    hero: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80", shape: "half",  w: 360 },
  { code: "NZ", name: "New Zealand",     unis: 35,  topCourse: "Agriculture & IT",     cost: "NZ$30k/yr",  intake: "Feb",    hero: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=80", shape: "half",  w: 360 },
  { code: "MU", name: "Mauritius",       unis: 15,  topCourse: "Hospitality & Mgmt",   cost: "$6k / yr",   intake: "Jan",    hero: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1600&q=80", shape: "tall",  w: 420 },
];

function buildColumns(countries: Country[]): Country[][] {
  const cols: Country[][] = [];
  let pending: Country[] = [];
  countries.forEach((c) => {
    if (c.shape === "tall") {
      if (pending.length) {
        cols.push(pending);
        pending = [];
      }
      cols.push([c]);
    } else {
      pending.push(c);
      if (pending.length === 2) {
        cols.push(pending);
        pending = [];
      }
    }
  });
  if (pending.length) cols.push(pending);
  return cols;
}

export function Destinations() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: pinned horizontal scroll driven by vertical page scroll
      mm.add("(min-width: 1024px)", () => {
        const dist = track.scrollWidth - window.innerWidth + 60;
        gsap.to(track, {
          x: -dist,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      // Mobile: no hijack — native touch swipe on the track below
    }, outer);

    return () => ctx.revert();
  }, []);

  const columns = buildColumns(COUNTRIES);

  return (
    <div ref={outerRef} className="relative lg:h-[300vh]">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* DESKTOP LAYOUT — pinned horizontal scroll                     */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section
        id="countries"
        className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden items-center"
        style={{ background: "transparent" }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 pl-10 pr-[50vw] will-change-transform w-max"
        >
          {/* Header panel — first in track */}
          <div className="flex flex-col justify-center shrink-0 w-[clamp(320px,34vw,520px)] pr-8">
            <Eyebrow>Departures &middot; {COUNTRIES.length} countries</Eyebrow>
            <h2
              className="t-display mt-5"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Where will
              <br />
              <span className="t-display-serif" style={{ color: "var(--ember)" }}>
                you land
              </span>
              <br />
              next fall?
            </h2>
            <p className="mt-6 text-[14px] text-ink-2 leading-relaxed">
              {COUNTRIES.length} countries, 500+ universities, every tier and
              budget. A campus in every climate.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-3">
              <span>Scroll &rarr;</span>
              <span className="inline-block w-6 h-px bg-ink-3" />
            </div>
          </div>

          {columns.map((col, ci) => (
            <div
              key={ci}
              className="flex flex-col gap-5 shrink-0 snap-center lg:snap-align-none"
              style={{ width: `${col[0].w ?? 420}px` }}
            >
              {col.map((co, i) => (
                <DestinationCard key={co.code} country={co} index={ci + i} />
              ))}
            </div>
          ))}

          {/* Trailing editorial block */}
          <div className="flex flex-col justify-between pr-[6vw] pl-10 shrink-0 w-[400px] border-l border-hairline">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ember">
                &mdash; End of board
              </span>
              <h3
                className="t-display mt-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
              >
                Pick yours.
                <br />
                <span className="t-display-serif" style={{ color: "var(--ember)" }}>
                  We&apos;ll take you there.
                </span>
              </h3>
            </div>
            <div className="mt-10">
              <a
                href="/countries"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Browse all {COUNTRIES.length}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MOBILE LAYOUT — editorial staggered vertical grid             */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section
        className="lg:hidden relative px-5"
        style={{
          background: "transparent",
          paddingTop: "var(--section-py)",
          paddingBottom: "var(--section-py)",
        }}
      >
        {/* Mobile header */}
        <div className="mb-12">
          <Eyebrow>Departures &middot; {COUNTRIES.length} countries</Eyebrow>
          <h2
            className="t-display mt-5"
            style={{ fontSize: "clamp(2.25rem, 9vw, 3.5rem)" }}
          >
            Where will
            <br />
            <span className="t-display-serif" style={{ color: "var(--ember)" }}>
              you land
            </span>
            <br />
            next fall?
          </h2>
          <p className="mt-5 text-[14px] text-ink-2 leading-relaxed">
            {COUNTRIES.length} countries, 500+ universities, every tier and
            budget. A campus in every climate.
          </p>
        </div>

        {/* Staggered editorial grid — countries alternate left/right, varied sizes */}
        <div className="flex flex-col gap-10">
          {COUNTRIES.map((co, i) => {
            // Alternating layout pattern: odd indexes push right with smaller width
            const alignLeft = i % 2 === 0;
            const isFeature = co.shape === "tall";
            const widthClass = alignLeft
              ? isFeature
                ? "w-[78%] mr-auto"
                : "w-[62%] mr-auto"
              : isFeature
                ? "w-[82%] ml-auto"
                : "w-[58%] ml-auto";

            return (
              <div key={co.code} className={widthClass}>
                <MobileCountryCard country={co} index={i} />
              </div>
            );
          })}
        </div>

        {/* End block — CTA */}
        <div className="mt-16 pt-10 border-t border-hairline">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ember">
            &mdash; End of board
          </span>
          <h3
            className="t-display mt-5"
            style={{ fontSize: "clamp(1.6rem, 7vw, 2.4rem)" }}
          >
            Pick yours.{" "}
            <span className="t-display-serif" style={{ color: "var(--ember)" }}>
              We&apos;ll take you there.
            </span>
          </h3>
          <a
            href="/countries"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em]"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Browse all {COUNTRIES.length}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

/* Mobile card — full-width within its sized container, label ABOVE the image */
function MobileCountryCard({ country, index }: { country: Country; index: number }) {
  return (
    <a href={`/countries/${getCountrySlugByCode(country.code) ?? country.code.toLowerCase()}`} className="block">
      {/* Label above the image — Lando-style */}
      <div className="flex items-center gap-3 mb-3 font-mono text-[10px] tracking-[0.25em] uppercase">
        <FlagChip code={country.code} />
        <span className="text-ink-3">
          {country.name}
          {country.intake ? `, ${country.intake}` : ""}
        </span>
        <span className="ml-auto text-ink-4">{String(index + 1).padStart(2, "0")}</span>
      </div>

      {/* Image card */}
      <div
        className="relative overflow-hidden w-full"
        style={{
          aspectRatio: country.shape === "tall" ? "3/4" : "4/5",
          background: "var(--paper-3)",
          border: "1px solid var(--hairline)",
        }}
      >
        <img
          src={country.hero}
          alt={country.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(0.2) contrast(1.05)" }}
        />
      </div>
    </a>
  );
}

function DestinationCard({ country, index }: { country: Country; index: number }) {
  const heightStyle =
    country.shape === "tall"
      ? { height: "min(70vh, 680px)" }
      : { height: "min(34vh, 330px)" };

  return (
    <a
      href={`/countries/${getCountrySlugByCode(country.code) ?? country.code.toLowerCase()}`}
      className="group relative overflow-hidden shrink-0"
      style={{
        ...heightStyle,
        background: "var(--paper-3)",
        border: "1px solid var(--hairline)",
      }}
    >
      <img
        src={country.hero}
        alt={country.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        style={{ filter: "grayscale(0.25) contrast(1.05)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 35%, rgba(17,17,19,0.78) 100%)",
        }}
      />

      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
        <FlagChip code={country.code} />
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "var(--paper)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4" style={{ color: "var(--paper)" }}>
        <h3
          className="font-sans font-black uppercase tracking-[-0.02em]"
          style={{
            fontSize: country.shape === "tall" ? "clamp(1.6rem, 2.6vw, 2.6rem)" : "clamp(1.2rem, 1.8vw, 1.8rem)",
            lineHeight: 1,
          }}
        >
          {country.name}
        </h3>

        {country.shape === "tall" && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            <div>
              <span className="t-eyebrow opacity-60">Unis</span>
              <p className="font-sans font-black text-lg tabular-nums mt-1">{country.unis}</p>
            </div>
            <div>
              <span className="t-eyebrow opacity-60">Tuition</span>
              <p className="font-sans font-bold text-[13px] mt-1">{country.cost}</p>
            </div>
            <div>
              <span className="t-eyebrow opacity-60">Intake</span>
              <p className="font-sans font-bold text-[13px] mt-1">{country.intake}</p>
            </div>
          </div>
        )}

        {country.shape === "half" && (
          <div className="mt-2 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase opacity-80">
            <span>{country.unis} unis</span>
            <span>&middot;</span>
            <span>{country.intake}</span>
          </div>
        )}
      </div>
    </a>
  );
}
