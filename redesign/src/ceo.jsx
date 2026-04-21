function CEO() {
  const tips = [
    "Apply early — top programs close months before deadlines.",
    "Your SOP should answer: why you, why now, why here.",
    "A 7.5 IELTS opens doors a 7.0 doesn't. Worth the extra month.",
    "Gap years aren't gaps — tell that story confidently.",
    "Research funding exists at every level. Ask us.",
  ];
  return (
    <section id="ceo" className="relative overflow-hidden"
      style={{ paddingTop: "clamp(100px,12vw,180px)", paddingBottom: "clamp(100px,12vw,180px)" }}>
      <SectionMark num="09" label="Your guide" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow>Meet your guide</Eyebrow>
          <h2 className="t-display mt-8" style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}>
            <span className="t-display-serif" style={{ color: "var(--ember)" }}>Your advisor</span><br/>
            answers on the<br/>first ring.
          </h2>
          <p className="mt-8 max-w-md text-[17px] text-ink-2 leading-relaxed">
            Al Ameen, founder & CEO — former student abroad, now guiding 5,000+ students to the world's best universities. Every file gets his personal sign-off.
          </p>
          <div className="mt-10 relative p-7 bg-paper-3" style={{ border: "1px solid var(--hairline)" }}>
            <span className="absolute -top-px -left-px w-5 h-5" style={{ borderTop: "2px solid var(--ember)", borderLeft: "2px solid var(--ember)" }} />
            <span className="absolute -top-px -right-px w-5 h-5" style={{ borderTop: "2px solid var(--ember)", borderRight: "2px solid var(--ember)" }} />
            <span className="absolute -bottom-px -left-px w-5 h-5" style={{ borderBottom: "2px solid var(--ember)", borderLeft: "2px solid var(--ember)" }} />
            <span className="absolute -bottom-px -right-px w-5 h-5" style={{ borderBottom: "2px solid var(--ember)", borderRight: "2px solid var(--ember)" }} />
            <p className="t-eyebrow mb-5" style={{ color: "var(--ember)" }}>Advisor tips</p>
            <div className="space-y-4">
              {tips.map((t, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-[11px] text-ink-3 mt-0.5 flex-shrink-0">{String(i+1).padStart(2,"0")}</span>
                  <p className="text-[14px] text-ink-2 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-center">
          <div className="relative w-[320px] md:w-[380px] aspect-[3/4] overflow-hidden" style={{ background: "var(--paper-3)", border: "1px solid var(--hairline)" }}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80" alt="Al Ameen" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "grayscale(0.15)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 45%, rgba(17,17,19,0.8))" }} />
            <div className="absolute bottom-4 left-4 right-4" style={{ color: "var(--paper)" }}>
              <p className="t-eyebrow" style={{ color: "var(--ember)" }}>Founder · CEO</p>
              <p className="font-sans font-black text-[24px] uppercase mt-1 tracking-[-0.02em]">Al Ameen</p>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70 mt-0.5">AB / ADVISOR / SINCE 2020</p>
            </div>
            {/* Rotating circular badge */}
            <div className="absolute top-4 right-4 w-[90px] h-[90px] rounded-full flex items-center justify-center" style={{ background: "var(--ember)" }}>
              <span className="font-serif italic font-black text-xl">ab.</span>
              <span aria-hidden className="absolute inset-0 rounded-full" style={{
                background: "conic-gradient(from 0deg, transparent, rgba(17,17,19,0.12), transparent)",
                animation: "spinSlow 18s linear infinite",
              }} />
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spinSlow { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
window.CEO = CEO;
