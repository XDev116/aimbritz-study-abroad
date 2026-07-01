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
      <section className="relative overflow-hidden flex flex-col justify-end px-5 md:px-8 pt-24 md:pt-0" style={{ background: "#0E0E10", minHeight: "clamp(420px,55vw,560px)" }}>
        {/* Background — students walking on campus */}
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80" alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ filter: "grayscale(0.3) contrast(1.1)", opacity: 0.45 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(14,14,16,0.82) 0%, rgba(14,14,16,0.4) 55%, rgba(14,14,16,0.75) 100%)" }} />
        <div className="relative max-w-[1200px] mx-auto w-full pb-10 md:pb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="st-rev font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.4)" }}>
              Success stories · Since 2018
            </p>
            <h1 className="st-rev font-sans font-black uppercase tracking-[-0.04em] leading-[0.88]" style={{ fontSize: "clamp(2.8rem,7vw,6.5rem)", color: "#F6F2EA" }}>
              Real students.
              <br />
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>Real journeys.</span>
            </h1>
          </div>
          <p className="st-rev font-mono text-[11px] leading-relaxed max-w-[220px] pb-1" style={{ color: "rgba(246,242,234,0.4)" }}>
            Stories of students who took the leap — and landed exactly where they dreamed.
          </p>
        </div>
      </section>

      {/* ── Transformation spotlights ── */}
      <section className="px-5 md:px-8 pt-6 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-10 md:gap-24">
            {featured.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={s.id} className={`st-spot grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-center ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* photo */}
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10", background: C.bg2 }}>
                    {s.photo && (
                      <img src={s.photo} alt={s.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: s.photoPosition || "top", transform: s.photoScale ? `scale(${s.photoScale})` : undefined }} />
                    )}
                  </div>
                  {/* story */}
                  <div>
                    <p className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase mb-2 md:mb-3" style={{ color: C.faint }}>
                      {s.name} · {s.country}
                    </p>
                    <blockquote className="font-serif italic leading-snug" style={{ fontSize: "clamp(1.1rem, 3vw, 2rem)" }}>
                      &ldquo;{s.quote}&rdquo;
                    </blockquote>
                    <p className="mt-3 md:mt-5 text-[13px] md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {s.journey}
                    </p>
                    {/* before → after bar */}
                    <div className="mt-5 md:mt-7 flex items-stretch gap-2 md:gap-3">
                      <div className="flex-1 rounded-lg md:rounded-xl p-3 md:p-4" style={{ background: C.bg2, border: `1px solid ${C.line}` }}>
                        <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] uppercase mb-1" style={{ color: C.faint }}>Before</p>
                        <p className="text-[12px] md:text-[14px] font-bold leading-tight">{s.before}</p>
                      </div>
                      <div className="flex items-center font-sans font-black text-base md:text-xl" style={{ color: C.ink }}>→</div>
                      <div className="flex-1 rounded-lg md:rounded-xl p-3 md:p-4" style={{ background: C.ink, color: C.bg }}>
                        <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(252,252,250,0.5)" }}>After</p>
                        <p className="text-[12px] md:text-[14px] font-bold leading-tight">{s.after}</p>
                      </div>
                    </div>
                    <p className="mt-3 md:mt-4 text-[12px] md:text-[13px]" style={{ color: C.faint }}>{s.course} · {s.uni}</p>
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
          <div className="flex flex-col gap-3 md:gap-4">
            {STORY_DESTINATIONS.map((d) => (
              <div key={d.country} className="st-rev flex items-center gap-2.5 md:gap-4">
                <span className="font-mono text-[9px] md:text-[11px] tracking-[0.12em] uppercase w-24 md:w-44 shrink-0 truncate">{d.country}</span>
                <div className="flex-1 h-6 md:h-9 rounded-full overflow-hidden" style={{ background: "rgba(10,10,10,0.06)" }}>
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2 md:pr-3"
                    style={{ width: `${Math.max(22, (d.count / maxDest) * 100)}%`, background: C.ink }}
                  >
                    <span className="font-mono text-[9px] md:text-[11px] font-bold tabular-nums" style={{ color: C.bg }}>
                      <CountUp to={d.count} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
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

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4">
            {filtered.map((s) => (
              <button key={s.id} onClick={() => setActive(s)} className="st-card group relative overflow-hidden rounded-xl md:rounded-2xl text-left" style={{ background: C.bg2, aspectRatio: "3/4" }}>
                {s.photo && (
                  <img src={s.photo} alt={s.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]" />
                )}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,12,0.9) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-4">
                  <h3 className="font-sans font-black uppercase tracking-[-0.01em] leading-tight text-[13px] md:text-[clamp(0.9rem,1.4vw,1.1rem)]" style={{ color: "#F6F2EA" }}>{s.name}</h3>
                  <p className="font-mono text-[8px] md:text-[9px] tracking-[0.1em] mt-0.5 md:mt-1" style={{ color: "rgba(246,242,234,0.6)" }}>{s.uni}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div
          className="relative overflow-hidden flex flex-col md:flex-row items-start md:items-end justify-between gap-8 p-10 md:p-16"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{ filter: "grayscale(0.4) contrast(1.1)", opacity: 0.25 }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(248,244,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,244,235,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--ember)" }}>Get started — it&apos;s free</p>
            <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]" style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>
              Ready to begin<br />
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>your journey?</span>
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed max-w-md" style={{ color: "rgba(246,242,234,0.5)" }}>
              One free call. A plan built around you. No pressure, no obligation.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-80" style={{ background: "var(--ember)", color: "var(--ink)", fontSize: "0.85rem" }}>
              Free consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
            </Link>
            <a href="tel:+919747277233" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase px-7 py-4 transition-opacity hover:opacity-70" style={{ border: "1px solid rgba(246,242,234,0.2)", color: "rgba(246,242,234,0.7)" }}>
              Call us now
            </a>
          </div>
        </div>
      </section>

      {/* ── Story detail modal / bottom sheet ── */}
      {active && (
        <div className="fixed inset-0 z-[80] flex md:items-center justify-center" onClick={() => setActive(null)}>
          <div className="absolute inset-0" style={{ background: "rgba(8,8,10,0.55)", backdropFilter: "blur(6px)" }} />
          <div className="relative w-full md:max-w-[760px] md:mx-6 mt-auto md:mt-0 max-h-[85vh] md:max-h-[88vh] overflow-y-auto rounded-t-2xl md:rounded-3xl animate-[storyup_0.4s_cubic-bezier(0.22,1,0.36,1)]"
            style={{ background: C.card, border: `1px solid ${C.line}` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-lg md:text-xl" style={{ background: "rgba(0,0,0,0.5)", color: "#F6F2EA" }} aria-label="Close">×</button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {active.photo && (
                <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden rounded-t-2xl md:rounded-none">
                  <img src={active.photo} alt={active.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: active.photoPosition || "top" }} />
                </div>
              )}
              <div className="p-5 md:p-8">
                <p className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase mb-2 md:mb-3" style={{ color: C.faint }}>{active.country} · {active.year}</p>
                <h3 className="font-sans font-black uppercase tracking-[-0.02em] leading-tight" style={{ fontSize: "clamp(1.3rem, 4vw, 2.2rem)" }}>{active.name}</h3>
                <p className="mt-1 text-[13px] md:text-[14px]" style={{ color: C.muted }}>{active.course} · {active.uni}</p>
                <blockquote className="mt-4 md:mt-6 font-serif italic leading-snug" style={{ fontSize: "clamp(1rem, 2.4vw, 1.5rem)" }}>&ldquo;{active.quote}&rdquo;</blockquote>
                <p className="mt-4 md:mt-6 text-[13px] md:text-[14px] leading-relaxed" style={{ color: C.muted }}>{active.journey}</p>
                <div className="mt-5 md:mt-7 flex items-center gap-2 md:gap-3">
                  <div className="flex-1 rounded-lg md:rounded-xl p-2.5 md:p-3" style={{ background: C.bg2 }}>
                    <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] uppercase mb-0.5 md:mb-1" style={{ color: C.faint }}>Before</p>
                    <p className="text-[12px] md:text-[13px] font-semibold">{active.before}</p>
                  </div>
                  <span className="text-sm" style={{ color: C.faint }}>→</span>
                  <div className="flex-1 rounded-lg md:rounded-xl p-2.5 md:p-3" style={{ background: C.ink, color: C.bg }}>
                    <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] uppercase mb-0.5 md:mb-1" style={{ color: "rgba(252,252,250,0.5)" }}>After</p>
                    <p className="text-[12px] md:text-[13px] font-semibold">{active.after}</p>
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
