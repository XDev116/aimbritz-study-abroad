const { useLayoutEffect: useLST, useRef: useRefST, useEffect: useEST } = React;

function Stats() {
  const ref = useRefST(null);
  const textRef = useRefST(null);
  const sweepRef = useRefST(null);

  useLST(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 70%", end: "bottom 30%", scrub: 1 },
      });
      tl.fromTo(sweepRef.current, { xPercent: -101 }, { xPercent: 0, duration: 0.35 })
        .to(sweepRef.current, { xPercent: 0, duration: 0.3 })
        .to(sweepRef.current, { xPercent: 101, duration: 0.35 });
      ScrollTrigger.create({
        trigger: ref.current, start: "top 40%", end: "bottom 60%",
        onToggle: (s) => s.isActive ? textRef.current.classList.add("inv") : textRef.current.classList.remove("inv"),
      });
      gsap.utils.toArray(".stat-num").forEach((el) => {
        const t = Number(el.dataset.t);
        const o = { v: 0 };
        gsap.to(o, { v: t, duration: 2.4, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => el.textContent = Math.floor(o.v).toLocaleString(),
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden"
      style={{ paddingTop: "clamp(100px,12vw,180px)", paddingBottom: "clamp(100px,12vw,180px)" }}>
      <SectionMark num="07" label="Proof" />
      <div ref={sweepRef} aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ transform: "translateX(-101%)", background: "var(--ink)" }} />
      <div ref={textRef} className="max-w-[1400px] mx-auto px-6 md:px-10 relative" style={{ color: "var(--ink)", transition: "color 320ms" }}>
        <style>{`.inv, .inv .sub { color: var(--paper) !important; } .inv .pp { color: var(--ember-2) !important; }`}</style>
        <Eyebrow>Proof in numbers</Eyebrow>
        <h2 className="t-display mt-8" style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}>
          A track record<br/>
          <span className="t-display-serif pp" style={{ color: "var(--ember)" }}>written in students.</span>
        </h2>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 border-t" style={{ borderColor: "var(--ember)" }}>
          {[
            { v: 7, s: "+", k: "Years" },
            { v: 14, s: "+", k: "Countries" },
            { v: 500, s: "+", k: "Universities" },
            { v: 5246, s: "", k: "Students placed" },
          ].map((st, i) => (
            <div key={i} className="pt-8">
              <div className="flex items-baseline gap-1 mb-5">
                <span className="stat-num font-sans font-black tabular-nums" data-t={st.v} style={{ fontSize: "clamp(3rem, 8vw, 8rem)", lineHeight: 0.85, letterSpacing: "-0.04em" }}>0</span>
                <span className="font-sans font-black pp" style={{ color: "var(--ember)", fontSize: "clamp(1.8rem, 4vw, 4rem)" }}>{st.s}</span>
              </div>
              <p className="t-eyebrow sub opacity-70">{st.k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stats = Stats;
