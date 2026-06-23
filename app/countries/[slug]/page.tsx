import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getAllCountrySlugs, getCountryBySlug } from "@/lib/data/countries";
import { getUniversitiesByCountry } from "@/lib/data/universities";

interface CountryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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

  const universities = getUniversitiesByCountry(country.code);

  return (
    <div style={{ background: "transparent", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <div
        className="max-w-[1280px] mx-auto px-5 md:px-8"
        style={{ paddingTop: "clamp(72px,9vw,130px)", paddingBottom: "clamp(48px,6vw,80px)" }}
      >
        {/* Breadcrumb eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="font-mono font-bold text-[10px] tracking-[0.18em] px-1.5 py-0.5"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            {country.code}
          </span>
          <nav className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--ink-3)" }}>
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/countries" className="hover:opacity-70 transition-opacity">Countries</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "var(--ink)" }}>{country.name}</span>
          </nav>
        </div>

        <h1
          className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "var(--ink)" }}
        >
          Study in{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
            {country.name}
          </span>
        </h1>
        <p
          className="font-sans max-w-2xl"
          style={{ fontSize: "clamp(1rem,1.2vw,1.15rem)", lineHeight: 1.6, color: "var(--ink-3)" }}
        >
          {country.description}
        </p>
      </div>

      {/* ── Stats Bar ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-20">
        <div
          className="grid grid-cols-2 md:grid-cols-4 text-center"
          style={{ border: "1px solid var(--hairline)" }}
        >
          {([
            [String(country.universitiesCount) + "+", "Universities"],
            ["1000+", "Programs"],
            ["2\u20133/yr", "Intakes"],
            ["Yes", "Work Rights"],
          ] as const).map(([val, label], i) => (
            <div
              key={label}
              className="py-10 px-4"
              style={{
                borderRight: i < 3 ? "1px solid var(--hairline)" : undefined,
                borderBottom: i < 2 ? "1px solid var(--hairline)" : undefined,
              }}
            >
              <p
                className="font-sans font-black tabular-nums leading-none mb-2"
                style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "var(--ink)" }}
              >
                {val}
              </p>
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Study Here + Visa/Cost ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Benefits */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
              Why choose {country.name}
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-8"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "var(--ink)" }}
            >
              Key{" "}
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                Benefits
              </span>
            </h2>
            <ul className="flex flex-col gap-3">
              {country.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-[7px]"
                    style={{ width: 4, height: 4, background: "var(--ink-4)", display: "inline-block" }}
                  />
                  <span className="font-mono text-[11px] tracking-[0.06em] leading-relaxed" style={{ color: "var(--ink-3)" }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Visa + Cost */}
          <div className="grid grid-cols-1 gap-px" style={{ background: "var(--hairline)", alignSelf: "start" }}>
            <div className="p-8" style={{ background: "var(--paper)" }}>
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase mb-3" style={{ color: "var(--ember)" }}>
                Visa information
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
                {country.visaInfo}
              </p>
            </div>
            <div className="p-8" style={{ background: "var(--paper)" }}>
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase mb-3" style={{ color: "var(--ember)" }}>
                Cost of living
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
                {country.costOfLiving}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Universities ── */}
      {universities.length > 0 && (
        <div style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
            <div className="mb-10">
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
                Our partner universities
              </p>
              <h2
                className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--ink)" }}
              >
                Top{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                  Universities
                </span>
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-px"
              style={{ background: "var(--hairline)" }}
            >
              {universities.map((uni, idx) => (
                <Link
                  key={uni.id}
                  href={`/universities/${uni.slug}`}
                  className="group flex flex-col gap-4 p-8 transition-colors duration-300"
                  style={{ background: "var(--paper-2)" }}
                >
                  {/* Number + ranking */}
                  <div className="flex items-start justify-between">
                    <span
                      className="font-mono text-[10px] tracking-[0.28em] tabular-nums"
                      style={{ color: "var(--ink-4)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {uni.ranking > 0 && (
                      <span
                        className="font-mono text-[9px] tracking-[0.22em] uppercase px-2 py-0.5"
                        style={{ border: "1px solid var(--hairline)", color: "var(--ink-3)" }}
                      >
                        #{uni.ranking}
                      </span>
                    )}
                  </div>

                  {/* Name + city */}
                  <div>
                    <h3
                      className="font-sans font-black uppercase tracking-[-0.02em] mb-1 group-hover:text-[#C2410C] transition-colors"
                      style={{ fontSize: "clamp(1.1rem,1.6vw,1.35rem)", color: "var(--ink)" }}
                    >
                      {uni.name}
                    </h3>
                    <p className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--ink-4)" }}>
                      {uni.city} &middot; {uni.type}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
                    {uni.description.length > 120 ? uni.description.substring(0, 120) + "..." : uni.description}
                  </p>

                  {/* Course pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {uni.courses.slice(0, 3).map((course) => (
                      <span
                        key={course.id}
                        className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-0.5"
                        style={{ border: "1px solid var(--hairline)", color: "var(--ink-3)" }}
                      >
                        {course.name}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/universities"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
                style={{ color: "var(--ink-3)" }}
              >
                View all universities
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Popular Courses ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
        <div className="mb-10">
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
            What to study
          </p>
          <h2
            className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--ink)" }}
          >
            Popular{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
              Courses
            </span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: "var(--hairline)" }}
        >
          {country.topCourses.map((course, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6"
              style={{ background: "var(--paper)" }}
            >
              <span
                className="font-mono text-[10px] tracking-[0.28em] tabular-nums"
                style={{ color: "var(--ink-4)" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                className="font-sans font-bold uppercase tracking-[-0.01em] text-sm"
                style={{ color: "var(--ink)" }}
              >
                {course}
              </span>
            </div>
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
              Get started
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              Ready to study in<br />
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>
                {country.name}?
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-75 shrink-0"
            style={{ background: "var(--paper)", color: "var(--ink)", fontSize: "0.9rem" }}
          >
            Schedule Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
