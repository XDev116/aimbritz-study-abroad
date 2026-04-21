function Universities() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--paper-2)",
        paddingTop: "clamp(100px, 12vw, 180px)",
        paddingBottom: "clamp(100px, 12vw, 180px)",
      }}
    >
      <SectionMark num="05" label="The Network" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <Eyebrow>The Network</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="t-display mt-8" style={{ fontSize: "clamp(4rem, 15vw, 17rem)", lineHeight: 0.82 }}>
            Portfolio<span style={{ color: "var(--ember)" }}>.</span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-[17px] text-ink-2 leading-relaxed">
            500+ universities. 14 countries. Every tier, every discipline, every budget — and a partnership desk on every campus.
          </p>
        </Reveal>
      </div>

      {/* Running names */}
      <div className="mt-20">
        <Marquee speed={55}>
          {UNIVERSITIES.concat(UNIVERSITIES).map((u, i) => (
            <span
              key={i}
              className="inline-flex items-baseline gap-4 mx-8 font-sans font-black uppercase tracking-[-0.02em] whitespace-nowrap"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                color: "transparent",
                WebkitTextStroke: "1.2px rgba(17,17,19,0.45)",
              }}
            >
              {u.name}
              <span style={{ WebkitTextStroke: 0, color: "var(--ember)", fontSize: "0.35em" }}>◆</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {UNIVERSITIES.map((u, i) => (
          <a key={u.id} href="#" className="group relative overflow-hidden" style={{ aspectRatio: "4/5", background: "var(--paper-3)", border: "1px solid var(--hairline)" }}>
            <img src={u.photo} alt={u.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" style={{ filter: "grayscale(0.35)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(17,17,19,0.75))" }} />

            <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--paper)" }}>
                #{String(u.rank).padStart(3, "0")} · QS
              </span>
              <FlagChip code={u.country.slice(0,2).toUpperCase()} />
            </div>

            <div className="absolute left-4 right-4 bottom-4" style={{ color: "var(--paper)" }}>
              <p className="t-eyebrow" style={{ color: "var(--ember)" }}>{u.city} · {u.country}</p>
              <h3 className="font-sans font-black uppercase tracking-[-0.02em] mt-1.5" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.7rem)", lineHeight: 1.05 }}>
                {u.name}
              </h3>
              <div className="mt-3 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase opacity-80">
                <span>{u.accept} accept</span>
                <span>·</span>
                <span>{u.type}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-10 flex items-center justify-between border-t pt-6" style={{ borderColor: "var(--hairline)" }}>
        <span className="t-eyebrow text-ink-3">Showing 6 of 500+</span>
        <a href="#" className="inline-flex items-center gap-2 font-sans font-bold uppercase text-[12px] tracking-[0.12em] hover:text-ember transition-colors">
          Browse all
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </a>
      </div>
    </section>
  );
}
window.Universities = Universities;
