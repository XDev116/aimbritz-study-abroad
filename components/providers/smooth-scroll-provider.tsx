"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    // Expose globally
    (window as any).__lenis = lenis;

    // Sync Lenis → ScrollTrigger on every Lenis frame
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker so they share the same frame clock
    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after Lenis is ready so all measurements are correct
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      (window as any).__lenis = undefined;
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
