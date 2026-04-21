"use client";

import { cn } from "@/lib/utils";

interface DashedFrameProps {
  className?: string;
  inset?: number;
  /** If true, draws a full rounded rectangle; otherwise a simple rectangle */
  rounded?: boolean;
  radius?: number;
  /** Stroke color — defaults to `ink-4`. Accepts any CSS color. */
  color?: string;
  /** Dash pattern (stroke-dasharray) */
  dash?: string;
}

/**
 * Absolutely-positioned dashed SVG border that matches the Aquamare motif.
 * Wrap in a `relative` parent; the frame sits inside the parent and never
 * affects layout.
 */
export function DashedFrame({
  className,
  inset = 16,
  rounded = true,
  radius = 20,
  color = "var(--ink-4)",
  dash = "4 6",
}: DashedFrameProps) {
  return (
    <svg
      aria-hidden
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      preserveAspectRatio="none"
    >
      <rect
        x={inset}
        y={inset}
        width={`calc(100% - ${inset * 2}px)`}
        height={`calc(100% - ${inset * 2}px)`}
        rx={rounded ? radius : 0}
        ry={rounded ? radius : 0}
        fill="none"
        stroke={color}
        strokeWidth={1}
        strokeDasharray={dash}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
