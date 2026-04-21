"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MarqueeProps {
  children: ReactNode;
  /** Base px per second. Negative value reverses direction. */
  speed?: number;
  className?: string;
  /** Fade edges with paper-colored mask for editorial look */
  fadeEdges?: boolean;
}

export function Marquee({ children, speed = 60, className = "", fadeEdges = false }: MarqueeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const absSpeed = Math.abs(speed);
  const reverse = speed < 0;

  useLayoutEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    const totalWidth = track.scrollWidth / 2; // content duplicated
    const duration = totalWidth / absSpeed;

    // Reversed: start at -totalWidth, animate to 0, repeat
    const tween = reverse
      ? gsap.fromTo(
          track,
          { x: -totalWidth },
          { x: 0, duration, ease: "none", repeat: -1 }
        )
      : gsap.to(track, { x: -totalWidth, duration, ease: "none", repeat: -1 });

    // Scroll-linked speed boost
    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = Math.abs(self.getVelocity());
        tween.timeScale(1 + Math.min(v / 800, 3));
      },
    });

    return () => {
      tween.kill();
      st.kill();
    };
  }, [absSpeed, reverse]);

  return (
    <div
      ref={wrapRef}
      className={`overflow-hidden ${className}`}
      style={
        fadeEdges
          ? {
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            }
          : undefined
      }
    >
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
