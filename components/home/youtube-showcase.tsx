"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CHANNEL_URL = "https://www.youtube.com/@AimbritzStudyAbroad";

const VIDEOS = [
  {
    id: "jOz6OvFmA-k",
    title: "How we got this student into Oxford",
    label: "Success Story",
  },
  {
    id: "5qeVVl2U1XY",
    title: "Canada PR Pathway — the full breakdown",
    label: "Visa Guide",
  },
  {
    id: "n1VoJQaLFG0",
    title: "UK Tier 4 visa — every step explained",
    label: "Explainer",
  },
];

function VideoCard({ video, index }: { video: typeof VIDEOS[0]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="yt-card flex flex-col gap-4">
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/9", background: "#1a1a1a" }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transition: "transform 700ms ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.6) 100%)" }}
            />
            {/* Play */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label={`Play: ${video.title}`}
            >
              <div
                className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                style={{
                  width: 56,
                  height: 56,
                  background: "rgba(255,255,255,0.16)",
                  backdropFilter: "blur(8px)",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
            {/* Label */}
            <div className="absolute top-3 left-3">
              <span
                className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold px-2 py-0.5"
                style={{ background: "#FF0000", color: "#fff" }}
              >
                {video.label}
              </span>
            </div>
            {/* Index */}
            <div className="absolute top-3 right-3">
              <span
                className="font-mono text-[9px] tracking-[0.22em] font-bold px-2 py-0.5"
                style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.6)", backdropFilter: "blur(4px)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            {/* Channel watermark */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="#FF0000"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
              </svg>
              <span className="font-mono text-[8px] tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                @AimbritzStudyAbroad
              </span>
            </div>
          </>
        )}
      </div>

      {/* Title */}
      <p
        className="font-sans font-bold leading-snug"
        style={{ fontSize: "13px", color: "rgba(252,252,250,0.65)" }}
      >
        {video.title}
      </p>
    </div>
  );
}

export function YoutubeShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".yt-head", {
        y: 28, opacity: 0, stagger: 0.09, duration: 0.9, ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
      });
      gsap.from(".yt-card", {
        y: 48, opacity: 0, stagger: 0.11, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: ".yt-grid", start: "top 84%", once: true },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0e0e10",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="yt-head flex items-center gap-3 mb-4">
              <span className="inline-block h-px w-8" style={{ background: "#FF0000" }} />
              <span
                className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold"
                style={{ color: "#FF0000" }}
              >
                YouTube
              </span>
            </div>
            <h2
              className="yt-head font-sans font-black uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", color: "#fcfcfa" }}
            >
              Watch us<br />
              <span className="font-serif italic" style={{ color: "rgba(252,252,250,0.3)" }}>in action</span>
            </h2>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-head inline-flex items-center gap-2.5 self-start md:self-auto shrink-0 transition-opacity hover:opacity-70"
            style={{
              border: "1px solid rgba(252,252,250,0.15)",
              color: "rgba(252,252,250,0.6)",
              padding: "10px 20px",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="#FF0000"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
            </svg>
            Watch more on YouTube →
          </a>
        </div>

        {/* Videos grid */}
        <div className="yt-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        {/* Bottom strip */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(252,252,250,0.07)" }}
        >
          <p
            className="font-mono text-[9px] tracking-[0.22em] uppercase text-center sm:text-left"
            style={{ color: "rgba(252,252,250,0.22)" }}
          >
            Student journeys · Campus tours · Visa guides · Alumni talks
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60 flex items-center gap-1.5"
            style={{ color: "rgba(252,252,250,0.3)" }}
          >
            @AimbritzStudyAbroad →
          </a>
        </div>
      </div>
    </section>
  );
}