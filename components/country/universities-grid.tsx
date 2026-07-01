"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import type { University } from "@/lib/data/universities";

const DIR = "/images/Partnering Universities";
const UNI_LOGOS: Record<string, string> = {
  "University of Liverpool":                   `${DIR}/liverpool.webp`,
  "University of Surrey":                      `${DIR}/surrey.webp`,
  "Queen's University Belfast":                `${DIR}/queens-belfast.webp`,
  "Heriot-Watt University":                    `${DIR}/heriot-watt.webp`,
  "Aston University":                          `${DIR}/aston.webp`,
  "Constructor University":                    `${DIR}/constructor.svg`,
  "GISMA Business School":                     `${DIR}/gisma.webp`,
  "University of Europe for Applied Sciences": `${DIR}/ueas.webp`,
  "KEDGE Business School":                     `${DIR}/kedge-dark.svg`,
  "INSEEC Business School":                    `${DIR}/INSEEC.webp`,
  "ISC Paris Business School":                 `${DIR}/isc-paris.webp`,
  "University College Dublin":                 `${DIR}/ucd.webp`,
  "University College Cork":                   `${DIR}/ucc.webp`,
  "University of Melbourne":                   `${DIR}/melbourne.webp`,
  "University of Sydney":                      `${DIR}/sydney.webp`,
  "University of Waterloo":                    `${DIR}/waterloo.webp`,
  "University of Alberta":                     `${DIR}/alberta.webp`,
  "University of Leicester":                   `${DIR}/leicester.webp`,
  "University of Huddersfield":                `${DIR}/huddersfield-dark.svg`,
  "Coventry University":                       `${DIR}/coventry.webp`,
  "California State University":               `${DIR}/cal-state.webp`,
  "University of Arizona":                     `${DIR}/arizona.webp`,
  "Texas State University":                    `${DIR}/texas-state-dark.svg`,
  "Colorado State University":                 `${DIR}/colorado-state.webp`,
  "University of Western Australia":           `${DIR}/uwa.webp`,
  "University of Auckland":                    `${DIR}/auckland.webp`,
  "University of Canterbury":                  `${DIR}/canterbury.webp`,
  "Dublin City University":                    `${DIR}/dcu.webp`,
  "Trinity College Dublin":                    `${DIR}/rinity-dublin.webp`,
  "University of Galway":                      `${DIR}/galway.webp`,
  "Sorbonne University":                       `${DIR}/sorbonne.webp`,
  "Sciences Po":                               `${DIR}/sciences-po.webp`,
  "ESSEC Business School":                     `${DIR}/essec-dark.svg`,
  "Technical University of Munich":            `${DIR}/tu-munich.webp`,
  "Ludwig Maximilian University of Munich":    `${DIR}/lmu-munich.webp`,
  "RWTH Aachen University":                    `${DIR}/rwth-aachen.webp`,
  "University of Toronto":                     `${DIR}/toronto.webp`,
  "University of British Columbia":            `${DIR}/ubc.webp`,
  "McGill University":                         `${DIR}/mcgill-dark.svg`,
  "Université Grenoble Alpes":                 `${DIR}/grenoble-alpes.webp`,
};

function UniModal({ uni, onClose }: { uni: University; onClose: () => void }) {
  const logo = UNI_LOGOS[uni.name];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: "rgba(5,5,7,0.75)", backdropFilter: "blur(6px)" }} />

      {/* Panel */}
      <div
        className="relative w-full md:max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: "var(--paper)", scrollbarWidth: "none" }}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-60"
          style={{ color: "var(--ink)" }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="px-6 md:px-8 pt-8 pb-6" style={{ borderBottom: "1px solid var(--hairline)" }}>
          <div className="flex items-start gap-4 mb-4">
            {logo ? (
              <div style={{ height: 36, width: 130, position: "relative", flexShrink: 0 }}>
                <Image src={logo} alt={uni.name} fill className="object-contain object-left" sizes="130px" />
              </div>
            ) : (
              <span className="font-mono text-2xl">{uni.logo}</span>
            )}
          </div>
          <h2
            className="font-sans font-black uppercase tracking-[-0.025em] leading-tight mb-1"
            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", color: "var(--ink)" }}
          >
            {uni.name}
          </h2>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--ink-4)" }}>
            {uni.city} · {uni.country} · Est. {uni.established}
          </p>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-6 flex flex-col gap-6">

          {/* Quick facts */}
          <div className="grid grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
            {[
              ["Type", uni.type],
              ["Ranking", `#${uni.ranking}`],
              ["Programs", `${uni.courses.length}+`],
            ].map(([label, value]) => (
              <div key={label} className="py-4 text-center" style={{ background: "var(--paper)" }}>
                <p className="font-mono text-[8px] tracking-[0.25em] uppercase mb-1" style={{ color: "var(--ink-4)" }}>{label}</p>
                <p className="font-sans font-black" style={{ fontSize: "1rem", color: "var(--ink)" }}>{value}</p>
              </div>
            ))}
          </div>

          {/* About */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-2" style={{ color: "var(--ember)" }}>About</p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>{uni.description}</p>
          </div>

          {/* Top courses */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-3" style={{ color: "var(--ember)" }}>Top Programs</p>
            <div className="flex flex-wrap gap-2">
              {uni.courses.slice(0, 6).map((c) => (
                <span key={c.id} className="font-mono text-[9px] tracking-[0.15em] uppercase px-2.5 py-1" style={{ border: "1px solid var(--hairline)", color: "var(--ink-3)" }}>
                  {c.name} · {c.degree}
                </span>
              ))}
            </div>
          </div>

          {/* Scholarships */}
          {uni.scholarships.length > 0 && (
            <div>
              <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-3" style={{ color: "var(--ember)" }}>Scholarships</p>
              <ul className="flex flex-col">
                {uni.scholarships.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 py-2.5" style={{ borderTop: "1px solid var(--hairline)" }}>
                    <span style={{ color: "var(--ember)", fontSize: "10px", marginTop: 2 }}>✦</span>
                    <span className="font-mono text-[10px] tracking-[0.06em]" style={{ color: "var(--ink-3)" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="px-6 md:px-8 pb-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 font-sans font-black uppercase tracking-[-0.01em] text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--ember)", color: "#0E0E10" }}
            onClick={onClose}
          >
            Apply Now <ArrowRight size={14} />
          </Link>
          <a
            href={uni.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 font-sans font-black uppercase tracking-[-0.01em] text-sm transition-opacity hover:opacity-70"
            style={{ border: "1px solid var(--hairline)", color: "var(--ink)" }}
          >
            Official Website <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function UniversitiesGrid({ universities }: { universities: University[] }) {
  const [selected, setSelected] = useState<University | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
        {universities.map((uni, idx) => {
          const logo = UNI_LOGOS[uni.name];
          return (
            <div
              key={uni.id}
              className="flex flex-col gap-4 p-6 md:p-7"
              style={{ background: "var(--paper)" }}
            >
              {/* Top row — logo or number + city */}
              <div className="flex items-start justify-between gap-3">
                {logo ? (
                  <div style={{ height: 32, width: 110, position: "relative" }}>
                    <Image src={logo} alt={uni.name} fill className="object-contain object-left" sizes="110px" />
                  </div>
                ) : (
                  <span className="font-mono text-[10px] tracking-[0.28em] tabular-nums" style={{ color: "var(--ink-4)" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="font-mono text-[9px] tracking-[0.18em] uppercase shrink-0" style={{ color: "var(--ink-4)" }}>
                  {uni.city}
                </span>
              </div>

              {/* Name */}
              <div className="flex-1">
                <h3
                  className="font-sans font-black uppercase tracking-[-0.02em] leading-tight"
                  style={{ fontSize: "clamp(0.95rem,1.2vw,1.1rem)", color: "var(--ink)" }}
                >
                  {uni.name}
                </h3>
                <p className="font-mono text-[9px] tracking-[0.15em] uppercase mt-0.5" style={{ color: "var(--ink-4)" }}>
                  {uni.type} · Est. {uni.established}
                </p>
              </div>

              {/* Course pills */}
              <div className="flex flex-wrap gap-1.5">
                {uni.courses.slice(0, 3).map((course) => (
                  <span key={course.id} className="font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-0.5" style={{ border: "1px solid var(--hairline)", color: "var(--ink-3)" }}>
                    {course.name}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setSelected(uni)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 font-mono text-[9px] tracking-[0.2em] uppercase transition-colors hover:opacity-70"
                  style={{ border: "1px solid var(--hairline)", color: "var(--ink)" }}
                >
                  Learn More
                </button>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 font-mono text-[9px] tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
                  style={{ background: "var(--ember)", color: "#0E0E10" }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {selected && <UniModal uni={selected} onClose={() => setSelected(null)} />}
    </>
  );
}