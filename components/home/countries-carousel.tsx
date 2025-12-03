"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Country {
  name: string;
  flag: string;
  description: string;
  href: string;
}

interface CountriesCarouselProps {
  countries: Country[];
}

// Country image mapping
const countryImages: Record<string, string> = {
  "United States": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
  "United Kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  "Canada": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
  "Australia": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
  "Germany": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
  "Ireland": "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80",
  "New Zealand": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
};

export function CountriesCarousel({ countries }: CountriesCarouselProps) {
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
  }, [countries]);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 280; // Card width (256px) + gap (24px)
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
    <div className="relative max-w-6xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        disabled={isAtStart}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
          isAtStart
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-gray-50 hover:shadow-xl'
        }`}
        aria-label="Previous countries"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Countries Carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 pb-2">
          {countries.map((country) => (
            <div key={country.name} className="flex-shrink-0 w-64">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* Country Image */}
                <div className="relative h-40 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                  <img
                    src={countryImages[country.name] || countryImages["United States"]}
                    alt={country.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-white">
                      <span className="text-2xl">{country.flag}</span>
                    </div>
                  </div>
                </div>

                {/* Country Info */}
                <div className="p-4 text-center pt-8">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{country.name}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{country.description}</p>
                  <Link
                    href={country.href}
                    className="inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        disabled={isAtEnd}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
          isAtEnd
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-gray-50 hover:shadow-xl'
        }`}
        aria-label="Next countries"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
