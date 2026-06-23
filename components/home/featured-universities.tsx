/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";

interface Uni {
  rank: number;
  name: string;
  full: string;
  city: string;
  country: string;
  code: string;
  accept: string;
  founded: number;
  students: string;
  courses: string[];
  tier: "Elite" | "Target" | "Broad";
  photo: string;
}

const UNIS: Uni[] = [
  { rank: 2,  name: "Oxford",    full: "University of Oxford",        city: "Oxford",    country: "United Kingdom", code: "GB", accept: "17%", founded: 1096, students: "26,000", tier: "Elite",  courses: ["PPE", "CS", "Law"],         photo: "/images/universties/oxford2.avif" },
  { rank: 5,  name: "Cambridge", full: "University of Cambridge",     city: "Cambridge", country: "United Kingdom", code: "GB", accept: "21%", founded: 1209, students: "24,000", tier: "Elite",  courses: ["Nat Sci", "Maths", "Eng"],  photo: "/images/universties/cambridge.avif" },
  { rank: 6,  name: "Imperial",  full: "Imperial College London",     city: "London",    country: "United Kingdom", code: "GB", accept: "14%", founded: 1907, students: "22,000", tier: "Elite",  courses: ["Eng", "Med", "CS"],         photo: "/images/universties/imperial college 2.jpg" },
  { rank: 18, name: "Toronto",   full: "University of Toronto",       city: "Toronto",   country: "Canada",         code: "CA", accept: "43%", founded: 1827, students: "97,000", tier: "Target", courses: ["Data Sci", "MBA", "Eng"],   photo: "/images/universties/toronto.jpg" },
  { rank: 19, name: "Sydney",    full: "University of Sydney",        city: "Sydney",    country: "Australia",      code: "AU", accept: "30%", founded: 1850, students: "73,000", tier: "Target", courses: ["BArch", "Law", "Med"],      photo: "/images/universties/sydney 2.jpg" },
  { rank: 27, name: "TU Munich", full: "Technical University Munich", city: "Munich",    country: "Germany",        code: "DE", accept: "8%",  founded: 1868, students: "48,000", tier: "Elite",  courses: ["Auto Eng", "AI", "Robo"],   photo: "/images/universties/tu 2.jpg" },
  { rank: 34, name: "Trinity",   full: "Trinity College Dublin",      city: "Dublin",    country: "Ireland",        code: "IE", accept: "33%", founded: 1592, students: "20,000", tier: "Target", courses: ["Pharma", "Eng Lit", "BBA"], photo: "/images/universties/trinity.jpg" },
  { rank: 55, name: "Edinburgh", full: "University of Edinburgh",     city: "Edinburgh", country: "United Kingdom", code: "GB", accept: "52%", founded: 1583, students: "47,000", tier: "Broad",  courses: ["AI", "Finance", "Vet"],     photo: "/images/universties/edinburg.jpg" },
];

const TIER_COLOR: Record<Uni["tier"], string> = {
  Elite:  "#C2410C",
  Target: "#8B9D7A",
  Broad:  "#7A8794",
};

export function FeaturedUniversities() {
  const [active, setActive] = useState(0);
  const uni = UNIS[active];

  return (
    <section
      style={{
        background: "#0E0E10",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 w-full">

        {/* Compact header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-[8px] tracking-[0.3em] uppercase font-bold px-1.5 py-0.5"
              style={{ background: "#C2410C", color: "#0E0E10" }}
            >
              04
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
              The Network
            </span>
          </div>
          <a
            href="/universities"
            className="font-mono text-[9px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "rgba(246,242,234,0.4)" }}
          >
            500+ →
          </a>
        </div>

        {/* Compact headline */}
        <h2
          className="font-sans font-black uppercase tracking-[-0.02em] leading-[0.95] mb-6"
          style={{ fontSize: "clamp(1.3rem,3vw,2.4rem)", color: "#F6F2EA" }}
        >
          The campuses{" "}
          <span className="font-serif italic font-normal" style={{ color: "#C2410C" }}>where we send</span>{" "}
          our students.
        </h2>

        {/* ───────────── DESKTOP: split layout ───────────── */}
        <div className="hidden lg:grid grid-cols-12 gap-6">

          {/* LEFT — photo card (compact) */}
          <div className="col-span-7">
            <div className="relative" style={{ aspectRatio: "5/4", maxHeight: "420px" }}>
              {UNIS.map((u, i) => (
                <div
                  key={u.rank}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === active ? 1 : 0 }}
                >
                  <Image
                    src={u.photo}
                    alt={u.full}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 35%, rgba(14,14,16,0.85) 100%)" }}
                  />
                </div>
              ))}

              {/* Top labels */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span
                  className="font-mono text-[9px] tracking-[0.25em] uppercase px-2 py-1"
                  style={{ background: "rgba(14,14,16,0.6)", color: "#F6F2EA", backdropFilter: "blur(8px)" }}
                >
                  #{String(uni.rank).padStart(3, "0")}
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold px-2 py-1"
                  style={{ background: TIER_COLOR[uni.tier], color: "#0E0E10" }}
                >
                  {uni.tier}
                </span>
              </div>

              {/* Bottom title */}
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  className="font-mono text-[9px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: "rgba(246,242,234,0.7)" }}
                >
                  {uni.city} · {uni.country}
                </p>
                <h3
                  className="font-sans font-black uppercase tracking-[-0.02em] leading-[0.95]"
                  style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)", color: "#F6F2EA" }}
                >
                  {uni.full}
                </h3>
              </div>
            </div>

            {/* Compact meta strip */}
            <div className="mt-3 grid grid-cols-3 text-center" style={{ borderTop: "1px solid rgba(246,242,234,0.08)" }}>
              {([
                ["Founded", String(uni.founded)],
                ["Students", uni.students],
                ["Admit", uni.accept],
              ] as const).map(([label, value], idx) => (
                <div
                  key={label}
                  className="py-3"
                  style={{ borderRight: idx < 2 ? "1px solid rgba(246,242,234,0.08)" : undefined }}
                >
                  <p className="font-mono text-[8px] tracking-[0.25em] uppercase mb-1" style={{ color: "rgba(246,242,234,0.4)" }}>
                    {label}
                  </p>
                  <p className="font-sans font-black tabular-nums" style={{ fontSize: "0.95rem", color: "#F6F2EA" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Course pills */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {uni.courses.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-0.5"
                  style={{ border: "1px solid rgba(246,242,234,0.15)", color: "rgba(246,242,234,0.6)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — dense index list */}
          <div className="col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
                Index
              </p>
              <span style={{ color: "rgba(246,242,234,0.2)" }}>—</span>
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
                {String(active + 1).padStart(2, "0")}/{String(UNIS.length).padStart(2, "0")}
              </p>
            </div>

            <ul>
              {UNIS.map((u, i) => {
                const isActive = i === active;
                return (
                  <li key={u.rank}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="w-full flex items-center gap-3 py-3 text-left group"
                      style={{
                        borderTop: "1px solid rgba(246,242,234,0.08)",
                        borderBottom: i === UNIS.length - 1 ? "1px solid rgba(246,242,234,0.08)" : undefined,
                      }}
                    >
                      <span
                        className="font-mono text-[10px] tracking-[0.2em] tabular-nums"
                        style={{ color: isActive ? "#C2410C" : "rgba(246,242,234,0.3)", minWidth: "22px" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <p
                        className="flex-1 font-sans font-black uppercase tracking-[-0.015em] leading-none transition-colors"
                        style={{
                          fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                          color: isActive ? "#F6F2EA" : "rgba(246,242,234,0.5)",
                        }}
                      >
                        {u.name}
                      </p>

                      <span
                        className="font-mono text-[9px] tracking-[0.2em] uppercase"
                        style={{ color: isActive ? "rgba(246,242,234,0.5)" : "rgba(246,242,234,0.25)" }}
                      >
                        {u.code}
                      </span>

                      <span
                        className="font-mono text-[10px] tracking-[0.2em] tabular-nums"
                        style={{ color: isActive ? "rgba(246,242,234,0.7)" : "rgba(246,242,234,0.25)", minWidth: "32px", textAlign: "right" }}
                      >
                        #{u.rank}
                      </span>

                      <span
                        className="block transition-all duration-500"
                        style={{
                          width: isActive ? "20px" : "0px",
                          height: "1px",
                          background: "#C2410C",
                        }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href="/universities"
              className="mt-5 inline-flex items-center justify-between w-full px-4 py-3 group"
              style={{ background: "#C2410C", color: "#0E0E10" }}
            >
              <span className="font-sans font-black uppercase tracking-[-0.01em] text-[0.95rem]">
                Browse all 500+
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>
          </div>
        </div>

        {/* ───────────── MOBILE: horizontal swipe carousel ───────────── */}
        <div className="lg:hidden">
          <div
            className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {UNIS.map((u) => (
              <a
                key={u.rank}
                href="/universities"
                className="relative flex-none snap-start overflow-hidden"
                style={{ width: "78vw", maxWidth: "320px", aspectRatio: "4/5" }}
              >
                <img
                  src={u.photo}
                  alt={u.full}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(14,14,16,0.88) 100%)" }}
                />

                {/* Top */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className="font-mono text-[9px] tracking-[0.25em] uppercase px-2 py-0.5"
                    style={{ background: "rgba(14,14,16,0.6)", color: "#F6F2EA", backdropFilter: "blur(6px)" }}
                  >
                    #{String(u.rank).padStart(3, "0")}
                  </span>
                  <span
                    className="font-mono text-[9px] tracking-[0.22em] uppercase font-bold px-2 py-0.5"
                    style={{ background: TIER_COLOR[u.tier], color: "#0E0E10" }}
                  >
                    {u.tier}
                  </span>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "rgba(246,242,234,0.6)" }}>
                    {u.city} · {u.country}
                  </p>
                  <h3
                    className="font-sans font-black uppercase tracking-[-0.02em] leading-[0.95]"
                    style={{ fontSize: "1.4rem", color: "#F6F2EA" }}
                  >
                    {u.full}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 font-mono text-[8px] tracking-[0.2em] uppercase" style={{ color: "rgba(246,242,234,0.55)" }}>
                    <span style={{ color: "#C2410C" }}>{u.accept} admit</span>
                    <span>·</span>
                    <span>{u.students}</span>
                  </div>
                </div>
              </a>
            ))}

            {/* End CTA card */}
            <a
              href="/universities"
              className="relative flex-none snap-start flex flex-col items-center justify-center gap-3 px-5"
              style={{
                width: "60vw",
                maxWidth: "220px",
                aspectRatio: "4/5",
                background: "rgba(194,65,12,0.06)",
                border: "1px solid rgba(194,65,12,0.3)",
              }}
            >
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-center" style={{ color: "rgba(246,242,234,0.45)" }}>
                492 more<br />universities
              </p>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[9px] tracking-[0.2em] uppercase font-bold"
                style={{ background: "#C2410C", color: "#0E0E10" }}
              >
                Browse →
              </span>
            </a>
          </div>

          {/* Swipe hint */}
          <p className="mt-3 font-mono text-[8px] tracking-[0.25em] uppercase" style={{ color: "rgba(246,242,234,0.25)" }}>
            Swipe →
          </p>
        </div>
      </div>
    </section>
  );
}
