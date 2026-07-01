import Image from "next/image";

const DIR = "/images/Partnering Universities";
const logos = [
  { src: `${DIR}/liverpool.webp`,       alt: "University of Liverpool" },
  { src: `${DIR}/surrey.webp`,          alt: "University of Surrey" },
  { src: `${DIR}/queens-belfast.webp`,  alt: "Queen's University Belfast" },
  { src: `${DIR}/heriot-watt.webp`,     alt: "Heriot-Watt University" },
  { src: `${DIR}/aston.webp`,           alt: "Aston University" },
  { src: `${DIR}/constructor.svg`,      alt: "Constructor University" },
  { src: `${DIR}/kedge-dark.svg`,       alt: "KEDGE Business School" },
  { src: `${DIR}/INSEEC.webp`,          alt: "INSEEC Business School" },
  { src: `${DIR}/gisma.webp`,           alt: "GISMA Business School" },
  { src: `${DIR}/ueas.webp`,            alt: "University of Europe for Applied Sciences" },
  { src: `${DIR}/ucd.webp`,             alt: "University College Dublin" },
  { src: `${DIR}/ucc.webp`,             alt: "University College Cork" },
  { src: `${DIR}/melbourne.webp`,       alt: "University of Melbourne" },
  { src: `${DIR}/sydney.webp`,          alt: "University of Sydney" },
  { src: `${DIR}/waterloo.webp`,        alt: "University of Waterloo" },
  { src: `${DIR}/alberta.webp`,         alt: "University of Alberta" },
];

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
              style={{ width: "clamp(120px, 14vw, 180px)", height: 70 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={64}
                className="object-contain max-h-[56px] w-auto"
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
