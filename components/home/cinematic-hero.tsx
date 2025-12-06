"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";

// ========== EDITABLE DATA ==========
const PLACEHOLDER_IMAGES = {
  students: [
    "/images/students/student1.webp",
    "/images/students/student2.webp",
    "/images/students/student3.webp",
    "/images/students/student4.webp",
    "/images/students/student5.webp",
    "/images/students/student6.webp",
  ],
};

const TEXTS = {
  question: ["Are", "you", "confused", "about", "studying", "abroad?"],
  intro1: "WE GUIDE YOU",
  intro2: "THROUGH EVERY STEP",
  stat: "100% Visa Success",
  hero: "Your Dream is Closer Than You Think",
  cta: "Start Your Journey",
};

const STATS_INFO = [
  { number: "10+", label: "Years of Experience", icon: "📅" },
  { number: "5000+", label: "Enrolled Students", icon: "👨‍🎓" },
  { number: "500+", label: "Universities", icon: "🎓" },
  { number: "2500+", label: "Courses", icon: "📚" },
];

const COLORS = {
  primary: "#1a3688",
  background: "#ffffff",
  grid: "#e5e7eb",
};

// ========== COMPONENT ==========
export function CinematicHero() {
  const [scene, setScene] = useState(0);
  const [count, setCount] = useState(0);
  const [questionWordIndex, setQuestionWordIndex] = useState(0);
  const [showMainText, setShowMainText] = useState(false);

  // Minimal preload for memory optimization (reduced to 3 images)
  useEffect(() => {
    const imagesToPreload = [
      ...PLACEHOLDER_IMAGES.students.slice(0, 3), // Only first 3 students (reduced from 6)
    ];

    // Preload only visible images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // No video preloading - videos load on-demand to save ~50MB memory
  }, []);

  // Question word animation for Scene 0
  useEffect(() => {
    if (scene === 0) {
      if (questionWordIndex < TEXTS.question.length) {
        // Show each word for 500ms (0.5 seconds)
        const wordTimer = setTimeout(() => {
          setQuestionWordIndex(questionWordIndex + 1);
        }, 500);
        return () => clearTimeout(wordTimer);
      } else if (!showMainText) {
        // After all question words, show main text
        const mainTextTimer = setTimeout(() => {
          setShowMainText(true);
        }, 500);
        return () => clearTimeout(mainTextTimer);
      }
    } else {
      // Reset for next time Scene 0 appears
      setQuestionWordIndex(0);
      setShowMainText(false);
    }
  }, [scene, questionWordIndex, showMainText]);

  useEffect(() => {
    // Auto-cycle through scenes
    const sceneTimer = setTimeout(() => {
      if (scene < 4) {
        setScene(scene + 1);
      } else {
        // Loop back to start
        setScene(0);
      }
    }, scene === 0 ? 7000 : scene === 1 ? 7000 : 6000); // Scene 0: 7s, Scene 1: 7s (extra time for 100% message), others: 6s

    return () => clearTimeout(sceneTimer);
  }, [scene]);

  // Count-up animation for statistics
  useEffect(() => {
    if (scene === 1 && count < 100) {
      const countTimer = setTimeout(() => {
        setCount(count + 2);
      }, 30);
      return () => clearTimeout(countTimer);
    }
    if (scene !== 1) setCount(0);
  }, [scene, count]);

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-white">
      {/* Animated World Map Background - Your Custom SVG */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-0 overflow-hidden"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200vw',
            height: '100%',
            backgroundImage: `url('/images/worldmap/68624446_sl_070722_51460_26.svg')`,
            backgroundSize: 'auto 100%',
            backgroundPosition: '0 center',
            backgroundRepeat: 'repeat-x',
            animation: 'scroll-bg 120s linear infinite',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes scroll-bg {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <AnimatePresence mode="wait">
        {/* Scene 0: Question then Kinetic Intro */}
        {scene === 0 && (
          <motion.div
            key="scene0"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center space-y-8">
              {!showMainText ? (
                // Question word-by-word - no animation, just text change
                <>
                  {questionWordIndex > 0 && questionWordIndex <= TEXTS.question.length && (
                    <h1
                      className="text-7xl md:text-9xl lg:text-[10rem] font-black"
                      style={{ color: COLORS.primary }}
                    >
                      {TEXTS.question[questionWordIndex - 1]}
                    </h1>
                  )}
                </>
              ) : (
                // Main text after question
                <>
                  <motion.h1
                    className="text-7xl md:text-9xl font-black tracking-tight"
                    style={{ color: COLORS.primary }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {TEXTS.intro1.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-6"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.h2
                    className="text-5xl md:text-7xl font-bold text-gray-700"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {TEXTS.intro2}
                  </motion.h2>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Scene 1: Moving Deck with Statistics */}
        {scene === 1 && (
          <motion.div
            key="scene1"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Scrolling Cards - Show all 8 students */}
            <div className="absolute inset-0 flex items-center overflow-hidden py-8">
              <motion.div
                className="flex gap-8"
                animate={{ x: [0, -2560] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {PLACEHOLDER_IMAGES.students.map((img, i) => {
                  const statIndex = i % STATS_INFO.length;
                  const stat = STATS_INFO[statIndex];
                  return (
                    <div key={i} className="flex-shrink-0 w-80">
                      {/* Image - High quality */}
                      <div className="h-[480px] overflow-hidden relative rounded-2xl shadow-2xl mb-6">
                        <NextImage
                          src={img}
                          alt={`Student ${i}`}
                          fill
                          className="object-cover"
                          priority={i < 3}
                          sizes="320px"
                          quality={90}
                        />
                      </div>

                      {/* Stat Info Below Image - Simplified */}
                      <div className="text-center">
                        <div className="text-4xl mb-3">{stat.icon}</div>
                        <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                        <p className="text-base font-semibold text-gray-700">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Stat Overlay with Blur - Appears after 4 seconds */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-8xl md:text-9xl font-black text-white mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 4.5, duration: 0.8 }}
                >
                  {count}%
                </motion.div>
                <motion.p
                  className="text-3xl md:text-4xl font-bold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 5 }}
                >
                  {TEXTS.stat}
                </motion.p>
                <motion.p
                  className="text-lg text-white/80 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.5 }}
                >
                  Join 5000+ successful students
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Scene 2: Large Images with Sequential Dialogue */}
        {scene === 2 && (
          <motion.div
            key="scene2"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Dialogue 1: "Choose Your Dream Country" with Video - 0-2s */}
            <AnimatePresence>
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, times: [0, 0.1, 0.9, 1] }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover md:object-contain"
                  >
                    <source src="/videos/University_Choice_Background_Video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center px-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                      Choose Your Dream Country
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                      UK, USA, Canada, Australia & more...
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dialogue 2: "Find Your Perfect University" with Video - 2-4s */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 4, times: [0, 0.5, 0.6, 0.9, 1] }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover md:object-contain"
                >
                  <source src="/videos/Website_Banner_Video_Creation.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center px-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: [0, 0, 1, 1, 0] }}
                  transition={{ duration: 4, times: [0, 0.5, 0.6, 0.9, 1] }}
                >
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                    Find Your Perfect University
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                    500+ top-ranked universities worldwide
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Dialogue 3: "Achieve Your Dreams" - 4-6s */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 1, 1] }}
              transition={{ duration: 6, times: [0, 0.6, 0.7, 0.8, 1] }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover md:object-contain"
                >
                  <source src="/videos/Graduation_Video_for_Study_Abroad.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center px-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: [0, 0, 0, 1, 1] }}
                  transition={{ duration: 6, times: [0, 0.6, 0.7, 0.8, 1] }}
                >
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                    Achieve Your Dreams! 🎓
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                    Join thousands of successful graduates
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Scene 3: Team Members - Large Pairs Side by Side */}
        {scene === 3 && (
          <motion.div
            key="scene3"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Pair 1: Team Members 1 & 2 (0-2s) */}
            <motion.div
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-6 md:px-12 py-8 md:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 6, times: [0, 0.1, 0.3, 0.35] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full md:w-[54%] max-w-2xl h-[40vh] md:h-[70vh]">
                <img src="/team/team1.webp" alt="Team Member" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6">
                  <p className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-lg">Guiding Your Dreams</p>
                  <p className="text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md mt-1 md:mt-2">With expertise & care</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full md:w-[36%] max-w-md h-[40vh] md:h-[70vh]">
                <img src="/team/team2.webp" alt="Team Member" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6">
                  <p className="text-lg md:text-xl lg:text-2xl font-black text-white drop-shadow-lg">Supporting Your Journey</p>
                  <p className="text-xs md:text-sm lg:text-base text-white/90 drop-shadow-md mt-1 md:mt-2">Every step of the way</p>
                </div>
              </div>
            </motion.div>

            {/* Pair 2: Team Members 3 & 4 (2-4s) */}
            <motion.div
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-6 md:px-12 py-8 md:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 6, times: [0, 0.33, 0.4, 0.63, 0.68] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full md:w-[36%] max-w-md h-[40vh] md:h-[70vh]">
                <img src="/team/team3.webp" alt="Team Member" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6">
                  <p className="text-lg md:text-xl lg:text-2xl font-black text-white drop-shadow-lg">Building Your Future</p>
                  <p className="text-xs md:text-sm lg:text-base text-white/90 drop-shadow-md mt-1 md:mt-2">With dedication</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full md:w-[54%] max-w-2xl h-[40vh] md:h-[70vh]">
                <img src="/team/team4.webp" alt="Team Member" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6">
                  <p className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-lg">Empowering Success</p>
                  <p className="text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md mt-1 md:mt-2">Through knowledge</p>
                </div>
              </div>
            </motion.div>

            {/* Pair 3: Team Members 5 & 6 (4-6s) */}
            <motion.div
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-6 md:px-12 py-8 md:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 1, 1] }}
              transition={{ duration: 6, times: [0, 0.66, 0.73, 0.8, 1] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full md:w-[54%] max-w-2xl h-[40vh] md:h-[70vh]">
                <img src="/team/team5.webp" alt="Team Member" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6">
                  <p className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-lg">Achieving Together</p>
                  <p className="text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md mt-1 md:mt-2">As a team</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full md:w-[36%] max-w-md h-[40vh] md:h-[70vh]">
                <img src="/team/team6.webp" alt="Team Member" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6">
                  <p className="text-lg md:text-xl lg:text-2xl font-black text-white drop-shadow-lg">Your Success Partners</p>
                  <p className="text-xs md:text-sm lg:text-base text-white/90 drop-shadow-md mt-1 md:mt-2">Always here for you</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}

        {/* Scene 4: Branding / CTA */}
        {scene === 4 && (
          <motion.div
            key="scene4"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center space-y-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1
                className="text-6xl md:text-8xl font-black"
                style={{ color: COLORS.primary }}
              >
                AimBritz
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-semibold">
                Study Abroad Consultancy
              </p>

              <Button
                size="lg"
                className="mt-8 text-xl px-12 py-6 rounded-full"
                style={{ backgroundColor: COLORS.primary }}
              >
                {TEXTS.cta}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
