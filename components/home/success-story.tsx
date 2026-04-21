/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/*  Inline story chapter data                                         */
/* ------------------------------------------------------------------ */
interface StoryChapter {
  tag: string;
  title: string;
  copy: string;
  ts: number;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    tag: "CH.01",
    title: "The dream",
    copy: "Priya, 21, from Kochi. Top of her BTech class, but no family abroad, no map.",
    ts: 0.0,
  },
  {
    tag: "CH.02",
    title: "The fit",
    copy: "We ran 14 profile matches across 4 countries. Oxford MSc CS came up strongest.",
    ts: 0.22,
  },
  {
    tag: "CH.03",
    title: "The craft",
    copy: "31 drafts of her SOP. A new LOR. IELTS 8.0. Portfolio rebuilt in 3 weeks.",
    ts: 0.48,
  },
  {
    tag: "CH.04",
    title: "The answer",
    copy: "October 14th, 2:07 PM. A single line: 'We are delighted to offer you a place.'",
    ts: 0.7,
  },
  {
    tag: "CH.05",
    title: "The departure",
    copy: "Heathrow, September '25. First in her family to study abroad.",
    ts: 0.92,
  },
];

/* ------------------------------------------------------------------ */
/*  Frame images (external unsplash)                                  */
/* ------------------------------------------------------------------ */
const FRAMES = [
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80",
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
];

/* ------------------------------------------------------------------ */
/*  SuccessStory                                                      */
/* ------------------------------------------------------------------ */
export function SuccessStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=400%",
        pin: track,
        scrub: 0.6,
        onUpdate: (self) => setProgress(self.progress),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const activeIdx = Math.min(
    STORY_CHAPTERS.length - 1,
    Math.floor(progress * STORY_CHAPTERS.length),
  );

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative"
      style={{ background: "transparent", height: "500vh" }}
    >
      <div
        ref={trackRef}
        className="h-screen w-full overflow-hidden relative"
      >

        {/* Cross-fading frame stack */}
        <div className="absolute inset-0">
          {FRAMES.map((src, i) => {
            const local = progress * FRAMES.length - i;
            const op = Math.max(
              0,
              Math.min(1, 1 - Math.abs(local - 0.5) * 1.6),
            );
            const scale =
              1 + Math.max(0, 0.08 - Math.abs(local - 0.5) * 0.08);
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  opacity: op,
                  transform: `scale(${scale})`,
                  transition: "opacity 240ms linear",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(17,17,19,0.55) 0%, rgba(17,17,19,0.2) 35%, rgba(17,17,19,0.75) 100%)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Overlay content */}
        <div
          className="relative z-10 h-full flex flex-col px-6 md:px-14 py-12"
          style={{ color: "var(--paper)" }}
        >
          {/* Top bar */}
          <div className="flex items-start justify-between">
            <div>
              <span
                className="t-eyebrow"
                style={{ color: "var(--ember)" }}
              >
                The Story &middot; Priya Nair &middot; Kochi &rarr; Oxford
              </span>
              <h2
                className="t-display mt-5"
                style={{
                  fontSize: "clamp(2.4rem, 6.5vw, 6.5rem)",
                  color: "var(--paper)",
                }}
              >
                A year,
                <br />
                in five frames.
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">
                Chapter
              </span>
              <p
                className="font-sans font-black text-5xl tabular-nums mt-1"
                style={{ color: "var(--ember)" }}
              >
                {String(activeIdx + 1).padStart(2, "0")}
                <span className="opacity-50 text-2xl">
                  /{String(STORY_CHAPTERS.length).padStart(2, "0")}
                </span>
              </p>
            </div>
          </div>

          {/* Current chapter card -- bottom left */}
          <div className="mt-auto max-w-xl">
            <div
              className="p-6 md:p-8 relative"
              style={{
                background: "rgba(248,244,235,0.96)",
                color: "var(--ink)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span
                className="absolute -top-px -left-px w-4 h-4"
                style={{
                  borderTop: "2px solid var(--ember)",
                  borderLeft: "2px solid var(--ember)",
                }}
              />
              <span
                className="absolute -top-px -right-px w-4 h-4"
                style={{
                  borderTop: "2px solid var(--ember)",
                  borderRight: "2px solid var(--ember)",
                }}
              />
              <span
                className="absolute -bottom-px -left-px w-4 h-4"
                style={{
                  borderBottom: "2px solid var(--ember)",
                  borderLeft: "2px solid var(--ember)",
                }}
              />
              <span
                className="absolute -bottom-px -right-px w-4 h-4"
                style={{
                  borderBottom: "2px solid var(--ember)",
                  borderRight: "2px solid var(--ember)",
                }}
              />

              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-ember">
                  {STORY_CHAPTERS[activeIdx].tag}
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-ink-3">
                  TS {Math.round(progress * 100)}%
                </span>
              </div>
              <h3
                className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                }}
              >
                {STORY_CHAPTERS[activeIdx].title}
              </h3>
              <p className="mt-4 text-[15px] text-ink-2 leading-relaxed">
                {STORY_CHAPTERS[activeIdx].copy}
              </p>
            </div>

            {/* Chapter stepper */}
            <div className="mt-5 flex items-center gap-1.5">
              {STORY_CHAPTERS.map((c, i) => (
                <div
                  key={c.tag}
                  className="flex-1 h-[3px] relative overflow-hidden"
                  style={{ background: "rgba(248,244,235,0.25)" }}
                >
                  <div
                    className="absolute inset-y-0 left-0"
                    style={{
                      background: "var(--ember)",
                      width:
                        i < activeIdx
                          ? "100%"
                          : i === activeIdx
                            ? `${(progress * STORY_CHAPTERS.length - i) * 100}%`
                            : "0%",
                      transition: "width 100ms linear",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-5 right-8 font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">
            &darr; Keep scrolling -- the film scrubs
          </div>
        </div>
      </div>
    </section>
  );
}
