import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { RotatingBadge } from "@/components/ui/rotating-badge";
import { SwooshLine } from "@/components/ui/swoosh-line";

const navigation = {
  main: [
    { name: "Countries", href: "/countries" },
    { name: "Universities", href: "/universities" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/aimbritz", Icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/AimBritzOverseas/", Icon: Facebook },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/aim-britz-study-abroad/", Icon: Linkedin },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCE43z8Dh4RYSxyTfk_8bF4g", Icon: Youtube },
  ],
};

const branches = [
  { name: "United Kingdom", address: "42 Montcalm House, Westferry, London, E14 3SD" },
  { name: "Ernakulam", address: "3rd Floor, Koonamthai, Edappally, Kochi, Kerala 682024" },
  { name: "Trivandrum", address: "Mahatma Gandhi Rd, Puthenchanthai, Santhi Nagar, Pulimoodu, Thiruvananthapuram, 695001" },
  { name: "Thiruvalla", address: "2nd Floor, Seesa Arcade, Ramanchira, Thiruvalla, Kerala 689107" },
  { name: "Vizhinjam", address: "Near Akshaya Center, Vizhinjam, Kerala 695521" },
  { name: "Trichy", address: "Tiruchirappalli, Tamil Nadu" },
];

export function Footer() {
  return (
    <footer className="relative bg-paper-2 text-ink border-t border-hairline overflow-hidden">
      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(10,10,10,0.12) 0 6px, transparent 6px 14px)",
        }}
      />

      {/* Background swoosh */}
      <div
        aria-hidden
        className="absolute bottom-8 right-0 w-[800px] opacity-[0.06] pointer-events-none"
      >
        <SwooshLine variant="figure-eight" color="var(--ember)" strokeWidth={2} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-10 relative">
        {/* Rotating badge */}
        <div className="absolute top-8 right-8 hidden lg:block">
          <RotatingBadge
            text="AIMBRITZ · GLOBAL EDUCATION · SINCE 2020 · "
            size={140}
            fontSize={10}
            color="var(--ember)"
            center={<span className="font-serif italic text-[22px] text-ember">ab.</span>}
          />
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px w-12 bg-ember" aria-hidden />
          <span className="text-eyebrow text-ember">Footer · 2026</span>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 mb-16">
          <div className="col-span-2 md:col-span-4 space-y-5">
            <p className="font-sans font-black uppercase tracking-[-0.02em] text-2xl md:text-3xl text-ink leading-[0.95]">
              Building global
              <br />
              <em className="font-serif italic text-ember">futures.</em>
            </p>
            <p className="text-sm text-ink-3 leading-relaxed max-w-xs">
              Recognized by Asia Book of Records & India Book of Records for pioneering international education consultancy from Kerala.
            </p>
            <div className="flex gap-3 pt-2">
              {navigation.social.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  data-cursor-label={name}
                  className="h-9 w-9 rounded-full border border-hairline flex items-center justify-center text-ink-2 hover:text-paper hover:bg-ember hover:border-ember transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h3 className="text-eyebrow text-ink-3 mb-5">Explore</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    data-cursor-label="Visit"
                    className="group inline-flex items-center gap-1 text-ink hover:text-ember transition-colors text-sm uppercase tracking-[0.05em] font-semibold"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ember transition-all duration-300 ease-lando group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="text-eyebrow text-ink-3 mb-5">Get in touch</h3>
            <ul className="space-y-3 text-sm text-ink">
              <li>
                <a href="tel:+447417391291" data-cursor-label="Call UK" className="flex items-center gap-2 hover:text-ember transition-colors">
                  <Phone className="h-3.5 w-3.5 text-ink-3" />
                  +44 7417 391291
                </a>
              </li>
              <li>
                <a href="tel:+919747277233" data-cursor-label="Call IN" className="flex items-center gap-2 hover:text-ember transition-colors">
                  <Phone className="h-3.5 w-3.5 text-ink-3" />
                  +91 9747 277233
                </a>
              </li>
              <li>
                <a href="mailto:ceo@aimbritz.com" data-cursor-label="Email" className="flex items-center gap-2 hover:text-ember transition-colors">
                  <Mail className="h-3.5 w-3.5 text-ink-3" />
                  ceo@aimbritz.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h3 className="text-eyebrow text-ink-3 mb-5">Our promise</h3>
            <p className="text-sm text-ink-2 leading-relaxed">
              Honest counsel. Offers without edits. A guide who answers on the first ring — from application to arrival.
            </p>
          </div>
        </div>

        {/* Dashed divider */}
        <div
          aria-hidden
          className="h-px w-full mb-12"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(10,10,10,0.12) 0 4px, transparent 4px 10px)" }}
        />

        {/* Branches grid */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-sans font-black uppercase tracking-[-0.02em] text-2xl md:text-3xl text-ink">
              <em className="font-serif italic text-ember">Six</em> branches
            </h3>
            <span className="text-eyebrow text-ink-3">UK · India</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
            {branches.map((b, i) => (
              <div key={b.name} className="group">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[11px] text-ember tabular-nums tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <h4 className="font-sans font-bold uppercase tracking-[0.02em] text-ink flex items-center gap-2 text-lg">
                    <MapPin className="h-3.5 w-3.5 text-ember" />
                    {b.name}
                  </h4>
                </div>
                <p className="text-sm text-ink-3 leading-relaxed pl-7">
                  {b.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tombstone massive word */}
        <div className="relative w-full mb-10 select-none" aria-hidden>
          <h2 className="font-sans font-black text-ink leading-[0.8] tracking-[-0.06em] uppercase whitespace-nowrap text-center" style={{ fontSize: "clamp(4rem, 16vw, 18rem)" }}>
            AIMBRITZ
          </h2>
        </div>

        <div
          aria-hidden
          className="h-px w-full mb-6"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(10,10,10,0.12) 0 4px, transparent 4px 10px)" }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-xs text-ink-3">
            <p>© {new Date().getFullYear()} AimBritz Overseas. All rights reserved.</p>
            <span className="hidden sm:inline text-ink-4">·</span>
            <p className="font-mono text-ink-3 uppercase tracking-[0.15em]">Building global futures · Since 2020</p>
          </div>
          <div className="flex gap-5">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-cursor-label="Read"
                className="text-xs text-ink-3 hover:text-ember transition-colors uppercase tracking-[0.1em]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
