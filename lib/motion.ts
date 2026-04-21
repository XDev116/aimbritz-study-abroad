/**
 * Shared motion tokens and helpers for the editorial light theme.
 *
 * Curves:
 *   - lando: snappy, athletic reveal — headlines, hero images, card entries.
 *   - smooth: hover micro-interactions, minor transitions.
 *   - expoInOut: page/route transitions.
 *
 * All GSAP timelines should prefer these tokens over ad-hoc easing.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Ease curves ────────────────────────────────────────────────────
export const EASE = {
  lando: "cubic-bezier(0.65, 0.05, 0, 1)",
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  expoInOut: "expo.inOut",
  // GSAP-parseable cubic-bezier strings:
  landoGsap: "cubic-bezier(0.65, 0.05, 0, 1)",
  smoothGsap: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

// ─── Stagger presets ────────────────────────────────────────────────
export const STAGGER = {
  lines: 0.08,
  words: 0.02,
  grid: 0.08,
  gridFast: 0.06,
  gridSlow: 0.12,
  cards: 0.12,
} as const;

// ─── Duration presets ───────────────────────────────────────────────
export const DURATION = {
  reveal: 1.1,
  image: 1.2,
  microHover: 0.35,
  dashDraw: 1.6,
  routeOut: 0.5,
  routeIn: 0.6,
} as const;

// ─── ScrollTrigger defaults ─────────────────────────────────────────
export const TRIGGER_IN = {
  start: "top 85%",
  toggleActions: "play none none none",
} as const;

/**
 * `gsap.matchMedia` wrapper that auto-disables animations when
 * `prefers-reduced-motion` is set. Returns the mm instance so callers
 * can add additional queries (e.g., mobile variants).
 */
export function reducedMotionSafe(
  run: (ctx: gsap.Context) => void,
  scope?: Element | null
): gsap.MatchMedia {
  const mm = gsap.matchMedia(scope ?? undefined);
  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
      isMotionOk: "(prefers-reduced-motion: no-preference)",
    },
    (ctx) => {
      const { isMotionOk } = ctx.conditions as Record<string, boolean>;
      if (!isMotionOk) return; // skip entirely if user prefers reduced motion
      run(ctx);
    }
  );
  return mm;
}

/**
 * Split a block of text into individual line wrappers for GSAP reveals.
 * Each line is wrapped in an overflow-hidden span with an inner translate
 * target. Returns the inner targets so callers can animate them.
 *
 * Usage:
 *   const lines = splitIntoLines(headingEl);
 *   gsap.from(lines, { yPercent: 110, stagger: STAGGER.lines, ... });
 */
export function splitIntoLines(el: HTMLElement): HTMLSpanElement[] {
  // Naive line-splitter based on words and `getClientRects`.
  // Falls back to a single line if measurement isn't possible (SSR, hidden).
  const text = el.textContent ?? "";
  const words = text.trim().split(/\s+/);
  if (!words.length) return [];

  // Clear and rebuild with word spans
  el.innerHTML = "";
  const wordSpans = words.map((w) => {
    const span = document.createElement("span");
    span.textContent = w;
    span.style.display = "inline-block";
    return span;
  });
  wordSpans.forEach((span, i) => {
    el.appendChild(span);
    if (i < wordSpans.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });

  // Group by top offset
  const rows: HTMLSpanElement[][] = [];
  let currentTop: number | null = null;
  let currentRow: HTMLSpanElement[] = [];
  wordSpans.forEach((span) => {
    const top = span.getBoundingClientRect().top;
    if (currentTop === null || Math.abs(top - currentTop) > 2) {
      if (currentRow.length) rows.push(currentRow);
      currentRow = [span];
      currentTop = top;
    } else {
      currentRow.push(span);
    }
  });
  if (currentRow.length) rows.push(currentRow);

  // Rebuild into line wrappers
  el.innerHTML = "";
  const inner: HTMLSpanElement[] = [];
  rows.forEach((row) => {
    const outer = document.createElement("span");
    outer.style.display = "block";
    outer.style.overflow = "hidden";
    const innerSpan = document.createElement("span");
    innerSpan.style.display = "inline-block";
    innerSpan.style.willChange = "transform";
    innerSpan.textContent = row.map((s) => s.textContent).join(" ");
    outer.appendChild(innerSpan);
    el.appendChild(outer);
    inner.push(innerSpan);
  });

  return inner;
}

/**
 * Split text into word spans (no line detection needed).
 * Each word is wrapped in an overflow-hidden span with an inner translate target.
 */
export function splitIntoWords(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent ?? "";
  const words = text.trim().split(/\s+/);
  el.innerHTML = "";
  const inner: HTMLSpanElement[] = [];
  words.forEach((w, i) => {
    const outer = document.createElement("span");
    outer.style.display = "inline-block";
    outer.style.overflow = "hidden";
    outer.style.verticalAlign = "top";
    const innerSpan = document.createElement("span");
    innerSpan.style.display = "inline-block";
    innerSpan.style.willChange = "transform";
    innerSpan.textContent = w;
    outer.appendChild(innerSpan);
    el.appendChild(outer);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    inner.push(innerSpan);
  });
  return inner;
}
