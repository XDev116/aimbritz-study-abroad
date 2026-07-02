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
    id: "mlVAGx7jus8",
    title: "How we got this student into Oxford",
    label: "Success Story",
    duration: "8:24",
    featured: true,
  },
  {
    id: "5qeVVl2U1XY",
    title: "Canada PR Pathway — the full breakdown",
    label: "Visa Guide",
    duration: "12:07",
    featured: false,
  },
  {
    id: "n1VoJQaLFG0",
    title: "UK Tier 4 visa — every step explained",
    label: "Explainer",
    duration: "9:51",
    featured: false,
  },
  {
    id: "DV78jozbwjA",
    title: "Study abroad on a budget — real numbers",
    label: "Finance",
    duration: "10:33",
    featured: false,
  },
];

const YT_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="#FF0000"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

function PlayBtn({ size = 56 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25"
      style={{
        width: size,
        height: size,
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(10px)",
        border: "1.5px solid rgba(255,255,255,0.3)",
        boxShadow: "0 0 0 0 rgba(255,0,0,0)",
        transition: "transform 300ms ease, background 300ms ease, box-shadow 300ms ease",
      }}
    >
      <svg width={size * 0.35} height={size * 0.35} viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function FeaturedCard({ video, index }: { video: typeof VIDEOS[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="yt-card relative flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow on hover */}
      <div
        className="absolute -inset-px pointer-events-none transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(255,0,0,0.18) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          borderRadius: 2,
        }}
      />

      <div
        className="relative overflow-hidden flex-1"
        style={{
          aspectRatio: "16/9",
          background: "#111",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: hovered
            ? "0 0 0 1px rgba(255,0,0,0.35), 0 24px 64px -16px rgba(255,0,0,0.2)"
            : "0 0 0 0px transparent",
          transition: "box-shadow 400ms ease",
        }}
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
              style={{
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)" }}
            />

            {/* Featured badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span
                className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold px-2 py-0.5"
                style={{ background: "#FF0000", color: "#fff" }}
              >
                {video.label}
              </span>
              <span
                className="font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5"
                style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.6)", backdropFilter: "blur(6px)" }}
              >
                Featured
              </span>
            </div>

            {/* Duration */}
            <div className="absolute top-4 right-4">
              <span
                className="font-mono text-[9px] tracking-[0.15em] font-bold px-2 py-0.5"
                style={{ background: "rgba(0,0,0,0.75)", color: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)" }}
              >
                {video.duration}
              </span>
            </div>

            {/* Play button — center */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label={`Play: ${video.title}`}
            >
              <PlayBtn size={72} />
            </button>

            {/* Bottom meta */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div className="flex items-center gap-2">
                {YT_ICON}
                <span className="font-mono text-[8px] tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                  @AimbritzStudyAbroad
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Title below */}
      <div className="mt-4 flex items-start gap-3">
        <span
          className="font-mono text-[9px] tracking-[0.3em] uppercase shrink-0 mt-0.5"
          style={{ color: "#FF0000" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="font-sans font-bold leading-snug" style={{ fontSize: "15px", color: "rgba(252,252,250,0.8)" }}>
          {video.title}
        </p>
      </div>
    </div>
  );
}

function SideCard({ video, index }: { video: typeof VIDEOS[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="yt-card flex gap-4 group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{
          width: 160,
          aspectRatio: "16/9",
          background: "#111",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: hovered ? "0 0 0 1px rgba(255,0,0,0.3)" : "none",
          transition: "box-shadow 300ms ease",
        }}
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
              style={{
                transform: hovered ? "scale(1.06)" : "scale(1)",
                transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)",
              }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play: ${video.title}`}
            >
              <PlayBtn size={36} />
            </button>
            {/* Duration */}
            <div className="absolute bottom-1.5 right-1.5">
              <span
                className="font-mono text-[8px] tracking-[0.1em] px-1.5 py-0.5"
                style={{ background: "rgba(0,0,0,0.8)", color: "rgba(255,255,255,0.75)" }}
              >
                {video.duration}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center gap-2 min-w-0">
        <span
          className="font-mono text-[8px] tracking-[0.22em] uppercase font-bold px-1.5 py-0.5 self-start"
          style={{ background: "#FF0000", color: "#fff" }}
        >
          {video.label}
        </span>
        <p
          className="font-sans font-bold leading-snug line-clamp-2 transition-colors duration-200"
          style={{ fontSize: "13px", color: hovered ? "rgba(252,252,250,0.9)" : "rgba(252,252,250,0.6)" }}
        >
          {video.title}
        </p>
        <div className="flex items-center gap-1.5">
          {YT_ICON}
          <span className="font-mono text-[8px] tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
            {String(index + 1).padStart(2, "0")} / {VIDEOS.length}
          </span>
        </div>
      </div>
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
        y: 44, opacity: 0, stagger: 0.13, duration: 1.1, ease: "expo.out",
        scrollTrigger: { trigger: ".yt-layout", start: "top 84%", once: true },
      });
      // Animated red line from 0 width
      gsap.from(".yt-redline", {
        scaleX: 0, duration: 1.2, ease: "expo.out", transformOrigin: "left center",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  const [featured, ...side] = VIDEOS;

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0a0a0a",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle red ambient glow top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -120,
          left: -80,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,0,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="yt-head flex items-center gap-3 mb-4">
              <span
                className="yt-redline inline-block h-px w-10"
                style={{ background: "#FF0000", display: "inline-block" }}
              />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold" style={{ color: "#FF0000" }}>
                YouTube
              </span>
            </div>
            <h2
              className="yt-head font-sans font-black uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", color: "#fcfcfa" }}
            >
              Watch us<br />
              <span className="font-serif italic" style={{ color: "rgba(252,252,250,0.28)" }}>in action</span>
            </h2>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-head group inline-flex items-center gap-2.5 self-start md:self-auto shrink-0 transition-all duration-300 hover:border-red-600"
            style={{
              border: "1px solid rgba(252,252,250,0.12)",
              color: "rgba(252,252,250,0.55)",
              padding: "10px 20px",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {YT_ICON}
            Watch more on YouTube →
          </a>
        </div>

        {/* Featured + side layout */}
        <div className="yt-layout grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 lg:gap-8 items-start">
          {/* Featured left */}
          <FeaturedCard video={featured} index={0} />

          {/* Side right — 3 cards + see more CTA */}
          <div className="flex flex-col">
            {side.map((video, i) => (
              <div key={video.id}>
                <SideCard video={video} index={i + 1} />
                <div className="my-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
              </div>
            ))}

            {/* See more CTA */}
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-5 py-4 transition-all duration-300"
              style={{
                border: "1px solid rgba(255,0,0,0.18)",
                background: "rgba(255,0,0,0.04)",
              }}
            >
              <div>
                <p className="font-mono text-[8px] tracking-[0.28em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  More videos
                </p>
                <p className="font-sans font-bold text-sm transition-colors duration-200 group-hover:text-white" style={{ color: "rgba(252,252,250,0.6)" }}>
                  See more on YouTube
                </p>
              </div>
              <div
                className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600/20"
                style={{
                  width: 38,
                  height: 38,
                  background: "rgba(255,0,0,0.1)",
                  border: "1px solid rgba(255,0,0,0.3)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,80,80,0.9)" strokeWidth="2.2">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(252,252,250,0.06)" }}
        >
          <p
            className="font-mono text-[9px] tracking-[0.22em] uppercase text-center sm:text-left"
            style={{ color: "rgba(252,252,250,0.18)" }}
          >
            Student journeys · Campus tours · Visa guides · Alumni talks
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60 flex items-center gap-1.5"
            style={{ color: "rgba(252,252,250,0.28)" }}
          >
            @AimbritzStudyAbroad →
          </a>
        </div>
      </div>
    </section>
  );
}