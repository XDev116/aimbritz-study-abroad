"use client";

import { useLayoutEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE, DURATION, TRIGGER_IN, reducedMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type EditorialPhotoProps = Omit<ImageProps, "alt"> & {
  alt: string;
  /** Aspect ratio CSS value, e.g. "3/4" or "16/9" */
  ratio?: string;
  /** Disable the clip-path reveal (useful during development) */
  staticReveal?: boolean;
  wrapperClassName?: string;
};

/**
 * Photograph wrapped with a clip-path reveal + gentle scale on scroll-in.
 * Mirrors the Lando image treatment — inset(0 0 100% 0) → inset(0 0 0 0),
 * image scales 1.1 → 1.0 over 1.2s with Lando ease.
 */
export function EditorialPhoto({
  alt,
  ratio = "3/4",
  staticReveal = false,
  wrapperClassName,
  className,
  ...imgProps
}: EditorialPhotoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (staticReveal) return;
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const mm = reducedMotionSafe(() => {
      gsap.set(wrap, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(inner, { scale: 1.1 });

      ScrollTrigger.create({
        trigger: wrap,
        start: TRIGGER_IN.start,
        once: true,
        onEnter: () => {
          gsap.to(wrap, {
            clipPath: "inset(0 0 0% 0)",
            duration: DURATION.image,
            ease: EASE.landoGsap,
          });
          gsap.to(inner, {
            scale: 1,
            duration: DURATION.image,
            ease: EASE.landoGsap,
          });
        },
      });
    }, wrap);

    return () => mm.revert();
  }, [staticReveal]);

  return (
    <div
      ref={wrapRef}
      className={cn("relative overflow-hidden will-change-[clip-path]", wrapperClassName)}
      style={{ aspectRatio: ratio }}
    >
      <div ref={innerRef} className="absolute inset-0 will-change-transform">
        <Image
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn("object-cover", className)}
          {...imgProps}
        />
      </div>
    </div>
  );
}
