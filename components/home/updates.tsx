"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SwooshLine } from "@/components/ui/swoosh-line";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const videos = [
  { id: "jOz6OvFmA-k", title: "How we got this student into Oxford", caption: "Application strategy · SOP walkthrough" },
  { id: "5qeVVl2U1XY", title: "Canada PR Pathway — the full breakdown", caption: "Visa · Study permit · PR process" },
  { id: "n1VoJQaLFG0", title: "UK Tier 4 visa — every step explained", caption: "Visa guide · Documentation · Timeline" },
];

export function Updates() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".upd-reveal", {
        y: 50, opacity: 0, stagger: 0.1, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 80%" },
      });
      gsap.from(".upd-card", {
        y: 60, opacity: 0, stagger: 0.12, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: ".upd-grid", start: "top 80%" },
      });
      gsap.from(".upd-swoosh path", {
        strokeDashoffset: 1400, duration: 2.4, ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 70%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ paddingTop: "clamp(96px,12vw,192px)", paddingBottom: "clamp(96px,12vw,192px)" }}
    >
      <div
        aria-hidden
        className="upd-swoosh absolute -top-10 -right-10 w-[500px] opacity-[0.1] pointer-events-none"
      >
        <SwooshLine variant="wave" color="var(--ember)" strokeWidth={2} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-12 bg-ember" aria-hidden />
          <span className="upd-reveal text-eyebrow text-ember">Latest updates</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="upd-reveal font-sans font-black text-ink leading-[0.88] tracking-[-0.035em] uppercase max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Study abroad,
            <br />
            <em className="font-serif italic text-ember">explained.</em>
          </h2>
          <a
            href="https://www.youtube.com/@aimbritz"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="YouTube"
            className="upd-reveal inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-ember transition-colors uppercase tracking-[0.08em]"
          >
            All on YouTube
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="upd-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div
              key={v.id}
              className="upd-card relative overflow-hidden border border-hairline bg-paper-3 group"
            >
              {/* Corner brackets */}
              <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-ember z-10" />
              <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-ember z-10" />

              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <span className="font-mono text-[10px] text-ember tracking-[0.2em] uppercase block mb-3">
                  {String(i + 1).padStart(2, "0")} — Video update
                </span>
                <h3 className="font-sans font-black uppercase tracking-[-0.02em] text-ink text-lg leading-tight mb-2">
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
