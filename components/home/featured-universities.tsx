/* eslint-disable @next/next/no-img-element */
"use client";

import { FlagChip } from "@/components/ui/primitives";

const UNIS = [
  { rank: 2,   name: "Oxford",        city: "UK",      code: "GB", accept: "17%", photo: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80",  wide: true  },
  { rank: 5,   name: "Cambridge",     city: "UK",      code: "GB", accept: "21%", photo: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",  wide: false },
  { rank: 11,  name: "Imperial",      city: "London",  code: "GB", accept: "14%", photo: "https://images.unsplash.com/photo-1568736772245-a1ebb3b7af2f?w=800&q=80",  wide: false },
  { rank: 18,  name: "Toronto",       city: "Canada",  code: "CA", accept: "43%", photo: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",  wide: true  },
  { rank: 19,  name: "Sydney",        city: "Aus",     code: "AU", accept: "30%", photo: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",  wide: false },
  { rank: 27,  name: "TU Munich",     city: "Germany", code: "DE", accept: "8%",  photo: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&q=80",  wide: false },
  { rank: 34,  name: "Trinity",       city: "Ireland", code: "IE", accept: "33%", photo: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80",  wide: true  },
  { rank: 55,  name: "Edinburgh",     city: "UK",      code: "GB", accept: "52%", photo: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=800&q=80",  wide: false },
];

export function FeaturedUniversities() {
  return (
    <section style={{ background: "#111112", paddingTop: "clamp(56px,8vw,100px)", paddingBottom: "clamp(56px,8vw,100px)" }}>

      {/* Header — compact, single line */}
      <div className="flex items-end justify-between px-6 md:px-10 mb-8">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#C2410C" }}>
            The Network
          </p>
          <h2
            className="font-sans font-black uppercase tracking-[-0.02em] leading-none"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#F6F2EA" }}
          >
            500+ Universities
          </h2>
        </div>
        <a
          href="/universities"
          className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60"
          style={{ color: "rgba(246,242,234,0.45)" }}
        >
          Browse all
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H8M17 7V16" />
          </svg>
        </a>
      </div>

      {/* Film-strip scroll row */}
      <div
        className="flex gap-3 overflow-x-auto px-6 md:px-10 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {UNIS.map((u) => (
          <a
            key={u.rank}
            href="/universities"
            className="relative flex-none overflow-hidden group"
            style={{
              width: u.wide ? "clamp(240px,28vw,340px)" : "clamp(160px,18vw,220px)",
              height: "clamp(260px,32vw,400px)",
              border: "1px solid rgba(246,242,234,0.08)",
            }}
          >
            {/* Photo */}
            <img
              src={u.photo}
              alt={u.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              style={{ filter: "grayscale(0.2) contrast(1.05)" }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(17,17,18,0.25) 0%, rgba(17,17,18,0.75) 100%)" }}
            />

            {/* Top — rank */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span
                className="font-mono text-[9px] tracking-[0.25em] uppercase px-2 py-1"
                style={{ background: "rgba(17,17,18,0.6)", color: "rgba(246,242,234,0.7)", backdropFilter: "blur(4px)" }}
              >
                #{String(u.rank).padStart(3, "0")}
              </span>
              <FlagChip code={u.code} />
            </div>

            {/* Bottom — name + city + accept */}
            <div className="absolute bottom-3 left-3 right-3">
              <h3
                className="font-sans font-black uppercase tracking-[-0.02em] leading-[0.9]"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)", color: "#F6F2EA" }}
              >
                {u.name}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "#C2410C" }}>
                  {u.accept} admit
                </span>
                <span style={{ color: "rgba(246,242,234,0.2)" }}>·</span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
                  {u.city}
                </span>
              </div>
            </div>

            {/* Hover ember line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ background: "#C2410C" }}
            />
          </a>
        ))}

        {/* End card — CTA */}
        <div
          className="relative flex-none flex flex-col items-center justify-center gap-4"
          style={{
            width: "clamp(160px,16vw,200px)",
            height: "clamp(260px,32vw,400px)",
            border: "1px solid rgba(194,65,12,0.25)",
            background: "rgba(194,65,12,0.06)",
          }}
        >
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-center px-4" style={{ color: "rgba(246,242,234,0.4)" }}>
            488 more<br />universities
          </p>
          <a
            href="/universities"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[9px] tracking-[0.2em] uppercase font-bold"
            style={{ background: "#C2410C", color: "#F6F2EA" }}
          >
            Browse
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll hint — mobile */}
      <p className="sm:hidden mt-4 px-6 font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(246,242,234,0.2)" }}>
        Swipe →
      </p>
    </section>
  );
}
