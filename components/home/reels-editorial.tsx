"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Inline reel data ───────────────────────────────────────────────── */
const reels = [
  {
    title: "Oxford, day one",
    caption: "Priya · Kochi \u2192 Oxford",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  },
  {
    title: "Visa stamped",
    caption: "Ahmed · Bangalore \u2192 UK",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    title: "Acceptance call",
    caption: "Meera · Chennai \u2192 Toronto",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
  },
  {
    title: "First snow",
    caption: "Arjun · Kerala \u2192 Scotland",
    img: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80",
  },
  {
    title: "Campus tour",
    caption: "Neha · Mumbai \u2192 Sydney",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
];

/* ── Fan-out transform helper ───────────────────────────────────────── */
function getFanTransform(
  i: number,
  total: number,
  hovered: number | null,
): { x: number; y: number; r: number; z: number; s: number } {
  const center = (total - 1) / 2;
  const offset = i - center;

  const base = {
    x: offset * 68,
    y: Math.abs(offset) * 26,
    r: offset * 5,
    z: 10 - Math.abs(offset),
    s: 1,
  };

  if (hovered === null) return base;

  if (hovered === i) {
    return { x: base.x, y: base.y - 28, r: 0, z: 50, s: 1.07 };
  }

  const dir = i < hovered ? -1 : 1;
  return {
    x: base.x + dir * 28,
    y: base.y + 12,
    r: base.r + dir * 3,
    z: base.z,
    s: 1,
  };
}

/* ── Component ──────────────────────────────────────────────────────── */
export function ReelsEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".reel-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 80%" },
      });

      gsap.fromTo(
        ".reel-card",
        { y: 160, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".reel-fan", start: "top 80%" },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "transparent",
        paddingTop: "clamp(100px,12vw,180px)",
        paddingBottom: "clamp(100px,12vw,180px)",
      }}
    >

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center mb-20">
        <p className="reel-reveal t-eyebrow text-ember mb-8">On socials</p>
        <h2
          className="reel-reveal t-display mt-8"
          style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)" }}
        >
          Real students.
          <br />
          <span className="t-display-serif" style={{ color: "var(--ember)" }}>
            Real results.
          </span>
        </h2>
      </div>

      {/* Fan deck */}
      <div
        className="reel-fan relative mx-auto flex justify-center items-start"
        style={{ perspective: 1400, height: "min(62vh, 540px)" }}
        onMouseLeave={() => setHovered(null)}
      >
        {reels.map((reel, i) => {
          const f = getFanTransform(i, reels.length, hovered);
          return (
            <a
              key={i}
              href="#"
              onMouseEnter={() => setHovered(i)}
              className="reel-card absolute top-0 block w-[180px] md:w-[220px] aspect-[9/14] overflow-hidden"
              style={{
                background: "var(--paper-3)",
                border: "1px solid var(--hairline)",
                transform: `translate3d(${f.x}px, ${f.y}px, ${
                  -Math.abs((reels.length - 1) / 2 - i) * 50
                }px) rotate(${f.r}deg) scale(${f.s})`,
                transformOrigin: "center bottom",
                zIndex: f.z,
                transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
                boxShadow: "0 24px 48px -20px rgba(14,14,16,0.2)",
              }}
            >
              <img
                src={reel.img}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(248,244,235,0.15), rgba(248,244,235,0.9))",
                }}
              />
              {/* Top counter / label */}
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono text-[9px] font-bold tracking-[0.25em] uppercase">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ color: "var(--ember)" }}>INSTA</span>
              </div>
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <p className="font-sans font-black uppercase leading-tight text-[14px]">
                  {reel.title}
                </p>
                <p className="font-mono text-[9px] tracking-[0.15em] text-ink-3 mt-1 uppercase">
                  {reel.caption}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
