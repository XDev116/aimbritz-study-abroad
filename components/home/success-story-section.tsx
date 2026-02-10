"use client";

import { Award, Heart, TrendingUp, Users2, Sparkles, GraduationCap, Globe2, Rocket } from "lucide-react";

const milestones = [
  {
    icon: Users2,
    title: "Student-First Approach",
    description:
      "Every decision we make is centered around one question: What's best for our students? This philosophy has guided us for over a decade.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    iconBg: "bg-blue-500",
    emoji: "👥"
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description:
      "Recognized as one of the leading study abroad consultancies, with a 98% visa success rate and countless success stories.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    iconBg: "bg-amber-500",
    emoji: "🏆"
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "From a small team to serving thousands of students across multiple countries, our growth reflects the trust placed in us.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-500",
    emoji: "📈"
  },
  {
    icon: Heart,
    title: "Lifelong Relationships",
    description:
      "We don't just help you get admitted - we build lasting relationships and support you throughout your academic journey and beyond.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    iconBg: "bg-pink-500",
    emoji: "❤️"
  },
];

const floatingImages = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80", alt: "Graduation", delay: 0 },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80", alt: "Campus", delay: 1 },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", alt: "Students", delay: 2 },
];

export function SuccessStorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full mb-6 border border-indigo-200">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Journey</span>
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            10 Years of Transforming Dreams into Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a passionate mission to a trusted global partner in education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Animated Story with Images */}
          <div className="space-y-8">
            {/* Floating Image Gallery */}
            <div className="relative h-80 rounded-3xl overflow-hidden">
              {floatingImages.map((img, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    animation: `float-image 6s ease-in-out infinite`,
                    animationDelay: `${img.delay}s`,
                    zIndex: floatingImages.length - idx
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-3">
                <div className="flex-1 backdrop-blur-xl bg-white/90 rounded-2xl p-4 border border-white/50 shadow-xl">
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">5000+</div>
                  <div className="text-xs font-semibold text-gray-700">Students Guided</div>
                </div>
                <div className="flex-1 backdrop-blur-xl bg-white/90 rounded-2xl p-4 border border-white/50 shadow-xl">
                  <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">50+</div>
                  <div className="text-xs font-semibold text-gray-700">Countries</div>
                </div>
                <div className="flex-1 backdrop-blur-xl bg-white/90 rounded-2xl p-4 border border-white/50 shadow-xl">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">270+</div>
                  <div className="text-xs font-semibold text-gray-700">Universities</div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                What started as a passionate mission to help students access world-class education has evolved into a <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">trusted name in study abroad consultancy</span>. Over the past decade, we've guided over <strong className="text-indigo-600">5,000 students</strong> to their dream universities.
              </p>
              <p className="text-lg">
                Our success isn't measured just in numbers, but in the <span className="font-bold text-pink-600">lives we've changed</span> - students who've returned as doctors, engineers, business leaders, and changemakers.
              </p>
            </div>

            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 px-6 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="text-3xl font-black text-white">98%</div>
                <div className="text-sm text-white/90 font-semibold">Visa Success Rate</div>
                <div className="absolute -right-2 -bottom-2 text-6xl opacity-20">✓</div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 px-6 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="text-3xl font-black text-white">4.9/5</div>
                <div className="text-sm text-white/90 font-semibold">Student Rating</div>
                <div className="absolute -right-2 -bottom-2 text-6xl opacity-20">⭐</div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 px-6 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-sm text-white/90 font-semibold">Commitment</div>
                <div className="absolute -right-2 -bottom-2 text-6xl opacity-20">💯</div>
              </div>
            </div>
          </div>

          {/* Right Column - Colorful Milestones */}
          <div className="space-y-5">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`${milestone.bgColor} p-6 rounded-2xl border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105 relative overflow-hidden`}
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Animated Emoji Background */}
                <div className="absolute -right-8 -top-8 text-8xl opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {milestone.emoji}
                </div>

                <div className="flex gap-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl ${milestone.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <milestone.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-black mb-2 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Vibrant */}
        <div className="relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative z-10 text-center p-12 rounded-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Rocket className="w-8 h-8 text-white animate-bounce" />
              <GraduationCap className="w-8 h-8 text-white animate-bounce" style={{ animationDelay: '0.1s' }} />
              <Globe2 className="w-8 h-8 text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              Join thousands of successful students who've achieved their study abroad dreams with AimBritz. Let's start your journey today! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-50 transition-all shadow-xl font-bold text-lg hover:scale-105"
              >
                📞 Book Free Consultation
              </a>
              <a
                href="tel:+919747277233"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white hover:text-indigo-600 transition-all font-bold text-lg hover:scale-105"
              >
                ☎️ Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-image {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.05); opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
