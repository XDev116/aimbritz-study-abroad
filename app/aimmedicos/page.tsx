"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const COUNTRIES = [
  { flag: "🇬🇪", name: "Georgia",    unis: 8,  avg: "₹25–35L/yr", highlight: "Most popular MBBS destination" },
  { flag: "🇷🇺", name: "Russia",     unis: 12, avg: "₹30–40L/yr", highlight: "NMC recognised universities" },
  { flag: "🇦🇱", name: "Albania",    unis: 4,  avg: "₹20–28L/yr", highlight: "European degree recognition" },
  { flag: "🇺🇿", name: "Uzbekistan", unis: 5,  avg: "₹18–25L/yr", highlight: "Affordable & WHO approved" },
];

const PROGRAMS = [
  { num: "01", title: "MBBS", desc: "5–6 year Bachelor of Medicine & Surgery at WHO and NMC recognised universities worldwide.", tags: ["6 years", "NMC Approved", "WHO Listed"] },
  { num: "02", title: "B.Sc Nursing", desc: "International nursing degree with clinical training and global placement opportunities.", tags: ["4 years", "Clinical Training", "Global Placement"] },
  { num: "03", title: "Physiotherapy", desc: "Internationally recognised physiotherapy degrees with hands-on clinical exposure abroad.", tags: ["4 years", "Clinical Focus", "Global Recognition"] },
  { num: "04", title: "Health-Related Programmes", desc: "Medical Lab Technology, Radiology, Allied Health Sciences and more at partner universities.", tags: ["3–4 years", "Practical Focus"] },
];

const STEPS = [
  { n: "01", t: "Career Counselling",          d: "Personalised guidance on program choice, country selection and university fit." },
  { n: "02", t: "University Selection",         d: "Shortlist NMC/WHO-approved universities matched to your profile and budget." },
  { n: "03", t: "Application & Documentation",  d: "Complete application and document support — we handle every form and requirement." },
  { n: "04", t: "Visa Guidance",                d: "End-to-end student visa processing with high approval rates." },
  { n: "05", t: "Pre-Departure Briefing",       d: "Country-specific orientation covering accommodation, culture and living costs." },
  { n: "06", t: "Airport Pickup & Arrival",     d: "Dedicated pickup on arrival and support settling into your new city." },
  { n: "07", t: "SIM & Banking Assistance",     d: "Help with local SIM card, bank account setup and daily essentials." },
  { n: "08", t: "Residence Permit Support",     d: "Guidance through residence permit and card application in your host country." },
  { n: "09", t: "University Registration",      d: "On-ground support for enrolment, registration and first-week formalities." },
  { n: "10", t: "Ongoing Student Support",      d: "Continuous support throughout your entire course duration — from admission to graduation." },
];

const WHY = [
  { n: "01", t: "Simple & Transparent",        d: "We make overseas medical education stress-free — no hidden fees, no surprises." },
  { n: "02", t: "NMC & WHO Recognised",         d: "All partner universities are listed with the National Medical Commission and WHO." },
  { n: "03", t: "Admission to Graduation",      d: "We stand with you every step — from first enquiry until you settle into your academic life." },
  { n: "04", t: "The Official Medical Wing",    d: "Backed by AimBritz's 6+ years of trusted overseas education expertise." },
];

export default function AimmedicosPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".am-rev").forEach((el) => {
        gsap.from(el, {
          y: 32, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} style={{ background: "var(--paper)", color: "var(--ink)" }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden flex flex-col justify-end px-5 md:px-10"
        style={{ background: "#0a0f1a", minHeight: "clamp(460px,55vw,560px)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1600&q=80"
          alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ filter: "grayscale(0.3) contrast(1.1)", opacity: 0.45 }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(160deg, rgba(10,15,26,0.97) 0%, rgba(10,15,26,0.55) 65%, rgba(10,15,26,0.9) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to top, #0a0f1a, transparent)" }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(96,165,250,1) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,1) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }} />

        <div className="relative max-w-[1280px] mx-auto w-full pb-8 md:pb-14">

          {/* badge */}
          <div className="am-rev inline-flex items-center gap-2 px-3 py-1.5 mb-6" style={{ border: "1px solid rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#60a5fa" }} />
            <span className="font-mono text-[9px] tracking-[0.28em] uppercase" style={{ color: "#60a5fa" }}>A wing of AimBritz</span>
          </div>

          {/* logo */}
          <img
            src="/png/aimedicos-logo.png"
            alt="Aimedicos"
            className="am-rev block mb-3"
            style={{ width: "min(80vw, 380px)", height: "auto", filter: "brightness(0) invert(1)" }}
          />

          {/* tagline */}
          <p className="am-rev font-mono text-[9px] tracking-[0.26em] uppercase mb-8" style={{ color: "rgba(96,165,250,0.6)" }}>
            The Official Medical Wing of AimBritz · MBBS · Nursing · Physiotherapy · Health Sciences
          </p>

          {/* stat strip — 2 col on mobile, 4 col on md+ */}
          <div
            className="am-rev grid grid-cols-2 md:grid-cols-4"
            style={{ borderTop: "1px solid rgba(96,165,250,0.15)", paddingTop: "1rem" }}
          >
            {[["4+", "Countries"], ["29+", "Universities"], ["100%", "NMC Approved"], ["6+", "Yrs of Trust"]].map(([val, label], i) => (
              <div
                key={label}
                className="py-3 pr-4 pl-0"
                style={{ borderLeft: i > 0 ? "1px solid rgba(96,165,250,0.12)" : "none", paddingLeft: i > 0 ? "1rem" : 0 }}
              >
                <p className="font-sans font-black tabular-nums leading-none" style={{ fontSize: "clamp(1.2rem,3vw,1.7rem)", color: "#F6F2EA" }}>{val}</p>
                <p className="font-mono text-[8px] tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(96,165,250,0.45)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Intro ── */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ background: "var(--paper-2)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="am-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>About Aimmedicos</p>
            <h2 className="am-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.9] mb-8" style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}>
              Medicine abroad,<br />
              <span className="font-serif italic font-normal" style={{ color: "#60a5fa" }}>done right.</span>
            </h2>
            <p className="am-rev text-[15px] leading-relaxed" style={{ color: "var(--ink-3)" }}>
              AimMedicos is the dedicated medical education division of AimBritz, established to guide aspiring healthcare professionals toward internationally recognised <strong style={{ color: "var(--ink)" }}>MBBS, Nursing, Physiotherapy, and Health-Related Programmes</strong> across leading universities in Georgia, Russia, Albania, Uzbekistan, and other emerging international education destinations. Our mission is to make overseas medical education simple, transparent, and stress-free — with comprehensive end-to-end support from first enquiry until you successfully settle into your new academic environment.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ background: "var(--hairline)" }}>
            {WHY.map((w) => (
              <div key={w.n} className="am-rev flex gap-5 p-7" style={{ background: "var(--paper-2)" }}>
                <span className="font-mono text-[10px] tracking-[0.2em] shrink-0 mt-0.5" style={{ color: "#60a5fa" }}>{w.n}</span>
                <div>
                  <p className="font-sans font-black uppercase tracking-[-0.01em] text-[13px] mb-1">{w.t}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--ink-3)" }}>{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Countries ── */}
      <section className="px-5 md:px-10 py-16 md:py-28" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="am-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>Destinations</p>
          <h2 className="am-rev font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-8 md:mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            Where you&apos;ll{" "}
            <span className="font-serif italic font-normal" style={{ color: "#60a5fa" }}>study medicine</span>
          </h2>

          {/* Mobile: horizontal list rows. Desktop: 4-col cards */}
          <div className="flex flex-col gap-px md:hidden" style={{ background: "var(--hairline)" }}>
            {COUNTRIES.map((c) => (
              <div key={c.name} className="am-rev flex items-center gap-5 px-5 py-5" style={{ background: "var(--paper)" }}>
                <span className="text-4xl shrink-0">{c.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-sans font-black uppercase tracking-[-0.02em] text-[1.05rem]">{c.name}</h3>
                    <span className="font-mono text-[9px] tracking-[0.15em] shrink-0" style={{ color: "var(--ember)" }}>{c.avg}</span>
                  </div>
                  <p className="font-mono text-[8px] tracking-[0.2em] uppercase mt-0.5" style={{ color: "#60a5fa" }}>{c.unis} universities · {c.highlight}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 4-col cards */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--hairline)" }}>
            {COUNTRIES.map((c) => (
              <div key={c.name} className="am-rev flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
                <span className="text-5xl">{c.flag}</span>
                <div>
                  <h3 className="font-sans font-black uppercase tracking-[-0.02em]" style={{ fontSize: "1.3rem" }}>{c.name}</h3>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase mt-1" style={{ color: "#60a5fa" }}>{c.unis} universities</p>
                </div>
                <p className="font-mono text-[11px] tracking-[0.12em]" style={{ color: "var(--ember)" }}>{c.avg}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--ink-3)" }}>{c.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ background: "#0a0f1a" }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="am-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "#60a5fa" }}>Programs</p>
          <h2 className="am-rev font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#F6F2EA" }}>
            What you can{" "}
            <span className="font-serif italic font-normal" style={{ color: "#60a5fa" }}>study</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(96,165,250,0.1)" }}>
            {PROGRAMS.map((p) => (
              <div key={p.num} className="am-rev flex gap-6 p-8" style={{ background: "#0a0f1a" }}>
                <span className="font-mono text-[11px] tracking-[0.2em] shrink-0 mt-1" style={{ color: "#60a5fa" }}>{p.num}</span>
                <div>
                  <h3 className="font-sans font-black uppercase tracking-[-0.02em] mb-2" style={{ fontSize: "1.05rem", color: "#F6F2EA" }}>{p.title}</h3>
                  <p className="text-[13px] leading-relaxed mb-4" style={{ color: "rgba(246,242,234,0.45)" }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[8px] tracking-[0.2em] uppercase px-2.5 py-1" style={{ border: "1px solid rgba(96,165,250,0.2)", color: "rgba(96,165,250,0.7)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="am-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>How it works</p>
          <h2 className="am-rev font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            Your journey{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>step by step</span>
          </h2>
          <div className="flex flex-col gap-px" style={{ background: "var(--hairline)" }}>
            {STEPS.map((s) => (
              <div key={s.n} className="am-rev flex items-start gap-6 px-8 py-6" style={{ background: "var(--paper-2)" }}>
                <span className="font-mono text-[11px] tracking-[0.2em] shrink-0 w-8" style={{ color: "#60a5fa" }}>{s.n}</span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 flex-1">
                  <h3 className="font-sans font-black uppercase tracking-[-0.015em] text-[0.9rem] shrink-0 sm:w-48">{s.t}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--ink-3)" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div
          className="relative overflow-hidden flex flex-col md:flex-row items-start md:items-end justify-between gap-8 p-10 md:p-16"
          style={{ background: "#0a0f1a" }}
        >
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ filter: "grayscale(0.4)", opacity: 0.15 }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(96,165,250,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.5) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#60a5fa" }}>Get started — it&apos;s free</p>
            <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#F6F2EA" }}>
              Ready to begin<br />
              <span className="font-serif italic font-normal" style={{ color: "#60a5fa" }}>your medical journey?</span>
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed max-w-md" style={{ color: "rgba(246,242,234,0.45)" }}>
              From Admission to Graduation — we stand with you every step of the way. One free call, no obligation.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-80" style={{ background: "#60a5fa", color: "#0a0f1a", fontSize: "0.85rem" }}>
              Free consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
            </Link>
            <a href="tel:+919747277233" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase px-7 py-4 transition-opacity hover:opacity-70" style={{ border: "1px solid rgba(96,165,250,0.25)", color: "rgba(246,242,234,0.6)" }}>
              Call us now
            </a>
          </div>
        </div>
      </section>

      {/* ── Back to AimBritz ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pb-10">
        <Link href="/about" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-60" style={{ color: "var(--ink-3)" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 7L7 17M7 17H16M7 17V8" /></svg>
          Back to AimBritz
        </Link>
      </div>

    </div>
  );
}