"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "@/components/ui/magnetic";

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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-reveal", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        paddingTop: "clamp(100px,12vw,180px)",
        paddingBottom: "clamp(80px,10vw,140px)",
      }}
    >
      {/* ── CTA Block ─────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <p className="cta-reveal t-eyebrow" style={{ color: "var(--ember)" }}>
          Final call
        </p>

        <h2
          className="cta-reveal t-display mt-10"
          style={{
            fontSize: "clamp(3rem, 10vw, 12rem)",
            color: "var(--paper)",
          }}
        >
          Your turn,
          <br />
          <span
            className="t-display-serif"
            style={{ color: "var(--ember)" }}
          >
            isn&apos;t it?
          </span>
        </h2>

        <p
          className="cta-reveal mt-10 max-w-xl text-[17px] leading-relaxed"
          style={{ color: "rgba(248,244,235,0.7)" }}
        >
          Book a 30-minute free session. No commitment. Walk away with a clear
          shortlist of 5 universities that fit your profile, goals and budget.
        </p>

        {/* Action buttons */}
        <div className="cta-reveal mt-12 flex flex-wrap gap-3 items-center">
          <Magnetic strength={0.25}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors hover:opacity-90"
              style={{
                background: "var(--ember)",
                color: "var(--ink)",
              }}
            >
              Book free session
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </Link>
          </Magnetic>

          <a
            href="tel:+919747277233"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 border text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-white/5 transition-colors"
            style={{ borderColor: "rgba(248,244,235,0.3)" }}
          >
            Or call +91 97472 77233
          </a>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <div
        className="max-w-[1400px] mx-auto px-6 md:px-10 mt-28 pt-8 grid grid-cols-12 gap-6 border-t"
        style={{ borderColor: "rgba(248,244,235,0.15)" }}
      >
        {/* Brand column */}
        <div className="col-span-12 md:col-span-4">
          <span className="font-sans font-black text-2xl">
            aimbritz
            <span style={{ color: "var(--ember)" }}>.</span>
          </span>
          <p
            className="mt-4 text-[13px] leading-relaxed"
            style={{ color: "rgba(248,244,235,0.55)" }}
          >
            Study abroad consultancy &middot; Kochi, Kerala &middot; Since 2020.
            Guiding students into 500+ universities across 14 countries.
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

        {/* Copyright */}
        <div className="col-span-12 md:col-span-2 flex md:justify-end">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-50 self-end">
            &copy; 2026 Aimbritz
            <br />
            Built with care.
          </div>
        </div>
      </div>
    </section>
  );
}
