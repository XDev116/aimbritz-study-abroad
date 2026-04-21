const { useRef: useRefB, useLayoutEffect: useLB } = React;

const SIG_PATHS = [
  "M 20 55 C 24 35, 38 22, 54 28 C 68 34, 68 54, 54 62 C 40 70, 24 60, 26 48 C 28 36, 44 26, 58 32",
  "M 64 30 C 78 18, 100 16, 108 30 C 116 44, 104 62, 88 64 C 72 66, 62 52, 70 42",
  "M 114 28 C 126 16, 148 14, 154 30 C 160 46, 144 64, 128 64 C 114 64, 108 52, 118 42",
  "M 160 28 L 164 80",
  "M 172 18 C 182 8, 198 10, 200 26 C 202 42, 188 60, 174 62 C 162 64, 158 52, 164 42 C 170 32, 186 28, 196 36",
  "M 204 26 C 216 10, 242 8, 246 26 C 250 44, 232 66, 214 66 C 200 66, 196 52, 206 42 C 218 30, 240 30, 244 44",
  "M 252 26 C 264 10, 286 10, 288 28 C 290 46, 272 66, 256 66 C 244 66, 240 54, 250 44 C 262 32, 284 34, 284 50 L 282 82 C 280 96, 268 100, 256 94",
  "M 30 82 C 100 92, 200 90, 282 76",
];

function BrandPromise() {
  const sectionRef = useRefB(null);
  const sigFixedRef = useRefB(null);
  const sigTargetRef = useRefB(null);
  const pathRefs = SIG_PATHS.map(() => useRefB(null));

  useLB(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const sigFixed = sigFixedRef.current;
    const sigTarget = sigTargetRef.current;
    const section = sectionRef.current;
    if (!sigFixed || !sigTarget || !section) return;

    // Measure path lengths
    const pathEls = pathRefs.map(r => r.current).filter(Boolean);
    const lengths = pathEls.map(p => p.getTotalLength());
    pathEls.forEach((p, i) => {
      gsap.set(p, { strokeDasharray: lengths[i], strokeDashoffset: lengths[i] });
    });

    // Start: fixed, centered in viewport, invisible
    gsap.set(sigFixed, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 1.6,
      zIndex: 80,
      pointerEvents: "none",
    });

    // Hide the in-flow placeholder until the end
    gsap.set(sigTarget, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        // Start trigger is the hero section (first section before brand promise)
        trigger: section.previousElementSibling || section,
        start: "bottom 80%",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    // Phase 1 (scroll 0→30%): signature fades in + draws
    tl.to(sigFixed, { opacity: 1, scale: 1, duration: 0.15, ease: "power2.out" }, 0);
    pathEls.forEach((p, i) => {
      const start = 0.05 + i * 0.025;
      tl.to(p, { strokeDashoffset: 0, duration: 0.06, ease: "none" }, start);
    });

    // Phase 2 (scroll 50→100%): signature flies from center to brand promise target
    tl.add(() => {
      // Dynamically measure target position each time this fires
      const r = sigTarget.getBoundingClientRect();
      const fw = sigFixed.offsetWidth;
      const fh = sigFixed.offsetHeight;
      gsap.to(sigFixed, {
        top: r.top + window.scrollY + r.height / 2,
        left: r.left + fw / 2,
        xPercent: -50,
        yPercent: -50,
        scale: 0.85,
        position: "absolute",
        duration: 0.6,
        ease: "expo.inOut",
        onComplete: () => {
          // Swap: hide fixed, show in-flow
          sigFixed.style.display = "none";
          gsap.set(sigTarget, { opacity: 1 });
        },
      });
    }, 0.55);

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--paper-2)",
        paddingTop: "clamp(100px, 12vw, 180px)",
        paddingBottom: "clamp(100px, 12vw, 180px)",
      }}
    >
      <SectionMark num="02" label="The Promise" />

      <span aria-hidden className="absolute pointer-events-none select-none font-serif italic"
        style={{ top: "6%", left: "6%", fontSize: "28vw", color: "rgba(17,17,19,0.04)", lineHeight: 1 }}>
        &ldquo;
      </span>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative text-center">
        <Reveal><Eyebrow align="center">The Promise</Eyebrow></Reveal>

        <div className="mt-10">
          <Reveal>
            <p className="t-display text-ink" style={{ fontSize: "clamp(2rem, 6vw, 6.2rem)" }}>We don't place</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="t-display text-ink" style={{ fontSize: "clamp(2rem, 6vw, 6.2rem)" }}>students abroad.</p>
          </Reveal>
          <Reveal delay={240}>
            <p className="t-display-serif mt-4" style={{ color: "var(--ember)", fontSize: "clamp(2rem, 6vw, 6.2rem)" }}>
              We build global futures.
            </p>
          </Reveal>
        </div>

        {/* Signed area — signature lands here */}
        <Reveal delay={380}>
          <div className="mt-14 flex flex-col items-center gap-3">
            {/* In-flow placeholder — invisible until signature lands */}
            <div ref={sigTargetRef} style={{ opacity: 0, transition: "opacity 0.4s" }}>
              <svg viewBox="0 0 310 110" fill="none" style={{ width: 220, height: "auto", display: "block" }}>
                {SIG_PATHS.map((d, i) => (
                  <path key={i} d={d} stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                ))}
              </svg>
            </div>
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-ink-3">
              Al Ameen · Founder · Aimbritz
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-4">
              <span>42 advisors globally</span>
              <span>·</span>
              <span>Since 2020</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Fixed signature that draws in hero and flies here */}
      <div ref={sigFixedRef}>
        <svg viewBox="0 0 310 110" fill="none" style={{ width: 260, height: "auto", display: "block", overflow: "visible" }}>
          {SIG_PATHS.map((d, i) => (
            <path
              key={i}
              ref={pathRefs[i]}
              d={d}
              stroke="var(--ink)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}

window.BrandPromise = BrandPromise;
