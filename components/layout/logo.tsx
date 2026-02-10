import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      {/* AimBritz Logo Image - Transparent */}
      <Image
        src="/logo/aimbritz-logo-transparent.png"
        alt="AimBritz - Study Abroad Consultancy"
        width={1000}
        height={200}
        className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
        priority
        quality={100}
      />
    </Link>
  );
}

// Alternative minimal version (for mobile or compact spaces)
export function LogoMinimal() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative h-10 w-auto group-hover:scale-105 transition-transform">
        <Image
          src="/logo/aimbritz-logo-sm.webp"
          alt="AimBritz"
          width={100}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </div>
    </Link>
  );
}

// Icon only version (for mobile menu or favicon)
export function LogoIcon() {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/logo/aimbritz-logo-transparent.png"
        alt="AimBritz"
        width={500}
        height={60}
        className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
        priority
        quality={100}
      />
    </Link>
  );
}
