const { useState: useStR } = React;

function Reels() {
  const [hover, setHover] = useStR(null);
  const reels = [
    { t: "Oxford, day one",  c: "Priya · Kochi → Oxford",   img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" },
    { t: "Visa stamped",      c: "Ahmed · Bangalore → UK",   img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" },
    { t: "Acceptance call",   c: "Meera · Chennai → Toronto",img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
    { t: "First snow",        c: "Arjun · Kerala → Scotland",img: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80" },
    { t: "Campus tour",       c: "Neha · Mumbai → Sydney",   img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
  ];
  const fan = (i, total, h) => {
    const c = (total - 1) / 2, o = i - c;
    const base = { x: o * 68, y: Math.abs(o) * 26, r: o * 5, z: 10 - Math.abs(o) };
    if (h === null) return base;
    if (h === i) return { x: base.x, y: base.y - 28, r: 0, z: 50, s: 1.07 };
    const d = i < h ? -1 : 1;
    return { x: base.x + d * 28, y: base.y + 12, r: base.r + d * 3, z: base.z };
  };
  return (
    <section className="relative overflow-hidden"
      style={{ background: "var(--paper-2)", paddingTop: "clamp(100px,12vw,180px)", paddingBottom: "clamp(100px,12vw,180px)" }}>
      <SectionMark num="08" label="On Socials" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center mb-20">
        <Eyebrow align="center">On socials</Eyebrow>
        <h2 className="t-display mt-8" style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)" }}>
          Real students.<br/>
          <span className="t-display-serif" style={{ color: "var(--ember)" }}>Real results.</span>
        </h2>
      </div>
      <div className="relative mx-auto flex justify-center items-start" style={{ perspective: 1400, height: "min(62vh, 540px)" }} onMouseLeave={() => setHover(null)}>
        {reels.map((r, i) => {
          const f = fan(i, reels.length, hover);
          return (
            <a key={i} href="#" onMouseEnter={() => setHover(i)}
              className="absolute top-0 block w-[180px] md:w-[220px] aspect-[9/14] overflow-hidden"
              style={{
                background: "var(--paper-3)", border: "1px solid var(--hairline)",
                transform: `translate3d(${f.x}px, ${f.y}px, ${-Math.abs((reels.length-1)/2 - i)*50}px) rotate(${f.r}deg) scale(${f.s || 1})`,
                transformOrigin: "center bottom", zIndex: f.z,
                transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
                boxShadow: "0 24px 48px -20px rgba(14,14,16,0.2)",
              }}>
              <img src={r.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(248,244,235,0.15), rgba(248,244,235,0.9))" }} />
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono text-[9px] font-bold tracking-[0.25em] uppercase">
                <span>{String(i+1).padStart(2,"0")}</span>
                <span style={{ color: "var(--ember)" }}>INSTA</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <p className="font-sans font-black uppercase leading-tight text-[14px]">{r.t}</p>
                <p className="font-mono text-[9px] tracking-[0.15em] text-ink-3 mt-1 uppercase">{r.c}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
window.Reels = Reels;
