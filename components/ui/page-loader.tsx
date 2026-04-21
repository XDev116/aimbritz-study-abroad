"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Block body scroll while loading
    document.body.style.overflow = "hidden";

    const counter = counterRef.current;
    const line = lineRef.current;
    const root = rootRef.current;
    if (!counter || !line || !root) return;

    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Sweep up + ease into the page
        gsap.to(root, {
          yPercent: -100,
          duration: 1.1,
          ease: "expo.inOut",
          onComplete: () => {
            document.body.style.overflow = "";
            setDone(true);
          },
        });
      },
    });

    tl.to(
      obj,
      {
        val: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          const v = Math.floor(obj.val);
          counter.textContent = String(v).padStart(3, "0");
        },
      },
      0
    )
      .to(line, { scaleX: 1, duration: 2.2, ease: "power2.inOut" }, 0)
      .to(
        [labelRef.current, wordmarkRef.current],
        { opacity: 0, y: -8, duration: 0.35, ease: "power2.in" },
        "+=0.15"
      );

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] bg-paper text-ink flex flex-col justify-between p-8 md:p-12 will-change-transform"
    >
      {/* Top label */}
      <div ref={labelRef} className="flex items-center justify-between">
        <p className="text-eyebrow text-ember">aimbritz</p>
        <p className="text-eyebrow text-ink-3">Loading · 2026</p>
      </div>

      {/* Centre wordmark + counter */}
      <div className="flex items-end justify-between gap-8">
        <div ref={wordmarkRef} className="flex-1 min-w-0">
          <h1
            className="font-serif text-mega italic text-ink leading-[0.85]"
            style={{ fontWeight: 300 }}
          >
            aimbritz
            <span className="text-ember">.</span>
          </h1>
        </div>
        <span
          ref={counterRef}
          className="font-mono tabular-nums text-ink-3 text-[clamp(1rem,1.2vw,1.25rem)]"
        >
          000
        </span>
      </div>

      {/* Bottom line */}
      <div className="relative h-px w-full bg-ink-4/40">
        <div
          ref={lineRef}
          className="absolute inset-0 h-px origin-left scale-x-0 bg-ember"
        />
      </div>
    </div>
  );
}
