const { useEffect: useEH, useLayoutEffect: useLH, useRef: useRefH, useState: useStH, useMemo: useMH } = React;

function Hero() {
  const heroRef = useRefH(null);
  const [active, setActive] = useStH(0);
  const [hoverIdx, setHoverIdx] = useStH(null);

  // Auto-rotate
  useEH(() => {
    const id = setInterval(() => {
      setActive((i) => (hoverIdx !== null ? i : (i + 1) % PLACEMENTS.length));
    }, 3800);
    return () => clearInterval(id);
  }, [hoverIdx]);

  // Hero intro
  useLH(() => {
    const ctx = gsap.context(() => {
      gsap.from(".h-frame", { opacity: 0, duration: 1.2, ease: "expo.out" });
      gsap.from(".h-line", { y: 80, opacity: 0, stagger: 0.12, duration: 1.2, ease: "expo.out", delay: 0.2 });
      gsap.from(".h-meta", { y: 14, opacity: 0, stagger: 0.06, duration: 0.8, ease: "expo.out", delay: 1.0 });
      gsap.from(".h-port", { y: 30, opacity: 0, stagger: 0.05, duration: 1.0, ease: "expo.out", delay: 0.5 });
      gsap.from(".h-film", { scale: 1.15, duration: 2.4, ease: "expo.out" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const p = PLACEMENTS[hoverIdx ?? active];

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: "clamp(108px,13vh,128px)",
        paddingBottom: "clamp(28px,4vh,56px)",
        minHeight: "min(100vh, 960px)",
      }}
    >
      <FlowLines />

      {/* Giant watermark numeral */}
      <span
        aria-hidden
        className="absolute pointer-events-none select-none font-sans font-black leading-none"
        style={{
          right: "-5vw",
          top: "4%",
          fontSize: "34vw",
          letterSpacing: "-0.07em",
          color: "rgba(17,17,19,0.035)",
        }}
      >
        01
      </span>

      <SectionMark num="01" label="The Masthead" />

      <div className="relative z-10 px-5 md:px-10 lg:px-14 grid grid-cols-12 gap-6 lg:gap-8">
        {/* LEFT column — the rotating headline */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-between lg:min-h-[calc(100vh-11rem)] lg:max-h-[calc(100vh-9rem)]">
          <div>
            {/* top eyebrow row */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase"
                style={{ background: "var(--ember)", color: "var(--ink)" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full" style={{ background: "var(--ink)", opacity: 0.4, animation: "ping 1.6s infinite" }} />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "var(--ink)" }} />
                </span>
                Placement {String((hoverIdx ?? active) + 1).padStart(2, "0")} / {String(PLACEMENTS.length).padStart(2, "0")}
              </span>
              <span className="t-eyebrow text-ink-3 hidden sm:inline">FILED&nbsp;·&nbsp;{p.country} BUREAU</span>
            </div>

            {/* Rotating headline — flip-board feel */}
            <div className="h-line">
              <p className="t-display text-ink leading-[0.95]" style={{ fontSize: "clamp(2rem, 5.4vw, 5.6rem)" }}>
                We sent
              </p>
            </div>

            <div className="h-line mt-0.5 relative" style={{ minHeight: "1.05em" }}>
              <FlipText
                text={p.first.toUpperCase()}
                className="t-display inline-block leading-[0.95]"
                style={{ fontSize: "clamp(2rem, 5.4vw, 5.6rem)" }}
              />
              <span className="font-serif italic ml-4" style={{ color: "var(--ember)", fontSize: "clamp(1rem, 2.2vw, 2.2rem)" }}>
                to
              </span>
            </div>

            <div className="h-line mt-0.5 overflow-hidden">
              <div key={p.uni} style={{ animation: "heroUp 0.7s cubic-bezier(0.65,0.05,0,1) both" }}>
                <span className="t-display leading-[0.95]" style={{ color: "var(--ember)", fontSize: "clamp(2.2rem, 6vw, 6.4rem)" }}>
                  {p.uni}.
                </span>
              </div>
            </div>

            {/* Subline */}
            <p className="h-line mt-5 max-w-md text-[14px] md:text-[15px] leading-relaxed text-ink-2">
              {p.course}, Class of {p.year}.&nbsp;
              <span className="text-ink-3">Every three weeks, another student boards a flight. This is the one rotating above.</span>
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <BtnPrimary href="#cta">Be the next one</BtnPrimary>
              <BtnGhost href="#story">See how we did it</BtnGhost>
            </div>
          </div>

          {/* Meta strip */}
          <div className="mt-6 pt-4 border-t flex flex-wrap gap-x-8 gap-y-2" style={{ borderColor: "var(--hairline)" }}>
            {[
              ["5,246", "placed"],
              ["500+", "universities"],
              ["14", "countries"],
              ["98%", "visa success"],
            ].map(([v, k]) => (
              <div key={k} className="h-meta flex items-baseline gap-2">
                <span className="font-sans font-black tabular-nums text-[18px]">{v}</span>
                <span className="t-eyebrow text-ink-3">{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT column — cinematic portrait + mini grid */}
        <div className="col-span-12 lg:col-span-5 relative flex flex-col lg:min-h-[calc(100vh-11rem)] lg:max-h-[calc(100vh-9rem)]">
          {/* Big portrait / film frame */}
          <div
            className="h-frame relative overflow-hidden flex-1 min-h-0"
            style={{
              aspectRatio: "3/4",
              background: "var(--paper-3)",
              border: "1px solid var(--hairline)",
            }}
          >
            <div
              className="h-film absolute inset-0"
              key={`film-${p.uni}`}
              style={{ animation: "filmSwap 1.1s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <img src={p.photo} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 45%, rgba(17,17,19,0.75) 100%)" }} />

              {/* Film frame marks — corners */}
              <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--paper)" }}>FRAME {String((hoverIdx ?? active) + 1).padStart(3, "0")}</span>
              <span className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--ember)" }}>REC</span>

              {/* Caption card */}
              <div className="absolute left-4 right-4 bottom-4 p-4 flex items-end justify-between" style={{ background: "rgba(248,244,235,0.92)", backdropFilter: "blur(6px)" }}>
                <div>
                  <p className="t-eyebrow text-ember">{p.flag} · {p.country}</p>
                  <p className="font-sans font-black text-[22px] tracking-[-0.02em] mt-1.5 uppercase">{p.name}</p>
                  <p className="text-[12px] text-ink-3 mt-0.5">{p.course}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] tracking-[0.22em] text-ink-3 uppercase">Class of</p>
                  <p className="font-sans font-black text-[24px]">{p.year}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini strip of other students */}
          <div className="mt-2 grid grid-cols-6 gap-1.5 shrink-0">
            {PLACEMENTS.map((pl, i) => {
              const isActive = i === (hoverIdx ?? active);
              return (
                <button
                  key={pl.name}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                  onFocus={() => setHoverIdx(i)}
                  aria-label={`${pl.name} at ${pl.uni}`}
                  className="h-port relative aspect-[3/4] overflow-hidden focus:outline-none"
                  style={{ border: "1px solid var(--hairline)" }}
                >
                  <img
                    src={pl.photo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                    style={{
                      filter: isActive ? "grayscale(0) contrast(1.05)" : "grayscale(1) contrast(1.08)",
                      opacity: isActive ? 1 : 0.65,
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  <span className="absolute bottom-1 left-1 font-mono text-[8px] font-bold tracking-[0.2em]" style={{ color: isActive ? "var(--paper)" : "var(--ink)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] origin-left transition-transform"
                    style={{
                      background: "var(--ember)",
                      width: "100%",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transitionDuration: isActive ? "3500ms" : "180ms",
                      transitionTimingFunction: "linear",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <p className="mt-2 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] uppercase text-ink-3 shrink-0">
            <span>Hover to pin frame</span>
            <span>Auto-cycle · 4s</span>
          </p>
        </div>
      </div>

      {/* Scroll hint — desktop only, corner position */}
      <div className="hidden lg:flex absolute left-10 bottom-5 items-center gap-3 z-10">
        <span className="w-8 h-px animate-[scrollPulseX_1.8s_ease-in-out_infinite]" style={{ background: "var(--ink-3)" }} />
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-ink-3">Scroll — the story begins</span>
      </div>

      <style>{`
        @keyframes heroUp {
          0% { transform: translateY(100%); opacity: 0; }
          60% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes filmSwap {
          0% { transform: scale(1.08); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes scrollPulseX {
          0%, 100% { opacity: 0.3; transform: scaleX(0.6); }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
