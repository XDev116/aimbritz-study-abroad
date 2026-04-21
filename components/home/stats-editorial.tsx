"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/ui/primitives";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/*  Inline data                                                       */
/* ------------------------------------------------------------------ */
interface Stat {
  v: number;
  s: string;
  k: string;
}

const STATS: Stat[] = [
  { v: 7,    s: "+", k: "Years" },
  { v: 14,   s: "+", k: "Countries" },
  { v: 500,  s: "+", k: "Universities" },
  { v: 5246, s: "",  k: "Students placed" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export function StatsEditorial() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const sweep = sweepRef.current;
    if (!section || !text || !sweep) return;

    const ctx = gsap.context(() => {
      /* Sweep panel: wipe in, hold, wipe out */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
      tl.fromTo(sweep, { xPercent: -101 }, { xPercent: 0, duration: 0.35 })
        .to(sweep, { xPercent: 0, duration: 0.3 })
        .to(sweep, { xPercent: 101, duration: 0.35 });

      /* Toggle .inv class while ink panel covers text (classList approach) */
      ScrollTrigger.create({
        trigger: section,
        start: "top 40%",
        end: "bottom 60%",
        onToggle: (self) => {
          if (self.isActive) {
            text.classList.add("inv");
          } else {
            text.classList.remove("inv");
          }
        },
      });

      /* Animate stat counters */
      gsap.utils
        .toArray<HTMLElement>(".stat-num")
        .forEach((el) => {
          const target = Number(el.dataset.t);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 2.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => {
              el.textContent = Math.floor(obj.v).toLocaleString();
            },
          });
        });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(100px,12vw,180px)",
        paddingBottom: "clamp(100px,12vw,180px)",
      }}
    >

      {/* Ink sweep overlay */}
      <div
        ref={sweepRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ transform: "translateX(-101%)", background: "var(--ink)" }}
      />

      <div
        ref={textRef}
        className="max-w-[1400px] mx-auto px-6 md:px-10 relative"
        style={{ color: "var(--ink)", transition: "color 320ms" }}
      >
        <Eyebrow>Proof in numbers</Eyebrow>
        <h2
          className="t-display mt-8"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          A track record
          <br />
          <span
            className="t-display-serif pp"
            style={{ color: "var(--ember)" }}
          >
            written in students.
          </span>
        </h2>

        <div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 border-t"
          style={{ borderColor: "var(--ember)" }}
        >
          {STATS.map((st, i) => (
            <div key={i} className="pt-8">
              <div className="flex items-baseline gap-1 mb-5">
                <span
                  className="stat-num font-sans font-black tabular-nums"
                  data-t={st.v}
                  style={{
                    fontSize: "clamp(3rem, 8vw, 8rem)",
                    lineHeight: 0.85,
                    letterSpacing: "-0.04em",
                  }}
                >
                  0
                </span>
                <span
                  className="font-sans font-black pp"
                  style={{
                    color: "var(--ember)",
                    fontSize: "clamp(1.8rem, 4vw, 4rem)",
                  }}
                >
                  {st.s}
                </span>
              </div>
              <p className="t-eyebrow sub opacity-70">{st.k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
