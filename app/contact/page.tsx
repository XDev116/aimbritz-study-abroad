"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Light editorial theme — matches stories / homepage */
const C = {
  bg: "#fcfcfa",
  bg2: "#f2f2ef",
  card: "#ffffff",
  ink: "#0a0a0a",
  muted: "rgba(10,10,10,0.62)",
  faint: "rgba(10,10,10,0.42)",
  line: "rgba(10,10,10,0.12)",
};

const OFFICES = [
  { tag: "UK", name: "London", addr: "42 Montcalm House, Westferry, London, E14 3SD" },
  { tag: "IN", name: "Trivandrum", addr: "Mahatma Gandhi Rd, Puthenchanthai, Santhi Nagar, Pulimoodu, Thiruvananthapuram, Kerala 695001" },
  { tag: "IN", name: "Kochi", addr: "3rd Floor, Koonamthai, Edappally, Kochi, Kerala 682024" },
];

const MAPS = [
  {
    name: "Trivandrum Office",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8!2d76.9447!3d8.5241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0652f0d0c1%3A0x9d4b8c2d8c8b8a8a!2sAnna%27s%20Arcade!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
    link: "https://maps.app.goo.gl/sBV3RMdJSagWFkJM8",
  },
  {
    name: "Kochi (Ernakulam) Office",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d76.3!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5f3f59d!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
    link: "https://maps.app.goo.gl/Sg8s2243q7guw5FW6",
  },
];

export default function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", country: "", message: "" });
    }, 3500);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ct-rev").forEach((el) => {
        gsap.from(el, {
          y: 28, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  /* underline-only field — editorial style */
  const fieldStyle: React.CSSProperties = {
    background: "transparent",
    borderBottom: `1px solid ${C.line}`,
    color: C.ink,
  };
  const labelCls = "block font-mono text-[10px] tracking-[0.2em] uppercase mb-2 font-bold";

  return (
    <div ref={rootRef} style={{ background: C.bg, color: C.ink }}>
      {/* ── Hero ── */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-14">
        <div className="max-w-[1200px] mx-auto">
          <p className="ct-rev font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: C.faint }}>
            Contact / Free consultation
          </p>
          <h1 className="ct-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.95]" style={{ fontSize: "clamp(2.4rem, 8vw, 6rem)" }}>
            Let&apos;s talk.
          </h1>
          <p className="ct-rev mt-6 max-w-lg text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.muted }}>
            Tell us where you want to go. We&apos;ll reply within 24 hours with a
            free, no-obligation plan.
          </p>
        </div>
      </section>

      {/* ── Form + contact details ── */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7 ct-rev">
            {submitted ? (
              <div className="rounded-2xl p-10 text-center" style={{ background: C.bg2, border: `1px solid ${C.line}` }}>
                <div className="text-5xl mb-4">✦</div>
                <h3 className="font-sans font-black uppercase tracking-[-0.02em] text-2xl mb-2">Message sent</h3>
                <p className="text-[15px]" style={{ color: C.muted }}>
                  Thanks — we&apos;ve got it and will reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="name" className={labelCls} style={{ color: C.muted }}>Full name *</label>
                    <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Your name"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60" style={fieldStyle} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls} style={{ color: C.muted }}>Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@email.com"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60" style={fieldStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="phone" className={labelCls} style={{ color: C.muted }}>Phone *</label>
                    <input id="phone" name="phone" required value={form.phone} onChange={onChange} placeholder="+91 …"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60" style={fieldStyle} />
                  </div>
                  <div>
                    <label htmlFor="country" className={labelCls} style={{ color: C.muted }}>Destination of interest</label>
                    <input id="country" name="country" value={form.country} onChange={onChange} placeholder="UK, Canada, Australia…"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60" style={fieldStyle} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={labelCls} style={{ color: C.muted }}>Message</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} placeholder="Tell us about your goals…"
                    className="w-full py-2.5 text-[15px] outline-none resize-none placeholder:opacity-60" style={fieldStyle} />
                </div>
                <button type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[13px] font-semibold transition-transform hover:scale-[1.03]"
                  style={{ background: C.ink, color: C.bg }}>
                  Send message
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="lg:col-span-5 ct-rev space-y-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: C.faint }}>Reach us directly</p>
              <div className="space-y-3">
                <a href="tel:+919747277233" className="block font-sans font-black uppercase tracking-[-0.01em] hover:opacity-60 transition-opacity" style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
                  +91 97472 77233
                </a>
                <a href="mailto:ceo@aimbritz.com" className="block text-[15px] hover:opacity-60 transition-opacity" style={{ color: C.muted }}>ceo@aimbritz.com</a>
                <a href="mailto:info@aimbritz.com" className="block text-[15px] hover:opacity-60 transition-opacity" style={{ color: C.muted }}>info@aimbritz.com</a>
                <a href="https://wa.me/919747277233" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 text-[13px] font-semibold border-b pb-0.5" style={{ borderColor: C.ink }}>
                  WhatsApp us →
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: C.faint }}>Hours</p>
              <p className="text-[14px] leading-relaxed" style={{ color: C.muted }}>
                Mon–Fri · 9:00 AM – 6:00 PM<br />
                Sat · 10:00 AM – 4:00 PM<br />
                Sun · Closed
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: C.faint }}>Offices</p>
              <div className="space-y-5">
                {OFFICES.map((o) => (
                  <div key={o.name} className="flex gap-3">
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-1 rounded h-fit shrink-0" style={{ background: C.ink, color: C.bg }}>
                      {o.tag}
                    </span>
                    <div>
                      <p className="font-sans font-bold text-[14px] uppercase tracking-[0.01em]">{o.name}</p>
                      <p className="text-[13px] leading-relaxed mt-0.5" style={{ color: C.muted }}>{o.addr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Maps ── */}
      <section className="px-5 md:px-8 py-16 md:py-24 border-t" style={{ background: C.bg2, borderColor: C.line }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="ct-rev font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: C.faint }}>
            Find us
          </p>
          <h2 className="ct-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.95] mb-10 md:mb-14" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}>
            On the map.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {MAPS.map((m) => (
              <div key={m.name} className="ct-rev rounded-2xl overflow-hidden" style={{ background: C.card, border: `1px solid ${C.line}` }}>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="font-sans font-bold text-[14px] uppercase tracking-[0.01em]">{m.name}</span>
                  <a href={m.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.15em] uppercase pb-0.5 border-b" style={{ borderColor: C.ink }}>
                    Open →
                  </a>
                </div>
                <iframe
                  src={m.src}
                  width="100%"
                  height="300"
                  style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={m.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
