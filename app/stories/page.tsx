"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  STORIES,
  STORY_COUNTRIES,
  STORY_DESTINATIONS,
  STORY_REELS,
  type Story,
} from "@/lib/data/stories";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Light theme — matches the nav / homepage */
const C = {
  bg: "#fcfcfa",
  bg2: "#f2f2ef",
  card: "#ffffff",
  ink: "#0a0a0a",
  muted: "rgba(10,10,10,0.62)",
  faint: "rgba(10,10,10,0.42)",
  line: "rgba(10,10,10,0.1)",
};

/* ── Count-up (fires once in view, respects reduced motion) ── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / 1600, 1);
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setV(Math.round(eased * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

export default function StoriesPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Story | null>(null);

  const featured = STORIES.filter((s) => s.featured);
  const filtered = filter === "All" ? STORIES : STORIES.filter((s) => s.country === filter);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".st-rev").forEach((el) => {
        gsap.from(el, {
          y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
      // spotlights slide in from their side
      gsap.utils.toArray<HTMLElement>(".st-spot").forEach((el, i) => {
        gsap.from(el, {
          x: i % 2 === 0 ? -40 : 40, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".st-card");
    gsap.fromTo(cards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out" });
  }, [filter]);

  const maxDest = Math.max(...STORY_DESTINATIONS.map((d) => d.count));

  return (
    <div ref={rootRef} style={{ background: C.bg, color: C.ink }}>
      {/* ── Hero ── */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-[1200px] mx-auto">
          <p className="st-rev font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: C.faint }}>
            Success stories / Since 2018
          </p>
          <h1 className="st-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.95]" style={{ fontSize: "clamp(2.4rem, 8vw, 6.5rem)" }}>
            Real students.
            <br />
            <span style={{ color: C.faint }}>Real journeys.</span>
          </h1>
        </div>
      </section>

      {/* ── Stories strip — Facebook-style rectangular story cards ── */}
      <section className="px-5 md:px-8 py-10 md:py-14 border-y overflow-hidden" style={{ background: C.bg2, borderColor: C.line }}>
        <div className="max-w-[1200px] mx-auto">
          {/* header row */}
          <div className="st-rev flex items-center justify-between gap-4 mb-6 md:mb-8">
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-bold">
              Stories &middot; @aimbritz
            </span>
            <a href="https://www.instagram.com/aimbritz" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.2em] uppercase pb-0.5 border-b" style={{ borderColor: C.ink }}>
              See all &rarr;
            </a>
          </div>

          {/* rectangular story cards (bigger, FB-style) */}
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
            {STORY_REELS.map((r, i) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="st-rev group relative flex-none overflow-hidden rounded-xl"
                style={{ width: "min(40vw, 150px)", aspectRatio: "9/14", background: C.card }}
              >
                <img src={r.thumb} alt={`Story ${i + 1}`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* avatar ring top-left (FB story marker) */}
                <span
                  className="absolute top-2.5 left-2.5 w-9 h-9 rounded-full p-[2px]"
                  style={{ background: C.bg }}
                >
                  <span className="block w-full h-full rounded-full overflow-hidden" style={{ border: `2px solid ${C.ink}` }}>
                    <img src={r.thumb} alt="" className="w-full h-full object-cover" />
                  </span>
                </span>
                {/* gradient + label */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 45%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="font-sans font-bold leading-tight" style={{ fontSize: "12px", color: "#fff" }}>
                    Story {i + 1}
                  </p>
                </div>
                {/* play glyph */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.22)", backdropFilter: "blur(6px)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transformation spotlights ── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <p className="st-rev font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: C.faint }}>
            The transformation
          </p>
          <h2 className="st-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.95] mb-12 md:mb-16" style={{ fontSize: "clamp(1.8rem, 5vw, 3.6rem)" }}>
            Where they started.
            <br />
            <span style={{ color: C.faint }}>Where they are now.</span>
          </h2>

          <div className="flex flex-col gap-14 md:gap-24">
            {featured.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={s.id} className={`st-spot grid md:grid-cols-2 gap-6 md:gap-12 items-center ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* photo */}
                  <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3", background: C.bg2 }}>
                    <img src={s.photo} alt={s.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top" />
                  </div>
                  {/* story */}
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: C.faint }}>
                      {s.name} · {s.country}
                    </p>
                    <blockquote className="font-serif italic leading-snug" style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}>
                      &ldquo;{s.quote}&rdquo;
                    </blockquote>
                    <p className="mt-5 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {s.journey}
                    </p>
                    {/* before → after bar */}
                    <div className="mt-7 flex items-stretch gap-3">
                      <div className="flex-1 rounded-xl p-4" style={{ background: C.bg2, border: `1px solid ${C.line}` }}>
                        <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: C.faint }}>Before</p>
                        <p className="text-[14px] font-bold leading-tight">{s.before}</p>
                      </div>
                      <div className="flex items-center font-sans font-black text-xl" style={{ color: C.ink }}>→</div>
                      <div className="flex-1 rounded-xl p-4" style={{ background: C.ink, color: C.bg }}>
                        <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "rgba(252,252,250,0.5)" }}>After</p>
                        <p className="text-[14px] font-bold leading-tight">{s.after}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-[13px]" style={{ color: C.faint }}>{s.course} · {s.uni}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Destinations proof ── */}
      <section className="px-5 md:px-8 py-16 md:py-24 border-t" style={{ background: C.bg2, borderColor: C.line }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="st-rev font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: C.faint }}>
            Where they went
          </p>
          <h2 className="st-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.95] mb-10 md:mb-14" style={{ fontSize: "clamp(1.8rem, 5vw, 3.6rem)" }}>
            5,012 students.
            <br />
            <span style={{ color: C.faint }}>14 countries.</span>
          </h2>
          <div className="flex flex-col gap-4">
            {STORY_DESTINATIONS.map((d) => (
              <div key={d.country} className="st-rev flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase w-32 md:w-44 shrink-0">{d.country}</span>
                <div className="flex-1 h-7 md:h-9 rounded-full overflow-hidden" style={{ background: "rgba(10,10,10,0.06)" }}>
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-3"
                    style={{ width: `${Math.max(18, (d.count / maxDest) * 100)}%`, background: C.ink }}
                  >
                    <span className="font-mono text-[10px] md:text-[11px] font-bold tabular-nums" style={{ color: C.bg }}>
                      <CountUp to={d.count} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reels video strip ── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="st-rev flex items-end justify-between gap-4 mb-8 md:mb-10">
            <div>
              <p className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: C.faint }}>
                In their own words
              </p>
              <h2 className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.95]" style={{ fontSize: "clamp(1.8rem, 5vw, 3.6rem)" }}>
                Watch the reels.
              </h2>
            </div>
            <a href="https://www.instagram.com/aimbritz" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.2em] uppercase pb-1 border-b" style={{ borderColor: C.ink }}>
              @aimbritz →
            </a>
          </div>
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-3 -mx-1 px-1 items-center" style={{ scrollbarWidth: "none" }}>
            {STORY_REELS.map((r, i) => {
              // staggered heights for an authentic IG-feed rhythm
              const tall = i % 3 === 1;
              return (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="st-rev group relative flex-none overflow-hidden rounded-2xl"
                  style={{
                    width: tall ? "min(62vw, 240px)" : "min(54vw, 200px)",
                    aspectRatio: "9/16",
                    background: C.bg2,
                  }}
                >
                  <img src={r.thumb} alt={`AimBritz reel ${i + 1}`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent 45%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.22)", backdropFilter: "blur(6px)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                  {/* IG handle footer */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full" style={{ background: "linear-gradient(45deg,#f09433,#dc2743,#bc1888)" }} />
                    <span className="font-mono text-[8px] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.85)" }}>@aimbritz</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photo wall (closer) ── */}
      <section className="px-5 md:px-8 pb-16 md:pb-24 border-t pt-16 md:pt-24" style={{ borderColor: C.line }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="st-rev font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: C.faint }}>
            ...and many more
          </p>
          <h2 className="st-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.95] mb-8 md:mb-10" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}>
            Every face, a placement.
          </h2>

          {/* filter chips */}
          <div className="flex gap-2 overflow-x-auto pb-4 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
            {["All", ...STORY_COUNTRIES].map((c) => {
              const on = filter === c;
              return (
                <button key={c} onClick={() => setFilter(c)} className="flex-none rounded-full px-4 py-2 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors"
                  style={{ background: on ? C.ink : "transparent", color: on ? C.bg : C.muted, border: `1px solid ${on ? C.ink : C.line}` }}>
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((s) => (
              <button key={s.id} onClick={() => setActive(s)} className="st-card group relative overflow-hidden rounded-2xl text-left" style={{ background: C.bg2, aspectRatio: "3/4" }}>
                <img src={s.photo} alt={s.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,12,0.9) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="font-sans font-black uppercase tracking-[-0.01em] leading-tight" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", color: "#F6F2EA" }}>{s.name}</h3>
                  <p className="font-mono text-[9px] tracking-[0.1em] mt-1" style={{ color: "rgba(246,242,234,0.6)" }}>{s.uni}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 md:px-8 py-16 md:py-24 border-t" style={{ borderColor: C.line, background: C.bg2 }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.95]" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            Your story is next.
          </h2>
          <p className="mt-6 max-w-md mx-auto text-[15px] leading-relaxed" style={{ color: C.muted }}>
            Book a free 30-minute session and get a shortlist of five universities matched to your profile.
          </p>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 text-[13px] font-semibold transition-transform hover:scale-[1.04]" style={{ background: C.ink, color: C.bg }}>
            Book free session
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
          </Link>
        </div>
      </section>

      {/* ── Story detail modal / bottom sheet ── */}
      {active && (
        <div className="fixed inset-0 z-[80] flex md:items-center justify-center" onClick={() => setActive(null)}>
          <div className="absolute inset-0" style={{ background: "rgba(8,8,10,0.55)", backdropFilter: "blur(6px)" }} />
          <div className="relative w-full md:max-w-[760px] md:mx-6 mt-auto md:mt-0 max-h-[92vh] md:max-h-[88vh] overflow-y-auto rounded-t-3xl md:rounded-3xl animate-[storyup_0.4s_cubic-bezier(0.22,1,0.36,1)]"
            style={{ background: C.card, border: `1px solid ${C.line}` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-xl" style={{ background: "rgba(0,0,0,0.5)", color: "#F6F2EA" }} aria-label="Close">×</button>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
                <img src={active.photo} alt={active.name} className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: C.faint }}>{active.country} · {active.year}</p>
                <h3 className="font-sans font-black uppercase tracking-[-0.02em] leading-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>{active.name}</h3>
                <p className="mt-1 text-[14px]" style={{ color: C.muted }}>{active.course} · {active.uni}</p>
                <blockquote className="mt-6 font-serif italic leading-snug" style={{ fontSize: "clamp(1.1rem, 2.4vw, 1.5rem)" }}>&ldquo;{active.quote}&rdquo;</blockquote>
                <p className="mt-6 text-[14px] leading-relaxed" style={{ color: C.muted }}>{active.journey}</p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="flex-1 rounded-xl p-3" style={{ background: C.bg2 }}>
                    <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-1" style={{ color: C.faint }}>Before</p>
                    <p className="text-[13px] font-semibold">{active.before}</p>
                  </div>
                  <span style={{ color: C.faint }}>→</span>
                  <div className="flex-1 rounded-xl p-3" style={{ background: C.ink, color: C.bg }}>
                    <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(252,252,250,0.5)" }}>After</p>
                    <p className="text-[13px] font-semibold">{active.after}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes storyup { from { transform: translateY(40px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }`}</style>
    </div>
  );
}
