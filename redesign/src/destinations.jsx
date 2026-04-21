const { useEffect: useED, useRef: useRefD, useState: useStD } = React;

// Compact destinations — airport split-flap feel with single-line rows
function Destinations() {
  const [hover, setHover] = useStD(0);
  const c = COUNTRIES[hover];

  return (
    <section
      id="countries"
      className="relative"
      style={{
        paddingTop: "clamp(100px, 12vw, 180px)",
        paddingBottom: "clamp(100px, 12vw, 180px)",
        background: "var(--paper)",
      }}
    >
      <SectionMark num="04" label="Departures Board" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 md:col-span-5">
            <Reveal><Eyebrow>Departures · {COUNTRIES.length} countries</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="t-display mt-6" style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)" }}>
                Where will<br/>
                <span className="t-display-serif" style={{ color: "var(--ember)" }}>you land</span><br/>
                next fall?
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-10 flex flex-col justify-end">
            <Reveal delay={260}>
              <p className="text-[15px] md:text-[17px] text-ink-2 leading-relaxed max-w-lg">
                Hover any row to preview the country. Each line is a live board — fees, intake, top course. Tap a row to open its dossier.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Board */}
        <div className="grid grid-cols-12 gap-6">
          {/* Preview pane */}
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <div
              className="relative w-full overflow-hidden sticky"
              style={{ aspectRatio: "4/5", background: "var(--paper-3)", border: "1px solid var(--hairline)", top: "120px" }}
            >
              <img
                key={c.code}
                src={c.hero}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ animation: "destFade 700ms cubic-bezier(0.22,1,0.36,1)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(17,17,19,0.75))" }} />
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                <FlagChip code={c.code} />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--paper)" }}>DEST · {String(hover + 1).padStart(2, "0")}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4" style={{ color: "var(--paper)" }}>
                <FlipText text={c.name.toUpperCase()} className="font-sans font-black block" style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.4rem)", letterSpacing: "-0.025em", lineHeight: 1 }} />
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div>
                    <span className="t-eyebrow opacity-70">UNIS</span>
                    <p className="font-sans font-black text-lg tabular-nums mt-1">{c.unis}</p>
                  </div>
                  <div>
                    <span className="t-eyebrow opacity-70">TUITION</span>
                    <p className="font-sans font-bold text-[13px] mt-1">{c.cost}</p>
                  </div>
                  <div>
                    <span className="t-eyebrow opacity-70">INTAKE</span>
                    <p className="font-sans font-bold text-[13px] mt-1">{c.intake}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="col-span-12 md:col-span-7 order-1 md:order-2">
            <div className="border-t" style={{ borderColor: "var(--hairline)" }}>
              {/* Header row */}
              <div className="grid grid-cols-12 gap-3 py-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-3 border-b" style={{ borderColor: "var(--hairline)" }}>
                <div className="col-span-1">Flag</div>
                <div className="col-span-5">Destination</div>
                <div className="col-span-2">Unis</div>
                <div className="col-span-2">Intake</div>
                <div className="col-span-2 text-right">Status</div>
              </div>
              {COUNTRIES.map((co, i) => {
                const active = hover === i;
                return (
                  <a
                    key={co.code}
                    href="#"
                    onMouseEnter={() => setHover(i)}
                    className="grid grid-cols-12 gap-3 items-center py-4 border-b group transition-colors relative"
                    style={{
                      borderColor: "var(--hairline)",
                      background: active ? "var(--paper-2)" : "transparent",
                    }}
                  >
                    <div className="col-span-1">
                      <FlagChip code={co.code} />
                    </div>
                    <div className="col-span-5 flex items-baseline gap-3">
                      <span className="font-sans font-black uppercase tracking-[-0.01em] text-[18px] md:text-[22px] group-hover:translate-x-2 transition-transform" style={{ color: active ? "var(--ember)" : "var(--ink)" }}>
                        {co.name}
                      </span>
                      <span className="font-mono text-[10px] text-ink-3 tracking-[0.15em] hidden md:inline">{co.topCourse}</span>
                    </div>
                    <div className="col-span-2 font-sans font-bold tabular-nums">{co.unis}</div>
                    <div className="col-span-2 font-mono text-[11px] tracking-[0.15em] uppercase">{co.intake}</div>
                    <div className="col-span-2 text-right">
                      <span className="inline-flex items-center gap-1.5 t-eyebrow" style={{ color: active ? "var(--ember)" : "var(--ink-3)" }}>
                        {active ? "Boarding" : "Open"}
                        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: active ? "var(--ember)" : "var(--ink-3)" }} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes destFade { from { opacity: 0; transform: scale(1.05); } to { opacity: 1; transform: scale(1); } }`}</style>
    </section>
  );
}
window.Destinations = Destinations;
