import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Heart, Users, Globe, Shield, Lightbulb, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AimBritz",
  description: "Learn about AimBritz - your trusted partner for study abroad consultancy. Founded in 2018, recognized by Asia Book of Records & India Book of Records.",
};

const values = [
  { icon: Shield,    title: "Integrity & Transparency",   description: "Honest and transparent guidance in every student interaction, always prioritizing student success." },
  { icon: Heart,     title: "Student-Centric Decisions",  description: "Every decision we make is centered around what's best for our students and their future." },
  { icon: Globe,     title: "Global Perspective",         description: "Combining global expertise with deep local knowledge to deliver the best guidance." },
  { icon: Lightbulb, title: "Professional Excellence",    description: "Continuous improvement and innovation in our services to deliver the highest standards." },
];

const stats = [
  { value: "2018",  label: "Founded" },
  { value: "500+",  label: "Partner Universities" },
  { value: "14+",   label: "Countries" },
  { value: "5000+", label: "Students Placed" },
];

const team = [
  { name: "Al Ameen Mohammed Ali", role: "Founder & CEO",               bio: "Experienced international student in the UK, Al Ameen founded AimBritz to help fellow aspirants pursue their studies without the struggles he faced abroad.", initial: "AA", image: "/images/team/alameen.png" },
  { name: "Akshay B Darsan",       role: "Co-Founder",                  bio: "Co-founder driving AimBritz's vision for ethical, structured, and career-focused international education solutions.", initial: "AB", image: "/images/team/akshay.png", whiteBg: true },
  { name: "Amal DS",               role: "Co-Founder",                  bio: "Co-founder committed to building transparent and results-driven overseas education guidance for students.", initial: "AD", image: "/images/team/amal.png" },
  { name: "Ansab Muhammed",        role: "Managing Partner – Ernakulam", bio: "Heading AimBritz's Ernakulam operations, connecting students across Kochi and surrounding regions with global education opportunities.", initial: "AM", image: "/images/team/ansab.png" },
  { name: "Adv. Reshma Salim",     role: "Chief Operating Officer",     bio: "Leading operations with a focus on compliance, student success, and delivering seamless educational journeys.", initial: "RS", image: "/images/team/reshma.png" },
  { name: "Raju Muthuswamy",       role: "Managing Partner – Tamil Nadu", bio: "Driving AimBritz's expansion in Tamil Nadu, helping students across the region access world-class international education.", initial: "RM", image: "/images/team/raju.png" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* ── Dark hero ── */}
      <div style={{ background: "#0E0E10", paddingTop: "clamp(100px,12vw,160px)", paddingBottom: "clamp(48px,6vw,80px)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* Left — headline */}
            <div className="flex-1">
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-4" style={{ color: "var(--ember)" }}>
                Who we are · Since 2018
              </p>
              <h1 className="font-sans font-black uppercase tracking-[-0.03em] leading-[0.88] mb-6" style={{ fontSize: "clamp(2.8rem,7vw,6.5rem)", color: "#F6F2EA" }}>
                About{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>AimBritz</span>
              </h1>
              <p className="font-sans max-w-xl mb-8 leading-relaxed" style={{ fontSize: "clamp(0.95rem,1.1vw,1.05rem)", color: "rgba(246,242,234,0.55)" }}>
                A dynamic global education consultancy connecting ambitious students with internationally recognized academic opportunities. Built by people who&apos;ve been there.
              </p>
              {/* Record badges */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.15)" }}>
                  <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden" style={{ border: "1px solid rgba(246,242,234,0.15)" }}>
                  <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
                </div>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "rgba(246,242,234,0.4)" }}>
                  Asia & India Book of Records
                </p>
              </div>
            </div>

            {/* Right — reach us directly */}
            <div className="flex flex-col gap-5 lg:min-w-[280px]" style={{ borderLeft: "1px solid rgba(246,242,234,0.1)", paddingLeft: "clamp(0px,3vw,48px)" }}>
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(246,242,234,0.35)" }}>
                Reach us directly
              </p>
              <a
                href="tel:+919747277233"
                className="font-sans font-black uppercase tracking-[-0.02em] leading-none transition-opacity hover:opacity-70"
                style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#F6F2EA" }}
              >
                +91 97472 77233
              </a>
              <a
                href="https://wa.me/919747277233"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                style={{ color: "rgba(246,242,234,0.5)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-sans font-black uppercase tracking-[-0.01em] px-5 py-3 mt-1 transition-opacity hover:opacity-80 text-sm"
                style={{ background: "var(--ember)", color: "#0E0E10" }}
              >
                Book Free Session <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div style={{ background: "#0E0E10", borderTop: "1px solid rgba(246,242,234,0.07)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="py-8 px-4 text-center"
                style={{ borderRight: i < 3 ? "1px solid rgba(246,242,234,0.07)" : undefined }}
              >
                <p className="font-sans font-black tabular-nums leading-none mb-1" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "#F6F2EA" }}>
                  {s.value}
                </p>
                <p className="font-mono text-[9px] tracking-[0.28em] uppercase" style={{ color: "rgba(246,242,234,0.35)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Story ── */}
      <div style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>Our story</p>
              <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-8" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}>
                How we{" "}
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>got here</span>
              </h2>
              <div className="flex flex-col gap-5 font-sans leading-relaxed" style={{ fontSize: "0.95rem", color: "var(--ink-3)" }}>
                <p>AimBritz was founded in 2018 and formally registered in 2020, evolving into a dynamic global education consultancy headquartered in Trivandrum, Kerala, with operational presence in India and the United Kingdom.</p>
                <p>Our Founder & CEO, Al Ameen Mohammed Ali, experienced firsthand the challenges of being an international student in Britain. That experience became the foundation of AimBritz — a promise to help every student pursue their studies without the pain and struggle he once faced.</p>
                <p>Built by a team of globally experienced professionals — many with firsthand international academic exposure — AimBritz combines industry expertise with personalized mentorship. Today, we are a trusted partner for students, universities, and institutions seeking reliable, transparent, and results-driven international education guidance.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px" style={{ background: "var(--hairline)" }}>
              {[["2018", "Founded"], ["5K+", "Students"], ["14+", "Countries"], ["500+", "Universities"]].map(([val, label]) => (
                <div key={label} className="flex flex-col gap-2 p-8" style={{ background: "var(--paper-2)" }}>
                  <p className="font-sans font-black tabular-nums" style={{ fontSize: "2.5rem", color: "var(--ink)", lineHeight: 1 }}>{val}</p>
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase" style={{ color: "var(--ink-4)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--hairline)" }}>
          <div className="flex flex-col gap-5 p-10" style={{ background: "var(--paper)" }}>
            <Target size={28} style={{ color: "var(--ember)" }} />
            <h3 className="font-sans font-black uppercase tracking-[-0.02em]" style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "var(--ink)" }}>Our Mission</h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
              AimBritz is committed to delivering personalized, transparent, and professionally guided overseas education services that align students&apos; ambitions with evolving global industry demands. Through expert counselling, international partnerships, and end-to-end support systems, AimBritz strives to create seamless educational journeys that extend beyond admissions into long-term career success.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-10" style={{ background: "var(--paper)" }}>
            <Eye size={28} style={{ color: "var(--ember)" }} />
            <h3 className="font-sans font-black uppercase tracking-[-0.02em]" style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "var(--ink)" }}>Our Vision</h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
              To become a globally recognized leader in international education consultancy, enabling students from diverse backgrounds to access world-class academic opportunities through ethical practices, strategic innovation, and lifelong career support.
            </p>
          </div>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>What drives us</p>
          <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}>
            Our{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--hairline)" }}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex flex-col gap-4 p-8" style={{ background: "var(--paper-2)" }}>
                  <div className="flex items-center justify-center" style={{ width: 40, height: 40, background: "var(--paper)", border: "1px solid var(--hairline)" }}>
                    <Icon size={18} style={{ color: "var(--ember)" }} />
                  </div>
                  <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.9rem", color: "var(--ink)" }}>{v.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Achievements ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>Recognition</p>
        <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}>
          Our{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
          <div className="flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
                <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
              </div>
              <div className="relative w-12 h-12 rounded-full overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
                <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
              </div>
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.95rem", color: "var(--ink)" }}>Asia & India Book of Records</h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>Recognized for hosting the largest overseas education seminar in the region.</p>
          </div>
          <div className="flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
            <div className="flex items-center justify-center" style={{ width: 40, height: 40, background: "var(--paper-2)", border: "1px solid var(--hairline)" }}>
              <Users size={18} style={{ color: "var(--ember)" }} />
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.95rem", color: "var(--ink)" }}>British Council Certified</h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>Our counsellors are British Council certified, ensuring expert and internationally recognized guidance.</p>
          </div>
          <div className="flex flex-col gap-5 p-8" style={{ background: "var(--paper)" }}>
            <div className="flex items-center justify-center" style={{ width: 40, height: 40, background: "var(--paper-2)", border: "1px solid var(--hairline)" }}>
              <Globe size={18} style={{ color: "var(--ember)" }} />
            </div>
            <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.95rem", color: "var(--ink)" }}>Global Scholarship Placements</h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>Successful scholarship placements through government-funded initiatives across multiple countries.</p>
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div style={{ background: "var(--ink)", borderTop: "1px solid var(--hairline)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>The people</p>
          <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--paper)" }}>
            Our{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>Leadership Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(248,244,235,0.1)" }}>
            {team.map((member) => (
              <div key={member.name} className="group flex flex-col overflow-hidden" style={{ background: "var(--ink)" }}>
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--ink-2)" }}>
                      <span className="font-sans font-black text-8xl" style={{ color: "rgba(248,244,235,0.08)" }}>{member.initial}</span>
                    </div>
                  )}
                  {member.whiteBg && <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)", mixBlendMode: "multiply" }} />}
                  <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, var(--ink), transparent)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 mb-2" style={{ background: "rgba(248,244,235,0.1)", color: "rgba(248,244,235,0.6)", border: "1px solid rgba(248,244,235,0.12)" }}>
                      {member.role}
                    </span>
                    <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "1.05rem", color: "var(--paper)" }}>{member.name}</h3>
                  </div>
                </div>
                <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(248,244,235,0.07)" }}>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(248,244,235,0.45)" }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20">
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase mb-3" style={{ color: "var(--ember)" }}>Why us</p>
        <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.92] mb-12" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "var(--ink)" }}>
          Why Choose{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>AimBritz?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--hairline)" }}>
          {[
            ["Personalized Guidance", "Strategic career counselling tailored to your academic profile, career ambitions, and global market trends."],
            ["End-to-End Support", "From university selection and visa processing to pre-departure and post-arrival support — we're with you every step."],
            ["Ethical & Transparent", "Responsible counselling with honest guidance. Proudly rated 5 stars on Google for trusted guidance and outstanding student success."],
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col gap-3 p-8" style={{ background: "var(--paper)" }}>
              <h3 className="font-sans font-black uppercase tracking-[-0.015em]" style={{ fontSize: "0.95rem", color: "var(--ink)" }}>{title}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: "#0E0E10" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--ember)" }}>Get started</p>
              <h2 className="font-sans font-black uppercase tracking-[-0.025em] leading-[0.88]" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#F6F2EA" }}>
                Ready to start<br />
                <span className="font-serif italic font-normal" style={{ color: "var(--ember)" }}>your journey?</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+919747277233"
                className="inline-flex items-center gap-2 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-75"
                style={{ border: "1px solid rgba(246,242,234,0.2)", color: "#F6F2EA", fontSize: "0.9rem" }}
              >
                <Phone size={14} /> Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-sans font-black uppercase tracking-[-0.01em] px-7 py-4 transition-opacity hover:opacity-80"
                style={{ background: "var(--ember)", color: "#0E0E10", fontSize: "0.9rem" }}
              >
                Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}