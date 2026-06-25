import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getAllCountrySlugs, getCountryBySlug } from "@/lib/data/countries";
import { getUniversitiesByCountry } from "@/lib/data/universities";
import { UniversitiesGrid } from "@/components/country/universities-grid";

interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

const PHOTOS: Record<string, string> = {
  uk:           "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1600&q=85",
  australia:    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=85",
  "new-zealand":"https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600&q=85",
  ireland:      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1600&q=85",
  usa:          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=85",
  canada:       "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=85",
  germany:      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=1600&q=85",
  france:       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=85",
  dubai:        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85",
  malaysia:     "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600&q=85",
  singapore:    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=85",
  mauritius:    "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1600&q=85",
  georgia:      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=85",
  austria:      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
};


export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "Country Not Found" };
  return {
    title: `Study in ${country.name} | AimBritz`,
    description: country.description,
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const universities = getUniversitiesByCountry(country.code)
    .sort((a, b) => (b.isPartner ? 1 : 0) - (a.isPartner ? 1 : 0));
  const photo = PHOTOS[slug];

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── HERO — tall, full-bleed ── */}
      <div className="relative w-full" style={{ height: "clamp(360px, 45vw, 420px)" }}>
        {photo && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={photo} alt={country.name} className="absolute inset-0 w-full h-full object-cover" />
        )}
        {/* Strong bottom fade, gentle top fade */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,7,0.96) 0%, rgba(5,5,7,0.55) 45%, rgba(5,5,7,0.15) 100%)" }} />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-20 md:pt-24 px-5 md:px-10">
          <nav className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <span className="mx-2 opacity-40">/</span>
            <Link href="/countries" className="hover:opacity-70 transition-opacity">Countries</Link>
            <span className="mx-2 opacity-40">/</span>
            <span style={{ color: "rgba(246,242,234,0.8)" }}>{country.name}</span>
          </nav>
        </div>

        {/* Bottom — title + stats inline */}
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 pb-8 md:pb-10">
          <div className="max-w-[1280px] mx-auto">
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-4 inline-flex items-center gap-2 px-3 py-1.5" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", color: "rgba(246,242,234,0.9)", marginTop: "8px" }}>
              {country.flag}&nbsp;&nbsp;{country.code} &middot; Study Destination
            </p>
            <h1
              className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.88] mb-8"
              style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)", color: "#F6F2EA" }}
            >
              Study in{" "}
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                {country.name}
              </span>
            </h1>

            {/* Inline stat chips */}
            <div className="flex flex-wrap gap-3">
              {([
                [String(country.universitiesCount) + "+ Unis", "Universities"],
                ["1000+ Programs", "Programs"],
                ["2–3 Intakes/yr", "Intakes"],
                ["Work Rights", "Permitted"],
              ] as const).map(([val]) => (
                <span key={val} className="font-mono text-[9px] tracking-[0.22em] uppercase px-3 py-1.5" style={{ border: "1px solid rgba(246,242,234,0.2)", color: "rgba(246,242,234,0.65)", backdropFilter: "blur(6px)" }}>
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WHY + BENEFITS + VISA/COST — dark section ── */}
      <div style={{ background: "#0E0E10" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

            {/* Left — description + benefits */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "var(--ember)" }}>
                Why {country.name}
              </p>
              <p className="font-sans mb-10 leading-relaxed" style={{ fontSize: "clamp(0.95rem,1.1vw,1.05rem)", color: "rgba(246,242,234,0.6)" }}>
                {country.description}
              </p>
              <ul className="flex flex-col">
                {country.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4 py-3.5" style={{ borderTop: "1px solid rgba(246,242,234,0.07)" }}>
                    <span className="font-mono text-[9px] tracking-[0.2em] tabular-nums shrink-0 mt-0.5" style={{ color: "var(--ember)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.06em] leading-relaxed" style={{ color: "rgba(246,242,234,0.65)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Visa, Cost, Courses as dark panels */}
            <div className="flex flex-col gap-px" style={{ background: "rgba(246,242,234,0.06)" }}>
              <div className="p-7 md:p-8" style={{ background: "#0E0E10" }}>
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--ember)" }}>Visa</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(246,242,234,0.55)" }}>{country.visaInfo}</p>
              </div>
              <div className="p-7 md:p-8" style={{ background: "#0E0E10" }}>
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--ember)" }}>Cost of Living</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(246,242,234,0.55)" }}>{country.costOfLiving}</p>
              </div>
              <div className="p-7 md:p-8" style={{ background: "#0E0E10" }}>
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--ember)" }}>Top Courses</p>
                <div className="flex flex-wrap gap-2">
                  {country.topCourses.map((c, i) => (
                    <span key={i} className="font-mono text-[9px] tracking-[0.18em] uppercase px-2.5 py-1" style={{ border: "1px solid rgba(246,242,234,0.12)", color: "rgba(246,242,234,0.5)" }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARTNER UNIVERSITIES ── */}
      {universities.length > 0 && (
        <div style={{ background: "var(--paper)" }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
            <div className="flex items-end justify-between mb-10 gap-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-2" style={{ color: "var(--ember)" }}>
                  Partner Universities
                </p>
                <h2
                  className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
                  style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "var(--ink)" }}
                >
                  Where we{" "}
                  <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>place students</span>
                </h2>
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase shrink-0" style={{ color: "var(--ink-4)" }}>
                {universities.length} institutions
              </span>
            </div>
            <UniversitiesGrid universities={universities} />
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <div style={{ background: "#0E0E10" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--ember)" }}>
                Get started
              </p>
              <h2
                className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.88]"
                style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#F6F2EA" }}
              >
                Ready to study<br />
                in{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                  {country.name}?
                </span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-8 py-4 transition-opacity hover:opacity-80 shrink-0"
              style={{ background: "var(--ember)", color: "#0E0E10", fontSize: "0.9rem" }}
            >
              Schedule Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}