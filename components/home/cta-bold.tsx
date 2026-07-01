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
    ],
  ],
];

/* ── Component ──────────────────────────────────────────────────────── */
const EMPTY_CTA = { name: "", phone: "", destination: "" };

function validateCta(form: typeof EMPTY_CTA) {
  const errors: Partial<typeof EMPTY_CTA> = {};
  if (!form.name.trim()) errors.name = "Required";
  if (!form.phone.trim()) errors.phone = "Required";
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) errors.phone = "Invalid number";
  return errors;
}

export function CtaBold() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState(EMPTY_CTA);
  const [errors, setErrors] = useState<Partial<typeof EMPTY_CTA>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof EMPTY_CTA])
      setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateCta(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, country: form.destination, email: "", message: "Enquiry via homepage CTA form" }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm(EMPTY_CTA);
    } catch {
      setStatus("error");
    }
  };

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
          {status === "sent" ? (
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "rgba(248,244,235,0.06)", border: "1px solid rgba(248,244,235,0.15)" }}
            >
              <div className="text-4xl mb-3" style={{ color: "var(--ember)" }}>✦</div>
              <p className="font-sans font-black uppercase tracking-[-0.01em] text-lg">Got it — we&apos;ll call you</p>
              <p className="text-[14px] mt-1" style={{ color: "rgba(248,244,235,0.6)" }}>Within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {status === "error" && (
                <div className="sm:col-span-2 px-4 py-2.5 rounded text-[12px]" style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", color: "#fca5a5" }}>
                  Something went wrong — please try again or call us.
                </div>
              )}
              <div className="sm:col-span-1">
                <label htmlFor="cta-name" className={labelCls} style={{ color: "rgba(248,244,235,0.6)" }}>Name *</label>
                <input id="cta-name" name="name" value={form.name} onChange={onChange} placeholder="Your name" className={field}
                  style={{ ...fieldStyle, borderBottomColor: errors.name ? "#ef4444" : undefined }} />
                {errors.name && <p className="mt-1 text-[10px] font-mono" style={{ color: "#fca5a5" }}>{errors.name}</p>}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cta-phone" className={labelCls} style={{ color: "rgba(248,244,235,0.6)" }}>Phone *</label>
                <input id="cta-phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91 …" className={field}
                  style={{ ...fieldStyle, borderBottomColor: errors.phone ? "#ef4444" : undefined }} />
                {errors.phone && <p className="mt-1 text-[10px] font-mono" style={{ color: "#fca5a5" }}>{errors.phone}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cta-dest" className={labelCls} style={{ color: "rgba(248,244,235,0.6)" }}>Destination of interest</label>
                <input id="cta-dest" name="destination" value={form.destination} onChange={onChange} placeholder="UK, Canada, Australia…" className={field} style={fieldStyle} />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-3 mt-1">
                <button type="submit" disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--ember)", color: "var(--ink)" }}
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Book free session
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
                    </>
                  )}
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
            {/* Social icons under Reach us */}
            {heading === "Reach us" && (
              <div className="flex gap-2 mt-5">
                {[
                  { name: "Instagram", href: "https://www.instagram.com/aimbritz", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
                  { name: "YouTube", href: "https://www.youtube.com/@AimbritzStudyAbroad", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.8 9.2.8 11.5v2.1C.8 16 1 18 1 18s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.2 12 22.2 12 22.2s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.2-2.2.2-4.4v-2.1C23.2 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg> },
                  { name: "WhatsApp", href: "https://wa.me/919747277233", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                ].map(({ name, href, icon }) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                    className="h-8 w-8 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                    style={{ border: "1px solid rgba(248,244,235,0.2)", color: "rgba(248,244,235,0.7)" }}>
                    {icon}
                  </a>
                ))}
              </div>
            )}
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
