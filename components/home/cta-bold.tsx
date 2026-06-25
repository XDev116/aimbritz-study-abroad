"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Footer columns ─────────────────────────────────────────────────── */
const footerColumns: [string, { label: string; href: string }[]][] = [
  [
    "Explore",
    [
      { label: "Countries", href: "/countries" },
      { label: "Universities", href: "/universities" },
      { label: "Services", href: "/services" },
      { label: "Stories", href: "/#stories" },
    ],
  ],
  [
    "Company",
    [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  ],
  [
    "Reach us",
    [
      { label: "hello@aimbritz.com", href: "mailto:hello@aimbritz.com" },
      { label: "+91 97472 77233", href: "tel:+919747277233" },
      { label: "WhatsApp", href: "https://wa.me/919747277233" },
      { label: "Instagram", href: "https://www.instagram.com/aimbritz" },
    ],
  ],
];

/* ── Component ──────────────────────────────────────────────────────── */
export function CtaBold() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", destination: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", destination: "" });
    }, 3500);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-reveal", {
        y: 36,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 80%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const field =
    "w-full py-2.5 text-[15px] bg-transparent outline-none placeholder:text-white/35";
  const fieldStyle = { borderBottom: "1px solid rgba(248,244,235,0.25)", color: "var(--paper)" };
  const labelCls = "block font-mono text-[10px] tracking-[0.2em] uppercase mb-1.5 font-bold";

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingBottom: "clamp(32px, 4vw, 48px)",
      }}
    >
      {/* ── CTA + inline contact form ──────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — heading */}
        <div>
          <p className="cta-reveal t-eyebrow" style={{ color: "var(--ember)" }}>
            Final call
          </p>
          <h2
            className="cta-reveal t-display mt-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "var(--paper)" }}
          >
            Your turn,{" "}
            <span className="t-display-serif" style={{ color: "var(--ember)" }}>
              isn&apos;t it?
            </span>
          </h2>
          <p
            className="cta-reveal mt-5 max-w-md text-[15px] leading-relaxed"
            style={{ color: "rgba(248,244,235,0.65)" }}
          >
            Drop your details — we&apos;ll call within 24 hours with a free
            shortlist of 5 universities that fit your profile.
          </p>
        </div>

        {/* Right — compact form */}
        <div className="cta-reveal">
          {sent ? (
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "rgba(248,244,235,0.06)", border: "1px solid rgba(248,244,235,0.15)" }}
            >
              <div className="text-4xl mb-3" style={{ color: "var(--ember)" }}>✦</div>
              <p className="font-sans font-black uppercase tracking-[-0.01em] text-lg">Got it — we&apos;ll call you</p>
              <p className="text-[14px] mt-1" style={{ color: "rgba(248,244,235,0.6)" }}>Within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label htmlFor="cta-name" className={labelCls} style={{ color: "rgba(248,244,235,0.6)" }}>Name *</label>
                <input id="cta-name" name="name" required value={form.name} onChange={onChange} placeholder="Your name" className={field} style={fieldStyle} />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cta-phone" className={labelCls} style={{ color: "rgba(248,244,235,0.6)" }}>Phone *</label>
                <input id="cta-phone" name="phone" required value={form.phone} onChange={onChange} placeholder="+91 …" className={field} style={fieldStyle} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cta-dest" className={labelCls} style={{ color: "rgba(248,244,235,0.6)" }}>Destination of interest</label>
                <input id="cta-dest" name="destination" value={form.destination} onChange={onChange} placeholder="UK, Canada, Australia…" className={field} style={fieldStyle} />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-3 mt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] transition-opacity hover:opacity-90"
                  style={{ background: "var(--ember)", color: "var(--ink)" }}
                >
                  Book free session
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </button>
                <a href="tel:+919747277233" className="text-[12px] font-bold uppercase tracking-[0.1em]" style={{ color: "rgba(248,244,235,0.6)" }}>
                  or call us →
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <div
        className="max-w-[1400px] mx-auto px-6 md:px-10 mt-14 pt-8 grid grid-cols-12 gap-6 border-t"
        style={{ borderColor: "rgba(248,244,235,0.15)" }}
      >
        {/* Brand column */}
        <div className="col-span-12 md:col-span-4">
          <Image
            src="/logo/logo-full-white.png"
            alt="AimBritz — a dream that you can build with us"
            width={673}
            height={279}
            className="h-16 md:h-20 w-auto object-contain object-left"
          />
          <p
            className="mt-5 text-[13px] leading-relaxed"
            style={{ color: "rgba(248,244,235,0.55)" }}
          >
            Study abroad consultancy &middot; Since 2018. Guiding students into
            500+ universities across 14 countries.
          </p>

        </div>

        {/* Link columns */}
        {footerColumns.map(([heading, items]) => (
          <div key={heading} className="col-span-6 md:col-span-2">
            <p className="t-eyebrow" style={{ color: "var(--ember)" }}>
              {heading}
            </p>
            <ul
              className="mt-4 space-y-2 text-[13px]"
              style={{ color: "rgba(248,244,235,0.7)" }}
            >
              {items.map((item) => {
                const isExternal =
                  item.href.startsWith("http") ||
                  item.href.startsWith("mailto:") ||
                  item.href.startsWith("tel:");

                return (
                  <li key={item.label}>
                    {isExternal ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="hover:text-ember transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-ember transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Offices — full width, 2 cols */}
        <div className="col-span-12 pt-6" style={{ borderTop: "1px solid rgba(248,244,235,0.08)" }}>
          <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-4" style={{ color: "var(--ember)" }}>Our Offices</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
            {[
              { name: "United Kingdom", addr: "42 Montcalm House, Westferry, London, E14 3SD" },
              { name: "Trivandrum",     addr: "Mahatma Gandhi Rd, Pulimoodu, Thiruvananthapuram, Kerala 695001" },
              { name: "Kochi",         addr: "3rd Floor, Koonamthai, Edappally, Kochi, Kerala 682024" },
              { name: "Thiruvalla",    addr: "2nd Floor, Seesa Arcade, Ramanchira, Thiruvalla, Kerala 689107" },
              { name: "Vizhinjam",     addr: "Near Akshaya Center, Vizhinjam, Kerala 695521" },
              { name: "Tamil Nadu",    addr: "Tiruchirappalli, Tamil Nadu" },
              { name: "Dubai",         addr: "" },
            ].map((o) => (
              <div key={o.name}>
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: "rgba(248,244,235,0.7)" }}>{o.name}</p>
                {o.addr && <p className="mt-0.5 text-[11px] leading-relaxed" style={{ color: "rgba(248,244,235,0.35)" }}>{o.addr}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="col-span-12 flex justify-center">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-50 text-center">
            &copy; 2026 Aimbritz &middot; Built with care.
          </div>
        </div>
      </div>
    </section>
  );
}
