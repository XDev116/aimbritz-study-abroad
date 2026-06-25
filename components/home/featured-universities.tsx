/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface Uni {
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
  // UK
  { name: "Liverpool",      full: "University of Liverpool",                   city: "Liverpool",  country: "United Kingdom", code: "GB", accept: "69%", founded: 1881, students: "22,000", tier: "Target", courses: ["Medicine", "Law", "Engineering"],      photo: "/images/universties/liverpool.jpg" },
  { name: "Surrey",         full: "University of Surrey",                      city: "Guildford",  country: "United Kingdom", code: "GB", accept: "71%", founded: 1966, students: "16,000", tier: "Target", courses: ["Business", "Engineering", "Computing"], photo: "/images/universties/surrey.jpg" },
  { name: "Queen's Belfast",full: "Queen's University Belfast",                city: "Belfast",    country: "United Kingdom", code: "GB", accept: "63%", founded: 1845, students: "24,000", tier: "Target", courses: ["Law", "Medicine", "Finance"],           photo: "/images/universties/queens-belfast.jpg" },
  { name: "Heriot-Watt",    full: "Heriot-Watt University",                    city: "Edinburgh",  country: "United Kingdom", code: "GB", accept: "74%", founded: 1821, students: "10,000", tier: "Target", courses: ["Actuarial Sci", "Engineering", "MBA"],  photo: "/images/universties/heriot-watt.webp" },
  { name: "Aston",          full: "Aston University",                          city: "Birmingham", country: "United Kingdom", code: "GB", accept: "72%", founded: 1895, students: "15,000", tier: "Target", courses: ["Business", "Pharmacy", "CS"],           photo: "/images/universties/aston.jpg" },
  // Germany
  { name: "Constructor",    full: "Constructor University",                    city: "Bremen",     country: "Germany",        code: "DE", accept: "60%", founded: 2001, students: "1,500",  tier: "Target", courses: ["CS", "Data Science", "Business"],       photo: "/images/universties/constructor.webp" },
  { name: "GISMA",          full: "GISMA Business School",                     city: "Berlin",     country: "Germany",        code: "DE", accept: "65%", founded: 1999, students: "3,000",  tier: "Target", courses: ["MBA", "Finance", "Marketing"],          photo: "/images/universties/GISMA.webp" },
  { name: "UEAS",           full: "University of Europe for Applied Sciences", city: "Berlin",     country: "Germany",        code: "DE", accept: "70%", founded: 1994, students: "5,000",  tier: "Broad",  courses: ["Design", "Business", "Sports Mgmt"],    photo: "/images/universties/ueas.png" },
  // France
  { name: "KEDGE",          full: "KEDGE Business School",                     city: "Bordeaux",   country: "France",         code: "FR", accept: "55%", founded: 2013, students: "12,000", tier: "Target", courses: ["MBA", "Finance", "Supply Chain"],       photo: "/images/universties/kedge.jpeg" },
  { name: "INSEEC",         full: "INSEEC Business School",                    city: "Paris",      country: "France",         code: "FR", accept: "60%", founded: 1975, students: "17,000", tier: "Target", courses: ["Luxury Mgmt", "Finance", "Marketing"],  photo: "/images/universties/inseec.webp" },
  { name: "ISC Paris",      full: "ISC Paris Business School",                 city: "Paris",      country: "France",         code: "FR", accept: "58%", founded: 1963, students: "3,500",  tier: "Target", courses: ["International Biz", "Finance", "HR"],   photo: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=1200&q=80" },
  // Ireland
  { name: "UCD",            full: "University College Dublin",                 city: "Dublin",     country: "Ireland",        code: "IE", accept: "55%", founded: 1854, students: "33,000", tier: "Target", courses: ["Business", "Engineering", "Medicine"],  photo: "/images/universties/ucd.webp" },
  { name: "UCC",            full: "University College Cork",                   city: "Cork",       country: "Ireland",        code: "IE", accept: "57%", founded: 1845, students: "24,000", tier: "Target", courses: ["Pharmacy", "Law", "Business"],          photo: "/images/universties/ucc.jpg" },
  // Australia
  { name: "Melbourne",      full: "University of Melbourne",                   city: "Melbourne",  country: "Australia",      code: "AU", accept: "70%", founded: 1853, students: "52,000", tier: "Elite",  courses: ["Medicine", "Law", "Engineering"],      photo: "/images/universties/melbourne.jpg" },
  { name: "Sydney",         full: "University of Sydney",                      city: "Sydney",     country: "Australia",      code: "AU", accept: "30%", founded: 1850, students: "73,000", tier: "Elite",  courses: ["Architecture", "Law", "Medicine"],      photo: "/images/universties/sydney.jpg" },
  // Canada
  { name: "Waterloo",       full: "University of Waterloo",                    city: "Waterloo",   country: "Canada",         code: "CA", accept: "53%", founded: 1957, students: "42,000", tier: "Target", courses: ["CS", "Engineering", "Math"],            photo: "/images/universties/waterloo.png" },
  { name: "Alberta",        full: "University of Alberta",                     city: "Edmonton",   country: "Canada",         code: "CA", accept: "58%", founded: 1908, students: "40,000", tier: "Target", courses: ["Engineering", "Business", "Medicine"],  photo: "/images/universties/alberta.png" },
];

const TIER_COLOR: Record<Uni["tier"], string> = {
  Elite:  "#C2410C",
  Target: "#8B9D7A",
  Broad:  "#7A8794",
};

export function FeaturedUniversities() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const uni = UNIS[active];

  const scrollToItem = useCallback((i: number) => {
    const list = listRef.current;
    if (!list) return;
    const el = list.children[i] as HTMLElement | undefined;
    if (!el) return;
    const listTop = list.scrollTop;
    const listBottom = listTop + list.clientHeight;
    const elTop = el.offsetTop;
    const elBottom = elTop + el.clientHeight;
    if (elTop < listTop || elBottom > listBottom) {
      list.scrollTo({ top: elTop - list.clientHeight / 2 + el.clientHeight / 2, behavior: "smooth" });
    }
  }, []);

  const goTo = useCallback((i: number) => {
    setActive(i);
    scrollToItem(i);
  }, [scrollToItem]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % UNIS.length;
        scrollToItem(next);
        return next;
      });
    }, 2500);
    return () => clearInterval(id);
  }, [paused, scrollToItem]);

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
                  key={u.name}
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
                  {String(active + 1).padStart(2, "0")}/{String(UNIS.length).padStart(2, "0")}
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
                ["City", uni.city],
                ["Students", uni.students],
                ["Est.", String(uni.founded)],
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

          {/* RIGHT — scrollable index list */}
          <div className="col-span-5 flex flex-col" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="flex items-center gap-2 mb-3">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
                Index
              </p>
              <span style={{ color: "rgba(246,242,234,0.2)" }}>—</span>
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
                {String(active + 1).padStart(2, "0")}/{String(UNIS.length).padStart(2, "0")}
              </p>
            </div>

            {/* Scrollable list — height matches photo card */}
            <div className="relative flex-1" style={{ maxHeight: "420px" }}>
              {/* Fade at bottom to hint scroll */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 z-10"
                style={{ background: "linear-gradient(to bottom, transparent, #0E0E10)" }} />

              <ul
                ref={listRef}
                className="h-full overflow-y-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {UNIS.map((u, i) => {
                  const isActive = i === active;
                  return (
                    <li key={u.name}>
                      <button
                        type="button"
                        onMouseEnter={() => goTo(i)}
                        onFocus={() => goTo(i)}
                        onClick={() => goTo(i)}
                        className="w-full flex items-center gap-3 py-3 text-left"
                        style={{
                          borderTop: "1px solid rgba(246,242,234,0.08)",
                          borderBottom: i === UNIS.length - 1 ? "1px solid rgba(246,242,234,0.08)" : undefined,
                        }}
                      >
                        <span
                          className="font-mono text-[10px] tracking-[0.2em] tabular-nums shrink-0"
                          style={{ color: isActive ? "#C2410C" : "rgba(246,242,234,0.3)", minWidth: "22px" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <p
                          className="flex-1 font-sans font-black uppercase tracking-[-0.015em] leading-none transition-colors truncate"
                          style={{
                            fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                            color: isActive ? "#F6F2EA" : "rgba(246,242,234,0.5)",
                          }}
                        >
                          {u.name}
                        </p>

                        <span
                          className="font-mono text-[9px] tracking-[0.2em] uppercase shrink-0"
                          style={{ color: isActive ? "rgba(246,242,234,0.5)" : "rgba(246,242,234,0.25)" }}
                        >
                          {u.code}
                        </span>

                        <span
                          className="block shrink-0 transition-all duration-500"
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
            </div>

            <a
              href="/universities"
              className="mt-4 inline-flex items-center justify-between w-full px-4 py-3 group"
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
                key={u.name}
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
                    {u.code}
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
                More<br />universities
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
