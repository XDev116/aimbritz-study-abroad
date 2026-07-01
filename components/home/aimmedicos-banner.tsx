/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function AimedicosBanner() {
  return (
    <section className="px-5 md:px-10 py-10 md:py-14" style={{ background: "var(--paper)" }}>
      <div className="max-w-[1280px] mx-auto">
        <Link
          href="/aimmedicos"
          className="group relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-7 py-7 md:px-10 md:py-8 transition-opacity hover:opacity-95"
          style={{ background: "#0a0f1a", border: "1px solid rgba(96,165,250,0.18)" }}
        >
          {/* bg texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(96,165,250,1) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,1) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          {/* subtle glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)" }} />

          {/* Left — logo + description */}
          <div className="relative flex items-center gap-5">
            <img
              src="/png/aimedicos-logo.png"
              alt="Aimmedicos"
              style={{ width: "clamp(120px,18vw,200px)", height: "auto", filter: "brightness(0) invert(1)" }}
            />
            <div className="w-px self-stretch hidden sm:block" style={{ background: "rgba(96,165,250,0.15)" }} />
            <p className="hidden sm:block text-[13px] leading-relaxed max-w-xs" style={{ color: "rgba(246,242,234,0.45)" }}>
              The official medical wing of AimBritz — MBBS, Nursing, Physiotherapy &amp; Health Sciences in Georgia, Russia, Albania, Uzbekistan &amp; more.
            </p>
          </div>

          {/* Right — tags + CTA */}
          <div className="relative flex flex-col sm:items-end gap-3 shrink-0">
            <div className="flex flex-wrap gap-1.5">
              {["MBBS Abroad", "Nursing", "Physiotherapy", "NMC Approved"].map((t) => (
                <span key={t} className="font-mono text-[8px] tracking-[0.2em] uppercase px-2.5 py-1" style={{ border: "1px solid rgba(96,165,250,0.2)", color: "rgba(96,165,250,0.6)" }}>{t}</span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 font-sans font-black uppercase tracking-[-0.01em] text-[11px] px-5 py-2.5 transition-all group-hover:gap-3" style={{ background: "#60a5fa", color: "#0a0f1a" }}>
              Explore Aimmedicos
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}