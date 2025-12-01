import Link from "next/link";
import { ArrowRight, Globe, Users, Award, CheckCircle, BookOpen, FileCheck, Plane, Sparkles, GraduationCap, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsSection } from "@/components/home/stats-section";
import { SuccessStorySection } from "@/components/home/success-story-section";
import { FAQSection } from "@/components/home/faq-section";
import { CinematicHero } from "@/components/home/cinematic-hero";

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    universities: "200+",
    description: "World-class education with diverse opportunities",
    href: "/countries/usa"
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+",
    description: "Historic institutions and cutting-edge research",
    href: "/countries/uk"
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    universities: "100+",
    description: "Quality education with post-study work options",
    href: "/countries/canada"
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    universities: "80+",
    description: "Innovative programs in a vibrant lifestyle",
    href: "/countries/australia"
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    universities: "90+",
    description: "Affordable quality education and research excellence",
    href: "/countries/germany"
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    universities: "40+",
    description: "Friendly environment with global connections",
    href: "/countries/ireland"
  },
];

const steps = [
  {
    title: "Free Consultation",
    description: "Discuss your goals with our expert counselors",
    icon: Users,
  },
  {
    title: "University Selection",
    description: "Find the perfect match for your profile",
    icon: BookOpen,
  },
  {
    title: "Application Support",
    description: "Complete guidance through the application process",
    icon: FileCheck,
  },
  {
    title: "Visa Assistance",
    description: "Expert help with visa documentation and interview prep",
    icon: Plane,
  },
];

const services = [
  {
    title: "Career Counseling",
    description: "Expert guidance to identify your ideal study path and career goals.",
    icon: Users,
  },
  {
    title: "University Selection",
    description: "Match your profile with the best universities worldwide.",
    icon: Globe,
  },
  {
    title: "Application Assistance",
    description: "End-to-end support for university applications and documentation.",
    icon: FileCheck,
  },
  {
    title: "Visa Support",
    description: "Complete visa processing and interview preparation assistance.",
    icon: CheckCircle,
  },
  {
    title: "Scholarship Guidance",
    description: "Help finding and applying for scholarships and financial aid.",
    icon: Award,
  },
  {
    title: "Test Preparation",
    description: "Resources and guidance for IELTS, TOEFL, GRE, GMAT, and more.",
    icon: BookOpen,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "USA",
    university: "Stanford University",
    content: "AimBritz made my dream of studying at Stanford a reality. Their guidance was invaluable throughout the entire process.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    country: "UK",
    university: "University of Oxford",
    content: "The team's expertise in visa processing and application support was exceptional. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Chen",
    country: "Canada",
    university: "University of Toronto",
    content: "Professional, knowledgeable, and always available to answer questions. Got my visa on the first try!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Cinematic Hero Section - Video-Style Animation */}
      <CinematicHero />

      {/* Popular Destinations */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-black/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 mb-6 shadow-sm">
              <Globe2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Study Destinations</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Popular Study Destinations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore world-class education opportunities across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <Link key={country.name} href={country.href}>
                <Card className="h-full glass-card border-2 border-black/5 hover:border-black/20 hover:shadow-2xl transition-all hover:scale-105 group relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <CardHeader className="relative z-10">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">{country.flag}</div>
                    <CardTitle className="text-2xl group-hover:text-black transition-colors">{country.name}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      <span className="inline-flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        {country.universities} Universities
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-gray-600">{country.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="glass-card border-2 border-black/20 hover:border-black hover:bg-black hover:text-white transition-all shadow-lg" asChild>
              <Link href="/countries">
                View All Countries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section with Animated Counters */}
      <StatsSection />

      {/* How It Works - Timeline Style */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.03),transparent_50%)]" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 mb-6 shadow-sm">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Simple Process</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your journey to studying abroad in four simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="relative group">
                  {/* Connection line (hidden on mobile, shown on larger screens) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-full h-0.5 bg-gradient-to-r from-black/20 to-transparent" />
                  )}

                  <div className="relative glass-card rounded-2xl p-6 border-2 border-black/5 hover:border-black/20 transition-all hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col items-center text-center">
                      {/* Step number badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-800 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <step.icon className="h-8 w-8" />
                      </div>

                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-black/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 mb-6 shadow-sm">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Comprehensive Support
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="glass-card border-2 border-black/5 hover:border-black/20 hover:shadow-xl transition-all group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/5 group-hover:bg-black/10 transition-colors mb-4">
                    <service.icon className="h-7 w-7 text-black" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-black transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Story / Our Journey Section */}
      <SuccessStorySection />

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.03),transparent_50%)]" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 mb-6 shadow-sm">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from students who achieved their dreams with AimBritz
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="glass-card border-2 border-black/5 hover:border-black/20 hover:shadow-xl transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-1 text-yellow-500 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg font-bold">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {testimonial.university} • {testimonial.country}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section with Glassmorphic Banner */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="glass-dark rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Start Your Journey</span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                  Book a free consultation with our expert counselors today and take the first step towards your global education.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group" asChild>
                    <Link href="/contact">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white/30 hover:bg-white/10 transition-all" asChild>
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
