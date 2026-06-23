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
    role: "Managing Partner \u2013 Ernakulam",
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
    role: "Managing Partner \u2013 Tamil Nadu",
    bio: "Driving AimBritz's expansion in Tamil Nadu, helping students across the region access world-class international education.",
    initial: "RM",
    image: "/images/team/raju.png"
  }
];

export default function AboutPage() {
  return (
    <div style={{ background: "transparent", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8" style={{ paddingTop: "clamp(72px,9vw,130px)", paddingBottom: "clamp(48px,6vw,80px)" }}>
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "var(--ember)" }}>
          Who we are
        </p>
        <h1
          className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "var(--ink)" }}
        >
          About{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>AimBritz</span>
        </h1>
        <p
          className="font-sans max-w-2xl mb-8"
          style={{ fontSize: "clamp(1rem,1.2vw,1.15rem)", lineHeight: 1.6, color: "var(--ink-3)" }}
        >
          Building Global Futures Since 2018. A dynamic global education consultancy connecting ambitious students
          with internationally recognized academic opportunities.
        </p>
        {/* Record badges */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
            <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
          </div>
          <div className="relative w-16 h-16 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
            <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--ink-4)" }}>
            Asia & India Book of Records
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-20">
        <div
          className="grid grid-cols-2 md:grid-cols-4 text-center"
          style={{ border: "1px solid var(--hairline)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-10 px-4"
              style={{ borderRight: i < 3 ? "1px solid var(--hairline)" : undefined }}
            >
              <p
                className="font-sans font-black tabular-nums leading-none mb-2"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--ink)" }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Story ── */}
      <div style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
                Our story
              </p>
              <h2
                className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-8"
                style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}
              >
                How we{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>got here</span>
              </h2>
              <div className="flex flex-col gap-5 font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
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
            <div className="grid grid-cols-2 gap-px" style={{ background: "var(--hairline)" }}>
              {[
                ["2018", "Founded"],
                ["5K+", "Students"],
                ["14+", "Countries"],
                ["500+", "Universities"],
              ].map(([val, label]) => (
                <div key={label} className="flex flex-col gap-2 p-8" style={{ background: "var(--paper-2)" }}>
                  <p className="font-sans font-black tabular-nums" style={{ fontSize: "2.4rem", color: "var(--ink)", lineHeight: 1 }}>
                    {val}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--hairline)" }}>
          <div className="flex flex-col gap-5 p-10" style={{ background: "var(--paper)" }}>
            <Target size={28} style={{ color: "var(--ink-3)" }} />
            <h3
              className="font-sans font-black uppercase tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "var(--ink)" }}
            >
              Our Mission
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
              AimBritz is committed to delivering personalized, transparent, and professionally guided
              overseas education services that align students&apos; ambitions with evolving global industry
              demands. Through expert counselling, international partnerships, and end-to-end support
              systems, AimBritz strives to create seamless educational journeys that extend beyond
              admissions into long-term career success.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-10" style={{ background: "var(--paper)" }}>
            <Eye size={28} style={{ color: "var(--ink-3)" }} />
            <h3
              className="font-sans font-black uppercase tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "var(--ink)" }}
            >
              Our Vision
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
              To become a globally recognized leader in international education consultancy, enabling
              students from diverse backgrounds to access world-class academic opportunities through
              ethical practices, strategic innovation, and lifelong career support.
            </p>
          </div>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
          <div className="mb-12">
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
              What drives us
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}
            >
              Our{" "}
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--hairline)" }}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex flex-col gap-4 p-8" style={{ background: "var(--paper-2)" }}>
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 40, height: 40, background: "var(--paper)", border: "1px solid var(--hairline)" }}
                  >
                    <Icon size={18} style={{ color: "var(--ink-3)" }} />
                  </div>
                  <h3
                    className="font-sans font-black uppercase tracking-[-0.015em]"
                    style={{ fontSize: "0.9rem", color: "var(--ink)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "var(--ink-3)" }}>
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
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
            Recognition
          </p>
          <h2
            className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}
          >
            Our{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>Achievements</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
          {/* Asia & India Book of Records */}
          <div className="flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
                <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
              </div>
              <div className="relative w-12 h-12 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
                <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
              </div>
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "var(--ink)" }}>
              Asia & India Book of Records
            </h3>
            <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "var(--ink-3)" }}>
              Recognized for hosting the largest overseas education seminar in the region.
            </p>
          </div>
          {/* British Council */}
          <div className="flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
            <div
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, background: "var(--paper-2)", border: "1px solid var(--hairline)" }}
            >
              <Users size={18} style={{ color: "var(--ink-3)" }} />
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "var(--ink)" }}>
              British Council Certified
            </h3>
            <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "var(--ink-3)" }}>
              Our counsellors are British Council certified, ensuring expert and internationally recognized guidance.
            </p>
          </div>
          {/* Scholarships */}
          <div className="flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
            <div
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, background: "var(--paper-2)", border: "1px solid var(--hairline)" }}
            >
              <Globe size={18} style={{ color: "var(--ink-3)" }} />
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "var(--ink)" }}>
              Global Scholarship Placements
            </h3>
            <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "var(--ink-3)" }}>
              Successful scholarship placements through government-funded initiatives across multiple countries.
            </p>
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div style={{ background: "var(--ink)", borderTop: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20">
          <div className="mb-12">
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
              The people
            </p>
            <h2
              className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--paper)" }}
            >
              Our{" "}
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>Leadership Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(248,244,235,0.1)" }}>
            {team.map((member) => (
              <div key={member.name} className="group flex flex-col overflow-hidden" style={{ background: "var(--ink)" }}>
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
                    <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--ink-2)" }}>
                      <span className="font-sans font-black text-8xl" style={{ color: "rgba(248,244,235,0.08)" }}>{member.initial}</span>
                    </div>
                  )}
                  {member.whiteBg && (
                    <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)", mixBlendMode: "multiply" }} />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, var(--ink), transparent)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span
                      className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 mb-2"
                      style={{ background: "rgba(248,244,235,0.1)", color: "rgba(248,244,235,0.6)", border: "1px solid rgba(248,244,235,0.12)" }}
                    >
                      {member.role}
                    </span>
                    <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "1.05rem", color: "var(--paper)" }}>
                      {member.name}
                    </h3>
                  </div>
                </div>
                {/* Bio */}
                <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(248,244,235,0.07)" }}>
                  <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "rgba(248,244,235,0.45)" }}>
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
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>
            Why us
          </p>
          <h2
            className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92]"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}
          >
            Why Choose{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>AimBritz?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
          {[
            ["Personalized Guidance", "Strategic career counselling tailored to your academic profile, career ambitions, and global market trends."],
            ["End-to-End Support", "From university selection and visa processing to pre-departure and post-arrival support \u2014 we're with you every step."],
            ["Ethical & Transparent", "Responsible counselling with honest guidance. We are proudly rated 5 stars on Google for trusted guidance and outstanding student success."],
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col gap-3 p-8" style={{ background: "var(--paper)" }}>
              <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "var(--ink)" }}>
                {title}
              </h3>
              <p className="font-mono text-[11px] tracking-[0.04em] leading-relaxed" style={{ color: "var(--ink-3)" }}>
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
              Ready to start<br />
              <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>your journey?</span>
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
