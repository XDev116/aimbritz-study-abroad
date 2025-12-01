"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Globe, School, Users } from "lucide-react";

interface Stat {
  id: string;
  name: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  {
    id: "experience",
    name: "Years of Excellence",
    value: 10,
    suffix: "+",
    icon: GraduationCap,
  },
  {
    id: "students",
    name: "Students Guided",
    value: 5000,
    suffix: "+",
    icon: Users,
  },
  {
    id: "countries",
    name: "Countries",
    value: 50,
    suffix: "+",
    icon: Globe,
  },
  {
    id: "universities",
    name: "Partner Universities",
    value: 270,
    suffix: "+",
    icon: School,
  },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of students worldwide to achieve their study abroad dreams
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="glass-card p-8 rounded-3xl border border-black/5 text-center hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/5 mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-black group-hover:text-white transition-colors" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
                <Counter end={stat.value} />
                {stat.suffix}
              </div>

              {/* Label */}
              <p className="text-sm md:text-base font-medium text-gray-600">
                {stat.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {/* Placeholder for partner logos - you can replace with actual images */}
            <div className="px-6 py-3 glass-card rounded-xl border border-black/5">
              <span className="text-sm font-bold text-gray-700">Top Universities</span>
            </div>
            <div className="px-6 py-3 glass-card rounded-xl border border-black/5">
              <span className="text-sm font-bold text-gray-700">Study Abroad Experts</span>
            </div>
            <div className="px-6 py-3 glass-card rounded-xl border border-black/5">
              <span className="text-sm font-bold text-gray-700">Verified Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
