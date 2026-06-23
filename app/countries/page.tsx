import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { countries } from "@/lib/data/countries";

export const metadata: Metadata = {
  title: "Study Abroad Destinations | AimBritz",
  description: "Explore top study destinations worldwide. Find detailed information about studying in USA, UK, Canada, Australia, Germany, and more countries.",
};

export default function CountriesPage() {
  return (
    <div style={{ background: "transparent", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <div
        className="max-w-[1280px] mx-auto px-5 md:px-8"
        style={{ paddingTop: "clamp(72px,9vw,130px)", paddingBottom: "clamp(48px,6vw,80px)" }}
      >
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "var(--ember)" }}>
          Departures &middot; {countries.length} countries
        </p>
        <h1
          className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "var(--ink)" }}
        >
          Study Abroad{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
            Destinations
          </span>
        </h1>
        <p
          className="font-sans max-w-2xl"
          style={{ fontSize: "clamp(1rem,1.2vw,1.15rem)", lineHeight: 1.6, color: "var(--ink-3)" }}
        >
          Discover world-class education opportunities across {countries.length} countries.
          Compare programs, costs, visa requirements, and post-study work options.
        </p>
      </div>

      {/* ── Countries Grid ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-24">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--hairline)" }}
        >
          {countries.map((country, idx) => (
            <Link
              key={country.id}
              href={`/countries/${country.slug}`}
              className="group flex flex-col gap-4 p-8 transition-colors duration-300"
              style={{ background: "var(--paper)" }}
            >
              {/* Number + flag code */}
              <div className="flex items-start justify-between">
                <span
                  className="font-mono text-[10px] tracking-[0.28em] tabular-nums"
                  style={{ color: "var(--ink-4)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-mono font-bold text-[10px] tracking-[0.18em] px-1.5 py-0.5"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  {country.code}
                </span>
              </div>

              {/* Country name */}
              <h2
                className="font-sans font-black uppercase tracking-[-0.02em] group-hover:text-[#C2410C] transition-colors"
                style={{ fontSize: "clamp(1.2rem,1.8vw,1.5rem)", color: "var(--ink)" }}
              >
                {country.name}
              </h2>

              {/* Description snippet */}
              <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
                {country.description.length > 120 ? country.description.substring(0, 120) + "..." : country.description}
              </p>

              {/* Universities count */}
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--ink-4)" }}>
                {country.universitiesCount}+ universities
              </p>

              {/* Top courses as pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {country.topCourses.slice(0, 3).map((course, ci) => (
                  <span
                    key={ci}
                    className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-0.5"
                    style={{ border: "1px solid var(--hairline)", color: "var(--ink-3)" }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-24">
        <div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 p-10 md:p-14"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--ember)" }}>
              Need help deciding?
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              Can&apos;t decide<br />
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                where to study?
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-75 shrink-0"
            style={{ background: "var(--paper)", color: "var(--ink)", fontSize: "0.9rem" }}
          >
            Get Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
