import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Logo Icon - Modernized */}
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-black/10 rounded-2xl blur-lg group-hover:bg-black/20 transition-all" />

        {/* Main icon container */}
        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.5} />

          {/* Sparkle accent */}
          <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
        </div>
      </div>

      {/* Logo Text - Modern Typography */}
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-black via-gray-900 to-black bg-clip-text text-transparent group-hover:from-gray-800 group-hover:via-black group-hover:to-gray-800 transition-all">
          AimBritz
        </span>
        <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase -mt-1">
          Study Abroad
        </span>
      </div>
    </Link>
  );
}

// Alternative minimal version (for mobile or compact spaces)
export function LogoMinimal() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
        <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-xl font-black tracking-tight bg-gradient-to-r from-black to-gray-900 bg-clip-text text-transparent">
        AimBritz
      </span>
    </Link>
  );
}

// Icon only version (for mobile menu or favicon)
export function LogoIcon() {
  return (
    <Link href="/" className="group">
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
        <Sparkles className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 text-yellow-400 animate-pulse" />
      </div>
    </Link>
  );
}
