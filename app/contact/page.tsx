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
  { tag: "IN", name: "Tiruvalla", addr: "" },
  { tag: "IN", name: "Tamil Nadu", addr: "" },
  { tag: "AE", name: "Dubai", addr: "" },
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

const EMPTY = { name: "", email: "", phone: "", country: "", message: "" };

function validate(form: typeof EMPTY) {
  const errors: Partial<typeof EMPTY> = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
  if (!form.phone.trim()) errors.phone = "Phone is required";
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) errors.phone = "Enter a valid phone number";
  if (!form.message.trim()) errors.message = "Please tell us your goals";
  return errors;
}

export default function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<typeof EMPTY>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof EMPTY]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

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
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-14" style={{ background: "#0E0E10" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="ct-rev font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(246,242,234,0.4)" }}>
                Contact / Free consultation
              </p>
              <h1 className="ct-rev font-sans font-black uppercase tracking-[-0.03em] leading-[0.95]" style={{ fontSize: "clamp(2.4rem, 8vw, 6rem)", color: "#F6F2EA" }}>
                Let&apos;s talk.
              </h1>
              <p className="ct-rev mt-6 max-w-lg text-[15px] md:text-[16px] leading-relaxed" style={{ color: "rgba(246,242,234,0.5)" }}>
                Tell us where you want to go. We&apos;ll reply within 24 hours with a free, no-obligation plan.
              </p>
            </div>

            {/* Reach us directly — visible from the top */}
            <div className="ct-rev flex flex-col gap-4 lg:min-w-[260px] pb-2">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(246,242,234,0.35)" }}>
                Reach us directly
              </p>
              <a href="tel:+919747277233"
                className="font-sans font-black uppercase tracking-[-0.02em] leading-none transition-opacity hover:opacity-70"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F6F2EA" }}>
                +91 97472 77233
              </a>
              <div className="flex flex-col gap-1.5">
                <a href="mailto:ceo@aimbritz.com" className="font-mono text-[11px] tracking-[0.1em] transition-opacity hover:opacity-60" style={{ color: "rgba(246,242,234,0.5)" }}>ceo@aimbritz.com</a>
                <a href="mailto:info@aimbritz.com" className="font-mono text-[11px] tracking-[0.1em] transition-opacity hover:opacity-60" style={{ color: "rgba(246,242,234,0.5)" }}>info@aimbritz.com</a>
              </div>
              <a href="https://wa.me/919747277233" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                style={{ color: "rgba(246,242,234,0.5)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + contact details ── */}
      <section className="px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7 ct-rev">
            {status === "sent" ? (
              <div className="rounded-2xl p-10 text-center" style={{ background: C.bg2, border: `1px solid ${C.line}` }}>
                <div className="text-5xl mb-4">✦</div>
                <h3 className="font-sans font-black uppercase tracking-[-0.02em] text-2xl mb-2">Message sent</h3>
                <p className="text-[15px]" style={{ color: C.muted }}>
                  Thanks — we&apos;ve got it and will reply within 24 hours.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase underline" style={{ color: C.faint }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-7">
                {status === "error" && (
                  <div className="px-4 py-3 rounded text-[13px]" style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c" }}>
                    Something went wrong — please try again or call us directly.
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="name" className={labelCls} style={{ color: C.muted }}>Full name *</label>
                    <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your name"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60"
                      style={{ ...fieldStyle, borderBottomColor: errors.name ? "#ef4444" : undefined }} />
                    {errors.name && <p className="mt-1.5 text-[11px] font-mono" style={{ color: "#ef4444" }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls} style={{ color: C.muted }}>Email *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@email.com"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60"
                      style={{ ...fieldStyle, borderBottomColor: errors.email ? "#ef4444" : undefined }} />
                    {errors.email && <p className="mt-1.5 text-[11px] font-mono" style={{ color: "#ef4444" }}>{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label htmlFor="phone" className={labelCls} style={{ color: C.muted }}>Phone *</label>
                    <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91 97472 77233"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60"
                      style={{ ...fieldStyle, borderBottomColor: errors.phone ? "#ef4444" : undefined }} />
                    {errors.phone && <p className="mt-1.5 text-[11px] font-mono" style={{ color: "#ef4444" }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="country" className={labelCls} style={{ color: C.muted }}>Destination of interest</label>
                    <input id="country" name="country" value={form.country} onChange={onChange} placeholder="UK, Canada, Australia…"
                      className="w-full py-2.5 text-[15px] outline-none placeholder:opacity-60" style={fieldStyle} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={labelCls} style={{ color: C.muted }}>Message *</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} placeholder="Tell us about your goals…"
                    className="w-full py-2.5 text-[15px] outline-none resize-none placeholder:opacity-60"
                    style={{ ...fieldStyle, borderBottomColor: errors.message ? "#ef4444" : undefined }} />
                  {errors.message && <p className="mt-1.5 text-[11px] font-mono" style={{ color: "#ef4444" }}>{errors.message}</p>}
                </div>
                <button type="submit" disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[13px] font-semibold transition-all hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: C.ink, color: C.bg }}>
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="lg:col-span-5 ct-rev space-y-10">
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
                      {o.addr && <p className="text-[13px] leading-relaxed mt-0.5" style={{ color: C.muted }}>{o.addr}</p>}
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
