"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Career Counseling",
    description: "Expert guidance to identify your ideal study path and career goals aligned with global opportunities.",
    cta: "/services",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80", // UK building
    accent: "#f59e0b",
  },
  {
    number: "02",
    title: "University Selection",
    description: "Match your profile with the best universities worldwide — ranked, filtered, and perfect for you.",
    cta: "/universities",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80", // university
    accent: "#60a5fa",
  },
  {
    number: "03",
    title: "Application Assistance",
    description: "End-to-end support for university applications, SOPs, LORs, and all documentation.",
    cta: "/services",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80", // documents
    accent: "#34d399",
  },
  {
    number: "04",
    title: "Visa Support",
    description: "Complete visa processing, mock interviews, and preparation to ensure a smooth approval.",
    cta: "/services",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80", // travel/airport
    accent: "#a78bfa",
  },
  {
    number: "05",
    title: "Scholarship Guidance",
    description: "Discover and apply for scholarships and financial aid that make your dream affordable.",
    cta: "/services",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80", // money/scholarship
    accent: "#fb923c",
  },
  {
    number: "06",
    title: "Test Preparation",
    description: "Resources and expert guidance for IELTS, TOEFL, GRE, GMAT, and more standardized tests.",
    cta: "/services",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80", // studying
    accent: "#f472b6",
  },
];

function ServicePanel({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: (typeof services)[0];
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  // Each panel occupies 1/total of the scroll range
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  // Image: slides down from -15% to 0% as panel enters, then stays
  const imageY = useTransform(
    scrollYProgress,
    [start, start + (end - start) * 0.4],
    ["-18%", "0%"]
  );

  // Text: fades + slides in from right as panel reaches mid
  const textOpacity = useTransform(scrollYProgress, [start + 0.02, mid], [0, 1]);
  const textX = useTransform(scrollYProgress, [start + 0.02, mid], [60, 0]);

  // Panel itself fades out as next panel takes over
  const panelOpacity = useTransform(
    scrollYProgress,
    [end - 0.05, end],
    [1, index === total - 1 ? 1 : 0]
  );

  return (
    <motion.div
      style={{ opacity: panelOpacity }}
      className="absolute inset-0"
    >
      {/* Full-bleed background image sliding in from top */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020818]/95 via-[#020818]/70 to-[#020818]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, x: textX }}
        className="absolute inset-0 flex items-center"
      >
        <div className="px-8 md:px-16 lg:px-24 max-w-2xl">
          {/* Number */}
          <p
            className="text-7xl md:text-9xl font-black leading-none mb-4 select-none"
            style={{ color: service.accent, opacity: 0.15 }}
          >
            {service.number}
          </p>

          {/* Label */}
          <p
            className="text-xs font-bold tracking-[0.35em] uppercase mb-3"
            style={{ color: service.accent }}
          >
            Our Services
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white/60 max-w-md mb-8 leading-relaxed">
            {service.description}
          </p>

          {/* CTA */}
          <Link
            href={service.cta}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-black text-sm transition-all hover:scale-105"
            style={{ background: service.accent }}
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </motion.div>

      {/* Service number indicator — right side */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 text-right hidden md:block">
        <p className="text-xs text-white/20 tracking-widest uppercase mb-2">
          {index + 1} / {total}
        </p>
        <p
          className="text-6xl font-black"
          style={{ color: service.accent, opacity: 0.3 }}
        >
          {service.number}
        </p>
      </div>
    </motion.div>
  );
}

export function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = services.length;

  // Progress dots
  const activeIndex = useTransform(
    scrollYProgress,
    services.map((_, i) => i / total + 0.5 / total),
    services.map((_, i) => i)
  );

  return (
    <div
      ref={containerRef}
      style={{ height: `${total * 100}vh` }}
      className="relative"
    >
      {/* Section label — top */}
      <div className="sticky top-0 z-30 pointer-events-none">
        <div className="px-8 pt-6">
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-amber-400 opacity-70">
            What We Offer
          </p>
        </div>
      </div>

      {/* Sticky screen */}
      <div className="sticky top-0 w-full h-screen overflow-hidden -mt-8">
        {services.map((service, index) => (
          <ServicePanel
            key={service.number}
            service={service}
            index={index}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                background: service.accent,
                width: useTransform(
                  scrollYProgress,
                  [i / total, (i + 0.5) / total, (i + 1) / total],
                  [8, 28, 8]
                ) as any,
                opacity: useTransform(
                  scrollYProgress,
                  [i / total, (i + 0.5) / total, (i + 1) / total],
                  [0.3, 1, 0.3]
                ) as any,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
