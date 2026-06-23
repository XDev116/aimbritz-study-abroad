import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Heart, Users, Globe, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AimBritz - your trusted partner for study abroad consultancy. Founded in 2018, recognized by Asia Book of Records & India Book of Records.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "Honest and transparent guidance in every student interaction, always prioritizing student success."
  },
  {
    icon: Heart,
    title: "Student-Centric Decisions",
    description: "Every decision we make is centered around what's best for our students and their future."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Combining global expertise with deep local knowledge to deliver the best guidance."
  },
  {
    icon: Lightbulb,
    title: "Professional Excellence",
    description: "Continuous improvement and innovation in our services to deliver the highest standards."
  }
];

const stats = [
  { value: "2018", label: "Founded" },
  { value: "500+", label: "Partner Universities" },
  { value: "14+", label: "Countries" },
  { value: "5000+", label: "Students Placed" },
];

const team = [
  {
    name: "Al Ameen Mohammed Ali",
    role: "Founder & CEO",
    bio: "Experienced international student in the UK, Al Ameen founded AimBritz to help fellow aspirants pursue their studies without the struggles he faced abroad.",
    initial: "AA",
    image: "/images/team/alameen.png"
  },
  {
    name: "Akshay B Darsan",
    role: "Co-Founder",
    bio: "Co-founder driving AimBritz's vision for ethical, structured, and career-focused international education solutions.",
    initial: "AB",
    image: "/images/team/akshay.png",
    whiteBg: true,
  },
  {
    name: "Amal DS",
    role: "Co-Founder",
    bio: "Co-founder committed to building transparent and results-driven overseas education guidance for students.",
    initial: "AD",
    image: "/images/team/amal.png"
  },
  {
    name: "Ansab Muhammed",
    role: "Managing Partner – Ernakulam",
    bio: "Heading AimBritz's Ernakulam operations, connecting students across Kochi and surrounding regions with global education opportunities.",
    initial: "AM",
    image: "/images/team/ansab.png"
  },
  {
    name: "Adv. Reshma Salim",
    role: "Chief Operating Officer",
    bio: "Leading operations with a focus on compliance, student success, and delivering seamless educational journeys.",
    initial: "RS",
    image: "/images/team/reshma.png"
  },
  {
    name: "Raju Muthuswamy",
    role: "Managing Partner – Tamil Nadu",
    bio: "Driving AimBritz's expansion in Tamil Nadu, helping students across the region access world-class international education.",
    initial: "RM",
    image: "/images/team/raju.png"
  }
];

export default function AboutPage() {
  return (
    <div style={{ background: "#0E0E10", color: "#F6F2EA", minHeight: "100vh" }}>
      <style>{`:root { --flow-color: rgba(246,242,234,0.18); }`}</style>

      {/* ── Header ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8" style={{ paddingTop: "clamp(72px,9vw,130px)", paddingBottom: "clamp(48px,6vw,80px)" }}>
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "rgba(246,242,234,0.35)" }}>
          Who we are
        </p>
        <h1
          className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "#F6F2EA" }}
        >
          About{" "}
          <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.45)" }}>AimBritz</span>
        </h1>
        <p
          className="font-sans max-w-2xl mb-8"
          style={{ fontSize: "clamp(1rem,1.2vw,1.15rem)", lineHeight: 1.6, color: "rgba(246,242,234,0.45)" }}
        >
          Building Global Futures Since 2018. A dynamic global education consultancy connecting ambitious students
          with internationally recognized academic opportunities.
        </p>
        {/* Record badges */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.12)" }}>
            <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
          </div>
          <div className="relative w-16 h-16 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.12)" }}>
            <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "rgba(246,242,234,0.3)" }}>
            Asia & India Book of Records
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-20">
        <div
          className="grid grid-cols-2 md:grid-cols-4 text-center"
          style={{ border: "1px solid rgba(246,242,234,0.08)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-10 px-4"
              style={{ borderRight: i < 3 ? "1px solid rgba(246,242,234,0.08)" : undefined }}
            >
              <p
                className="font-sans font-black tabular-nums leading-none mb-2"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#ffffff" }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(246,242,234,0.35)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Story ── */}
      <div style={{ background: "#111113", borderTop: "1px solid rgba(246,242,234,0.06)", borderBottom: "1px solid rgba(246,242,234,0.06)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.35)" }}>
                Our story
              </p>
              <h2
                className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-8"
                style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#F6F2EA" }}
              >
                How we{" "}
                <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.4)" }}>got here</span>
              </h2>
              <div className="flex flex-col gap-5 font-sans text-sm leading-relaxed" style={{ color: "rgba(246,242,234,0.5)" }}>
                <p>
                  AimBritz was founded in 2018 and formally registered in 2020, evolving into a dynamic global
                  education consultancy headquartered in Trivandrum, Kerala, with operational presence in India
                  and the United Kingdom.
                </p>
                <p>
                  Our Founder & CEO, Al Ameen Mohammed Ali, experienced firsthand the challenges of being an
                  international student in Britain. That experience became the foundation of AimBritz — a promise
                  to help every student pursue their studies without the pain and struggle he once faced.
                </p>
                <p>
                  Built by a team of globally experienced professionals — many with firsthand international
                  academic exposure — AimBritz combines industry expertise with personalized mentorship. Today,
                  we are a trusted partner for students, universities, and institutions seeking reliable,
                  transparent, and results-driven international education guidance.
                </p>
              </div>
            </div>

            {/* Mini stat grid */}
            <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(246,242,234,0.07)" }}>
              {[
                ["2018", "Founded"],
                ["5K+", "Students"],
                ["14+", "Countries"],
                ["500+", "Universities"],
              ].map(([val, label]) => (
                <div key={label} className="flex flex-col gap-2 p-8" style={{ background: "#111113" }}>
                  <p className="font-sans font-black tabular-nums" style={{ fontSize: "2.4rem", color: "#ffffff", lineHeight: 1 }}>
                    {val}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(246,242,234,0.35)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(246,242,234,0.08)" }}>
          <div className="flex flex-col gap-5 p-10" style={{ background: "#0E0E10" }}>
            <Target size={28} style={{ color: "rgba(246,242,234,0.5)" }} />
            <h3
              className="font-sans font-black uppercase tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#F6F2EA" }}
            >
              Our Mission
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(246,242,234,0.45)" }}>
              AimBritz is committed to delivering personalized, transparent, and professionally guided
              overseas education services that align students&apos; ambitions with evolving global industry
              demands. Through expert counselling, international partnerships, and end-to-end support
              systems, AimBritz strives to create seamless educational journeys that extend beyond
              admissions into long-term career success.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-10" style={{ background: "#0E0E10" }}>
            <Eye size={28} style={{ color: "rgba(246,242,234,0.5)" }} />
            <h3
              className="font-sans font-black uppercase tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#F6F2EA" }}
            >
              Our Vision
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(246,242,234,0.45)" }}>
              To become a globally recognized leader in international education consultancy, enabling
              students from diverse backgrounds to access world-class academic opportunities through
              ethical practices, strategic innovation, and lifelong career support.
            </p>
          </div>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div style={{ background: "#111113", borderTop: "1px solid rgba(246,242,234,0.06)", borderBottom: "1px solid rgba(246,242,234,0.06)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
          <div className="mb-12">
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.35)" }}>
              What drives us
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#F6F2EA" }}
            >
              Our{" "}
              <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.4)" }}>Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(246,242,234,0.07)" }}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex flex-col gap-4 p-8" style={{ background: "#111113" }}>
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 40, height: 40, background: "rgba(246,242,234,0.06)", border: "1px solid rgba(246,242,234,0.12)" }}
                  >
                    <Icon size={18} style={{ color: "rgba(246,242,234,0.7)" }} />
                  </div>
                  <h3
                    className="font-sans font-black uppercase tracking-[-0.015em]"
                    style={{ fontSize: "0.9rem", color: "#F6F2EA" }}
                  >
                    {value.title}
                  </h3>
                  <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.38)" }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Achievements ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.35)" }}>
            Recognition
          </p>
          <h2
            className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#F6F2EA" }}
          >
            Our{" "}
            <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.4)" }}>Achievements</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(246,242,234,0.08)" }}>
          {/* Asia & India Book of Records */}
          <div className="flex flex-col gap-5 p-8" style={{ background: "#0E0E10" }}>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.12)" }}>
                <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
              </div>
              <div className="relative w-12 h-12 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.12)" }}>
                <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
              </div>
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "#F6F2EA" }}>
              Asia & India Book of Records
            </h3>
            <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.38)" }}>
              Recognized for hosting the largest overseas education seminar in the region.
            </p>
          </div>
          {/* British Council */}
          <div className="flex flex-col gap-5 p-8" style={{ background: "#0E0E10" }}>
            <div
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, background: "rgba(246,242,234,0.06)", border: "1px solid rgba(246,242,234,0.12)" }}
            >
              <Users size={18} style={{ color: "rgba(246,242,234,0.7)" }} />
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "#F6F2EA" }}>
              British Council Certified
            </h3>
            <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.38)" }}>
              Our counsellors are British Council certified, ensuring expert and internationally recognized guidance.
            </p>
          </div>
          {/* Scholarships */}
          <div className="flex flex-col gap-5 p-8" style={{ background: "#0E0E10" }}>
            <div
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, background: "rgba(246,242,234,0.06)", border: "1px solid rgba(246,242,234,0.12)" }}
            >
              <Globe size={18} style={{ color: "rgba(246,242,234,0.7)" }} />
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "#F6F2EA" }}>
              Global Scholarship Placements
            </h3>
            <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.38)" }}>
              Successful scholarship placements through government-funded initiatives across multiple countries.
            </p>
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div style={{ background: "#1c1c1f", borderTop: "1px solid rgba(246,242,234,0.06)", borderBottom: "1px solid rgba(246,242,234,0.06)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
          <div className="mb-12">
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.35)" }}>
              The people
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#F6F2EA" }}
            >
              Our{" "}
              <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.4)" }}>Leadership Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(246,242,234,0.07)" }}>
            {team.map((member) => (
              <div key={member.name} className="group flex flex-col overflow-hidden" style={{ background: "#1c1c1f" }}>
                {/* Photo */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: "#242428" }}>
                      <span className="font-sans font-black text-8xl" style={{ color: "rgba(246,242,234,0.08)" }}>{member.initial}</span>
                    </div>
                  )}
                  {member.whiteBg && (
                    <div className="absolute inset-0" style={{ background: "rgba(28,28,31,0.55)", mixBlendMode: "multiply" }} />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, #1c1c1f, transparent)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span
                      className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 mb-2"
                      style={{ background: "rgba(246,242,234,0.1)", color: "rgba(246,242,234,0.6)", border: "1px solid rgba(246,242,234,0.12)" }}
                    >
                      {member.role}
                    </span>
                    <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "1.05rem", color: "#F6F2EA" }}>
                      {member.name}
                    </h3>
                  </div>
                </div>
                {/* Bio */}
                <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(246,242,234,0.07)" }}>
                  <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.38)" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "rgba(246,242,234,0.35)" }}>
            Why us
          </p>
          <h2
            className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#F6F2EA" }}
          >
            Why Choose{" "}
            <span className="font-serif italic font-normal" style={{ color: "rgba(246,242,234,0.4)" }}>AimBritz?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(246,242,234,0.08)" }}>
          {[
            ["Personalized Guidance", "Strategic career counselling tailored to your academic profile, career ambitions, and global market trends."],
            ["End-to-End Support", "From university selection and visa processing to pre-departure and post-arrival support — we're with you every step."],
            ["Ethical & Transparent", "Responsible counselling with honest guidance. We are proudly rated 5 stars on Google for trusted guidance and outstanding student success."],
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col gap-3 p-8" style={{ background: "#0E0E10" }}>
              <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "#F6F2EA" }}>
                {title}
              </h3>
              <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(246,242,234,0.38)" }}>
                {desc}
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
              Ready to start<br />
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
