import { cn } from "@/lib/utils";

interface SectionFrameProps extends React.HTMLAttributes<HTMLElement> {
  /** "paper" (ivory default) or "paper-2" (alternate band) or "ink" (dark CTA) */
  tone?: "paper" | "paper-2" | "ink";
  /** Top/bottom pad size */
  pad?: "sm" | "md" | "lg";
  /** Show a dashed rule across the top edge */
  dashedTop?: boolean;
  /** Show a dashed rule across the bottom edge */
  dashedBottom?: boolean;
  /** Optional eyebrow label */
  eyebrow?: string;
  /** Optional counter (e.g. "03 / 11") */
  counter?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}

/**
 * Consistent section wrapper — alternates paper / paper-2 for vertical
 * rhythm, handles top/bottom padding, and exposes optional eyebrow +
 * counter pills that anchor the Shopify Editions grid.
 */
export function SectionFrame({
  tone = "paper",
  pad = "lg",
  dashedTop = false,
  dashedBottom = false,
  eyebrow,
  counter,
  className,
  as: As = "section",
  children,
  ...rest
}: SectionFrameProps) {
  const bg =
    tone === "ink"
      ? "bg-ink text-paper"
      : tone === "paper-2"
        ? "bg-paper-2 text-ink"
        : "bg-paper text-ink";

  const padY =
    pad === "sm"
      ? "py-[clamp(48px,8vw,96px)]"
      : pad === "md"
        ? "py-[clamp(72px,10vw,144px)]"
        : "py-[clamp(96px,12vw,192px)]";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = As as any;
  return (
    <Tag
      {...rest}
      className={cn("relative", bg, padY, className)}
    >
      {dashedTop && (
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--ink-4) 0 4px, transparent 4px 10px)",
          }}
        />
      )}
      {dashedBottom && (
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--ink-4) 0 4px, transparent 4px 10px)",
          }}
        />
      )}

      {(eyebrow || counter) && (
        <div className="container relative flex items-center justify-between mb-10">
          {eyebrow && (
            <p
              className={cn(
                "text-eyebrow",
                tone === "ink" ? "text-paper/70" : "text-ink-3"
              )}
            >
              {eyebrow}
            </p>
          )}
          {counter && (
            <p
              className={cn(
                "font-mono text-[11px] tabular-nums tracking-[0.2em]",
                tone === "ink" ? "text-paper/60" : "text-ink-3"
              )}
            >
              {counter}
            </p>
          )}
        </div>
      )}

      <div className="relative">{children}</div>
    </Tag>
  );
}
