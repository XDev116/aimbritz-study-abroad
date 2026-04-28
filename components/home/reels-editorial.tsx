"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// reel1 is at index 3 (center slot) — arranged so it's the frontmost card
const REELS = [
  { title: "Visa stamped",     caption: "Ahmed · Bangalore → UK",    img: "/images/reels/reel2.jpg" },
  { title: "Acceptance call",  caption: "Meera · Chennai → Toronto", img: "/images/reels/reel3.jpg" },
  { title: "First snow",       caption: "Arjun · Kerala → Scotland", img: "/images/reels/reel4.jpg" },
  { title: "Oxford, day one",  caption: "Priya · Kochi → Oxford",    img: "/images/reels/reel1.jpg" }, // center
  { title: "Campus tour",      caption: "Neha · Mumbai → Sydney",    img: "/images/reels/reel5.jpg" },
  { title: "Letter arrived",   caption: "Rajesh · Kochi → Dublin",   img: "/images/reels/reel6.jpg" },
  { title: "Move-in day",      caption: "Divya · Delhi → Edinburgh", img: "/images/reels/reel7.jpg" },
];

const W = 260;
const STEP = 108;     // tighter spacing — cards closer
const CY = 3;

const BASE = REELS.map((_, i) => {
  const d = i - CY;
  const absD = Math.abs(d);
  return {
    x: d * STEP,
    y: absD * absD * 12,   // quadratic arc: 0, 12, 48, 108 — smooth curve outward
    r: d * 6,
    z: 10 - absD,
  };
});

export function ReelsEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".re-head", {
        y: 32, opacity: 0, stagger: 0.1, duration: 0.8, ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 84%", once: true },
      });
      // Deal-in: each card slides up from below with its final rotation already applied
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
    if (hovered === i)    return { ...b, y: -30, r: 0, z: 20 };
    const nudge = i < hovered ? -14 : 14;
    return { ...b, x: b.x + nudge };
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--paper)", paddingTop: "clamp(64px,8vw,110px)", paddingBottom: "clamp(64px,8vw,110px)" }}
    >
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p className="re-head font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--ember)" }}>
          On socials
        </p>
        <h2 className="re-head font-sans font-black uppercase leading-[0.88] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.4rem,6vw,5.5rem)", color: "var(--ink)" }}>
          What&apos;s up<br />
          <span className="font-serif italic" style={{ color: "var(--ember)" }}>on socials</span>
        </h2>
      </div>

      {/* Fan container — overflow visible so side cards aren't clipped */}
      <div
        className="re-fan relative mx-auto"
        style={{
              width: `${W}px`,
          height: `${Math.round(W * 16 / 9)}px`,
          display: "flex",
          alignItems: "flex-end",
          overflow: "visible",
        }}
        onMouseLeave={() => setHovered(null)}
      >
        {REELS.map((reel, i) => {
          const tr = t(i);
          return (
            <div
              key={i}
              className={`rc-${i}`}
              onMouseEnter={() => setHovered(i)}
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
                transformOrigin: "50% 100%",        // pivot at bottom centre — same as Lando
                zIndex: tr.z,
                transition: "transform 580ms cubic-bezier(0.22,1,0.36,1), box-shadow 350ms ease",
                willChange: "transform",
                cursor: "pointer",
              }}
            >
              <img src={reel.img} alt={reel.title} className="absolute inset-0 w-full h-full object-cover" />

              {/* Scrim — heavier at bottom */}
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 30%, rgba(0,0,0,0.68) 100%)",
              }} />

              {/* Top: index + STORY badge */}
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                <span className="font-mono text-[9px] tracking-[0.2em] font-bold px-2 py-0.5 rounded-sm"
                  style={{ background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[9px] tracking-[0.18em] font-bold px-2 py-0.5 rounded-sm"
                  style={{ background: "#C2410C", color: "#fff" }}>
                  STORY
                </span>
              </div>

              {/* Bottom: title + caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-sans font-black uppercase text-[12px] leading-tight" style={{ color: "#fff" }}>
                  {reel.title}
                </p>
                <p className="font-mono text-[7px] tracking-[0.18em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {reel.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
