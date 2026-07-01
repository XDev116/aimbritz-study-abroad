"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Data ─────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "counseling",
    num: "01",
    title: "Career Counseling",
    desc: "Expert one-on-one guidance to identify your strengths, interests, and ideal career path for studying abroad.",
    features: ["Personalized profile assessment", "Career aptitude testing", "Course & specialization match", "Country selection by career goal", "Industry trend analysis"],
    size: "large",
    img: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="10" r="5" className="svc-path" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" className="svc-path" />
        <path d="M22 14l2 2 4-4" className="svc-path" />
      </svg>
    ),
  },
  {
    id: "university",
    num: "02",
    title: "University Selection",
    desc: "Strategic shortlisting of 6–10 universities matched to your academic profile, budget, and ambitions.",
    features: ["Full university database access", "Ranking & reputation analysis", "Scholarship identification", "Cost-benefit comparison"],
    size: "small",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14L16 6l12 8" className="svc-path" />
        <path d="M8 14v10h16V14" className="svc-path" />
        <rect x="12" y="18" width="8" height="6" className="svc-path" />
      </svg>
    ),
  },
  {
    id: "application",
    num: "03",
    title: "Application Assistance",
    desc: "End-to-end application support — SOP, LOR, CV, forms — ensuring every detail is perfect.",
    features: ["SOP writing & editing", "LOR guidance", "CV optimization", "Form completion & tracking"],
    size: "small",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="24" rx="2" className="svc-path" />
        <path d="M10 10h12M10 15h12M10 20h8" className="svc-path" />
        <path d="M20 22l2 2 4-4" className="svc-path" />
      </svg>
    ),
  },
  {
    id: "visa",
    num: "04",
    title: "Visa Assistance",
    desc: "Complete visa processing support with industry-leading success rates across all partner countries.",
    features: ["Eligibility assessment", "Document preparation", "Interview mock sessions", "Post-visa landing guide"],
    size: "medium",
    img: "https://images.unsplash.com/photo-1569400243898-ae07d97ef0d4?w=1200&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="24" height="16" rx="2" className="svc-path" />
        <path d="M4 13h24" className="svc-path" />
        <path d="M9 18h4M9 21h2" className="svc-path" />
        <circle cx="23" cy="19" r="3" className="svc-path" />
      </svg>
    ),
  },
  {
    id: "scholarship",
    num: "05",
    title: "Scholarship Guidance",
    desc: "Maximize your financial aid chances with targeted scholarship strategy and application support.",
    features: ["Scholarship search & match", "Eligibility check", "Essay & document review", "Deadline management"],
    size: "small",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" className="svc-path" />
      </svg>
    ),
  },
  {
    id: "test",
    num: "06",
    title: "Test Preparation",
    desc: "IELTS, TOEFL, GRE, GMAT, SAT — expert trainers, flexible schedules, high scores guaranteed.",
    features: ["Diagnostic tests & analysis", "Customized study plans", "Mock exams & feedback", "Online & offline classes"],
    size: "small",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26V10l10-6 10 6v16" className="svc-path" />
        <path d="M12 26v-8h8v8" className="svc-path" />
        <circle cx="16" cy="14" r="2" className="svc-path" />
      </svg>
    ),
  },
  {
    id: "predeparture",
    num: "07",
    title: "Pre-Departure Briefing",
    desc: "Country-specific orientation so you land confident — housing, banking, culture, work rights.",
    features: ["Country-specific orientation", "Accommodation guidance", "Banking & currency advice", "Cultural adaptation tips"],
    size: "small",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20l4-8 6 4 4-10 6 14" className="svc-path" />
        <path d="M4 26h24" className="svc-path" />
      </svg>
    ),
  },
  {
    id: "postlanding",
    num: "08",
    title: "Post-Landing Support",
    desc: "We don't stop at the airport. Enrollment, SIN/SSN, job search, PR consulting — we're still here.",
    features: ["University enrollment help", "SIN/SSN guidance", "Job & internship search", "PR & immigration consulting"],
    size: "medium",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" className="svc-path" />
        <path d="M16 8v8l5 3" className="svc-path" />
      </svg>
    ),
  },
];

const STEPS = [
  { n: "01", title: "Free Consultation",          desc: "Profile, goals & preferences assessment" },
  { n: "02", title: "University Selection",        desc: "Shortlist matched to your profile & budget" },
  { n: "03", title: "Test Preparation",            desc: "Prepare & ace required standardized tests" },
  { n: "04", title: "Application Process",         desc: "Submit polished applications with our guidance" },
  { n: "05", title: "Offer Letters",               desc: "Receive & evaluate university offers" },
  { n: "06", title: "Visa Application",            desc: "Apply for & obtain your student visa" },
  { n: "07", title: "Pre-Departure",               desc: "Final briefing before your journey" },
  { n: "08", title: "Departure & Beyond",          desc: "Fly out with full post-landing support" },
];

const STATS = [
  { val: 95,  suffix: "%", label: "Visa Success Rate" },
  { val: 500, suffix: "+", label: "Partner Universities" },
  { val: 10,  suffix: "K+", label: "Students Placed" },
];

/* ── Component ──────────────────────────────────────────────── */
export default function ServicesPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      /* Hero reveals */
      gsap.from(".sv-hero-el", {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.9, ease: "expo.out",
        scrollTrigger: { trigger: ".sv-hero", start: "top 85%", once: true },
      });

      /* Service cards stagger */
      gsap.from(".sv-card", {
        y: 48, opacity: 0, stagger: 0.07, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: ".sv-grid", start: "top 82%", once: true },
      });

      /* SVG icon path draw on each card */
      root.querySelectorAll<SVGPathElement | SVGCircleElement | SVGRectElement>(".svc-path").forEach((el) => {
        const len = (el as SVGGeometryElement).getTotalLength?.() ?? 60;
        gsap.fromTo(el,
          { strokeDasharray: len, strokeDashoffset: len, opacity: 0 },
          {
            strokeDashoffset: 0, opacity: 1, duration: 1, ease: "power2.inOut",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      /* Process steps */
      gsap.from(".sv-step", {
        x: -24, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".sv-steps", start: "top 82%", once: true },
      });

      /* Count-up stats */
      root.querySelectorAll<HTMLElement>(".sv-stat-num").forEach((el) => {
        const target = Number(el.dataset.val);
        gsap.fromTo(el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6, ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} style={{ background: "var(--paper)", color: "var(--ink)" }}>

      {/* ── Dark Hero ──────────────────────────────────────────── */}
      <section
        className="sv-hero relative overflow-hidden flex flex-col justify-end px-5 md:px-8 pt-24 md:pt-0"
        style={{ background: "#0E0E10", minHeight: "clamp(420px,55vw,560px)" }}
      >
        {/* Background — consultation scene */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "grayscale(0.3) contrast(1.1)", opacity: 0.55 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,14,16,0.85) 0%, rgba(14,14,16,0.5) 60%, rgba(14,14,16,0.7) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0E0E10, transparent)" }} />
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(248,244,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,244,235,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto w-full pb-10 md:pb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="sv-hero-el font-mono text-[10px] md:text-[11px] tracking-[0.32em] uppercase mb-5" style={{ color: "rgba(246,242,234,0.4)" }}>
                What we do · 8 services
              </p>
              <h1
                className="sv-hero-el font-sans font-black uppercase tracking-[-0.03em] leading-[0.92]"
                style={{ fontSize: "clamp(2.8rem,7vw,6.5rem)", color: "#F6F2EA" }}
              >
                Every step.{" "}
                <br className="hidden sm:block" />
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                  Covered.
                </span>
              </h1>
            </div>
            <p
              className="sv-hero-el max-w-xs sm:text-right text-[14px] leading-relaxed"
              style={{ color: "rgba(246,242,234,0.45)" }}
            >
              From first conversation<br />to first day on campus —<br />and beyond.
            </p>
          </div>

          {/* Stat strip — now below hero text, inside hero box */}
          <div
            className="sv-hero-el mt-8 grid grid-cols-3 divide-x"
            style={{ borderTop: "1px solid rgba(246,242,234,0.1)", paddingTop: "1rem", borderColor: "rgba(246,242,234,0.1)" }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="px-0 sm:px-6 first:pl-0 last:pr-0 text-center sm:text-left">
                <p className="font-sans font-black tabular-nums leading-none" style={{ fontSize: "clamp(1.2rem,3vw,2rem)", color: "#F6F2EA" }}>
                  <span className="sv-stat-num" data-val={s.val}>0</span>{s.suffix}
                </p>
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase mt-1.5" style={{ color: "rgba(246,242,234,0.35)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Bento Grid ─────────────────────────────────── */}
      <section className="sv-grid max-w-[1280px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => {
            const isLarge  = s.size === "large";
            const isMedium = s.size === "medium";
            const spanClass = isLarge
              ? "lg:col-span-2 lg:row-span-2"
              : isMedium
                ? "lg:col-span-1"
                : "lg:col-span-1";

            return (
              <div
                key={s.id}
                className={`sv-card group relative overflow-hidden flex flex-col ${spanClass}`}
                style={{
                  background: isLarge ? "#0E0E10" : "var(--paper-2)",
                  border: "1px solid var(--hairline)",
                  minHeight: isLarge ? 420 : isMedium ? 300 : 260,
                  color: isLarge ? "var(--paper)" : "var(--ink)",
                }}
              >
                {/* Background image for large/medium cards */}
                {s.img && (
                  <>
                    <img
                      src={s.img}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      style={{ filter: "grayscale(0.3) contrast(1.1)", opacity: isLarge ? 0.45 : 0.35 }}
                    />
                    <div className="absolute inset-0" style={{ background: isLarge ? "linear-gradient(135deg, rgba(14,14,16,0.92) 0%, rgba(14,14,16,0.6) 100%)" : "linear-gradient(135deg, var(--paper-2) 0%, rgba(248,244,235,0.85) 100%)" }} />
                  </>
                )}

                <div className="relative flex flex-col gap-5 p-6 md:p-8 h-full">
                  {/* Top row — number + icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className="font-mono text-[10px] tracking-[0.28em] tabular-nums"
                      style={{ color: isLarge ? "rgba(246,242,234,0.3)" : "var(--ink-4)" }}
                    >
                      {s.num}
                    </span>
                    <div
                      className="flex items-center justify-center transition-colors duration-300"
                      style={{
                        width: 48, height: 48,
                        background: isLarge ? "rgba(246,242,234,0.08)" : "var(--paper)",
                        border: `1px solid ${isLarge ? "rgba(246,242,234,0.12)" : "var(--hairline)"}`,
                        color: "var(--ember)",
                      }}
                    >
                      {s.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-auto">
                    <h3
                      className="font-sans font-black uppercase tracking-[-0.02em] leading-[1] mb-3"
                      style={{ fontSize: isLarge ? "clamp(1.6rem,2.5vw,2.2rem)" : "clamp(1rem,1.4vw,1.2rem)" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-[13px] md:text-[14px] leading-relaxed mb-5"
                      style={{ color: isLarge ? "rgba(246,242,234,0.6)" : "var(--ink-3)" }}
                    >
                      {s.desc}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-1.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <span
                            className="shrink-0 w-1 h-1 rounded-full"
                            style={{ background: "var(--ember)" }}
                          />
                          <span
                            className="font-mono text-[10px] tracking-[0.06em]"
                            style={{ color: isLarge ? "rgba(246,242,234,0.5)" : "var(--ink-3)" }}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover CTA — large card only */}
                  {isLarge && (
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                        style={{ color: "var(--ember)" }}
                      >
                        Book free session
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

{/* ── Process Timeline ───────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#0E0E10" }}>
        {/* Background — university campus wide shot */}
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ filter: "grayscale(0.6) contrast(1.1)", opacity: 0.25 }}
        />
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "var(--ember)" }}>
                How it works
              </p>
              <h2
                className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.92]"
                style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#F6F2EA" }}
              >
                Our{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>8-step</span>
                {" "}process
              </h2>
            </div>
            <p className="text-[13px] max-w-xs leading-relaxed" style={{ color: "rgba(246,242,234,0.4)" }}>
              A clear, structured journey from your first call to your first lecture.
            </p>
          </div>

          {/* Steps grid */}
          <div className="sv-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(246,242,234,0.08)" }}>
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="sv-step relative flex flex-col gap-4 p-6 md:p-8 group"
                style={{ background: "#0E0E10" }}
              >
                {/* Connecting line on desktop */}
                {i < STEPS.length - 1 && i % 4 !== 3 && (
                  <div
                    className="hidden lg:block absolute top-[2.8rem] right-0 w-px h-4"
                    style={{ background: "rgba(246,242,234,0.1)" }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-[11px] tracking-[0.2em] tabular-nums font-bold px-2.5 py-1"
                    style={{ background: "var(--ember)", color: "var(--ink)" }}
                  >
                    {s.n}
                  </span>
                  {/* Dot connector */}
                  <div className="flex-1 h-px hidden sm:block" style={{ background: "rgba(246,242,234,0.08)" }} />
                </div>
                <h3
                  className="font-sans font-black uppercase tracking-[-0.015em]"
                  style={{ fontSize: "0.9rem", color: "#F6F2EA" }}
                >
                  {s.title}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.4)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div
          className="relative overflow-hidden flex flex-col md:flex-row items-start md:items-end justify-between gap-8 p-10 md:p-16"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          {/* Background — airport/departure scene */}
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{ filter: "grayscale(0.4) contrast(1.1)", opacity: 0.25 }}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(248,244,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,244,235,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--ember)" }}>
              Get started — it&apos;s free
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
            >
              Ready to begin
              <br />
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                your journey?
              </span>
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed max-w-md" style={{ color: "rgba(246,242,234,0.5)" }}>
              One free call. A plan built around you. No pressure, no obligation.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-80"
              style={{ background: "var(--ember)", color: "var(--ink)", fontSize: "0.85rem" }}
            >
              Free consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
            </Link>
            <a
              href="tel:+919747277233"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase px-7 py-4 transition-opacity hover:opacity-70"
              style={{ border: "1px solid rgba(246,242,234,0.2)", color: "rgba(246,242,234,0.7)" }}
            >
              Call us now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}