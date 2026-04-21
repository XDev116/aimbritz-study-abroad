function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden" style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: "clamp(100px,12vw,180px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <Eyebrow><span style={{ color: "var(--ember)" }}>Final call</span></Eyebrow>
        <h2 className="t-display mt-10" style={{ fontSize: "clamp(3rem, 10vw, 12rem)", color: "var(--paper)" }}>
          Your turn,<br/>
          <span className="t-display-serif" style={{ color: "var(--ember)" }}>isn't it?</span>
        </h2>
        <p className="mt-10 max-w-xl text-[17px] leading-relaxed" style={{ color: "rgba(248,244,235,0.7)" }}>
          Book a 30-minute free session. No commitment. Walk away with a clear shortlist of 5 universities that fit your profile, goals and budget.
        </p>
        <div className="mt-12 flex flex-wrap gap-3 items-center">
          <Magnetic strength={0.25}>
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors" style={{ background: "var(--ember)", color: "var(--ink)" }}>
              Book free session
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
            </a>
          </Magnetic>
          <a href="#" className="inline-flex items-center gap-2 rounded-full px-7 py-4 border text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-white/5 transition-colors" style={{ borderColor: "rgba(248,244,235,0.3)" }}>
            Or call +91 97472 77233
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-28 pt-8 grid grid-cols-12 gap-6 border-t" style={{ borderColor: "rgba(248,244,235,0.15)" }}>
        <div className="col-span-12 md:col-span-4">
          <span className="font-sans font-black text-2xl">aimbritz<span style={{ color: "var(--ember)" }}>.</span></span>
          <p className="mt-4 text-[13px] leading-relaxed" style={{ color: "rgba(248,244,235,0.55)" }}>
            Study abroad consultancy · Kochi, Kerala · Since 2020. Guiding students into 500+ universities across 14 countries.
          </p>
        </div>
        {[
          ["Explore", ["Countries", "Universities", "Services", "Stories"]],
          ["Company", ["About", "Careers", "Press", "Contact"]],
          ["Reach us", ["hello@aimbritz.com", "+91 97472 77233", "WhatsApp", "Instagram"]],
        ].map(([h, items]) => (
          <div key={h} className="col-span-6 md:col-span-2">
            <p className="t-eyebrow" style={{ color: "var(--ember)" }}>{h}</p>
            <ul className="mt-4 space-y-2 text-[13px]" style={{ color: "rgba(248,244,235,0.7)" }}>
              {items.map((it) => <li key={it}><a href="#" className="hover:text-ember transition-colors">{it}</a></li>)}
            </ul>
          </div>
        ))}
        <div className="col-span-12 md:col-span-2 flex md:justify-end">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-50 self-end">
            © 2026 Aimbritz<br/>Built with care.
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;
