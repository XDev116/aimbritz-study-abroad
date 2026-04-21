"use client";

import { useLayoutEffect, useRef, ElementType, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EASE,
  STAGGER,
  DURATION,
  TRIGGER_IN,
  splitIntoLines,
  splitIntoWords,
  reducedMotionSafe,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** "lines" | "words" — how the text is split */
  mode?: "lines" | "words";
  /** Stagger override (s) */
  stagger?: number;
  /** Duration override (s) */
  duration?: number;
  /** Play delay (s) */
  delay?: number;
  /** Trigger start position */
  start?: string;
}

/**
 * Masked split-text reveal. Renders the children as plain text, then on
 * mount splits and animates `y:110% → 0` with Lando ease. Safe with Lenis
 * (uses ScrollTrigger). Respects prefers-reduced-motion.
 *
 * Note: the children must be a plain string — this component doesn't
 * traverse nested React trees. Use a wrapper element for styled segments.
 */
export function SplitText({
  children,
  as: As = "span",
  className,
  mode = "lines",
  stagger,
  duration,
  delay = 0,
  start = TRIGGER_IN.start,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof children !== "string") return;

    const mm = reducedMotionSafe(() => {
      const targets =
        mode === "lines" ? splitIntoLines(el) : splitIntoWords(el);
      if (!targets.length) return;

      gsap.set(targets, { yPercent: 110 });
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            yPercent: 0,
            duration: duration ?? DURATION.reveal,
            stagger: stagger ?? (mode === "lines" ? STAGGER.lines : STAGGER.words),
            ease: EASE.landoGsap,
            delay,
          });
        },
      });
    }, el);

    return () => mm.revert();
  }, [children, mode, stagger, duration, delay, start]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = As as any;
  return (
    <Tag ref={ref} className={cn("inline-block", className)}>
      {children}
    </Tag>
  );
}
