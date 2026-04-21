const { useLayoutEffect: useLJ, useRef: useRefJ } = React;

const JOURNEY = [
  { n: "01", tag: "Consultation", title: "Discover your path",  copy: "Advisors decode your ambition into a roadmap — in 30 minutes, free.", stat: "30-min free" },
  { n: "02", tag: "Selection",    title: "Match the best",       copy: "Your profile paired with 500+ partner universities.",                 stat: "500+ partners" },
  { n: "03", tag: "Application",  title: "Craft your story",     copy: "SOPs, LORs, essays — refined draft by draft.",                        stat: "98% success" },
  { n: "04", tag: "Visa",         title: "Your ticket out",      copy: "Filing, mock interviews, housing and flight.",                        stat: "95% approval" },
  { n: "05", tag: "Arrival",      title: "Welcome home abroad",  copy: "On-the-ground alumni, sim, bank account, first-week meetup.",         stat: "5,000+ abroad" },
];

function Journey() {
  const ref = useRefJ(null);
  const trackRef = useRefJ(null);

  useLJ(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    const track = trackRef.current;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const dist = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -dist, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: () => `+=${dist}`, pin: true, scrub: 0.8 },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--paper)" }}>
      <SectionMark num="06" label="The Journey" />
      <div ref={trackRef} className="flex lg:flex-row flex-col lg:w-max lg:h-screen">
        {JOURNEY.map((p, i) => (
          <div key={p.n} className="relative w-screen lg:flex-shrink-0 lg:h-screen h-[100vh] flex items-center"
               style={{ background: i % 2 ? "var(--paper-2)" : "var(--paper)" }}>
            <span aria-hidden className="absolute right-[-4vw] top-1/2 -translate-y-1/2 font-sans font-black pointer-events-none select-none"
                  style={{ fontSize: "clamp(14rem, 34vw, 44rem)", color: "rgba(17,17,19,0.04)", letterSpacing: "-0.06em", lineHeight: 1 }}>
              {p.n}
            </span>
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "var(--ember)" }} />
            <div className="relative z-10 px-10 lg:px-20 max-w-2xl">
              <p className="t-eyebrow" style={{ color: "var(--ember)" }}>{p.n} · {p.tag}</p>
              <h3 className="t-display mt-6" style={{ fontSize: "clamp(2.6rem, 6.5vw, 6.5rem)" }}>{p.title}</h3>
              <p className="mt-6 text-[17px] text-ink-2 leading-relaxed max-w-md">{p.copy}</p>
              <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border" style={{ borderColor: "var(--ember)", background: "rgba(123,195,20,0.1)" }}>
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--ember)" }} />
                <span className="t-eyebrow text-ink">{p.stat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Journey = Journey;
