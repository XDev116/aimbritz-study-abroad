"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, X, ExternalLink } from "lucide-react";
import { universities, type University } from "@/lib/data/universities";

/* ── Logo map ─────────────────────────────────────────────────────────── */
const DIR = "/images/Partnering Universities";
const UNI_LOGOS: Record<string, string> = {
  "University of Liverpool":                   `${DIR}/liverpool.png`,
  "University of Surrey":                      `${DIR}/surrey.png`,
  "Queen's University Belfast":                `${DIR}/queens-belfast.png`,
  "Heriot-Watt University":                    `${DIR}/heriot-watt.png`,
  "Aston University":                          `${DIR}/aston.png`,
  "Constructor University":                    `${DIR}/constructor.svg`,
  "GISMA Business School":                     `${DIR}/gisma.png`,
  "University of Europe for Applied Sciences": `${DIR}/ueas.png`,
  "KEDGE Business School":                     `${DIR}/kedge-dark.svg`,
  "INSEEC Business School":                    `${DIR}/INSEEC.png`,
  "ISC Paris Business School":                 `${DIR}/isc-paris.png`,
  "University College Dublin":                 `${DIR}/ucd.png`,
  "University College Cork":                   `${DIR}/ucc.png`,
  "University of Melbourne":                   `${DIR}/melbourne.png`,
  "University of Sydney":                      `${DIR}/sydney.png`,
  "University of Waterloo":                    `${DIR}/waterloo.png`,
  "University of Alberta":                     `${DIR}/alberta.png`,
  "University of Leicester":                   `${DIR}/leicester.png`,
  "University of Huddersfield":                `${DIR}/huddersfield-dark.svg`,
  "Coventry University":                       `${DIR}/coventry.png`,
  "California State University":               `${DIR}/cal-state.png`,
  "University of Arizona":                     `${DIR}/arizona.png`,
  "Texas State University":                    `${DIR}/texas-state-dark.svg`,
  "Colorado State University":                 `${DIR}/colorado-state.png`,
  "University of Western Australia":           `${DIR}/uwa.png`,
  "University of Auckland":                    `${DIR}/auckland.png`,
  "University of Canterbury":                  `${DIR}/canterbury.png`,
  "Dublin City University":                    `${DIR}/dcu.png`,
  "Trinity College Dublin":                    `${DIR}/rinity-dublin.png`,
  "University of Galway":                      `${DIR}/galway.png`,
  "Sorbonne University":                       `${DIR}/sorbonne.png`,
  "Sciences Po":                               `${DIR}/sciences-po.jpeg`,
  "ESSEC Business School":                     `${DIR}/essec-dark.svg`,
  "Technical University of Munich":            `${DIR}/tu-munich.jpeg`,
  "Ludwig Maximilian University of Munich":    `${DIR}/lmu-munich.png`,
  "RWTH Aachen University":                    `${DIR}/rwth-aachen.png`,
  "University of Toronto":                     `${DIR}/toronto.png`,
  "University of British Columbia":            `${DIR}/ubc.png`,
  "McGill University":                         `${DIR}/mcgill-dark.svg`,
  "Université Grenoble Alpes":                 `${DIR}/grenoble-alpes.png`,
};

/* ── Country filter order ─────────────────────────────────────────────── */
const PARTNER_COUNTRIES = ["United Kingdom", "Germany", "France", "Ireland", "Australia", "Canada"];

const COUNTRY_FLAGS: Record<string, string> = {
  "United Kingdom": "🇬🇧",
  "Germany":        "🇩🇪",
  "France":         "🇫🇷",
  "Ireland":        "🇮🇪",
  "Australia":      "🇦🇺",
  "Canada":         "🇨🇦",
  "United States":  "🇺🇸",
  "New Zealand":    "🇳🇿",
  "Singapore":      "🇸🇬",
  "Malaysia":       "🇲🇾",
  "Georgia":        "🇬🇪",
  "Austria":        "🇦🇹",
  "Mauritius":      "🇲🇺",
  "Dubai":          "🇦🇪",
};

/* ── Modal ────────────────────────────────────────────────────────────── */
function UniModal({ uni, onClose }: { uni: University; onClose: () => void }) {
  const logo = UNI_LOGOS[uni.name];
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: "rgba(5,5,7,0.75)", backdropFilter: "blur(6px)" }} />
      <div
        className="relative w-full md:max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: "var(--paper)", scrollbarWidth: "none" }}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-60" style={{ color: "var(--ink)" }} aria-label="Close">
          <X size={18} />
        </button>

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
          <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-tight mb-1" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", color: "var(--ink)" }}>
            {uni.name}
          </h2>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--ink-4)" }}>
            {uni.city} · {uni.country} · Est. {uni.established}
          </p>
        </div>

        <div className="px-6 md:px-8 py-6 flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
            {[["Type", uni.type], ["Ranking", `#${uni.ranking}`], ["Programs", `${uni.courses.length}+`]].map(([label, value]) => (
              <div key={label} className="py-4 text-center" style={{ background: "var(--paper)" }}>
                <p className="font-mono text-[8px] tracking-[0.25em] uppercase mb-1" style={{ color: "var(--ink-4)" }}>{label}</p>
                <p className="font-sans font-black" style={{ fontSize: "1rem", color: "var(--ink)" }}>{value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-2" style={{ color: "var(--ember)" }}>About</p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>{uni.description}</p>
          </div>

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

        <div className="px-6 md:px-8 pb-8 flex flex-col sm:flex-row gap-3">
          <Link href="/contact" onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 font-sans font-black uppercase tracking-[-0.01em] text-sm transition-opacity hover:opacity-80"
            style={{ background: "var(--ember)", color: "#0E0E10" }}
          >
            Apply Now <ArrowRight size={14} />
          </Link>
          <a href={uni.website} target="_blank" rel="noopener noreferrer"
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

/* ── Card ─────────────────────────────────────────────────────────────── */
function UniCard({ uni, idx, onLearnMore }: { uni: University; idx: number; onLearnMore: () => void }) {
  const logo = UNI_LOGOS[uni.name];
  return (
    <div className="flex flex-col gap-4 p-6 md:p-7" style={{ background: "var(--paper)" }}>
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
        <div className="flex items-center gap-2 shrink-0">
          {uni.isPartner && (
            <span className="font-mono text-[8px] tracking-[0.2em] uppercase px-1.5 py-0.5" style={{ background: "var(--ember)", color: "#0E0E10" }}>
              Partner
            </span>
          )}
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: "var(--ink-4)" }}>
            {COUNTRY_FLAGS[uni.country] ?? ""} {uni.city}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-sans font-black uppercase tracking-[-0.02em] leading-tight" style={{ fontSize: "clamp(0.9rem,1.1vw,1.05rem)", color: "var(--ink)" }}>
          {uni.name}
        </h3>
        <p className="font-mono text-[9px] tracking-[0.15em] uppercase mt-0.5" style={{ color: "var(--ink-4)" }}>
          {uni.type} · Est. {uni.established} · #{uni.ranking} world
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {uni.courses.slice(0, 3).map((c) => (
          <span key={c.id} className="font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-0.5" style={{ border: "1px solid var(--hairline)", color: "var(--ink-3)" }}>
            {c.name}
          </span>
        ))}
      </div>

      <div className="flex gap-2 pt-1">
        <button
          type="button"
          onClick={onLearnMore}
          className="flex-1 inline-flex items-center justify-center py-2 font-mono text-[9px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
          style={{ border: "1px solid var(--hairline)", color: "var(--ink)" }}
        >
          Learn More
        </button>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center py-2 font-mono text-[9px] tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
          style={{ background: "var(--ember)", color: "#0E0E10" }}
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [selected, setSelected] = useState<University | null>(null);

  const sorted = useMemo(() => [
    ...universities.filter((u) => u.isPartner),
    ...universities.filter((u) => !u.isPartner),
  ], []);

  const countryList = useMemo(() => {
    const all = [...new Set(universities.map((u) => u.country))];
    const partners = PARTNER_COUNTRIES.filter((c) => all.includes(c));
    const rest = all.filter((c) => !PARTNER_COUNTRIES.includes(c)).sort();
    return ["All", ...partners, ...rest];
  }, []);

  const filtered = useMemo(() =>
    sorted.filter((u) => {
      const q = search.toLowerCase();
      const matchSearch = !q || u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q);
      const matchCountry = country === "All" || u.country === country;
      return matchSearch && matchCountry;
    }),
  [sorted, search, country]);

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Dark hero ── */}
      <div
        className="relative w-full flex flex-col justify-end px-5 md:px-10"
        style={{ background: "#0E0E10", paddingTop: "clamp(100px,12vw,160px)", paddingBottom: "clamp(36px,4vw,60px)" }}
      >
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "var(--ember)" }}>
                The Network · {universities.length} universities
              </p>
              <h1 className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.88]" style={{ fontSize: "clamp(2.6rem,6.5vw,6rem)", color: "#F6F2EA" }}>
                Every campus<br />
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>we place students.</span>
              </h1>
            </div>
            <p className="font-sans max-w-xs md:text-right" style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(246,242,234,0.45)" }}>
              {universities.filter(u => u.isPartner).length} partner universities.<br />
              {countryList.length - 1} countries. Every tier,<br />every budget.
            </p>
          </div>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="sticky top-0 z-30 border-b" style={{ background: "rgba(252,252,250,0.95)", borderColor: "var(--hairline)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--ink-4)" }} />
            <input
              type="text"
              placeholder="Search universities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 font-mono text-[10px] tracking-[0.12em] outline-none"
              style={{ border: "1px solid var(--hairline)", background: "transparent", color: "var(--ink)" }}
            />
          </div>

          {/* Country chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 flex-1" style={{ scrollbarWidth: "none" }}>
            {countryList.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCountry(c)}
                className="shrink-0 font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 transition-colors"
                style={{
                  border: "1px solid",
                  borderColor: country === c ? "var(--ember)" : "var(--hairline)",
                  background: country === c ? "var(--ember)" : "transparent",
                  color: country === c ? "#0E0E10" : "var(--ink-3)",
                }}
              >
                {c === "All" ? "All" : `${COUNTRY_FLAGS[c] ?? ""} ${c}`}
              </button>
            ))}
          </div>

          {/* Count */}
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase shrink-0" style={{ color: "var(--ink-4)" }}>
            {filtered.length} shown
          </span>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-14">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
            {filtered.map((uni, idx) => (
              <UniCard key={uni.id} uni={uni} idx={idx} onLearnMore={() => setSelected(uni)} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-4" style={{ color: "var(--ink-4)" }}>No universities found</p>
            <button
              type="button"
              onClick={() => { setSearch(""); setCountry("All"); }}
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-opacity hover:opacity-70"
              style={{ border: "1px solid var(--hairline)", color: "var(--ink)" }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <div style={{ background: "#0E0E10" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--ember)" }}>Need help deciding?</p>
              <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.88]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#F6F2EA" }}>
                Can&apos;t choose?<br />
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>We&apos;ll shortlist for you.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-8 py-4 transition-opacity hover:opacity-80 shrink-0"
              style={{ background: "var(--ember)", color: "#0E0E10", fontSize: "0.9rem" }}
            >
              Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {selected && <UniModal uni={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}