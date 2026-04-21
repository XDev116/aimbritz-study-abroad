"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
  type ElementType,
  type RefObject,
} from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Eyebrow — short label with a horizontal rule tick                 */
/* ------------------------------------------------------------------ */
interface EyebrowProps {
  children: ReactNode;
  align?: "left" | "center";
  color?: string;
}

export function Eyebrow({
  children,
  align = "left",
  color = "var(--ember)",
}: EyebrowProps) {
  if (align === "center") {
    return (
      <div className="flex items-center justify-center">
        <span
          style={{ background: color }}
          className="inline-block h-px w-10 mr-3"
        />
        <span className="t-eyebrow" style={{ color }}>
          {children}
        </span>
        <span
          style={{ background: color }}
          className="inline-block h-px w-10 ml-3"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <span
        style={{ background: color }}
        className="inline-block h-px w-10 align-middle mr-3"
      />
      <span className="t-eyebrow" style={{ color }}>
        {children}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionMark — corner chapter / section label                      */
/* ------------------------------------------------------------------ */
interface SectionMarkProps {
  num: string;
  label: string;
}

export function SectionMark({ num, label }: SectionMarkProps) {
  return (
    <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10 flex flex-col items-end gap-1 pointer-events-none select-none">
      <span className="font-mono text-[10px] tracking-[0.3em] text-ink-3">
        /{num}
      </span>
      <span className="font-mono text-[10px] tracking-[0.3em] text-ink-3">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  useInView — simple IntersectionObserver hook                      */
/* ------------------------------------------------------------------ */
export function useInView(
  ref: RefObject<HTMLElement | null>,
  threshold = 0.25,
): boolean {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  return shown;
}

/* ------------------------------------------------------------------ */
/*  Reveal — clip-path wipe for hero lines                            */
/* ------------------------------------------------------------------ */
interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style = {},
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const shown = useInView(ref, 0.2);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const El = Tag as any;
  return (
    <El
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: shown ? "translateY(0)" : "translateY(46px)",
        opacity: shown ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 1s ${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </El>
  );
}

/* ------------------------------------------------------------------ */
/*  Magnetic — cursor-following wrapper                               */
/* ------------------------------------------------------------------ */
interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0,0)";
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <span
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      ref={ref}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  FlipChar / FlipText — split-flap departure board                  */
/* ------------------------------------------------------------------ */
interface FlipCharProps {
  ch: string;
}

export function FlipChar({ ch }: FlipCharProps) {
  const [cur, setCur] = useState(ch);
  const [prev, setPrev] = useState(ch);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (ch === cur) return;
    setPrev(cur);
    setFlipping(true);
    const t = setTimeout(() => {
      setCur(ch);
      setFlipping(false);
    }, 380);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ch]);

  return (
    <span className="flip-cell">
      <span
        className="flip-inner"
        style={{
          transform: flipping ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <span style={{ display: "block", height: "0.95em", lineHeight: "0.95em" }}>
          {prev}
        </span>
        <span style={{ display: "block", height: "0.95em", lineHeight: "0.95em" }}>
          {cur}
        </span>
      </span>
    </span>
  );
}

interface FlipTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export function FlipText({ text, className = "", style = {} }: FlipTextProps) {
  const chars = text.split("");
  return (
    <span className={className} style={style}>
      {chars.map((c, i) => (
        <FlipChar key={`${i}-${c}`} ch={c === " " ? "\u00A0" : c} />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  CornerFrame — corner brackets (Lando motif)                       */
/* ------------------------------------------------------------------ */
interface CornerFrameProps {
  children: ReactNode;
  className?: string;
}

export function CornerFrame({ children, className = "" }: CornerFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <span
        className="absolute -top-px -left-px w-4 h-4"
        style={{
          borderTop: "2px solid var(--ember)",
          borderLeft: "2px solid var(--ember)",
        }}
      />
      <span
        className="absolute -top-px -right-px w-4 h-4"
        style={{
          borderTop: "2px solid var(--ember)",
          borderRight: "2px solid var(--ember)",
        }}
      />
      <span
        className="absolute -bottom-px -left-px w-4 h-4"
        style={{
          borderBottom: "2px solid var(--ember)",
          borderLeft: "2px solid var(--ember)",
        }}
      />
      <span
        className="absolute -bottom-px -right-px w-4 h-4"
        style={{
          borderBottom: "2px solid var(--ember)",
          borderRight: "2px solid var(--ember)",
        }}
      />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BtnPrimary / BtnGhost — CTA buttons                               */
/* ------------------------------------------------------------------ */
interface BtnPrimaryProps {
  children: ReactNode;
  href?: string;
  icon?: boolean;
}

export function BtnPrimary({
  children,
  href = "#",
  icon = true,
}: BtnPrimaryProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const inner = (
    <>
      {children}
      {icon && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path d="M7 17L17 7M17 7H8M17 7V16" />
        </svg>
      )}
    </>
  );

  const cls =
    "group inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-ember hover:text-ink transition-colors";

  return (
    <Magnetic strength={0.25}>
      {isInternal ? (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      ) : (
        <a href={href} className={cls}>
          {inner}
        </a>
      )}
    </Magnetic>
  );
}

interface BtnGhostProps {
  children: ReactNode;
  href?: string;
}

export function BtnGhost({ children, href = "#" }: BtnGhostProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const cls =
    "inline-flex items-center gap-2 rounded-full border-2 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-paper-3 transition-colors";
  const style: CSSProperties = { borderColor: "#0a0a0a", color: "#0a0a0a" };

  if (isInternal) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cls} style={style}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  FlagChip — tiny 3-letter ISO flag chip                            */
/* ------------------------------------------------------------------ */
interface FlagChipProps {
  code: string;
}

export function FlagChip({ code }: FlagChipProps) {
  return (
    <span
      className="font-mono font-bold text-[10px] tracking-[0.18em] px-1.5 py-0.5"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
    >
      {code}
    </span>
  );
}
