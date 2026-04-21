"use client";

import { cn } from "@/lib/utils";

interface RotatingBadgeProps {
  /** Text that repeats around the circle. Trailing separator recommended: "AIMBRITZ · 2026 · " */
  text: string;
  /** Diameter in px */
  size?: number;
  /** Optional center glyph (e.g., a lucide icon or "+") */
  center?: React.ReactNode;
  /** Text color */
  color?: string;
  /** Font size in px for the curved text */
  fontSize?: number;
  className?: string;
}

/**
 * SVG text-on-path badge that rotates 120s linear.
 * Classic editorial motif from Aquamare / Lando — paired with ink CTAs,
 * CEO module, Journey panel 01, footer.
 */
export function RotatingBadge({
  text,
  size = 128,
  center,
  color = "var(--ink)",
  fontSize = 10,
  className,
}: RotatingBadgeProps) {
  const id = `rb-path-${text.replace(/\s+/g, "").slice(0, 12)}`;
  const radius = size / 2 - 10;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        className="animate-badge-rotate absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden
      >
        <defs>
          <path
            id={id}
            d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fontFamily="var(--font-inter-tight)"
          fontSize={fontSize}
          fontWeight={600}
          letterSpacing="0.18em"
          fill={color}
          style={{ textTransform: "uppercase" }}
        >
          <textPath href={`#${id}`} startOffset="0">
            {text.repeat(3)}
          </textPath>
        </text>
      </svg>
      {center && (
        <span className="relative flex items-center justify-center" style={{ color }}>
          {center}
        </span>
      )}
    </div>
  );
}
