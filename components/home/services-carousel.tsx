"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Users, Globe, FileCheck, CheckCircle, Award, BookOpen } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

// Icon mapping
const iconMap = {
  Users,
  Globe,
  FileCheck,
  CheckCircle,
  Award,
  BookOpen,
};

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (carouselRef.current) {
        setMaxScroll(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
      }
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, [services]);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 400; // Card width (352px) + gap (48px)
    const currentScroll = carouselRef.current.scrollLeft;
    const newPosition = direction === "left"
      ? currentScroll - scrollAmount
      : currentScroll + scrollAmount;

    const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll));

    carouselRef.current.scrollTo({
      left: clampedPosition,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  const isAtStart = scrollPosition <= 5;
  const isAtEnd = scrollPosition >= maxScroll - 5;

  return (
    <div className="relative">
      {/* Left Arrow - At container edge */}
      {!isAtStart && (
        <button
          onClick={() => scroll("left")}
          className="flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl items-center justify-center hover:bg-gray-50 transition-all"
          aria-label="Previous services"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Services Carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide px-4 sm:px-6 lg:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 pb-2">
          {services.map((service) => {
            return (
              <div key={service.title} className="flex-shrink-0 w-[352px]">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
                  {/* Service Illustration with Character */}
                  <div className="mb-6 rounded-xl overflow-hidden h-48 relative" style={{
                    background: service.icon === 'Users' ? 'linear-gradient(to bottom right, #EEF2FF, #E0E7FF)' :
                                service.icon === 'Globe' ? 'linear-gradient(to bottom right, #DBEAFE, #BFDBFE)' :
                                service.icon === 'FileCheck' ? 'linear-gradient(to bottom right, #F3E8FF, #E9D5FF)' :
                                service.icon === 'CheckCircle' ? 'linear-gradient(to bottom right, #D1FAE5, #A7F3D0)' :
                                service.icon === 'Award' ? 'linear-gradient(to bottom right, #FEF3C7, #FDE68A)' :
                                'linear-gradient(to bottom right, #FCE7F3, #FBCFE8)'
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Service Info */}
                  <h3 className="font-bold text-xl mb-3 text-center text-black">{service.title}</h3>
                  <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center gap-3 text-sm">
                    <Link
                      href="/services"
                      className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                    >
                      Learn More
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Arrow - At container edge */}
      {!isAtEnd && (
        <button
          onClick={() => scroll("right")}
          className="flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl items-center justify-center hover:bg-gray-50 transition-all"
          aria-label="Next services"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
