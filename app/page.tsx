import Link from "next/link";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SuccessStorySection } from "@/components/home/success-story-section";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { CountriesCarousel } from "@/components/home/countries-carousel";
import { ServicesCarousel } from "@/components/home/services-carousel";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Historic institutions and cutting-edge research",
    href: "/countries/uk"
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    description: "Innovative programs in a vibrant lifestyle",
    href: "/countries/australia"
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    description: "World-class education in stunning landscapes",
    href: "/countries/new-zealand"
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    description: "Friendly environment with global connections",
    href: "/countries/ireland"
  },
  {
    name: "United States",
    flag: "🇺🇸",
    description: "World-class education with diverse opportunities",
    href: "/countries/usa"
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    description: "Quality education with post-study work options",
    href: "/countries/canada"
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    description: "Affordable quality education and research excellence",
    href: "/countries/germany"
  },
  {
    name: "France",
    flag: "🇫🇷",
    description: "Rich culture and prestigious academic institutions",
    href: "/countries/france"
  },
  {
    name: "Dubai",
    flag: "🇦🇪",
    description: "Modern education hub with global opportunities",
    href: "/countries/dubai"
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    description: "Affordable education with multicultural experience",
    href: "/countries/malaysia"
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    description: "World-class education in Asia's education hub",
    href: "/countries/singapore"
  },
  {
    name: "Mauritius",
    flag: "🇲🇺",
    description: "Emerging education destination with tropical charm",
    href: "/countries/mauritius"
  },
];

const services = [
  {
    title: "Career Counseling",
    description: "Expert guidance to identify your ideal study path and career goals.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    title: "University Selection",
    description: "Match your profile with the best universities worldwide.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  },
  {
    title: "Application Assistance",
    description: "End-to-end support for university applications and documentation.",
    icon: "FileCheck",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    title: "Visa Support",
    description: "Complete visa processing and interview preparation assistance.",
    icon: "CheckCircle",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    title: "Scholarship Guidance",
    description: "Help finding and applying for scholarships and financial aid.",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
  },
  {
    title: "Test Preparation",
    description: "Resources and guidance for IELTS, TOEFL, GRE, GMAT, and more.",
    icon: "BookOpen",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
];

const instagramReels = [
  {
    id: "1",
    thumbnail: "/images/reels/reel1.jpg", // Replace with your downloaded thumbnail
    studentName: "Success Story",
    university: "Dream University",
    country: "🌎 Global",
    instagramUrl: "https://www.instagram.com/reel/DPwBvBXD7NB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    overlayColor: "from-purple-500/80 to-pink-500/80",
  },
  {
    id: "2",
    thumbnail: "/images/reels/reel2.jpg", // Replace with your downloaded thumbnail
    studentName: "Student Journey",
    university: "Top University",
    country: "🎓 Study Abroad",
    instagramUrl: "https://www.instagram.com/reel/DNavzAqP-YO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    overlayColor: "from-blue-500/80 to-cyan-500/80",
  },
  {
    id: "3",
    thumbnail: "/images/reels/reel3.jpg", // Replace with your downloaded thumbnail
    studentName: "Achievement Story",
    university: "International Campus",
    country: "🌟 Success",
    instagramUrl: "https://www.instagram.com/reel/DLsB3JnP2Ox/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    overlayColor: "from-emerald-500/80 to-teal-500/80",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Cinematic Hero Section - Video-Style Animation */}
      <CinematicHero />

      {/* Our Services - Carousel Style */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 border-t border-gray-100">
        <div className="text-center mb-8 px-6 lg:px-8">
          <p className="text-sm font-semibold text-indigo-600 mb-2">Our Services</p>
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Comprehensive Study Abroad Support
          </h2>
          <h3 className="text-2xl font-bold text-indigo-700">
            Everything You Need for Success
          </h3>
        </div>

        <ServicesCarousel services={services} />
      </section>

      {/* Compact Stats - Integrated */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Stat 1 - Years of Experience */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#EEF2FF"/>
                  <path d="M32 16L35 22L42 23L37 28L38 35L32 32L26 35L27 28L22 23L29 22L32 16Z" fill="#4F46E5"/>
                  <circle cx="20" cy="20" r="3" fill="#6366F1"/>
                  <circle cx="44" cy="20" r="3" fill="#6366F1"/>
                  <circle cx="32" cy="44" r="3" fill="#6366F1"/>
                  <path d="M32 10C32 10 28 12 28 16C28 20 32 22 32 22C32 22 36 20 36 16C36 12 32 10 32 10Z" fill="#818CF8"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-indigo-600">10+</div>
                <p className="text-xs text-gray-600 leading-tight">Years of<br/>Experience</p>
              </div>
            </div>

            {/* Stat 2 - Countries */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#F0FDF4"/>
                  <circle cx="32" cy="32" r="18" fill="none" stroke="#10B981" strokeWidth="2"/>
                  <ellipse cx="32" cy="32" rx="18" ry="8" fill="none" stroke="#10B981" strokeWidth="2"/>
                  <path d="M32 14 Q 38 32 32 50" stroke="#10B981" strokeWidth="2" fill="none"/>
                  <path d="M32 14 Q 26 32 32 50" stroke="#10B981" strokeWidth="2" fill="none"/>
                  <line x1="14" y1="32" x2="50" y2="32" stroke="#10B981" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="3" fill="#059669"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-green-600">30+</div>
                <p className="text-xs text-gray-600 leading-tight">Countries</p>
              </div>
            </div>

            {/* Stat 3 - Universities */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#FEF3C7"/>
                  <rect x="20" y="35" width="24" height="15" fill="#D97706"/>
                  <rect x="22" y="37" width="4" height="5" fill="#FCD34D"/>
                  <rect x="30" y="37" width="4" height="5" fill="#FCD34D"/>
                  <rect x="38" y="37" width="4" height="5" fill="#FCD34D"/>
                  <path d="M32 18L46 26L32 34L18 26L32 18Z" fill="#F59E0B"/>
                  <rect x="31" y="34" width="2" height="8" fill="#B45309"/>
                  <circle cx="32" cy="42" r="1.5" fill="#92400E"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-amber-600">500+</div>
                <p className="text-xs text-gray-600 leading-tight">Universities</p>
              </div>
            </div>

            {/* Stat 4 - Students */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#EDE9FE"/>
                  <circle cx="32" cy="24" r="6" fill="#9333EA"/>
                  <path d="M32 32C26 32 21 36 21 41V45H43V41C43 36 38 32 32 32Z" fill="#A855F7"/>
                  <circle cx="22" cy="26" r="4" fill="#C084FC"/>
                  <circle cx="42" cy="26" r="4" fill="#C084FC"/>
                  <path d="M18 46C18 42 20 38 24 38H40C44 38 46 42 46 46" fill="#D8B4FE" opacity="0.6"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-purple-600">5000+</div>
                <p className="text-xs text-gray-600 leading-tight">Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations - Carousel Style */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="text-center mb-8 px-6 lg:px-8">
          <p className="text-sm font-semibold text-indigo-600 mb-2">Countries</p>
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Choose Your Country: Plan Your Study Abroad Journey
          </h2>
          <h3 className="text-2xl font-bold text-indigo-700">
            Latest Featured Countries
          </h3>
        </div>

        <CountriesCarousel countries={countries} />
      </section>

      {/* Partnering Universities Section - Auto Scrolling */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 overflow-hidden">
        <div className="text-center mb-6 px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Choose the Right University for a Better Future
          </h2>
          <h3 className="text-2xl font-bold text-indigo-700">
            Our partnering universities
          </h3>
        </div>

        {/* Auto-scrolling University Logos */}
        <div className="relative">
          <div className="flex overflow-hidden bg-white py-6">
              <div className="flex gap-16 items-center university-scroll">
                {/* First set of logos */}
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni1.png" alt="University of Leicester" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni2.png" alt="University of Northampton" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni3.png" alt="Riga Technical University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni4.png" alt="Turiba University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni5.png" alt="University of Leicester" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni6.png" alt="De Montfort University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni7.png" alt="Coventry University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni8.png" alt="University of the West of Scotland" className="max-h-full max-w-full object-contain university-logo" />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni1.png" alt="University of Leicester" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni2.png" alt="University of Northampton" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni3.png" alt="Riga Technical University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni4.png" alt="Turiba University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni5.png" alt="University of Leicester" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni6.png" alt="De Montfort University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni7.png" alt="Coventry University" className="max-h-full max-w-full object-contain university-logo" />
                </div>
                <div className="h-20 w-32 flex items-center justify-center flex-shrink-0">
                  <img src="/images/universties/uni8.png" alt="University of the West of Scotland" className="max-h-full max-w-full object-contain university-logo" />
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Success Story / Our Journey Section */}
      <SuccessStorySection />

      {/* Testimonials - Instagram Reels Style */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.03),transparent_50%)]" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 mb-3 shadow-sm">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Watch Their Journey
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Real stories from students who made it happen
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
            {instagramReels.map((reel) => (
              <a
                key={reel.id}
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Thumbnail Image */}
                <img
                  src={reel.thumbnail}
                  alt={`${reel.studentName} at ${reel.university}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Instagram Reel Icon */}
                <div className="absolute top-4 right-4 z-20">
                  <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-2 4l6 4-6 4V8z"/>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-white font-black text-2xl mb-1 drop-shadow-lg leading-tight">
                    {reel.studentName}
                  </h3>
                  <p className="text-white/95 font-bold text-sm mb-1 drop-shadow-md">
                    {reel.university}
                  </p>
                  <p className="text-white/90 font-semibold text-xs drop-shadow-md">
                    {reel.country}
                  </p>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Study Abroad Updates - YouTube Videos */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-indigo-600 mb-2">Updates</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Study Abroad Updates
            </h2>
          </div>

          {/* Subheading */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-indigo-700">
              Promising a safe and hassle free study abroad experience
            </h3>
          </div>

          {/* YouTube Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Video 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jOz6OvFmA-k"
                title="Study Abroad Update 1"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5qeVVl2U1XY"
                title="Study Abroad Update 2"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/n1VoJQaLFG0"
                title="Study Abroad Update 3"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Glassmorphic Banner */}
      <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="glass-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Start Your Journey</span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="mt-3 text-base text-gray-300 max-w-2xl mx-auto">
                  Book a free consultation with our expert counselors today and take the first step towards your global education.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group" asChild>
                    <Link href="/contact">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-black hover:text-white transition-all" asChild>
                    <Link href="/universities">
                      Browse Universities
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
