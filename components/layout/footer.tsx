import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  main: [
    { name: "Countries", href: "/countries" },
    { name: "Universities", href: "/universities" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  countries: [
    { name: "Study in USA", href: "/countries/usa" },
    { name: "Study in UK", href: "/countries/uk" },
    { name: "Study in Canada", href: "/countries/canada" },
    { name: "Study in Australia", href: "/countries/australia" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8 lg:px-8">
        {/* Top Section: Brand, Contact, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand and Social */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/aimbritz-logo-transparent.png"
                alt="AimBritz - Study Abroad Consultancy"
                width={500}
                height={100}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your gateway to global education. Expert guidance for studying abroad.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/aimbritz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/AimBritzOverseas/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/aim-britz-study-abroad/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCE43z8Dh4RYSxyTfk_8bF4g" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+44 7417 391291</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 9747 277233</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@aimbritz.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="border-t pt-6 pb-6">
          <h3 className="font-semibold mb-4">Branch Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* UK Branch */}
              <div className="space-y-1">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  United Kingdom
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  42 Montcalm House, Westferry, London, E14 3SD
                </p>
              </div>

              {/* Ernakulam Branch */}
              <div className="space-y-1">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Ernakulam
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  3rd Floor, Koonamthai, Edappally, Kochi, Kerala 682024
                </p>
              </div>

              {/* Vizhinjam Branch */}
              <div className="space-y-1">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Vizhinjam
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Near Akshaya Center, Vizhinjam, 695521
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Trivandrum Branch */}
              <div className="space-y-1">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Trivandrum
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mahatma Gandhi Rd, Puthenchanthai, Santhi Nagar, Pulimoodu, Thiruvananthapuram, Kerala 695001
                </p>
              </div>

              {/* Thiruvalla Branch */}
              <div className="space-y-1">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Thiruvalla
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  2nd Floor, Seesa Arcade, Ramanchira, Thiruvalla, Kerala 689107
                </p>
              </div>

              {/* Trichy Branch */}
              <div className="space-y-1">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Trichy
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tiruchirappalli, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AimBritz. All rights reserved.
          </p>
          <div className="flex gap-4">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
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
