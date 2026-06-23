"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const COUNTRIES = [
  { code: "GB", name: "United Kingdom", unis: 142, slug: "uk" },
  { code: "CA", name: "Canada", unis: 96, slug: "canada" },
  { code: "AU", name: "Australia", unis: 68, slug: "australia" },
  { code: "US", name: "United States", unis: 182, slug: "usa" },
  { code: "IE", name: "Ireland", unis: 24, slug: "ireland" },
  { code: "DE", name: "Germany", unis: 58, slug: "germany" },
  { code: "FR", name: "France", unis: 41, slug: "france" },
  { code: "NZ", name: "New Zealand", unis: 35, slug: "new-zealand" },
];

const SERVICES = [
  { n: "01", t: "Profile Evaluation", d: "Match your marks, goals, budget with the right universities." },
  { n: "02", t: "Application Craft", d: "SOPs, LORs, essays — refined to admissions standard." },
  { n: "03", t: "Test Prep", d: "IELTS · TOEFL · GRE · GMAT · SAT — with certified coaches." },
  { n: "04", t: "Visa & Travel", d: "End-to-end visa filing, mock interviews, flight & housing." },
  { n: "05", t: "Scholarships", d: "Merit, need, external — we file on your behalf." },
  { n: "06", t: "Post-Arrival", d: "Banking, sim, orientation, and our alumni network on the ground." },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState<"explore" | "services" | null>(null);
  const [menu, setMenu] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" }));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => { window.removeEventListener("scroll", onScroll); clearInterval(id); };
  }, []);

  return (
    <>
      {/* Top utility strip */}
      <div
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 md:px-8 h-7 font-mono text-[10px] tracking-[0.28em] uppercase border-b"
        style={{ background: "var(--paper)", borderColor: "var(--hairline)", color: "var(--ink-3)" }}
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full" style={{ background: "var(--ember)", opacity: 0.5, animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "var(--ember)" }} />
            </span>
            Taking Fall &apos;26 applications
          </span>
          <span className="hidden md:inline">Session open · 30 min</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:inline">EN / ML / HI</span>
          <span>LDN {time || "—"}</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="fixed top-7 left-0 right-0 z-40 transition-all duration-500" onMouseLeave={() => setDrawer(null)}>
        <div className={`transition-all duration-500 ${scrolled ? "mx-auto max-w-[1180px] mt-3" : "mx-0 max-w-none mt-0"}`}>
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "mx-3 rounded-full border px-4 md:px-6 h-12 shadow-[0_12px_40px_-16px_rgba(17,17,19,0.2)]"
                : "px-5 md:px-10 h-16"
            }`}
            style={{
              background: scrolled ? "rgba(252,252,250,0.92)" : "var(--paper)",
              backdropFilter: scrolled ? "blur(14px)" : "none",
              borderColor: "var(--hairline)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/aimbritz-logo-transparent.png"
                alt="AimBritz"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Center links */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { name: "Explore", key: "explore" as const, href: "/countries" },
                { name: "Services", key: "services" as const, href: "/services" },
                { name: "Stories", key: null, href: "/#story" },
                { name: "About", key: null, href: "/about" },
              ].map((item) => (
                <button
                  key={item.name}
                  onMouseEnter={() => setDrawer(item.key)}
                  onClick={() => { if (!item.key) window.location.href = item.href; }}
                  className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] hover:text-ember transition-colors group"
                >
                  {item.name}
                  {item.key && <span className="ml-1 text-[8px] opacity-60">↓</span>}
                  <span className="absolute bottom-0 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ background: "var(--ember)" }} />
                </button>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+919747277233"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 h-8 rounded-full border text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-paper-3 transition-colors"
                style={{ borderColor: "rgba(17,17,19,0.35)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Talk
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-4 h-9 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:opacity-90"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Book free session
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </Link>
              <button
                onClick={() => setMenu(!menu)}
                className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border"
                style={{ borderColor: "var(--hairline)" }}
                aria-label="Menu"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mega drawer */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${drawer ? "max-h-[420px]" : "max-h-0"}`}
          style={{ background: "var(--paper-2)", borderBottom: drawer ? "1px solid var(--hairline)" : "none" }}
        >
          <div className="max-w-[1200px] mx-auto px-8 py-10 grid grid-cols-12 gap-10">
            {drawer === "explore" && (
              <>
                <div className="col-span-4">
                  <span
                    className="inline-flex items-center px-3 py-1.5 rounded-full font-mono text-[10px] tracking-[0.22em] uppercase font-bold"
                    style={{ background: "var(--ember)", color: "var(--ink)" }}
                  >
                    Destinations · 14
                  </span>
                  <h3 className="mt-4 font-serif italic text-4xl leading-tight">Where will next<br />year take you?</h3>
                </div>
                <div className="col-span-8 grid grid-cols-3 gap-x-8 gap-y-3">
                  {COUNTRIES.map((c) => (
                    <Link key={c.code} href={`/countries/${c.slug}`} className="flex items-baseline justify-between border-b pb-2 group" style={{ borderColor: "var(--hairline)" }}>
                      <span className="font-sans font-bold uppercase tracking-[0.02em] text-[14px] group-hover:text-ember transition-colors">{c.name}</span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-ink-3">{c.unis}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {drawer === "services" && (
              <>
                <div className="col-span-4">
                  <span
                    className="inline-flex items-center px-3 py-1.5 rounded-full font-mono text-[10px] tracking-[0.22em] uppercase font-bold"
                    style={{ background: "var(--ember)", color: "var(--ink)" }}
                  >
                    What we do · 6
                  </span>
                  <h3 className="mt-4 font-serif italic text-4xl leading-tight">Full-stack guidance,<br />end to end.</h3>
                </div>
                <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-4">
                  {SERVICES.map((s) => (
                    <Link key={s.n} href="/services" className="flex gap-4 border-b pb-4 group" style={{ borderColor: "var(--hairline)" }}>
                      <span className="font-mono text-[10px] text-ember tracking-[0.25em]">{s.n}</span>
                      <div>
                        <div className="font-sans font-bold uppercase text-[13px] tracking-[0.03em] group-hover:text-ember transition-colors">{s.t}</div>
                        <div className="text-[12px] text-ink-3 mt-1 leading-relaxed">{s.d}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {menu && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setMenu(false)}>
          <div className="absolute inset-0" style={{ background: "rgba(17,17,19,0.45)", backdropFilter: "blur(6px)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-[min(420px,100%)] bg-paper p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-10">
              <Image src="/logo/aimbritz-logo-transparent.png" alt="AimBritz" width={120} height={28} className="h-7 w-auto" />
              <button onClick={() => setMenu(false)} className="text-2xl" aria-label="Close">×</button>
            </div>
            {["Explore", "Services", "Stories", "About", "Contact"].map((n) => (
              <Link key={n} href={`/${n.toLowerCase()}`} onClick={() => setMenu(false)} className="block py-3 border-b font-serif italic text-3xl" style={{ borderColor: "var(--hairline)" }}>
                {n}
              </Link>
            ))}
            <div className="mt-8 space-y-3">
              <Link href="/contact" onClick={() => setMenu(false)} className="block text-center py-4 rounded-full t-caps text-[11px]" style={{ background: "var(--ink)", color: "var(--paper)" }}>
                Book free session →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
