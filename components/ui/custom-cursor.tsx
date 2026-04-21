"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Editorial custom cursor — ink dot + hairline ring on ivory.
 * Supports `data-cursor-label="View"` attribute on hover targets to
 * render a small contextual label next to the ring.
 *
 * Note: `mix-blend-difference` is intentionally removed — it fights the
 * ivory palette and produces muddy midtones over photographs.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      setIsHovering(true);
      const attr = target.getAttribute("data-cursor-label");
      setLabel(attr);
    };
    const onLeave = () => {
      setIsHovering(false);
      setLabel(null);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    const attachHover = () => {
      const hovers = document.querySelectorAll<HTMLElement>(
        "a, button, [data-cursor-hover], [data-cursor-label]"
      );
      hovers.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return hovers;
    };

    let hovers = attachHover();
    const observer = new MutationObserver(() => {
      hovers.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      hovers = attachHover();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      hovers.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-ink"
        style={{ willChange: "transform" }}
      />
      {/* Hairline ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-ink/40 transition-[width,height,border-width] duration-300 ease-out ${
          isHovering ? "h-16 w-16 border-ink" : "h-8 w-8"
        }`}
        style={{ willChange: "transform" }}
      >
        {label && (
          <span
            ref={labelRef}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] font-semibold tracking-[0.25em] uppercase text-ink whitespace-nowrap"
          >
            {label}
          </span>
        )}
      </div>
    </>
  );
}
