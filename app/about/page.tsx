"use client";
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const team = [
  { name: "Al Ameen Mohammed Ali", role: "Founder & CEO",               bio: "Experienced international student in the UK, Al Ameen founded AimBritz to help fellow aspirants pursue their studies without the struggles he faced abroad.", image: "/images/team/alameen.webp" },
  { name: "Akshay B Darsan",       role: "Co-Founder",                  bio: "Co-founder driving AimBritz's vision for ethical, structured, and career-focused international education solutions.", image: "/images/team/akshay.webp", whiteBg: true },
  { name: "Amal DS",               role: "Co-Founder",                  bio: "Co-founder committed to building transparent and results-driven overseas education guidance for students.", image: "/images/team/amal.webp",   zoom: "scale(1.7) translateY(12%)" },
  { name: "Ansab Muhammed",        role: "Managing Partner – Ernakulam", bio: "Heading AimBritz's Ernakulam operations, connecting students across Kochi and surrounding regions.", image: "/images/team/ansab.webp" },
  { name: "Adv. Reshma Salim",     role: "Chief Operating Officer",     bio: "Leading operations with a focus on compliance, student success, and delivering seamless educational journeys.", image: "/images/team/reshma.webp", zoom: "scale(1.45) translateY(-5%)" },
  { name: "Raju Muthuswamy",       role: "Managing Partner – Tamil Nadu", bio: "Driving AimBritz's expansion in Tamil Nadu, helping students access world-class international education.", image: "/images/team/raju.webp", zoom: "scale(1.5) translateY(-1%)" },
];

const VALUES = [
  { n: "01", title: "Integrity",      desc: "Honest, transparent guidance — always prioritising the student, not the commission." },
  { n: "02", title: "Student-first",  desc: "Every decision centred around what's best for the student's future." },
  { n: "03", title: "Global lens",    desc: "Global expertise combined with deep local knowledge." },
  { n: "04", title: "Excellence",     desc: "Continuous innovation to deliver the highest service standards." },
];

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ab-rev").forEach((el) => {
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} style={{ background: "var(--paper)", color: "var(--ink)" }}>

      {/* ── Dark Hero ── */}
      <section className="relative overflow-hidden flex flex-col justify-end px-5 md:px-10 pt-24 md:pt-0" style={{ background: "#0E0E10", minHeight: "clamp(420px,55vw,560px)" }}>
        {/* Background — team/office scene */}
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ filter: "grayscale(0.3) contrast(1.1)", opacity: 0.45 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(14,14,16,0.82) 0%, rgba(14,14,16,0.4) 55%, rgba(14,14,16,0.75) 100%)" }} />
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(248,244,235,1) 1px,transparent 1px),linear-gradient(90deg,rgba(248,244,235,1) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
        <div className="relative max-w-[1280px] mx-auto w-full pb-10 md:pb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="ab-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
                Who we are · Since 2018
              </p>
              <h1 className="ab-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.88]" style={{ fontSize: "clamp(2.8rem,7vw,6.5rem)", color: "#F6F2EA" }}>
                Built by people<br />
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>who&apos;ve been there.</span>
              </h1>
              <div className="ab-rev flex items-center gap-3 mt-5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.15)" }}>
                  <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover" />
                </div>
                <div className="relative w-9 h-9 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.15)" }}>
                  <Image src="/png/india.webp" alt="India Book of Records" fill className="object-cover" />
                </div>
                <p className="font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: "rgba(246,242,234,0.35)" }}>
                  Asia & India Book of Records
                </p>
              </div>
            </div>
            <p className="ab-rev max-w-xs sm:text-right text-[14px] leading-relaxed shrink-0" style={{ color: "rgba(246,242,234,0.45)" }}>
              Founded by an international<br />student who felt the struggle —<br />and decided to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="ab-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>Our story</p>
              <h2 className="ab-rev font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-8" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                How we{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>got here</span>
              </h2>
              <div className="flex flex-col gap-5 text-[14px] leading-relaxed" style={{ color: "var(--ink-3)" }}>
                <p className="ab-rev">AimBritz was founded in 2018 and formally registered in 2020 — evolving into a dynamic global education consultancy headquartered in Trivandrum, Kerala, with presence across India and the United Kingdom.</p>
                <p className="ab-rev">Our Founder & CEO, Al Ameen Mohammed Ali, experienced firsthand the challenges of being an international student in Britain. That experience became the foundation of AimBritz — a promise to help every student pursue their studies without the pain he once faced.</p>
                <p className="ab-rev">Today, we are a trusted partner for students and institutions seeking transparent, results-driven international education guidance — British Council certified, Asia & India Book of Records recognised.</p>
              </div>
            </div>
            {/* Mission + Vision inline */}
            <div className="flex flex-col gap-px" style={{ background: "var(--hairline)" }}>
              <div className="ab-rev flex flex-col gap-4 p-8" style={{ background: "var(--paper-2)" }}>
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--ember)" }}>Mission</p>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--ink-3)" }}>
                  Deliver personalized, transparent overseas education services that align students&apos; ambitions with global industry demands — creating seamless journeys that extend beyond admissions into long-term career success.
                </p>
              </div>
              <div className="ab-rev flex flex-col gap-4 p-8" style={{ background: "var(--paper-2)" }}>
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--ember)" }}>Vision</p>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--ink-3)" }}>
                  To become a globally recognized leader in international education consultancy — enabling students from every background to access world-class academic opportunities through ethical practices and lifelong support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <p className="ab-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>What drives us</p>
        <h2 className="ab-rev font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
          Core{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>values</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--hairline)" }}>
          {VALUES.map((v) => (
            <div key={v.n} className="ab-rev flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
              <span className="font-mono text-[11px] tracking-[0.28em] tabular-nums font-bold px-2 py-1 self-start" style={{ background: "var(--ember)", color: "var(--ink)" }}>{v.n}</span>
              <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.95rem" }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Achievements ── */}
      <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <p className="ab-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>Recognition</p>
          <h2 className="ab-rev font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            Our{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
            {[
              { badges: true, title: "Asia & India Book of Records", desc: "Recognized for hosting the largest overseas education seminar in the region." },
              { title: "British Council Certified", desc: "Our counsellors are British Council certified, ensuring internationally recognized guidance.", badge: "/png/britishcouncil.png" },
              { title: "Global Scholarship Placements", desc: "Successful scholarship placements through government-funded initiatives across multiple countries.", badge: "/png/globalscholarship.jpeg" },
            ].map((a) => (
              <div key={a.title} className="ab-rev flex flex-col gap-5 p-8" style={{ background: "var(--paper-2)" }}>
                {a.badges ? (
                  <div className="flex gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}><Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover" /></div>
                    <div className="relative w-11 h-11 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}><Image src="/png/india.webp" alt="India Book of Records" fill className="object-cover" /></div>
                  </div>
                ) : a.badge ? (
                  <div className="relative w-24 h-11" style={{ flexShrink: 0 }}>
                    <Image src={a.badge} alt={a.title} fill className="object-contain object-left" />
                  </div>
                ) : null}
                <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.95rem" }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: "var(--ink)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <p className="ab-rev font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>The people</p>
          <h2 className="ab-rev font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--paper)" }}>
            Our{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>leadership team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(248,244,235,0.08)" }}>
            {team.map((m) => (
              <div key={m.name} className="ab-rev group flex flex-col overflow-hidden" style={{ background: "var(--ink)" }}>
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image src={m.image} alt={m.name} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                    className="object-cover object-center duration-700"
                    style={{ transform: typeof m.zoom === "string" ? m.zoom : undefined }} />
                  {m.whiteBg && <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.45)", mixBlendMode: "multiply" }} />}
                  <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, var(--ink), transparent)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 mb-2" style={{ background: "rgba(248,244,235,0.08)", color: "rgba(248,244,235,0.6)", border: "1px solid rgba(248,244,235,0.1)" }}>{m.role}</span>
                    <h3 className="font-sans font-black uppercase tracking-[-0.015em] text-[1.05rem]" style={{ color: "var(--paper)" }}>{m.name}</h3>
                  </div>
                </div>
                <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(248,244,235,0.07)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(248,244,235,0.45)" }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aimmedicos Wing ── */}
      <section className="relative overflow-hidden" style={{ background: "#0a0f1a" }}>
        <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1600&q=80" alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.12, filter: "grayscale(0.4)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(10,15,26,0.95) 0%, rgba(10,15,26,0.7) 100%)" }} />
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
            {/* Left */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5" style={{ border: "1px solid rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.06)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#60a5fa" }} />
                <span className="font-mono text-[9px] tracking-[0.28em] uppercase" style={{ color: "#60a5fa" }}>A wing of AimBritz</span>
              </div>
              <img src="/png/aimedicos-logo.png" alt="Aimedicos" className="ab-rev mb-6" style={{ width: "clamp(280px,35vw,500px)", height: "auto", filter: "brightness(0) invert(1)" }} />
              <p className="ab-rev text-[15px] leading-relaxed max-w-lg mb-8" style={{ color: "rgba(246,242,234,0.5)" }}>
                The official medical education division of AimBritz — guiding aspiring doctors, nurses and healthcare professionals toward internationally recognised MBBS, Nursing, Physiotherapy and Health-Related Programmes abroad. From admission to graduation, we stand with you every step of the way.
              </p>
              <div className="ab-rev flex flex-wrap gap-2 mb-10">
                {["MBBS Abroad", "B.Sc Nursing", "Physiotherapy", "Health Sciences", "Georgia", "Russia", "Albania", "Uzbekistan"].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5" style={{ border: "1px solid rgba(96,165,250,0.2)", color: "rgba(96,165,250,0.7)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/aimmedicos" className="ab-rev inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-80" style={{ background: "#60a5fa", color: "#0a0f1a", fontSize: "0.85rem" }}>
                Explore Aimmedicos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
              </Link>
            </div>
            {/* Right — key points */}
            <div className="lg:w-[380px] flex flex-col gap-px" style={{ background: "rgba(96,165,250,0.08)" }}>
              {[
                { n: "01", t: "Medical Specialists", d: "Counsellors exclusively trained for MBBS and healthcare admissions worldwide." },
                { n: "02", t: "Affordable Tuition", d: "Partner universities offering NMC-recognised degrees at a fraction of Indian private college costs." },
                { n: "03", t: "End-to-end Support", d: "From counseling to visa to post-arrival — we handle every step of your medical journey." },
                { n: "04", t: "Globally Recognised", d: "Universities in Georgia, Russia, Albania, Uzbekistan with WHO and NMC recognition." },
              ].map((p) => (
                <div key={p.n} className="ab-rev flex gap-5 p-6" style={{ background: "rgba(10,15,26,0.6)", borderBottom: "1px solid rgba(96,165,250,0.08)" }}>
                  <span className="font-mono text-[10px] tracking-[0.2em] shrink-0 mt-0.5" style={{ color: "#60a5fa" }}>{p.n}</span>
                  <div>
                    <p className="font-sans font-black uppercase tracking-[-0.01em] text-[13px] mb-1" style={{ color: "#F6F2EA" }}>{p.t}</p>
                    <p className="text-[13px] leading-relaxed" style={{ color: "rgba(246,242,234,0.4)" }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-28">
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

    </div>
  );
}