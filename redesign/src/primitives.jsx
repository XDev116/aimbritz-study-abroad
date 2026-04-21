const { useEffect, useLayoutEffect, useRef, useState, useMemo } = React;

// Eyebrow with lime tick
function Eyebrow({ children, align = "left", color = "var(--ember)" }) {
  const content = (
    <>
      <span style={{ background: color }} className="inline-block h-px w-10 align-middle mr-3" />
      <span className="t-eyebrow" style={{ color }}>{children}</span>
    </>
  );
  return (
    <div className={`flex items-center ${align === "center" ? "justify-center" : ""}`}>
      {align === "center" ? (
        <>
          <span style={{ background: color }} className="inline-block h-px w-10 mr-3" />
          <span className="t-eyebrow" style={{ color }}>{children}</span>
          <span style={{ background: color }} className="inline-block h-px w-10 ml-3" />
        </>
      ) : content}
    </div>
  );
}

// Chapter/section label, top corner
function SectionMark({ num, label }) {
  return (
    <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10 flex flex-col items-end gap-1 pointer-events-none select-none">
      <span className="font-mono text-[10px] tracking-[0.3em] text-ink-3">/{num}</span>
      <span className="font-mono text-[10px] tracking-[0.3em] text-ink-3">{label}</span>
    </div>
  );
}

// Masked line reveal — animates on scroll into view
function useInView(ref, threshold = 0.25) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
  return shown;
}

// Reveal: clip-path wipe for hero lines
function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {} }) {
  const ref = useRef(null);
  const shown = useInView(ref, 0.2);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: shown ? "translateY(0)" : "translateY(46px)",
        opacity: shown ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 1s ${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </Tag>
  );
}

// Magnetic button wrapper
function Magnetic({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => (el.style.transform = "translate(0,0)");
    const parent = el.parentElement;
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
  return (
    <span className={`inline-block transition-transform duration-300 ease-out ${className}`} ref={ref}>
      {children}
    </span>
  );
}

// Marquee (pure CSS clone track)
function Marquee({ children, reverse = false, speed = 40, className = "" }) {
  return (
    <div className={`overflow-hidden marquee-mask ${className}`}>
      <div
        className={`marquee-track ${reverse ? "rev" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="inline-flex items-center">{children}</div>
        <div className="inline-flex items-center" aria-hidden>{children}</div>
      </div>
    </div>
  );
}

// Split-flap / airport departure board single character
function FlipChar({ ch }) {
  const [cur, setCur] = useState(ch);
  const [prev, setPrev] = useState(ch);
  const [flipping, setFlipping] = useState(false);
  useEffect(() => {
    if (ch === cur) return;
    setPrev(cur);
    setFlipping(true);
    const t = setTimeout(() => {
      setCur(ch);
      setFlipping(false);
    }, 380);
    return () => clearTimeout(t);
  }, [ch]);
  return (
    <span className="flip-cell">
      <span className="flip-inner" style={{
        transform: flipping ? "translateY(-100%)" : "translateY(0)",
      }}>
        <span style={{ display: "block", height: "0.95em", lineHeight: "0.95em" }}>{prev}</span>
        <span style={{ display: "block", height: "0.95em", lineHeight: "0.95em" }}>{cur}</span>
      </span>
    </span>
  );
}

function FlipText({ text, className = "", style = {} }) {
  const chars = text.split("");
  return (
    <span className={className} style={style}>
      {chars.map((c, i) => (
        <FlipChar key={i + c + i} ch={c === " " ? "\u00A0" : c} />
      ))}
    </span>
  );
}

// Placeholder image (subtle stripes) when real asset missing
function Plate({ label, ratio = "16/9", style = {} }) {
  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        aspectRatio: ratio,
        background:
          "repeating-linear-gradient(45deg, rgba(17,17,19,0.04) 0 8px, rgba(17,17,19,0.0) 8px 18px), var(--paper-3)",
        border: "1px solid var(--hairline)",
        ...style,
      }}
    >
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-[0.3em] text-ink-3 uppercase">
        {label}
      </span>
    </div>
  );
}

// Corner brackets (Lando motif)
function CornerFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute -top-px -left-px w-4 h-4" style={{ borderTop: "2px solid var(--ember)", borderLeft: "2px solid var(--ember)" }} />
      <span className="absolute -top-px -right-px w-4 h-4" style={{ borderTop: "2px solid var(--ember)", borderRight: "2px solid var(--ember)" }} />
      <span className="absolute -bottom-px -left-px w-4 h-4" style={{ borderBottom: "2px solid var(--ember)", borderLeft: "2px solid var(--ember)" }} />
      <span className="absolute -bottom-px -right-px w-4 h-4" style={{ borderBottom: "2px solid var(--ember)", borderRight: "2px solid var(--ember)" }} />
      {children}
    </div>
  );
}

// Primary CTA
function BtnPrimary({ children, href = "#", icon = true }) {
  return (
    <Magnetic strength={0.25}>
      <a
        href={href}
        className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-ember hover:text-ink transition-colors"
      >
        {children}
        {icon && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M7 17L17 7M17 7H8M17 7V16" />
          </svg>
        )}
      </a>
    </Magnetic>
  );
}
function BtnGhost({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-paper-3 transition-colors"
      style={{ borderColor: "rgba(17,17,19,0.4)" }}
    >
      {children}
    </a>
  );
}

// Tiny 3-letter ISO flag chip (no emoji)
function FlagChip({ code }) {
  return (
    <span
      className="font-mono font-bold text-[10px] tracking-[0.18em] px-1.5 py-0.5"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
    >
      {code}
    </span>
  );
}

window.Eyebrow = Eyebrow;
window.SectionMark = SectionMark;
window.useInView = useInView;
window.Reveal = Reveal;
window.Magnetic = Magnetic;
window.Marquee = Marquee;
window.FlipText = FlipText;
window.FlipChar = FlipChar;
window.Plate = Plate;
window.CornerFrame = CornerFrame;
window.BtnPrimary = BtnPrimary;
window.BtnGhost = BtnGhost;
window.FlagChip = FlagChip;
