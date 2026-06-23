import Image from "next/image";

/* ── partner logos (public/images/Partnering Universities/) ──────── */
const logos = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/Partnering Universities/uni${i + 1}.png`,
  alt: `Partner university ${i + 1}`,
}));

/* Double the array so the strip can loop seamlessly */
const strip = [...logos, ...logos];

export function UniversityMarquee() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--paper-2)",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        paddingTop: "clamp(40px, 5vw, 64px)",
        paddingBottom: "clamp(40px, 5vw, 64px)",
      }}
    >
      {/* Eyebrow */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-8">
        <p
          className="font-mono text-[10px] tracking-[0.32em] uppercase"
          style={{ color: "var(--ember)" }}
        >
          Partnering Universities
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10"
          style={{
            width: "clamp(40px, 8vw, 120px)",
            background: "linear-gradient(to right, var(--paper-2), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10"
          style={{
            width: "clamp(40px, 8vw, 120px)",
            background: "linear-gradient(to left, var(--paper-2), transparent)",
          }}
        />

        {/* Scrolling strip */}
        <div className="marquee-strip flex items-center gap-12 md:gap-16 w-max">
          {strip.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center"
              style={{ width: "clamp(100px, 12vw, 160px)", height: 60 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="object-contain max-h-[50px] w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation — keyframes injected inline for zero-JS marquee */}
      <style>{`
        .marquee-strip {
          animation: marquee-scroll 30s linear infinite;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-strip:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
