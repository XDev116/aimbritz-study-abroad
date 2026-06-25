import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { countries } from "@/lib/data/countries";

export const metadata: Metadata = {
  title: "Study Abroad Destinations | AimBritz",
  description: "Explore top study destinations worldwide. Find detailed information about studying in USA, UK, Canada, Australia, Germany, and more countries.",
};

const PHOTOS: Record<string, string> = {
  uk:           "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1400&q=90",
  australia:    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1400&q=90",
  "new-zealand":"https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1400&q=90",
  ireland:      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1400&q=90",
  usa:          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&q=90",
  canada:       "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1400&q=90",
  germany:      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=1400&q=90",
  france:       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=90",
  dubai:        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=90",
  malaysia:     "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1400&q=90",
  singapore:    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&q=90",
  mauritius:    "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1400&q=90",
  georgia:      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1400&q=90",
  austria:      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=90",
};

const PARTNER_ORDER = ["uk", "germany", "france", "ireland", "australia", "canada"];

const orderedCountries = [
  ...PARTNER_ORDER.map((slug) => countries.find((c) => c.slug === slug)).filter(Boolean),
  ...countries.filter((c) => !PARTNER_ORDER.includes(c.slug)),
] as typeof countries;

export default function CountriesPage() {
  const partnerCount = PARTNER_ORDER.length;

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Dark hero header ── */}
      <div
        className="relative w-full flex flex-col justify-end px-5 md:px-10"
        style={{
          background: "#0E0E10",
          paddingTop: "clamp(100px,12vw,160px)",
          paddingBottom: "clamp(40px,5vw,72px)",
        }}
      >
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "var(--ember)" }}>
                Departures &middot; {countries.length} countries
              </p>
              <h1
                className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.88]"
                style={{ fontSize: "clamp(2.8rem,7vw,6.5rem)", color: "#F6F2EA" }}
              >
                Where will<br />
                you{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                  land?
                </span>
              </h1>
            </div>
            <p
              className="font-sans max-w-xs md:text-right"
              style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(246,242,234,0.45)" }}
            >
              {partnerCount} partner countries.<br />
              500+ universities. Every tier,<br />
              every budget.
            </p>
          </div>

          {/* Partner badges */}
          <div className="flex flex-wrap gap-2 mt-8">
            {PARTNER_ORDER.map((slug) => {
              const c = countries.find((x) => x.slug === slug);
              if (!c) return null;
              return (
                <span
                  key={slug}
                  className="font-mono text-[9px] tracking-[0.22em] uppercase px-2.5 py-1"
                  style={{ border: "1px solid rgba(194,65,12,0.5)", color: "var(--ember)" }}
                >
                  {c.flag} {c.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Partner countries — larger featured cards ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-10 md:pt-14">
        <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--ember)" }}>
          Partner Destinations
        </p>

        {/* Row 1: UK wide + Germany tall — fixed height so no gap */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4" style={{ height: "clamp(220px,35vw,480px)" }}>
          {orderedCountries.slice(0, 2).map((country, idx) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="group relative overflow-hidden block h-full"
              style={{ gridColumn: idx === 0 ? "span 2" : "span 1" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTOS[country.slug] ?? PHOTOS.uk} alt={country.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 25%, rgba(10,10,10,0.15) 70%)" }} />
              <div className="absolute top-4 right-4 text-2xl">{country.flag}</div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6" style={{ color: "#F6F2EA" }}>
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase mb-1.5" style={{ color: "rgba(246,242,234,0.55)" }}>{country.universitiesCount}+ unis · {country.topCourses[0]}</p>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]" style={{ fontSize: idx === 0 ? "clamp(1.8rem,3.5vw,3rem)" : "clamp(1.3rem,2vw,1.8rem)" }}>{country.name}</h2>
                  <span className="shrink-0 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--ember)" }}>Explore <ArrowRight size={10} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: France, Ireland, Australia, Canada — 4 equal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {orderedCountries.slice(2, partnerCount).map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: "3/4" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS[country.slug] ?? PHOTOS.uk}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Lighter overlay so photos read clearly */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 25%, rgba(10,10,10,0.15) 70%)" }} />

              {/* Flag top-right */}
              <div className="absolute top-4 right-4 text-2xl">{country.flag}</div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6" style={{ color: "#F6F2EA" }}>
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase mb-1.5" style={{ color: "rgba(246,242,234,0.55)" }}>
                  {country.universitiesCount}+ unis · {country.topCourses[0]}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <h2
                    className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
                    style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)" }}
                  >
                    {country.name}
                  </h2>
                  <span className="shrink-0 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--ember)" }}>
                    Explore <ArrowRight size={10} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── All other countries ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-10 pb-10 md:pt-14">
        <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--ink-4)" }}>
          More Destinations
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {orderedCountries.slice(partnerCount).map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: "3/4" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS[country.slug] ?? PHOTOS.uk}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.82) 30%, rgba(10,10,10,0.1) 70%)" }} />

              <div className="absolute top-3 right-3 text-xl">{country.flag}</div>

              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ color: "#F6F2EA" }}>
                <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(246,242,234,0.5)" }}>
                  {country.universitiesCount}+ unis
                </p>
                <h2 className="font-sans font-black uppercase tracking-[-0.02em] leading-[0.92]" style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)" }}>
                  {country.name}
                </h2>
                <div className="flex items-center gap-1.5 mt-2 font-mono text-[8px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--ember)" }}>
                  Explore <ArrowRight size={9} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
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