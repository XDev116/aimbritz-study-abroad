"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Variant = "loop" | "wave" | "double-loop" | "squiggle" | "figure-eight";

interface SwooshLineProps {
  variant?: Variant;
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const PATHS: Record<Variant, { d: string; viewBox: string; length: number }> = {
  // Flowing double-curve — signature Lando-style swoosh
  wave: {
    d: "M 10,60 C 80,10 150,110 220,60 C 290,10 360,110 430,60 C 500,10 570,110 640,60 C 710,10 780,110 790,60",
    viewBox: "0 0 800 120",
    length: 1400,
  },
  // A single looping curve — like a stylised signature
  loop: {
    d: "M 10,80 C 40,20 120,20 160,80 C 200,140 280,140 320,80 C 360,20 440,20 480,80 C 510,130 580,100 620,60",
    viewBox: "0 0 640 160",
    length: 1100,
  },
  // Two adjacent loops — calligraphic flourish
  "double-loop": {
    d: "M 10,90 C 40,40 100,10 150,50 C 200,90 200,140 150,140 C 100,140 80,90 120,60 C 160,30 220,30 260,70 C 300,110 360,110 400,70 C 440,30 500,30 540,70 C 580,110 640,110 680,70",
    viewBox: "0 0 700 180",
    length: 1600,
  },
  // Rapid small loops — squiggle texture
  squiggle: {
    d: "M 5,25 C 25,5 45,45 65,25 C 85,5 105,45 125,25 C 145,5 165,45 185,25 C 205,5 225,45 245,25 C 265,5 285,45 305,25 C 325,5 345,45 365,25 C 385,5 405,45 425,25",
    viewBox: "0 0 430 50",
    length: 800,
  },
  // Figure-eight / infinity with tails — racing circuit feel
  "figure-eight": {
    d: "M 10,80 C 10,20 110,20 160,80 C 210,140 310,140 360,80 C 410,20 510,20 510,80 C 510,140 410,140 360,80 C 310,20 210,20 160,80 C 110,140 10,140 10,80",
    viewBox: "0 0 520 160",
    length: 1800,
  },
};

/**
 * Lando-inspired decorative SVG line — used as section accent, background
 * flourish, or scroll-animated stroke. Strokes draw on scroll when
 * `animate` is true.
 */
export function SwooshLine({
  variant = "wave",
  color = "currentColor",
  strokeWidth = 1.5,
  animate = false,
  className,
  width = "100%",
  height = "auto",
}: SwooshLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const { d, viewBox, length } = PATHS[variant];

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path || !animate) return;

    const ctx = gsap.context(() => {
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: path,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [animate, length]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      fill="none"
      preserveAspectRatio="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden
    >
      <path
        ref={pathRef}
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
