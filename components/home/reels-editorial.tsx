"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const REELS = [
  { url: "https://www.instagram.com/reel/DPOlXHQj8If/", thumb: "/images/reels/reel1.jpg" },
  { url: "https://www.instagram.com/reel/DNavzAqP-YO/", thumb: "/images/reels/reel2.jpg" },
  { url: "https://www.instagram.com/reel/DLsB3JnP2Ox/", thumb: "/images/reels/reel3.jpg" },
  { url: "https://www.instagram.com/reel/DJeTT4fPw_e/", thumb: "/images/reels/reel4.jpg" },
  { url: "https://www.instagram.com/reel/DPq71cmD3Q8/", thumb: "/images/reels/reel5.jpg" },
  { url: "https://www.instagram.com/reel/DUQZXP1j6VD/", thumb: "/images/reels/reel6.jpg" },
  { url: "https://www.instagram.com/reel/DRhaM6Dj8Ji/", thumb: "/images/reels/reel7.jpg" },
];

const CY = 3; // center index

/* Fan layout config per breakpoint */
interface FanConfig {
  w: number;
  step: number;
  yMul: number;
  rot: number;
  radius: number;
  liftY: number;
  nudge: number;
}

const DESKTOP: FanConfig = { w: 260, step: 108, yMul: 12, rot: 6, radius: 18, liftY: -30, nudge: 14 };
const MOBILE: FanConfig  = { w: 140, step: 52,  yMul: 6,  rot: 5, radius: 12, liftY: -18, nudge: 8  };

function buildBase(cfg: FanConfig) {
  return REELS.map((_, i) => {
    const d = i - CY;
    const absD = Math.abs(d);
    return { x: d * cfg.step, y: absD * absD * cfg.yMul, r: d * cfg.rot, z: 10 - absD };
  });
}

const D_BASE = buildBase(DESKTOP);
const M_BASE = buildBase(MOBILE);

/* ── ReelCard (defined outside component to avoid re-creation) ── */
function ReelCard({ reel, i, isActive, onEnter, onLeave, onClick, className, style }: {
  reel: typeof REELS[0];
  i: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
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
        style={{ opacity: isActive ? 1 : 0 }}
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
}

/* ── Main component ── */
export function ReelsEditorial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Detect mobile vs desktop (single fan, responsive config) */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const cfg = isMobile ? MOBILE : DESKTOP;
  const base = isMobile ? M_BASE : D_BASE;

  const handleEnter = useCallback((i: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActive(i);
  }, []);

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setActive(null), 80);
  }, []);

  /* Scroll-in animation */
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".re-head", {
        y: 32, opacity: 0, stagger: 0.1, duration: 0.8, ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 84%", once: true },
      });
      REELS.forEach((_, i) => {
        const b = isMobile ? M_BASE[i] : D_BASE[i];
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
  }, [isMobile]);

  /* Compute transform for card i */
  function getTransform(i: number) {
    const b = base[i];
    if (active === null) return b;
    if (active === i) return { ...b, y: cfg.liftY, r: 0, z: b.z + 15 };
    const nudge = i < active ? -cfg.nudge : cfg.nudge;
    return { ...b, x: b.x + nudge };
  }

  /* Mobile: tap to lift, second tap to open */
  const handleMobileTap = useCallback((e: React.MouseEvent, i: number, url: string) => {
    e.stopPropagation();
    if (active === i) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      e.preventDefault();
      setActive(i);
    }
  }, [active]);

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

      {/* ── Single responsive fan layout ── */}
      <div
        className="re-fan relative mx-auto"
        style={{
          width: `${cfg.w}px`,
          height: `${Math.round(cfg.w * 16 / 9)}px`,
          overflow: "visible",
        }}
        onMouseLeave={!isMobile ? handleLeave : undefined}
        onClick={isMobile ? () => setActive(null) : undefined}
      >
        {REELS.map((reel, i) => {
          const tr = getTransform(i);
          return (
            <ReelCard
              key={reel.url}
              reel={reel}
              i={i}
              isActive={active === i}
              onEnter={!isMobile ? () => handleEnter(i) : () => {}}
              onLeave={!isMobile ? handleLeave : () => {}}
              className={`rc-${i}`}
              onClick={isMobile ? (e) => handleMobileTap(e, i, reel.url) : undefined}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: `${cfg.w}px`,
                aspectRatio: "9/16",
                borderRadius: `${cfg.radius}px`,
                overflow: "hidden",
                boxShadow: active === i
                  ? `0 ${isMobile ? 24 : 40}px ${isMobile ? 48 : 80}px ${isMobile ? -10 : -16}px rgba(14,14,16,0.55)`
                  : `0 ${isMobile ? 8 : 12}px ${isMobile ? 24 : 40}px ${isMobile ? -6 : -10}px rgba(14,14,16,0.35)`,
                transform: `translateX(${tr.x}px) translateY(${tr.y}px) rotate(${tr.r}deg)`,
                transformOrigin: "50% 100%",
                zIndex: tr.z,
                transition: `transform ${isMobile ? 600 : 700}ms cubic-bezier(0.22,1,0.36,1), box-shadow ${isMobile ? 400 : 500}ms ease`,
                cursor: "pointer",
                background: "#0e0e10",
                display: "block",
              }}
            />
          );
        })}
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
