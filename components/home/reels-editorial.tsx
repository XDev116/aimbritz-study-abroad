"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const REELS = [
  { url: "https://www.instagram.com/reel/DPOlXHQj8If/", thumb: "/images/reels/reel1.jpg" },
  { url: "https://www.instagram.com/reel/DNavzAqP-YO/", thumb: "/images/reels/reel2.jpg" },
  { url: "https://www.instagram.com/reel/DLsB3JnP2Ox/", thumb: "/images/reels/reel3.jpg" },
  { url: "https://www.instagram.com/reel/DJeTT4fPw_e/", thumb: "/images/reels/reel4.jpg" }, // center
  { url: "https://www.instagram.com/reel/DPq71cmD3Q8/", thumb: "/images/reels/reel5.jpg" },
  { url: "https://www.instagram.com/reel/DUQZXP1j6VD/", thumb: "/images/reels/reel6.jpg" },
  { url: "https://www.instagram.com/reel/DRhaM6Dj8Ji/", thumb: "/images/reels/reel7.jpg" },
];

const W = 260;
const STEP = 108;
const CY = 3;

const BASE = REELS.map((_, i) => {
  const d = i - CY;
  const absD = Math.abs(d);
  return {
    x: d * STEP,
    y: absD * absD * 12,
    r: d * 6,
    z: 10 - absD,
  };
});

export function ReelsEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback((i: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHovered(i);
  }, []);

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setHovered(null), 80);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".re-head", {
        y: 32, opacity: 0, stagger: 0.1, duration: 0.8, ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 84%", once: true },
      });
      BASE.forEach((b, i) => {
        gsap.fromTo(`.rc-${i}`,
          { y: 220, opacity: 0 },
          {
            y: b.y, opacity: 1,
            duration: 1.05, ease: "power4.out",
            delay: 0.06 * i,
            scrollTrigger: { trigger: ".re-fan", start: "top 86%", once: true },
          },
        );
      });
    }, section);
    return () => ctx.revert();
  }, []);

  function t(i: number) {
    const b = BASE[i];
    if (hovered === null) return b;
    if (hovered === i)    return { ...b, y: -30, r: 0, z: b.z + 15 };
    const nudge = i < hovered ? -14 : 14;
    return { ...b, x: b.x + nudge };
  }

  const ReelCard = ({ reel, i, isHovered, onEnter, onLeave, className, style }: {
    reel: typeof REELS[0];
    i: number;
    isHovered: boolean;
    onEnter: () => void;
    onLeave: () => void;
    className?: string;
    style?: React.CSSProperties;
  }) => (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={style}
    >
      <img
        src={reel.thumb}
        alt={`AimBritz reel ${i + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 30%, rgba(0,0,0,0.65) 100%)",
      }} />
      <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
        <span
          className="font-mono text-[9px] tracking-[0.2em] font-bold px-2 py-0.5 rounded-sm"
          style={{ background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)" }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <span
          className="font-mono text-[9px] tracking-[0.18em] font-bold px-2 py-0.5 rounded-sm"
          style={{ background: "#C2410C", color: "#fff" }}
        >
          REEL
        </span>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{ width: 48, height: 48, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" strokeOpacity="0.7"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="white" fillOpacity="0.7"/>
        </svg>
        <p className="font-mono text-[8px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
          @aimbritz
        </p>
      </div>
    </a>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--paper)", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p className="re-head font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--ember)" }}>
          On socials
        </p>
        <h2
          className="re-head font-sans font-black uppercase leading-[0.88] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.4rem,6vw,5.5rem)", color: "var(--ink)" }}
        >
          What&apos;s up<br />
          <span className="font-serif italic" style={{ color: "var(--ember)" }}>on Instagram</span>
        </h2>
      </div>

      {/* ── DESKTOP: fan layout ── */}
      <div
        className="re-fan relative mx-auto hidden lg:flex"
        style={{
          width: `${W}px`,
          height: `${Math.round(W * 16 / 9)}px`,
          alignItems: "flex-end",
          overflow: "visible",
        }}
        onMouseLeave={handleLeave}
      >
        {REELS.map((reel, i) => {
          const tr = t(i);
          return (
            <ReelCard
              key={reel.url}
              reel={reel}
              i={i}
              isHovered={hovered === i}
              onEnter={() => handleEnter(i)}
              onLeave={handleLeave}
              className={`rc-${i}`}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: `${W}px`,
                aspectRatio: "9/16",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: hovered === i
                  ? "0 40px 80px -16px rgba(14,14,16,0.55)"
                  : "0 12px 40px -10px rgba(14,14,16,0.35)",
                transform: `translateX(${tr.x}px) translateY(${tr.y}px) rotate(${tr.r}deg)`,
                transformOrigin: "50% 100%",
                zIndex: tr.z,
                transition: "transform 700ms cubic-bezier(0.22,1,0.36,1), box-shadow 500ms ease",
                willChange: "transform",
                cursor: "pointer",
                background: "#0e0e10",
                display: "block",
              }}
            />
          );
        })}
      </div>

      {/* ── MOBILE: horizontal snap scroll ── */}
      <div className="lg:hidden">
        <div
          className="flex gap-3 overflow-x-auto pb-3 -mx-5 px-5 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {REELS.map((reel, i) => (
            <ReelCard
              key={reel.url}
              reel={reel}
              i={i}
              isHovered={false}
              onEnter={() => {}}
              onLeave={() => {}}
              className="relative flex-none snap-start"
              style={{
                width: "58vw",
                maxWidth: "220px",
                aspectRatio: "9/16",
                borderRadius: "14px",
                overflow: "hidden",
                background: "#0e0e10",
                display: "block",
                boxShadow: "0 8px 24px -6px rgba(14,14,16,0.35)",
              }}
            />
          ))}
        </div>
        <p className="mt-3 px-5 font-mono text-[8px] tracking-[0.25em] uppercase" style={{ color: "var(--ink-4)" }}>
          Swipe →
        </p>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-14">
        <a
          href="https://www.instagram.com/aimbritz/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
          style={{ color: "var(--ink-3)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
          </svg>
          Follow @aimbritz on Instagram →
        </a>
      </div>
    </section>
  );
}
