"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RotatingBadge } from "@/components/ui/rotating-badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Advisor tips data ──────────────────────────────────────────────── */
const tips = [
  "Apply early \u2014 top programs close months before deadlines.",
  "Your SOP should answer: why you, why now, why here.",
  "A 7.5 IELTS opens doors a 7.0 doesn\u2019t. Worth the extra month.",
  "Gap years aren\u2019t gaps \u2014 tell that story confidently.",
  "Research funding exists at every level. Ask us.",
];

/* ── Component ──────────────────────────────────────────────────────── */
export function CeoModule() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".ceo-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      });

      gsap.from(".ceo-photo", {
        scale: 1.08,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 70%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ceo"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-center">
        {/* Left column -- text + tips */}
        <div className="col-span-12 lg:col-span-7">
          <p className="ceo-reveal t-eyebrow text-ember mb-8">Meet your guide</p>

          <h2
            className="ceo-reveal t-display mt-8"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}
          >
            <span
              className="t-display-serif"
              style={{ color: "var(--ember)" }}
            >
              Your advisor
            </span>
            <br />
            answers on the
            <br />
            first ring.
          </h2>

          <p className="ceo-reveal mt-8 max-w-md text-[17px] text-ink-2 leading-relaxed">
            Al Ameen, founder &amp; CEO &mdash; former student abroad, now
            guiding 5,000+ students to the world&apos;s best universities.
            Every file gets his personal sign-off.
          </p>

          {/* Advisor tips box with corner brackets */}
          <div
            className="ceo-reveal mt-10 relative p-7"
            style={{
              background: "var(--paper-3)",
              border: "1px solid var(--hairline)",
            }}
          >
            {/* Corner brackets */}
            <span
              className="absolute -top-px -left-px w-5 h-5"
              style={{
                borderTop: "2px solid var(--ember)",
                borderLeft: "2px solid var(--ember)",
              }}
            />
            <span
              className="absolute -top-px -right-px w-5 h-5"
              style={{
                borderTop: "2px solid var(--ember)",
                borderRight: "2px solid var(--ember)",
              }}
            />
            <span
              className="absolute -bottom-px -left-px w-5 h-5"
              style={{
                borderBottom: "2px solid var(--ember)",
                borderLeft: "2px solid var(--ember)",
              }}
            />
            <span
              className="absolute -bottom-px -right-px w-5 h-5"
              style={{
                borderBottom: "2px solid var(--ember)",
                borderRight: "2px solid var(--ember)",
              }}
            />

            <p className="t-eyebrow mb-5" style={{ color: "var(--ember)" }}>
              Advisor tips
            </p>
            <div className="space-y-4">
              {tips.map((tip, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-[11px] text-ink-3 mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] text-ink-2 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column -- static photo portrait */}
        <div className="col-span-12 lg:col-span-5 flex justify-center">
          <div
            className="ceo-photo relative w-[320px] md:w-[380px] aspect-[3/4] overflow-hidden"
            style={{
              background: "var(--paper-3)",
              border: "1px solid var(--hairline)",
            }}
          >
            <img
              src="/images/team/alameen.png"
              alt="Al Ameen, Founder & CEO"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Bottom gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 45%, rgba(17,17,19,0.8))",
              }}
            />

            {/* Bottom info */}
            <div
              className="absolute bottom-4 left-4 right-4"
              style={{ color: "var(--paper)" }}
            >
              <p className="t-eyebrow" style={{ color: "var(--ember)" }}>
                Founder &middot; CEO
              </p>
              <p className="font-sans font-black text-[24px] uppercase mt-1 tracking-[-0.02em]">
                Al Ameen
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70 mt-0.5">
                AB / ADVISOR / SINCE 2018
              </p>
            </div>

            {/* Rotating circular badge */}
            <div className="absolute top-4 right-4 z-10">
              <RotatingBadge
                text="AIMBRITZ \u00b7 ADVISOR \u00b7 SINCE 2018 \u00b7 "
                size={90}
                fontSize={8.5}
                color="var(--paper)"
                center={
                  <span className="font-serif italic font-black text-lg text-paper">
                    ab.
                  </span>
                }
                className="bg-ember rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
