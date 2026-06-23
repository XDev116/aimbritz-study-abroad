import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, CheckCircle, FileCheck, Globe, GraduationCap, Plane, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive study abroad services including career counseling, university selection, application support, visa assistance, and test preparation.",
};

const services = [
  {
    icon: Users,
    title: "Career Counseling",
    description: "Expert one-on-one guidance to identify your strengths, interests, and ideal career path.",
    features: [
      "Personalized profile assessment",
      "Career aptitude testing",
      "Course and specialization recommendations",
      "Country selection based on career goals",
      "Industry trend analysis"
    ]
  },
  {
    icon: Globe,
    title: "University Selection",
    description: "Strategic university shortlisting based on your academic profile, budget, and preferences.",
    features: [
      "Comprehensive university database access",
      "Ranking and reputation analysis",
      "Scholarship opportunity identification",
      "Cost-benefit comparison",
      "Customized university list (6-10 universities)"
    ]
  },
  {
    icon: FileCheck,
    title: "Application Assistance",
    description: "End-to-end support for university applications ensuring accuracy and completeness.",
    features: [
      "Document preparation and review",
      "Statement of Purpose (SOP) writing and editing",
      "Letter of Recommendation (LOR) guidance",
      "Resume/CV optimization",
      "Application form completion",
      "Application tracking and follow-up"
    ]
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "Complete visa processing support with high success rates across all countries.",
    features: [
      "Visa eligibility assessment",
      "Document checklist and preparation",
      "Application form guidance",
      "Financial documentation support",
      "Interview preparation and mock sessions",
      "Post-visa landing guidance"
    ]
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Maximize your chances of receiving financial aid and scholarships.",
    features: [
      "Scholarship search and identification",
      "Eligibility assessment",
      "Application strategy development",
      "Essay and document review",
      "Deadline management",
      "Alternative funding options"
    ]
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, SAT, and other tests.",
    features: [
      "Diagnostic tests and score analysis",
      "Customized study plans",
      "Expert trainers and study materials",
      "Practice tests and mock exams",
      "Tips and strategies for high scores",
      "Flexible online and offline classes"
    ]
  },
  {
    icon: GraduationCap,
    title: "Pre-Departure Briefing",
    description: "Prepare for life abroad with our comprehensive pre-departure orientation.",
    features: [
      "Country-specific orientation sessions",
      "Accommodation and travel guidance",
      "Banking and currency advice",
      "Cultural adaptation tips",
      "Health insurance guidance",
      "Part-time work regulations"
    ]
  },
  {
    icon: CheckCircle,
    title: "Post-Landing Support",
    description: "Continued assistance even after you reach your destination.",
    features: [
      "Airport pickup assistance (select locations)",
      "University enrollment support",
      "SIN/SSN application guidance",
      "Job search and internship help",
      "PR and immigration consulting",
      "Alumni network access"
    ]
  }
];

const processSteps = [
  { step: 1, title: "Free Consultation",             description: "Initial assessment of your profile, goals, and preferences" },
  { step: 2, title: "Course & University Selection", description: "Shortlist universities based on your profile and budget" },
  { step: 3, title: "Test Preparation",              description: "Prepare for and take required standardized tests" },
  { step: 4, title: "Application Process",           description: "Complete and submit applications with our guidance" },
  { step: 5, title: "Offer Letters",                 description: "Receive and evaluate offers from universities" },
  { step: 6, title: "Visa Application",              description: "Apply for and obtain your student visa" },
  { step: 7, title: "Pre-Departure",                 description: "Final preparations before your journey" },
  { step: 8, title: "Departure & Beyond",            description: "Travel and continue with post-landing support" }
];

export default function ServicesPage() {
  return (
    <div style={{ background: "#0E0E10", color: "#F6F2EA", minHeight: "100vh" }}>
      <style>{`:root { --flow-color: rgba(246,242,234,0.18); }`}</style>

      {/* ── Header ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8" style={{ paddingTop: "clamp(72px,9vw,130px)", paddingBottom: "clamp(48px,6vw,80px)" }}>
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "rgba(246,242,234,0.35)" }}>
          What we do
        </p>
        <h1
          className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "#F6F2EA" }}
        >
          Our{" "}
          <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.45)" }}>Services</span>
        </h1>
        <p
          className="font-sans max-w-2xl"
          style={{ fontSize: "clamp(1rem,1.2vw,1.15rem)", lineHeight: 1.6, color: "rgba(246,242,234,0.45)" }}
        >
          Comprehensive end-to-end support for your study abroad journey.
          From initial counseling to post-landing assistance, we&apos;re with you every step of the way.
        </p>
      </div>

      {/* ── Services Grid ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ border: "1px solid rgba(246,242,234,0.08)", background: "rgba(246,242,234,0.08)" }}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group relative flex flex-col gap-5 p-8 transition-colors duration-300"
              >
                {/* Number + Icon row */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-mono text-[10px] tracking-[0.28em] tabular-nums"
                    style={{ color: "rgba(246,242,234,0.2)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 40, height: 40, background: "rgba(246,242,234,0.06)", border: "1px solid rgba(246,242,234,0.12)" }}
                  >
                    <Icon size={18} style={{ color: "rgba(246,242,234,0.7)" }} />
                  </div>
                </div>

                {/* Title + description */}
                <div>
                  <h3
                    className="font-sans font-black uppercase tracking-[-0.02em] mb-2"
                    style={{ fontSize: "clamp(1.1rem,1.6vw,1.35rem)", color: "#F6F2EA" }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(246,242,234,0.4)" }}>
                    {service.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className="shrink-0"
                        style={{ width: 4, height: 4, background: "rgba(246,242,234,0.35)", borderRadius: 0, display: "inline-block", marginTop: 7 }}
                      />
                      <span className="font-mono text-[11px] tracking-[0.06em]" style={{ color: "rgba(246,242,234,0.45)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom rule accent */}
                <div
                  className="service-accent absolute bottom-0 left-8"
                  style={{ height: 1, background: "#ffffff" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Process Timeline ── */}
      <div style={{ background: "#111113", borderTop: "1px solid rgba(246,242,234,0.06)", borderBottom: "1px solid rgba(246,242,234,0.06)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
          <div className="mb-12">
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.35)" }}>
              How it works
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#F6F2EA" }}
            >
              Our{" "}
              <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.4)" }}>8-step</span>{" "}
              Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(246,242,234,0.07)" }}>
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-4 p-6"
                style={{ background: "#111113" }}
              >
                <span
                  className="font-mono text-[11px] tracking-[0.28em] tabular-nums font-bold px-2 py-0.5 self-start"
                  style={{ background: "rgba(246,242,234,0.08)", color: "#F6F2EA", border: "1px solid rgba(246,242,234,0.12)" }}
                >
                  {String(item.step).padStart(2, "0")}
                </span>
                <h3
                  className="font-sans font-black uppercase tracking-[-0.015em]"
                  style={{ fontSize: "0.95rem", color: "#F6F2EA" }}
                >
                  {item.title}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.35)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
        <div
          className="grid grid-cols-1 md:grid-cols-3 text-center"
          style={{ border: "1px solid rgba(246,242,234,0.08)" }}
        >
          {([
            ["95%", "Visa Success Rate"],
            ["500+", "Partner Universities"],
            ["10K+", "Students Placed"],
          ] as const).map(([val, label], i) => (
            <div
              key={label}
              className="py-12 px-6"
              style={{ borderRight: i < 2 ? "1px solid rgba(246,242,234,0.08)" : undefined }}
            >
              <p
                className="font-sans font-black tabular-nums leading-none mb-3"
                style={{ fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff" }}
              >
                {val}
              </p>
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(246,242,234,0.35)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-24">
        <div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 p-10 md:p-14"
          style={{ background: "#1a1a1c", border: "1px solid rgba(246,242,234,0.1)" }}
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.35)" }}>
              Get started
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)", color: "#F6F2EA" }}
            >
              Ready to begin<br />
              <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.55)" }}>your journey?</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-75 shrink-0"
            style={{ background: "#ffffff", color: "#0E0E10", fontSize: "0.9rem" }}
          >
            Schedule Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

    </div>
  );
}
