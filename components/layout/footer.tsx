import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { RotatingBadge } from "@/components/ui/rotating-badge";
import { SwooshLine } from "@/components/ui/swoosh-line";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/aimbritz",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AimbritzStudyAbroad",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.8 9.2.8 11.5v2.1C.8 16 1 18 1 18s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.2 12 22.2 12 22.2s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.2-2.2.2-4.4v-2.1C23.2 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919747277233",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
];

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
  social: [],
};

const branches = [
  { name: "United Kingdom", address: "42 Montcalm House, Westferry, London, E14 3SD" },
  { name: "Trivandrum", address: "Mahatma Gandhi Rd, Puthenchanthai, Santhi Nagar, Pulimoodu, Thiruvananthapuram, 695001" },
  { name: "Ernakulam", address: "3rd Floor, Koonamthai, Edappally, Kochi, Kerala 682024" },
  { name: "Thiruvalla", address: "2nd Floor, Seesa Arcade, Ramanchira, Thiruvalla, Kerala 689107" },
  { name: "Vizhinjam", address: "Near Akshaya Center, Vizhinjam, Kerala 695521" },
  { name: "Tamil Nadu", address: "Tiruchirappalli, Tamil Nadu" },
  { name: "Dubai", address: "" },
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
            text="AIMBRITZ · GLOBAL EDUCATION · SINCE 2018 · "
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
              {SOCIALS.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="h-9 w-9 rounded-full border border-hairline flex items-center justify-center text-ink-2 hover:text-paper hover:bg-ember hover:border-ember transition-colors"
                >
                  {icon}
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
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
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
                {b.address && <p className="text-sm text-ink-3 leading-relaxed pl-7">
                  {b.address}
                </p>}
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
            <p className="font-mono text-ink-3 uppercase tracking-[0.15em]">Building global futures · Since 2018</p>
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
